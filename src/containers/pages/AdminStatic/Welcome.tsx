import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";

 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IWorkflowactors {}
interface IWorkflowactors {
    workflowactorData: any;
    dispatch: Dispatch<any>;
}
const  Welcome: React.FC<IWorkflowactors> = ({
   
    
}) => {
   
    
  return (
    <div>


<h1>Welcome</h1>
    </div>
    );
        
    
};
const mapStateToProps = (state: any) => {
    const { deviceFormData } = state;
    return {
        deviceFormData
    };
};
export default connect(mapStateToProps)(Welcome)