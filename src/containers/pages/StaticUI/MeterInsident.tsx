import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';

interface IMeterInsident {}
interface IMeterInsident {
 
}
const MeterInsident: React.FC<IMeterInsident> = ({
//  dispatch,deviceFormData
}) => {

  const [isSumbmit, setSumbmited] = useState(false);
  const handleSubmit = (event: any) => {
    setSumbmited(true);
  }

const regions= [
  {label: 'Select Region', value: null},
  {label: 'Chennai North', value: 'Chennai North'},
  {label: 'Chennai South', value: 'Chennai South'},
  {label: 'Vilupuram', value: 'Vilupuram'},
  {label: 'Trichy', value: 'Trichy'},
  {label: 'Madurai', value: 'Madurai'},
  {label: 'Salem', value: 'Salem'},
  {label: 'Coimbatore', value: 'Coimbatore'},
  {label: 'Tirunelveli', value: 'Tirunelveli'}
];
const users= [
  {label: 'Select Users', value: null},
  {label: 'Murugavel', value: 'Murugavel'},
  {label: 'PavanKumar', value: 'PavanKumar'},
  {label: 'Prasanth', value: 'Prasanth'},
  {label: 'Sathesh', value: 'Sathesh'} 
] ;
const categories = ['Data not received from DCU/Meter','Relay not operating for connect / disconnect','Communication link failure with DCU/Meter','Network failure, etc','Retry attempts on communication failure','Periodic reading missing','Failure to connect etc'];
  
const handleInputChange = (event: any) => {
 
}
  return (
    <div className="card card-w-title">
    <h1>Create Incident</h1>
    <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="meterid">Meter Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="meterid"/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="regionname">Region Name</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="regionname" options={regions} required  autoWidth={false} />   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="metername">Meter Name</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="metername"/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="category">Category</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="category" options={categories} required  autoWidth={false} />   
        
        
       
                   </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="subcategory">Sub Category</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="subcategory"/>
        </div>
        <div className="p-col-12 p-md-2">
        <label htmlFor="description">Description</label>
        </div>
        <div className="p-col-12 p-md-4">
         <InputTextarea id="Description" rows={3} cols={30} autoResize={true}></InputTextarea>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="assignto">Assign To</label>
        </div>
        <div className="p-col-12 p-md-4">

        <Dropdown options={users} id="userId"  autoWidth={false} />   

       </div>
                            <div className="p-col-12 p-md-4">
                           
                                <Button label="Create Incident" icon="pi pi-save" onClick={handleSubmit} />
                           
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
export default connect(mapStateToProps)(MeterInsident);
 