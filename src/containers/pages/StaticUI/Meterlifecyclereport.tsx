import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
import {Dropdown} from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';
import moment from "moment";
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";
import {getCIRCLEList  } from "../../../store/actions/Circle";
import {getDIVISIONList  } from "../../../store/actions/Division";
import {getSUBDIVISIONList  } from "../../../store/actions/Subdivision";
import {getSECTIONList  } from "../../../store/actions/Section";
import {getTOWNList  } from "../../../store/actions/Town";
import {getSUBSTATIONList  } from "../../../store/actions/Substation";
import {getFEEDERList  } from "../../../store/actions/Feeder";
import {getTRANSFORMERList  } from "../../../store/actions/Transformer";
import {getMETERLOCATIONList  } from "../../../store/actions/Meterlocation";
import {getJobProfiles  } from "../../../store/actions/JobProfile";
import { getCurrentUser } from "../../../store/selectors/Accounts";
import {Panel} from 'primereact/panel';
import {saveTickets,getTicketsList } from "../../../store/actions/Tickets";
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
interface IMeterDailyLoadInformationReport {}
interface IMeterDailyLoadInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] ,
        newdataTableselection:[]
    },
    CIRCLEData : any;
  DIVISIONData:any;
  SUBDIVISIONData:any;
  SECTIONData:any;
  TOWNData:any;
  SUBSTATIONData:any;
  FEEDERData:any;
  TRANSFORMERData:any;
  METERLOCATIONData:any;
  ticketsData: any;
}
const  Meterlifecyclereport: React.FC<IMeterDailyLoadInformationReport> = ({
  dispatch,
  CIRCLEData ,
  DIVISIONData,
  SUBDIVISIONData,
  SECTIONData,
  TOWNData ,
  SUBSTATIONData ,
  FEEDERData ,
  TRANSFORMERData,
  METERLOCATIONData,
  ticketsData
    
}) => {
  useEffect(() => {
    dispatch(getJobProfiles(""));
    var curentUser=getCurrentUser();
   
    if(curentUser!=null){
      setUserData(curentUser);
      dispatch(getCIRCLEList(curentUser.userProfile.roleFkId.companyAutoId.id));   
      dispatch(getDIVISIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getSUBDIVISIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getSECTIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getTOWNList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getSUBSTATIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getFEEDERList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getTRANSFORMERList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getMETERLOCATIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getTicketsList(curentUser.userProfile.roleFkId.companyAutoId.id));  
    }                  
  }, []);
     const [dataTableSelection, setdataTableSelection] = useState();
     
     const [newdataTableSelection, setnewdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const onnewSelectionChangeed=(e) => {setnewdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"10/01","cumenergywhimport":"50hz","cumenergywhexport":"11hz","cumenergyvahimport":"12hz","cumenergyvahexport":"19hz","maximumdemandactiveimport":"17w","maximumdemandactivedatetime":"10/11","maximumdemandapparentimport":"19W","maximumdemandapparentdatetime":"14/10"},
        {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/01","cumenergywhimport":"10hz","cumenergywhexport":"17hz","cumenergyvahimport":"15hz","cumenergyvahexport":"75hz","maximumdemandactiveimport":"6w","maximumdemandactivedatetime":"15/11","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"15/10"},
        {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"13/11","cumenergywhimport":"25hz","cumenergywhexport":"25hz","cumenergyvahimport":"20hz","cumenergyvahexport":"97hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"6/12","maximumdemandapparentimport":"7W","maximumdemandapparentdatetime":"8/10"},
        {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"12/01","cumenergywhimport":"35hz","cumenergywhexport":"30hz","cumenergyvahimport":"30hz","cumenergyvahexport":"195hz","maximumdemandactiveimport":"4w","maximumdemandactivedatetime":"8/12","maximumdemandapparentimport":"10W","maximumdemandapparentdatetime":"6/10"},
        {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"17/01","cumenergywhimport":"17hz","cumenergywhexport":"17hz","cumenergyvahimport":"45hz","cumenergyvahexport":"975hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"24/9","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"1/10"},
        {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"10/01","cumenergywhimport":"30hz","cumenergywhexport":"45hz","cumenergyvahimport":"12hz","cumenergyvahexport":"5hz","maximumdemandactiveimport":"19w","maximumdemandactivedatetime":"30/9","maximumdemandapparentimport":"12W","maximumdemandapparentdatetime":"6/11"}
 ];
const circlevalues=[
        {"autoid":"1","circleName":"south","countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
        {"autoid":"2","circleName":"north","countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
];
const divisionvalues=[
    {"autoid":"1","divisionName":"southpost","circleAutoid":{"autoid":"1","circleName":"south"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
    {"autoid":"2","divisionName":"northpost","circleAutoid":{"autoid":"2","circleName":"north"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
];
const subdivisionvalues=[
    {"autoid":"1","subdivisionName":"heat","divisionAutoid":{"autoid":"1","divisionName":"southpost"},"circleAutoid":{"autoid":"1","circleName":"south"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
    {"autoid":"2","subdivisionName":"cold","divisionAutoid":{"autoid":"2","divisionName":"northpost"},"circleAutoid":{"autoid":"2","circleName":"north"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
];
const sectionnamevalues=[
    {"autoid":"1","sectionName":"front","subdivisionAutoid":{"autoid":"1","subdivisionName":"heat"},"divisionAutoid":{"autoid":"1","divisionName":"southpost"},"circleAutoid":{"autoid":"1","circleName":"south"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
    {"autoid":"2","sectionname":"back","subdivisionAutoid":{"autoid":"2","subdivisionName":"cold"},"divisionAutoid":{"autoid":"2","divisionName":"northpost"},"circleAutoid":{"autoid":"2","circleName":"north"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
];
const townnamevalues=[
    {"autoid":"1","townName":"koyambedu","sectionAutoid":{"autoid":"1","sectionName":"front"},"subdivisionAutoid":{"autoid":"1","subdivisionName":"heat"},"divisionAutoid":{"autoid":"1","divisionName":"southpost"},"circleAutoid":{"autoid":"1","circleName":"south"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
    {"autoid":"2","townName":"ecr","sectionAutoid":{"autoid":"2","sectionname":"back"},"subdivisionAutoid":{"autoid":"2","subdivisionName":"cold"},"divisionAutoid":{"autoid":"2","divisionName":"northpost"},"circleAutoid":{"autoid":"2","circleName":"north"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
];
const substationvalues=[
    {"autoid":"1","substationName":"egmore","townAutoid":{"autoid":"1","townName":"koyambedu"},"sectionAutoid":{"autoid":"1","sectionName":"front"},"subdivisionAutoid":{"autoid":"1","subdivisionName":"heat"},"divisionAutoid":{"autoid":"1","divisionName":"southpost"},"circleAutoid":{"autoid":"1","circleName":"south"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
    {"autoid":"2","substationName":"ennore","townAutoid":{"autoid":"2","townName":"ecr"},"sectionAutoid":{"autoid":"2","sectionname":"back"},"subdivisionAutoid":{"autoid":"2","subdivisionName":"cold"},"divisionAutoid":{"autoid":"2","divisionName":"northpost"},"circleAutoid":{"autoid":"2","circleName":"north"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
];
const feedervalues=[
    {"autoid":"1","feederName":"forward","substationAutoid":{"autoid":"1","substationName":"egmore"},"townAutoid":{"autoid":"1","townName":"koyambedu"},"sectionAutoid":{"autoid":"1","sectionName":"front"},"subdivisionAutoid":{"autoid":"1","subdivisionName":"heat"},"divisionAutoid":{"autoid":"1","divisionName":"southpost"},"circleAutoid":{"autoid":"1","circleName":"south"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
    {"autoid":"2","feederName":"backward","substationAutoid":{"autoid":"2","substationName":"ennore"},"townAutoid":{"autoid":"2","townName":"ecr"},"sectionAutoid":{"autoid":"2","sectionname":"back"},"subdivisionAutoid":{"autoid":"2","subdivisionName":"cold"},"divisionAutoid":{"autoid":"2","divisionName":"northpost"},"circleAutoid":{"autoid":"2","circleName":"north"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
];
const transformervalues=[
    {"autoid":"1","feederName":"forward","substationAutoid":{"autoid":"1","substationName":"egmore"},"townAutoid":{"autoid":"1","townName":"koyambedu"},"sectionAutoid":{"autoid":"1","sectionName":"front"},"subdivisionAutoid":{"autoid":"1","subdivisionName":"heat"},"divisionAutoid":{"autoid":"1","divisionName":"southpost"},"circleAutoid":{"autoid":"1","circleName":"south"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"2","stateName":"tamilnadu"},"districtAutoid":{"autoid":"1","districtName":"chennai"}},
    {"autoid":"2","feederName":"backward","substationAutoid":{"autoid":"2","substationName":"ennore"},"townAutoid":{"autoid":"2","townName":"ecr"},"sectionAutoid":{"autoid":"2","sectionname":"back"},"subdivisionAutoid":{"autoid":"2","subdivisionName":"cold"},"divisionAutoid":{"autoid":"2","divisionName":"northpost"},"circleAutoid":{"autoid":"2","circleName":"north"},"countryAutoid":{"autoid":"1","countryName":"India"},"stateAutoid":{"autoid":"1","stateName":"uttarpradesh"},"districtAutoid":{"autoid":"2","districtName":"nagercoil"}}
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
    circle:"",
    subdivision:"",
    division:"",
    section:"",
    town:"",
    substation:"",
    feeder:"",
    transformer:"",
    meterId:""
    //updated_by
  }; 
  let [aarolesInputData, setInput] = useState(aaroles);    
 const [globalfilter, setglobalfilter] = useState();   
 const onfilter=(e) => {setglobalfilter(e.target.value)}  
 const [userData, setUserData] = useState();
 const [circle, setcircle] = useState(new Array<any>());
 const [subdivision, setsubdivsion] = useState(new Array<any>());
 const [division, setdivision] = useState(new Array<any>());
 const [section, setsection] = useState(new Array<any>());
 const [town, settown] = useState(new Array<any>());
 const [substation, setsubstation] = useState(new Array<any>());
 const [suberstation, setsuberstation] = useState(new Array<any>());
 const [feeder, setfeeder] = useState(new Array<any>());
 const [transformer, settransformer] = useState(new Array<any>());
 const [tableData, setTableData] = useState(new Array<any>());
 const[displayPanel, setdisplayPanel]=useState(false);
 const[displayticketPanel, setdisplayticketPanel]=useState(false);
 const[valees, setvalees]=useState("");
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
 const [selectedData, setSelectedData] = useState();
 const [newselectedData, setnewSelectedData] = useState();
 const [ticketData, setticketData] = useState(new Array<any>());

 const handleInputChange = (event: any) => {
    if (event.target.id === "circle") {
     
      aarolesInputData.circleName = event.target.value;
      aarolesInputData.circleId = event.target.value.autoid;
    
      var meters=new Array<any>();
      var run=new Array<any>();
     
      if(DIVISIONData.items.length>0){                
        for(var i=0;i<DIVISIONData.items.length;i++){
            
          var element=DIVISIONData.items[i];  
          if(element.circleAutoid.autoid==event.target.value.autoid){
        
          meters.push(element);
          }
       // //alert(meters);
        }   
        
        //setPageLoading(true);
       
        setdivision(meters);   
      }     
    } else if (event.target.id === "division") {
        aarolesInputData.divisionName = event.target.value;
        aarolesInputData.divisionId = event.target.value.autoid;
      
        var meter=new Array<any>();
        var run=new Array<any>();
       
        if(SUBDIVISIONData.items.length>0){                
          for(var i=0;i<SUBDIVISIONData.items.length;i++){
              
            var elem=SUBDIVISIONData.items[i];  
            if(elem.divisionAutoid.autoid==event.target.value.autoid){
          
            meter.push(elem);
            }
         // //alert(meters);
          }   
          
          //setPageLoading(true);
         
          setsubdivsion(meter);   
        }     
      
    } else if (event.target.id === "subdivision") {
        aarolesInputData.subdivisionName = event.target.value;
        aarolesInputData.subdivisionId = event.target.value.autoid;
       
        var mete=new Array<any>();
        var run=new Array<any>();
       
        if(SECTIONData.items.length>0){                
          for(var i=0;i<SECTIONData.items.length;i++){
              
            var ele=SECTIONData.items[i];  
            if(ele.subdivisionAutoid.autoid==event.target.value.autoid){
          
            mete.push(ele);
            }
         // //alert(meters);
          }   
          
          //setPageLoading(true);
         
          setsection(mete);
        }
    } else if (event.target.id === "section") {
        aarolesInputData.sectionName = event.target.value;
        aarolesInputData.sectionId = event.target.value.autoid;
      
        var meters=new Array<any>();
        var run=new Array<any>();
       
        if(TOWNData.items.length>0){                
          for(var i=0;i<TOWNData.items.length;i++){
              
            var elems=TOWNData.items[i];  
            if(elems.sectionAutoid.autoid==event.target.value.autoid){
          
            run.push(elems);
            }
         // //alert(meters);
          }   
          
          //setPageLoading(true);
         
          settown(run);
        }
      

    } else  if (event.target.id === "town") {
        aarolesInputData.townName = event.target.value;
        aarolesInputData.townId = event.target.value.autoid;
       
        var meters=new Array<any>();
        var rubs=new Array<any>();
       
        if(SUBSTATIONData.items.length>0){                
          for(var i=0;i<SUBSTATIONData.items.length;i++){
              
            var elex=SUBSTATIONData.items[i];  
            if(elex.townAutoid.autoid==event.target.value.autoid){
            //  //alert("g");
            rubs.push(elex);
            }
         // //alert(meters);
          }   
          
          //setPageLoading(true);
         
          setsuberstation(SUBSTATIONData.items);
          
        }
       // alert(JSON.stringify(substation));
       // alert(JSON.stringify(SUBSTATIONData.items));
       // alert(aarolesInputData.townId);
      }else  if (event.target.id === "substation") {
        aarolesInputData.substationName = event.target.value;
        aarolesInputData.substationId = event.target.value.autoid;
       
        var meters=new Array<any>();
        var rum=new Array<any>();
       
        if(FEEDERData.items.length>0){                
          for(var i=0;i<FEEDERData.items.length;i++){
              
            var elemers=FEEDERData.items[i];  
            if(elemers.substationAutoid.autoid==event.target.value.autoid){
          
            rum.push(elemers);
            }
         // alert(meters);
          }   
          
          //setPageLoading(true);
         
          setfeeder(rum);
        }
      } 
      
      
      else if (event.target.id === "feeder") {
        aarolesInputData.feederName = event.target.value;
        aarolesInputData.feederId = event.target.value.autoid;
      
        var me=new Array<any>();
        var r=new Array<any>();
       
        if(TRANSFORMERData.items.length>0){                
          for(var i=0;i<TRANSFORMERData.items.length;i++){
              
            var e=TRANSFORMERData.items[i];  
            if(e.feederAutoid.autoid==event.target.value.autoid){
          
            me.push(e);
            }
         // alert(meters);
       
          }   
          settransformer(me);
          
          //setPageLoading(true);
        }
      } 
    
      
     else if (event.target.id === "transformer") {
            aarolesInputData.transformerName = event.target.value;
            aarolesInputData.transformerId = event.target.value.autoid;
           
          } 
    
  };
  const onRowSelected=(event)=>{
   
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
  const handleSubmit=(event)=>{
    if(aarolesInputData.circleId!==null && aarolesInputData.circleId!==""){
    var newmeter=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var element=METERLOCATIONData.items[i]; 
              if (element.circleAutoid.autoid==aarolesInputData.circleId)  {              
              
            
                newmeter.push(element);
                aarolesInputData.meterId = element.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            }      
            setTableData(newmeter);   
            setdisplayPanel(true);
           // alert(JSON.stringify(newmeter));
            if(newmeter.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
            } 
          }     
        
        } if (aarolesInputData.divisionId!==null &&aarolesInputData.divisionId!=="" ){
          var newmeters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var elemen=METERLOCATIONData.items[i]; 
              if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId)  {              
              
            
                newmeters.push(elemen);
                aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            } 
             
            setTableData(newmeters);   
            setdisplayPanel(true);
            //alert(JSON.stringify(newmeters));
            if(newmeters.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
            
            }
          }    
          if(tableData.length==1){
            var name = 3;
          window.location.href="/meter/newmeterthreesixty/" +valees; 
          }   
        }  if (aarolesInputData.subdivisionId!==null && aarolesInputData.subdivisionId!==""){
          var newmeters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var elemen=METERLOCATIONData.items[i]; 
              if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId)  {              
              
            
                newmeters.push(elemen);
                aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            }   
        
            setTableData(newmeters);   
            setdisplayPanel(true);
            ////alert(JSON.stringify(newmeters));
            if(newmeters.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
            
            }
          }    
        
        } if (aarolesInputData.sectionId!==null &&aarolesInputData.sectionId!=="" ){
          var newmeters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var elemen=METERLOCATIONData.items[i]; 
              if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId)  {              
              
            
                newmeters.push(elemen);
                aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            }    
          
            setTableData(newmeters);   
            setdisplayPanel(true);
            //alert(JSON.stringify(newmeters));
            if(newmeters.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
             
            }
          }    
         
        }  if (aarolesInputData.townId!==null && aarolesInputData.townId!==""){
          var newmeters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var elemen=METERLOCATIONData.items[i]; 
              if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId && elemen.townAutoid.autoid==aarolesInputData.townId)  {              
              
            
                newmeters.push(elemen);
                aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            }  
           
            setTableData(newmeters);   
            setdisplayPanel(true);
            //alert(JSON.stringify(newmeters));
            if(newmeters.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
            
            }
          }  
         
        }  if (aarolesInputData.substationId!==null && aarolesInputData.substationId!==""){
          var newmeters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var elemen=METERLOCATIONData.items[i]; 
              if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId && elemen.townAutoid.autoid==aarolesInputData.townId && elemen.substationAutoid.autoid==aarolesInputData.substationId)  {              
              
            
                newmeters.push(elemen);
                aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            }    
          
            setTableData(newmeters);   
            setdisplayPanel(true);
            //alert(JSON.stringify(newmeters));
            if(newmeters.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
          
            }
          }    
         
        }  if (aarolesInputData.feederId!==null && aarolesInputData.feederId!=="" ){
          var newmeters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var elemen=METERLOCATIONData.items[i]; 
              if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId && elemen.townAutoid.autoid==aarolesInputData.townId && elemen.substationAutoid.autoid==aarolesInputData.substationId && elemen.feederAutoid.autoid==aarolesInputData.feederId)  {              
              
            
                newmeters.push(elemen);
                aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            }   
          
            setTableData(newmeters);   
            setdisplayPanel(true);
            //alert(JSON.stringify(newmeters));
            if(newmeters.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
          
            }
            
          }    
          
        } if (aarolesInputData.transformerId!==null && aarolesInputData.transformerId!=="" ){
          var newmeters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
              var elemen=METERLOCATIONData.items[i]; 
              //alert(elemen.transformerAutoid.autoid);
              //alert(JSON.stringify(aarolesInputData.transformerId));
              if (elemen.transformerAutoid.autoid==aarolesInputData.transformerId)  {              
              
                //alert("elemen");
                newmeters.push(elemen);
                aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);
              }            
              
            }  
              
            setTableData(newmeters);   
            setdisplayPanel(true);
            //alert(JSON.stringify(newmeters));
            if(newmeters.length==1){
              var name = 3;
            window.location.href="/meter/newmeterthreesixty/" +aarolesInputData.meterId; 
            
            }
            
          }    
        }
        

/*
    if(tableData.length==1){
      var name = 3;
    window.location.href="/newmeterthreesixty/" +name; 
    }   
    */    
}
const handlenewSubmit=(event)=>{
  if(aarolesInputData.circleId!==null && aarolesInputData.circleId!==""){
  var newmeter=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var element=METERLOCATIONData.items[i]; 
            if (element.circleAutoid.autoid==aarolesInputData.circleId)  {              
            
          
              newmeter.push(element);
              aarolesInputData.meterId = element.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          }      
          setTableData(newmeter);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeter));
          if(newmeter.length==1){
            var name = 3;
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
                    
                      if(ticketsData.items[i].ticketid.meterid==aarolesInputData.meterId){
                      //  alert("yes");
                        setters.push(ticketsData.items[i]); 
                      } 
                    } 
                    start = false; 
                    count = 0;
      
                 // var element=ticketsData.items[i]; 
                 
                    
                }      
                
               
                setticketData(setters);  
                setdisplayticketPanel(true);
              }     
            
          
          } 
        }     
      
      } if (aarolesInputData.divisionId!==null &&aarolesInputData.divisionId!=="" ){
        var newmeters=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var elemen=METERLOCATIONData.items[i]; 
            if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId)  {              
            
          
              newmeters.push(elemen);
              aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          } 
           
          setTableData(newmeters);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeters));
          if(newmeters.length==1){
            var name = 3;
          
                var name = 3;
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
                        
                          if(ticketsData.items[i].ticketid.meterid==aarolesInputData.meterId){
                          //  alert("yes");
                            setters.push(ticketsData.items[i]); 
                          } 
                        } 
                        start = false; 
                        count = 0;
          
                     // var element=ticketsData.items[i]; 
                     
                        
                    }      
                    
                   
                    setticketData(setters);   
                    setdisplayticketPanel(true);
                  }     
                
              
              } 
          
          
        }    
         
      }  if (aarolesInputData.subdivisionId!==null && aarolesInputData.subdivisionId!==""){
        var newmeters=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var elemen=METERLOCATIONData.items[i]; 
            if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId)  {              
            
          
              newmeters.push(elemen);
              aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          }   
      
          setTableData(newmeters);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeters));
          if(newmeters.length==1){
            var name = 3;
          
          
          }
        }    
      
      } if (aarolesInputData.sectionId!==null &&aarolesInputData.sectionId!=="" ){
        var newmeters=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var elemen=METERLOCATIONData.items[i]; 
            if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId)  {              
            
          
              newmeters.push(elemen);
              aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          }    
        
          setTableData(newmeters);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeters));
          if(newmeters.length==1){
            var name = 3;
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
                    
                      if(ticketsData.items[i].ticketid.meterid==aarolesInputData.meterId){
                      //  alert("yes");
                        setters.push(ticketsData.items[i]); 
                      } 
                    } 
                    start = false; 
                    count = 0;
      
                 // var element=ticketsData.items[i]; 
                 
                    
                }      
                
               
                setticketData(setters);   
                setdisplayticketPanel(true);
              }     
            
           
          }
        }    
       
      }  if (aarolesInputData.townId!==null && aarolesInputData.townId!==""){
        var newmeters=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var elemen=METERLOCATIONData.items[i]; 
            if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId && elemen.townAutoid.autoid==aarolesInputData.townId)  {              
            
          
              newmeters.push(elemen);
              aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          }  
         
          setTableData(newmeters);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeters));
          if(newmeters.length==1){
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
                    
                      if(ticketsData.items[i].ticketid.meterid==aarolesInputData.meterId){
                      //  alert("yes");
                        setters.push(ticketsData.items[i]); 
                      } 
                    } 
                    start = false; 
                    count = 0;
      
                 // var element=ticketsData.items[i]; 
                 
                    
                }      
                
               
                setticketData(setters);  
                setdisplayticketPanel(true);
              }     
            

          
          }
        }  
       
      }  if (aarolesInputData.substationId!==null && aarolesInputData.substationId!==""){
        var newmeters=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var elemen=METERLOCATIONData.items[i]; 
            if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId && elemen.townAutoid.autoid==aarolesInputData.townId && elemen.substationAutoid.autoid==aarolesInputData.substationId)  {              
            
          
              newmeters.push(elemen);
              aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          }    
        
          setTableData(newmeters);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeters));
          if(newmeters.length==1){
            var name = 3;
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
                    
                      if(ticketsData.items[i].ticketid.meterid==aarolesInputData.meterId){
                      //  alert("yes");
                        setters.push(ticketsData.items[i]); 
                      } 
                    } 
                    start = false; 
                    count = 0;
      
                 // var element=ticketsData.items[i]; 
                 
                    
                }      
                
               
                setticketData(setters);   
                setdisplayticketPanel(true);
              }     
            
           
          
        
          }
        }    
       
      }  if (aarolesInputData.feederId!==null && aarolesInputData.feederId!=="" ){
        var newmeters=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var elemen=METERLOCATIONData.items[i]; 
            if (elemen.circleAutoid.autoid==aarolesInputData.circleId && elemen.divisionAutoid.autoid==aarolesInputData.divisionId && elemen.subdivisionAutoid.autoid==aarolesInputData.subdivisionId && elemen.sectionAutoid.autoid==aarolesInputData.sectionId && elemen.townAutoid.autoid==aarolesInputData.townId && elemen.substationAutoid.autoid==aarolesInputData.substationId && elemen.feederAutoid.autoid==aarolesInputData.feederId)  {              
            
          
              newmeters.push(elemen);
              aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          }   
        
          setTableData(newmeters);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeters));
          if(newmeters.length==1){
            var name = 3;
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
                    
                      if(ticketsData.items[i].ticketid.meterid==aarolesInputData.meterId){
                      //  alert("yes");
                        setters.push(ticketsData.items[i]); 
                      } 
                    } 
                    start = false; 
                    count = 0;
      
                 // var element=ticketsData.items[i]; 
                 
                    
                }      
                
               
                setticketData(setters);   
                setdisplayticketPanel(true);
              }     
            
           
          
        
          
        
          }
          
        }    
        
      } if (aarolesInputData.transformerId!==null && aarolesInputData.transformerId!=="" ){
        var newmeters=new Array<any>();
        if(METERLOCATIONData.items.length>0){                
          for(var i=0;i<METERLOCATIONData.items.length;i++){
            var elemen=METERLOCATIONData.items[i]; 
            //alert(elemen.transformerAutoid.autoid);
            //alert(JSON.stringify(aarolesInputData.transformerId));
            if (elemen.transformerAutoid.autoid==aarolesInputData.transformerId)  {              
            
              //alert("elemen");
              newmeters.push(elemen);
              aarolesInputData.meterId = elemen.meterDetailsAutoid.meterSerialNumber;
              setInput(aarolesInputData);
            }            
            
          }  
            
          setTableData(newmeters);   
          setdisplayPanel(true);
          //alert(JSON.stringify(newmeters));
          if(newmeters.length==1){
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
                    
                      if(ticketsData.items[i].ticketid.meterid==aarolesInputData.meterId){
                      //  alert("yes");
                        setters.push(ticketsData.items[i]); 
                      } 
                    } 
                    start = false; 
                    count = 0;
      
                 // var element=ticketsData.items[i]; 
                 
                    
                }      
                
               
                setticketData(setters);   
                setdisplayticketPanel(true);
              }     
            
           
          
          
          }
          
        }    
      }
      

/*
  if(tableData.length==1){
    var name = 3;
  window.location.href="/newmeterthreesixty/" +name; 
  }   
  */    
}
const [isPageLoaded, setPageLoaded] = useState(false);
loadGrid();
      function loadGrid(){
        if (!isPageLoaded && !CIRCLEData.isLoading) {
          var meters=new Array<any>();
          if(CIRCLEData.items.length>0){                
            for(var i=0;i<CIRCLEData.items.length;i++){
              var element=CIRCLEData.items[i]; 
              if (element.status!=="Active")  {              
              
              }   
              else{
                meters.push(element);
              }            
              
            }      
            setPageLoaded(true);
            setcircle(meters);   
          }     
        }
      }
      const getTemplate=(rowData:any , column:any)=> {
        return <div>
            <a  onClick={()=>{onCheckSelected(rowData)}}>meter360</a>
           
        </div>;
    }
    const getRowTemplate=(rowData:any , column:any)=> {
      return <div>
          <a  onClick={()=>{onCheckingSelected(rowData)}}>Meter detail</a>
         
      </div>;
  }
  const onCheckSelected=(rowData:any)=>{
  
      var data=rowData;
      //setInput(consumer);
      aarolesInputData=data;
      window.location.href="/meter/newmeterthreesixty/" +data.meterDetailsAutoid.meterSerialNumber; 
  }    
  const onCheckingSelected=(rowData:any)=>{

      var data=rowData;
      //setInput(consumer);
      aarolesInputData=data;
      aarolesInputData.circle=data.circleAutoid.circleName;
      aarolesInputData.division=data.divisionAutoid.divisionName;
      aarolesInputData.subdivision=data.subdivisionAutoid.subdivisionName;
      aarolesInputData.section=data.sectionAutoid.sectionName;
      aarolesInputData.town=data.townAutoid.townName;
      aarolesInputData.substation=data.substationAutoid.subStationName;
      aarolesInputData.feeder=data.feederAutoid.feederName;
      aarolesInputData.transformer=data.transformerAutoid.transformerName;
      setInput({ ...aarolesInputData }); 
      //setInput(consumer);
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
              
                if(ticketsData.items[i].ticketid.meterid==data.meterDetailsAutoid.meterSerialNumber){
                //  alert("yes");
                  setters.push(ticketsData.items[i]); 
                } 
              } 
              start = false; 
              count = 0;

           // var element=ticketsData.items[i]; 
           
              
          }      
          
         
          setticketData(setters);   
          setdisplayticketPanel(true);
        }     
      
     
    
    
    
   
  } 
  return (
   <div>
       <Panel header="Meter Search"  toggleable={true}style={{backgroundColor: "#007be5"}} >
<div className="card summary" > 
<div className="p-grid"style={{color: 'white'}}>
<div className="p-col-12 p-md-2" style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="report_type">Circle </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="circle" optionLabel="circleName" options={circle}onChange={handleInputChange}  value={aarolesInputData.circleName} required  autoWidth={false} /> 
                          </div>
                        <div className="p-col-12 p-md-2"style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="report_type_name"> Division</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="division" optionLabel="divisionName" options={division}onChange={handleInputChange}  value={aarolesInputData.divisionName} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid"style={{color: 'white'}}>
                        <div className="p-col-12 p-md-2"style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="consumerAddress">Subdivision</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="subdivision" optionLabel="subdivisionName" options={subdivision}onChange={handleInputChange}  value={aarolesInputData.subdivisionName} required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2"style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="consumerAddress">Section Name</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="section" optionLabel="sectionName" options={section}onChange={handleInputChange}  value={aarolesInputData.sectionName} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid"style={{color: 'white'}}>
                        <div className="p-col-12 p-md-2"style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="status">Town</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="town" optionLabel="townName" options={town}onChange={handleInputChange}  value={aarolesInputData.townName} required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2"style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="file_name">Sub Station</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="substation" optionLabel="subStationName" options={suberstation}onChange={handleInputChange}  value={aarolesInputData.substationName} required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid"style={{color: 'white'}}>
                        <div className="p-col-12 p-md-2"style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="file_name">feederName</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="feeder" optionLabel="feederName" options={feeder}onChange={handleInputChange}  value={aarolesInputData.feederName} required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2"style={{backgroundColor: "#007be5"}}>
                          <label htmlFor="file_name">Dt Name</label>
                        </div>
                        <div className="p-col-12 p-md-4"style={{backgroundColor: "#007be5"}}>
                        <Dropdown id="transformer" optionLabel="transformerName" options={transformer}onChange={handleInputChange}  value={aarolesInputData.transformerName} required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                      
                        <div className="p-grid">
                <div className="p-col-12 p-md-3">
                  <Button
                    label="Export"
                    onClick={handleSubmit}
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
                </div>
                <div className="p-col-12 p-md-3">
                  <Button
                    label="Search"
                    onClick={handlenewSubmit}
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
                </div>
                </div>
                    
                    </div>
                    </Panel>
                    {

displayPanel &&
(
    
                  
                    <Panel header="Log event damage report" toggleable={true}>
         <DataTable
                      value={tableData}
                     
                      header="Meter Data"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                      onRowSelect={onRowSelected}
                      selectionMode="single"
                      emptyMessage="No records found"
                    >             

                     <Column field="autoid" header="Id" sortable={true}/>
                        <Column field="meterDetailsAutoid.meterSerialNumber" header="Serial Number" sortable={true}/>
                        <Column field="circleAutoid.circleName" header="Circle" sortable={true}/>
                        <Column field="divisionAutoid.divisionName" header="Division" sortable={true}/>
                        <Column field="subdivisionAutoid.subdivisionName" header="SubDivision" sortable={true}/>  
                        <Column field="sectionAutoid.sectionName" header="Section" sortable={true}/>
                        <Column field="townAutoid.townName" header="Town" sortable={true}/>
                        <Column field="substationAutoid.subStationName" header="Substation" sortable={true}/>  
                        <Column field="feederAutoid.feederName" header="Feeder" sortable={true}/>
                        <Column field="transformerAutoid.transformerName" header="Transformer" sortable={true}/>  
                        
                           <Column
                                          header="viewmeter"
                                         body={getRowTemplate}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />                 
                    </DataTable>

         </Panel>
)
}
{

displayticketPanel &&
(

    
                    <Panel header="Meter Live report" toggleable={true}>
                         <Panel header="Meter Details" toggleable={true}>
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">Circle </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <InputText id="circle"  value={aarolesInputData.circle} required  autoWidth={false} /> 
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> Division</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="division"   value={aarolesInputData.division} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Subdivision</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="subdivision"   value={aarolesInputData.subdivision} required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Section Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="section"   value={aarolesInputData.section} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">Town</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="town"  value={aarolesInputData.town} required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Sub Station</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="substation"  value={aarolesInputData.substation} required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">feederName</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="feeder"  value={aarolesInputData.feeder} required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Dt Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="transformer"  value={aarolesInputData.transformer} required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                      
                       
                    
                    </div>
                    </Panel>
                         <Panel header="Meter Communication Detail" toggleable={true}>
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type" >First communicated On </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <InputText id="circle"   required  autoWidth={false} /> 
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> First communicated reading</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="division"    required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Last communicated on</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="subdivision"   required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Last Communicated reading</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="section"    required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">No of days communicated till today</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="town"   required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">No of days communicated continuosly</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="substation"   required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Meter changed on</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="feeder"   required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Mapped date</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="transformer"   required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">User event/logged updation record</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="feeder"   required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Installed at meter location</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="transformer"   required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                       
                    
                    </div>
                    </Panel>
                         <Panel header="Log/Event/Damage Report" toggleable={true}>
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
         <DataTable
                      value={ticketData}
                     
                      header="Ticket Data"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={newselectedData}
                      onSelectionChange={onnewSelectionChangeed}
                      onRowSelect={onRowSelected}
                      selectionMode="single"
                      emptyMessage="No records found"
                    >             

<Column field="ticketid.ticketid" header="Ticketid" sortable={true}/>
                     <Column field="ticketid.meterid" header="Meterserialnumber" sortable={true}/>
                        <Column field="ticketid.ticketcategoryid.description" header="Category" sortable={true}/>
                        <Column field="ticketid.ticketsubcategoryid.subdescription" header="Subcategory" sortable={true}/>
                        <Column field="ticketid.tickettype" header="tickettype" sortable={true}/>
                        <Column field="ticketid.insert_datetime" header="Assigned Date" sortable={true}/>  
                        <Column field="details" header="Details" sortable={true}/>  
                        <Column field="ticketid.status" header="Status" sortable={true}/>  
                       
                    </DataTable>

         </Panel>
         </Panel>
)
}

    </div>
    
    );
        
    
};
const mapStateToProps = (state: any) => {
    const { deviceFormData,
      CIRCLEData ,
  DIVISIONData,
  SUBDIVISIONData,
  SECTIONData,
  TOWNData ,
  SUBSTATIONData ,
  FEEDERData ,
  TRANSFORMERData,
  METERLOCATIONData,
  ticketsData
    } = state;
    return {
        deviceFormData,
        CIRCLEData ,
        DIVISIONData,
        SUBDIVISIONData,
        SECTIONData,
        TOWNData ,
        SUBSTATIONData ,
        FEEDERData ,
        TRANSFORMERData,
        METERLOCATIONData,
        ticketsData
    };
};
export default connect(mapStateToProps)(Meterlifecyclereport);
 