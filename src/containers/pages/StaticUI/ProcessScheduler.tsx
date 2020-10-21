import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';
import { saveNewFrom,getPSDetails } from "../../../store/actions/ProcessScheduler";
interface IProcessScheduler {}
interface IProcessScheduler {
    dispatch: Dispatch<any>;
    inputFormData: any;
}
const  ProcessScheduler: React.FC<IProcessScheduler> = ({
//  dispatch,deviceFormData
dispatch,inputFormData
}) => {
    const newInputForm = {
        countryName:"",
        stateName:"",
        regionName:"",
        districtName:"",
        subStationName:"",
        feederName:"",
        processName:""
    }
    let [inputForm, setInput] = useState(newInputForm);
    const handleInputChange = (event: any) => {
        if (event.target.id === "countryName") {
            inputForm.countryName = event.target.value;
        } else if (event.target.id === "stateName") {
            inputForm.stateName = event.target.value;
        } else if (event.target.id === "regionName") {
            inputForm.regionName = event.target.value;
        } else if (event.target.id === "districtName") {
            inputForm.districtName = event.target.value;
        } else if (event.target.id === "subStationName") {
            inputForm.subStationName = event.target.value;
        } else if (event.target.id === "feederName") {
            inputForm.feederName = event.target.value;
        } else if (event.target.id === "processName") {
            inputForm.processName = event.target.value;
        }

        setInput({ ...inputForm });
    }
    const [isSumbmit, setSumbmited] = useState(false);
    const [isGetValue, setGetValue] = useState(false);
    const handleSubmit = (event: any) => {
        setSumbmited(true);
        dispatch(saveNewFrom(inputForm));
        setGetValue(false);
    }
   function handlePageChange()
   {
    window.location.href = "/staticui/searchcommondetails";
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
const processs=[
    {label: 'Select Process', value: null},
    {label: 'Instant', value: 'Instant Profile'},
    {label: 'Daily', value: 'Daily Load Profile'},
    {label: 'Billing', value: 'Billing Profile'},
    {label: 'Block', value: 'Block Load Profile'}
];

  const [dataTableSelection, setdataTableSelection] = useState();
  const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
  const dataTableValues = [
      {"reportid":"1","country":"India","state":"TmilNadu","district":"Chennai","region":"Chennai Cental","substation":"","feeder":"","process":"Instant Profile","reportdate":"24-03-2020 7:45 AM","initiatedby":"Pavan","status":"Inprogress","viewdata":""  },
      {"reportid":"2","country":"India","state":"TmilNadu","district":"Tuticorin","region":"Thirunelvel","substation":"Soorankudi","feeder":"Vembar","process":"Block Load Profile","reportdate":"24-03-2020 7:45 AM","initiatedby":"Karthik","status":"status","viewdata":"view"  },
      {"reportid":"3","country":"India","state":"TmilNadu","district":"Madurai","region":"Madurai","substation":"","feeder":"","process":"Daily Load Profile","reportdate":"24-03-2020 7:45 AM","initiatedby":"Kandan","status":"status","viewdata":"view"  },
      {"reportid":"4","country":"India","state":"TmilNadu","district":"Ramnad","region":"Madurai","substation":"","feeder":"","process":"Billing Profile","reportdate":"24-03-2020 7:45 AM","initiatedby":"Murugavel","status":"status","viewdata":"view"  },
      {"reportid":"5","country":"India","state":"TmilNadu","district":"Trichy","region":"Trichy","substation":"","feeder":"","process":"Billing Profile","reportdate":"24-03-2020 7:45 AM","initiatedby":"Muthu","status":"Failure","viewdata":"view"  },
      {"reportid":"6","country":"India","state":"TmilNadu","district":"Coimbatore","region":"Coimbatore","substation":"","feeder":"","process":"Billing Profile","reportdate":"24-03-2020 7:45 AM","initiatedby":"Seenu","status":"Success","viewdata":"view"  }
                                                                                                                                                                                                                                                                                         
];
  
const [isPageLoaded, setPageLoaded] = useState(false);    
const [tableData, setTableData] = useState([]); 
const [deviceType, setDeviceType] = useState("");
const [globalfilter, setglobalfilter] = useState();   
const onfilter=(e) => {setglobalfilter(e.target.value)}  

//alert(isPageLoaded);
function refreshList() {
   // alert("refreshList");
    setPageLoaded(false);
    dispatch(getPSDetails(inputForm));
     

}
 
 
//alert("inputFormData.isLoading "+inputFormData.isLoading);
//alert("inputFormData.isFormSubmit "+inputFormData.isFormSubmit);
if (!inputFormData.isLoading && !inputFormData.isFormSubmit && !isPageLoaded && !isGetValue) {
   // alert("isPageLoaded");
    refreshList();
    setPageLoaded(false);
    setGetValue(true);
}
if (!isPageLoaded && !inputFormData.isListLoading) {
    //   alert(deviceFormData.items);
       var table = inputFormData.items
    //   alert(table);
       setTableData(table);
       setPageLoaded(true);
   }
  

const renderHeader = () => {
 return (
     <div>
         List of Events
         <div  className="p-datatable-globalfilter-container" style={{'textAlign':'left'}}>
         <InputText type="search" onInput= {onfilter} placeholder="Global Search" />
         <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button> 
         </div>
     </div>
 );
}

const header = renderHeader();
 //alert(tableData);
  return (
    <div className="p-grid p-fluid">
    <div className="p-col-12">
            <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                <div className="p-messages-wrapper">
                    <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                    <ul>
                        <li>
                            <span className="p-messages-detail">ProcessScheduler menu used to create a new  Scheduler... 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card card-w-title">
         
            <h1>Create New Scheduler </h1>
      <Panel header="Scheduler " toggleable={true}>
             
                <div className="p-grid">
                   
                <div className="p-col-12 p-md-2">
                        <label htmlFor="Country">  Country :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown options={countries} value={inputForm.countryName} id="countryName" required onChange={handleInputChange} />
                    
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="State">  State :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown options={states} value={inputForm.stateName} id="stateName" required onChange={handleInputChange} />
                   
                    
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerNumber">Region Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown options={regions} value={inputForm.regionName} id="regionName" required onChange={handleInputChange} />
                 
                   
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="District">  District :</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown options={districts} value={inputForm.districtName} id="districtName" required onChange={handleInputChange} />
                  
                    
                    </div> 
                   
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="CustomerName">Sub Station</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <InputText autocomplete="off"  id="subStationName" required value={inputForm.subStationName}
       onChange={handleInputChange} placeholder="Sub Station Name" />
                       
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="FeederName">Feeder Name</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <InputText autocomplete="off"  id="feederName" required value={inputForm.feederName}
       onChange={handleInputChange} placeholder="Feeder Name" />
                        
                    </div> 
                    <div className="p-col-12 p-md-2">
                        <label htmlFor="ProcessName">Process Name</label>
                    </div>
                   
                    <div className="p-col-12 p-md-4">
                   
                    <Dropdown options={processs} value={inputForm.processName} id="processName" required onChange={handleInputChange} />
                  
                        </div>
                   

                    
                    <div className="p-col-12 p-md-2">
                        <Button label="Create" icon="pi pi-save" onClick={handleSubmit} />
                    </div>
                    <div className="p-col-12 p-md-2">
                        <Button label="Cancel" icon="pi pi-ban" />
                    </div>
                    

                 </div>
          
            </Panel>
            <Panel header="Scheduler Details" toggleable={true}>
                           
            <DataTable value={tableData}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}
                 selection={dataTableSelection} 
                 scrollable={true}
                 style={{marginTop:'5px', width: '1800px'}} 
                    header={header}
                    onSelectionChange={onSelectionChangeed} 
                    globalFilter={globalfilter}
                    >
                        <Column field="reportId" header="Report Id" />
                        <Column field="countryName" header="Country" />
                        <Column field="stateName" header="State" />
                        <Column field="districtName" header="District" />
                        
                        <Column field="regionName" header="Region" />
                        <Column field="subStationName" header="Sub Station" />
                        <Column field="feederName" header="Feeder" />
                        <Column field="processName" header="Process" />
                        <Column field="dateInserted" header="Report Date" />
                        <Column field="initiatedBy" header="Initiated By" />
                        <Column field="status" header="Status" />
                        <Column field="viewdata" header="View Data" />
                         
                                                 
       </DataTable>
                            </Panel>
          </div>
       
</div>
</div>
    );
        
    
};
const mapStateToProps = (state: any) => {
    const { inputFormData } = state;
    return {
        inputFormData
    };
};
export default connect(mapStateToProps)(ProcessScheduler); 
 