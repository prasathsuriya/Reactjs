import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
import {getACTUALINSTANTList  } from "../../../store/actions/ActualInstant";
import {getACTUALBLOCKLOADList } from "../../../store/actions/ActualBlockload";
import {getMETERLOCATIONList  } from "../../../store/actions/Meterlocation";
import {saveTickets,getTicketsList } from "../../../store/actions/Tickets";
import { RouteComponentProps } from "react-router";
import {  useEffect } from "react";
import {Growl} from 'primereact/growl';
import {Panel} from 'primereact/panel';
import { getCurrentUser } from "../../../store/selectors/Accounts";
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";
import {TabView,TabPanel} from 'primereact/tabview';
interface IMeterInstantInformationReport {}
interface IMeterInstantInformationReport {
    viewData: any;
   
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
    match: any;
    METERLOCATIONData:any;
  loginData: any;
  props: RouteComponentProps;
  deviceFormData: any;
  loadGraphData: any;
  dailyGraphData: any;
  ACTUALINSTANTData: any;
  ACTUALBLOCKLOADData: any;
  ticketsData: any;
}
const  Newviewmeter: React.FC<IMeterInstantInformationReport> = ({
    match,  dispatch,
    deviceFormData,
    loadGraphData,
    METERLOCATIONData,
    ACTUALINSTANTData,
    ACTUALBLOCKLOADData,
    ticketsData  
   
}) => {
    let actcode = match.params.id;
    useEffect(() => {
      var data = getCurrentUser();
      if (data !== null) {
        console.log(data);
        //dispatch(getNoOfDevicees(data.userProfile.tenantFkId.id));
        //dispatch(getActiveMeterCount(data.userProfile.tenantFkId.id));
        dispatch(getTicketsList(data.userProfile.roleFkId.companyAutoId.id));   
        dispatch(getMETERLOCATIONList(data.userProfile.roleFkId.companyAutoId.id)); 
        dispatch(getACTUALINSTANTList(data.userProfile.roleFkId.companyAutoId.id)); 
        dispatch(getACTUALBLOCKLOADList(data.userProfile.roleFkId.companyAutoId.id)); 
        
      } else {
        window.location.href = "/";
      }
    }, []);
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
      {"sno":"1","meterserialnumber":"SM_5681","rtcdateandtime":"10/01","l1currentir":"1A","l2currentIY":"1A","l3currentib":"3A","l1voltagevrn":"2A","l2voltagevyn":"1L","l3voltagevbn":"1L","l1signedpowerfactorrphase":"2","l2signedpowerfactoryphase":"1","l3signedpowerfactorbphase":"3","signedthreephasepowerfactorpf":"2","frequencyhz":"2","aparentpowerva":"2","signedactivepowerw":"2","signedreactionpowervar":"3","noofpowerfailures":"4","cumpoweroffdurationinminutes":"5sec","cumtampercount":"3","cumbillingcount":"6","cumprogrammingcount":"5","lastbillingdate":"6/11","cumenergywhimport":"5w","cumenergywhexport":"4w","cumenergyvahimport":"7v","cumenergyvahexport":"22v","maximumdemandactiveimport":"7v","maximumdemandactivedateandtime":"5:30pm","maximumdemandapparentimport":"5v","maximumdemandapparentdateandtime":"6pm","loadlimitfunctionstatus":"low","loadlimitvalueinw":"6w","cumenergyvarhq1":"6v","cumenergyvarhq2":"22v","cumenergyvarhq3":"6w","cumenergyvarhq4":"10w" },
      {"sno":"2","meterserialnumber":"SM_5682","rtcdateandtime":"10/02","l1currentir":"2A","l2currentIY":"2A","l3currentib":"2A","l1voltagevrn":"1A","l2voltagevyn":"2L","l3voltagevbn":"2L","l1signedpowerfactorrphase":"3","l2signedpowerfactoryphase":"2","l3signedpowerfactorbphase":"2","signedthreephasepowerfactorpf":"3","frequencyhz":"1","aparentpowerva":"1","signedactivepowerw":"4","signedreactionpowervar":"2","noofpowerfailures":"5","cumpoweroffdurationinminutes":"1min","cumtampercount":"5","cumbillingcount":"8","cumprogrammingcount":"8","lastbillingdate":"3/11","cumenergywhimport":"8w","cumenergywhexport":"6w","cumenergyvahimport":"10v","cumenergyvahexport":"10v","maximumdemandactiveimport":"10v","maximumdemandactivedateandtime":"6:30pm","maximumdemandapparentimport":"10v","maximumdemandapparentdateandtime":"8pm","loadlimitfunctionstatus":"heavy","loadlimitvalueinw":"7w","cumenergyvarhq1":"8v","cumenergyvarhq2":"20v","cumenergyvarhq3":"8w","cumenergyvarhq4":"8w" },
      {"sno":"3","meterserialnumber":"SM_5683","rtcdateandtime":"10/04","l1currentir":"3A","l2currentIY":"3A","l3currentib":"!A","l1voltagevrn":"3A","l2voltagevyn":"3L","l3voltagevbn":"3L","l1signedpowerfactorrphase":"2","l2signedpowerfactoryphase":"2","l3signedpowerfactorbphase":"1","signedthreephasepowerfactorpf":"1","frequencyhz":"3","aparentpowerva":"3","signedactivepowerw":"6","signedreactionpowervar":"1","noofpowerfailures":"6","cumpoweroffdurationinminutes":"8min","cumtampercount":"7","cumbillingcount":"10","cumprogrammingcount":"10","lastbillingdate":"2/11","cumenergywhimport":"6w","cumenergywhexport":"8w","cumenergyvahimport":"8v","cumenergyvahexport":"15v","maximumdemandactiveimport":"8v","maximumdemandactivedateandtime":"7:30pm","maximumdemandapparentimport":"12v","maximumdemandapparentdateandtime":"10pm","loadlimitfunctionstatus":"low","loadlimitvalueinw":"8w","cumenergyvarhq1":"10v","cumenergyvarhq2":"11v","cumenergyvarhq3":"10w","cumenergyvarhq4":"10w" }
];
const aaroles={
    circleName:"",
    subdivisionName:"",
    divisionName : "",
    sectionName : "",
    townName :"",
    substationName: "",
    feederName:"",
    transformerName : "",
    circleId:"",
    subdivisionId:"",
    divisionId:"",
    sectionId:"",
    townId:"",
    substationId:"",
    feederId:"",
    transformerId:"",
    meterId:"",
    protocoltype:"",
    manufacturename:"",
    firmwareversion:""
    //updated_by
  }; 
  const aapermissions={
    rtcdate:"",
    cumenergywhimport:"",
    cumenergyvahimport:"",
    apparentpower: "",
    cumenergywhexport : "",
    cumenergyvahexport :"",
    l1current: "",
    l2current:"",
    l3current : "",
    l1voltage : "",
    l2voltage : "",
    l3voltage : "",
    l1signedr : "",
    l1signedy : "",
    l1signedb : "",
    signed3phasepower: "",
    signedfrequency: "",
    noofpower: "",
    cumpower:"",
    cumtamper: "",
    programmingcount:"",
    powerfactor:""
    //updated_by
  }; 
  let [aarolesInputData, setInput] = useState(aaroles); 
  let [aapermissionInputData, settingInput] = useState(aapermissions);
const [globalfilter, setglobalfilter] = useState();   
const [isPageLoder, setPageLoader]=useState(false);
const [isPageListing, setPageList]=useState(false);
const onfilter=(e) => {setglobalfilter(e.target.value)} 
loadsGrid();
      function loadsGrid(){
      
      if (!isPageListing && !ACTUALINSTANTData.isLoading) {
        
          var meters=new Array<any>();
         // alert(JSON.stringify(METERLOCATIONData.items.meterDetailsAutoid));
          if(ACTUALINSTANTData.items.length>0){                
            for(var i=0;i<ACTUALINSTANTData.items.length;i++){
            
              
              var element=ACTUALINSTANTData.items[i];
              if(element.meterAutoid.meterSerialNumber==actcode){ 
              //  alert("instant");
              aapermissionInputData.rtcdate = element.rtcDate;
              aapermissionInputData.cumenergywhimport = element.cumEnergyWhImport;
              aapermissionInputData.cumenergyvahimport = element.cumEnergyVahImport;
              aapermissionInputData.apparentpower = element.apparentPowerVa;
              aapermissionInputData.cumenergywhexport = element.cumEnergyWhExport;
              aapermissionInputData.cumenergyvahexport = element.cumEnergyVahExport;
              aapermissionInputData.l1current =  element.l1CurrentIr;  
              aapermissionInputData.l2current= element.l2CurrentIy;
              aapermissionInputData.l3current = element.l3CurrentIb;
              aapermissionInputData.l1voltage = element.l1VoltageVrn;
              aapermissionInputData.l2voltage = element.l2VoltageVyn;
              aapermissionInputData.l3voltage = element.l3VoltageVbn;
              aapermissionInputData.l1signedr = element.l1SignedPfR;
              aapermissionInputData.l1signedy = element.l2SignedPfY;
              aapermissionInputData.l1signedb = element.l3SignedPfB;
              aapermissionInputData.signed3phasepower = element.signedPf;
              aapermissionInputData.signedfrequency = element.frequencyHz;
              aapermissionInputData.noofpower = element.noOfPowerFailures;
              aapermissionInputData.cumpower = element.cumPowerOffDuration;
              aapermissionInputData.cumtamper = element.cumTamperCount;
              aapermissionInputData.programmingcount = element.cumProgrammingCount;
              aapermissionInputData.powerfactor = element.powerfactor;
              settingInput({ ...aapermissionInputData }); 
              meters.push(element);
            //  alert(JSON.stringify(aarolesInputData));
              
              }
              
            }      
          }
          setPageList(true);  
          }     
      
      }
loadingGrid();
function loadingGrid(){
  
if (!isPageLoder && !METERLOCATIONData.isLoading) {
 // alert(JSON.stringify(METERLOCATIONData));
    var meters=new Array<any>();
   // alert(JSON.stringify(METERLOCATIONData.items.meterDetailsAutoid));
    if(METERLOCATIONData.items.length>0){                
      for(var i=0;i<METERLOCATIONData.items.length;i++){
      
        
        var element=METERLOCATIONData.items[i];
        if(element.meterDetailsAutoid.meterSerialNumber==actcode){  
         // alert("location");
        aarolesInputData.circleName = element.circleAutoid.circleName;
        aarolesInputData.divisionName = element.divisionAutoid.divisionName;
        aarolesInputData.subdivisionName = element.subdivisionAutoid.subdivisionName;
        aarolesInputData.sectionName = element.sectionAutoid.sectionName;
        aarolesInputData.townName= element.townAutoid.townName;
        aarolesInputData.substationName = element.substationAutoid.subStationName;
        aarolesInputData.feederName =  element.feederAutoid.feederName;  
        aarolesInputData.transformerName = element.transformerAutoid.transformerName;
        aarolesInputData.meterId = element.meterDetailsAutoid.meterSerialNumber;
        aarolesInputData.protocoltype = element.meterDetailsAutoid.protocalType;
        aarolesInputData.manufacturename = element.meterDetailsAutoid.manufactureAutoid.manufactureName;
        setInput({ ...aarolesInputData }); 
        meters.push(element);
       // alert(JSON.stringify(aarolesInputData));
        }
        
      }      
    }
    setPageLoader(true);  
    }     

}
const [activeIndex, setActiveIndex] = useState(1);
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
function onClickAdd(event) {
  window.location.href="/meter/newmeterthreesixty/"+actcode;
}
const header = renderHeader();

    
       
     
  return (
    <div>
     
     <div className="p-grid">
     <div className="p-col-12 p-md-2"style={{width:'600px'}} >
     <Panel header="Meter Information" toggleable={true}>
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="report_type">Circle </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="circle"  value={aarolesInputData.circleName} required style={{width:'70px'}} autoWidth={false} /> 
                          </div>
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="report_type_name"> Division</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="division"   value={aarolesInputData.divisionName} required style={{width:'70px'}} autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="consumerAddress">Subdivision</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="subdivision"   value={aarolesInputData.subdivisionName} required style={{width:'70px'}}  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="consumerAddress">Section Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="section"   value={aarolesInputData.sectionName} required style={{width:'70px'}} autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="status">Town</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="town"    value={aarolesInputData.townName} required style={{width:'70px'}} autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="file_name">Sub Station</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="substation"   value={aarolesInputData.substationName} required style={{width:'70px'}} autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="file_name">feederName</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="feeder"  value={aarolesInputData.feederName} required  style={{width:'70px'}}autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="file_name">Dt Name</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="transformer"   value={aarolesInputData.transformerName} required style={{width:'70px'}} autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                        </div>
                        </Panel>  
                        </div>
                        <div className="p-col-12 p-md-4" style={{width:'600px'}}>
                        <Panel header="Meter Communication" toggleable={true}>        
<div className="p-grid">
<div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="report_type">Last communication </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                          <InputText id="report_type" name="report_type" value={aapermissionInputData.rtcdate}style={{width:'60px'}}  required  />
                          </div>
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="report_type_name"> Last Instantaneous </label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                          <InputText id="report_type_name" name="report_type_name" value={aapermissionInputData.cumenergywhimport}style={{width:'60px'}}   />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="consumerAddress">Last Load synced</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                          <InputText id="file_name" name="file_name" value={aapermissionInputData.cumenergyvahimport} style={{width:'60px'}} />
                        </div>
                     
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="consumerAddress">Last Bill Synced </label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                          <InputText id="file_name1" name="file_name1" value={aapermissionInputData.apparentpower} style={{width:'60px'}} />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="status">Last event synced</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                          <InputText id="status" name="status" value={aapermissionInputData.powerfactor} style={{width:'60px'}} />
                        </div>
                        
                        
                         
                    </div>
                   
                       
                    </Panel> 
                    </div>
                    <div className="p-col-12 p-md-2"style={{width:'600px'}}   >
<Panel header="Meter Information" toggleable={true}>                   
<div className="p-grid">
<div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="report_type">Meter Serial Number </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="circle"  value={aarolesInputData.meterId} style={{width:'70px'}} required  autoWidth={false} /> 
                          </div>
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="report_type_name"> Protocal Type</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="division"   value={aarolesInputData.protocoltype} style={{width:'70px'}} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="consumerAddress">Manufacture Name</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="subdivision"   value={aarolesInputData.manufacturename}style={{width:'70px'}}  required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="consumerAddress">Firmware version</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="section"   value={aarolesInputData.sectionName} style={{width:'70px'}}  required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="status">CT Ratio</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="town"    value={aarolesInputData.townName}style={{width:'70px'}}  required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2"style={{width:'110px'}}>
                          <label htmlFor="file_name">PT Ratio</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'110px'}}>
                        <InputText id="substation"   value={aarolesInputData.substationName} style={{width:'70px'}} required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    
                     
       </Panel>             
       </div>
       </div>    
                    <Panel header="Instantaneous Data" toggleable={true}>
                   
<div className="p-grid">
<div className="p-col-12 p-md-2" style={{width:'120px'}} >
                          <label htmlFor="report_type">RTC Data </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="report_type" name="report_type" value={aapermissionInputData.rtcdate} required style={{width:'70px'}} />
                          </div>
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="report_type_name"> kwh </label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="report_type_name" name="report_type_name" value={aapermissionInputData.cumenergywhimport} style={{width:'70px'}} />
                        </div>
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name"></label>
                        </div>
                      <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">L1  </label>
                        </div>
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                        <label htmlFor="file_name">L2  </label>
                        
                      </div>
                      <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                        <label htmlFor="file_name">L3  </label>
                        
                      </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="consumerAddress">kvah</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name" name="file_name" value={aapermissionInputData.cumenergyvahimport} style={{width:'70px'}} />
                        </div>
                     
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="consumerAddress">kva </label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name1" name="file_name1" value={aapermissionInputData.apparentpower}style={{width:'70px'}}   />
                        </div>
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Current</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1current} style={{width:'70px'}} />
                        
                      </div>
                      <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l2current} style={{width:'70px'}} />
                        
                      </div>
                      <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l3current} style={{width:'70px'}} />
                        
                      </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="status">Average Powerfactor</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="status" name="status" value={aapermissionInputData.powerfactor} style={{width:'70px'}} />
                        </div>
                       
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Frequency</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value= {aapermissionInputData.signedfrequency} style={{width:'70px'}}/>
                        
                      </div>

                      <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Voltage</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1voltage} style={{width:'70px'}} />
                        
                      </div>
                      <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l2voltage} style={{width:'70px'}} />
                        
                      </div>
                      <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l3voltage} style={{width:'70px'}} />
                        
                      </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Total Power Outrage</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.noofpower} style={{width:'70px'}}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Outrage Time</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l2current} style={{width:'70px'}} />
                        
                      </div>
                      <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Signed Power</label>
                        </div>
                      <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1signedb} style={{width:'70px'}} />
                        
                      </div>
                      <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1signedr} style={{width:'70px'}} />
                        
                      </div>
                      <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1signedy} style={{width:'70px'}} />
                        
                      </div>
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">MD Reset Count</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.cumpower} style={{width:'70px'}}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Programming Count </label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.programmingcount}  style={{width:'70px'}}  />
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Tamper Count</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.cumtamper} style={{width:'70px'}}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2"style={{width:'120px'}}>
                          <label htmlFor="file_name">Power Of Duration</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{width:'120px'}}>
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.cumpower} style={{width:'70px'}}  />
                        
                      </div>
                       
                      <div style={{ textAlign: "left", width: "40em", height:"800em" }}>
                    <Button type="button" icon="pi pi-plus" iconPos="edit selected" label="360 degree view" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                        
                        
                   </div>
                   
                    </Panel>
                  
                  
                   
                   
                 
                
                 
    </div>
    );
        
    
};
const mapStateToProps = (state: any) => {
    const { deviceFormData,  METERLOCATIONData,
        ACTUALINSTANTData,
        ACTUALBLOCKLOADData,
        ticketsData} = state;
    return {
        deviceFormData,
        METERLOCATIONData,
        ACTUALINSTANTData,
        ACTUALBLOCKLOADData,
        ticketsData
    };
};
export default connect(mapStateToProps)(Newviewmeter);
 