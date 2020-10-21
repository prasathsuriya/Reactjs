/*global google*/
import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from "react-redux";
import {Button} from 'primereact/button';
//import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { InputText } from "primereact/inputtext";
import {Dropdown} from 'primereact/dropdown';
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
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import {getACTUALINSTANTList  } from "../../../store/actions/ActualInstant";
import {getMETERDATEList  } from "../../../store/actions/Meterdate";
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import GoogleMapReact from 'google-map-react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { Calendar, DateMetaData } from 'primereact/calendar';
interface IMeterDailyLoadInformationReport {}
interface IMeterDailyLoadInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
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
  ACTUALINSTANTData: any;
  METERDATEData: any;
}
const  Averagevoltage: React.FC<IMeterDailyLoadInformationReport> = ({
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
  ACTUALINSTANTData,
  METERDATEData
    
}) =>{
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
          dispatch(getACTUALINSTANTList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
        }                  
      }, []);
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
    let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
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
        startdate:new Date(),
        enddate:new Date()

        //updated_by
      }; 
      const aapermission={
        circleName:"",
        subdivisionName:"",
        divisionName : "",
        sectionName : "",
        townName :"",
        substationName: "",
        feederName:"",
        transformerName : "",
       id:"",
       cumPowerOffDuration:"",
       meterSerialNumber:"",
      noOfPowerFailures:""

        //updated_by
      }; 
      let [aarolesInputData, setInput] = useState(aaroles);    
      let [aapermissionInputData, settingInput] = useState(aapermission);  
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
     const[displayInstant, setdisplayInstant]=useState(false);
     const [date1, setDate1] = useState<Date | Date[] | undefined>(undefined);
     const [date2, setDate2] = useState<Date | Date[] | undefined>(undefined);
     
     const[valees, setvalees]=useState("");
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
     const [newtenant, setnewtenant]= useState("");
     const header = renderHeader();
     const [selectedData, setSelectedData] = useState();
     const dateTemplate = (date: DateMetaData) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{ backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0 }}>{date.day}</div>
            );
        }
        else {
            return date.day;
        }
    };
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
              else if (event.target.id === "startdate") {
                aarolesInputData.startdate = event.target.value;
                
              } else if (event.target.id === "enddate") {
                aarolesInputData.startdate = event.target.value;
                
              } 
        
      };
      const [effectivedate, setEffectivedate] = useState(new Date());
      const [enddate, setenddate] = useState(new Date());
      const handleStartDateChange = (event: any) => {
        setEffectivedate(aarolesInputData.startdate= event.value);

      };
      const handleendDateChange = (event: any) => {
        setenddate(aarolesInputData.enddate= event.value);
      };
      const onRowSelected=(event)=>{
       
        
          var data=event.data;
          //setInput(consumer);
          aarolesInputData.meterId=data.meterDetailsAutoid.autoid;
                   
          //setInput(consumer);
          setInput({ ...aarolesInputData }); 
          
          //If need to show delete button
          //setShowDelete(true);
        //  window.location.href="/newmeterthreesixty/" +data.meterDetailsAutoid.meterSerialNumber; 
        
      }     
      const handleSubmit=(event)=>{
       
        setInput(aarolesInputData);
        alert(JSON.stringify(aarolesInputData));
        console.log(JSON.stringify(aarolesInputData));
        dispatch(getMETERDATEList(aarolesInputData)); 
        if (!displayPanel && !METERDATEData.isLoading) {
          var meters=new Array<any>();
          if(METERDATEData.items.length>0){                
            for(var i=0;i<METERDATEData.items.length;i++){
              var element=METERDATEData.items[i]; 
                
            
                meters.push(element);
                aarolesInputData.meterId = element.meterDetailsAutoid.meterSerialNumber;
                setInput(aarolesInputData);  
              
            }      
            setdisplayPanel(true);
            setTableData(meters);   
          }     
        }
        /*
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
              
              }
            }    
            if(tableData.length==1){
              var name = 3;
            window.location.href="/meter/newviewmeter/" +valees; 
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
              
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
               
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
              
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
            
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
            
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
              window.location.href="/meter/newviewmeter/" +aarolesInputData.meterId; 
              
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
            var meters=new Array<any>();
   // alert(JSON.stringify(METERLOCATIONData.items.meterDetailsAutoid));
    if(ACTUALINSTANTData.items.length>0){                
      for(var i=0;i<ACTUALINSTANTData.items.length;i++){
      
        
        var element=ACTUALINSTANTData.items[i];
        if(element.meterAutoid.meterSerialNumber==rowData.meterDetailsAutoid.meterSerialNumber){  
          return <div>
          <a >{element.noOfPowerFailures}</a>
         
      </div>;
         // alert("location");
        // setnewtenant(element.meterAutoid.meterSerialNumber);
       // alert(element.meterAutoid.meterSerialNumber);
       // alert(JSON.stringify(aarolesInputData));
        }
        
      }      
    }
   
            
        }
        const getRowTemplate=(rowData:any , column:any)=> {
          var meters=new Array<any>();
          // alert(JSON.stringify(METERLOCATIONData.items.meterDetailsAutoid));
           if(ACTUALINSTANTData.items.length>0){                
             for(var i=0;i<ACTUALINSTANTData.items.length;i++){
             
               
               var element=ACTUALINSTANTData.items[i];
               if(element.meterAutoid.meterSerialNumber==rowData.meterDetailsAutoid.meterSerialNumber){  
                 return <div>
                 <a >{element.noOfPowerFailures}</a>
                
             </div>;
                // alert("location");
               // setnewtenant(element.meterAutoid.meterSerialNumber);
              // alert(element.meterAutoid.meterSerialNumber);
              // alert(JSON.stringify(aarolesInputData));
               }
               
             }      
           }
          
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
                  
          //setInput(consumer);
            window.location.href="/meter/newviewmeter/" +data.meterDetailsAutoid.meterSerialNumber; 
       
      } 
      return (
       <div>
           <Panel header="Meter Search" toggleable={true}>
    <div className="card summary"> 
    <div className="p-grid">
    <div className="p-col-12 p-md-2">
                              <label htmlFor="report_type">Circle </label>
                            </div>
                            
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="circle" optionLabel="circleName" options={circle}onChange={handleInputChange}  value={aarolesInputData.circleName} required  autoWidth={false} /> 
                              </div>
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="report_type_name"> Division</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="division" optionLabel="divisionName" options={division}onChange={handleInputChange}  value={aarolesInputData.divisionName} required  autoWidth={false} /> 
                            </div>
                          </div>
                          <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="consumerAddress">Subdivision</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="subdivision" optionLabel="subdivisionName" options={subdivision}onChange={handleInputChange}  value={aarolesInputData.subdivisionName} required  autoWidth={false} /> 
                            </div>
                         
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="consumerAddress">Section Name</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="section" optionLabel="sectionName" options={section}onChange={handleInputChange}  value={aarolesInputData.sectionName} required  autoWidth={false} /> 
                            </div>
                          </div>
                          <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="status">Town</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="town" optionLabel="townName" options={town}onChange={handleInputChange}  value={aarolesInputData.townName} required  autoWidth={false} /> 
                            </div>
                           
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="file_name">Sub Station</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="substation" optionLabel="subStationName" options={suberstation}onChange={handleInputChange}  value={aarolesInputData.substationName} required  autoWidth={false} /> 
                            
                          </div>
                             
                        </div>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="file_name">feederName</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="feeder" optionLabel="feederName" options={feeder}onChange={handleInputChange}  value={aarolesInputData.feederName} required  autoWidth={false} /> 
                            
                          </div>
                             
                          <div className="p-col-12 p-md-2">
                              <label htmlFor="file_name">Dt Name</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="transformer" optionLabel="transformerName" options={transformer}onChange={handleInputChange}  value={aarolesInputData.transformerName} required  autoWidth={false} /> 
                            
                          </div>
                           
                            </div>
                            <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="file_name">feederName</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="feeder" optionLabel="feederName" options={feeder}onChange={handleInputChange}  value={aarolesInputData.feederName} required  autoWidth={false} /> 
                            
                          </div>
                             
                          <div className="p-col-12 p-md-2">
                              <label htmlFor="file_name">Dt Name</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Dropdown id="transformer" optionLabel="transformerName" options={transformer}onChange={handleInputChange}  value={aarolesInputData.transformerName} required  autoWidth={false} /> 
                            
                          </div>
                           
                            </div>
                            <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                              <label htmlFor="file_name">From Date</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Calendar placeholder="DateTime"  id = "startdate "value={aarolesInputData.startdate}  viewDate={aarolesInputData.startdate} onSelect={(e) => aarolesInputData.startdate  = e.value} dateFormat="mm/dd/yy"  showIcon={true} />
                            
                          </div>
                             
                          <div className="p-col-12 p-md-2">
                              <label htmlFor="file_name">To Date</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <Calendar placeholder="DateTime" id= "enddate" value={aarolesInputData.enddate} viewDate={aarolesInputData.enddate} onSelect={(e) => aarolesInputData.enddate  = e.value}  onChange={handleInputChange} dateFormat="mm/dd/yy" showIcon={true}  />
                            
                          </div>
                           
                            </div>
                            <div className="p-grid">
                    <div className="p-col-12 p-md-3">
                      <Button
                        label="Search"
                        onClick={handleSubmit}
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
                        <Panel header="Meter Details" toggleable={true}>
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
                            <Column field="meterDetailsAutoid.meterSerialNumber" header="Meter Serial Number" sortable={true}/>
                            <Column field="transformerAutoid.transformerName" header="Name of DT" sortable={true}/>
                            <Column
                                              header="Max average voltage"
                                             body={getTemplate}
                                             style={{ textAlign: "center", width: "8em" }}
                                            />
                                            <Column
                                              header="Min average voltage"
                                             body={getRowTemplate}
                                             style={{ textAlign: "center", width: "8em" }}
                                            /> 
                            
                            <Column field="circleAutoid.circleName" header="Circle" sortable={true}/>
                            <Column field="divisionAutoid.divisionName" header="Division" sortable={true}/>
                            <Column field="subdivisionAutoid.subdivisionName" header="Subdivision" sortable={true}/>
                            <Column field="sectionAutoid.sectionName" header="Section" sortable={true}/>     
                            <Column field="townAutoid.townName" header="Town" sortable={true}/>
                            <Column field="substationAutoid.subStationName" header="Substation" sortable={true}/>
                            <Column field="feederAutoid.feederName" header="Feeder" sortable={true}/>  
                        </DataTable>
    
             </Panel>
    )
    }
     {
    
    displayInstant &&
    (
                        <Panel header="Meter Details" toggleable={true}>
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
                            <Column field="meterAutoid.meterSerialNumber" header="Meter Serial Number" sortable={true}/>
                            <Column field="transformerAutoid.transformerName" header="Name of DT" sortable={true}/>
                            <Column
                                              header="Duration Of Power Failure"
                                             body={getTemplate}
                                             style={{ textAlign: "center", width: "8em" }}
                                            />
                                            <Column
                                              header="No Of Power Failure"
                                             body={getRowTemplate}
                                             style={{ textAlign: "center", width: "8em" }}
                                            />
                            
                            <Column field="sectionAutoid.sectionName" header="Average kwh" sortable={true}/>
                            <Column field="townAutoid.townName" header="Load Factor" sortable={true}/> 
                           
                                             
                        </DataTable>
    
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
  ACTUALINSTANTData,
  METERDATEData
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
        ACTUALINSTANTData,
        METERDATEData
    };
};
export default connect(mapStateToProps)(Averagevoltage);