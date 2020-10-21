import React, { Component, Dispatch } from "react";
import * as styles from "./Header.module.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

class SidePage extends Component<IHeaderProps, IHeaderState> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav ps ps--active-y">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <i className="nav-icon icon-speedometer"></i> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reports">
                <i className="nav-icon icon-drop"></i> Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/createuser">
                <i className="nav-icon icon-pencil"></i> Manage User
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="sidebar-minimizer brand-minimizer"
          type="button"
        ></button>
      </div>
    );
  }
}
export default SidePage;
