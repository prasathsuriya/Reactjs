import React, { Component, Dispatch } from "react";
import * as styles from "./Header.module.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faIdCard,
  faBars,
  faCog
} from "@fortawesome/free-solid-svg-icons";
interface IHeaderProps {}

interface IHeaderState {
  dropdownOpen: boolean;
  dropdownUsersOpen: boolean;
  dropdownLogoutOpen: boolean;
  islocalTimerStart: boolean;
  isTimeOutCalled: boolean;
  CHECK_INTERVAL: number;
  showTCModal: boolean;
}

class Header extends Component<IHeaderProps, IHeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropdownUsersOpen: false,
      dropdownLogoutOpen: false,
      islocalTimerStart: false,
      isTimeOutCalled: false,
      CHECK_INTERVAL: 60000, // static for 2 mins
      showTCModal: false
    };
  }

  toggleLogout() {
    this.setState(prevState => ({
      dropdownLogoutOpen: !prevState.dropdownLogoutOpen
    }));
  }
  clickLogout() {
    window.localStorage.setItem("AUTHDATA", "");
    window.location.href = "/";
  }
  public render() {
    return (
      <header className="app-header navbar">
        <button
          className="navbar-toggler sidebar-toggler d-lg-none mr-auto"
          type="button"
          data-toggle="sidebar-show"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <h1>Meter UI</h1>
        </a>
        <button
          className="navbar-toggler sidebar-toggler d-md-down-none"
          type="button"
          data-toggle="sidebar-lg-show"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="nav navbar-nav d-md-down-none">
          {/* <li className="nav-item px-3">
            <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item px-3">
            <a className="nav-link" href="#">Users</a>
        </li>
        <li className="nav-item px-3">
            <a className="nav-link" href="#">Settings</a>
        </li> */}
          {/* <li className="nav-item px-3">
            <a className="nav-link text-danger" href="https://coreui.io/#sneak-peek"><strong>Sneak Peek! Try CoreUI PRO 3.0.0-alpha</strong></a>
        </li> */}
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link nav-link"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header text-center">
                <strong>Account</strong>
              </div>
              <a className="dropdown-item" href="" onClick={this.clickLogout}>
                <i className="fa fa-lock"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
