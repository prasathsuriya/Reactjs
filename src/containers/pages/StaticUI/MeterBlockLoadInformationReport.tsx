import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterBlockLoadInformationReport {}
interface IMeterBlockLoadInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterBlockLoadInformationReport: React.FC<IMeterBlockLoadInformationReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"14/02/2020 05:30:00","currentir":"2","currentiy":"4","currentib":"6","voltagevrn":"4","voltagevyn":"6","voltagevbn":"0","energywhimport":"5","energyvahimport":"0","energywhexport":"0","energyvahexport":"0","statusbyte":"5","averagesignalstrength":"0"},
        {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/02/2020 05:25:00","currentir":"3","currentiy":"0","currentib":"5","voltagevrn":"0","voltagevyn":"5","voltagevbn":"2","energywhimport":"8","energyvahimport":"6","energywhexport":"0","energyvahexport":"2","statusbyte":"8","averagesignalstrength":"4"},
        {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"14/02/2020 05:20:00","currentir":"4","currentiy":"2","currentib":"4","voltagevrn":"6","voltagevyn":"8","voltagevbn":"3","energywhimport":"6","energyvahimport":"5","energywhexport":"0","energyvahexport":"3","statusbyte":"6","averagesignalstrength":"0"},
        {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0","energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4"},
        {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4","energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0"},
        {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"14/02/2020 05:05:00","currentir":"3","currentiy":"7","currentib":"3","voltagevrn":"6","voltagevyn":"0","voltagevbn":"0","energywhimport":"5","energyvahimport":"1","energywhexport":"2","energyvahexport":"8","statusbyte":"1","averagesignalstrength":"2"}
 ];
      
       
    
 const [globalfilter, setglobalfilter] = useState();   
 const onfilter=(e) => {setglobalfilter(e.target.value)}  
 
 const renderHeader = () => {
   return (
       <div>
           List of Meters
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
                        <h1> Meter Block Load Information Report</h1>
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
                       
                        <Column field="currentir" header="Current,Ir" />
                        <Column field="currentiy" header="Current,Iy" />
                        <Column field="currentib" header="Current,Ib" />
                        <Column field="voltagevrn" header="Voltage,Vrn" />
                        <Column field="voltagevyn" header="Voltage,Vyn" />
                        <Column field="voltagevbn" header="Voltage,Vbn" />
                        <Column field="energywhimport" header="Energy - Wh Import" />
                        <Column field="energyvahimport" header="Energy - VAh Import" />    
                        <Column field="energywhexport" header="Energy -Wh Export" />
                        <Column field="energyvahexport" header="Energy - VAh Export" />
                        <Column field="statusbyte" header="Status Byte" />
                        <Column field="averagesignalstrength" header="Average Signal Strength" />    

                       										          
               
                                                 
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
export default connect(mapStateToProps)(MeterBlockLoadInformationReport);
 