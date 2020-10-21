import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {AutoComplete} from 'primereact/autocomplete';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import { getUsersList, saveUser, updateUserStatus } from "../../../store/actions/CreateUser";
import {Column} from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';
import {saveTickets } from "../../../store/actions/Tickets";
import {getTicketcategoriesList } from "../../../store/actions/Ticketcategory";
import {getTicketsubcategoriesList } from "../../../store/actions/Ticketsubcategory";
import {getJobProfiles  } from "../../../store/actions/JobProfile";
import { getCurrentUser } from "../../../store/selectors/Accounts";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import {getCIRCLEList  } from "../../../store/actions/Circle";
import {getDIVISIONList  } from "../../../store/actions/Division";
import {getSUBDIVISIONList  } from "../../../store/actions/Subdivision";
import {getSECTIONList  } from "../../../store/actions/Section";
import {getTOWNList  } from "../../../store/actions/Town";
import {getSUBSTATIONList  } from "../../../store/actions/Substation";
import {getFEEDERList  } from "../../../store/actions/Feeder";
import {getTRANSFORMERList  } from "../../../store/actions/Transformer";
import {getMETERLOCATIONList  } from "../../../store/actions/Meterlocation";
import {getMETERMANUFACTUREList  } from "../../../store/actions/metermanufacture";
import TextArea from "antd/lib/input/TextArea";
import {getMETERDETAILList  } from "../../../store/actions/Meterdetail";
import {saveMETERDETAILS  } from "../../../store/actions/Meterdetails";
import {Growl} from 'primereact/growl';
import { ProgressSpinner } from 'primereact/progressspinner';
import {getACTUALBLOCKLOADList } from "../../../store/actions/ActualBlockload";
import {getcommondetailsList } from "../../../store/actions/Commondetails";
import {getMETERMFDETAILSList } from "../../../store/actions/Metermfdetails";
import {getMETERCONNECTIONList } from "../../../store/actions/Meterconnection";
import {savecommondetails } from "../../../store/actions/Commondetails";
import {Panel} from 'primereact/panel';
import Commondetails from "./Commondetails";
import { manufactureData } from "../../../store/reducers/Manufacture";
;
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IWorkflows {
    workflowData: any;
    dispatch: Dispatch<any>;
    ticketcategriesData: any;
    subticketcategriesData: any;
    ticketsData: any;
    newUserData:any; 
    METERDETAILSData:any;
    ACTUALBLOCKLOADData:any;
    CIRCLEData : any;
    DIVISIONData:any;
    SUBDIVISIONData:any;
    SECTIONData:any;
    TOWNData:any;
    SUBSTATIONData:any;
    FEEDERData:any;
    TRANSFORMERData:any;
    METERLOCATIONData:any;
    commondetailsData: any;
    METERMANUFACTUREData: any;
    METERMFDETAILSData: any;
    METERCONNECTIONData: any;
}
const  Metersearch: React.FC<IWorkflows> = ({
    dispatch,
    ticketcategriesData,
    subticketcategriesData,
    ticketsData,
    commondetailsData,
    newUserData,
    METERDETAILSData,
    ACTUALBLOCKLOADData,
    CIRCLEData ,
    DIVISIONData,
    SUBDIVISIONData,
    SECTIONData,
    TOWNData ,
    SUBSTATIONData ,
    FEEDERData ,
    TRANSFORMERData,
    METERLOCATIONData,
    METERMANUFACTUREData,
    METERMFDETAILSData,
    METERCONNECTIONData
}) => {
   
   
  
    const dataTableValues = [
        {"workflowid":"1","icareunit":"AE","workflowcode":"Meter On Board","description":"Meter Details","longdescription":"View meter details"},
        {"workflowid":"2","icareunit":"SE","workflowcode":"Product Configuration","description":"Product Details","longdescription":"view product details"},
        {"workflowid":"3","icareunit":"TA","workflowcode":"Insident Management","description":"Insident details","longdescription":"view insident details"}
 ];
       const workflowdetail={
        autoid:"",
        meterSerialNumber:"",
        deviceid:"",
        manufactureid:"",
        manufacture:"",
        fwVersion : "",
        ipAddress:"",
        installationType:"",
        installation:"",
        connectionStatus:"",
        energyMultiplier: "",
        meterType:"",
        simNumber:"",
        inserted_by:"",
        updated_by:"",
        mfYear:"",
        meterCategory:"",
        currentRating:"",
        installationSubtype:"",
        latitude:"",
        longitude:"",
        subinstallation:"",
        voltageMultipiler:"",
        currentMultiplier:"",
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
        sourceType:"",
        source:"",
        meterIp:"",
        meterPort:"",
        aunthenticationType:"",
        meterPassword:"",
        systemTitle:"",
        blockCipherKey:"",
        authenticationKey:"",
        referencingName:"",
        isWrapper:"",
        iec:"",
        serialport:""
      };  
      
      const newdetail={
       meterSerialNumber:""
      };
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
        meterId:""
        //updated_by
      }; 
      let [aarolesInputData, setInput] = useState(aaroles);    
      let [workflowData, setsInput] = useState(workflowdetail);
      const [ticketdescriptionid, setticket] = useState("");
      const [newtenant, setnewtenant]= useState("");
      const [manufacture, setmanufacture] = useState(new Array<any>());
      const [commondetails, setcommondetails] = useState(new Array<any>());
      const [commonsubdetails, setcommonsubdetails] = useState(new Array<any>());
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
      const loggedInString = localStorage.getItem("AUTHDATA");
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      workflowData.updated_by = loggedInData.userProfile.userautoid.userId;
      workflowData.inserted_by = loggedInData.userProfile.userautoid.userId;
    
    }
  }
  useEffect(() => {
    dispatch(getJobProfiles(""));
    var curentUser=getCurrentUser();
    if(curentUser!=null){
      setUserData(curentUser);
      dispatch(getTicketcategoriesList(curentUser.userProfile.roleFkId.companyAutoId.id));    
      dispatch(getTicketsubcategoriesList(curentUser.userProfile.roleFkId.companyAutoId.id));   
      dispatch(getCIRCLEList(curentUser.userProfile.roleFkId.companyAutoId.id));   
      dispatch(getDIVISIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getSUBDIVISIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getSECTIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getTOWNList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getSUBSTATIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getFEEDERList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getTRANSFORMERList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getMETERLOCATIONList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
      dispatch(getACTUALBLOCKLOADList(curentUser.userProfile.roleFkId.companyAutoId.id));   
      dispatch(getcommondetailsList(curentUser.userProfile.roleFkId.companyAutoId.id));
      dispatch(getMETERMANUFACTUREList(curentUser.userProfile.roleFkId.companyAutoId.id));
      dispatch(getMETERCONNECTIONList(curentUser.userProfile.roleFkId.companyAutoId.id));
      dispatch(getMETERMFDETAILSList(curentUser.userProfile.roleFkId.companyAutoId.id));
    }                  
  }, []);

       const [userData, setUserData] = useState();
       const [displaydialog, setdisplaydialog] = useState(false)
       const [isValid, setValid] = useState(false);
       const [selectedData, setSelectedData] = useState();
       const [dataTable, setDataTable] = useState();
       const getTemplate=(rowData:any , column:any)=> {
        return <div>
            <a  onClick={()=>{onCheckSelected(rowData)}}>edit</a>
           
        </div>;
    }
    const setevent=(event)=>{
     window.location.href="/meter/metersave"
      }
       const onSelectionChangeed=(e) => {setSelectedData(e.value)}
       const handlenewInputChange = (event: any) => {
        if (event.target.id === "meterserialnumber") {

            workflowData.meterSerialNumber = event.target.value;
         
          
        } else if (event.target.id === "deviceid") {
           workflowData.deviceid = event.target.value;
        } else if (event.target.id === "type") {
          workflowData.meterType = event.target.value;
        } 
         else if (event.target.id === "metercategory") {
            workflowData.meterCategory = event.target.value;
          }  else if (event.target.id === "currentrating") {
          workflowData.currentRating = event.target.value;
        
        } else if (event.target.id === "firwareversion") {
          workflowData.fwVersion = event.target.value;
        } else if (event.target.id === "firmwareyear") {
            workflowData.mfYear = event.target.value;
          } else if (event.target.id === "ipaddress") {
            workflowData.ipAddress = event.target.value;
          } else if (event.target.id === "metersimnumber") {
              workflowData.simNumber = event.target.value;
            } else if (event.target.id === "connectionstatus") {
                workflowData.connectionStatus = event.target.value;
              } else if (event.target.id === "volgatemultiplier") {
                workflowData.voltageMultipiler = event.target.value;
              } else if (event.target.id === "energymultiplier") {
                  workflowData.energyMultiplier = event.target.value;
                }  else if (event.target.id === "currentmultiplier") {
                    workflowData.currentMultiplier = event.target.value;
                  } else if (event.target.id === "latitude") {
                    workflowData.latitude = event.target.value;
                  }  else if (event.target.id === "longitude") {
                      workflowData.longitude = event.target.value;
                    } else if (event.target.id === "meterip") {
                        workflowData.meterIp = event.target.value;
                      } else if (event.target.id === "meterport") {
                          workflowData.meterPort = event.target.value;
                        } else if (event.target.id === "autentication") {
                          workflowData.aunthenticationType = event.target.value;
                        } else if (event.target.id === "meterpassword") {
                            workflowData.meterPassword = event.target.value;
                          } else if (event.target.id === "systemtitle") {
                              workflowData.systemTitle = event.target.value;
                            } else if (event.target.id === "blockcipher") {
                              workflowData.blockCipherKey = event.target.value;
                            } else if (event.target.id === "authenticationkey") {
                                workflowData.authenticationKey = event.target.value;
                              }  else if (event.target.id === "referencingname") {
                                  workflowData.referencingName = event.target.value;
                                } else if (event.target.id === "wrapper") {
                                  workflowData.isWrapper = event.target.value;
                                }  else if (event.target.id === "iec") {
                                    workflowData.iec = event.target.value;
                                  }  else if (event.target.id === "serialport") {
                                    workflowData.serialport = event.target.value;
                                  }  else if (event.target.id === "connectionstatus") {
                                      workflowData.connectionStatus = event.target.value;
                                    } 
        setsInput({...workflowData});
        
          setsInput({...workflowData});
         
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
              else if (event.target.id === "Install") {
                alert("yes");
                workflowData.installation = event.target.value;
                workflowData.installationType = event.target.value.common_value;
                var meters=new Array<any>();
            var rum=new Array<any>();
           
            if(commondetailsData.items.length>0){                
              for(var i=0;i<commondetailsData.items.length;i++){
                  
                var elemers=commondetailsData.items[i];  
                if(elemers.common_value!==event.target.value.common_value){
              
                rum.push(elemers);
                }
             // alert(meters);
              }   
              
              //setPageLoading(true);
             
              setcommonsubdetails(rum);
            }
               
      
              } else  if (event.target.id === "installationsub") {
                  workflowData.subinstallation = event.target.value;
                  workflowData.installationSubtype = event.target.value.common_value;

                }
                else  if (event.target.id === "manufacture") {
                  workflowData.manufacture = event.target.value;
                  workflowData.manufactureid = event.target.value.autoid;
                }else  if (event.target.id === "sourcetype") {
                    workflowData.source = event.target.value;
                    workflowData.sourceType = event.target.value.common_value;
                  }
              setInput(aarolesInputData);
        
      };
      const [isPageLoaded, setPageLoaded] = useState(false)
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
      function onClickAdd(event) {
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [growl, setGrowl]=useState();
      const handleSubmit = (event: any) => {    
            
   //   alert(JSON.stringify(workflowData));
      // alert(JSON.stringify(ticketcategriesData.items));
         workflowData.circleId=aarolesInputData.circleId ;
         workflowData.divisionId=aarolesInputData.divisionId ;
          workflowData.subdivisionId =aarolesInputData.subdivisionId ;
          workflowData.townId= aarolesInputData.townId ;
          workflowData.transformerId= aarolesInputData.transformerId ;
          workflowData.substationId  = aarolesInputData.substationId;
          workflowData.sectionId= aarolesInputData.sectionId;
          workflowData.feederId=  aarolesInputData.feederId ;
        setsInput(workflowData);
        alert(JSON.stringify(workflowData));
        if(workflowData.meterSerialNumber!==null && workflowData.meterSerialNumber!==""){
       dispatch(saveMETERDETAILS(workflowData));  
       //alert("saved");
        }else{
            alert("no meterserialnumber")
        }
        
      }
      const handleDeleteSubmit=(event)=>{
               
      }
      const [filteredCountriesMultiple, setFilteredCountriesMultiple] = useState(new Array<any>());
      const [filteredCountriesSingle, setFilteredCountriesSingle] = useState(new Array<any>());
      const [selectedCountry, setSelectedCountry] = useState<any>(null);

      const [category, setcategory] = useState(new Array<any>());
      const [subcategory, setsubcategory]=  useState(new Array<any>());
      const [locationdata, setlocationdata]=  useState(new Array<any>());
      const [assignto, setassignto]=  useState(new Array<any>());
      const [roleList, setRoleList] = useState([]);
      const [tablesData, setTablesData] = useState(new Array<any>());
      const [isPageLoading, setPageLoading] = useState(false)
      const [isPageLoader, setPageLoader] = useState(false)
      const [isPageLoads, setPageLoads] = useState(false)
      loadsGrid();
      function loadsGrid(){
         // alert(JSON.stringify(manufactureData));
        if (!isPageLoads && !METERMFDETAILSData.isLoading) {
         // alert(JSON.stringify(ticketcategriesData));
          var meters=new Array<any>();
          if(METERMANUFACTUREData.items.length>0){                
            for(var i=0;i<METERMFDETAILSData.items.length;i++){
              var element=METERMFDETAILSData.items[i];             
              meters.push(element);
            }      
            setPageLoads(true);
            setTablesData(meters);   
         //   alert(JSON.stringify(ticketcategriesData));
          }     
        }
      }
      loadnameGrid();
      function loadnameGrid(){
         // alert(JSON.stringify(manufactureData));
        if (!isPageLoading && !METERMANUFACTUREData.isLoading) {
         // alert(JSON.stringify(ticketcategriesData));
          var meters=new Array<any>();
          if(METERMANUFACTUREData.items.length>0){                
            for(var i=0;i<METERMANUFACTUREData.items.length;i++){
              var element=METERMANUFACTUREData.items[i];             
              meters.push(element);
            }      
            setPageLoading(true);
            setmanufacture(meters);   
         //   alert(JSON.stringify(ticketcategriesData));
          }     
        }
      }
      var header = <div style={{'textAlign':'left'}}></div>
      loaderGrid();
      function loaderGrid(){
       // alert(JSON.stringify(METERDETAILData.items.autoid));
       if (!isPageLoader && !commondetailsData.isLoading) {
        alert(JSON.stringify(commondetailsData));
        // alert(JSON.stringify(ticketcategriesData));
         var meters=new Array<any>();
         if(commondetailsData.items.length>0){                
           for(var i=0;i<commondetailsData.items.length;i++){
             var element=commondetailsData.items[i];             
             meters.push(element);
           }      
           setPageLoader(true);
           setcommondetails(meters);   
        //   alert(JSON.stringify(ticketcategriesData));
        
         }     
         alert(JSON.stringify(Commondetails));
       }
      }
      const[displayedDialog, setdisplayedDialog]=useState(false);
      const [showMessage, setShowMessage]=useState(false);
      const onCheckSelected=(rowData:any)=>{
        setShowMessage(false);
        if(!displayedDialog){
          var data=rowData;
          //setInput(consumer);
          workflowData=data;
          workflowData.autoid=data.meterDetailsAutoid.autoid;
          workflowData.meterSerialNumber=data.meterDetailsAutoid.meterSerialNumber;
          workflowData.ipAddress=data.meterDetailsAutoid.ipAddress;
          workflowData.simNumber=data.meterDetailsAutoid.simNumber;
          workflowData.deviceid=data.meterDetailsAutoid.deviceid;
          workflowData.currentRating=data.meterDetailsAutoid.currentRating;
          workflowData.connectionStatus=data.meterDetailsAutoid.connectionStatus;
          setsInput(workflowData);
          var meters=new Array<any>();
          if(METERLOCATIONData.items.length>0){                
            for(var i=0;i<METERLOCATIONData.items.length;i++){
                
              var element=METERLOCATIONData.items[i];   
              if(data.meterDetailsAutoid.autoid==element.meterDetailsAutoid.autoid) {
             aarolesInputData.circleName=element.circleAutoid;
             aarolesInputData.circleId=element.circleAutoid.autoid;
            // workflowData.circleId=element.circleAutoid.autoid
             aarolesInputData.divisionName=element.divisionAutoid;
             aarolesInputData.divisionId=element.divisionAutoid.autoid;
            // workflowData.divisionId=element.divisionAutoid.autoid
             aarolesInputData.subdivisionName=element.subdivisionAutoid;
          
            aarolesInputData.subdivisionId=element.subdivisionAutoid.autoid;
             aarolesInputData.sectionName=element.sectionAutoid;
             aarolesInputData.sectionId=element.sectionAutoid.autoid;
             aarolesInputData.sectionId=element.sectionAutoid.autoid;
             aarolesInputData.townName=element.townAutoid;
             aarolesInputData.townId=element.townAutoid.autoid;
             aarolesInputData.substationName=element.substationAutoid;
             aarolesInputData.substationId=element.substationAutoid.autoid;
             aarolesInputData.feederName=element.feederAutoid;
             aarolesInputData.feederId=element.feederAutoid.autoid;
             aarolesInputData.transformerName=element.transformerAutoid;
             aarolesInputData.transformerId=element.transformerAutoid.autoid;
             setInput({...aarolesInputData});
              }         
            
            }      
         
        
         //   alert(JSON.stringify(ticketcategriesData));
         
          } 
          if(METERCONNECTIONData.items.length>0){                
            for(var i=0;i<METERCONNECTIONData.items.length;i++){
              
              var element=METERCONNECTIONData.items[i];   
              if(data.meterDetailsAutoid.autoid==element.meterAutoid.autoid) {
            workflowData.meterIp=element.meterIp;
            workflowData.meterPort=element.meterPort;
            workflowData.aunthenticationType=element.aunthenticationType;
            workflowData.meterPassword=element.meterPassword;
            workflowData.systemTitle=element.systemeTitle;
            workflowData.blockCipherKey=element.blockCipherKey;
            workflowData.authenticationKey=element.autenticationKey;
            workflowData.referencingName=element.referencingName;
            workflowData.isWrapper=element.isWrapper;
            workflowData.iec=element.iec;
            workflowData.serialport=element.serialport;
            workflowData.connectionStatus=element.connectionStatus;
              }         
                
        
        } 
    }
    if(commondetailsData.items.length>0){                
        for(var i=0;i<commondetailsData.items.length;i++){
          
          var element=commondetailsData.items[i];   
          if(data.meterDetailsAutoid.installationType==element.common_value) {
            workflowData.installation=element;
          }  
          if(data.meterDetailsAutoid.subinstallationSubtype==element.common_value) {
            workflowData.subinstallation=element;
          }  
          if(data.sourceType==element.common_value) {
            workflowData.source=element;
          }   
           
            
    
    } 
}
    
          if(userData!=null){
           // aarolesInputData.updated_by= userData.userProfile.userFkId.userId;
           // aarolesInputData.inserted_by=data.inserted_by;
           
                                         
          }           
          //setInput(consumer);
          
          setsInput({ ...workflowData }); 
         
          setdisplayedDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
      }   
      
      const priority= [
        {label: 'Select autenthictaion', value: null},
        {label: 'high', value: 'high'},
        {label: 'low', value: 'low'},
     
      ] ;
        
    
      const type= [
        {label: 'Select reference name', value: null},
        {label: 'IN', value: 'IN'},
        {label: 'SN', value: 'SN '}
      ] ; 
      const sub = [
        {label: 'Select Wrapper', value: null},
        {label: 'yes', value: 'yes'},
        {label: 'no', value: 'no'}
      ] ; 
      const status = [
        {label: 'select status', value: null},
        {label: 'Active', value: 'Active'},
        {label: 'Inactive', value: 'Inactive'}
      ] ; 
      return (
          <div>
              <Dialog header="edit meter" visible={displayedDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayedDialog(false) }>
              {
                displayedDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
            <div>
          <Panel header="Meter Details" toggleable={true}>
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">Meter Serial Number </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <InputText id="meterserialnumber" onChange={handlenewInputChange}  value={workflowData.meterSerialNumber} required  /> 
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> Device Id</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="deviceid" onChange={handlenewInputChange}  value={workflowData.deviceid} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Meter Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="type" onChange={handlenewInputChange}  value={workflowData.meterType} required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Meter Category</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="metercategory" onChange={handlenewInputChange}  value={workflowData.meterCategory} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">Manufacture Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="manufacture" optionLabel="manufactureName" options={manufacture} onChange={handleInputChange}  value={workflowData.manufacture} required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">current Rating</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="currentrating" onChange={handlenewInputChange}  value={workflowData.currentRating} required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Firmware Version</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="firwareversion" onChange={handlenewInputChange}  value={workflowData.fwVersion} required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Year of Manufacture</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="firmwareyear" onChange={handlenewInputChange}  value={workflowData.mfYear} required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">IP Address </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <InputText id="ipaddress" onChange={handlenewInputChange}  value={workflowData.ipAddress} required  /> 
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> Sim Number</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="metersimnumber" onChange={handlenewInputChange}  value={workflowData.simNumber} required   /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Installation Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="Install" optionLabel="common_name" options={commondetails} onChange={handleInputChange} value={workflowData.installation} required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Installation SubType</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="installationsub" optionLabel="common_name" options={commonsubdetails} onChange={handleInputChange} value={workflowData.subinstallation} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">Connection  Status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="connectionstatus"  options={status}onChange={handlenewInputChange}  value={workflowData.connectionStatus} required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Voltage Multipiler</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="volgatemultiplier" onChange={handlenewInputChange}  value={workflowData.voltageMultipiler} required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Energy Multiplier</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="energymultiplier" onChange={handlenewInputChange}  value={workflowData.energyMultiplier} required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Current Multiplier</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="currentmultiplier" onChange={handlenewInputChange}  value={workflowData.currentMultiplier} required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
            
                </div>
                    
                    </div>
                    </Panel>
          <Panel header="Organisation Structure" toggleable={true}>
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
                        <Dropdown id="division" optionLabel="divisionName" options={DIVISIONData.items}onChange={handleInputChange}  value={aarolesInputData.divisionName} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Subdivision</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="subdivision" optionLabel="subdivisionName" options={SUBDIVISIONData.items}onChange={handleInputChange}  value={aarolesInputData.subdivisionName} required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Section Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="section" optionLabel="sectionName" options={SECTIONData.items}onChange={handleInputChange}  value={aarolesInputData.sectionName} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">Town</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="town" optionLabel="townName" options={TOWNData.items}onChange={handleInputChange}  value={aarolesInputData.townName} required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Sub Station</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="substation" optionLabel="subStationName" options={SUBSTATIONData.items}onChange={handleInputChange}  value={aarolesInputData.substationName} required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">feederName</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="feeder" optionLabel="feederName" options={FEEDERData.items}onChange={handleInputChange}  value={aarolesInputData.feederName} required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Dt Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="transformer" optionLabel="transformerName" options={TRANSFORMERData.items}onChange={handleInputChange}  value={aarolesInputData.transformerName} required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                      
                        <div className="p-grid">
                
                </div>
                    
                    </div>
                    </Panel>
                    <Panel header="Latitude Longitude" toggleable={true}>
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">Latitude </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <InputText id="latitude" onChange={handlenewInputChange}  value={workflowData.latitude} required  autoWidth={false} /> 
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> Longitude</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="longitude" onChange={handlenewInputChange}  value={workflowData.longitude} required  autoWidth={false} /> 
                        </div>
                      </div>
                    
                      
                        <div className="p-grid">
               
                </div>
                    
                    </div>
                    </Panel>
                    <Panel header="Organisation structure" toggleable={true}>
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">Meter Type </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="sourcetype" optionLabel="common_name" options={commondetails}onChange={handleInputChange}  value={workflowData.source} required  autoWidth={false} /> 
                          </div>
                       
                      </div>
                    
                      
                        <div className="p-grid">
               
               
                </div>
                    
                    </div>
                    </Panel>
                    <Panel header="Meter Details" toggleable={true}>
<div className="card summary"> 
<div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">Meter IP </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <InputText id="meterip" onChange={handlenewInputChange}  value={workflowData.meterIp} required  /> 
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> Meter Port</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="meterport" onChange={handlenewInputChange}  value={workflowData.meterPort} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Autenthication Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="aunthenticationtype" options={priority} onChange={handlenewInputChange}  value={workflowData.aunthenticationType} required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Meter Password</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="meterpassword" onChange={handlenewInputChange}  value={workflowData.meterPassword} required  autoWidth={false} /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">System Title</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="systemtitle" onChange={handlenewInputChange}  value={workflowData.systemTitle} required  autoWidth={false} /> 
                        </div>
                       
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Block Cipher</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="blockcipher" onChange={handlenewInputChange}  value={workflowData.blockCipherKey} required  autoWidth={false} /> 
                        
                      </div>
                         
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Authentication Key</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="authenticationkey" onChange={handlenewInputChange}  value={workflowData.authenticationKey} required  autoWidth={false} /> 
                        
                      </div>
                         
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">Referencing NAme</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="referencingname" options={type}onChange={handlenewInputChange}  value={workflowData.referencingName} required  autoWidth={false} /> 
                        
                      </div>
                       
                        </div>
                        <div className="p-grid">
<div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">Is Wrapper </label>
                        </div>
                        
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="wrapper" options={sub}onChange={handlenewInputChange}  value={workflowData.isWrapper} required  /> 
                          </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name"> IEC</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="iec" onChange={handlenewInputChange}  value={workflowData.iec} required   /> 
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Serial Port</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <InputText id="serialport"  onChange={handlenewInputChange}  value={workflowData.serialport} required  autoWidth={false} /> 
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">Connection  Status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="connectionstatus"  options={status}onChange={handlenewInputChange}  value={workflowData.connectionStatus} required  autoWidth={false} /> 
                        </div>
                      </div>
                     
                        <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                  <Button
                    label="save"
                    onClick={handleSubmit}
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
                </div>
                <div className="p-col-12 p-md-4">
                  <Button
                    label="cancel"
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
                </div>
                </div>
                    
                    </div>
                    </Panel>
                    </div>  
                    </ScrollPanel> 
                    
                    )
                }
                </Dialog>
                <div className="animated fadeIn">
              <div className="p-grid">
                <div className="p-col-12">
                  <div className="card card-w-title">
                    <h1>Meter Information</h1>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Meter" onClick={setevent}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                   
                    <Growl ref={(el) => setGrowl(el)} />              
                      {METERMFDETAILSData.isLoading && <ProgressSpinner />}
                      {!METERMFDETAILSData.isLoading && (                        
                    <DataTable
                      value={tablesData}
                      paginatorPosition="bottom"
                      selectionMode="single"
                      paginator={true}
                      header={header} ref={(el) => { setDataTable(el); }}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                   
                      //onRowSelect={onRowSelected}
                    >             

                     <Column field="autoid" header="S.no" sortable={true} filter={true}/>
                     
              
                        <Column field="meterDetailsAutoid.meterSerialNumber" header="Meter Serial Number" sortable={true} filter={true} />
                        <Column field="meterDetailsAutoid.ipAddress" header="Ip Adress" sortable={true} filter={true}/>  
                        <Column field="meterDetailsAutoid.simNumber" header="Sim Number" sortable={true}filter={true} />
                        <Column field="meterType" header="Meter Type" sortable={true}  filter={true}/> 
                        <Column field="meterCategory" header="Meter Category" sortable={true}  filter={true}/> 
                        <Column field="fwVersion" header="Firmware" sortable={true}  filter={true}/>  
                        <Column field="meterDetailsAutoid.deviceid" header="Device Id" sortable={true}  filter={true}/>  
                       
                        <Column
                                          header="Edit"
                                         body={getTemplate}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
                                   
                    </DataTable>
                 
                    )}
           </div>
                </div>
              </div>
              </div>
        </div>
      );
    };
    
const mapStateToProps = (state: any) => {
    const {   ticketcategriesData,
        subticketcategriesData,
        ticketsData,newUserData,METERDETAILSData,ACTUALBLOCKLOADData,
        CIRCLEData ,
        DIVISIONData,
        SUBDIVISIONData,
        SECTIONData,
        TOWNData ,
        SUBSTATIONData ,
        FEEDERData ,
        TRANSFORMERData,
        METERLOCATIONData,
        commondetailsData,
        METERMANUFACTUREData,
        METERMFDETAILSData,
        METERCONNECTIONData
    
    } = state;
    return {
        ticketcategriesData,
        subticketcategriesData,
        ticketsData,
        newUserData,
        METERDETAILSData,
        ACTUALBLOCKLOADData,
        CIRCLEData ,
        DIVISIONData,
        SUBDIVISIONData,
        SECTIONData,
        TOWNData ,
        SUBSTATIONData ,
        FEEDERData ,
        TRANSFORMERData,
        METERLOCATIONData,
        commondetailsData,
        METERMANUFACTUREData,
        METERMFDETAILSData,
        METERCONNECTIONData
    };
};
export default connect(mapStateToProps)(Metersearch)