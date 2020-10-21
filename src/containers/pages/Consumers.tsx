import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";
import {getAreaList, getCountries, getStates, getZoneList, getMeterregioncode} from "../../store/actions/Common";
import {getJobProfiles  } from "../../store/actions/JobProfile";
import { Column } from 'primereact/column';
import {Growl} from 'primereact/growl';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { getCurrentUser } from "../../store/selectors/Accounts";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';
import { getRegionList } from '../../store/sagas/Common';

interface IConsumers {
    dispatch: Dispatch<any>;
    consumerData: any;
    commonData: any;
  }
const Consumers: React.FC<IConsumers> = ({ dispatch,consumerData,commonData
}) => {
    useEffect(() => {
        dispatch(getJobProfiles(""));
        var keys=getKeys(consumerInputData);
        var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
          dispatch(getConsumerList(curentUser.userProfile.tenantFkId.id));
          dispatch(getCountries());          
        }                  
      }, []);     

    const consumer={ 
      locationId:0,
      country:"",
      state:"",
      region:"",
      feeder:"",
      subStation:"",
      transformer:"",
      latitude:"",
      longitude:"",
      zone:"",
      consumptionZone:"",
      district:"",
      city:"",
      pincode:"",
      consumerId:0,
      consumerName:"",
      cAddress: "",
      cEmailId : "",
      cNumber : "",
      cPhoneNumber: "",
      cUniqueNumber : "",
      userId:""
    }

    const genMeterValues={
      state:0,
      region:0,
      zone:0,
      consumptionZone:0,
    }
    
     function getKeys(obj){
        var keys = new Array();
        for(var key in obj){
           keys.push(key);
        }
        return keys;
     }
     const [cNumberInput, setCNInput] = useState(genMeterValues);
      let [consumerInputData, setInput] = useState(consumer);
      const [userData, setUserData] = useState();
      const [isEmailValid, setEmailValid] = useState(false);      
      const [dropdown, setdropdown] = useState("");
      const [countryDropdown, setCountryDropdown] = useState(new Array<any>());
      const [stateDropdown, setStateDropdown] = useState(new Array<any>());
      const [regionDropdown, setRegionDropdown] = useState(new Array<any>());
      const [areaDropdown, setAreaDropdown] = useState(new Array<any>());
      const [zoneDropdown, setZoneDropdown] = useState(new Array<any>());
      

      const handleInputChange = (event: any) => {
        var { name, value } = event.target;
        
        
        if (event.target.id === "cEmailId") {
          if (!event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
            setEmailValid(false);
          }
          else
          setEmailValid(true);
        } 
        if (event.target.id === "country") {
          var ct=commonData.countryList.find(x=>x.countryName===value);
          if(ct!==null){
            dispatch(getStates(ct.id));
            setStateDropdown([]);
          }
          setdropdown(name);          
        }
        else if (event.target.id === "state") {       
          var ct=commonData.stateList.find(x=>x.stateName===value);
          if(ct!==null)   {
            dispatch(getMeterregioncode(ct.id));
            cNumberInput.state=ct.id;
            setCNInput({...cNumberInput});
            setRegionDropdown([]);
          }
          setdropdown(name);
          //value=value.stateName;
        }
        else if (event.target.id === "region") {    
          var ct=commonData.regionList.find(x=>x.description===value);
          if(ct!==null)        {
            dispatch(getAreaList(ct.id));
            cNumberInput.region=ct.regionCode;
            setCNInput({...cNumberInput});
            setAreaDropdown([]);
          }
          setdropdown(name);
          //value=value.description;
        }
        else if (event.target.id === "zone") {   
          var ct=commonData.areaList.find(x=>x.description===value);
          if(ct!==null)         {      
            dispatch(getZoneList(ct.id));
            cNumberInput.zone=ct.areaCode;
            setCNInput({...cNumberInput});
            setZoneDropdown([]);
          }
          setdropdown(name);
          //value=value.description;
        } 
        else if (event.target.id === "conZoneName") {   
          value=value.conZoneName;
          setdropdown("");
        } 
        else{
          var val="";
          setdropdown("");
        }
        setInput({ ...consumerInputData, [name]: value });    
      };

      if(!commonData.isCountryLoading && countryDropdown.length===0 ){
        var list=new Array<any>();
         commonData.countryList.map(function (item) {
          list.push({ label: item.countryName, value: item.id , key:item.id });
        });
        console.log(list);
        setCountryDropdown(list);
      }

      if(dropdown!==""){
        if(!commonData.isLoading){
          if(stateDropdown.length===0 &&!commonData.isStateLoading && dropdown==="country" ){
            var list=new Array<any>();
            commonData.stateList.map(function (item) {
              list.push({ label: item.stateName, value: item.stateName , key:item.id });
            });
            setStateDropdown(list);
            if (consumerInputData.state !== "" && consumerInputData.state !== null) {       
              var ct=commonData.stateList.find(x=>x.stateName == consumerInputData.state );
              if( ct && ct!==null)  { 
                dispatch(getMeterregioncode(ct.id));
                cNumberInput.state=ct.id;
                setCNInput({...cNumberInput});
                setdropdown("state");
              }
            }
          }
          if(regionDropdown.length===0 &&!commonData.isRegionLoading  && dropdown==="state" ){
            var list=new Array<any>();
            commonData.regionList.map(function (item) {
              list.push({ label: item.description, value: item.description , key:item.id });
            });
            setRegionDropdown(list);
            if (consumerInputData.region !== "" && consumerInputData.region !== null) {    
              var ct=commonData.regionList.find(x=>x.description===consumerInputData.region);
              if( ct && ct!==null)    {    
                dispatch(getAreaList(ct.id));
                cNumberInput.region=ct.regionCode;
                setCNInput({...cNumberInput});
                setdropdown("region");
              }
            }
          }
          if(areaDropdown.length===0 &&!commonData.isAreaLoading  && dropdown==="region" ){
            var list=new Array<any>();
            commonData.areaList.map(function (item) {
              list.push({ label: item.description, value: item.description , key:item.id });
            });
            setAreaDropdown(list);
            if (consumerInputData.zone !== "" && consumerInputData.zone !== null) {   
              var ct=commonData.areaList.find(x=>x.description===consumerInputData.zone);
              if( ct && ct!==null)      
              cNumberInput.zone=ct.areaCode;
              setCNInput({...cNumberInput});    {     
                dispatch(getZoneList(ct.id));
                setdropdown("zone");
              }
            }              
          }
          if(zoneDropdown.length===0 &&!commonData.isZoneLoading  && dropdown==="zone" ){
            var list=new Array<any>();
            commonData.zoneList.map(function (item) {
              list.push({ label: item.conZoneName, value: item.conZoneName , key:item.id });
            });
            setZoneDropdown(list);
            setdropdown("");
                          
          }
        }
      }

      const [isValid, setValid] = useState(false);
      function checkValueIsNullorEmpty(value:any){
        if(value!==null && value && value!==""){
            return true;
        }
        else {
            
            return false;
        }
    }
  
      const checkValidation=()=>{
        if((consumerInputData.consumerName!==null && consumerInputData.consumerName!=="" && isEmailValid )
        &&(consumerInputData.cEmailId!==null && consumerInputData.cEmailId!=="")
        &&(consumerInputData.cPhoneNumber!==null && consumerInputData.cPhoneNumber!=="" && consumerInputData.cPhoneNumber.length==10)    
        &&(consumerInputData.cUniqueNumber!==null && consumerInputData.cUniqueNumber!=="")    
        &&(consumerInputData.cAddress!==null && consumerInputData.cAddress!=="")   
        &&checkValueIsNullorEmpty(consumerInputData.transformer)===true
        && checkValueIsNullorEmpty(consumerInputData.feeder)=== true
        && checkValueIsNullorEmpty(consumerInputData.subStation)=== true  	
        &&  checkValueIsNullorEmpty(consumerInputData.zone)=== true 
        &&  checkValueIsNullorEmpty(consumerInputData.region)=== true
        &&  checkValueIsNullorEmpty(consumerInputData.district)=== true
        &&  checkValueIsNullorEmpty(consumerInputData.city)=== true
        &&  checkValueIsNullorEmpty(consumerInputData.state)=== true
        &&  checkValueIsNullorEmpty(consumerInputData.country)=== true
        &&  checkValueIsNullorEmpty(consumerInputData.pincode)=== true
        &&  checkValueIsNullorEmpty(consumerInputData.cNumber)=== true 
        &&  checkValueIsNullorEmpty(consumerInputData.cUniqueNumber)=== true 
        )
        {
          setValid(true);
          return true;
        }
        else
        {
          setValid(false); 
          return false;
        }

      }
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const handleSubmit = (event: any) => {    
        var cNumber=cNumberInput.state+" "+cNumberInput.region+" "+cNumberInput.zone+" "+consumerInputData.cUniqueNumber;
        consumerInputData.cNumber=cNumber.replace(/\s/g, "");
        var valid=checkValidation();
        setIsFormSubmitted(true);
        if(valid){  
          setShowFormMessage(false);
          setInput({ ...consumerInputData });       
          dispatch(saveConsumer(consumerInputData));
          setIsDispatchedSave(true);
        }
        else{
          setShowFormMessage(true);
        }
      }
      const [tableData, setTableData] = useState(new Array<any>());
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isDispatchedSave, setIsDispatchedSave] = useState(false);
      const[displayDialog, setdisplayDialog]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      
      const [selectedData, setSelectedData] = useState();

      const [isPageLoaded, setPageLoaded] = useState(false);
      if(isDispatchedSave && !consumerData.isLoading && consumerData.isFormSubmit)
      {
        setdisplayDialog(false);
        if(userData!=null){
          dispatch(getConsumerList(userData.userProfile.tenantFkId.id));            
        }
        setIsDispatchedSave(false);
        setIsFormSubmitted(false);        
        setTimeout(() => {
          setPageLoaded(false);
//          loadGrid();
        }, (1000));
      }
      loadGrid();
      function loadGrid(){
        if (!isPageLoaded && !consumerData.isLoading) {
          var meters=new Array<any>();
          if(consumerData.items.length>0){                
            for(var i=0;i<consumerData.items.length;i++){
              var element=consumerData.items[i];             
              meters.push(element);
            }      
            setPageLoaded(true);
            setTableData(meters);   
          }     
        }
      }

     
      function onClickAdd(event) {
        if(!displayDialog){      
          setShowMessage(false);
          setInput(consumer);   
          //consumerInputData=consumer; 
          setInput({ ...consumer }); 
          setTimeout(() => {
            if(userData!=null){
              consumer.userId= userData.userProfile.userFkId.userId;              
              setInput({ ...consumer }); 
            } 
          }, 1000);
          setStateDropdown([]);
          setAreaDropdown([]);
          setRegionDropdown([]);
          setZoneDropdown([]);
          setdisplayDialog(true);
          setShowDelete(false);
          setIsFormSubmitted(false);
          setShowFormMessage(false);
          setCNInput(genMeterValues);
        }
      }
      
      const [msgSeverity, setSeverity]=useState("success");    
      const [msgDescription, setDescriptiony]=useState("saved successfully");    
      
      function successMessage( key:string){     
          return <Message severity={msgSeverity} key={key} text={msgDescription} />
        }
      const onSelectionChangeed=(e) => {setSelectedData(e.value)}
      const onRowSelected=(event)=>{
        setShowMessage(false);
        if(!displayDialog){
          var data=event.data;
          //setInput(consumer);
          console.log(data);
          consumerInputData=data;
          if(userData!=null){
            consumerInputData.userId= userData.userProfile.userFkId.userId;  
            if (!consumerInputData.cEmailId.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
              setEmailValid(false);
            }         
            else{
              setEmailValid(true);
            }    
            if (consumerInputData.country !== "" && consumerInputData.country !== null) {
              var ct=commonData.countryList.find(x=>x.countryName===consumerInputData.country);
              if( ct && ct !== null){
                dispatch(getStates(ct.id));
                setdropdown("country");
              }
            }
            setAreaDropdown([]);
            setRegionDropdown([]);
            setZoneDropdown([]);
            setStateDropdown([]);
                                 
          }           
          //setInput(consumer);
          setInput({ ...consumerInputData }); 
          setdisplayDialog(true);
          setIsFormSubmitted(false);
          setShowFormMessage(false);
          //If need to show delete button
          //setShowDelete(true);
        }
      }     
      
      const handleDeleteSubmit=(event)=>{
        dispatch(deleteConsumer(selectedData));        
      }

      const [growl, setGrowl]=useState();
      const [showMessage, setShowMessage]=useState(false);

      if(!consumerData.isLoading && consumerData.isFormSubmit && isFormSubmitted){
        if(consumerData.status && consumerData.status!==null){
          setDescriptiony(consumerData.status.displayMessage);
          if(consumerData.status.value ===true ){
            if(consumerData.status.code ===200 ){
              setShowMessage(true);
              growl.show({severity: 'success', summary: 'Success', detail: consumerData.status.displayMessage});
              setSeverity("success");
            }
            else if(consumerData.status.code ===300) {
              growl.show({severity: 'warn', summary: 'Warn', detail: consumerData.status.displayMessage});
              setShowMessage(false);
              setSeverity("warn");
            }
          }
        }
        else{
          growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});
          setShowMessage(false);
          setSeverity("error");
        }
        setIsFormSubmitted(false);
      }

      function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}

      let header = <div style={{textAlign:'right'}}>
      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add" onClick={onClickAdd}></Button>
      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
    </div>;

      return (    
        <div>

<Dialog header="Add Consumer" visible={displayDialog} style={{ width: '50vw' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                <div className="p-grid card-w-title">    
                <div className="p-col-12">    
                    <div className="card summary">                                               
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerName">Consumer Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText autocomplete="off" id="consumerName" name="consumerName"
                          onChange={handleInputChange} 
                          value={consumerInputData.consumerName} required onBlur={handleInputChange} />
                          { isFormSubmitted && consumerInputData.consumerName==="" && (requiredMessage("fn"))}
                        </div>

                        <div className="p-col-12 p-md-2">
                          <label htmlFor="cNumber">Consumer Number</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText autocomplete="off" id="cNumber"
                           name="cNumber" value={consumerInputData.cNumber}
                            required  onBlur={handleInputChange} onChange={handleInputChange} 
                            readOnly={true}
                            />
                          { isFormSubmitted && consumerInputData.cUniqueNumber==="" && (requiredMessage("fn"))}
                        </div>
                      </div>
                                            
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="cAddress">Consumer Address</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText autocomplete="off" id="cAddress" name="cAddress"
                          onChange={handleInputChange} 
                          value={consumerInputData.cAddress} onBlur={handleInputChange} />
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="emailIds">Email ID</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText autocomplete="off" id="cEmailId" name="cEmailId"
                          onChange={handleInputChange} 
                          required value={consumerInputData.cEmailId} onBlur={handleInputChange} />
                          { isFormSubmitted && consumerInputData.cEmailId==="" && ( requiredMessage("email"))}
                          { isFormSubmitted && !isEmailValid && (<Message severity="error" key="emailvalid" text="Email Not valid" />)}
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="cPhoneNumber">Mobile Number</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText autocomplete="off" id="cPhoneNumber"  name="cPhoneNumber"
                          onChange={handleInputChange} 
                          value={consumerInputData.cPhoneNumber} keyfilter="pint" required onBlur={handleInputChange} maxLength={10} minLength={10} />
                          { isFormSubmitted && consumerInputData.cPhoneNumber==="" && (requiredMessage("mb"))}
                          { isFormSubmitted && consumerInputData.cPhoneNumber.length!==10 && (<Message severity="error" key="mbvalid" text="Mobile number Not valid" />)}
                        </div>
                      </div>
                         
                    </div>
                  </div>                  
                  <div className="p-col-12">
                                        <h1>Meter Location / Address</h1>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="country">County</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">                                                
                                                <Dropdown id="country" name="country"
                                                  options={commonData.countryList.map(function (item) {
                                                    return{ label: item.countryName, value: item.countryName , key:item.id }
                                                  })}
                                                  value={consumerInputData.country} required onChange={handleInputChange}>
                                                </Dropdown>
                                                { isFormSubmitted &&   (consumerInputData.country===null || consumerInputData.country==="")  && ( requiredMessage("country"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="state">State</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                
                                                <Dropdown id="state" name="state" key="state" 
                                                  options={commonData.stateList.map(function (item) {
                                                    return{ label: item.stateName, value: item.stateName , key:item.id }
                                                  })}
                                                  value={consumerInputData.state} required onChange={handleInputChange}>
                                                </Dropdown>
                                                { isFormSubmitted &&   (consumerInputData.state===null || consumerInputData.state==="")  && ( requiredMessage("state"))}
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="region">Region</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                
                                                <Dropdown id="region" name="region" key="region"                                         
                                                  options={regionDropdown}
                                                  value={consumerInputData.region} required onChange={handleInputChange}>
                                                </Dropdown>
                                                { isFormSubmitted &&   (consumerInputData.region===null || consumerInputData.region==="")  && ( requiredMessage("region"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="zone">Zone</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                
                                                <Dropdown id="zone" name="zone" key="zone"                                           
                                                  options={areaDropdown}
                                                  value={consumerInputData.zone} required onChange={handleInputChange}>
                                                </Dropdown>
                                                { isFormSubmitted &&   (consumerInputData.zone===null || consumerInputData.zone==="")  && ( requiredMessage("zone"))}
                                            </div>
                                        </div>

                                        <div className="p-grid">
                                            
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="zone">Consumption Zone</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">                                               
                                                <Dropdown id="consumptionZone" name="consumptionZone" key="consumptionZone"                                                   
                                                  options={zoneDropdown}
                                                  value={consumerInputData.consumptionZone} required onChange={handleInputChange}>
                                                </Dropdown>
                                                { isFormSubmitted &&   (consumerInputData.consumptionZone===null || consumerInputData.consumptionZone==="")  && ( requiredMessage("consumptionZone"))}
                                            </div>

                                            <div className="p-col-12 p-md-2">
                                              <label htmlFor="cUniqueNumber">Unique Number</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                              <InputText autocomplete="off" id="cUniqueNumber"  name="cUniqueNumber"
                                              onChange={handleInputChange} 
                                              value={consumerInputData.cUniqueNumber} keyfilter="pint" required />
                                              { isFormSubmitted && consumerInputData.cUniqueNumber==="" && (requiredMessage("cUniqueNumber"))}                                              
                                            </div>
                                        </div>
                                        
                                        <div className="p-grid">                                          
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="transformer">Transformer</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange}
                                                    id="transformer"
                                                    name="transformer"      
                                                    value={consumerInputData.transformer}
                                                />
                                                { isFormSubmitted &&   (consumerInputData.transformer===null || consumerInputData.transformer==="")  && ( requiredMessage("transformer"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="feeder">Feeder</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange}
                                                    id="feeder"
                                                    name="feeder" 
                                                    value={consumerInputData.feeder}
                                                />
                                                { isFormSubmitted &&   (consumerInputData.feeder===null || consumerInputData.feeder==="")  && ( requiredMessage("feeder"))}
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="subStation">Sub Station</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange}
                                                    id="subStation"
                                                    name="subStation" 
                                                    value={consumerInputData.subStation}
                                                />
                                                { isFormSubmitted &&   (consumerInputData.subStation===null || consumerInputData.subStation==="")  && ( requiredMessage("subStation"))}
                                            </div>   

                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="district">District</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange}
                                                    id="district"
                                                    name="district"
                                                    value={consumerInputData.district}
                                                />
                                                { isFormSubmitted &&   (consumerInputData.district===null || consumerInputData.district==="")  && ( requiredMessage("district"))}
                                            </div>                                         
                                        </div>

                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="city">City</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange} 
                                                    id="city"
                                                    name="city"
                                                    value={consumerInputData.city}
                                                />
                                                { isFormSubmitted &&   (consumerInputData.district===null || consumerInputData.district==="")  && ( requiredMessage("city"))}
                                            </div>
                                            
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="pincode">Pin Code</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange}
                                                    id="pincode"
                                                    name="pincode"
                                                    
                                                    value={consumerInputData.pincode}
                                                />
                                                { isFormSubmitted &&   (consumerInputData.pincode===null || consumerInputData.pincode==="")  && ( requiredMessage("pincode"))}
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="mLatId">Latitude</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange}
                                                    id="latitude"
                                                    name="latitude"
                                                    
                                                    value={consumerInputData.latitude}
                                                />
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="longitude">Longitude</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText autocomplete="off" onChange={handleInputChange} name="longitude"
                                                    id="longitude"
                                                    
                                                    value={consumerInputData.longitude}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                  {isShowFormMessage&&( <Message severity="error" key={"error"} text="Form is not valid" />)}
                </div>      

                <div className="p-dialog-footer">
                  <div className="ui-dialog-buttonpane p-clearfix">
                  {showDelete  &&(
                    <button onClick={handleDeleteSubmit} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Delete</span>
                    </button>
                     )}
                  
                    <button onClick={handleSubmit} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-check p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Save</span>
                    </button>
                  </div>
                </div>
                </ScrollPanel>
                )
              }
            </Dialog>

            <div className="animated fadeIn">
              <div className="p-grid">
                <div className="p-col-12">
                  <div className="card card-w-title">
                    <h1>Consumers</h1>
                    
                    <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {consumerData.isLoading && <ProgressSpinner />}
                      {!consumerData.isLoading && (                        
                    <DataTable
                      value={tableData}
                      paginatorPosition="bottom"
                      selectionMode="single"
                      header={header}
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                      onRowSelect={onRowSelected}
                      emptyMessage="No records found"
                    >             

                     <Column field="consumerName" header="Name" sortable={true} filter={true} filterMatchMode="contains"/>
                        <Column field="cAddress" header="Address" sortable={true} filter={true} filterMatchMode="contains"/>
                        <Column field="cEmailId" header="Email" sortable={true} filter={true} filterMatchMode="contains"/>
                        <Column field="cNumber" header="Number" sortable={true} filter={true} filterMatchMode="contains"/>
                        <Column field="cPhoneNumber" header="Phone Number" sortable={true} filter={true} filterMatchMode="contains"/>  
                        <Column field="sourceType" header="Source" sortable={true} filter={true} filterMatchMode="contains" />
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
    const {  consumerData,commonData } = state;
    return {
      consumerData,commonData
    };
  };
export default connect(mapStateToProps)(Consumers);