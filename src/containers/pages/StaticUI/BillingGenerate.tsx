import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import {Dropdown} from 'primereact/dropdown';
import {Panel} from 'primereact/panel';
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IBillingGenerate {}
interface IBillingGenerate {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  BillingGenerate: React.FC<IBillingGenerate> = ({
   
    
}) => {
  const initialReportForm = {
    country: "Select Country",
    state: "Select State",
    region: "Select Region",
    district: "",
    processName: "",
   
  }
  const [reportForm, setReport] = useState(initialReportForm);
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [

{"cano":"20191200010187","customername":"G1-001","macid":"1","blockno":"G1","flatno":"001","meterno":"0000824","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"7.855","balanceinr":"36.53","loadcontrol":"ON","meteroperation":"EB (EB-58.266 / DG-0.088)","lastupdatetime":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-"},
{"cano":"20191200010189","customername":"G1-002","macid":"2","blockno":"G1","flatno":"002","meterno":"0000844","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"1.253","balanceinr":"5.82","loadcontrol":"ON","meteroperation":"EB (EB-0.371 / DG-0.012)","lastupdatetime":"11-02-2020 01:05:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-"},
{"cano":"20191200010188","customername":"G1-003","macid":"3","blockno":"G1","flatno":"003","meterno":"0000848","maxloadeb":"54.000","maxloaddg":"18.000","dcuid":"6","balancekwh":"0.255","balanceinr":"1.18","loadcontrol":"ON","meteroperation":"EB (EB-7.907 / DG-0.003)","lastupdatetime":"11-02-2020 01:04:25","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-"},
{"cano":"20191200010191","customername":"G1-004","macid":"4","blockno":"G1","flatno":"004","meterno":"0000805","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"101.075","balanceinr":"470.00","loadcontrol":"ON","meteroperation":"EB (EB-0.168 / DG-0.000)","lastupdatetime":"11-02-2020 01:30:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-"}
      
   ];
      
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
const processName=[
    {label: 'Select Process', value: null},
    {label: 'Meter Information', value: 'Meter Information'},
    {label: 'Instant Profile', value: 'Instant Profile'},
    {label: 'Billing Profile', value: 'Billing Profile'},
    {label: 'Daily Load Profile', value: 'Daily Load Profile'},            
    {label: 'Block Load Profile', value: 'Block Load Profile'},
    {label: 'Name Plate', value: 'Name Plate'},
    {label: 'Tamper Event', value: 'Tamper Event'},
];

const handleInputChange = (event: any) => {
  if (event.target.id === "countries") {
      reportForm.country = event.target.value;
    }else if (event.target.id === "states") {
      reportForm.state = event.target.value;
    }else if (event.target.id === "region") {
      reportForm.region = event.target.value;
    }else if (event.target.id === "districts") {
      reportForm.district = event.target.value;
    }else if (event.target.id === "process") {
      reportForm.processName = event.target.value;
    }
    setReport({...reportForm});
    checkValidation(); 
       
}  

function checkValidation()
{

}
      function onClickAdd(event) {
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
 
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
 
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
      }
      const settingType= [
        {label: 'Select settingType', value: null},
        {label: 'Unit Rate EB', value: 'unitrateeb'},
        {label: 'Unit Rate DG', value: 'unitratedg'},
        {label: 'Emergency  TopUp', value: 'emergencytopup'},
        {label: 'Load EB', value: 'loadeb'},
        {label: 'Credit Topup', value: 'credittopup'}  
      ] ; 
        const rowdetail={
        roleid:0,
        authorizedby:"",
        amount : "" ,
        fromdate:"",
        todate:"",
        cgstper:"",
        sgstper:"",
        adjustment:"",
        arrear:"",
        freeunitdg:"",
        freeuniteb:"",
        gstinno:"",
        cano:""
      };   
      let [rowData, setInput] = useState(rowdetail);
      const onRowSelect=(event)=>{
      
 
        if(!displayDialog){
          var data=event.data;
         
          //setInput(consumer);
          rowData=data;
          //if(userData!=null){
         //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
         //   consumerInputData.createdBy=data.createdBy;                                
         // }          
          //setInput(consumer);
          setInput({ ...rowData }); 
          setdisplayDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
        }
      const handleDeleteSubmit=(event)=>{
               
      }
      var header = <div style={{'textAlign':'left'}}>
      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button>
      <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
      
  </div>;
     
  return (
    <div>

<Dialog header="Update Settings" visible={displayDialog} style={{ overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
                <div className="p-col-12 p-md-2">
            <label htmlFor="cano">CA No</label>
        </div>
        <div className="p-col-12 p-md-4">

        <InputText id="cano" value={rowData.cano}/>   

       </div>
                <div className="p-col-12 p-md-2">
            <label htmlFor="fromdate">From Date</label>
        </div>
        <div className="p-col-12 p-md-4">

        <InputText id="fromdate" value={rowData.fromdate}/>   

       </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="todate">To Date </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="todate" value={rowData.todate}/>   
        </div>
       
        <div className="p-col-12 p-md-2">
            <label htmlFor="gstinno">GSTIN No</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="gstinno" value={rowData.gstinno}/>
        </div>


        <div className="p-col-12 p-md-2">
            <label htmlFor="freeuniteb">Free Unit EB (kWh)</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="freeuniteb" value={rowData.freeuniteb}/>
        </div>
       
        <div className="p-col-12 p-md-2">
            <label htmlFor="freeunitdg">Free Unit DG (kWh)</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="freeunitdg" value={rowData.freeunitdg}/>
        </div>
<div className="p-col-12 p-md-2">
            <label htmlFor="arrear">Arrear (₹)</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="arrear" value={rowData.arrear}/>
        </div>
      
        <div className="p-col-12 p-md-2">
            <label htmlFor="adjustment">Adjustment (₹)</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="adjustment" value={rowData.adjustment}/>
        </div>

        <div className="p-col-12 p-md-2">
            <label htmlFor="cgstper">CGST (%)</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="cgstper" value={rowData.cgstper}/>
        </div>
        
        <div className="p-col-12 p-md-2">
            <label htmlFor="sgstper">SGST (%)</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="sgstper" value={rowData.sgstper}/>
        </div>
        
                            <div className="p-col-12 p-md-4">
                           
                                <Button label="Generate" icon="pi pi-save" onClick={handleSubmit} />
                           
                            </div>
    </div>
               
               
                </div>
           
                )
              }
            </Dialog>

 <div className="p-grid p-fluid">
     <div className="p-col-12">

                <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                            <div className="p-messages-wrapper">
                                <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                                <ul>
                                    <li>
                                        <span className="p-messages-detail">Billing Generate menu used to Generate Bill    with a particular selected meters... 
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
 
         
                        <div className="card card-w-title">
                            <h1>Billing Generate</h1>
                            
                            <Panel header="Search " toggleable={true}>
                            <div className="p-grid">
                   
                   <div className="p-col-12 p-md-2">
                           <label htmlFor="Country">  Country :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="countries" options={countries} required  value={reportForm.country} onChange={handleInputChange} autoWidth={false}   />   
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="State">  State :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="states" options={states} required  autoWidth={false}   value={reportForm.state} onChange={handleInputChange}  /> 
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="CustomerNumber">Region Name</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="region" options={regions} required  autoWidth={false}   value={reportForm.region} onChange={handleInputChange}  />   
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="District">  District :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="districts" options={districts} required  autoWidth={false} value={reportForm.district} onChange={handleInputChange}/> 
                    
                       </div> 
                      
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="CustomerName">Sub Station</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                           <InputText id="CustomerName" />
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="FeederName">Feeder Name</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                           <InputText id="FeederName" />
                       </div> 
                      
                      
   
                       
                       <div className="p-col-12 p-md-1"> </div>
                       <div className="p-col-12 p-md-2">     
                           <Button
                label="Show Report"
                onClick={handleSubmit}
                type="button"
                className="generateButton"
                 
              />
                       </div>
                       <div className="p-col-12 p-md-1">
                           <Button label="Cancel" icon="pi pi-ban" />
                       </div>
                       <div className="p-col-12 p-md-8"> </div>
                      
                    </div>
                            </Panel> 
         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Billing - Generate View</h1>
                    </div>
                     
                </div>
                
           
                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="400px" style={{marginTop:'5px', width: '2000px'}}  header={header}
                    onSelectionChange={onSelectionChangeed} onRowSelect={onRowSelect} 
                    >
												
                                              
                     
                    
                        <Column field="cano" header="CA No." filter={true} />
                        <Column field="customername" header="Customer Name" filter={true} />
                        <Column field="blockno" header="Block No" filter={true} />
                        <Column field="flatno" header="Flat No" filter={true} />
                        <Column field="meterno" header="Meter No" filter={true} />
                        <Column field="dcuid" header="Dcu Id" filter={true} />
                        <Column field="macid" header="Mac Id" filter={true} />  
                        <Column field="lastupdatetime" header="Last Updatetime" filter={true} />
                        <Column field="status" header="Status" filter={true} />

                         
                                    
       </DataTable>
                    </div>
    </div>

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
export default connect(mapStateToProps)(BillingGenerate);