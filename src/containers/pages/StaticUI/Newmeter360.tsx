import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
import {TabView,TabPanel} from 'primereact/tabview';
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";
import { RouteComponentProps } from "react-router";
import {  useEffect } from "react";
import { Message } from 'primereact/message';
import {Growl} from 'primereact/growl';
import {Panel} from 'primereact/panel';
import {
  getNoOfDevicees,
  getActiveMeterCount,
  getLoadGraphData
} from "../../../store/actions/NewDevice";
import { ProgressSpinner } from 'primereact/progressspinner';
import { getCurrentUser } from "../../../store/selectors/Accounts";
import { Chart } from "primereact/chart";
import moment from "moment";
import { } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import {getACTUALINSTANTList  } from "../../../store/actions/ActualInstant";
import {getACTUALBLOCKLOADList } from "../../../store/actions/ActualBlockload";
import {getMETERLOCATIONList  } from "../../../store/actions/Meterlocation";
import {saveTickets,getTicketsList } from "../../../store/actions/Tickets";
import { ScrollPanel } from 'primereact/scrollpanel';
interface IMeterDailyLoadInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        newdataTable:[],
        dataTableSelection:[] ,
        dispatch: Dispatch<any>;
        loginData: any;
        passwordresetData:any;
       
        
        
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
const  Newmeterthreesixty: React.SFC<IMeterDailyLoadInformationReport> = ({
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
        dispatch(getLoadGraphData(data.userProfile.roleFkId.companyAutoId.id));
      } else {
        window.location.href = "/";
      }
    }, []);
    //alert("Muru");
   // alert(actcode);
   // actcode="7189e550-4428-4169-b05e-cedc937b1a09";
    useEffect(() => {
   
       
    }, []);
    const graphOptions = {
      responsive: true,
      hoverMode: "index",
      stacked: false,
      scales: {
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1"
          }
        ]
      }
    };
    const aaroles={
        autoid:"",
        circleName:"",
        cmDivision:"",
        subDivisionname : "",
        lastCommDatetime : "",
        locationName :"",
        meterSerialNumber: "",
        sourceType:"",
        phase : "",
        dayCount : "",
        town : "",
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
        cumtamper: ""
        //updated_by
      }; 
      const workflowinput={
        meterid:0,
        ticketid:"",
        details:"",
        priority:"",
        tickettype : "",
        ticketdescriptionid:"",
        ticketcategoryid:"",
        ticketsubcategoryid:"",
        ticketsubdescriptionid: "",
        assignedto:"",
        inserted_by:"",
        updated_by:"",
        callfromname:"",
        phonenumber:"",
        description:"",
        subdescription:"",
        user:"",
        status:"Active",
        companyAutoId:0,
        role:"",
        userId:""
    };    
     const [dataTableSelection, setdataTableSelection] = useState();
     let [aarolesInputData, setInput] = useState(aaroles);
     let [aapermissionInputData, settingInput] = useState(aapermissions);
     let [rcreportData, setrcreport] = useState(workflowinput);
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"10/01","cumenergywhimport":"50hz","cumenergywhexport":"11hz","cumenergyvahimport":"12hz","cumenergyvahexport":"19hz","maximumdemandactiveimport":"17w","maximumdemandactivedatetime":"10/11","maximumdemandapparentimport":"19W","maximumdemandapparentdatetime":"14/10"},
        {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/01","cumenergywhimport":"10hz","cumenergywhexport":"17hz","cumenergyvahimport":"15hz","cumenergyvahexport":"75hz","maximumdemandactiveimport":"6w","maximumdemandactivedatetime":"15/11","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"15/10"},
        {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"13/11","cumenergywhimport":"25hz","cumenergywhexport":"25hz","cumenergyvahimport":"20hz","cumenergyvahexport":"97hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"6/12","maximumdemandapparentimport":"7W","maximumdemandapparentdatetime":"8/10"},
        {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"12/01","cumenergywhimport":"35hz","cumenergywhexport":"30hz","cumenergyvahimport":"30hz","cumenergyvahexport":"195hz","maximumdemandactiveimport":"4w","maximumdemandactivedatetime":"8/12","maximumdemandapparentimport":"10W","maximumdemandapparentdatetime":"6/10"},
        {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"17/01","cumenergywhimport":"17hz","cumenergywhexport":"17hz","cumenergyvahimport":"45hz","cumenergyvahexport":"975hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"24/9","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"1/10"},
        {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"10/01","cumenergywhimport":"30hz","cumenergywhexport":"45hz","cumenergyvahimport":"12hz","cumenergyvahexport":"5hz","maximumdemandactiveimport":"19w","maximumdemandactivedatetime":"30/9","maximumdemandapparentimport":"12W","maximumdemandapparentdatetime":"6/11"}
 ];
 const showdataTableValues = [
    {"sno":"1","meterserialnumber":"SM_5681","lastbillingdate":"10/01","cumenergywhimport":"1w","cumenergywhexport":"1w","cumenergyvahimport":"9w","cumenergyvahexport":"12w","maximumdemandactiveimport":"10w","maximumdemandactivedateandtime":"15hrs","maximumdemandapparentimport":"10w","maximumdemandapparentdateandtime":"15/10","cumenergyvarhq1":"1w","cumenergyvarhq2":"2w","cumenergyvarhq3":"9w","cumenergyvarhq4":"7w","systempowerfactorforbillingperiod":"2days","cumenergywhimporttz1":"3w","cumenergywhimporttz2":"4w","cumenergywhimporttz3":"15w","cumenergywhimporttz4":"30w","cumenergywhimporttz5":"62w","cumenergywhimporttz6":"55w","cumenergywhimporttz7":"6w","cumenergywhimporttz8":"15w","cumenergyvahimporttz1":"40w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"22w","cumenergyvahimporttz4":"7w","cumenergyvahimporttz5":"5w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"6w","mdwimporttz8":"10w","mdwtz8datetime":"21w","billingpoweronduration":"5days"},
    {"sno":"2","meterserialnumber":"SM_5682","lastbillingdate":"12/01","cumenergywhimport":"4w","cumenergywhexport":"2w","cumenergyvahimport":"7w","cumenergyvahexport":"15w","maximumdemandactiveimport":"10w","maximumdemandactivedateandtime":"6hrs","maximumdemandapparentimport":"12w","maximumdemandapparentdateandtime":"1/8","cumenergyvarhq1":"2w","cumenergyvarhq2":"4w","cumenergyvarhq3":"4w","cumenergyvarhq4":"9w","systempowerfactorforbillingperiod":"4days","cumenergywhimporttz1":"5w","cumenergywhimporttz2":"7w","cumenergywhimporttz3":"50w","cumenergywhimporttz4":"31w","cumenergywhimporttz5":"60w","cumenergywhimporttz6":"50w","cumenergywhimporttz7":"63w","cumenergywhimporttz8":"52w","cumenergyvahimporttz1":"4w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"23w","cumenergyvahimporttz4":"71w","cumenergyvahimporttz5":"5w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"61w","mdwimporttz8":"17w","mdwtz8datetime":"28w","billingpoweronduration":"8days"},
    {"sno":"3","meterserialnumber":"SM_5683","lastbillingdate":"15/01","cumenergywhimport":"6w","cumenergywhexport":"6w","cumenergyvahimport":"10w","cumenergyvahexport":"16w","maximumdemandactiveimport":"20w","maximumdemandactivedateandtime":"8hrs","maximumdemandapparentimport":"20w","maximumdemandapparentdateandtime":"2/8","cumenergyvarhq1":"5w","cumenergyvarhq2":"6w","cumenergyvarhq3":"6w","cumenergyvarhq4":"10w","systempowerfactorforbillingperiod":"6days","cumenergywhimporttz1":"8w","cumenergywhimporttz2":"8w","cumenergywhimporttz3":"5w","cumenergywhimporttz4":"33w","cumenergywhimporttz5":"61w","cumenergywhimporttz6":"60w","cumenergywhimporttz7":"62w","cumenergywhimporttz8":"35w","cumenergyvahimporttz1":"4w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"20w","cumenergyvahimporttz4":"5w","cumenergyvahimporttz5":"5:w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"6w","mdwimporttz8":"10w","mdwtz8datetime":"24w","billingpoweronduration":"10days"}
];
 const getdataTableValues = [
    {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"14/02/2020 05:30:00","eventcode":"1","currentir":"2","currentiy":"4","currentib":"6","voltagevrn":"4","voltagevyn":"6","voltagevbn":"0", "rphase":"6","yphase":"4","bphase":"4",  "energywhimport":"5","energyvahimport":"0","energywhexport":"0","energyvahexport":"0","statusbyte":"5","averagesignalstrength":"0","cumtampercount":"6","sequencenumber":"0" },
        {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/02/2020 05:25:00","readdateandtime":"14/02/2020 05:25:00","eventcode":"2","currentir":"3","currentiy":"0","currentib":"5","voltagevrn":"0","voltagevyn":"5","voltagevbn":"2", "rphase":"5","yphase":"0","bphase":"0",  "energywhimport":"8","energyvahimport":"6","energywhexport":"0","energyvahexport":"2","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"5","sequencenumber":"2" },
        {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"14/02/2020 05:20:00","readdateandtime":"14/02/2020 05:20:00","eventcode":"3","currentir":"4","currentiy":"2","currentib":"4","voltagevrn":"6","voltagevyn":"8","voltagevbn":"3", "rphase":"4","yphase":"6","bphase":"2",  "energywhimport":"6","energyvahimport":"5","energywhexport":"0","energyvahexport":"3","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"8","sequencenumber":"3" },
        {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","readdateandtime":"14/02/2020 05:15:00","eventcode":"4","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0", "rphase":"0","yphase":"5","bphase":"3",  "energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"6","sequencenumber":"0" },
        {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","readdateandtime":"14/02/2020 05:10:00","eventcode":"5","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4", "rphase":"2","yphase":"8","bphase":"4",  "energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"0","sequencenumber":"4" },
        {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"14/02/2020 05:05:00","readdateandtime":"14/02/2020 05:05:00","eventcode":"6","currentir":"3","currentiy":"7","currentib":"3","voltagevrn":"6","voltagevyn":"0","voltagevbn":"0", "rphase":"3","yphase":"6","bphase":"7",  "energywhimport":"5","energyvahimport":"1","energywhexport":"2","energyvahexport":"8","statusbyte":"1","averagesignalstrength":"2","cumtampercount":"0","sequencenumber":"0" },
        {"sno":"7","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","readdateandtime":"14/02/2020 05:15:00","eventcode":"7","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0", "rphase":"0","yphase":"5","bphase":"3",  "energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"6","sequencenumber":"0" },
        {"sno":"8","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","readdateandtime":"14/02/2020 05:10:00","eventcode":"8","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4", "rphase":"2","yphase":"8","bphase":"4",  "energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"0","sequencenumber":"4" }
];
      
 const newdataTableValues = 
    {"autoid":"1","circleName":"Chennai_north","cmDivision":"Ariyalur","subDivisionname":"TOWN/Ariyalur","lastCommDatetime":"4/11/2015","locationName":"ariyalur","meterSerialNumber":"X251456","sourceType":"DT meter","phase":"three","dayCount":"210"}
 
   ;

   const saveataTableValues = 
   {"rtcdateandtime":"14/02/2020 05:25:00","cumenergywhimport":"1w","cumenergywhexport":"1w","cumenergyvahimport":"9w","cumenergyvahexport":"12w","cumenergyvarhq1":"1w","cumenergyvarhq2":"2w","cumenergyvarhq3":"9w","cumenergywhimporttz1":"3w","cumenergywhimporttz2":"4w","cumenergywhimporttz3":"15w","cumenergywhimporttz4":"30w","cumenergyvahimporttz1":"40w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"22w","cumenergyvahimporttz4":"7w","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "noofPower":"5","cumPower":"5","cumTamper":"6"}

  ;
  const [noOfMeterCOunt, setMeterCount] = useState(0);

  if (
    noOfMeterCOunt === 0 &&
    deviceFormData.numberOfDevices !== 0 &&
    !deviceFormData.isLoading
  ) {
    setMeterCount(deviceFormData.numberOfDevices);
  }

  const [noOfActiveMeterCOunt, setActiveMeterCount] = useState(0);
  const [totalActiveJobs, settotalActiveJobsCount] = useState(0);
  const [liveMeters, setliveMetersCount] = useState(0);
 
  if (
    noOfActiveMeterCOunt === 0 &&
    deviceFormData.activeDevices !== 0 &&
    !deviceFormData.isLoading
  ) {
    setActiveMeterCount(deviceFormData.activeDevices);
  }
  const [isPageLoder, setPageLoader]=useState(false);
  const [isPageListing, setPageList]=useState(false);
  const [isPagingLister, setPagingLister]=useState(false);
  const [isPageLoaded, setPageLoade]=useState(false);
  const [tableData, setTableData] = useState(new Array<any>());
  const [newtableData, setnewTableData] = useState(new Array<any>());
  const [newertableData, setnewerTableData] = useState(new Array<any>());
  const[displayDialog, setdisplayDialog]=useState(false);
  const [newtenant, setnewtenant]= useState("");
      const [newmeterid, setnewmeterid]= useState("");
      const [newinsertedby, setnewinsertedby]= useState("");
      const [newinserteddate, setnewinserteddate]= useState("");
      const [newtype, setnewtype]= useState("");
      const [newpriority, setnewpriority]= useState("");
      const [newcategory, setnewcategory]= useState("");
      const [newsubcategory, setnewsubcategory]= useState("");
      const [newassignedto, setnewassignedto]= useState("");
  loadsonGrid();
  function loadsonGrid(){
      if (!isPageLoaded && !ticketsData.isLoading) {
      //  alert(JSON.stringify(ticketsData));
        var setters=new Array<any>();
    
      ticketsData.items.sort(function(a,b){
          return parseInt(b.ticketdetailid)  - parseInt(a.ticketdetailid);});  
          
          
        if(ticketsData.items.length>0){  
             var count =0 ;
             var start = false; 
          for(var i=0;i<ticketsData.items.length;i++){
             
              for (var j = 0; j < setters.length; j++) 
              {       
                  

                      if (ticketsData.items[i].ticketid.ticketid == setters[j].ticketid.ticketid) 
                      {
                         // meters.push(ticketsData.items[i]); // means there are duplicate values
                            
                          start = true; 
                          
                      }     
  
              }
              count++;
              if (count == 1 && start == false) { 
              
                if(ticketsData.items[i].ticketid.meterid==actcode){
                //  alert("yes");
                  setters.push(ticketsData.items[i]); 
                } 
              } 
              start = false; 
              count = 0;

           // var element=ticketsData.items[i]; 
           
              
          }      
          
          setPageLoade(true);
          setnewTableData(setters);   
        }     
      
    

    }
  }
  loadonGrid();
      function loadonGrid(){
      //  alert(JSON.stringify(METERLOCATIONData));
      
      if (!isPagingLister && !ACTUALBLOCKLOADData.isLoading) {
       // alert(JSON.stringify(ACTUALBLOCKLOADData));
          var valuess=new Array<any>();
         // alert(JSON.stringify(METERLOCATIONData.items.meterDetailsAutoid));
          if(ACTUALBLOCKLOADData.items.length>0){    
           // alert(JSON.stringify(ACTUALBLOCKLOADData));            
            for(var i=0;i<ACTUALBLOCKLOADData.items.length;i++){
            
              
              var element=ACTUALBLOCKLOADData.items[i];
              if(element.meterAutoid.meterSerialNumber==actcode){  
               // alert("blockload");
              valuess.push(element);
              //alert("hi")
              }
              
            } 
            setTableData(valuess);
            setPagingLister(true);    
          }
        //  alert(JSON.stringify(meters));
           // alert(JSON.stringify(tableData));
          }     
       // alert(JSON.stringify(tableData));
      // alert(JSON.stringify(tableData));
      }

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
              aarolesInputData.cmDivision = element.divisionAutoid.divisionName;
              aarolesInputData.subDivisionname = element.subdivisionAutoid.subdivisionName;
              aarolesInputData.locationName = element.lacationName;
              aarolesInputData.meterSerialNumber = element.meterDetailsAutoid.meterSerialNumber;
              aarolesInputData.phase = element.meterDetailsAutoid.phase;
              aarolesInputData.sourceType =  element.meterDetailsAutoid.sourceType;  
              aarolesInputData.lastCommDatetime = element.meterDetailsAutoid.insertedDate;
              aarolesInputData.town = element.townAutoid.townName;
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
 const [globalfilter, setglobalfilter] = useState();   
 const onfilter=(e) => {setglobalfilter(e.target.value)}  
 const [isPageLodaed, setPageLoaded]=useState(false);

  const [hourlyGrapgData, setHourlyGrapgData]=useState();
  const [dailyGrapgData, setDailyGrapgData]=useState();
  const [monthlyGrapgData, setMonthlyGrapgData]=useState();
  const borders=["#007be5", "#FFCC80", "#66gB6A", "#66BB33", "#ef6262","#66BB99","#0388E5"];
 if (!isPageLodaed && !deviceFormData.isLoading && deviceFormData.graphData) {
  if(deviceFormData.graphData.hourlyLoad)
  {
   var hourlyData= {
      labels: [
        0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21, 22, 23
      ],
      datasets: new Array<any>()
    };
    for(var i=0;i<5;i++){
      let date = moment();
      var strDate= date.subtract(i, 'day').format('YYYY-MM-DD');
      var lablevalue=strDate;
      var datavalues=new Array<number>();
      var dataSetItem={
        label: lablevalue,
        data: new Array<number>(),
        fill: false,
        borderColor: borders[i]     
      };

      if(deviceFormData.graphData.hourlyLoad.length>0){
        var elements=deviceFormData.graphData.hourlyLoad.filter(function(item){
          return item[1]===lablevalue;
        });
        if(elements.length>0){
          for(var j=0;j<24;j++){
            var item=elements.find(c=>c[0]===j.toString());
            if(item && item!==null){
              datavalues.push(parseInt(item[2]));
            }
            else{
              datavalues.push(0);
            }        
          }            
        }
        else{
          for(var j=0;j<24;j++){
            datavalues.push(0);        
          }
        }
      }
      else{
        for(var j=0;j<24;j++){
          datavalues.push(0);        
        }
      }
      dataSetItem.data=datavalues;
      hourlyData.datasets.push(dataSetItem);
      
    }    
    
    loadGraphData=  hourlyData;
    setHourlyGrapgData(hourlyData);
    console.log(loadGraphData);
  }
  if(deviceFormData.graphData.dailyLoad)
  {

    var dailydata= {
      labels: new Array<any>(),
      datasets: new Array<any>()
    };
    var datavalues=new Array<number>();
      var setItem={          
        label: "Enargy",
        data: new Array<number>(),
        fill: false,
        borderColor: borders[0]    
      };
    for(var i=0;i<5;i++){
      let date = moment();
      var strDate= moment().subtract(i, 'day').format('DD/MM/YYYY');
      var lablevalue=moment().subtract(i, 'day').format('YYYY-MM-DD');;
      if(deviceFormData.graphData.dailyLoad.length>0){

        var element=deviceFormData.graphData.dailyLoad.find(c=>c[0]===lablevalue);
        if(element!==null &&element){
          setItem.data.push(parseInt(element[1]));
        }
        else{
          setItem.data.push(0);
        }                
      }
      else{
        setItem.data.push(0);
      }
      dailydata.labels.push(strDate);
    }    
    dailydata.datasets.push(setItem);
    //loadGraphData=  dailydata;
    setDailyGrapgData(dailydata);
    console.log(dailydata);

  }
  if(deviceFormData.graphData.monthlyLoad)
  {
    var monthlydata= {
      labels: new Array<any>(),
      datasets: new Array<any>()
    };
    var datavalues=new Array<number>();
    var setItemMonth={
      label: "Energy",
      data: new Array<any>(),
      fill: false,
      borderColor: "#ef6262" 
    };
    for(var i=1;i<6;i++){
      var strDate= moment().subtract(i, 'month').endOf('month').format('DD/MM/YYYY');
      
      //let date = moment();
      
      var lablevalue=moment().subtract(i, 'month').endOf('month').format('YYYY-MM-DD');;
      if(deviceFormData.graphData.monthlyLoad.length>0){
        var element=deviceFormData.graphData.monthlyLoad.find(c=>c[0]===lablevalue);
        if(element!==null &&element){
          setItemMonth.data.push((element[1]));
        }
        else{
          setItemMonth.data.push(0);
        }                
      }
      else{
        setItemMonth.data.push(0);
      }
      monthlydata.labels.push(strDate);        
    }    
    monthlydata.datasets.push(setItemMonth);
    
   setMonthlyGrapgData(monthlydata);
    console.log(monthlydata);

  }
  if(deviceFormData.graphData.totalMeters)
  {
    setMeterCount(deviceFormData.graphData.totalMeters);
  }
  if(deviceFormData.graphData.totalActiveMeters)
  {
    setActiveMeterCount(deviceFormData.graphData.totalActiveMeters);
  }
  if(deviceFormData.graphData.totalActiveJobs)
  {
    settotalActiveJobsCount(deviceFormData.graphData.totalActiveJobs);
  }
  if(deviceFormData.graphData.liveMeters)
  {
    setliveMetersCount(deviceFormData.graphData.liveMeters);
  }
  //loadGraphData = deviceFormData.graphData.loadGraphData;
  //dailyGraphData = deviceFormData.graphData.dailyGraphData;
  setPageLoaded(true);
}
const rowfileClick = (rowData:any) => {
  var now = moment().format("DD-MM-YYYYThh:mm:ss");
  var mod = rowData.ticketid.insert_datetime;
  

    var msDiff = new Date().getTime() - new Date(rowData.ticketid.insert_datetime).getTime(); 
    var datedifference = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  return <div>
         <h1>{datedifference}</h1>
  </div>
}
const rowselectClick = (rowData:any) => {
  var now = moment().format("DD-MM-YYYYThh:mm:ss");
  var mod = rowData.ticketid.insert_datetime;
  

    var msDiff = new Date().getTime() - new Date(rowData.update_datetime).getTime(); 
    var datedifference = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  return <div>
         <h1>{datedifference}</h1>
  </div>
}
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
 
 const [growl, setGrowl]=useState();
 const [showMessage, setShowMessage]=useState(false);
 const [isFormSubmitted, setIsFormSubmitted] = useState(false);
 if(!ACTUALBLOCKLOADData.isLoading && ACTUALBLOCKLOADData.isFormSubmit && isFormSubmitted){
  if(ACTUALBLOCKLOADData.status.search("Success") || ACTUALBLOCKLOADData.status.search("success") ){
    setShowMessage(true);
    growl.show({severity: 'success', summary: 'Success', detail: 'User Saved successfully'});
  }
  else{
    growl.show({severity: 'warn', summary: 'Warn', detail: 'There are unsaved changes'});
    setShowMessage(false);
  }
  setIsFormSubmitted(false);
}
const onRowSelected=(event)=>{
  setShowMessage(false);
  if(!displayDialog){
    var data=event.data;
    //setInput(consumer);
  
    
             
    //setInput(consumer);
    setnewtenant(data.ticketid.ticketid);
           setnewmeterid(data.ticketid.meterid);
           setnewassignedto(data.ticketid.assignedto);
           setnewinsertedby(data.ticketid.inserted_by);
           setnewinserteddate(data.ticketid.insert_datetime);
           setnewtype(data.ticketid.tickettype);
           setnewcategory(data.ticketid.ticketcategoryid.description);
           setnewsubcategory(data.ticketid.ticketsubcategoryid.subdescription);
           setnewpriority(data.ticketid.priority);
      var meters = new Array<any>();
      if(ticketsData.items.length>0){                
        for(var i=0;i<ticketsData.items.length;i++){
       
          var element=ticketsData.items[i];  
          if (element.ticketid.ticketid==data.ticketid.ticketid )  { 
            if(element.ticketid.meterid==data.ticketid.meterid ){
              meters.push(element);
            }
         
          }
        }      
        
        setnewerTableData(meters);   
      }  
    setdisplayDialog(true);

  //  alert(newtenant);
    //If need to show delete button
    //setShowDelete(true);
    } 
} 
function onClickAdd(event) {
  window.location.href="/staticui/createticket";
}
function onsetkAdd(event) {
  window.location.href="/meter/newviewmeter/"+actcode;
}
function onClickAssign(event) {
  window.location.href= "/staticui/newshowticket";
}
function successMessage( key:string){     
  return <Message severity="success" key={key} text="Aaroles Saved Successfully." />
}
  return (
    <div>
<Panel header=  "360 view meter">
<div style={{ textAlign: "left", width: "20em" }}>
                    <Button type="button" icon="pi pi-plus" iconPos="edit selected" label=" link to view meter" onClick={onsetkAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
<Panel header=  {actcode}>
<TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
<TabPanel header="Meter details" leftIcon="pi pi-calendar">
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">Circle </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type" name="report_type" value={aarolesInputData.circleName} required  />
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> Location Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type_name" name="report_type_name" value={aarolesInputData.locationName}  />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Division</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name" name="file_name" value={aarolesInputData.cmDivision}  />
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Meter No</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name1" name="file_name1" value={aarolesInputData.meterSerialNumber}  />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">Subdivision</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="status" name="status" value={aarolesInputData.subDivisionname}  />
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Meter Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aarolesInputData.sourceType}  />
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Town</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aarolesInputData.town}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Phase</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aarolesInputData.phase}  />
                        
                      </div>
                       
                        </div>
                      <div className="p-grid">
                       
                         
                  
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Location Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aarolesInputData.locationName}  />
                        
                      </div>
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">No of Days</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={newdataTableValues.dayCount}  />
                        
                      </div>
                         
                    </div>
                    </div>
                    </TabPanel>
                    <TabPanel header="Instantaneous" leftIcon="pi pi-calendar">
                    <div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">RTC Data </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type" name="report_type" value={aapermissionInputData.rtcdate} required  />
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> kwh </label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type_name" name="report_type_name" value={aapermissionInputData.cumenergywhimport}  />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">kwh export</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name" name="file_name" value={aapermissionInputData.cumenergywhexport}  />
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">kvah </label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name1" name="file_name1" value={aapermissionInputData.cumenergyvahimport}  />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">kvah export</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="status" name="status" value={aapermissionInputData.cumenergyvahexport}  />
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L1 current</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1current}  />
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L2 current</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l2current}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L3 current</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l3current}  />
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L1 voltage</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1voltage}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L2 voltage </label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l2voltage}  />
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L3 voltage</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l3voltage}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L1 Signed power factor </label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1signedb}  />
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L2 Signed power factor</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1signedr}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">L3 Signed power factor </label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.l1signedy}  />
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Pf</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.signed3phasepower}  />
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Frequency </label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.signedfrequency}  />
                        
                      </div>
                       
                        </div>
                      <div className="p-grid">
                       
                         
                  
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Power Of Count</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.noofpower}  />
                        
                      </div>
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Power of duration</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.cumpower}  />
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                       
                         
                  
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Tamper count</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={aapermissionInputData.cumtamper}  />
                        
                      </div>
                     
                         
                    </div>
                    </div>
        
                    </TabPanel>
                    <TabPanel header="Event details" leftIcon="pi pi-calendar">

       <div className="animated fadeIn">
       <div className="p-grid">
                <div className="p-col-12">
                  <div className="card card-w-title">
                    <h1>role table</h1>
   
       <Growl ref={(el) => setGrowl(el)} />
       {showMessage && (successMessage("Success"))}       
                      {ACTUALBLOCKLOADData.isLoading && <ProgressSpinner />}
                      {!ACTUALBLOCKLOADData.isLoading && ( 
       <DataTable value={tableData}
        paginatorPosition="both" selectionMode="single" 
        paginator={true} rows={10}  
        alwaysShowPaginator={false}
        selection={dataTableSelection} 
        scrollable={true}
           header={header}
           onSelectionChange={onSelectionChangeed} 
           globalFilter={globalfilter}
           >
               <Column field="readDateTime" header="Read Time" />
               <Column field="voltageVrn" header="vr" />
               <Column field="voltageVyn" header="vb" />
               <Column field="voltageVbn"header="vy" />
               <Column field="currentIr" header="Ir" />
               <Column field="currentIy" header="Iy" />
               <Column field="currentIb" header="Ib" />
               <Column field= "energyWhImport" header="Block kwh" />
               <Column field="energyWhExport" header="kvarh lag" />
               <Column field="energyVahImport" header="kvarh lead" />    
               <Column field="energyVahExport" header="kvah" />
               <Column field="averageSignalStrength" header="Power Factor" />  
                                        
</DataTable>
                      )}
           </div>
           </div>
           </div>
           </div>
           </TabPanel>
           <TabPanel header="Load Survey" leftIcon="pi pi-calendar">

<div className="content-section introduction">
           <div className="feature-intro">
               <h1> Meter Daily Load Information Report</h1>
           </div>
            
       </div>

       <div className="content-section implementation">
       <Growl ref={(el) => setGrowl(el)} />
       {showMessage && (successMessage("Success"))}  
                                 {ACTUALBLOCKLOADData.isLoading && <ProgressSpinner />}
                                 {!ACTUALBLOCKLOADData.isLoading && ( 
       <DataTable value={tableData}
        paginatorPosition="both" selectionMode="single" 
        paginator={true} rows={10}  
        alwaysShowPaginator={false}
        selection={dataTableSelection} 
        scrollable={true}
           header={header}
           onSelectionChange={onSelectionChangeed} 
           globalFilter={globalfilter}
           >

<Column field="rtcDate" header="Date" />
               <Column field="voltageVrn" header="vr" />
               <Column field="voltageVyn" header="vb" />
               <Column field="voltageVbn"header="vy" />
               <Column field="currentIr" header="Ir" />
               <Column field="currentIy" header="Iy" />
               <Column field="currentIb" header="Ib" />
               <Column field= "energyWhImport" header="Block kwh" />
               <Column field="energyWhExport" header="kvarh lag" />
               <Column field="energyVahImport" header="kvarh lead" />    
               <Column field="energyVahExport" header="kvah" />
              
                                        
</DataTable>
                                 )}
           </div>
           </TabPanel>
           <TabPanel header="Daily Parameters Graph" leftIcon="pi pi-calendar">

<div className="content-section introduction">
           <div className="feature-intro">
               <h1> Meter Daily Load Information Report</h1>
           </div>
            
       </div>

       <div className="content-section implementation">

       <DataTable value={showdataTableValues}
        paginatorPosition="both" selectionMode="single" 
        paginator={true} rows={10}  
        alwaysShowPaginator={false}
        selection={dataTableSelection} 
        scrollable={true}
           header={header}
           onSelectionChange={onSelectionChangeed} 
           globalFilter={globalfilter}
           >

                        <Column field="lastbillingdate" header="Date" />
                        <Column field="cumenergywhimport" header="kWh" />
                        <Column field="cumenergyvahimport" header="kVAh" />
                        <Column field="cumenergyvahexport" header="kVA (MD)" />
                        <Column field="cumenergywhexport" header="kW" />
                        <Column field="maximumdemandactivedateandtime" header="MD Date Time" />
                        <Column field="maximumdemandapparentdateandtime" header="kW OCC Date" />
                        <Column field="cumenergyvarhq1" header="kWh Consumption" />
                        <Column field="cumenergyvarhq2" header="kVAh Consumption" />
                        <Column field="cumenergywhimporttz1" header="Kwh TOD 1" />
                        <Column field="cumenergywhimporttz2" header="kwh TOD 2" />
                        <Column field="cumenergywhimporttz3" header="kwh TOD 3" />
                        <Column field="cumenergywhimporttz4" header="kwh TOD 4" />
                        <Column field="cumenergywhimporttz5" header="kwh TOD 5" />
                        <Column field="cumenergywhimporttz6" header="kwh TOD 6" />
                        <Column field="cumenergywhimporttz7" header="kwh TOD 7" />
                        <Column field="cumenergywhimporttz8" header="kwh TOD 8" />
                        <Column field="cumenergyvahimporttz1" header="kvah TOD 1 " />
                        <Column field="cumenergyvahimporttz2" header="kVah TOD 2" />
                        <Column field="cumenergyvahimporttz3" header="kVah TOD 3" />
                        <Column field="cumenergyvahimporttz4" header="kVah TOD 4" />
                        <Column field="cumenergyvahimporttz5" header="kVah TOD 5" />
                        <Column field="cumenergyvahimporttz6" header="kVah TOD 6" />
                        <Column field="cumenergyvahimporttz7" header="kVah TOD 7" />
                        <Column field="cumenergyvahimporttz8" header="kVah TOD 8" />
                        
                                        
</DataTable>
           </div>
           </TabPanel>
           <TabPanel header="Energy History" leftIcon="pi pi-calendar">

<div className="content-section introduction">
           <div className="feature-intro">
               <h1> Meter Daily Load Information Report</h1>
           </div>
            
       </div>

       <div className="content-section implementation">
       
       <div className="p-col-12 p-md-6">
        <div className="card summary">
          <span className="title">Average Energy - Last 5 days</span>
          {dailyGrapgData && (
            <Chart type="line" data={dailyGrapgData} options={graphOptions} />
          )}
        </div>
      </div>
           </div>
           </TabPanel>
           <TabPanel header="Tickets" leftIcon="pi pi-calendar">
           <Dialog header= {newtenant} visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {

                displayDialog &&
                (
                  
                  
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                     <Panel header="Tickets " toggleable={true}>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="ticketid">Ticket ID</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="ticketid" name="ticketid" value={newtenant} required  />
                        </div>
                        
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="meterid">Meter ID</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="meterid" name="meterid" value={newmeterid} required  />
                        </div>
                      </div>
                      
                    
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="priority">Priority</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="priority" name="report_type_name" value={newpriority} required  />
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="type">Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="type" name="type" value={newtype}  />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="newdescription">Category</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="newdescription" name="newdescription" value={newcategory}  />
                        </div>
                    
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="newsubdescription">Sub category</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="newsubdescription" name="newsubdescription" value={newsubcategory}  />
                        </div>
                        </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="inserted_by">Inserted By</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="inserted_by" name="inserted_by" value={newinsertedby}  />
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="insert_datetime">Inserted Datetime</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="insert_datetime" name="inserted_datetime" value={newinserteddate}  />
                        </div>
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="assign">Assigned To</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="assign" name="assign" value={newassignedto}  />
                        </div>
                      </div>
                   
                      <div className="p-grid">
                <div className="p-col-12 p-md-3">
                  
                </div>
              </div>
             
       
         </Panel>
         <Panel header="Ticket Details" toggleable={true}>
         <DataTable
                      value={newertableData}
                     
                      header="ticket Data"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                     
                    >             

                     <Column field="ticketid.ticketid" header="Ticketid" sortable={true}/>
                        <Column field="details" header="Details" sortable={true}/>
                        <Column field="ticketid.inserted_by" header="Assigned_by" sortable={true}/>
                        <Column field="assignedto" header="Assigned_to" sortable={true}/>
                        <Column field="ticketid.insert_datetime" header="Assigned Date" sortable={true}/>  
                        <Column
                                          header="aging"
                                         body={rowfileClick}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
                        <Column
                                          header="aging as per user"
                                         body={rowselectClick}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
                    </DataTable>

         </Panel>
        
                </ScrollPanel>
                )
              }
            </Dialog>

            <div className="animated fadeIn">
              <div className="p-grid">
                <div className="p-col-12">
                  <div className="card card-w-title">
                    <h1>Tickets</h1>
                    <div style={{textAlign:'left'}}>
                    <Button type="button" icon="pi pi-plus" iconPos="left" label="Add" onClick={onClickAdd} style={{
      backgroundColor: "#FE434C",
      borderColor: "transparent",
      borderRadius: 20,
      width: 250
    }} ></Button>
      <Button type="button" icon="pi pi-plus" iconPos="left" label="Assign" onClick={onClickAssign} style={{
      backgroundColor: "#FE434C",
      borderColor: "transparent",
      borderRadius: 20,
      width: 250
    }} ></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {ticketsData.isLoading && <ProgressSpinner />}
                      {!ticketsData.isLoading && (                        
                    <DataTable
                      value={newtableData}
                      paginatorPosition="bottom"
                      selectionMode="single"
                      header="tickets"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      onSelectionChange={onSelectionChangeed}
                      onRowSelect={onRowSelected}
                    >             

                     <Column field="ticketid.ticketid" header="Ticketid" sortable={true}/>
                     <Column field="ticketid.meterid" header="Meterserialnumber" sortable={true}/>
                        <Column field="ticketid.ticketcategoryid.description" header="Category" sortable={true}/>
                        <Column field="ticketid.ticketsubcategoryid.subdescription" header="Subcategory" sortable={true}/>
                        <Column field="ticketid.tickettype" header="tickettype" sortable={true}/>
                        <Column field="ticketid.insert_datetime" header="Assigned Date" sortable={true}/>  
                        <Column field="details" header="Details" sortable={true}/>  
                        <Column field="ticketid.status" header="Status" sortable={true}/>  
                        <Column
                                          header="aging"
                                         body={rowfileClick}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
                        <Column
                                          header="aging as per user"
                                         body={rowselectClick}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
                    </DataTable>
                 
                    )}

           </div>
           </div>
              </div>
            </div>
           </TabPanel>

                   </TabView> 
                   </Panel>
                   </Panel>
    </div>
    );
        
    
};
const mapStateToProps = (state: any) => {
    const { deviceFormData, METERLOCATIONData,ACTUALINSTANTData, ACTUALBLOCKLOADData, ticketsData} = state;
    return {
        deviceFormData,
        METERLOCATIONData,
        ACTUALINSTANTData,
        ACTUALBLOCKLOADData,
        ticketsData
    };
};
export default connect(mapStateToProps)(Newmeterthreesixty);
 