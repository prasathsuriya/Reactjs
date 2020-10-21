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
import { getpasswordhistory}  from "../../../store/actions/Passwordhistory";
import moment from "moment";

interface IUserCreate {
  dispatch: Dispatch<any>;
  roleData: any;
  passwordhistoryData: any;
  newUserData: any;
  newpasswordresetData: any;
  props: RouteComponentProps;
  loginData: any;
}

const Setpassword: React.FC<IUserCreate> = ({
  dispatch, roleData,newUserData,loginData,passwordhistoryData,newpasswordresetData}) => {
    useEffect(() => {
      
      var keys=getKeys(userForm);
                   
    }, []);  

  const initialUserForm = {
    emailId: "",
    oldpassword: "",
    password: "",
    confirmPassword: "",
    userId: "",
    date:"",
    roleId: 0,
    companyautoid: 0
  }

  function getKeys(obj){
    var keys = new Array();
    for(var key in obj){
       keys.push(key);
    }
    return keys;
 }
  const [tableData, setTableData] = useState(new Array<any>());


  const [userForm, setUser] = useState(initialUserForm);

  const [isEmailValid, setEmailValid] = useState(false);

  const loggedInString = localStorage.getItem("AUTHDATA");
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      userForm.userId = loggedInData.userProfile.userautoid.userId;
      userForm.emailId = userForm.userId; 
      userForm.roleId = loggedInData.userProfile.roleFkId.roleId;
      userForm.companyautoid = loggedInData.userProfile.roleFkId.companyAutoId.id;
      userForm.date = moment().format("DD-MM-YYYY");

    }
  }
  useEffect(() => {
    dispatch(getpasswordhistory(userForm.userId));
   
}, [dispatch]);

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
  const checkValue=()=>{

    if( userForm.date=meters[0].insert_datetime )
   
    
    {
        alert("same value");
    }
    else
    {
       
    }

  }


  
    if(passwordhistoryData.items.length>0){   
        var meters=new Array<any>();
        for(var i=0;i<passwordhistoryData.items.length;i++){
          var element=passwordhistoryData.items[i];  
      //  alert(JSON.stringify(element[0]));
          meters.push(element)
      }     
    
    }

    const[isShowFormMessage, setShowFormMessage]=useState(false);

  const handleSubmit = (event: any) => {
    console.log(userForm);
   // setSumbmited(true);
   // alert(JSON.stringify(meters[0]));
   
   // alert(userForm.date);
    setIsFormSubmitted(true);
    if(isValid){    
     
      setShowFormMessage(false);
      setUser({ ...userForm }); 
      //  alert(JSON.stringify(userForm));
       dispatch(savenewresetPassword(userForm));
        // alert(newpasswordresetData);
      
        
    }
    else{
      setShowFormMessage(true);
      alert("password not valid");
    }
  };
  const [growl, setGrowl]=useState();
  const [showMessage, setShowMessage]=useState(false);

  const [msgSeverity, setSeverity]=useState("success");    
      const [msgDescription, setDescriptiony]=useState("saved successfully"); 
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      function newMessage( key:string){     
        return <Message severity={msgSeverity} key={key} text={msgDescription} />
      }

  if(!newpasswordresetData.isLoading && newpasswordresetData.isFormSubmit && isFormSubmitted){
   // alert("newpasswordresetData  = "+JSON.stringify(newpasswordresetData));
    if(newpasswordresetData.status && newpasswordresetData.status!==null){
      setDescriptiony(newpasswordresetData.status.displayMessage);
      if(newpasswordresetData.status.value ===true ){
        if(newpasswordresetData.status.code ===200 ){
          setShowMessage(true);
          growl.show({severity: 'success', summary: 'Success', detail: newpasswordresetData.status.displayMessage});
          setSeverity("success");
         // alert(newpasswordresetData.status.displayMessage);
        }
        else if(newpasswordresetData.status.code ===300) {
          growl.show({severity: 'warn', summary: 'Warn', detail: newpasswordresetData.status.displayMessage});
          setShowMessage(false);
          setSeverity("warn");
         // alert(newpasswordresetData.status.displayMessage);
        }
      }
    }
    else{
      growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});
      setShowMessage(false);
      setSeverity("error");
     // alert(newpasswordresetData.status.displayMessage);
    }
    setIsFormSubmitted(false);
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
    <div className="animated fadeIn">
      <div className="p-col-12 ">
        <div className="card card-w-title">
          <h1>Change Password</h1>
          <Growl ref={(el) => setGrowl(el)} />
                      {newpasswordresetData.status.displayMessage}  
                      <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="passwordIds">Current Password</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Password id="passwordIds" value={userForm.oldpassword} required onChange={handleInputChange} />
              { isFormSubmitted && userForm.password==="" && (requiredMessage("password"))}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="newpassword"> New password</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Password id="newpassword" value={userForm.password} required onChange={handleInputChange} />
              { isFormSubmitted && userForm.password==="" && (requiredMessage("pas"))}
              { isFormSubmitted && !isEmailValid && (<Message severity="error" key="emailvalid" text="Password not valid" />)}
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-2">
              <label htmlFor="cPasswordId">Confirm Password</label>
            </div>
            <div className="p-col-12 p-md-4">
              <Password id="cPasswordId" value={userForm.confirmPassword} required onChange={handleInputChange} />
              { isFormSubmitted && userForm.confirmPassword==="" && (requiredMessage("cpas"))}
              { isFormSubmitted && userForm.confirmPassword!==userForm.password && (<Message severity="error" key="emailvalid" text="Password not matched" />)}
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
  const { roleData, newUserData,loginData,passwordhistoryData,newpasswordresetData } = state;
  console.log("state role " + roleData);
  return {
    roleData,
    newUserData,
    loginData,
    passwordhistoryData,
    newpasswordresetData
  };
};
export default connect(mapStateToProps)(Setpassword);