import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import moment from "moment";
import 'list-to-tree';
import 'array-to-tree';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import {getAarolesList, saveAaroles, deleteAaroles} from "../../../store/actions/Aaroles";
import { saveAarolepermission} from '../../../store/actions/CreateRolepermission';
import {getAapermissionsList, saveAapermissions, deleteAapermissions} from "../../../store/actions/Aapermissions";
import {getJobProfiles  } from "../../../store/actions/JobProfile";
import { Column } from 'primereact/column';
import {Growl} from 'primereact/growl';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { getCurrentUser } from "../../../store/selectors/Accounts";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';
import {getRolesPermissionByRoleid} from '../../../store/actions/Aaapermission';
import { getLoadGraphData } from '../../../store/actions/NewDevice';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import { createBrowserHistory } from "history";
import {Tree} from 'primereact/tree';
import {TreeTable} from 'primereact/treetable';
import {  withRouter, Switch, Route,Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import { aarolesAPI } from '../../../utils/api/AarolesAPI';

interface IAarolepermissions {
    dispatch: Dispatch<any>;
    aapermissionsData: any;
    aarolesData: any;
    AaapermissionData:any
    state : {
      nodes: [],
      checked: [],
      expanded: []
  }
  }
const Aaroles: React.FC<IAarolepermissions> = ({ dispatch,aarolesData,aapermissionsData,AaapermissionData
}) => {
    useEffect(() => {
        dispatch(getJobProfiles(""));
        dispatch(getRolesPermissionByRoleid(aaroles.roleId));

        //alert(JSON.stringify( AaapermissionData ));
        var keys=getKeys(aarolesInputData );
        var sets=getSets(aapermissionsInputData);
        //alert(JSON.stringify(keys));
        //alert(JSON.stringify(sets));
        var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
        ;
          dispatch(getAarolesList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
          dispatch(getAapermissionsList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
        }                  
      }, []);
     
    const aaroles={
      role_permission_id:0,
      roleId:0,
      roleName:"",
    
      role_status:"",
      description : "",
      long_description:"",

    
     
      companyautoid:"",
      department : "",
      end_date:new Date() ,
   
      inserted_by:"",
      updated_by:"",
      permission_name:"",
      permission_fk_id:""
      //updated_by
    }; 
    
    const aapermissions={
      permission_name:"",
      permission_fk_id:0,
      roleId:0
    };          
     function getKeys(obj){
        var keys = new Array();
        for(var key in obj){
           keys.push(key);
        }
        return keys;
     }
     function getSets(obj){
      var sets = new Array();
      for(var set in obj){
         sets.push(set);
      }
      return sets;
   }

      let [aarolesInputData, setInput] = useState(aaroles);
      let [aapermissionsInputData, settingInput] = useState(aapermissions);
      const [userData, setUserData] = useState();
      const [isEmailValid, setEmailValid] = useState(false);
      const [checked,setchecked] = useState();
      const [expanded,setexpanded]= useState();
      const [effectivedate, setEffectivedate] = useState(new Date());
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

      const asyncValidate = (aarolesInputData,dispatch) => {
        return sleep(1000).then(() => {
          for(var i=0;i<aarolesData.items.length;i++){
          // simulate server latency
          if (aarolesData.items.roleName.includes(aarolesInputData.roleName)) {
            throw ( 'That rolename is taken' );
          }
        }
        })
      }
      const handleInputChange = (event: any) => {
        
        if (event.target.id === "roleName") {
          aarolesInputData.roleName = event.target.value;
        } else if (event.target.id === "roleId") {
          aarolesInputData.roleId = event.target.value;
        } else if (event.target.id === "role_status") {
          aarolesInputData.role_status= event.target.value;
        } else if (event.target.id === "description") {
          aarolesInputData.description = event.target.value;
        } else if (event.target.id === "long_description") {
          aarolesInputData.long_description = event.target.value;
        } else if (event.target.id === "end_date") {
          aarolesInputData.end_date = event.target.value;
        } else if (event.target.id === "department") {
          aarolesInputData.department = event.target.value;
        } 
        
             
        setInput({ ...aarolesInputData });
        checkValidation();  
        newsetfield();
        //checking();
         //setfield();
        //asyncValidation();
      };
    
      const setfield=()=>{
          //var meters=new Array<any>();
          if(aarolesData.items.length>0){                
            for(var i=0;i<aarolesData.items.length;i++){
              var element=aarolesData.items[i];  
              if (aarolesInputData.roleName==element.roleName)  {              
              alert("invalid entry");  
              setValid(false); 
          }  
          else{
            //alert("valid entry");
          }
          }     
        }
      }
      let date1;
      let date2;
      const newsetfield=()=>{
        //var meters=new Array<any>();
        if(aarolesData.items.length>0){                
          for(var i=0;i<aarolesData.items.length;i++){
            var element=aarolesData.items[i]; 
            var get = aarolesInputData.roleId;
            var set = aarolesData.items[get];
            // alert(set.roleName);
           // alert(aarolesData.items[aarolesInputData.roleId].roleName);
           // alert(aarolesInputData.roleId);
            if(aarolesInputData.roleId==0) {
            if (aarolesInputData.roleName==element.roleName)  {              
            alert("duplicate entry");    
            setValid(false); 
        }  
        else {
          if (aarolesInputData.roleName==element.roleName)  {    
            if(aarolesInputData.roleName==set.roleName)  {
              
            }        
         else{
             
          alert("duplicate entry");
          setValid(false);
         }
        }
         else{

         } 
          //alert("valid entry");
        }
      }

        else {
           
          //alert("valid entry");
        }
        }     
      }
    }
    
      const fieldval=(rowdata:any)=>{
        //var meters=new Array<any>();
        if(aarolesData.items.length>0){                
          for(var i=0;i<aarolesData.items.length;i++){
            var element=aarolesData.items[i];  
            //alert(JSON.stringify(rowdata.roleName));
            if (aarolesInputData.roleName==rowdata.roleName)  {                 
        }  
        else{
           if (aarolesInputData.roleName==element.roleName) {
             alert("invalid form")
           }
        }
        }     
      }
    }
      const renderField = (
        { input, label, type, meta: { asyncValidating, touched, error } },
      ) => (
        <div>
          <label>{label}</label>
          <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
          </div>
        </div>
      );
    /*  const asyncValidation = (values, dispatch) => {

        return new Promise((resolve, reject) => {
          dispatch(getAarolesList(userData.userProfile.tenantFkId.id)
           
          ).then((result) => {
            if (result.data.code !== 200) reject({roleName: 'That rolename is taken'});
            else resolve();
          });
        });
      };
        */
      const [aaapermissionList, setaaapermissionList] = useState([]);
    
      if (AaapermissionData.items.length > 0 && aaapermissionList.length === 0) {
        setaaapermissionList(AaapermissionData.items);
      }
      const [isValid, setValid] = useState(false);
      const dateTemplate=(rowData:any , column:any)=> {
     
        return  <a  onClick={()=>{onCheckSelected(rowData)}}>edit</a>
    }
    const getTemplate=(rowData:any , column:any)=> {
      return <div>
          <a  onClick={()=>{onCheckSelected(rowData)}}>edit</a>
         
      </div>;
  }
  const getRowTemplate=(rowData:any , column:any)=> {
    return <div>
        <a  onClick={()=>{onCheckingSelected(rowData)}}>delete</a>
       
    </div>;
}
  const rowfileClick = (rowData:any) => {
    
    return <div>
           <h1>hi{rowData.roleName}</h1>
    </div>
}

   
    const rowColumnClick = (rowData:any) => {


      return <Link to={{
        pathname: '/manageicareunits',
        state: {rowData}
      }}> Data </Link>

  }

      const checking=()=>{
          for(var i=0;i<aarolesData.items.length;i++){
            var element=aarolesData.items[i];             
            if((aarolesInputData.roleName!= element.roleName))
          {
          }
          else
          {
            alert("form is invvalid");
          }
        }
      }
  
      const checkValidation=()=>{
        
        if((aarolesInputData.roleName!==null && aarolesInputData.roleName!=="" ) 
        &&(aarolesInputData.role_status!==null && aarolesInputData.role_status!=="")    
        &&(aarolesInputData.description!==null && aarolesInputData.description!=="") 
        &&(aarolesInputData.long_description!==null && aarolesInputData.long_description!=="")  
        &&(aarolesInputData.department!==null && aarolesInputData.department!=="")    
     
        //&&(aapermissionsInputData.permission_name!==null&&aapermissionsInputData.permission_name!=="") 
        )
        {
          setValid(true);
        }
        else
        {
          setValid(false); 
        }
       
        
      }
      const setValidation=()=>{
        
        if((aarolesInputData.roleName!==null && aarolesInputData.roleName!=="" )
        &&(aarolesInputData.role_status!==null && aarolesInputData.role_status!=="")    
        &&(aarolesInputData.description!==null && aarolesInputData.description!=="") 
        &&(aarolesInputData.long_description!==null && aarolesInputData.long_description!=="")
       
     
        &&(aarolesInputData.department!==null && aarolesInputData.department!=="")    
       
        //&&(aapermissionsInputData.permission_name!==null&&aapermissionsInputData.permission_name!=="") 
        )
        {
          setValid(true);
        }
        else
        {
          setValid(false); 
        }
        if (!isPageLoaded && !aarolesData.isLoading) {
          var meters=new Array<any>();
          if(aarolesData.items.length>0){                
            for(var i=0;i<aarolesData.items.length;i++){
              var element=aarolesData.items[i]; 
             // alert(element.roleName) ;
              if (aarolesInputData.roleName==element.roleName)  {              
             // alert("invalid form")
            }      
          }  
          }     
        }
        
      }
      //alert(JSON.stringify(aarolesData));
      //alert(JSON.stringify(aapermissionsData));
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const handleSubmit = (event:any) => {    
        const loggedInString = localStorage.getItem("AUTHDATA");
        if (loggedInString) {
          const loggedInData = JSON.parse(loggedInString);
          if (loggedInData) {
            aarolesInputData.updated_by = loggedInData.userProfile.userautoid.userId;
            aarolesInputData.inserted_by = loggedInData.userProfile.userautoid.userId;
            aarolesInputData.companyautoid = loggedInData.userProfile.companyautoId;
          }
        }
        setIsFormSubmitted(true);
        if(isValid){  
          
          setInput(aarolesInputData)
         // setShowFormMessage(false);
          setInput({ ...aarolesInputData });     
          dispatch(saveAaroles(aarolesInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(saveAaroles(aarolesInputData)));
          checkValidation();
           newsetfield();
         // setfield();
          //fieldval(rowdata);
          setTimeout(() => {
         
            window.location.href="/user/aaroles";
            }, 4000);
        }
        else{
         // setShowFormMessage(true);
         alert("form is not valid ");
          setInput({ ...aarolesInputData });       
         // dispatch(saveAaroles(aarolesInputData));
        //  setIsDispatchedSave(false);
        checkValidation();
         // alert(JSON.stringify(saveAaroles(aarolesInputData)));
          newsetfield();
        //  setfield();
          //fieldval(rowdata);
        }
      }
      const handleDelSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        aaroles.companyautoid= userData.userProfile.tenantFkId; 
        aarolesInputData.role_status= "Inactive";
          setShowFormMessage(false);
          setInput({ ...aarolesInputData });  
         // alert(aarolesInputData.role_status);    
          dispatch(saveAaroles(aarolesInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(Aaroles(aarolesInputData)));
         // setfield();
          window.location.href="/user/aaroles";
     
      }
      
      const [tableData, setTableData] = useState(new Array<any>());
      const [parentlist, setparentlist]=  useState(new Array<any>());
      const [tablingData, setTablingData] = useState(new Array<any>());
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isFormSubmitting, setIsFormSubmitting] = useState(false);
      const [isDispatchedSave, setIsDispatchedSave] = useState(false);
      const [isDispatchingSave, setIsDispatchingSave] = useState(false);
      const[displayDialog, setdisplayDialog]=useState(false)
      const[displayedDialog, setdisplayedDialog]=useState(false);

      const[displayingDialog, setdisplayingDialog]=useState(false);

      const[showDelete, setShowDelete]=useState(false);
      
      const [selectedData, setSelectedData] = useState();
      const [checkedData, setcheckedData] = useState();

      const [isPageLoaded, setPageLoaded] = useState(false);
      const [isPageLoadon, setPageLoadon] = useState(false);
      if(isDispatchedSave && !aarolesData.isLoading && aarolesData.isFormSubmit)
      {
        setdisplayDialog(false);
        if(userData!=null){
          dispatch(getAarolesList(userData.userProfile.tenantFkId.id));            
        }
        setIsDispatchedSave(false);
        setIsFormSubmitted(false);        
        setTimeout(() => {
          setPageLoaded(false);
        //  loadGrid();
        }, (1000));
      }
      if(isDispatchingSave && !aapermissionsData.isLoadon && aapermissionsData.isFormSubmitting)
     {
       setdisplayingDialog(false);
      if(userData!=null){
        dispatch(getAapermissionsList(userData.userProfile.tenantFkId.id));            
      }
      setIsDispatchingSave(false);
      setIsFormSubmitted(false);        
    }
      loadGrid();
      function loadGrid(){
      //  alert(userData.userProfile.tenantFkId.id);
        if (!isPageLoaded && !aarolesData.isLoading) {
          var meters=new Array<any>();
          if(aarolesData.items.length>0){                
            for(var i=0;i<aarolesData.items.length;i++){
              var element=aarolesData.items[i]; 
              //alert(element.role_status) ;
              if (element.role_status!=="Active")  {              
              
            }   
            else{
              meters.push(element);
            }   
          }
            setPageLoaded(true);
            setTableData(meters);   
          }     
        }
      }
      loadingGrid();
      function loadingGrid(){
        if (!isPageLoaded && !aapermissionsData.isLoading) {
          var meters=new Array<any>();
          if(aapermissionsData.items.length>0){                
            for(var i=0;i<aapermissionsData.items.length;i++){
              if (aapermissionsData.items.role_status=="Active")  { 
              var element=aapermissionsData.items[i];  
                      
              meters.push(element);
              }
            }      
            setPageLoaded(true);
            setTableData(meters);   
          }     
        }
      }
      const set = aapermissionsData.items;
      const update_ports = (set) => set.map(({ permission_id, permission_name, parent_permission_id, long_description, description, inserted_by, updated_by, insert_datetime, update_datetime, icare_unit, type}) => {
        return { label: permission_name, value: permission_id, parent_permission_id:parent_permission_id, long_description:long_description,description:description,inserted_by:inserted_by, updated_by:updated_by,insert_datetime,update_datetime,icare_unit:icare_unit,type:type }
      })
     var arrayToTree = require('array-to-tree');
      aarolesInputData.permission_fk_id =
      arrayToTree(update_ports(set),{
     parentProperty: 'parent_permission_id',
      customID: 'value',
    }
   
    );
   /*
    const handleStartDateChange = (event: any) => {
      setEffectivedate(event.value);
    };
    */

  function file(event){
  //alert(JSON.stringify(aarolesInputData.permission_fk_id));
  console.log(JSON.stringify(aarolesInputData.permission_fk_id));
  }   
  
     
      function onClickAdd(event) {
        if(!displayDialog){      
          setShowMessage(false);
          setInput(aaroles);   
          //consumerInputData=consumer; 
          setInput({ ...aaroles }); 
          setTimeout(() => {
            if(userData!=null){
              aaroles.inserted_by= userData.userProfile.userautoid.userId;
              aaroles.updated_by= userData.userProfile.userautoid.userId; 
              aaroles.companyautoid= userData.userProfile.roleFkId.companyAutoId.id; 
             // alert("data.insertedby"+userData.userProfile.userFkId.userId) 
              setInput({ ...aaroles }); 
            } 
          }, 1000);
          
          setdisplayDialog(true);
          setShowDelete(false);
        }
      }
      const [dataTable, setDataTable] = useState();
      
      const exportCsv = () => {
        console.log(dataTable);
        if (dataTable)
            dataTable.exportCSV();
    }

      function successMessage( key:string){     
        return <Message severity="success" key={key} text="Aaroles Saved Successfully." />
      }
      const onSelectionChangeed=(e) => {setSelectedData(e.value)}
      const onSelectionChanging=(e) => {setcheckedData(e.value)}
      const onCheckSelected=(rowData:any)=>{
        setShowMessage(false);
        if(!displayedDialog){
          var data=rowData;
          //setInput(consumer);
          aarolesInputData=data;
          if(userData!=null){
           // aarolesInputData.updated_by= userData.userProfile.userFkId.userId;
           // aarolesInputData.inserted_by=data.inserted_by;
           
                                         
          }           
          //setInput(consumer);
          setInput({ ...aarolesInputData }); 
          setdisplayedDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
      }     
      const onCheckingSelected=(rowData:any)=>{
        setShowMessage(false);
        if(!displayingDialog){
          var data=rowData;
          //setInput(consumer);
          aarolesInputData=data;
          if(userData!=null){
           // aarolesInputData.updated_by= userData.userProfile.userFkId.userId;
           // aarolesInputData.inserted_by=data.inserted_by;
            //alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          setInput({ ...aarolesInputData }); 
          setdisplayingDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
      } 
      const onSetSelected=(rowData:any)=>{
        setShowMessage(false);
        if(!displayDialog){
          var data=rowData;
          //setInput(consumer);
          aarolesInputData=data;
          if(userData!=null){
           // aarolesInputData.updated_by= userData.userProfile.userFkId.userId;
           // aarolesInputData.inserted_by=data.inserted_by;
            //alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          setInput({ ...aarolesInputData }); 
          setdisplayDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
      }     
      const onRowSelected=(event)=>{
        setShowMessage(false);
        if(!displayDialog){
          var data=event.data;
          //setInput(consumer);
          aarolesInputData=data;
          if(userData!=null){
            aarolesInputData.updated_by= userData.userProfile.userautoid.userId;
            aarolesInputData.inserted_by=data.inserted_by;
            //alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          setInput({ ...aarolesInputData }); 
          setdisplayDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
      }     
      const selectevent=(event)=>{
        setdisplayingDialog(false);
      }
      const setevent=(event)=>{
        setdisplayDialog(true);
      }
      
      const handleDeleteSubmit=(event)=>{
        dispatch(deleteAaroles(selectedData));        
      }
      
      var header = <div style={{'textAlign':'left'}}>
       
  </div>
  const onChange = (currentNode, selectedNodes) => {
    console.log('onChange::', currentNode, selectedNodes)
  }
  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }
      const status= [
        {label: 'Select Status', value: null},
        {label: 'Active', value: 'Active'},
        {label: 'InActive', value: 'InActive'} 
      ] ; 
      const [growl, setGrowl]=useState();
      const [showMessage, setShowMessage]=useState(false);
      const [growling, setGrowling]=useState();
      /*
      if(!aarolesData.isLoading && aarolesData.isFormSubmit && isFormSubmitted){
        if(aarolesData.status.search("Success") || aarolesData.status.search("success") ){
          setShowMessage(true);
          growl.show({severity: 'success', summary: 'Success', detail: 'User Saved successfully'});
        }
        else{
          growl.show({severity: 'warn', summary: 'Warn', detail: 'There are unsaved changes'});
          setShowMessage(false);
        }
        setIsFormSubmitted(false);
      }
      */
      if(!aapermissionsData.isLoadon && aapermissionsData.isFormSubmitting && isFormSubmitted){
       
      }

      function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
    return (    
        <div>

<Dialog header="Add Roles" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                <div className="p-grid card-w-title">    
                <div className="p-col-12">    
                    <div className="card summary">                                               
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="roleName">Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="roleName" name="roleName" value={aarolesInputData.roleName} required onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.roleName==="" && (requiredMessage("fn"))}
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="role_status">Status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          < Dropdown id="role_status" name="role_status" options={status} value={aarolesInputData.role_status} onChange={handleInputChange} required  autoWidth={false}   />
                         
                        </div>
                      </div>
                      
                      <div className="p-grid">
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="description" name="description" value={aarolesInputData.description} required onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.description==="" && (requiredMessage("fn"))}
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="long_description">Long Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="long_description" name="long_description" value={aarolesInputData.long_description} onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.long_description==="" && (requiredMessage("fn"))}
                        </div>
                      </div>
                      <div className="p-grid">
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="department">Department</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="department"  name="department" value={aarolesInputData.department} required onChange={handleInputChange}  />
                          { isFormSubmitted && aarolesInputData.department==="" && (requiredMessage("fn"))}
          
                        </div>
                        
                        </div>
                    </div>
                  </div>
                
                </div>      
               
                <div className="p-dialog-footer">
                  <div className="ui-dialog-buttonpane p-clearfix">
                  
                    <button onClick={setevent} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">cancel</span>
                    </button>
                     
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
            <Dialog header="Add Roles" visible={displayedDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayedDialog(false) }>
              {
                displayedDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                <div className="p-grid card-w-title">    
                <div className="p-col-12">    
                    <div className="card summary">                                               
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="roleName">Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="roleName" name="roleName" value={aarolesInputData.roleName} required onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.roleName==="" && (requiredMessage("fn"))}
                        </div>
                        
                      </div>
                      
                      <div className="p-grid">
                        
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="role_status">Status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          < Dropdown id="role_status" name="role_status" options={status} value={aarolesInputData.role_status} onChange={handleInputChange} required  autoWidth={false}   />
                         
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="description" name="description" value={aarolesInputData.description} required onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.description==="" && (requiredMessage("fn"))}
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="long_description">Long Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="long_description" name="long_description" value={aarolesInputData.long_description} onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.long_description==="" && (requiredMessage("fn"))}
                        </div>
                        </div>
                      <div className="p-grid">
                        
                      </div>
                      
                      <div className="p-grid">
                           
                      
                      </div>
                      <div className="p-grid">
                     
                        
                       
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="department">Department</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="department"  name="department" value={aarolesInputData.department} required onChange={handleInputChange}  />
                          { isFormSubmitted && aarolesInputData.department==="" && (requiredMessage("fn"))}
          
                        </div>
                       
                          </div>
                    </div>
                  </div>
                
                </div>      
               
                <div className="p-dialog-footer">
                  <div className="ui-dialog-buttonpane p-clearfix">
                  
                    <button onClick={setevent} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Cancel</span>
                    </button>
                     
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
            <Dialog header={aarolesInputData.roleName} visible={displayingDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayingDialog(false) }>
            {
                displayingDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                                                <div className="p-col-12 p-md-6">
                               <h1>Do you want to remove role name?</h1>
                               
                    <button onClick={handleDelSubmit} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Yes</span>
                    </button>
                    <button onClick={selectevent} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">No</span>
                    </button>
                            </div>
                   </ScrollPanel> 
                    
                )
            }
            </Dialog>
      
            <div className="animated fadeIn">
              <div className="p-grid">
                <div className="p-col-12">
                  <div className="card card-w-title">
                    <h1>Role Information</h1>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Role" onClick={setevent}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <div style={{textAlign:'center'}}>
                      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={exportCsv}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {aarolesData.isLoading && <ProgressSpinner />}
                      {!aarolesData.isLoading && (                        
                    <DataTable
                      value={tableData}
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

                     <Column field="roleName" header="Role Name" sortable={true} filter={true}/>
                     
              
                        <Column field="role_status" header="Role Status" sortable={true} filter={true} />
                        <Column field="description" header="Description" sortable={true} filter={true}/>  
                        <Column field="long_description" header="Long Description" sortable={true}filter={true} />
                      
                      
                        <Column field="description" header="Description" sortable={true}  filter={true}/>  
                       
                        <Column
                                          header="Edit"
                                         body={getTemplate}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
                          <Column
                                          header="Delete"
                                         body={getRowTemplate}
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
    const { aarolesData } = state;
    const { aapermissionsData } = state;
    const { AaapermissionData } = state;
    const {items} =state;
    return {
      aarolesData,
      aapermissionsData,
      AaapermissionData ,
      items
    };
  };
export default connect(mapStateToProps)(Aaroles);