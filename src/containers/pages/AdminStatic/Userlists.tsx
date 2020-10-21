import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
//import { ReactMultiSelectCheckboxes } from 'react-multiselect-checkboxes';
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";


interface IUserlists { }
interface IUserlists {
  userlistData: any;
  dispatch: Dispatch<any>;
  state: {
    label: string;
    value: 0,
    dataTableValue: [],
    dataTableSelection: [],
    defaultChecked?: boolean;
    checkboxValue: any;
    checkedIcon?: any;
    uncheckedIcon?: any;

  }
}
const Userlists: React.FC<IUserlists> = ({


}) => {
  const userlistdetail = {
    userid: 0,
    username: "",
    cpassword: "",
    password: "",
    emailid: "",
    roletype: "",
    icareunittype: "",
    operatingunittype: "",
    firstname: "",
    lastname: "",
    phoneno: "",
    addressline1: "",
    addressline2: "",
    addressline3: "",
    pincode: ""
  };
  const [dataTableSelection, setdataTableSelection] = useState();
  const onSelectionChangeed = (e) => { setdataTableSelection(e.value) };
  const dataTableValues = [
    { "userid": "1", "username": "Prashanth", "emailid": "prashanthr19@gmail.com", "roletype": "AssistantEngineer", "icareunittype": "TNEB", "operatingunittype": "South chennai", "firstname": "Prashanth", "lastname": "Ravi", "phoneno": "9841426477", "addressline1": "103,8th steet", "addressline2": "kambar nagar", "addressline3": "kolathur", "pincode": "600099", "insertedby": "Murugavel", "inserteddate": "01-Feb-2020", "updatedby": "murugavel", "updateddate": "01-Feb-2020" },
    { "userid": "2", "username": "Harish", "emailid": "harishk@gmail.com", "roletype": "SeniorEngineer", "icareunittype": "TNEB", "operatingunittype": "Chennai central", "firstname": "Harish", "lastname": "Kumar", "phoneno": "9840285589", "addressline1": "204,9th street", "addressline2": "poompuhar nagar", "addressline3": "perambur", "pincode": "600088", "insertedby": "kumar", "inserteddate": "01-March-2020", "updatedby": "Rahul", "updateddate": "01-March-2020" },
    { "userid": "3", "username": "kumar", "emailid": "kumarkrish@gmail.com", "roletype": "TechnicalAssistant", "icareunittype": "TNEB", "operatingunittype": "Vilupuram", "firstname": "kumar", "lastname": "sarath", "phoneno": "9841725353", "addressline1": "302,10th street", "addressline2": "nsk nagar", "addressline3": "villivakam", "pincode": "600095", "insertedby": "satish", "inserteddate": "01-Jan-2020", "updatedby": "kumar", "updateddate": "01-Jan-2020" }
  ];

  let [userlistData, setInput] = useState(userlistdetail);

  const handleInputChange = (event: any) => {
    if (event.target.id === "userid") {
      userlistData.userid = event.target.value;
    } else if (event.target.id === "username") {
      userlistData.username = event.target.value;
    } else if (event.target.id === "emailid") {
      userlistData.emailid = event.target.value;
    } else if (event.target.id === "roletype") {
      userlistData.roletype = event.target.value;
    } else if (event.target.id === "icareunittype") {
      userlistData.icareunittype = event.target.value;
    } else if (event.target.id === "operatingunittype") {
      userlistData.operatingunittype = event.target.value;
    } else if (event.target.id === "firstname") {
      userlistData.firstname = event.target.value;
    } else if (event.target.id === "lastname") {
      userlistData.lastname = event.target.value;
    } else if (event.target.id === "phoneno") {
      userlistData.phoneno = event.target.value;
    } else if (event.target.id === "addressline1") {
      userlistData.addressline1 = event.target.value;
    } else if (event.target.id === "addressline2") {
      userlistData.addressline2 = event.target.value;
    } else if (event.target.id === "addressline3") {
      userlistData.addressline3 = event.target.value;
    } else if (event.target.id === "pincode") {
      userlistData.pincode = event.target.value;
    } else if (event.target.id === "password") {
      userlistData.password = event.target.value;
    } else if (event.target.id === "cpassword") {
      userlistData.cpassword = event.target.value;
    }
    setInput({ ...userlistData });
  }

  const styles = {

    checkbox: {
      marginBottom: 16
    }
  };
  const handleCheckboxChange = (event) => {
    //checked: (event.target.checked);
  }
  const [checked] = useState(false);


  const onPermissionSelect = (event) => {



    if (!displayingDialog) {
      //var data=event.data;

      //setInput(consumer);
      // permissionData=data;
      //if(userData!=null){
      //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
      //   consumerInputData.createdBy=data.createdBy;                                
      // }          
      //setInput(consumer);
      // setInput({ ...permissionData }); 
      setdisplayingDialog(true);
      //If need to show delete button
      //setShowDelete(true);
    }
  }
  function onClickPermission(event) {
    setdisplayingDialog(true);
  }
  const [displayingDialog, setdisplayingDialog] = useState(false);

  const handlingSubmit = (event: any) => {

    setIsFormSubmitted(true);

  }
  const handlingDeleteSubmit = (event) => {

  }


  const onUserlistSelect = (event) => {


    if (!displayDialog) {
      var data = event.data;

      //setInput(consumer);
      userlistData = data;
      //if(userData!=null){
      //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
      //   consumerInputData.createdBy=data.createdBy;                                
      // }          
      //setInput(consumer);
      setInput({ ...userlistData });
      setdisplayDialog(true);
      //If need to show delete button
      //setShowDelete(true);
    }
  }
  function onClickAdd(event) {
    setdisplayDialog(true);
  }
  const [displayDialog, setdisplayDialog] = useState(false);
  const [isShowFormMessage, setShowFormMessage] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isValid, setValid] = useState(false);
  const handleSubmit = (event: any) => {

    setIsFormSubmitted(true);

  }
  const handleDeleteSubmit = (event) => {

  }

  const roles = [
    { label: 'Select Roles', value: null },
    { label: 'AssistantEngineer', value: 'AssistantEngineer' },
    { label: 'SeniorEngineer', value: 'SeniorEngineer' },
    { label: 'TechnicalAssistant', value: 'TechnicalAssistant' }
  ];
  const icareunits = [
    { label: 'Select Icareunits', value: null },
    { label: 'TNEB', value: 'TNEB' }
  ];
  const operatingunits = [
    { label: 'Select Operatingunits', value: null },
    { label: 'Chennai central', value: 'Chennai central' },
    { label: 'South chennai', value: 'South chennai' },
    { label: 'Vilupuram', value: 'Vilupuram' },
    { label: 'Coimbatore', value: 'Coimbatore' },
    { label: 'vellore', value: 'vellore' },
    { label: 'thirunelveli', value: 'thirunelveli' },
    { label: 'erode', value: 'erode' },
    { label: 'trichy', value: 'trichy' },
    { label: 'madurai', value: 'madurai' }
  ];
  return (

    <div>
      <Dialog header="rolelist" visible={displayingDialog} style={{ width: '50vw', overflow: 'scroll' }} modal={true} onHide={() => setdisplayingDialog(false)}>
        {
          displayDialog &&
          (

            <div className="p-grid card-w-title">
              <div className="p-grid">
                <div className="p-col-8 " style={{ padding: '.5em' }}>
                  <Checkbox value="Meter On Board" inputId="meteronboard" onChange={handleCheckboxChange} checked={checked} />
                  <label htmlFor="meteronboard" className="p-checkbox-label">Meter on Board</label>
                </div>

                <div className="p-col-8" style={{ padding: '.5em' }}>
                  <Checkbox value="Product Configuration" inputId="cb2" onChange={handleCheckboxChange} checked={checked} />
                  <label htmlFor="cb2" className="p-checkbox-label">Product Configuration</label>
                </div>
                <div className="p-col-8" style={{ padding: '.5em' }}>
                  <Checkbox value="Insident Management" inputId="cb3" onChange={handleCheckboxChange} checked={checked} />
                  <label htmlFor="cb3" className="p-checkbox-label">Insident Management</label>
                </div>
                <div className="p-col-12 p-md-4">
                </div>
                <div className="p-col-12 p-md-4">

                  <Button label="Save" icon="pi pi-save" onClick={handleSubmit} />

                </div>
                <div className="p-col-12 p-md-4">
                </div>
              </div>


            </div>

          )
        }
      </Dialog>

      <Dialog header="User Details" visible={displayDialog} style={{ width: '70vw', overflow: 'scroll' }} modal={true} onHide={() => setdisplayDialog(false)}>
        {
          displayDialog &&
          (

            <div className="p-grid card-w-title">
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="userid">User Id </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="userid" value={userlistData.userid} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="username">User Name</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="username" value={userlistData.username} onChange={handleInputChange} />
                </div>

                <div className="p-col-12 p-md-2">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Password id="password" value={userlistData.password} onChange={handleInputChange} />
                </div>

                <div className="p-col-12 p-md-2">
                  <label htmlFor="cpassword">Conform Password</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Password id="cpassword" value={userlistData.cpassword} onChange={handleInputChange} />
                </div>


                <div className="p-col-12 p-md-2">
                  <label htmlFor="emailid">Email Id</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="emailid" value={userlistData.emailid} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="roletype">Roles Type </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  {/*  <ReactMultiSelectCheckboxes  id="roletype" options={roles}  /> */}
                  <Dropdown id="roletype" options={roles} value={userlistData.roletype} required autoWidth={false} onChange={handleInputChange} />

                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="icareunittype">Project Name </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <Dropdown id="icareunittype" options={icareunits} value={userlistData.icareunittype} required autoWidth={false} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="operatingunittype">Business Unit </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <Dropdown id="operatingunittype" options={operatingunits} value={userlistData.operatingunittype} required autoWidth={false} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="firstname">First Name</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="firstname" value={userlistData.firstname} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="lastname" value={userlistData.lastname} onChange={handleInputChange} />
                </div>


                <div className="p-col-12 p-md-2">
                  <label htmlFor="phoneno">Phone No </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="phoneno" value={userlistData.phoneno} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="adressline1">Address Line 1</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="addressline1" value={userlistData.addressline1} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="adressline2">Address Line 2</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="addressline2" value={userlistData.addressline2} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="adressline3">Address Line 3</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="addressline3" value={userlistData.addressline3} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="pincode">Pincode</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="pincode" value={userlistData.pincode} onChange={handleInputChange} />
                </div>

                <div className="p-col-12 p-md-2">
                </div>
                <div className="p-col-12 p-md-4">

                  <Button label="Save User" icon="pi pi-save" onClick={handleSubmit} />

                </div>

              </div>


            </div>

          )
        }
      </Dialog>

      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Search Users</h1>
        </div>
        <div style={{ textAlign: 'left' }}>
          <Button type="button" icon="pi pi-plus" iconPos="left" label="Add New User" onClick={onClickAdd}></Button>
        </div>
      </div>

      <div className="content-section implementation">

        <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single"
          paginator={true} rows={10} header="List of User Details" responsive={true}
          scrollable={true} scrollHeight="200px" style={{ marginTop: '5px', width: '3000px' }}
          alwaysShowPaginator={false} selection={dataTableSelection}
          onSelectionChange={onSelectionChangeed}
          onRowSelect={onUserlistSelect}>


          <Column field="userid" header="User id" sortable={true} />
          <Column field="username" header="User Name" sortable={true} />
          <Column field="emailid" header="Email Id" sortable={true} />
          <Column field="roletype" header="Role Type" sortable={true} />
          <Column field="icareunittype" header="Project " sortable={true} />
          <Column field="operatingunittype" header="Business Unit" sortable={true} />
          <Column field="firstname" header="First Name" sortable={true} />
          <Column field="lastname" header="Last Name" sortable={true} />
          <Column field="phoneno" header="Phone Number" sortable={true} />
          <Column field="addressline1" header="Address Line 1" sortable={true} />
          <Column field="addressline2" header="Address Line 2" sortable={true} />
          <Column field="addressline3" header="Address Line 3" sortable={true} />
          <Column field="pincode" header="pincode" sortable={true} />
        </DataTable>
      </div>
    </div>
  );


};
const mapStateToProps = (state: any) => {
  const { deviceFormData } = state;
  return {
    deviceFormData
  };
};
export default connect(mapStateToProps)(Userlists)