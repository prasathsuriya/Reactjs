import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';
interface IAddConsumer {}
interface IAddConsumer {
   
}
const  AddConsumer: React.FC<IAddConsumer> = ({
//  dispatch,deviceFormData
 
}) => {
   function handlePageChange()
   {
    window.location.href = "/staticui/allcustomer";
 //   window.location.hash = "#/staticui/searchcommondetails"; 
   }
function onCheckboxChange()
{

}
const regions= [
    {label: 'Select Zone', value: null},
    {label: 'Chennai North', value: 'Chennai North'},
    {label: 'Chennai South', value: 'Chennai South'},
    {label: 'Vilupuram', value: 'Vilupuram'},
    {label: 'Trichy', value: 'Trichy'},
    {label: 'Madurai', value: 'Madurai'},
    {label: 'Salem', value: 'Salem'},
    {label: 'Coimbatore', value: 'Coimbatore'},
    {label: 'Tirunelveli', value: 'Tirunelveli'}
  ];
  const countries= [
    {label: 'Select Country', value: null},
    {label: 'India', value: 'India'}
  ];
  const states= [
    {label: 'Select State', value: null},
    {label: 'TamilNadu', value: 'TamilNadu'}
  ];
  const districts= [
    {label: 'Select District', value: null},
    {label: 'Chennai', value: 'Chennai'},
    {label: 'Madurai', value: 'Madurai'}
  ];
  return (
    <div className="p-grid p-fluid">
    <div className="p-col-12">
            <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                <div className="p-messages-wrapper">
                    <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                    <ul>
                        <li>
                            <span className="p-messages-detail">Add Consumer menu used to add a new customer... 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card card-w-title">
         
            <h1>Add Customer</h1>
      <Panel header="Customer Details" toggleable={true}>
             
                <div className="p-grid">
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerNumber">Customer Number</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="CustomerNumber" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerName">Customer Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="CustomerName" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="BlockNo">Block No</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="BlockNo" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="FlatNo">Flat/Shop No :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="FlatNo" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="FlatNo">GST NO :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="GstNo" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="FlatNo"> Area Sq. Ft. :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Area" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Address1">  Address 1 :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Address1" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Address2">  Address 2 :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Address2" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Address3">  Address 3 :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Address3" />
                    </div> 
                   

                    <div className="p-col-12 p-md-2">
                        <label htmlFor="City">  City :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="City" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Country">  Country :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown id="countries" options={countries} required  autoWidth={false} />   
                    </div> 
                   
                     

                    <div className="p-col-12 p-md-2">
                        <label htmlFor="State">  State :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown id="states" options={states} required  autoWidth={false} /> 
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Pincode">  Pincode :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Pincode" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="District">  District :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown id="districts" options={districts} required  autoWidth={false} /> 
                 
                    </div> 


                    <div className="p-col-12 p-md-2">
                        <label htmlFor="MobileNumber"> MobileNumber</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="MobileNumber" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Emailid">Email Id</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Emailid" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Latitude"> Latitude </label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Latitude" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="Longitude">Longitude </label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="Longitude" />
                    </div> 


                    <div className="p-col-12 p-md-2">
                        <label htmlFor="ManufacturerName"> Alert Required </label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <div className="p-grid">
                                        <div className="p-col-6">
                                            <Checkbox value="Email" inputId="cb1" onChange={onCheckboxChange}  />
                                            <label htmlFor="cb1" className="p-checkbox-label">Email</label>
                                        </div>
                                        <div className="p-col-6">
                                            <Checkbox value="SMS" inputId="cb2" onChange={onCheckboxChange}  />
                                            <label htmlFor="cb2" className="p-checkbox-label">SMS</label>
                                        </div>
                                       
                                    </div>
                    </div> 
                   

                    
                    <div className="p-col-12 p-md-2">
                        <Button label="Add" icon="pi pi-save" onClick={handlePageChange} />
                    </div>
                    <div className="p-col-12 p-md-2">
                        <Button label="Cancel" icon="pi pi-ban" />
                    </div>
                    <div className="p-col-12 p-md-4">
                        
                    </div>

                 </div>
          
            </Panel>
            <Panel header="Meter Loaction" toggleable={true}>
                           
            <div className="p-grid">
            <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerNumber">Zone Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown id="zone" options={regions} required  autoWidth={false} />   
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerName">Sub Station</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="CustomerName" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerNumber">Feeder Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="CustomerNumber" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerName">Transformer Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="CustomerName" />
                    </div> 
                    <div className="p-col-12 p-md-2 formlableboldblack">
                        <label htmlFor="CustomerNumber" >Pole Number</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="CustomerNumber" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                      
                    </div>
                    <div className="p-col-12 p-md-2">
                        <Button label="Add" icon="pi pi-save" onClick={handlePageChange} />
                    </div>
                    <div className="p-col-12 p-md-2">
                        <Button label="Cancel" icon="pi pi-ban" />
                    </div>

          </div>
                            </Panel>
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
export default connect(mapStateToProps)(AddConsumer);
 