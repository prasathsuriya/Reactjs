import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { getUsersList, saveUser, updateUserStatus } from "../../../store/actions/CreateUser";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Dropdown } from "primereact/dropdown";
import { Message } from "primereact/message";
import Password from "antd/lib/input/Password";
import { ScrollPanel } from "primereact/scrollpanel";
import { Calendar } from "primereact/calendar";
import { Growl } from "primereact/growl";
import { getRolesByTenant } from "../../../store/actions/Role";
import moment from "moment";
import { ProgressSpinner } from "primereact/progressspinner";
import { getCurrentUser } from "../../../store/selectors/Accounts";
interface Icreate {
  dispatch: Dispatch<any>;
  newUserData: any;
  props: RouteComponentProps;
  roleData:any;
}
const Users: React.FC<Icreate> = ({ dispatch, newUserData, props, roleData }) => {
  const intialforstate = {
    displayDialog: false
  };
  const [state, setState] = useState(intialforstate);  
  const userInputInit={
    id:0,
	first_name:"",
	middle_name:"",
	last_name:"",
	sex:"",
	Date : "",
	address1:"",
	address2:"",
	country:"",
	state:"",
	city:"",
	zipcode:"",
	emailId:"",
	mobileNumber:"",
  updatedBy:"",  
  dob: new Date(),
  roleDescription:""
  }

  const initialUserForm = {
    emailId: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    roleId: 0,
    userId: "",
    companyautoid: 0,
    roleDescription: ""
  }

  const [userInput, setInput]=useState(userInputInit);
  let [userDetails, setUserDetails] = useState();
  const loggedInString = localStorage.getItem("AUTHDATA");
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);    
    if (loggedInData) {
      initialUserForm.companyautoid =
        loggedInData.userProfile.roleFkId.companyAutoId.id;
    }
  }
  const [userData, setUserData] = useState();
  useEffect(() => {
    dispatch(getRolesByTenant(userForm.companyautoid));
    dispatch(getUsersList(initialUserForm.companyautoid));
    
    var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
          initialUserForm.companyautoid =curentUser.userProfile.roleFkId.companyAutoId.id;                 
        }
  }, []);

  const [roleList, setRoleList] = useState([]);
  if (roleData.items.length > 0 && roleList.length === 0) {
    console.log(roleData.items);
    setRoleList(roleData.items);
  }

  const [msgSeverity, setSeverity]=useState("success");    
    const [msgDescription, setDescriptiony]=useState("saved successfully");    
    
    function successMessage( key:string){     
        return <Message severity={msgSeverity} key={key} text={msgDescription} />
      }

  const [isPageLoaded, setPageLoaded] = useState(false);
  const [isShowActive, setShowActive] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isFormInvalid, setFormInvalid] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [userForm, setUser] = useState(initialUserForm);
  if (
    !isPageLoaded &&
    !newUserData.isListLoading 
  ) {
    var table = newUserData.userList;
    console.log(table);    
    if (table.length > 0) {
      table=table.filter(x=>x.id!==userData.userProfile.id);
      for (var i = 0; i < table.length; i++) {
      /*  table[i]["statusValue"] =
          table[i].userFkId.status === 1 ? "Active" : "InActive";
          */
      }
    }

    setTableData(table);
    setPageLoaded(true);
  }
  const[isAddPage, setIsAddPage]=useState(false);
  const[isEditPage, setIsEditPage]=useState(false);

  const showUserDialog = (items: any) => (e: any) => {
    console.log(e.data);
    setIsAddPage(false);    
    var dataAssign=e.data;
    if(!dataAssign.dob || dataAssign.dob==="" || dataAssign.dob===null){
      dataAssign.dob=new Date();
    }
    else{
      dataAssign.dob=new Date(dataAssign.dob);
    }
    dataAssign["roleDescription"]= {roleId: e.data.roleFkId.roleId,
      roleName: e.data.roleFkId.roleName,
      description: e.data.roleFkId.description};
    setUserDetails(dataAssign);
    setShowActive(true);
    if(e.data.userautoid.status=="Active"){      
      setIsReadOnly(false);
      setIsEditPage(true);
    }
    else{
      setIsReadOnly(true);
    }
    setState(items);
    setFormInvalid(true);
    setState({ displayDialog: true });
    
  };
  
  const handleCreate = () => {
  
    
    // setTimeout(() => {
      
    // setState({ displayDialog: true });
    // console.log(userDetails);
    // }, 1000);
    
    
  
    window.location.href = "/user/createuser";
  };

  const handleSubmit = (event) => {
    setSumbmited(true);
    if(isAddPage){
      checkValidation();
    if(isValid){     
      dispatch(saveUser(userForm));      
    }
    else{
      setFormInvalid(false);
    }
  }
  else{
    dispatch(saveUser(userDetails));
  }
    //dispatch(saveUser(userDetails));
  };

  const handleAddInputChange = (event: any) => {
    if (event.target.id === "emailIds") {
      if (!event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
        setEmailValid(false);
      }
      else
      setEmailValid(true);
      userForm.emailId = event.target.value;
    } else if (event.target.id === "firstNameId") {
      userForm.firstName = event.target.value;
    } else if (event.target.id === "lastNameId") {
      userForm.lastName = event.target.value;
    } else if (event.target.id === "mobileNumberId") {
      userForm.mobileNumber = event.target.value;
    } else if (event.target.id === "passwordIds") {
      userForm.password = event.target.value;
    } else if (event.target.id === "cPasswordId") {
      userForm.confirmPassword = event.target.value;
    } else if (event.target.id === "roleId") {
      userForm.roleDescription = event.target.value;
      userForm.roleId = event.target.value.roleId;
    }
    setUser({...userForm});
    
  };

  const handleInputChange =(event: any)=> {     
    const { name, value } = event.target;
    setUserDetails({...userDetails,  [name]: value});
    
  }

  const [isEmailValid, setEmailValid] = useState(false);

  const checkValidation=()=>{

    if((userForm.emailId!==null && userForm.emailId!=="" && isEmailValid===true)
    && (userForm.password===userForm.confirmPassword && userForm.password!==null && userForm.password!=="")
    &&(userForm.mobileNumber!==null && userForm.mobileNumber!=="")
    &&(userForm.roleDescription!==null && userForm.roleDescription!=="")
    &&(userForm.firstName!==null && userForm.firstName!=="")
    )
    {
      setValid(true);
    }
    else
    {
      setValid(false); 
    }

  }

  const [isValid, setValid] = useState(false);
  const [isSumbmit, setSumbmited] = useState(false);
  const [growl, setGrowl]=useState();
  const [showMessage, setShowMessage]=useState(false);

  if(!newUserData.isLoading && newUserData.isFormSubmit && isSumbmit){
    console.log(newUserData.status);
    if(newUserData.status && newUserData.status!==null){
      setDescriptiony(newUserData.status.displayMessage);
      if(newUserData.status.value ===true ){
        if(newUserData.status.code ===200){
        dispatch(getUsersList(initialUserForm.companyautoid));
        setState({ displayDialog: false });
        setSumbmited(false);
        setShowMessage(true);    
        setPageLoaded(false);  
        growl.show({severity: 'success', summary: 'Success', detail: newUserData.status.displayMessage});
        setSeverity("success");
        }
        else if(newUserData.status.code ===300){
          growl.show({severity: 'warn', summary: 'Warn', detail: newUserData.status.displayMessage});
          setShowMessage(false);
          setSeverity("warn");
        }
      }
      else{
        growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});
        setShowMessage(false);
        setSeverity("error");
      }
    }
    
  }
  let statusTemplate = props => {
    return <span>{props === 1 ? "Active" : "Inactive"}</span>;
  };
  let header = (
    <div className="p-clearfix" style={{ width: "100%" }}>
      <Button
        style={{ float: "left", width: 200 }}
        label="Add User"
        icon="pi pi-plus"
        onClick={handleCreate}
      />
    </div>
  );
 const handleActiveSubmit=(event)=>{
   var agree=window.confirm("Are you sure to update status?");
  if(agree){
    setSumbmited(true);
    dispatch(updateUserStatus(userDetails.emailId));
  }
 }
  
  function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
  return (
    <div className="p-grid p-fluid">
      <div className="p-col-12 ">
        <div className="card card-w-title">
          <h1>Users</h1>
          <br></br>
          <Growl ref={(el: any) => setGrowl(el)} />
         {showMessage && (successMessage("Success"))}    
          <div>
            <img src="WebUI/src/assets/images/profile.png" alt="" />
          </div>
          <div className="p-grid">
          {newUserData.isListLoading && <ProgressSpinner />}
                      {!newUserData.isListLoading &&(
            <DataTable
              value={tableData}
              paginatorPosition="bottom"
              selectionMode="single"
              paginator={true}
              rows={10}
              header={header}
              responsive={true}
              emptyMessage="No records found"
              onRowClick={showUserDialog(tableData)}
            >
              <Column
                field="userautoid.userId"
                header="User ID"
                sortable={true}
                filter={true} filterMatchMode="contains"
              />
              <Column
                field="userautoid.personautoid.first_name"
                header="First Name"
                sortable={true}
                filter={true} filterMatchMode="contains"
              />
              <Column
                field="userautoid.userId"
                header="Email Id"
                sortable={true}
                filter={true} filterMatchMode="contains"
              />
              <Column
                field="userautoid.personautoid.userPhoneAutoid.mobileNumber"
                header="Phone_number"
                sortable={true}
                filter={true} filterMatchMode="contains"
              />
              <Column
                field="roleFkId.description"
                header="Role"
                sortable={true}
                filter={true} filterMatchMode="contains"
              />
              <Column
                field="companyAutoId.description"
                header="Tenant"
                sortable={true}
                filter={true} filterMatchMode="contains"
              />
              <Column
                field="status"
                style={{ width: 100 }}
                header="status"
                sortable={true} 
              ></Column>
            </DataTable>
            )}
            <Dialog
              header="User Details"
              visible={state.displayDialog}
              style={{ width: "50vw" }}
              modal={true}
              onHide={() => setState({ displayDialog: false })}
            >
              <ScrollPanel style={{ width: '100%', height: '400px' }}>
              {state.displayDialog && (
                <div className="card card-w-title">
                  <Growl ref={(el) => setGrowl(el)} />
                  {isAddPage &&(
                  <div className="p-grid">   
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="emailIds">Email ID</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText id="emailIds" required value={userForm.emailId} onChange={handleAddInputChange} />
                      { isSumbmit && userForm.emailId==="" && ( requiredMessage("email"))}
                      { isSumbmit && !isEmailValid && (<Message severity="error" key="emailvalid" text="Email Not valid" />)}
                    </div>
                  
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="firstNameId">First Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText id="firstNameId" value={userForm.firstName} required onChange={handleAddInputChange} />
                      { isSumbmit && userForm.firstName==="" && (requiredMessage("fn"))}
                    </div>
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="lastNameId">Last Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText id="lastNameId"value={userForm.lastName} onChange={handleAddInputChange} />
                    </div>
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="mobileNumberId">Mobile Number</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText id="mobileNumberId" value={userForm.mobileNumber} keyfilter="pint" required onChange={handleAddInputChange} maxLength={10} minLength={10} />
                      { isSumbmit && userForm.mobileNumber==="" && (requiredMessage("mb"))}
                      { isSumbmit && userForm.mobileNumber.length!==10 && (<Message severity="error" key="mbvalid" text="Mobile number Not valid" />)}
                    </div>
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="passwordIds">password</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <Password id="passwordIds" value={userForm.password} required onChange={handleAddInputChange} />
                      { isSumbmit && userForm.password==="" && (requiredMessage("pas"))}
                    </div>
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="cPasswordId">Confirm Password</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <Password id="cPasswordId" value={userForm.confirmPassword} required onChange={handleAddInputChange} />
                      { isSumbmit && userForm.confirmPassword==="" && (requiredMessage("cpas"))}
                      { isSumbmit && userForm.confirmPassword!==userForm.password && (<Message severity="error" key="emailvalid" text="Email Not valid" />)}
                    </div>
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="roleId">Role</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <Dropdown id="roleId"
                        optionLabel="description"
                        options={roleList}
                        value={userForm.roleDescription} required onChange={handleAddInputChange}>
                      </Dropdown>
                      { isSumbmit && userForm.roleDescription==="" && (requiredMessage("role"))}
                    </div>                       
                         
                  </div>
                  )}   
                  {!isAddPage &&(
                  <div className="p-grid">       

                    <div className="p-col-12 p-md-2">
                        <label htmlFor="first_name">First Name</label>
                      </div>
                      <div className="p-col-12 p-md-4">
                        <InputText  onChange={handleInputChange}
                          id="first_name"
                          name="first_name" readOnly={isReadOnly} 
                          value={userDetails.first_name}
                        />
                      </div>
                      <div className="p-col-12 p-md-2">
                        <label htmlFor="emailId">Email ID</label>
                      </div>
                      <div className="p-col-12 p-md-4">
                        <InputText onChange={handleInputChange}
                          id="emailId"
                          name="emailId" readOnly={isReadOnly} 
                          value={userDetails.emailId}
                        />
                      </div>
                      <div className="p-col-12 p-md-2">
                        <label htmlFor="last_name">Last Name</label>
                      </div>
                      <div className="p-col-12 p-md-4">
                        <InputText onChange={handleInputChange}
                          id="last_name"
                          name="last_name" readOnly={isReadOnly} 
                          value={userDetails.last_name}
                        />
                      </div>
                      <div className="p-col-12 p-md-2">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                      </div>
                      <div className="p-col-12 p-md-4">
                        <InputText onChange={handleInputChange}
                          id="mobileNumber"
                          name="mobileNumber" readOnly={isReadOnly} 
                          value={userDetails.mobileNumber}
                        />
                      </div>             
                      <div className="p-col-12 p-md-2">
                      <label htmlFor="roleId">Role</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <Dropdown id="roleId"
                        optionLabel="description"
                        options={roleList} disabled={isReadOnly}
                        value={userDetails.roleDescription} required onChange={handleAddInputChange}>
                      </Dropdown>
                      { isSumbmit && userDetails.roleDescription==="" && (requiredMessage("role"))}
                    </div>      
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="dob">DOB</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Calendar value={userDetails.dob}  dateFormat="yy-mm-dd" onSelect={(e) => {
                      userDetails.dob=moment(e.value).format("YYYY-MM-DD"); setUserDetails({...userDetails});
                      
                      }}></Calendar>
                      {/* <InputText readOnly={isReadOnly}  onChange={handleInputChange} id="dob" name="dob" value={userDetails.dob} /> */}
                    </div>
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="input">Sex</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText readOnly={isReadOnly}  onChange={handleInputChange} id="sex" name="sex" value={userDetails.sex} />
                    </div>
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="address1">Address</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText readOnly={isReadOnly}  onChange={handleInputChange}
                        id="address1"
                        name="address1"
                        value={userDetails.address1}
                      />
                    </div>
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="city">City</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText readOnly={isReadOnly}  onChange={handleInputChange} id="city" name="city" value={userDetails.city} />
                    </div>
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="state">State</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText readOnly={isReadOnly}  onChange={handleInputChange}
                        id="state"
                        name="state"
                        value={userDetails.state}
                      />
                    </div>
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="country">Country</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText readOnly={isReadOnly}  onChange={handleInputChange}
                        id="country"
                        name="country"
                        value={userDetails.country}
                      />
                    </div>
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="zipcode">Pin Code</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                      <InputText readOnly={isReadOnly}  onChange={handleInputChange}
                        id="zipcode"
                        name="zipcode"
                        value={userDetails.zipcode}
                      />
                    </div>
                    

                    {/* <div className="p-col-12 p-md-3">
                      <Button
                        label="Save"                        
                        type="button"
                        className="generateButton"
                        onClick={handleSubmit}
                        style={{ width: 200 }}
                      />
                    </div> */}
                  </div>
                  )}
                 
                </div>
                
              )}
              <div className="p-dialog-footer">
                    {!isFormInvalid && (<Message severity="error" key={"error"} text="Form is invalid" />)}
                    <div className="ui-dialog-buttonpane p-clearfix">
                    {isShowActive  &&(
                                      <button onClick={handleActiveSubmit} className="p-button p-component p-button-text-icon-left"> 
                        {isReadOnly  &&(
                           <div>  
                          <span className="pi pi-user-plus p-c p-button-icon-left"></span>
                        <span className="p-button-text p-c">Active</span>
                        </div>  
                        )}
                        {!isReadOnly  &&(
                          <div>  
                          <span className="pi pi-user-minus p-c p-button-icon-left"></span>
                        <span className="p-button-text p-c">InActive</span>
                        </div>
                        )}
                      </button>
                      )}
                    { !isReadOnly &&(
                      <button onClick={handleSubmit} className="p-button p-component p-button-text-icon-left">
                        <span className="pi pi-check p-c p-button-icon-left"></span>
                        <span className="p-button-text p-c">Save</span>
                      </button>
                    )}
                    </div>
                  </div>
                  
              </ScrollPanel>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { newUserData,roleData } = state;
  return {
    newUserData,roleData
  };
};

export default connect(mapStateToProps)(Users);
