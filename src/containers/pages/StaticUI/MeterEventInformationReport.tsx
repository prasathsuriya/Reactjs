import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterEventInformationReport {}
interface IMeterEventInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterEventInformationReport: React.FC<IMeterEventInformationReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"14/02/2020 05:30:00","eventcode":"1","currentir":"2","currentiy":"4","currentib":"6","voltagevrn":"4","voltagevyn":"6","voltagevbn":"0", "rphase":"6","yphase":"4","bphase":"4",  "energywhimport":"5","energyvahimport":"0","energywhexport":"0","energyvahexport":"0","statusbyte":"5","averagesignalstrength":"0","cumtampercount":"6","sequencenumber":"0" },
        {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/02/2020 05:25:00","eventcode":"2","currentir":"3","currentiy":"0","currentib":"5","voltagevrn":"0","voltagevyn":"5","voltagevbn":"2", "rphase":"5","yphase":"0","bphase":"0",  "energywhimport":"8","energyvahimport":"6","energywhexport":"0","energyvahexport":"2","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"5","sequencenumber":"2" },
        {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"14/02/2020 05:20:00","eventcode":"3","currentir":"4","currentiy":"2","currentib":"4","voltagevrn":"6","voltagevyn":"8","voltagevbn":"3", "rphase":"4","yphase":"6","bphase":"2",  "energywhimport":"6","energyvahimport":"5","energywhexport":"0","energyvahexport":"3","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"8","sequencenumber":"3" },
        {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","eventcode":"4","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0", "rphase":"0","yphase":"5","bphase":"3",  "energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"6","sequencenumber":"0" },
        {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","eventcode":"5","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4", "rphase":"2","yphase":"8","bphase":"4",  "energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"0","sequencenumber":"4" },
        {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"14/02/2020 05:05:00","eventcode":"6","currentir":"3","currentiy":"7","currentib":"3","voltagevrn":"6","voltagevyn":"0","voltagevbn":"0", "rphase":"3","yphase":"6","bphase":"7",  "energywhimport":"5","energyvahimport":"1","energywhexport":"2","energyvahexport":"8","statusbyte":"1","averagesignalstrength":"2","cumtampercount":"0","sequencenumber":"0" },
        {"sno":"7","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","eventcode":"7","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0", "rphase":"0","yphase":"5","bphase":"3",  "energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"6","sequencenumber":"0" },
        {"sno":"8","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","eventcode":"8","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4", "rphase":"2","yphase":"8","bphase":"4",  "energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"0","sequencenumber":"4" }
                                                                                                                                        	                                                                                                                                            	
 ];
      
       
    
 const [globalfilter, setglobalfilter] = useState();   
 const onfilter=(e) => {setglobalfilter(e.target.value)}  
 
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
 
    
  return (
    <div>




         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Meter Event Information Report</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}
                 selection={dataTableSelection} 
                 scrollable={true}
                 style={{marginTop:'5px', width: '2000px'}} 
                    header={header}
                    onSelectionChange={onSelectionChangeed} 
                    globalFilter={globalfilter}
                    >
                        <Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="rtcdateandtime" header="RTC - Date  Time" />
                        <Column field="eventcode" header="Event code" />
                        
                        <Column field="currentir" header="Current,Ir" />
                        <Column field="currentiy" header="Current,Iy" />
                        <Column field="currentib" header="Current,Ib" />
                        <Column field="voltagevrn" header="Voltage,Vrn" />
                        <Column field="voltagevyn" header="Voltage,Vyn" />
                        <Column field="voltagevbn" header="Voltage,Vbn" />
                        <Column field="rphase" header="R-phase" />
                        <Column field="yphase" header="Y-phase" />
                        <Column field="bphase" header="B-phase" />
 
                        <Column field="energywhimport" header="Cum Energy - Wh Import" />
                        <Column field="energywhexport" header="Cum Energy -Wh Export" />
                        <Column field="cumtampercount" header="Tamper Count" />
                        <Column field="sequencenumber" header="Log Sequence Number" />
                     
                        
 
                          										          
               
                                                 
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
export default connect(mapStateToProps)(MeterEventInformationReport);
 