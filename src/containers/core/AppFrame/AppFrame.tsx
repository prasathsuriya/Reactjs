//import classnames from 'classnames';
import * as React from "react";
import * as styles from "./AppFrame.module.scss";
import Header from "../header/Header";
import SideMenu from "../sidemenu/SideMenu";
import MainPage from "../mainpage/MainPage";
import AsidePage from "../asidepage/AsidePage";
import { createStore } from "redux";
// import  '../../../css/variables.css';

interface IAppFrameProps {
  children: React.ReactNode;
  isLogged?: boolean;
  noBottomSpace?: boolean;
}
interface IAppFrameState {
  sessionTimeOut: number;
  isValid: boolean;
  isAdmin: boolean;
  userName: string;
}
class AppFrame extends React.Component<IAppFrameProps, IAppFrameState> {
  constructor(props) {
    super(props);
    this.state = {
      sessionTimeOut: 10,
      isValid: false,
      isAdmin: false,
      userName: ""
    };
  }

  componentWillMount() {
    const loggedInString = localStorage.getItem("AUTHDATA");
    if (loggedInString) {
      const loggedInData = JSON.parse(loggedInString);
      console.log(loggedInData);
      if (!loggedInData && loggedInData.loggedStatus == 1) {
        window.localStorage.setItem("AUTHDATA", "");
        window.location.href = "/";
      }
      var currentLocation = window.location.pathname;
      //   if (currentLocation.includes('home') && (loggedInData.userDetail.isFirstTimeLogin || !loggedInData.userDetail.acceptedTermsAndConditions)) {
      //     window.location.href = "/postlogin";
      //   }
      this.setState({ userName: loggedInData.userProfile.userFkId.userId });
      this.setState({
        isAdmin: loggedInData.userProfile.userFkId.roleFkId.roleId === 1
      });
      // if (currentLocation.includes('usermanagement') && loggedInData.userDetail.roleID !== 1) {
      //   window.location.href = "/home";
      // }
      // else {
      //   this.setState({ isValid: true });
      // }
      // this.setState({ sessionTimeOut: loggedInData.sessionTimeout });
    } else {
      window.location.href = "/";
    }
  }

  public render() {
    const { noBottomSpace, children, isLogged } = this.props;
    return (
      <div
        className="app header-fixed sidebar-fixed aside-menu-fixed pace-done sidebar-lg-show"
        data-gr-c-s-loaded="true"
        cz-shortcut-listen="true"
      >
        <div className="pace  pace-inactive pace-inactive">
          <div
            className="pace-progress"
            data-progress-text="100%"
            data-progress="99"
          >
            <div className="pace-progress-inner"></div>
          </div>
          <div className="pace-activity"></div>
        </div>
        <Header />
        <div className="app-body">
          <SideMenu />
          <main className="main">
            {
    <ol className="breadcrumb">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">
            <a href="#">Admin</a>
        </li>
        <li className="breadcrumb-item active">Dashboard</li>

        <li className="breadcrumb-menu d-md-down-none">
            <div className="btn-group" role="group" aria-label="Button group">
                <a className="btn" href="#">
                    <i className="icon-speech"></i>
                </a>
                <a className="btn" href="/home">
                    <i className="icon-graph"></i> &nbsp;Dashboard</a>
                <a className="btn" href="#">
                    <i className="icon-settings"></i> &nbsp;Settings</a>
            </div>
        </li>
    </ol> }
            <div className="container-fluid">
              <div id="ui-view">{children}</div>
            </div>
          </main>
          <AsidePage />
        </div>
      </div>
    );
  }
}
export default AppFrame;
