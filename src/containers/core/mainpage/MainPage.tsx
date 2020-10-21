import React, { Component, Dispatch } from "react";
import * as styles from './Header.module.scss';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
interface IHeaderProps {
  
}

interface IHeaderState {
  dropdownOpen: boolean;
  dropdownUsersOpen: boolean;
  dropdownLogoutOpen: boolean;
  islocalTimerStart: boolean;
  isTimeOutCalled: boolean;
  CHECK_INTERVAL: number;
  showTCModal: boolean;
}

class MainPage extends Component<IHeaderProps, IHeaderState> {  
  constructor(props) {
    super(props);
    
  }

 
  public render() {
    
    return (
     
<main className="main">

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
<a className="btn" href="./">
<i className="icon-graph"></i> &nbsp;Dashboard</a>
<a className="btn" href="#">
<i className="icon-settings"></i> &nbsp;Settings</a>
</div>
</li>
</ol>
<div className="container-fluid">
<div id="ui-view">
</div>
</div>
</main>
    );
  }
}

export default MainPage;


