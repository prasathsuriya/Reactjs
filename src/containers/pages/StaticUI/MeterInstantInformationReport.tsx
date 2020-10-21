import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterInstantInformationReport {}
interface IMeterInstantInformationReport {
    viewData: any;
   
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterInstantInformationReport: React.FC<IMeterInstantInformationReport> = ({
   
   
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
      {"sno":"1","meterserialnumber":"SM_5681","rtcdateandtime":"10/01","l1currentir":"1A","l2currentIY":"1A","l3currentib":"3A","l1voltagevrn":"2A","l2voltagevyn":"1L","l3voltagevbn":"1L","l1signedpowerfactorrphase":"2","l2signedpowerfactoryphase":"1","l3signedpowerfactorbphase":"3","signedthreephasepowerfactorpf":"2","frequencyhz":"2","aparentpowerva":"2","signedactivepowerw":"2","signedreactionpowervar":"3","noofpowerfailures":"4","cumpoweroffdurationinminutes":"5sec","cumtampercount":"3","cumbillingcount":"6","cumprogrammingcount":"5","lastbillingdate":"6/11","cumenergywhimport":"5w","cumenergywhexport":"4w","cumenergyvahimport":"7v","cumenergyvahexport":"22v","maximumdemandactiveimport":"7v","maximumdemandactivedateandtime":"5:30pm","maximumdemandapparentimport":"5v","maximumdemandapparentdateandtime":"6pm","loadlimitfunctionstatus":"low","loadlimitvalueinw":"6w","cumenergyvarhq1":"6v","cumenergyvarhq2":"22v","cumenergyvarhq3":"6w","cumenergyvarhq4":"10w" },
      {"sno":"2","meterserialnumber":"SM_5682","rtcdateandtime":"10/02","l1currentir":"2A","l2currentIY":"2A","l3currentib":"2A","l1voltagevrn":"1A","l2voltagevyn":"2L","l3voltagevbn":"2L","l1signedpowerfactorrphase":"3","l2signedpowerfactoryphase":"2","l3signedpowerfactorbphase":"2","signedthreephasepowerfactorpf":"3","frequencyhz":"1","aparentpowerva":"1","signedactivepowerw":"4","signedreactionpowervar":"2","noofpowerfailures":"5","cumpoweroffdurationinminutes":"1min","cumtampercount":"5","cumbillingcount":"8","cumprogrammingcount":"8","lastbillingdate":"3/11","cumenergywhimport":"8w","cumenergywhexport":"6w","cumenergyvahimport":"10v","cumenergyvahexport":"10v","maximumdemandactiveimport":"10v","maximumdemandactivedateandtime":"6:30pm","maximumdemandapparentimport":"10v","maximumdemandapparentdateandtime":"8pm","loadlimitfunctionstatus":"heavy","loadlimitvalueinw":"7w","cumenergyvarhq1":"8v","cumenergyvarhq2":"20v","cumenergyvarhq3":"8w","cumenergyvarhq4":"8w" },
      {"sno":"3","meterserialnumber":"SM_5683","rtcdateandtime":"10/04","l1currentir":"3A","l2currentIY":"3A","l3currentib":"!A","l1voltagevrn":"3A","l2voltagevyn":"3L","l3voltagevbn":"3L","l1signedpowerfactorrphase":"2","l2signedpowerfactoryphase":"2","l3signedpowerfactorbphase":"1","signedthreephasepowerfactorpf":"1","frequencyhz":"3","aparentpowerva":"3","signedactivepowerw":"6","signedreactionpowervar":"1","noofpowerfailures":"6","cumpoweroffdurationinminutes":"8min","cumtampercount":"7","cumbillingcount":"10","cumprogrammingcount":"10","lastbillingdate":"2/11","cumenergywhimport":"6w","cumenergywhexport":"8w","cumenergyvahimport":"8v","cumenergyvahexport":"15v","maximumdemandactiveimport":"8v","maximumdemandactivedateandtime":"7:30pm","maximumdemandapparentimport":"12v","maximumdemandapparentdateandtime":"10pm","loadlimitfunctionstatus":"low","loadlimitvalueinw":"8w","cumenergyvarhq1":"10v","cumenergyvarhq2":"11v","cumenergyvarhq3":"10w","cumenergyvarhq4":"10w" }
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
                        <h1> Meter Instant Information Report</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} 
                  paginatorPosition="both" 
                  selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}  
                 selection={dataTableSelection} 
                 scrollable={true} 
                 scrollHeight="200px" 
                 style={{marginTop:'5px', width: '6000px'}} 
                 header={header}
                 onSelectionChange={onSelectionChangeed}  
                 globalFilter={globalfilter}
                    >
 <Column field="sno" header="S.no"  />
                        <Column field="meterserialnumber" header="Meter Serial Number"  />
                        <Column field="rtcdateandtime" header="RTC - Date  Time"  />
                        <Column field="l1currentir" header="L1 Current - IR"   />
                        <Column field="l2currentIY" header="L2 Current - IY"   />
                        <Column field="l3currentib" header="L3 Current - IB"  />
                        <Column field="l1voltagevrn" header="L1 Voltage - VRN"   />
                        <Column field="l2voltagevyn" header="L2 Voltage - VYN"   />
                        <Column field="l3voltagevbn" header="L3 Voltage - VBN"   />
                        <Column field="l1signedpowerfactorrphase" header="L1 Signed Power Factor - R Phase"   />
                        <Column field="l2signedpowerfactoryphase" header="L2 Signed Power Factor - Y Phase"   />
                        <Column field="l3signedpowerfactorbphase" header="L3 Signed Power Factor - B Phase"  />
                        <Column field="signedthreephasepowerfactorpf" header="Signed Three Phase Power Factor - PF"  />
                        <Column field="frequencyhz" header="Frequency - Hz"   />
                        <Column field="aparentpowerva" header="Apparent Power - VA"   />
                        <Column field="signedactivepowerw" header="Signed Active Power - W"  />
                        <Column field="signedreactionpowervar" header="Signed Reactive Power- VAr"  />
                        <Column field="noofpowerfailures" header="No Of Power Failures"   />
                        <Column field="cumpoweroffdurationinminutes" header="Cum. Power OFF duration in minutes"  />
                        <Column field="cumtampercount" header="Cum. Tamper Count"   />
                        <Column field="cumbillingcount" header="Cum. Billing Count"  />
                        <Column field="cumprogrammingcount" header="Cum. Programming Count"  />
                        <Column field="lastbillingdate" header="Last Billing Date"   />
                        <Column field="cumenergywhimport" header="Cum Energy - Wh Import"   />
                        <Column field="cumenergywhexport" header="Cum Energy - Wh Export"   />
                        <Column field="cumenergyvahimport" header="Cum Energy - VAh Import"  />
                        <Column field="cumenergyvahexport" header="Cum Energy - VAh Export"   />
                        <Column field="maximumdemandactiveimport" header="Maximum demand Active Import - W"   />
                        <Column field="maximumdemandactivedateandtime" header="Maximum demand Active - Date  Time"   />
                        <Column field="maximumdemandapparentimport" header="Maximum demand Apparent Import - W"  />
                        <Column field="maximumdemandapparentdateandtime" header="Maximum demand Apparent - Date  Time"   />
                        <Column field="loadlimitfunctionstatus" header="Load Limit Function Status"   />
                        <Column field="loadlimitvalueinw" header="Load Limit Value in W"   />
                        <Column field="cumenergyvarhq1" header="Cum Energy - VArh - Q1"  />
                        <Column field="cumenergyvarhq2" header="Cum Energy - VArh - Q2"   />
                        <Column field="cumenergyvarhq3" header="Cum Energy - VArh - Q3"   />
                        <Column field="cumenergyvarhq4" header="Cum Energy - VArh - Q4"   />           
                                                 
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
export default connect(mapStateToProps)(MeterInstantInformationReport);
 