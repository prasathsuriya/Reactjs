import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterDailyLoadInformationReport {}
interface IMeterDailyLoadInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterDailyLoadInformationReport: React.FC<IMeterDailyLoadInformationReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"10/01","cumenergywhimport":"50hz","cumenergywhexport":"11hz","cumenergyvahimport":"12hz","cumenergyvahexport":"19hz","maximumdemandactiveimport":"17w","maximumdemandactivedatetime":"10/11","maximumdemandapparentimport":"19W","maximumdemandapparentdatetime":"14/10"},
        {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/01","cumenergywhimport":"10hz","cumenergywhexport":"17hz","cumenergyvahimport":"15hz","cumenergyvahexport":"75hz","maximumdemandactiveimport":"6w","maximumdemandactivedatetime":"15/11","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"15/10"},
        {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"13/11","cumenergywhimport":"25hz","cumenergywhexport":"25hz","cumenergyvahimport":"20hz","cumenergyvahexport":"97hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"6/12","maximumdemandapparentimport":"7W","maximumdemandapparentdatetime":"8/10"},
        {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"12/01","cumenergywhimport":"35hz","cumenergywhexport":"30hz","cumenergyvahimport":"30hz","cumenergyvahexport":"195hz","maximumdemandactiveimport":"4w","maximumdemandactivedatetime":"8/12","maximumdemandapparentimport":"10W","maximumdemandapparentdatetime":"6/10"},
        {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"17/01","cumenergywhimport":"17hz","cumenergywhexport":"17hz","cumenergyvahimport":"45hz","cumenergyvahexport":"975hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"24/9","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"1/10"},
        {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"10/01","cumenergywhimport":"30hz","cumenergywhexport":"45hz","cumenergyvahimport":"12hz","cumenergyvahexport":"5hz","maximumdemandactiveimport":"19w","maximumdemandactivedatetime":"30/9","maximumdemandapparentimport":"12W","maximumdemandapparentdatetime":"6/11"}
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
                        <h1> Meter Daily Load Information Report</h1>
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
                        <Column field="cumenergywhimport" header="Cum Energy - Wh Import" />
                        <Column field="cumenergywhexport" header="Cum Energy - Wh Export" />
                        <Column field="cumenergyvahimport" header="Cum Energy - VAh Import" />
                        <Column field="cumenergyvahexport" header="Cum Energy - VAh Export" />
                        <Column field="maximumdemandactiveimport" header="Maximum demand Active Import - W" />
                        <Column field="maximumdemandactivedatetime" header="Maximum demand Active - Date  Time" />
                        <Column field="maximumdemandapparentimport" header="Maximum demand Apparent Import - W" />
                        <Column field="maximumdemandapparentdatetime" header="Maximum demand Apparent - Date  Time" />             
                                                 
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
export default connect(mapStateToProps)(MeterDailyLoadInformationReport);
 