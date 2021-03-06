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
          dispatch(getAapermissionsList(curentUser.userProfile.roleFkId.companyAutoId.id));          
        }                  
      }, []);
    const aapermissions={
      permission_id:0,
      permission_name:"",
      permission_status:"",
      description : "",
      long_description:"",
     
      parent_permission_id : 0,
      inserted_by:"",
      updated_by:"",
      position: "",
      tenantFkId:""

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
      const [checked,setchecked] = useState();
      const [expanded,setexpanded]= useState();
      const [effectivedate, setEffectivedate] = useState(new Date());
      const [enddate, setenddate] = useState(new Date());
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
      
      const newsetfield=()=>{
        //var meters=new Array<any>();
        if(aapermissionsData.items.length>0){                
          for(var i=0;i<aapermissionsData.items.length;i++){
            var element=aapermissionsData.items[i]; 
            var get = aapermissionsInputData.permission_id;
            var set = aapermissionsData.items[get];
            // alert(set.role_name);
           // alert(aarolesData.items[aarolesInputData.role_id].role_name);
           // alert(aarolesInputData.role_id);
            if(aapermissionsInputData.permission_id==0) {
            if (aapermissionsData.permission_name==element.permission_name)  {              
            alert("invalid entry");    
           // setValid(false); 
        }  
        else {
          if (aapermissionsInputData.permission_name==element.permission_name)  {    
            if(aapermissionsInputData.permission_name==set.permission_name)  {
              
            }        
         else{
             
         // alert("invalid entry");
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
    

      const [isValid, setValid] = useState(false);
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
      const checkValidation=()=>{
        if((aapermissionsInputData.permission_status!==null && aapermissionsInputData.permission_status!=="")    
        &&(aapermissionsInputData.description!==null && aapermissionsInputData.description!=="") 
        &&(aapermissionsInputData.long_description!==null && aapermissionsInputData.long_description!=="")
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
          const loggedInString = localStorage.getItem("AUTHDATA");
          if (loggedInString) {
            const loggedInData = JSON.parse(loggedInString);
            if (loggedInData) {
              aapermissionsInputData.updated_by = loggedInData.userProfile.userautoid.userId;
              aapermissionsInputData.inserted_by = loggedInData.userProfile.userautoid.userId;
              aapermissionsInputData.tenantFkId = loggedInData.userProfile.companyautoId;
            }
          }
          setInput({ ...aapermissionsInputData });       
          dispatch(saveAapermissions(aapermissionsInputData));
          setIsDispatchedSave(true);
          checkValidation();
         // alert("submit");
         // newsetfield();
        // setfield();
         //fieldval(rowdata);
         setTimeout(() => {
         
         // window.location.href="/user/aapermissions";
          }, 5000);
         
        }
        else{
          setShowFormMessage(true);
          alert("valid issue");
          setInput({ ...aapermissionsInputData });       
         // dispatch(saveAaroles(aarolesInputData));
        //  setIsDispatchedSave(false);
        checkValidation();
         // alert(JSON.stringify(saveAaroles(aarolesInputData)));
        //  newsetfield();
        }
      }
      const handleDelSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
          setShowFormMessage(false);
          aapermissionsInputData.permission_status = "Inactive";
          setInput({ ...aapermissionsInputData });       
          dispatch(saveAapermissions(aapermissionsInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(Aaroles(aarolesInputData)));
         // setfield();
          window.location.href="/user/aapermissions";
     
      }
      const [tableData, setTableData] = useState(new Array<any>());
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isDispatchedSave, setIsDispatchedSave] = useState(false);
      const[displayDialog, setdisplayDialog]=useState(false);
      const[displayingDialog, setdisplayingDialog]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      
      const [selectedData, setSelectedData] = useState();

      const [isPageLoaded, setPageLoaded] = useState(false);
      if(isDispatchedSave && !aapermissionsData.isLoading && aapermissionsData.isFormSubmit)
      {
        setdisplayDialog(false);
        if(userData!=null){
          dispatch(getAapermissionsList(userData.userProfile.roleFkId.companyAutoId.id));            
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
              if (element.permission_status!=="Active")  {              
              
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
      const [dataTable, setDataTable] = useState();
      
      const exportCsv = () => {
        console.log(dataTable);
        if (dataTable)
            dataTable.exportCSV();
    }
    
    const onCheckSelected=(rowData:any)=>{
      setShowMessage(false);
      if(!displayDialog){
        var data=rowData;
        //setInput(consumer);
        aapermissionsInputData=data;
        if(userData!=null){
         // aarolesInputData.updated_by= userData.userProfile.userFkId.userId;
         // aarolesInputData.inserted_by=data.inserted_by;
          //alert("data.insertedby"+data.inserted_by)                                
        }           
        //setInput(consumer);
        setInput({ ...aapermissionsInputData }); 
        setdisplayDialog(true);
        //If need to show delete button
        //setShowDelete(true);
      }
    }   
    const onCheckingSelected=(rowData:any)=>{
      setShowMessage(false);
      if(!displayingDialog){
        var data=rowData;
        //setInput(consumer);
        aapermissionsInputData=data;
        if(userData!=null){
         // aarolesInputData.updated_by= userData.userProfile.userFkId.userId;
         // aarolesInputData.inserted_by=data.inserted_by;
          //alert("data.insertedby"+data.inserted_by)                                
        }           
        //setInput(consumer);
        setInput({ ...aapermissionsInputData }); 
        setdisplayingDialog(true);
        //If need to show delete button
        //setShowDelete(true);
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
              aapermissions.inserted_by= userData.userProfile.userautoid.userId;
              aapermissions.updated_by= userData.userProfile.userautoid.userId; 
              //alert("data.insertedby"+userData.userProfile.userFkId.userId); 
              setInput({ ...aapermissions }); 
            } 
          }, 1000);
          
          setdisplayDialog(true);
          setShowDelete(false);
        }
      }
      var header = <div style={{'textAlign':'left'}}>
        
      </div>

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
            aapermissionsInputData.updated_by= userData.userProfile.userautoid.userId;
            aapermissionsInputData.inserted_by=data.inserted_by;
           // alert("data.insertedby"+data.inserted_by)                                
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
      const selectevent=(event)=>{
        setdisplayingDialog(false);
      }
      const setevent=(event)=>{
        setdisplayDialog(true);
      }
      const settevent=(event)=>{
        setdisplayDialog(false);
      }
      const status= [
        {label: 'Select Status', value: null},
        {label: 'Active', value: 'Active'},
        {label: 'InActive', value: 'InActive'} 
      ] ; 
      const [growl, setGrowl]=useState();
      const [showMessage, setShowMessage]=useState(false);
      

      if(!aapermissionsData.isLoading && aapermissionsData.isFormSubmit && isFormSubmitted){
      
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
                        </div>
                      
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="permission_name">position</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="position" name="position" value={aapermissionsInputData.position}   required onChange={handleInputChange}  />
                        
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
                          <label htmlFor="parent_permission_id">Parent Permission</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="parent_permission_id"  name="parent_permission_id" value={aapermissionsInputData.parent_permission_id} required onChange={handleInputChange}  />
                        </div>
                      </div>
                      
            
                    </div>
                  </div>
                  {isShowFormMessage&&( <Message severity="error" key={"error"} text="Form is not valid" />)}
                </div>      

                <div className="p-dialog-footer">
                  <div className="ui-dialog-buttonpane p-clearfix">
                  
                    <button onClick={settevent} className="p-button p-component p-button-text-icon-left">
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
            <Dialog header={aapermissionsInputData.permission_name} visible={displayingDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayingDialog(false) }>
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
                    <h1>Permission Management</h1>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Permission" onClick={setevent}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <div style={{textAlign:'center'}}>
                      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={exportCsv}></Button>
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
                      header={header} ref={(el) => { setDataTable(el); }}
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                     // onRowSelect={onRowSelected}
                    >             

                     <Column field="permission_name" header="Permission Name" sortable={true}/>
                        <Column field="permission_status" header="Permission Status" sortable={true}/>
                        <Column field="description" header="Description" sortable={true}/>  
                        <Column field="long_description" header="Long Description" sortable={true}/>
                        <Column field="description" header="Description" sortable={true}/> 
                        <Column field="position" header="Position" sortable={true}/>  
                        <Column field="parent_permission_id" header="Parent Permission Id" sortable={true}/>  
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
    const { aapermissionsData } = state;
    return {
      aapermissionsData
    };
  };
export default connect(mapStateToProps)(Aapermissions);