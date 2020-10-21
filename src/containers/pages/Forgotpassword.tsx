import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { useState } from "react";
import { saveLogin } from "../../store/actions/Login";
import { savePassword } from "../../store/actions/Forgotpassword";
interface IProps {
  dispatch: Dispatch<any>;
  loginData: any;
  props: RouteComponentProps;
}
export const Forgotpassword: React.SFC<IProps> = ({ dispatch, loginData }) => {
  const initialFormState = {
    userId: "",
  
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    if (event.target.id === "userId") {
      user.userId = event.target.value;
    } 
    setUser({ ...user });
  };

  const handleSubmit = (event: any) => {
    dispatch(savePassword(user));
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
            onChange={handleInputChange}
          />
        
          <a className="submit" onClick={handleSubmit}>
            send email
          </a>
  
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

export default connect(mapStateToProps)(Forgotpassword);
