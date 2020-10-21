import React, { FC, Component } from 'react';
//import Login from '../../core/Accounts/Login/Login';
import { connect } from 'react-redux';

class Forgotpasswordpage extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
               {/* // <Login /> */}
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    const { loginData } = state;
    return {
        loginData
    };
}

const PasswordchangePage = connect(mapStateToProps)(Forgotpasswordpage);

export default PasswordchangePage; 
