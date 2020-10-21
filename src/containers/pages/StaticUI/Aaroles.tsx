import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

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


import {Tree} from 'primereact/tree';
import {TreeTable} from 'primereact/treetable';
import {  withRouter, Switch, Route,Link } from 'react-router-dom';

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
        dispatch(getRolesPermissionByRoleid(aaroles.role_id));

        alert(JSON.stringify( AaapermissionData ));
        var keys=getKeys(aarolesInputData );
        var sets=getSets(aapermissionsInputData);
        //alert(JSON.stringify(keys));
        //alert(JSON.stringify(sets));
        var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
          dispatch(getAarolesList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
          dispatch(getAapermissionsList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
        }                  
      }, []);
    const aaroles={
      role_permission_id:0,
      role_id:0,
      role_name:"",
      role_type : "",
      query_name : "",
      role_status:"",
      description : "",
      long_description:"",
      icare_unit : "",
      icare_unit_admin : "",
      operating_unit_admin:"",
      effective_date : "",
      end_date:"",
      department : "",
      type : "",
      inserted_by:"",
      updated_by:"",
      permission_name:"",
      permission_fk_id:""
      //updated_by
    }; 
    const aapermissions={
      permission_name:"",
      permission_fk_id:0,
      role_id:0
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
   
      const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        settingInput({ ...aapermissionsInputData, [name]: value });
        if (event.target.id === "consumerEmailid") {
          if (!event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
            setEmailValid(false);
          }
          
          else
          setEmailValid(true);
        } 
        setInput({ ...aarolesInputData, [name]: value });
        if (event.target.id === "consumerEmailid") {
          if (!event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
            setEmailValid(false);
          }
          else
          setEmailValid(true);
        } 
        checkValidation();  
      };
      
      const [aaapermissionList, setaaapermissionList] = useState([]);
    
      if (AaapermissionData.items.length > 0 && aaapermissionList.length === 0) {
        setaaapermissionList(AaapermissionData.items);
      }
      const [isValid, setValid] = useState(false);
      const dateTemplate=(rowData:any , column:any)=> {
     
        return <div>
            <Link to={{
        pathname: '/manageicareunits',
        state: {rowData}
      }}> Data </Link>
           
        </div>;
    }
    const getTemplate=(rowData:any , column:any)=> {
      return <div>
          <a  onClick={()=>{rowColumnClick(rowData)}}>Hi</a>
         
      </div>;
  }
  const rowfileClick = (rowData:any) => {
    
    return <div>
           <h1>hi{rowData.role_name}</h1>
    </div>
}

   
    const rowColumnClick = (rowData:any) => {


      return <Link to={{
        pathname: '/manageicareunits',
        state: {rowData}
      }}> Data </Link>

  }

  
  
      const checkValidation=()=>{
        if((aarolesInputData.role_name!==null && aarolesInputData.role_name!=="" )
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
        &&(aapermissionsInputData.permission_name!==null&&aapermissionsInputData.permission_name!=="") 
        )
        {
          setValid(true);
        }
        else
        {
          setValid(false); 
        }

      }
      //alert(JSON.stringify(aarolesData));
      //alert(JSON.stringify(aapermissionsData));
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        if(isValid){  
          setShowFormMessage(false);
          setInput({ ...aarolesInputData });       
          dispatch(saveAarolepermission(aarolesInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(saveAarolepermission(aarolesInputData)));
        }
        else{
          setShowFormMessage(true);
          setInput({ ...aarolesInputData });       
          dispatch(saveAarolepermission(aarolesInputData));
          setIsDispatchedSave(true);
         // alert(JSON.stringify(saveAarolepermission(aarolesInputData)));
        }
      }
      
      
      const [tableData, setTableData] = useState(new Array<any>());
      const [parentlist, setparentlist]=  useState(new Array<any>());
      const [tablingData, setTablingData] = useState(new Array<any>());
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isFormSubmitting, setIsFormSubmitting] = useState(false);
      const [isDispatchedSave, setIsDispatchedSave] = useState(false);
      const [isDispatchingSave, setIsDispatchingSave] = useState(false);
      const[displayDialog, setdisplayDialog]=useState(false);
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
          dispatch(getAarolesList(userData.curentUser.userProfile.roleFkId.companyAutoId.id));            
        }
        setIsDispatchedSave(false);
        setIsFormSubmitted(false);        
        setTimeout(() => {
          setPageLoaded(false);
//          loadGrid();
        }, (1000));
      }
      if(isDispatchingSave && !aapermissionsData.isLoadon && aapermissionsData.isFormSubmitting)
     {
       setdisplayingDialog(false);
      if(userData!=null){
        dispatch(getAapermissionsList(userData.curentUser.userProfile.roleFkId.companyAutoId.id));            
      }
      setIsDispatchingSave(false);
      setIsFormSubmitted(false);        
    }
      loadGrid();
      function loadGrid(){
        if (!isPageLoaded && !aarolesData.isLoading) {
          var meters=new Array<any>();
          if(aarolesData.items.length>0){                
            for(var i=0;i<aarolesData.items.length;i++){
              var element=aarolesData.items[i];             
              meters.push(element);
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
              var element=aapermissionsData.items[i];             
              meters.push(element);
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

    

  function file(event){
 // alert(JSON.stringify(aarolesInputData.permission_fk_id));
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
             // alert("data.insertedby"+userData.userProfile.userFkId.userId) 
              setInput({ ...aaroles }); 
            } 
          }, 1000);
          
          setdisplayDialog(true);
          setShowDelete(false);
        }
      }
      

      function successMessage( key:string){     
        return <Message severity="success" key={key} text="Aaroles Saved Successfully." />
      }
      const onSelectionChangeed=(e) => {setSelectedData(e.value)}
      const onSelectionChanging=(e) => {setcheckedData(e.value)}
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
                          <label htmlFor="role_name">Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="role_name" name="role_name" value={aarolesInputData.role_name} required onChange={handleInputChange} />
                       
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="role_type">Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="role_type" name="role_type" value={aarolesInputData.role_type} required onChange={handleInputChange} />
                      
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="query_name">Query Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="query_name" name="query_name" value={aarolesInputData.query_name} onChange={handleInputChange} />
                     
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
                         
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="long_description">Long Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="long_description" name="long_description" value={aarolesInputData.long_description} onChange={handleInputChange} />
                         
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="icare_unit">Icare Unit</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="icare_unit" name="icare_unit" value={aarolesInputData.icare_unit} required onChange={handleInputChange} />
        
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="icare_unit_admin">Icare Unit Admin</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="icare_unit_admin" name="icare_unit_admin" value={aarolesInputData.icare_unit_admin} onChange={handleInputChange} />
                         
                        </div>    
                   </div>
                      <div className="p-grid">
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="operating_unit_admin">Operating Unit Admin</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="operating_unit_admin" name="operating_unit_admin" value={aarolesInputData.operating_unit_admin} onChange={handleInputChange} />
                         
                        </div>  
                      </div>
                      <div className="p-grid">
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="effective_date">Effective date</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="effective_date" value={aarolesInputData.effective_date} name="effective_date"  onChange={handleInputChange} />
                         
                        </div>  
                      </div>
                      <div className="p-grid">
                      <div className="p-col-12 p-md-2">
                          <label htmlFor="end_date">End Date</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="end_date" value={aarolesInputData.end_date} name="end_date"  onChange={handleInputChange} />
                         
                        </div>  
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="department">Department</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="department"  name="department" value={aarolesInputData.department} required onChange={handleInputChange}  />
                     
          
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="type">Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="type"  name="type" value={aarolesInputData.type} required onChange={handleInputChange}  />
                    
                        </div>
                          </div>
                          
                          <div className="p-col-12 p-md-4">
                        <DropdownTreeSelect  id="permission_fk_id"  data={aarolesInputData.permission_fk_id} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} />
                      </div>
                    </div>
                  </div>
                
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
                  
                    <button onClick={selectevent} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-check p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Add permission</span>
                    </button>
                  </div>
                </div>
                </ScrollPanel>
                )
              }
            </Dialog>
            <Dialog header={aarolesInputData.role_name} visible={displayingDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayingDialog(false) }>
            {
                displayingDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                                                <div className="p-col-12 p-md-6">
                                <h1>Checkbox Tree</h1>
                                <DropdownTreeSelect data={aarolesInputData.permission_fk_id} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} />,
                              
                            </div>
                   </ScrollPanel> 
                    
                )
            }
            </Dialog>
      
            <div className="animated fadeIn">
              <div className="p-grid">
                <div className="p-col-12">
                  <div className="card card-w-title">
                    <h1>Aaroles</h1>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="add" label="edit" onClick={file}></Button>
                      <Button type="button" icon="pi pi-plus" iconPos="edit selected" label="add" onClick={setevent}></Button>
                      <Button type="button" icon="pi pi-plus" iconPos="assign permission" label="edit" onClick={selectevent}></Button>
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
                      header="Aaroles"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                      onRowSelect={onRowSelected}
                    >             

                     <Column field="role_name" header="role name" sortable={true}/>
                        <Column field="role_type" header="role type" sortable={true}/>
                        <Column field="query_name" header="query name" sortable={true}/>
                        <Column field="role_status" header="Role status" sortable={true}/>
                        <Column field="description" header="Description" sortable={true}/>  
                        <Column field="long_description" header="Long Description" sortable={true}/>
                        <Column field="icare_unit" header="Icare Unit" sortable={true}/>
                        <Column field="icare_unit_admin" header="Icare Unit Admin " sortable={true}/>
                        <Column field="operating_unit_admin" header="Operating Unit Admin " sortable={true}/>
                        <Column field="role_status" header="Role status" sortable={true}/>
                        <Column field="description" header="Description" sortable={true}/>  
                        <Column
                                          header="File View"
                                         body={dateTemplate}
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