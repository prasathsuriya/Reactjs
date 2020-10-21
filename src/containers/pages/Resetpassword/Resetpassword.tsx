import React, { FC, Component } from 'react';
//import Login from '../../core/Accounts/Login/Login';
import { connect } from 'react-redux';

class ResetpasswordPage extends React.Component {
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
    const { loginData, passwordresetData } = state;
    return {
        loginData, passwordresetData
    };
}

const ResetPage = connect(mapStateToProps)(ResetpasswordPage);

export default ResetPage; 
