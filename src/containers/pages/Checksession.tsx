import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { useState } from "react";
import { saveLogin } from "../../store/actions/Login";

interface IProps {
  dispatch: Dispatch<any>;
  loginData: any;
  props: RouteComponentProps;
}
export const Checksession: React.SFC<IProps> = ({ dispatch, loginData }) => {
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


  const handleSubmit = (event: any) => {
    window.location.href = "/home";
   };

  const handleOnClick = (event: any) => {
    window.location.href = "/home";
  };

  var isShowError = false;
  const loggedInString = localStorage.getItem("AUTHDATA");

  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      if (loggedInData.status) {
       // window.location.href = "/home";
      }
    }
  }
 // alert(JSON.stringify(loggedInString));
  if (
    loginData &&
    loginData.isFormSubmit &&
    !loginData.isLoading &&
    loginData.status.userProfile
  ) {
    isShowError = false;
    console.log("IF ISFORMSUBMIT" + loginData.isFormSubmit);
    window.localStorage.setItem("AUTHDATA", JSON.stringify(loginData.status));
    //alert(JSON.stringify(loginData));
    //alert(JSON.stringify(loginData.status.loggedStatus));
    if (loginData.status.loggedStatus === 1){
      window.location.href = "/home";
    }
   
  } else if (
    loginData &&
    loginData.isFormSubmit &&
    !loginData.isLoading &&
    !loginData.status.userProfile
  ) {
    isShowError = true;
    console.log(
      "loginData.status.statusDisplay" + loginData.status.statusDisplay
    );
    window.localStorage.setItem("AUTHDATA", "");
  }

  return (
    <div>
      <div className="main">
        <p className="sign">If u want to remove previous Session?</p>
        <form className="form1">
          <a className="submit" onClick={handleOnClick}>
            Yes
          </a>
          <p className="forgot">
          <a className="submit" onClick={handleSubmit}>No</a>
          </p>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  const { loginData } = state;
  return {
    loginData
  };
};

export default connect(mapStateToProps)(Checksession);
