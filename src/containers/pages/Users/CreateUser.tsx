import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { saveUser } from '../../../store/actions/CreateUser';
import { getRolesByTenant } from '../../../store/actions/Role';
import { Message } from 'primereact/message';
import {Growl} from 'primereact/growl';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

interface IUserCreate {
  dispatch: Dispatch<any>;
  roleData: any;
  newUserData: any;
  props: RouteComponentProps;
}

const CreateUser: React.FC<IUserCreate> = ({
  dispatch, roleData,newUserData}) => {


  const initialUserForm = {
    emailId: "",
    firstName: "",
    lastName: "",
    mobilNumber: "",
    password: "",
    confirmPassword: "",
    roleId: 0,
    userId: "",
    companyautoid: 0,
    roleDescription: ""
  }

  const [userForm, setUser] = useState(initialUserForm);

  const [isEmailValid, setEmailValid] = useState(false);

  const [isPasswordValid, setPasswordValid] = useState(false);

  const loggedInString = localStorage.getItem("AUTHDATA");
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      userForm.userId = loggedInData.userProfile.userautoid.userId;
      userForm.companyautoid = loggedInData.userProfile.userautoid.companyAutoId.id;
    }
  }


  const handleInputChange = (event: any) => {
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
    } else if (event.target.id === "mobilNumberId") {
      userForm.mobilNumber = event.target.value;
    } else if (event.target.id === "passwordIds") {
      if (!event.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i)) {
        setPasswordValid(false);
      }
      else
      setPasswordValid(true);
      userForm.password = event.target.value;
    } else if (event.target.id === "cPasswordId") {
      userForm.confirmPassword = event.target.value;
    } else if (event.target.id === "roleId") {
      userForm.roleDescription = event.target.value;
      userForm.roleId = event.target.value.roleId;
    }
    setUser({...userForm});
    checkValidation();
  };

  const [isValid, setValid] = useState(false);
  const [isSumbmit, setSumbmited] = useState(false);
  
  const checkValidation=()=>{

    if((userForm.emailId!==null && userForm.emailId!=="" && isEmailValid===true)
    && (userForm.password===userForm.confirmPassword && userForm.password!==null && userForm.password!=="" && isPasswordValid==true)
    &&(userForm.mobilNumber!==null && userForm.mobilNumber!=="")
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

  const handleSubmit = (event: any) => {
   // alert(userForm.mobilNumber);
    console.log(userForm);
    setSumbmited(true);
    if(isValid){     
      dispatch(saveUser(userForm));
      window.location.href = "/user/manageusers";
    }
  };
  const [growl, setGrowl]=useState();
  const [showMessage, setShowMessage]=useState(false);

  if(!newUserData.isLoading && newUserData.isFormSubmit && isSumbmit){
    if(newUserData.status==="Success" || newUserData.status==="success" ){
      setShowMessage(true);
      growl.show({severity: 'success', summary: 'Success', detail: 'User created successfully'});
    }
    else{
      growl.show({severity: 'warn', summary: 'Warn', detail: 'There are unsaved changes'});
      setShowMessage(false);
    }
    setSumbmited(false);
  }

  useEffect(() => {
    dispatch(getRolesByTenant(userForm.companyautoid));
  }, [dispatch]);

  const [roleList, setRoleList] = useState([]);
  if (roleData.items.length > 0 && roleList.length === 0) {
    setRoleList(roleData.items);
  }

  function successMessage( key:string){     
    return <Message severity="success" key={key} text="User Successfully Created" />
  }
  const handleReset=(e)=>{
    setUser(initialUserForm);
    setShowMessage(false);
  }
 
  console.log("roleList " + roleList);
  function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
  return (
    <div className="p-grid p-fluid">
      <div className="p-col-12 ">
        <div className="card card-w-title">
          <h1>New User</h1>
         
         <Growl ref={(el) => setGrowl(el)} />
         {showMessage && (successMessage("Success"))}    

          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="emailIds">Email ID</label>
            </div>
            <div className="p-col-12 p-md-4">
              <InputText id="emailIds" required value={userForm.emailId} onChange={handleInputChange} />
              { isSumbmit && userForm.emailId==="" && ( requiredMessage("email"))}
              { isSumbmit && !isEmailValid && (<Message severity="error" key="emailvalid" text="Email not valid" />)}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="firstNameId">First Name</label>
            </div>
            <div className="p-col-12 p-md-4">
              <InputText id="firstNameId" value={userForm.firstName} required onChange={handleInputChange} />
              { isSumbmit && userForm.firstName==="" && (requiredMessage("fn"))}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="lastNameId">Last Name</label>
            </div>
            <div className="p-col-12 p-md-4">
              <InputText id="lastNameId"value={userForm.lastName} onChange={handleInputChange} />
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="mobilNumberId">Mobile Number</label>
            </div>
            <div className="p-col-12 p-md-4">
              <InputText id="mobilNumberId" value={userForm.mobilNumber} keyfilter="pint" required onChange={handleInputChange} maxLength={10} minLength={10} />
              { isSumbmit && userForm.mobilNumber==="" && (requiredMessage("mb"))}
              { isSumbmit && userForm.mobilNumber.length!==10 && (<Message severity="error" key="mbvalid" text="Mobile number not valid" />)}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="passwordIds">password</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Password id="passwordIds" value={userForm.password} required onChange={handleInputChange} />
              { isSumbmit && userForm.password==="" && (requiredMessage("pas"))}
              { isSumbmit && !isPasswordValid && (<Message severity="error" key="passwordvalid" text="Password not valid" />)}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="cPasswordId">Confirm Password</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Password id="cPasswordId" value={userForm.confirmPassword} required onChange={handleInputChange} />
              { isSumbmit && userForm.confirmPassword==="" && (requiredMessage("cpas"))}
              { isSumbmit && userForm.confirmPassword!==userForm.password && (<Message severity="error" key="emailvalid" text="Password not matched" />)}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="roleId">Role</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Dropdown id="roleId"
                optionLabel="description"
                options={roleList}
                value={userForm.roleDescription} required onChange={handleInputChange}>
              </Dropdown>
              { isSumbmit && userForm.roleDescription==="" && (requiredMessage("role"))}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-3">
              <Button
                label="Reset"
                type="reset"
                onClick={handleReset}
                className="generateButton"
                style={{ width: 200 }}
              />
            </div>
            <div className="p-col-12 p-md-3">
              <Button
                label="Save"
                onClick={handleSubmit}
                type="button"
                className="generateButton"
                style={{ width: 200 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const mapStateToProps = (state: any) => {
  const { roleData, newUserData } = state;
  console.log("state role " + roleData);
  return {
    roleData,
    newUserData
  };
};
export default connect(mapStateToProps)(CreateUser);