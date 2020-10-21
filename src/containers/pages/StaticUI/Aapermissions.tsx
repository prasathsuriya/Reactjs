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
import {getAapermissionsList, saveAapermissions, deleteAapermissions} from "../../../store/actions/Aapermissions";
import {getJobProfiles  } from "../../../store/actions/JobProfile";
import { Column } from 'primereact/column';
import {Growl} from 'primereact/growl';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { getCurrentUser } from "../../../store/selectors/Accounts";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';

interface IAapermissions {
    dispatch: Dispatch<any>;
    aapermissionsData: any;
  }
const Aapermissions: React.FC<IAapermissions> = ({ dispatch,aapermissionsData
}) => {
    useEffect(() => {
        dispatch(getJobProfiles(""));
        var keys=getKeys(aapermissionsInputData);
        //alert(JSON.stringify(aapermissionsData));
        var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
          dispatch(getAapermissionsList(curentUser.userProfile.tenantFkId.id));          
        }                  
      }, []);
    const aapermissions={
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
     function getKeys(obj){
        var keys = new Array();
        for(var key in obj){
           keys.push(key);
        }
        return keys;
     }
      let [aapermissionsInputData, setInput] = useState(aapermissions);
      const [userData, setUserData] = useState();
      const [isEmailValid, setEmailValid] = useState(false);

      const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setInput({ ...aapermissionsInputData, [name]: value });
        if (event.target.id === "consumerEmailid") {
          if (!event.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
            setEmailValid(false);
          }
          else
          setEmailValid(true);
        } 
        checkValidation();  
      };
      
    

      const [isValid, setValid] = useState(false);
  
      const checkValidation=()=>{
        if((aapermissionsInputData.permission_name!==null && aapermissionsInputData.permission_name!=="" ) 
        &&(aapermissionsInputData.permission_status!==null && aapermissionsInputData.permission_status!=="")    
        &&(aapermissionsInputData.description!==null && aapermissionsInputData.description!=="") 
        &&(aapermissionsInputData.long_description!==null && aapermissionsInputData.long_description!=="")
        &&(aapermissionsInputData.icare_unit!==null && aapermissionsInputData.icare_unit!=="")       
        &&(aapermissionsInputData.type!==null && aapermissionsInputData.type!=="")  
        )
        {
          setValid(true);
        }
        else
        {
          setValid(false); 
        }

      }
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        if(isValid){  
          setShowFormMessage(false);
          setInput({ ...aapermissionsInputData });       
          dispatch(saveAapermissions(aapermissionsInputData));
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
      if(isDispatchedSave && !aapermissionsData.isLoading && aapermissionsData.isFormSubmit)
      {
        setdisplayDialog(false);
        if(userData!=null){
          dispatch(getAapermissionsList(userData.userProfile.tenantFkId.id));            
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

     
      function onClickAdd(event) {
        if(!displayDialog){      
          setShowMessage(false);
          setInput(aapermissions);   
          //consumerInputData=consumer; 
          setInput({ ...aapermissions }); 
          setTimeout(() => {
            if(userData!=null){
              aapermissions.inserted_by= userData.userProfile.userFkId.userId;
              aapermissions.updated_by= userData.userProfile.userFkId.userId; 
             // alert("data.insertedby"+userData.userProfile.userFkId.userId); 
              setInput({ ...aapermissions }); 
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
      const onRowSelected=(event)=>{
        setShowMessage(false);
        if(!displayDialog){
          var data=event.data;
          //setInput(consumer);
          aapermissionsInputData=data;
          if(userData!=null){
            aapermissionsInputData.updated_by= userData.userProfile.userFkId.userId;
            aapermissionsInputData.inserted_by=data.inserted_by;
         //   alert("data.insertedby"+data.inserted_by)                                
          }           
          //setInput(consumer);
          setInput({ ...aapermissionsInputData }); 
          setdisplayDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
      }     
      
      const handleDeleteSubmit=(event)=>{
        dispatch(deleteAapermissions(selectedData));        
      }
      const status= [
        {label: 'Select Status', value: null},
        {label: 'Active', value: 'Active'},
        {label: 'InActive', value: 'InActive'} 
      ] ; 
      const [growl, setGrowl]=useState();
      const [showMessage, setShowMessage]=useState(false);
      

      if(!aapermissionsData.isLoading && aapermissionsData.isFormSubmit && isFormSubmitted){
        if(aapermissionsData.status.search("Success") || aapermissionsData.status.search("success") ){
          setShowMessage(true);
          growl.show({severity: 'success', summary: 'Success', detail: 'User Saved successfully'});
        }
        else{
          growl.show({severity: 'warn', summary: 'Warn', detail: 'There are unsaved changes'});
          setShowMessage(false);
        }
        setIsFormSubmitted(false);
      }

      function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
    return (    
        <div>

<Dialog header="Add Pemissions" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                <div className="p-grid card-w-title">    
                <div className="p-col-12">    
                    <div className="card summary">                                               
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="permission_name">Name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="permission_name" name="permission_name" value={aapermissionsInputData.permission_name} required onChange={handleInputChange} />
                          { isFormSubmitted && aapermissionsInputData.permission_name==="" && (requiredMessage("fn"))}
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="permission_status">Status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          < Dropdown id="permission_status" name="permission_status" options={status} value={aapermissionsInputData.permission_status} onChange={handleInputChange} required  autoWidth={false}   />
                          { isFormSubmitted && aapermissionsInputData.permission_status==="" && ( requiredMessage("fn"))}
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="description" name="description" value={aapermissionsInputData.description} required onChange={handleInputChange} />
                          { isFormSubmitted && aapermissionsInputData.description==="" && (requiredMessage("fn"))}
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="long_description">Long Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="long_description" name="long_description" value={aapermissionsInputData.long_description} onChange={handleInputChange} />
                          { isFormSubmitted && aapermissionsInputData.long_description==="" && (requiredMessage("fn"))}
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="icare_unit">Icare Unit</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="icare_unit" name="icare_unit" value={aapermissionsInputData.icare_unit} required onChange={handleInputChange} />
        
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="parent_permission_id">Parent Permission</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="parent_permission_id"  name="parent_permission_id" value={aapermissionsInputData.parent_permission_id} required onChange={handleInputChange}  />
          
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="type">Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="type"  name="type" value={aapermissionsInputData.type} required onChange={handleInputChange}  />
                          { isFormSubmitted && aapermissionsInputData.type==="" && (requiredMessage("fn"))}
                        </div>
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
                    <h1>Aapermissions</h1>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {aapermissionsData.isLoading && <ProgressSpinner />}
                      {!aapermissionsData.isLoading && (                        
                    <DataTable
                      value={tableData}
                      paginatorPosition="bottom"
                      selectionMode="single"
                      header="Aapermissions"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                      onRowSelect={onRowSelected}
                    >             

                     <Column field="permission_name" header="permission name" sortable={true}/>
                        <Column field="permission_status" header="Permission status" sortable={true}/>
                        <Column field="description" header="Description" sortable={true}/>  
                        <Column field="long_description" header="Long Description" sortable={true}/>
                        <Column field="icare_unit" header="Icare Unit" sortable={true}/>
                        <Column field="description" header="Description" sortable={true}/>  
                        <Column field="parent_permission_id" header="Parent Permission Id" sortable={true}/>  
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
    const { aapermissionsData } = state;
    return {
      aapermissionsData
    };
  };
export default connect(mapStateToProps)(Aapermissions);