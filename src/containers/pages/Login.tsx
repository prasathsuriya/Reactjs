import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { useState } from "react";
import { saveLogin } from "../../store/actions/Login";
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';

interface IProps {
  dispatch: Dispatch<any>;
  loginData: any;
  props: RouteComponentProps;
}
export const Login: React.SFC<IProps> = ({ dispatch, loginData }) => {
  const initialFormState = {
    userId: "",
    password: "",
    securityQuestion: "",
    answer: "",
    roleFkId: {
      roleId: 0,
      roleName: "",
      description: "",
      status: 0,
      createdAt: "",
      createdBy: "",
      updatedAt: "",
      updatedBy: ""
    },
    status: 0,
    createdAt: "",
    createdBy: "",
    updatedAt: "",
    updatedBy: ""
  };

  const [user, setUser] = useState(initialFormState);
  const[displayingDialog, setdisplayingDialog]=useState(true);
  

  const handleSubmit = (event: any) => {
    window.location.href = "/passwordchange";
   // window.location.href = "/home";
   };


  const handleOnClick = (event: any) => {
    alert('hi1');
    window.location.href="/home";
  
  };


  return (
    <div>
      <div className="main">
        <p className="sign">Sign in</p>
        <form className="form1">
          <input
            className="un"
            id="userId"
            name="Email"
            type="text"
            placeholder="Username"
            required
            value={user.userId}
           // onChange={handleInputChange}
          />
          <input
            className="pass"
            id="passwordId"
            name="Password"
            placeholder="Password"
            type="password"
            value={user.password}
            required
           // onChange={handleInputChange}
          />
          <a className="submit" onClick={handleOnClick}>
            Sign in
          </a>
          <p className="forgot">
          <a  onClick={handleSubmit}>Forgot Password</a>
          </p>
          <p className="loginError">
            {/* {isShowError && <span>Invalid UserId and Password</span>} */}
          </p>
          <p className="loginError">
          {/* {isShowDialog &&  */}
            <Dialog header= "confirmation" visible={displayingDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayingDialog(false) } >
           <ScrollPanel style={{ width: '100%', height: '400px' }}>
                                  <div className="p-col-12 p-md-6">
                                  <h1> you have already logged in other browser do u wish to continue?</h1>
                                  
                       <button className="p-button p-component p-button-text-icon-left">
                         <span className="pi pi-times p-c p-button-icon-left"></span>
                         <span className="p-button-text p-c">Yes</span>
                       </button>
                       <button  className="p-button p-component p-button-text-icon-left">
                         <span className="pi pi-times p-c p-button-icon-left"></span>
                         <span className="p-button-text p-c">No</span>
                       </button>
                               </div>
                               </ScrollPanel>
            </Dialog>
            
           
          </p>
        </form>
      
      </div>
     
    </div>
  );
};

 export default (Login);
