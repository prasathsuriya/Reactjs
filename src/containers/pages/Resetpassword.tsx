import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { useState } from "react";
import { saveLogin } from "../../store/actions/Login";
import { Message } from 'primereact/message';
import {Growl} from 'primereact/growl';
import {  useEffect } from "react";
import { } from "react-router-dom"
import { savenewPassword,getactcodepassword } from "../../store/actions/Passwordreset";
interface IProps {
  dispatch: Dispatch<any>;
  loginData: any;
  passwordresetData:any;
  props: RouteComponentProps;
  match: any;
}
export const Resetpassword: React.SFC<IProps> = ({ dispatch, loginData,passwordresetData, match }) => {
    let actcode = match.params.id;
    //alert("Muru");
   // alert(actcode);
   // actcode="7189e550-4428-4169-b05e-cedc937b1a09";
    useEffect(() => {
        dispatch(getactcodepassword(actcode));
        var keys=getKeys(user);
       
    }, []);
        
  const initialFormState = {
    userId: "",
    password: "",
    confirmpassword: "",
    actcode: ""
  };
  function getKeys(obj){
    var keys = new Array();
    for(var key in obj){
       keys.push(key);
    }
    return keys;
 }

  const [user, setUser] = useState(initialFormState);
  const [isValid, setValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  const [isSumbmit, setSumbmited] = useState(false);
  const checkValidation=()=>{
        
    if((user.password==user.confirmpassword && user.password!==null && user.password!=="" && isEmailValid===true )

    //&&(aapermissionsInputData.permission_name!==null&&aapermissionsInputData.permission_name!=="") 
    )
    {
      setValid(true);
    }
    else
    {
      setValid(false); 
    }
   
    
  }

  const handleInputChange = (event: any) => {
    if (event.target.id === "password") {
        if (!event.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i)) {
            setEmailValid(false);
          }
          else
          setEmailValid(true);
      user.password = event.target.value;
      
    }else if (event.target.id === "confirmpassword") {
        user.confirmpassword = event.target.value;
      } 
    setUser({ ...user });
    checkValidation(); 
    setfield();
   // alert(JSON.stringify(passwordresetData));
  };
  

const setfield=()=>{
          //var meters=new Array<any>();
          if(passwordresetData.items.length>0){                
            for(var i=0;i<passwordresetData.items.length;i++){
              var element=passwordresetData.items[i];  
              if (user.password!==element.userId)  {              
             
              setValid(true); 
          }  
          else{
              setValid(false);
            //alert("valid entry");
          }
          }     
        }
      }
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      
  const handleOnClick = (event: any) => {
    user.actcode = actcode;
    // setUser({ ...user });
     setSumbmited(true);
     checkValidation();
     setIsFormSubmitted(true);
     if(isValid){     
      setUser({ ...user });
        dispatch(savenewPassword(user));      
        
      // alert(JSON.stringify(passwordresetData.items)); 
      }
      else{
       alert("form invalid");
      }
  }

  const [growl, setGrowl]=useState();
  const [showMessage, setShowMessage]=useState(false);

  const [msgSeverity, setSeverity]=useState("success");    
      const [msgDescription, setDescriptiony]=useState("saved successfully"); 
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  if(!passwordresetData.isLoading && passwordresetData.isFormSubmit && isFormSubmitted){
   // alert("passwordresetData  = "+JSON.stringify(passwordresetData));
    alert(passwordresetData.status.displayMessage);
    if(passwordresetData.status && passwordresetData.status!==null){
      setDescriptiony(passwordresetData.status.displayMessage);
      if(passwordresetData.status.value ===true ){
        if(passwordresetData.status.code ===200 ){
          setShowMessage(true);
          growl.show({severity: 'success', summary: 'Success', detail: passwordresetData.status.displayMessage});
          setSeverity("success");
          alert(passwordresetData.status.displayMessage);
        }
        else if(passwordresetData.status.code ===300) {
          growl.show({severity: 'warn', summary: 'Warn', detail: passwordresetData.status.displayMessage});
          setShowMessage(false);
          setSeverity("warn");
          alert(passwordresetData.status.displayMessage);
        }
      }
    }
    else{
      growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});
      setShowMessage(false);
      setSeverity("error");
    }
    setIsFormSubmitted(false);
  }

  function successMessage( key:string){     
    return <Message severity="success" key={key} text="Password reser successful." />
  }
  function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is invalid" />}
  return (
    <div>
      <div className="main">
        <p className="sign">Change Password</p>
        <Growl ref={(el) => setGrowl(el)} />      
        <form className="form1">
          <input
            className="pass"
            id="password"
            name="Password"
            placeholder="Password"
            type="password"
            value={user.password}
            required
            onChange={handleInputChange}
          />
              { isSumbmit && user.password==="" && ( requiredMessage("password"))}
          { isSumbmit && !isEmailValid && (<Message severity="error" key="emailvalid" text="Password Not valid" />)}
          <input
            className="pass"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="confirmPassword"
            type="password"
            value={user.confirmpassword}
            required
            onChange={handleInputChange}
          />
          { isSumbmit && user.confirmpassword==="" && (requiredMessage("cpas"))}
                      { isSumbmit && user.confirmpassword!==user.password && (<Message severity="error" key="pwdincorrect" text="Password & Confirm password should be same" />)}
          <a className="submit" onClick={handleOnClick}>
            Confirm Password
          </a>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  const { loginData,passwordresetData } = state;
  return {
    loginData, passwordresetData
  };
};

export default connect(mapStateToProps)(Resetpassword);