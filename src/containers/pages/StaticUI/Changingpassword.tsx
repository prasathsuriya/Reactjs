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
import { savenewresetPassword } from "../../../store/actions/Newpasswordreset";

interface IUserCreate {
  dispatch: Dispatch<any>;
  roleData: any;
  newUserData: any;
  props: RouteComponentProps;
  loginData: any;
}

const Setpassword: React.FC<IUserCreate> = ({
  dispatch, roleData,newUserData,loginData}) => {


  const initialUserForm = {
    emailId: "",
    oldpassword: "",
    password: "",
    confirmPassword: "",
    userId: "",
    roleId: 0,
  companyautoid: 0
  }

  const [userForm, setUser] = useState(initialUserForm);

  const [isEmailValid, setEmailValid] = useState(false);

  const loggedInString = localStorage.getItem("AUTHDATA");
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      userForm.userId = loggedInData.userProfile.userautoid.userId;
      userForm.emailId = userForm.userId; 
      userForm.roleId = loggedInData.userProfile.roleFkId.roleId;
      userForm.companyautoid = loggedInData.userProfile.userFkId.roleFkId.companyAutoId.id;
    }
  }


  const handleInputChange = (event: any) => {
    if (event.target.id === "newpassword") {
      if (!event.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i)) {
        setEmailValid(false);
      }
      else
      setEmailValid(true);
      userForm.password = event.target.value;
    }   else if (event.target.id === "passwordIds") {
      userForm.oldpassword = event.target.value;
    } else if (event.target.id === "cPasswordId") {
      userForm.confirmPassword = event.target.value;
    } 
    setUser({...userForm});
    checkValidation();
  };

  const [isValid, setValid] = useState(false);
  const [isSumbmit, setSumbmited] = useState(false);
  
  const checkValidation=()=>{

    if(( userForm.oldpassword!==null && userForm.oldpassword!=="")
    && (userForm.password===userForm.confirmPassword && userForm.password!==null && userForm.password!=="" && isEmailValid==true)
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
    console.log(userForm);
    setSumbmited(true);
    if(isValid){     
     //   alert(JSON.stringify(userForm));
       dispatch(savenewresetPassword(userForm));
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




  function successMessage( key:string){     
    return <Message severity="success" key={key} text="User Successfully Created" />
  }
  const handleReset=(e)=>{
    setUser(initialUserForm);
    setShowMessage(false);
  }

  function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
  return (
    <div className="p-grid p-fluid">
      <div className="p-col-12 ">
        <div className="card card-w-title">
          <h1>Change Password</h1>
         
         <Growl ref={(el) => setGrowl(el)} />
         {showMessage && (successMessage("Success"))}    
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="passwordIds">Current Password</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Password id="passwordIds" value={userForm.oldpassword} required onChange={handleInputChange} />
              { isSumbmit && userForm.password==="" && (requiredMessage("pas"))}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="newpassword"> New password</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Password id="newpassword" value={userForm.password} required onChange={handleInputChange} />
              { isSumbmit && userForm.password==="" && (requiredMessage("pas"))}
              { isSumbmit && !isEmailValid && (<Message severity="error" key="emailvalid" text="Password not valid" />)}
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
            <div className="p-col-12 p-md-3">
              <Button
                label="change Password"
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
  const { roleData, newUserData,loginData } = state;
  console.log("state role " + roleData);
  return {
    roleData,
    newUserData,
    loginData
  };
};
export default connect(mapStateToProps)(Setpassword);