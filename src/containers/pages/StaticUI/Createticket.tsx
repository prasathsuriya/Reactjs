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
import TextArea from "antd/lib/input/TextArea";
import {getMETERDETAILList  } from "../../../store/actions/Meterdetail";
import {getACTUALBLOCKLOADList } from "../../../store/actions/ActualBlockload";
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IWorkflows {
    workflowData: any;
    dispatch: Dispatch<any>;
    ticketcategriesData: any;
    subticketcategriesData: any;
    ticketsData: any;
    newUserData:any; 
    METERDETAILData:any;
    ACTUALBLOCKLOADData:any;
}
const  Createticket: React.FC<IWorkflows> = ({
    dispatch,
    ticketcategriesData,
    subticketcategriesData,
    ticketsData,
    newUserData,
    METERDETAILData,
    ACTUALBLOCKLOADData
}) => {
   
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"workflowid":"1","icareunit":"AE","workflowcode":"Meter On Board","description":"Meter Details","longdescription":"View meter details"},
        {"workflowid":"2","icareunit":"SE","workflowcode":"Product Configuration","description":"Product Details","longdescription":"view product details"},
        {"workflowid":"3","icareunit":"TA","workflowcode":"Insident Management","description":"Insident details","longdescription":"view insident details"}
 ];
       const workflowdetail={
        meterid:"",
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
        tenantId:0
      };  
      
      const newdetail={
       meterSerialNumber:""
      };
       
      let [workflowData, setInput] = useState(workflowdetail);
      const [ticketdescriptionid, setticket] = useState("");
      const [newtenant, setnewtenant]= useState("");
      const loggedInString = localStorage.getItem("AUTHDATA");
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      workflowData.updated_by = loggedInData.userProfile.userautoid.userId;
      workflowData.inserted_by = loggedInData.userProfile.userautoid.userId;
      workflowData.tenantId =
      loggedInData.userProfile.companyautoId.id;
    }
  }
  useEffect(() => {
    dispatch(getJobProfiles(""));
    var curentUser=getCurrentUser();
    if(curentUser!=null){
      setUserData(curentUser);
      dispatch(getTicketcategoriesList(curentUser.userProfile.roleFkId.companyAutoId.id));    
      dispatch(getTicketsubcategoriesList(curentUser.userProfile.roleFkId.companyAutoId.id));   
      dispatch(getMETERDETAILList(curentUser.userProfile.roleFkId.companyAutoId.id));  
      dispatch(getACTUALBLOCKLOADList(curentUser.userProfile.roleFkId.companyAutoId.id));   
      dispatch(getUsersList(workflowData.tenantId));
    }                  
  }, []);

       const [userData, setUserData] = useState();
       const [displaydialog, setdisplaydialog] = useState(false)
       const [isValid, setValid] = useState(false);
       const handleInputChange = (event: any) => {
        if (event.target.id === "meterid") {
          setSelectedCountry(event.target.value);
          if(event.target.value!==null && event.target.value.meterSerialNumber==null){
            workflowData.meterid = event.target.value;
           }else{
          workflowData.meterid = event.target.value.meterSerialNumber;
           }
          
        } else if (event.target.id === "priority") {
           workflowData.priority = event.target.value;
        } else if (event.target.id === "type") {
          workflowData.tickettype = event.target.value;
        } else if (event.target.id === "newdescription") {
         
          workflowData.ticketcategoryid = event.target.value;
          workflowData.ticketdescriptionid = event.target.value.ticketdescriptionid;
          setdisplayDialog(true);
          setticket(event.target.value.ticketdescriptionid);
         // alert(ticketdescriptionid);
           
            var meters=new Array<any>();
            var run=new Array<any>();
           
            if(subticketcategriesData.items.length>0){                
              for(var i=0;i<subticketcategriesData.items.length;i++){
                  
                var element=subticketcategriesData.items[i];  
                if(element.ticketdescriptionid==event.target.value.ticketdescriptionid){
              
                meters.push(element);
                }
             // alert(meters);
              }   
              
              //setPageLoading(true);
             
              setsubcategory(meters);   
            }     

        } else  if (event.target.id === "newsubdescription") {
            workflowData.ticketsubcategoryid = event.target.value;
            workflowData.ticketsubdescriptionid = event.target.value.ticketsubdescriptionid;
          }
         else if (event.target.id === "details") {
            workflowData.details = event.target.value;
          }  else if (event.target.id === "assign") {
          workflowData.user = event.target.value;
          workflowData.assignedto = event.target.value.userautoid.userId;
        } else if (event.target.id === "callfrom") {
          workflowData.callfromname = event.target.value;
        } else if (event.target.id === "phonenumber") {
            workflowData.phonenumber = event.target.value;
          } 
        setInput({...workflowData});
        
          setInput({...workflowData});
          checkValidation();
      };

      const checkValidation=()=>{
        if(
        (workflowData.priority!==null && workflowData.priority!=="")
        &&(workflowData.tickettype!==null && workflowData.tickettype!=="")      
        &&(workflowData.details!==null && workflowData.details!=="")       
        &&(workflowData.callfromname!==null && workflowData.callfromname!=="")  
        &&(workflowData.phonenumber!==null && workflowData.phonenumber!=="")    
        )
        {
          setValid(true);
        }
        else
        {
          setValid(false); 
        }

      }
    const onWorkflowSelect=(event)=>{
    
    
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        workflowData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...workflowData }); 
        setdisplayDialog(true);
        //If need to show delete button
        //setShowDelete(true);
      }
      } 
      function onClickAdd(event) {
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
      const handleSubmit = (event: any) => {    
            
     //  alert(JSON.stringify(workflowData));
      // alert(JSON.stringify(ticketcategriesData.items));
       if(isValid){  
       dispatch(saveTickets(workflowData));  
       //alert("saved");
       setTimeout(() => {
       window.location.href="/ticket/newshowticket";
       }, 5000);
       } else{
           alert("form invalid");
       }
        
      }
      const handleDeleteSubmit=(event)=>{
               
      }
      const [filteredCountriesMultiple, setFilteredCountriesMultiple] = useState(new Array<any>());
      const [filteredCountriesSingle, setFilteredCountriesSingle] = useState(new Array<any>());
      const [selectedCountry, setSelectedCountry] = useState<any>(null);
      const filterCountrySingle = (event: { query: string }) => {
        setTimeout(() => {
            let results = METERDETAILData.items.filter((meters) => {
                return meters.meterSerialNumber.toLowerCase().startsWith(event.query.toLowerCase());
            });
            setFilteredCountriesSingle(results);
        }, 250);
    }
      const filterCountryMultiple = (event: { query: string }) => {
        setTimeout(() => {
            let results = METERDETAILData.items.filter((country: any) => {
                return JSON.stringify(METERDETAILData.items.meterDetailsAutoid.meterSerialNumber.toLowerCase().startsWith(event.query.toLowerCase()));
            });

            setFilteredCountriesMultiple(results);
        }, 250);
    }
      const [category, setcategory] = useState(new Array<any>());
      const [subcategory, setsubcategory]=  useState(new Array<any>());
      const [locationdata, setlocationdata]=  useState(new Array<any>());
      const [assignto, setassignto]=  useState(new Array<any>());
      const [roleList, setRoleList] = useState([]);
      const [isPageLoaded, setPageLoaded] = useState(false)
      const [isPageLoading, setPageLoading] = useState(false)
      const [isPageLoader, setPageLoader] = useState(false)
      loadGrid();
      function loadGrid(){
        if (!isPageLoaded && !ticketcategriesData.isLoading) {
         // alert(JSON.stringify(ticketcategriesData));
          var meters=new Array<any>();
          if(ticketcategriesData.items.length>0){                
            for(var i=0;i<ticketcategriesData.items.length;i++){
              var element=ticketcategriesData.items[i];             
              meters.push(element);
            }      
            setPageLoaded(true);
            setcategory(meters);   
         //   alert(JSON.stringify(ticketcategriesData));
          }     
        }
      }
      loadingGrid();
      function loadingGrid(){
        if (!isPageLoading && !METERDETAILData.isLoading) {
         // alert(JSON.stringify(ticketcategriesData));
          var meters=new Array<any>();
          if(METERDETAILData.items.length>0){                
            for(var i=0;i<METERDETAILData.items.length;i++){
              var element=METERDETAILData.items[i];             
              meters.push(element);
            }      
            setPageLoading(true);
            setlocationdata(meters);   
         //   alert(JSON.stringify(ticketcategriesData));
          }     
        }
      }
      loaderGrid();
      function loaderGrid(){
       // alert(JSON.stringify(METERDETAILData.items.autoid));
        if (
            !isPageLoader &&
            !newUserData.isListLoading 
          ) {
            var table = newUserData.userList;
            console.log(table);    
            if (table.length > 0) {
              table=table.filter(x=>x.id!==userData.userProfile.id);
              for (var i = 0; i < table.length; i++) {
             /*   table[i]["statusValue"] =
                  table[i].userFkId.status === 'Active' ? "Active" : "InActive";
                  */
              }
            }
           
            setRoleList(table);
            setPageLoader(true);
           // alert(JSON.stringify(roleList));
          }
      }
      
      
      const priority= [
        {label: 'Select priority', value: null},
        {label: 'high', value: 'high'},
        {label: 'low', value: 'low'},
        {label: 'medium', value: 'medium'}
      ] ;
        
    
      const type= [
        {label: 'Select Type', value: null},
        {label: 'request', value: 'request'},
        {label: 'complaint', value: 'complaint'},
        {label: 'enquiry', value: 'enquiry'},
      ] ; 
      const sub = [
        {label: 'Select Category', value: null},
        {label: 'name', value: '1'},
        {label: 'place', value: '2'}
      ] ; 
      const assign = [
        {label: 'select assign', value: null},
        {label: 'open', value: 1},
        {label: 'close', value: 3}
      ] ; 
      return (
        <div className="p-grid p-fluid">
          <div className="p-col-12 ">
            <div className="card card-w-title">
              <h1>Create ticket</h1>
             
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="meterid">Meter Id</label>
                </div>
                <div className="p-col-12 p-md-4">
                <AutoComplete id="meterid" value={selectedCountry} suggestions={filteredCountriesSingle} completeMethod={filterCountrySingle} field="meterSerialNumber"
                size={30}  minLength={1} onChange={handleInputChange} />
            <span style={{ marginLeft: '10px' }}>number: {selectedCountry ? selectedCountry.meterSerialNumber || selectedCountry : 'none'}</span>
                </div>
              </div>
    
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="priority">Priority</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Dropdown id="priority" options={priority} onChange={handleInputChange}  value={workflowData.priority} required  autoWidth={false} /> 
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="type">Type</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Dropdown id="type" options={type} value={workflowData.tickettype} onChange={handleInputChange} required  />
              
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="newdescription">Category</label>
                </div>
                <div className="p-col-12 p-md-4">
                <Dropdown id="newdescription" optionLabel="description" options={category}onChange={handleInputChange}  value={workflowData.ticketcategoryid} required  autoWidth={false} /> 
                </div>
              </div>
              {
                displayDialog &&
                (
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="newsubdescription">Sub Category</label>
                </div>
                <div className="p-col-12 p-md-4">
                <Dropdown id="newsubdescription" optionLabel="subdescription" options={subcategory} onChange={handleInputChange}  value={workflowData.ticketsubcategoryid} required  autoWidth={false} />
 
                </div>
              </div>
                )
                    }
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="assign">Assign To</label>
                </div>
                <div className="p-col-12 p-md-4">
                <Dropdown id="assign" options={roleList} optionLabel="userautoid.userId" value={workflowData.user} onChange={handleInputChange} required  autoWidth={false} />
               
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="details">Details</label>
                </div>
                <div className="p-col-12 p-md-4">
                <TextArea id="details" value={workflowData.details} onChange={handleInputChange}  required  />
   
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="callfrom">Call From</label>
                </div>
                <div className="p-col-12 p-md-4">
                <InputText id="callfrom" value={workflowData.callfromname} onChange={handleInputChange} required  />
   
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="phonenumber">Call Number</label>
                </div>
                <div className="p-col-12 p-md-4">
                <InputText id="phonenumber" value={workflowData.phonenumber} keyfilter="pint" onChange={handleInputChange} required  />
                </div>
              </div>
              <div className="p-grid">
                <div className="p-col-12 p-md-3">
                  <Button
                    label="Submit"
                    onClick={handleSubmit}
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
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
        ticketsData,newUserData,METERDETAILData,ACTUALBLOCKLOADData} = state;
    return {
        ticketcategriesData,
        subticketcategriesData,
        ticketsData,
        newUserData,
        METERDETAILData,
        ACTUALBLOCKLOADData
    };
};
export default connect(mapStateToProps)(Createticket)