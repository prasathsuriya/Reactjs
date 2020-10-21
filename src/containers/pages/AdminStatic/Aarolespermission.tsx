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
import {getaarolespermission, saveaarolespermission, deleteaarolespermission} from "../../../store/actions/Aarolespermission";
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
import Aapermissions from './Aapermissions';

interface IAarolepermissions {
    dispatch: Dispatch<any>;
    aapermissionsData: any;
    aarolesData: any;
    AaapermissionData:any;
    aarolespermissionData:any;
    state : {
      nodes: [],
      checked: [],
      expanded: []
  }
  }
const Aarolespermission: React.FC<IAarolepermissions> = ({ dispatch,aarolesData,aapermissionsData,AaapermissionData,aarolespermissionData
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
          dispatch(getAarolesList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
          dispatch(getAapermissionsList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
          dispatch(getaarolespermission(curentUser.userProfile.roleFkId.companyAutoId.id)); 
        }                  
      }, []);
    const aaroles={
      roleId:0,
      roleName:"",
      role_type : "",
      query_name : "",
      role_status:"",
      description : "",
      long_description:"",
      inserted_by:"",
      updated_by:"",
      icare_unit : "",
      icare_unit_admin : "",
      operating_unit_admin:"",
      effective_date :new Date() , 
      department : "",
      end_date:new Date() ,
      type : ""
    //updated_by
    }; 

    const aapermission=
    [{
        permission_id:0,
        permission_name:"",
        permission_status:"",
        description : "",
        long_description:"",
        icare_unit : "",
        parent_permission_id : "",
        type : "",
        inserted_by:"",
        updated_by:""
        //updated_by
      }];    
      const aafunctpermission={
        permission_id:0,
        permission_name:"",
        permission_status:"",
        description : "",
        long_description:"",
        icare_unit : "",
        parent_permission_id : "",
        type : "",
        inserted_by:"",
        updated_by:""
        //updated_by
      };    

      const aasetpermission={
        role_permission_id:0,
        permission_id:{},
        inserted_by:"",
        updated_by : "",
        status:"",
        effective_date :new Date() ,
        end_date:new Date() ,            
        roleId:{
    //updated_by
       },
        type : "",
        companyAutoId:{}
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
      let [aapermissionsInputData, settingInput] = useState(new Array<any>(aapermission));
      let [aanewpermissionsInputData, setlingInput] = useState(aafunctpermission);
      let [aaListInputData, setterInput] = useState(new Array<any>());
      let [aasetpermissionsInputData, settingperInput] = useState(aasetpermission);
      const [userData, setUserData] = useState();
      const [isEmailValid, setEmailValid] = useState(false);
      const [checked,setchecked] = useState();
      const [expanded,setexpanded]= useState();
      const [effectivedate, setEffectivedate] = useState(new Date());
      const [selectedpermission, setselectedpermission] = useState();
      const [functiontree, setfunctiontree] = useState();
      const [enddate, setenddate] = useState(new Date());
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
        } else if (event.target.id === "role_type") {
          aarolesInputData.role_type = event.target.value;
        } else if (event.target.id === "query_name") {
          aarolesInputData.query_name = event.target.value;
        } else if (event.target.id === "role_status") {
          aarolesInputData.role_status= event.target.value;
        } else if (event.target.id === "description") {
          aarolesInputData.description = event.target.value;
        } else if (event.target.id === "long_description") {
          aarolesInputData.long_description = event.target.value;
        } else if (event.target.id === "icare_unit") {
          aarolesInputData.icare_unit = event.target.value;
        } else if (event.target.id === "icare_unit_admin") {
          aarolesInputData.icare_unit_admin = event.target.value;
        }else if (event.target.id === "operating_unit_admin") {
          aarolesInputData.operating_unit_admin = event.target.value;
        } else if (event.target.id === "effective_date") {
          aarolesInputData.effective_date = event.target.value;
        } else if (event.target.id === "end_date") {
          aarolesInputData.end_date = event.target.value;
        } else if (event.target.id === "department") {
          aarolesInputData.department = event.target.value;
        } else if (event.target.id === "type") {
          aarolesInputData.type = event.target.value;
        }
        
             
        setInput({ ...aarolesInputData });
        checkValidation();  
        //setfield();
        //checking();
         //setfield();
        //asyncValidation();
      };
      const handleStartDateChange = (event: any) => {
        setEffectivedate(aarolesInputData.effective_date= event.value);

      };
      const handleendDateChange = (event: any) => {
        setenddate(aarolesInputData.end_date= event.value);
      };
      const fill =() =>{
         setInput({ ...aarolesInputData });
         settingInput({ ...aapermissionsInputData }); 
         if(aapermissionsInputData.length>0){
          for(var i=0;i<aapermissionsInputData.length;i++){
        aasetpermissionsInputData.roleId = aarolesInputData;
        aasetpermissionsInputData.permission_id = aapermissionsInputData[i];
          aasetpermissionsInputData.status = aarolesInputData.role_status;
          aasetpermissionsInputData.effective_date = aarolesInputData.effective_date;
          aasetpermissionsInputData.end_date = aarolesInputData.end_date;
          aasetpermissionsInputData.inserted_by = aarolesInputData.inserted_by;
          aasetpermissionsInputData.updated_by = aarolesInputData.updated_by;
          aasetpermissionsInputData.type = aarolesInputData.type;
          settingperInput ({ ...aasetpermissionsInputData });
          }
         }
      }
      const setting =() =>{
        
    }
      const setfield=()=>{
          //var meters=new Array<any>();
          if(aarolesData.items.length>0){                
            for(var i=0;i<aarolesData.items.length;i++){
              var element=aarolesData.items[i];  
              if (aarolesInputData.roleName==element.roleName)  {              
           //   alert("invalid entry");  
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
          //  alert("invalid entry");    
            setValid(false); 
        }  
        else {
          if (aarolesInputData.roleName==element.roleName)  {    
            if(aarolesInputData.roleName==set.roleName)  {
              
            }        
         else{
             
        //  alert("invalid entry");
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
        //    alert(JSON.stringify(rowdata.roleName));
            if (aarolesInputData.roleName==rowdata.roleName)  {                 
        }  
        else{
           if (aarolesInputData.roleName==element.roleName) {
          //   alert("invalid form")
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
      const filesetup=()=>{
      //    aarolesInputData.permission_fk_id=aapermission.permission_id;
      }
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
           <a  onClick={()=>{onCheckingSelected(rowData)}}>{rowData.roleName}</a>
       
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
         //   alert("form is invvalid");
          }
        }
      }
      const funct=()=>{
        var meters=new Array<any>();
        for(var i=0;i<aarolespermissionData.items.length;i++){
          var element=aarolespermissionData.items[i];             
          if((aarolesInputData.roleName!= element.roleId))
        {
          meters.push(element);
          alert(JSON.stringify(meters));
        }
        else
        {
       //   alert("form is invvalid");
        }
      }
    }

  
      const checkValidation=()=>{
        
        if((aarolesInputData.roleName!==null && aarolesInputData.roleName!=="" )
        &&(aarolesInputData.role_type!==null && aarolesInputData.role_type!=="")
        &&(aarolesInputData.query_name!==null && aarolesInputData.query_name!=="")    
        &&(aarolesInputData.role_status!==null && aarolesInputData.role_status!=="")    
        &&(aarolesInputData.description!==null && aarolesInputData.description!=="") 
        &&(aarolesInputData.long_description!==null && aarolesInputData.long_description!=="")
        &&(aarolesInputData.icare_unit!==null && aarolesInputData.icare_unit!=="")    
        &&(aarolesInputData.icare_unit_admin!==null && aarolesInputData.icare_unit_admin!=="")    
        &&(aarolesInputData.operating_unit_admin!==null && aarolesInputData.operating_unit_admin!=="")  
        &&(aarolesInputData.department!==null && aarolesInputData.department!=="")    
        &&(aarolesInputData.type!==null && aarolesInputData.type!=="") 
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
        &&(aarolesInputData.role_type!==null && aarolesInputData.role_type!=="")
        &&(aarolesInputData.query_name!==null && aarolesInputData.query_name!=="")    
        &&(aarolesInputData.role_status!==null && aarolesInputData.role_status!=="")    
        &&(aarolesInputData.description!==null && aarolesInputData.description!=="") 
        &&(aarolesInputData.long_description!==null && aarolesInputData.long_description!=="")
        &&(aarolesInputData.icare_unit!==null && aarolesInputData.icare_unit!=="")    
        &&(aarolesInputData.icare_unit_admin!==null && aarolesInputData.icare_unit_admin!=="")    
        &&(aarolesInputData.operating_unit_admin!==null && aarolesInputData.operating_unit_admin!=="")  
        &&(aarolesInputData.department!==null && aarolesInputData.department!=="")    
        &&(aarolesInputData.type!==null && aarolesInputData.type!=="") 
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
            
        setIsFormSubmitted(true);
        if(isValid){  
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
         
            window.location.href="/user/aarolespermission";
            }, 10000);
           
         
        }
        else{
         // setShowFormMessage(true);
       //  alert("valid issue");
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
      const displaySelection = (data: any) => {
        if (!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if (data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((car,i) => <li key={car.permission_id}>{car.permission_name + ' - ' + car.parent_permission_id + ' - ' + car.brand + ' - ' + car.color}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Car: {data.permission_id + ' - ' + data.permission_name + ' - ' + data.parent_permission_id + ' - ' + data.permission_status}</div>
        }
    }    
      const settingSelection = () => {
        setShowMessage(false);
        if(!displayDialog){
          var set= checkedData;
          //setInput(consumer);
          aapermissionsInputData=set;
          if(userData!=null){
           // aapermissionsInputData.updated_by= userData.userProfile.userFkId.userId;
           // aapermissionsInputData.inserted_by=data.inserted_by;                           
          }           
          //setInput(consumer);
          settingInput ({ ...aapermissionsInputData }); 
          setdisplayDialog(false);
         // alert(JSON.stringify(aapermissionsInputData));
          //If need to show delete button
          //setShowDelete(true);
        }
  }

      const handleperSubmit = (event:any) => {    
          settingSelection();
        setIsFormSubmitted(true);
         // setShowFormMessage(false);
         setInput({ ...aarolesInputData });
         
         if(aapermissionsInputData.length>0){
          for(var i=0;i<aapermissionsInputData.length;i++){
            settingInput({ ...aapermissionsInputData[i] });
            const loggedInString = localStorage.getItem("AUTHDATA");
        if (loggedInString) {
          const loggedInData = JSON.parse(loggedInString);
          if (loggedInData) {
            aasetpermissionsInputData.updated_by = loggedInData.userProfile.userautoid.userId;
            aasetpermissionsInputData.inserted_by = loggedInData.userProfile.userautoid.userId;
            aasetpermissionsInputData.companyAutoId = loggedInData.userProfile.companyautoId;
          }
        }
        aasetpermissionsInputData.roleId = aarolesInputData;
        aasetpermissionsInputData.permission_id = aapermissionsInputData[i];
          aasetpermissionsInputData.status = aarolesInputData.role_status;
          aasetpermissionsInputData.effective_date = aarolesInputData.effective_date;
          aasetpermissionsInputData.end_date = aarolesInputData.end_date;
          aasetpermissionsInputData.inserted_by = aarolesInputData.inserted_by;
          aasetpermissionsInputData.updated_by = aarolesInputData.updated_by;
          aasetpermissionsInputData.type = aarolesInputData.type;
          aasetpermissionsInputData.updated_by = aarolesInputData.updated_by;
          aasetpermissionsInputData.inserted_by = aarolesInputData.inserted_by;
          settingperInput ({ ...aasetpermissionsInputData });
         // alert(JSON.stringify(aasetpermissionsInputData));
         console.log(aasetpermissionsInputData);

         dispatch(saveaarolespermission(aasetpermissionsInputData));
          }
         }
         
          setIsDispatchedSave(true);
          //alert(JSON.stringify(saveAaroles(aarolesInputData)));
         // setfield();
          //fieldval(rowdata);
         // window.location.href="/staticui/aarolespermission";
         setTimeout(() => {
         
          window.location.href="/user/aarolespermission";
          }, 10000);
      }
      const handlenewSubmit = (event:any) => {    
        settingSelection();
      setIsFormSubmitted(true);
       // setShowFormMessage(false);
       setInput({ ...aarolesInputData });
       var meters=new Array<any>();
       if(aapermissionsInputData.length>0){
        for(var i=0;i<aapermissionsInputData.length;i++){
         // settingInput({ ...aapermissionsInputData[i] });
      aasetpermissionsInputData.roleId = aarolesInputData;
      aasetpermissionsInputData.permission_id = aapermissionsInputData[i];
        aasetpermissionsInputData.status = aarolesInputData.role_status;
        aasetpermissionsInputData.effective_date = aarolesInputData.effective_date;
        aasetpermissionsInputData.end_date = aarolesInputData.end_date;
        aasetpermissionsInputData.inserted_by = aarolesInputData.inserted_by;
        aasetpermissionsInputData.updated_by = aarolesInputData.updated_by;
        aasetpermissionsInputData.type = aarolesInputData.type;
        aasetpermissionsInputData.updated_by = aarolesInputData.updated_by;
        aasetpermissionsInputData.inserted_by = aarolesInputData.inserted_by;
       // settingperInput ({ ...aasetpermissionsInputData });
       // alert(JSON.stringify(aasetpermissionsInputData));
       console.log(aasetpermissionsInputData);
       
      // dispatch(saveaarolespermission(aasetpermissionsInputData));
      meters.push(aasetpermissionsInputData)
        }
       }
       setparentlist(meters);
       //alert(JSON.stringify(meters));
      // dispatch(saveaarolespermission(meters));
        setIsDispatchedSave(true);
        //alert(JSON.stringify(saveAaroles(aarolesInputData)));
       // setfield();
        //fieldval(rowdata);
      //  window.location.href="/staticui/aarolespermission";
    
    }
      const handleDelSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
          setShowFormMessage(false);
          setInput({ ...aarolesInputData });       
          dispatch(deleteAaroles(aarolesInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(Aaroles(aarolesInputData)));
         // setfield();
          window.location.href="/staticui/aaroles";
     
      }
      const handlefunctSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
          setShowFormMessage(false);
          setInput({ ...aarolesInputData });       
          dispatch(deleteAaroles(aarolesInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(Aaroles(aarolesInputData)));
         // setfield();
          window.location.href="/staticui/aaroles";
     
      }
      
      const [tableData, setTableData] = useState(new Array<any>());
      const [parentlist, setparentlist]=  useState(new Array<any>());
      const [tablingData, setTablingData] = useState(new Array<any>());
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isFormSubmitting, setIsFormSubmitting] = useState(false);
      const [isDispatchedSave, setIsDispatchedSave] = useState(false);
      const [isDispatchingSave, setIsDispatchingSave] = useState(false);
      const [isDispatcherSave, setIsDispatcherSave] = useState(false);
      const[displayDialog, setdisplayDialog]=useState(false)
      const[displayedDialog, setdisplayedDialog]=useState(false);;

      const[displayingDialog, setdisplayingDialog]=useState(false);

      const[showDelete, setShowDelete]=useState(false);
      
      const [selectedData, setSelectedData] = useState();
      const [checkedData, setcheckedData] = useState(new Array<any>());

      const [isPageLoaded, setPageLoaded] = useState(false);
      const [isPageLoadon, setPageLoadon] = useState(false);
      const [isPageLoader, setPageLoader] = useState(false);
      if(isDispatchedSave && !aarolesData.isLoading && aarolesData.isFormSubmit)
      {
        setdisplayDialog(false);
        if(userData!=null){
          dispatch(getAarolesList(userData.userProfile.userProfile.roleFkId.companyAutoId.id));            
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
        dispatch(getAapermissionsList(userData.userProfile.userProfile.roleFkId.companyAutoId.id));            
      }
      setIsDispatchingSave(false);
      setIsFormSubmitted(false);        
    }
    if(isDispatcherSave && !aarolespermissionData.isLoader && aapermissionsData.isFormSubmitting)
     {
       setdisplayingDialog(false);
      if(userData!=null){
        dispatch(getAapermissionsList(userData.userProfile.userProfile.roleFkId.companyAutoId.id));            
      }
      setIsDispatcherSave(false);
      setIsFormSubmitted(false);        
    }
      loadGrid();
      function loadGrid(){
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
        if (!isPageLoadon && !aapermissionsData.isLoadon) {
          var meters=new Array<any>();
          if(aapermissionsData.items.length>0){                
            for(var i=0;i<aapermissionsData.items.length;i++){
      
              var element=aapermissionsData.items[i];  
              if (element.permission_status!=="Active")  {              
              
              }   
              else{
                meters.push(element);
              }       
              } 
            setPageLoadon(true);
            setTablingData(meters);   
          }     
        }
      }
      loaderGrid();
     
      function loaderGrid(){
        if (!isPageLoader && !aarolespermissionData.isLoader) {
          var meters=new Array<any>();
          if(aarolespermissionData.items.length>0){                
            for(var i=0;i<aarolespermissionData.items.length;i++){
      
              var element=aarolespermissionData.items[i];  
              if (element.roleId!==aarolesInputData)  {              
              
              }   
              else{
                meters.push(element.permission_id);
              }   
                      
            //  meters.push(element);
              } 
            setPageLoader(true);
            setcheckedData(meters);   
          }     
        }
      }
      
      const set = aapermissionsData.items;
     /* const update_ports = (set) => set.map(({ permission_id, permission_name, parent_permission_id, long_description, description, inserted_by, updated_by, insert_datetime, update_datetime, icare_unit, type}) => {
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
  /*
  function file(event){
  alert(JSON.stringify(aarolesInputData.permission_fk_id));
  console.log(JSON.stringify(aarolesInputData.permission_fk_id));
  }   
  */
     
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
            //alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          setInput({ ...aarolesInputData }); 
         // alert(JSON.stringify(checkedData));
          var meters=new Array<any>();
          for(var i=0;i<aarolespermissionData.items.length;i++){
            var element=aarolespermissionData.items[i];             
            if((rowData= element.roleId))
          {
            meters.push(element.permission_id);
            
           // alert(JSON.stringify(meters));
          }
          else
          {
         //   alert("form is invvalid");
          }
        }
        setcheckedData(meters)
        //alert(JSON.stringify(checkedData));
        }
          setdisplayedDialog(true);
          //If need to show delete button
          //setShowDelete(true);
         
      }     
      const onCheckingSelected=(rowData:any)=>{
        setShowMessage(false);
        if(!displayingDialog){
          var data=rowData;
          //setInput(consumer);
          aarolesInputData=data;
          if(userData!=null){
            aarolesInputData.updated_by= rowData.updated_by;
            aarolesInputData.inserted_by=rowData.inserted_by;
            //alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          setInput({ ...aarolesInputData });
          var meters=new Array<any>();
          if(aarolespermissionData.items.length>0){                
            for(var i=0;i<aarolespermissionData.items.length;i++){
      
              var element=aarolespermissionData.items[i];  
              if (element.roleId.roleId==rowData.roleId)  {              
                meters.push(element.permission_id);
              }   
              else{
               
              }   
                      
            //  meters.push(element);
              } 
           // setPageLoader(true);
            setcheckedData(meters);   
          }    
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
          if(event.length>0){
            for(var i=0;i<event.length;i++){
              JSON.stringify(event[i].data);
            }
          }
         // alert(event.data.length);
          var meters=new Array<any>();
          var data=event.data;
          var funct={data};
         // alert(JSON.stringify(funct));
          meters.push(data)
        //  alert(JSON.stringify(event.data));
          //setInput(consumer);
        //  alert(JSON.stringify(meters));
         // alert(JSON.stringify(event.data.length));
          aapermissionsInputData =data;
          if(userData!=null){
           // aapermissionsInputData.updated_by= userData.userProfile.userFkId.userId;
           // aapermissionsInputData.inserted_by=data.inserted_by;
            //alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          settingInput({ ...aapermissionsInputData }); 
          if(aapermissionsInputData.length>0){                
            for(var i=0;i<aapermissionsInputData.length;i++){
          meters.push(aapermissionsInputData)
          setdisplayDialog(false);
          setterInput(meters);
        //  alert(JSON.stringify(aaListInputData));
          //If need to show delete button
          //setShowDelete(true);
            }
          }
        }
      }     
      const onSettingSelected=(event)=>{
      onRowSelected(event);
    //  alert(JSON.stringify(aapermissionsInputData));
     // alert(JSON.stringify(aaListInputData));
      var meters =new Array<any>();
      var data=event.data;
          meters.push(aapermissionsInputData)
    //  alert(JSON.stringify(aapermissionsInputData));
    //  alert(JSON.stringify(meters));
     // alert(onRowSelected.length);
        if(onRowSelected.length>0){                
          for(var i=0;i<onRowSelected.length;i++){
        if(!displayDialog){
          var data=event[i].data;
      //    alert(JSON.stringify(event.data));
          //setInput(consumer);
          aapermissionsInputData=data;
          if(userData!=null){
           // aapermissionsInputData.updated_by= userData.userProfile.userFkId.userId;
           // aapermissionsInputData.inserted_by=data.inserted_by;
            //alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          settingInput({ ...aapermissionsInputData }); 
          setdisplayDialog(false);
          //If need to show delete button
          //setShowDelete(true);
        }
      }
        }
      }    
      
      const fileselection=()=>{

      }
      const selectevent=(event)=>{
        setdisplayingDialog(false);
      }
      const settingevent=(event)=>{
        setdisplayingDialog(true);
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
   // alert(JSON.stringify('onChange::', currentNode, selectedNodes))
  }
  const onAction = (node, action) => {

   // alert(JSON.stringify('onAction::', action, node))
  }
  const onNodeToggle = currentNode => {

   // alert(JSON.stringify('onNodeToggle::', currentNode))
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
        if(aapermissionsData.status.search("Success") || aapermissionsData.status.search("success") ){
          setShowMessage(true);
          growling.show({severity: 'success', summary: 'Success', detail: 'User Saved successfully'});
        }
        else{
          growling.show({severity: 'warn', summary: 'Warn', detail: 'There are unsaved changes'});
          setShowMessage(false);
        }
        setIsFormSubmitted(false);
      }
      if(!aarolespermissionData.isLoader && aarolespermissionData.isFormSubmitter && isFormSubmitted){
        if(aarolespermissionData.status.search("Success") || aarolespermissionData.status.search("success") ){
          setShowMessage(true);
          growling.show({severity: 'success', summary: 'Success', detail: 'User Saved successfully'});
        }
        else{
          growling.show({severity: 'warn', summary: 'Warn', detail: 'There are unsaved changes'});
          setShowMessage(false);
        }
        setIsFormSubmitted(false);
      }
      function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
    return (    
        <div>

<Dialog header="Add Roles" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                    <h1>Do you want to set role permission?</h1>
               
                <div className="p-dialog-footer">
                  <div className="ui-dialog-buttonpane p-clearfix">
                  
                    <button onClick={setevent} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Dont save</span>
                    </button>
                     
                     <button onClick={handleperSubmit} className="p-button p-component p-button-text-icon-left">
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
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="role_type">Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="role_type" name="role_type" value={aarolesInputData.role_type} required onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.role_type==="" && (requiredMessage("fn"))}
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="query_name">Query Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="query_name" name="query_name" value={aarolesInputData.query_name} onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.query_name==="" && (requiredMessage("fn"))}
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
                          <label htmlFor="icare_unit">Icare Unit</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="icare_unit" name="icare_unit" value={aarolesInputData.icare_unit} required onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.icare_unit==="" && (requiredMessage("fn"))}
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="icare_unit_admin">Icare Unit Admin</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="icare_unit_admin" name="icare_unit_admin" value={aarolesInputData.icare_unit_admin} onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.icare_unit_admin==="" && (requiredMessage("fn"))}
                        </div>    
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="operating_unit_admin">Operating Unit Admin</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="operating_unit_admin" name="operating_unit_admin" value={aarolesInputData.operating_unit_admin} onChange={handleInputChange} />
                          { isFormSubmitted && aarolesInputData.operating_unit_admin==="" && (requiredMessage("fn"))}
                        </div>  
                      </div>
                      <div className="p-grid">
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="effective_date">Effective date</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        
                       
                       <Calendar placeholder="DateTime"   value={effectivedate} viewDate={effectivedate} name="effective_date"  id="effective_date" dateFormat="dd-mm-yy" onSelect={ handleStartDateChange} showIcon={true} />
                        </div>  
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="end_date">End Date</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Calendar placeholder="DateTime"   value={enddate} viewDate={enddate } name="end_date"  id="end_date" dateFormat="dd-mm-yy" onSelect={handleendDateChange } showIcon={true} />
                         
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
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="type">Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="type"  name="type" value={aarolesInputData.type} required onChange={handleInputChange}  />
                          { isFormSubmitted && aarolesInputData.type==="" && (requiredMessage("fn"))}
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
            <Dialog header={aarolesInputData.roleName} visible={displayingDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayingDialog(false) }>
            {
                displayingDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                                          <div className="p-col-12 p-md-6">
                               <div className="animated fadeIn">
                                   
                               <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {aapermissionsData.isLoadon && <ProgressSpinner />}
                      
                      {!aapermissionsData.isLoadon && (                        
                    <DataTable
                      value={tablingData}
                      paginatorPosition="bottom"
                      responsive className="p-datatable-aapermissionData"
                      paginator={true}
                      dataKey="permission_id"
                      rows={10}
                      alwaysShowPaginator={false}
                     // footer={displaySelection(checkedData)}
                      selection={checkedData}
                      //header={header} ref={(el) => { setTablingData(el); }}
                      onSelectionChange={onSelectionChanging}
                      scrollable={true} scrollHeight="200px" style={{marginTop:'50px', width: '500px'}}
                     // onRowSelect={onRowSelected}
                    >             
                     <Column selectionMode="multiple" style={{width:'3em'}}/>
                     <Column field="description" header="Select All" sortable={true} />
                                
                    </DataTable>
                 
                    )}
                    </div>
                    <button onClick={handleperSubmit} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-check p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Save</span>
                    </button>
                    <button onClick={selectevent} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">cancel</span>
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
                    <h1>Role Permission Management </h1>
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
                      
                     // onRowSelect={onRowSelected}
                    >             

<Column
                                          header="Role Name"
                                         body={getRowTemplate}
                                         style={{ textAlign: "center", width: "10em" }}
                                        filter={true}
                                        />  
                     
                        
                        <Column field="role_status" header="Role Status" sortable={true} filter={true} />
                        <Column field="description" header="Description" sortable={true} filter={true}/>  
                        <Column field="long_description" header="Long Description" sortable={true}filter={true} />
                       
                        
                                    
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
    const { aarolespermissionData } = state;
    const { AaapermissionData } = state;
    const {items} =state;
    return {
      aarolesData,
      aapermissionsData,
      aarolespermissionData,
      AaapermissionData ,
      items
    };
  };
export default connect(mapStateToProps)(Aarolespermission);