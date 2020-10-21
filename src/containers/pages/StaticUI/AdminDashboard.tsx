import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Chart} from 'primereact/chart';
interface IAdminDashboard {}
interface IAdminDashboard {
    
}
const  AdminDashboard: React.FC<IAdminDashboard> = ({
//  dispatch,deviceFormData
 
}) => {
   var barData= {
        labels: ['Mains', 'DG', 'Faulty', 'CreditCut', 'Overload', 'WireBreak', 'Disabled', 'Vacant'],
        datasets: [
            {
                label: 'Meter Status',
                backgroundColor: '#FFC107',
                borderColor: '#FFC107',
                data: [65, 59, 80, 81, 56, 55, 40,12]
            }
            
        ]
    }
   
    
  return (

    <div className="p-grid p-fluid">
     
    <div className="p-col-12 p-lg-9">
        <div className="card">
            <h1 className="centerText">Dashboard </h1>
            <Chart type="bar" data={barData}/>
        </div>

         
    </div>
</div>
 
    );
        
    
};
const mapStateToProps = (state: any) => {
    const { deviceFormData } = state;
    return {
        deviceFormData
    };
};
export default connect(mapStateToProps)(AdminDashboard);
 