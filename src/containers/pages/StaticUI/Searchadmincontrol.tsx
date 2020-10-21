import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import {Panel} from 'primereact/panel';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface ISearchadmincontrol {}
interface ISearchadmincontrol {
    viewData: any;
    adminControllistData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  SearchadminControl: React.FC<ISearchadmincontrol> = ({
   
    
}) => {
  const adminControldetail = {
    businessunits: "",
    zonename: "",
    unitrateeb: "",
    unitratedg: "",
    emergencytopup: "",
    sanctionloadeb: "",
    sanctionloaddg: "",
    credittopup: "",
    fixchargesonsanctionloadrate: "",
    fixchargesonsanctionloadunit: "",
    maintainanchargessqft: "",
    serverrent: "",
    watercharges: "",
    EffectiveBillingDate: "",
    billingmode: "",
    billingcycle: ""
};

let [adminControllistData, setInput] = useState(adminControldetail);
     
const handleInputChange = (event: any) => {
 
  if (event.target.id === "businessunits") {
    adminControllistData.businessunits = event.target.value;
  } else if (event.target.id === "zonename") {
    adminControllistData.zonename = event.target.value;
  } else if (event.target.id === "unitrateeb") {
    adminControllistData.unitrateeb = event.target.value;
  } else if (event.target.id === "unitratedg") {
    adminControllistData.unitratedg = event.target.value;
  } else if (event.target.id === "emergencytopup") {
    adminControllistData.emergencytopup = event.target.value;
  } else if (event.target.id === "sanctionloadeb") {
    adminControllistData.sanctionloadeb = event.target.value;
  } else if (event.target.id === "sanctionloaddg") {
    adminControllistData.sanctionloaddg = event.target.value;
  } else if (event.target.id === "credittopup") {
    adminControllistData.credittopup = event.target.value;
  } else if (event.target.id === "fixchargesonsanctionloadrate") {
    adminControllistData.fixchargesonsanctionloadrate = event.target.value;
  } else if (event.target.id === "fixchargesonsanctionloadunit") {
    adminControllistData.fixchargesonsanctionloadunit = event.target.value;
  } else if (event.target.id === "maintainanchargessqft") {
    adminControllistData.maintainanchargessqft = event.target.value;
  } else if (event.target.id === "serverrent") {
    adminControllistData.serverrent = event.target.value;
  } else if (event.target.id === "watercharges") {
    adminControllistData.watercharges = event.target.value;
  } else if (event.target.id === "EffectiveBillingDate") {
    adminControllistData.EffectiveBillingDate = event.target.value;
  } else if (event.target.id === "billingmode") {
    adminControllistData.billingmode = event.target.value;
  } else if (event.target.id === "billingcycle") {
    adminControllistData.billingcycle = event.target.value;
  }
  
       
  setInput({ ...adminControllistData });
}    
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","businessunits":"Government","zonename":"Salem","unitrateeb":"1w","unitratedg":"1w","emergencytopup":"9w","sanctionloadeb":"12w","sanctionloaddg":"10w","credittopup":"15hrs","fixchargesonsanctionloadrate":"10w","fixchargesonsanctionloadunit":"15/10","maintainanchargessqft":"1w","serverrent":"2w","watercharges":"9w"},
        {"sno":"2","businessunits":"Government","zonename":"Tirunelveli","unitrateeb":"4w","unitratedg":"2w","emergencytopup":"7w","sanctionloadeb":"15w","sanctionloaddg":"10w","credittopup":"6hrs","fixchargesonsanctionloadrate":"12w","fixchargesonsanctionloadunit":"1/8","maintainanchargessqft":"2w","serverrent":"4w","watercharges":"4w"},
        {"sno":"3","businessunits":"Government","zonename":"Madurai","unitrateeb":"6w","unitratedg":"6w","emergencytopup":"10w","sanctionloadeb":"16w","sanctionloaddg":"20w","credittopup":"8hrs","fixchargesonsanctionloadrate":"20w","fixchargesonsanctionloadunit":"2/8","maintainanchargessqft":"5w","serverrent":"6w","watercharges":"6w"}
  ];
      
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
 
  const billingmode =[
    {label: 'Select Billingmode', value: null},
    {label: 'PostPaid', value: 'PostPaid'},
    {label: 'PrePaid', value: 'PrePaid'}
  ];
  const billingcycle =[
    {label: 'Select Billingcycle', value: null},
    {label: 'Bi Month', value: 'Bi Month'},
    {label: 'Monthwise', value: 'Monthwise'}
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
  const handleStartDateChange = (event: any) => {
    setEffectivedate(event.value);
  };
      function onClickAdd(event) {
        adminControllistData.businessunits="";
        adminControllistData.zonename="";
        adminControllistData.unitrateeb="";
        adminControllistData.unitratedg="";
        adminControllistData.emergencytopup="";
        adminControllistData.sanctionloadeb="";
        adminControllistData.sanctionloaddg="";
        adminControllistData.credittopup="";
        adminControllistData.fixchargesonsanctionloadrate="";
        adminControllistData.fixchargesonsanctionloadunit="";
        adminControllistData.maintainanchargessqft="";
        adminControllistData.serverrent="";
        adminControllistData.watercharges="";
        adminControllistData.EffectiveBillingDate="";
        adminControllistData.billingmode="";
        adminControllistData.billingcycle="";
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
 
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
      const [effectivedate, setEffectivedate] = useState(new Date());
      const onAdminControllistSelect = (event) => {


        if (!displayDialog) {
          var data = event.data;
    
          
         adminControllistData = data;
         
       setInput({ ...adminControllistData });
          setdisplayDialog(true);
        
        }
      }
  return (
    <div>
     
<Dialog header="New Admin Control Details" visible={displayDialog} style={{ width: '70vw', overflow: 'scroll' }} modal={true} onHide={() => setdisplayDialog(false)}>
        {
          displayDialog &&
          (
            <div className="card card-w-title">
         
             
 
             
                <div className="p-grid">
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="icareunit">Business Unit</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                   < Dropdown id="icareunit" options={businessunits}  value={adminControllistData.businessunits} onChange={handleInputChange} />
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="zonename">Zone Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    < Dropdown id="zonename" options={zonenames} value={adminControllistData.zonename} onChange={handleInputChange} />  
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="unitrateeb">Unit Rate EB</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="unitrateeb" value={adminControllistData.unitrateeb} onChange={handleInputChange} /> 
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="unitratedg">Unit Rate DG</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="unitratedg" value={adminControllistData.unitratedg} onChange={handleInputChange} /> 
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="emergencytopup">Emergency Top up</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="emergencytopup"  value={adminControllistData.emergencytopup} onChange={handleInputChange}/>
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="sanctionloadeb"> Sanction Load EB</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="sanctionloadeb"  value={adminControllistData.sanctionloadeb} onChange={handleInputChange}/>
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="sanctionloaddg"> Sanction Load DG</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="sanctionloaddg"  value={adminControllistData.sanctionloaddg} onChange={handleInputChange}/>
                    </div>  
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="credittopup">  Credit Top Up</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="credittopup"  value={adminControllistData.credittopup} onChange={handleInputChange}/>
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="fixchargesonsanctionloadrate">  Fix Charges Rate</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="fixchargesonsanctionloadrate"  value={adminControllistData.fixchargesonsanctionloadrate} onChange={handleInputChange}/>
                    </div> 
                   

                    <div className="p-col-12 p-md-2">
                        <label htmlFor="fixchargesonsanctionloadunit">  Fix Charges Unit</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="fixchargesonsanctionloadunit"  value={adminControllistData.fixchargesonsanctionloadunit} onChange={handleInputChange}/>
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="maintainanchargessqft">  Maintainance Charges SQFT:</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <InputText id="maintainanchargessqft"  value={adminControllistData.maintainanchargessqft} onChange={handleInputChange}/>
                    </div> 
                   
                     
                   
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="serverrent">  Server Rent :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <InputText id="serverrent"  value={adminControllistData.serverrent} onChange={handleInputChange}/>
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="watercharges">Water Charges :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <InputText id="watercharges"  value={adminControllistData.watercharges} onChange={handleInputChange}/>
                    </div> 
                    
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="EffectiveBillingDate">  Effective Billing Date  :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                     
                        <Calendar placeholder="DateTime" value={effectivedate} viewDate={effectivedate} id="EffectiveBillingDate" dateFormat="mm/dd/yy" onSelect={handleStartDateChange} showIcon={true} />

              
                    </div> 
                   
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="billingmode">Billing Mode</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    < Dropdown id="billingmode" options={billingmode}   value={adminControllistData.billingmode} onChange={handleInputChange}/>
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="billingcycle">Billing Cycle</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    < Dropdown id="billingcycle" options={billingcycle}  value={adminControllistData.billingcycle} onChange={handleInputChange} />
                    </div> 
                    <div className="p-col-12 p-md-4">
                        
                        </div>
    
                    
                    <div className="p-col-12 p-md-2">
                        <Button label="Add" icon="pi pi-save"   />
                    </div>
                    <div className="p-col-12 p-md-2">
                        <Button label="Cancel" icon="pi pi-ban" />
                    </div>
                    <div className="p-col-12 p-md-4">
                        
                    </div>

                 </div>
          
       
          </div>
            )
          } 
        </Dialog>


         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Admin control</h1>
                    </div>
                    <div style={{ textAlign: 'left' }}>
          <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Control" onClick={onClickAdd}></Button>
        </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="200px" style={{marginTop:'5px', width: '2500px'}}  header=""
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onAdminControllistSelect}
                    >

<Column field="sno" header="S.no" filter={true} />
                        <Column field="businessunits" header="Business units" filter={true} />
                        <Column field="zonename" header="Zone Name" filter={true} />
                        <Column field="unitrateeb" header="Unit Rate Eb" filter={true} />
                        <Column field="unitratedg" header="Unit Rate DG" filter={true} />
                        <Column field="emergencytopup" header="emergency topup" filter={true} />
                        <Column field="sanctionloadeb" header="sanction loadeb" filter={true} />
                        <Column field="sanctionloaddg" header="sanction loaddg" filter={true} />
                        <Column field="credittopup" header="credit topup" filter={true} />
                        <Column field="fixchargesonsanctionloadrate" header="fix chargesonsanction loadrate" filter={true} />
                        <Column field="fixchargesonsanctionloadunit" header="fix chargesonsanction loadunit" filter={true} />
                        <Column field="maintainanchargessqft" header="maintainance charges sqft" filter={true} />
                        <Column field="serverrent" header="server rent" filter={true} />
                        <Column field="watercharges" header="water charges" filter={true} />
                        
                                       
                                                 
       </DataTable>
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
export default connect(mapStateToProps)(SearchadminControl);
 