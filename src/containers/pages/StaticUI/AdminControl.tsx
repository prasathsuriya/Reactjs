import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';
 
interface IAdminControl {
    adminControlData: any;
}
const  AdminControl: React.FC<IAdminControl> = ({
//  dispatch,deviceFormData
 
}) => {

    const adminControldetail = {
        businessunit: "",
        metercategory: "",
        metertype: "",
        firmwareversion: ""
    };
    let [adminControlData, setInput] = useState(adminControldetail);

   function handlePageChange()
   {
    window.location.href = "/staticui/searchcommondetails";
 //   window.location.hash = "#/staticui/searchcommondetails"; 
   }
function onCheckboxChange()
{

}
const zonenames= [
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
  const businessunits= [
    {label: 'Select Unit', value: null},
    {label: 'Government', value: 'Government'},
    {label: 'Residential', value: 'Residential'},
    {label: 'Apartment', value: 'Apartment'},
    {label: 'Institutions', value: 'Institutions'},
    {label: 'Company', value: 'Company'},
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
                            <span className="p-messages-detail">Add Admin Control menu used to add Admin Controls... 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card card-w-title">
         
            <h1>Admincontrol</h1>
      <Panel header="admincontrol Details" toggleable={true}>
             
                <div className="p-grid">
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="icareunit">Business Unit</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                   < Dropdown id="icareunit" options={businessunits} required  autoWidth={false} />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="zonename">Zone Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    < Dropdown id="zonename" options={zonenames} required  autoWidth={false} />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="unitrateeb">Unit Rate EB</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="unitrateeb" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="unitratedg">Unit Rate DG</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="unitratedg" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="emergencytopup">Emergency Top up</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="emergencytopup" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="sanctionloadeb"> Sanction Load EB</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="sanctionloadeb" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="sanctionloaddg"> Sanction Load DG</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="sanctionloaddg" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="credittopup">  Credit Top Up</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="credittopup" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="fixchargesonsanctionloadrate">  Fix Charges Rate</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="fixchargesonsanctionloadrate" />
                    </div> 
                   

                    <div className="p-col-12 p-md-2">
                        <label htmlFor="fixchargesonsanctionloadunit">  Fix Charges Unit</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="fixchargesonsanctionloadunit" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="maintainanchargessqft">  Maintainance Charges SQFT:</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <InputText id="maintainanchargessqft" />
                    </div> 
                   
                     

                    <div className="p-col-12 p-md-2">
                        <label htmlFor="serverrent">  Server Rent :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <InputText id="serverrent" />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="watercharges">Water Charges :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="watercharges" />
                    </div> 
                    
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="EffectiveBillingDate">  Effective Billing Date  :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="EffectiveBillingDate" />
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
export default connect(mapStateToProps)(AdminControl);