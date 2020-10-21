import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { start } from "repl";
import {Panel} from 'primereact/panel';
import { Dropdown } from "primereact/dropdown";
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";
import {InputText} from 'primereact/inputtext';
interface ISettingStatus {}
interface ISettingStatus {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  SettingStatus: React.FC<ISettingStatus> = ({
   
    
}) => {
  const initialReportForm = {
    country: "Select Country",
    state: "Select State",
    region: "Select Region",
    district: "",
    processName: "",
    paymentMode: "",
   
  }
  const [reportForm, setReport] = useState(initialReportForm);
     const [dataTableSelection, setdataTableSelection] = useState();

     const [isShowAmount, setShowAmount] = useState(false);
     const [isShowLoad, setShowLoad] = useState(false);
     const [isShowTopUP, setShowTopUP] = useState(false);

     
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [

        {"cano":"20191200010187","customername":"G1-001","blockno":"G1","flatno":"001","meterno":"0000824","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"7.855","balanceinr":"36.53","loadcontrol":"ON","meteroperation":"EB (EB-58.266 / DG-0.088)","lastupdatetime":"11-02-2020 01:03:13","type":"Credit Top Up","value":"1500.00","code":"","status":"Sucess"  },
{"cano":"20191200010189","customername":"G1-002","blockno":"G1","flatno":"002","meterno":"0000844","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"1.253","balanceinr":"5.82","loadcontrol":"ON","meteroperation":"EB (EB-0.371 / DG-0.012)","lastupdatetime":"11-02-2020 01:05:57","type":"Emergency Top Up","value":"500.00 (Active)","code":"","status":"Failed"},
        {"cano":"20191200010187","customername":"G1-001","blockno":"G1","flatno":"001","meterno":"0000824","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"7.855","balanceinr":"36.53","loadcontrol":"ON","meteroperation":"EB (EB-58.266 / DG-0.088)","lastupdatetime":"11-02-2020 01:03:13","type":"Credit Top Up","value":"1500.00","code":"","status":"Sucess"  },
{"cano":"20191200010188","customername":"G1-003","blockno":"G1","flatno":"003","meterno":"0000848","maxloadeb":"54.000","maxloaddg":"18.000","dcuid":"6","balancekwh":"0.255","balanceinr":"1.18","loadcontrol":"ON","meteroperation":"EB (EB-7.907 / DG-0.003)","lastupdatetime":"11-02-2020 01:04:25","type":"Emergency Top Up","value":"500.00 (Active)","code":"","status":"Failed"},
{"cano":"20191200010191","customername":"G1-004","blockno":"G1","flatno":"004","meterno":"0000805","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"101.075","balanceinr":"470.00","loadcontrol":"ON","meteroperation":"EB (EB-0.168 / DG-0.000)","lastupdatetime":"11-02-2020 01:30:57","type":"Emergency Top Up","value":"500.00 (Active)","code":"","status":"Failed"}
      
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
    {label: 'Select Settings', value: null},
    {label: 'Unit Rate EB', value: '1'},
    {label: 'Unit Rate DG', value: '2'},
    {label: 'Emergency TopUP', value: '3'},
    {label: 'Sanctioned Load EB', value: '4'},            
    {label: 'Sanctioned Load DG', value: '5'},
    {label: 'Credit TOP UP', value: '6'} 
]; 
   

const paymentMode=[
  {label: 'Select PaymentMode', value: null},
    {label: 'Cash', value: '1'},
    {label: 'Debit/Credit Card', value: '2'},
    {label: 'Cheque', value: '3'},
    {label: 'In House', value: '4'},            
    {label: 'Net Banking', value: '5'},
    {label: 'UPI/ PayTM', value: '6'} 
];
      function onClickAdd(event) {
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isValid, setValid] = useState(false);
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
      }
      const handleDeleteSubmit=(event)=>{
               
      }
      const handleInputChange = (event: any) => {
        if (event.target.id === "countries") {
            reportForm.country = event.target.value;
          
          }else if (event.target.id === "states") {
            reportForm.state = event.target.value;
          }else if (event.target.id === "region") {
            reportForm.region = event.target.value;
          }else if (event.target.id === "districts") {
            reportForm.district = event.target.value;
          }else if (event.target.id === "payment") {
            reportForm.paymentMode = event.target.value;
          }  
          else if (event.target.id === "process") {
            reportForm.processName = event.target.value;
            if(reportForm.processName==="1" || reportForm.processName==="2" || reportForm.processName==="3"){
              setShowAmount(true);
              setShowLoad(false);
              setShowTopUP(false);
            }else   if(reportForm.processName==="4" || reportForm.processName==="5"){
              setShowLoad(true);
              setShowAmount(false);
              setShowTopUP(false);
            }else   if(reportForm.processName==="6"){
              setShowLoad(false);
              setShowAmount(false);
              setShowTopUP(true);
            }else
              {
              setShowAmount(false);
              setShowLoad(false);
              setShowTopUP(false);
            }
            
          }
          setReport({...reportForm});
          checkValidation(); 
             
      }  
      
      function checkValidation()
      {
      
      }
      var header = <div style={{'textAlign':'left'}}>
      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button>
      <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
      
  </div>;
     
  return (
    <div>

<div className="p-grid p-fluid">
     <div className="p-col-12">

                <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                            <div className="p-messages-wrapper">
                                <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                                <ul>
                                    <li>
                                        <span className="p-messages-detail">Setting Status menu used to change the Settings  with a particular selected meters... 
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
 
         
                        <div className="card card-w-title">
                            <h1>Setting Status</h1>
                            
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
                       </div>
                       <div className="p-grid">  
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="ProcessName">select Settings</label>
                       </div>
                      
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="process" options={processName} required  autoWidth={false} value={reportForm.processName} onChange={handleInputChange} /> 
                    
                    
                           </div>
                           {isShowAmount &&(                  
                  <div className="p-col-12 p-md-4">
                    <div className="p-grid">
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Amount:</label>                        
                      </div> 
                      <div className="p-col-12 p-md-4" >
                      <InputText id="Amount" />
                        </div> 
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Authorized By:</label>                        
                      </div>  
                      <div className="p-col-12 p-md-4">
                      <InputText id="AuthorizedBy" />
                        </div>              
                    </div>
                  </div>
                )}   
                 {isShowLoad &&(                  
                  <div className="p-col-12 p-md-4">
                    <div className="p-grid">
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Load:</label>                        
                      </div> 
                      <div className="p-col-12 p-md-4" >
                      <InputText id="Load" />
                        </div> 
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Authorized By:</label>                        
                      </div>  
                      <div className="p-col-12 p-md-4">
                      <InputText id="AuthorizedBy" />
                        </div>              
                    </div>
                  </div>
                )}   
                 {isShowTopUP &&(                  
                  <div className="p-col-12 p-md-4">
                    
                    <div className="p-grid">
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Amount:</label>                        
                      </div> 
                      <div className="p-col-12 p-md-4" >
                      <InputText id="Amount" />
                        </div> 
                        <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Payment Mode :</label>                        
                      </div>  
                      <div className="p-col-12 p-md-4">
                      <Dropdown id="payment" options={paymentMode} required  autoWidth={false} value={reportForm.paymentMode} onChange={handleInputChange} /> 
                    
                        </div>      
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Refrence No :</label>                        
                      </div>  
                      <div className="p-col-12 p-md-4">
                      <InputText id="Refrence" />
                        </div>        
                        <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">Transaction No :</label>                        
                      </div>  
                      <div className="p-col-12 p-md-4">
                      <InputText id="Refrence" />
                        </div>              
                    </div>
                  </div>
                )}   
      </div>
                        
   <div className="p-col-12 p-md-2">
            <span className="title"></span>
            <div className="p-grid">
                <Button
                  label="Get Data"
                  onClick={handleSubmit}
                  type="button"
                  className="generateButton"
                  style={{ width: 250 }}
                />
              </div>
            </div>
                      
                   
</Panel> 


         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Setting Status - All Customer</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="400px" style={{marginTop:'5px', width: '2000px'}}  header={header}
                    onSelectionChange={onSelectionChangeed} 
                    >
												

                        <Column field="cano" header="CA No." filter={true} />
                        <Column field="customername" header="Customer Name" filter={true} />
                        <Column field="blockno" header="Block No" filter={true} />
                        <Column field="flatno" header="Flat No" filter={true} />
                        <Column field="meterno" header="Meter No" filter={true} />                        
                        <Column field="dcuid" header="DCU Id" filter={true} />
                        <Column field="type" header="Type" filter={true} />
                        <Column field="value" header="Value" filter={true} />
                        <Column field="code" header="Code" filter={true} />
                        <Column field="status" header="Status" filter={true} />
                        <Column field="lastupdatetime" header="Last Update Time" filter={true} />
                          
                    
                                         
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
export default connect(mapStateToProps)(SettingStatus);
 
 