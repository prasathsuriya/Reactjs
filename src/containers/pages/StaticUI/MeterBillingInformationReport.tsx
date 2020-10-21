import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterBillingInformationReport {}
interface IMeterBillingInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterBillingInformationReport: React.FC<IMeterBillingInformationReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"SM_5681","lastbillingdate":"10/01","cumenergywhimport":"1w","cumenergywhexport":"1w","cumenergyvahimport":"9w","cumenergyvahexport":"12w","maximumdemandactiveimport":"10w","maximumdemandactivedateandtime":"15hrs","maximumdemandapparentimport":"10w","maximumdemandapparentdateandtime":"15/10","cumenergyvarhq1":"1w","cumenergyvarhq2":"2w","cumenergyvarhq3":"9w","cumenergyvarhq4":"7w","systempowerfactorforbillingperiod":"2days","cumenergywhimporttz1":"3w","cumenergywhimporttz2":"4w","cumenergywhimporttz3":"15w","cumenergywhimporttz4":"30w","cumenergywhimporttz5":"62w","cumenergywhimporttz6":"55w","cumenergywhimporttz7":"6w","cumenergywhimporttz8":"15w","cumenergyvahimporttz1":"40w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"22w","cumenergyvahimporttz4":"7w","cumenergyvahimporttz5":"5w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"6w","mdwimporttz8":"10w","mdwtz8datetime":"21w","billingpoweronduration":"5days"},
        {"sno":"2","meterserialnumber":"SM_5682","lastbillingdate":"12/01","cumenergywhimport":"4w","cumenergywhexport":"2w","cumenergyvahimport":"7w","cumenergyvahexport":"15w","maximumdemandactiveimport":"10w","maximumdemandactivedateandtime":"6hrs","maximumdemandapparentimport":"12w","maximumdemandapparentdateandtime":"1/8","cumenergyvarhq1":"2w","cumenergyvarhq2":"4w","cumenergyvarhq3":"4w","cumenergyvarhq4":"9w","systempowerfactorforbillingperiod":"4days","cumenergywhimporttz1":"5w","cumenergywhimporttz2":"7w","cumenergywhimporttz3":"50w","cumenergywhimporttz4":"31w","cumenergywhimporttz5":"60w","cumenergywhimporttz6":"50w","cumenergywhimporttz7":"63w","cumenergywhimporttz8":"52w","cumenergyvahimporttz1":"4w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"23w","cumenergyvahimporttz4":"71w","cumenergyvahimporttz5":"5w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"61w","mdwimporttz8":"17w","mdwtz8datetime":"28w","billingpoweronduration":"8days"},
        {"sno":"3","meterserialnumber":"SM_5683","lastbillingdate":"15/01","cumenergywhimport":"6w","cumenergywhexport":"6w","cumenergyvahimport":"10w","cumenergyvahexport":"16w","maximumdemandactiveimport":"20w","maximumdemandactivedateandtime":"8hrs","maximumdemandapparentimport":"20w","maximumdemandapparentdateandtime":"2/8","cumenergyvarhq1":"5w","cumenergyvarhq2":"6w","cumenergyvarhq3":"6w","cumenergyvarhq4":"10w","systempowerfactorforbillingperiod":"6days","cumenergywhimporttz1":"8w","cumenergywhimporttz2":"8w","cumenergywhimporttz3":"5w","cumenergywhimporttz4":"33w","cumenergywhimporttz5":"61w","cumenergywhimporttz6":"60w","cumenergywhimporttz7":"62w","cumenergywhimporttz8":"35w","cumenergyvahimporttz1":"4w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"20w","cumenergyvahimporttz4":"5w","cumenergyvahimporttz5":"5:w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"6w","mdwimporttz8":"10w","mdwtz8datetime":"24w","billingpoweronduration":"10days"}
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
                        <h1> Meter Billing Information Report</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false} 
                 selection={dataTableSelection} 
                 scrollable={true} scrollHeight="200px" 
                 style={{marginTop:'5px', width: '6000px'}} 
                 header={header}
                 onSelectionChange={onSelectionChangeed} 
                 globalFilter={globalfilter}
                    >

<Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="lastbillingdate" header="Last Billing Datee" />
                        <Column field="cumenergywhimport" header="Cum Energy - Wh Import" />
                        <Column field="cumenergywhexport" header="Cum Energy - Wh Export" />
                        <Column field="cumenergyvahimport" header="Cum Energy - VAh Import" />
                        <Column field="cumenergyvahexport" header="Cum Energy - VAh Export" />
                        <Column field="maximumdemandactiveimport" header="Maximum demand Active Import - W" />
                        <Column field="maximumdemandactivedateandtime" header="Maximum demand Active - Date  Time" />
                        <Column field="maximumdemandapparentimport" header="Maximum demand Apparent Import - VA" />
                        <Column field="maximumdemandapparentdateandtime" header="Maximum demand Apparent - Date  Time" />
                        <Column field="cumenergyvarhq1" header="Cum Energy - VArh - Q1" />
                        <Column field="cumenergyvarhq2" header="Cum Energy - VArh - Q2" />
                        <Column field="cumenergyvarhq3" header="Cum Energy - VArh - Q3" />
                        <Column field="cumenergyvarhq4" header="Cum Energy - VArh - Q4" />
                        <Column field="systempowerfactorforbillingperiod" header="System Power Factor for Billing Period" />
                        <Column field="cumenergywhimporttz1" header="Cum. Energy - Wh Import - TZ1" />
                        <Column field="cumenergywhimporttz2" header="Cum. Energy - Wh Import - TZ2" />
                        <Column field="cumenergywhimporttz3" header="Cum. Energy - Wh Import - TZ3" />
                        <Column field="cumenergywhimporttz4" header="Cum. Energy - Wh Import - TZ4" />
                        <Column field="cumenergywhimporttz5" header="Cum. Energy - Wh Import - TZ5" />
                        <Column field="cumenergywhimporttz6" header="Cum. Energy - Wh Import - TZ6" />
                        <Column field="cumenergywhimporttz7" header="Cum. Energy - Wh Import - TZ7" />
                        <Column field="cumenergywhimporttz8" header="Cum. Energy - Wh Import - TZ8" />
                        <Column field="cumenergyvahimporttz1" header="Cum. Energy - VAh Import - TZ1" />
                        <Column field="cumenergyvahimporttz2" header="Cum. Energy - VAh Import - TZ2" />
                        <Column field="cumenergyvahimporttz3" header="Cum. Energy - VAh Import - TZ3" />
                        <Column field="cumenergyvahimporttz4" header="Cum. Energy - VAh Import - TZ4" />
                        <Column field="cumenergyvahimporttz5" header="Cum. Energy - VAh Import - TZ5" />
                        <Column field="cumenergyvahimporttz6" header="Cum. Energy - VAh Import - TZ6" />
                        <Column field="cumenergyvahimporttz7" header="Cum. Energy - VAh Import - TZ7" />
                        <Column field="cumenergyvahimporttz8" header="Cum. Energy - VAh Import - TZ8" />
                        <Column field="mdwimporttz1" header="MD W Import - TZ1" />
                        <Column field="mdwtz1datetime" header="MD W - TZ1 - Date  Time" />
                        <Column field="mdwimportz2" header="MD W Import - TZ2" />
                        <Column field="mdwtz2datetime" header="MD W - TZ2 - Date  Time" />
                        <Column field="mdwimporttz3" header="MD W Import - TZ3" />
                        <Column field="mdwtz3datetime" header="MD W - TZ3 - Date  Time" />
                        <Column field="mdwimporttz4" header="MD W Import - TZ4" />
                        <Column field="mdwtz4datetime" header="MD W - TZ4 - Date  Time" />
                        <Column field="mdwimportz5" header="MD W Import - TZ5" />
                        <Column field="mdwtz5datetime" header="MD W - TZ5 - Date  Time" />
                        <Column field="mdwimporttz6" header="MD W Import - TZ6" />
                        <Column field="mdwtz6datetime" header="MD W - TZ6 - Date  Time" />
                        <Column field="mdwimportz7" header="MD W Import - TZ7" />
                        <Column field="mdwtz7datetime" header="MD W - TZ7 - Date Time" />
                        <Column field="mdwimporttz8" header="MD W Import - TZ8" />
                        <Column field="mdwtz8datetime" header="MD W - TZ8 - Date & Time" />
                        <Column field="billingpoweronduration" header="Billing Power On Duration in Minutes (During Billing Period)" />
                                       
                                                 
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
export default connect(mapStateToProps)(MeterBillingInformationReport);
 