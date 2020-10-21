import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterNamePlateReport {}
interface IMeterNamePlateReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterNamePlateReport: React.FC<IMeterNamePlateReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"IN4000055","rtcdateandtime":"14/02/2020 05:30:00","deviceid":"ISEIN4000055","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"0","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"0","statusbyte":"5","averagesignalstrength":"0"},
        {"sno":"2","meterserialnumber":"IN4000057","rtcdateandtime":"14/02/2020 05:25:00","deviceid":"ISEIN4000057","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"2","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"2","statusbyte":"8","averagesignalstrength":"4"},
        {"sno":"3","meterserialnumber":"IN4000059","rtcdateandtime":"14/02/2020 05:20:00","deviceid":"ISEIN4000059","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"3","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"3","statusbyte":"6","averagesignalstrength":"0"},
        {"sno":"4","meterserialnumber":"IN4000061","rtcdateandtime":"14/02/2020 05:15:00","deviceid":"ISEIN4000061","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"0","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4"},
        {"sno":"5","meterserialnumber":"IN4000063","rtcdateandtime":"14/02/2020 05:10:00","deviceid":"ISEIN4000063","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"4","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0"},
        {"sno":"6","meterserialnumber":"IN4000065","rtcdateandtime":"14/02/2020 05:05:00","deviceid":"ISEIN4000065","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"0","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"2","energyvahexport":"8","statusbyte":"1","averagesignalstrength":"2"}
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
                        <h1> Meter Name Plate Data Report</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}
                 selection={dataTableSelection} 
                 scrollable={true}
                    header={header}
                    onSelectionChange={onSelectionChangeed} 
                    globalFilter={globalfilter}                   
                    >
                        <Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="rtcdateandtime" header="RTC - Date  Time" />
                       
                        <Column field="deviceid" header="Device Id" />
                        <Column field="manufacturername" header="Manufacturer Name" />
                        <Column field="firmwareversion" header="Firmware Version" />
                        <Column field="metertype" header="Meter Type" />
                        <Column field="metercategory" header="Meter Category" />
                        <Column field="currentrating" header="Current Rating" />
                        <Column field="yearofmanufacture" header="Year of Manufacture" />
                   										          
               
                                                 
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
export default connect(mapStateToProps)(MeterNamePlateReport);
 