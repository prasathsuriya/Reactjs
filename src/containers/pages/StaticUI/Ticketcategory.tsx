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
import {getTicketcategoriesList } from "../../../store/actions/Ticketcategory";
import {saveTicketcategories } from "../../../store/actions/Ticketcategory";
import { savesubticketcategories } from '../../../store/sagas/Ticketsubcategory';
interface IAapermissions {
    dispatch: Dispatch<any>;
    aapermissionsData: any;
    ticketcategriesData: any;
  }
const Ticketcategory: React.FC<IAapermissions> = ({ dispatch,aapermissionsData, ticketcategriesData
}) => {
    useEffect(() => {
        dispatch(getJobProfiles(""));
        var keys=getKeys(aapermissionsInputData);
        //alert(JSON.stringify(aapermissionsData));
        var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
          dispatch(getAapermissionsList(curentUser.userProfile.tenantFkId.id)); 
          dispatch(getTicketcategoriesList(curentUser.userProfile.tenantFkId.id));
        }                  
      }, []);
    const aapermissions={
        ticketdescriptionid:0,
        description:"",
        department:"",
        status : ""
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
        if((aapermissionsInputData.description!==null && aapermissionsInputData.description!=="")    
        &&(aapermissionsInputData.department!==null && aapermissionsInputData.department!=="") 
        &&(aapermissionsInputData.status!==null && aapermissionsInputData.status!=="") 
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
          newsetfield();
          checkValidation();
          dispatch(saveTicketcategories(aapermissionsInputData));
          setIsDispatchedSave(true);
          checkValidation();
         // alert("submit");
         
        // setfield();
         //fieldval(rowdata);
         window.location.href="/staticui/aapermissions";
        } else{
            // setShowFormMessage(true);
          //  alert("valid issue");
             setInput({ ...aapermissionsInputData });       
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
          aapermissionsInputData.status="Inactive";
          setShowFormMessage(false);
          setInput({ ...aapermissionsInputData });       
          dispatch(savesubticketcategories(aapermissionsInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(Aaroles(aarolesInputData)));
         // setfield();
         // window.location.href="/staticui/aapermissions";
     
      }
      const newsetfield=()=>{
        //var meters=new Array<any>();
        if(ticketcategriesData.items.length>0){                
          for(var i=0;i<ticketcategriesData.items.length;i++){
            var element=ticketcategriesData.items[i]; 
            var get = aapermissionsInputData.ticketdescriptionid;
            var set = ticketcategriesData.items[get];
            // alert(set.role_name);
           // alert(aarolesData.items[aarolesInputData.role_id].role_name);
           // alert(aarolesInputData.role_id);
            if(aapermissionsInputData.ticketdescriptionid==0) {
            if (aapermissionsInputData.description==element.description)  {              
            alert("invalid entry");    
            setValid(false); 
        }  
        else {
          if (aapermissionsInputData.description==element.description)  {    
            if(aapermissionsInputData.description==set.description)  {
              
            }        
         else{
             
          alert("invalid entry");
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
    
      const [tableData, setTableData] = useState(new Array<any>());
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isDispatchedSave, setIsDispatchedSave] = useState(false);
      const[displayDialog, setdisplayDialog]=useState(false);
      const[displayingDialog, setdisplayingDialog]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      
      const [selectedData, setSelectedData] = useState();

      const [isPageLoaded, setPageLoaded] = useState(false);
      if(isDispatchedSave && !ticketcategriesData.isLoading && ticketcategriesData.isFormSubmit)
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
        if (!isPageLoaded && !ticketcategriesData.isLoading) {
          var meters=new Array<any>();
          if(ticketcategriesData.items.length>0){                
            for(var i=0;i<ticketcategriesData.items.length;i++){
              var element=ticketcategriesData.items[i]; 
              if (element.status!=="Active")  {              
              
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
        {label: 'InActive', value: 'Inactive'} 
      ] ; 
      const [growl, setGrowl]=useState();
      const [showMessage, setShowMessage]=useState(false);
      

      if(!ticketcategriesData.isLoading && ticketcategriesData.isFormSubmit && isFormSubmitted){
        if(ticketcategriesData.status.search("Success") || ticketcategriesData.status.search("success") ){
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
                          <label htmlFor="department">department</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="department" name="department" value={aapermissionsInputData.department} required onChange={handleInputChange} />
                        </div>
                      
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">Status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        < Dropdown id="status" name="status" options={status} value={aapermissionsInputData.status} onChange={handleInputChange} required  autoWidth={false}   />
                         
                        </div>
                      </div>
                      <div className="p-grid">
                      
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="description" name="description" value={aapermissionsInputData.description} required onChange={handleInputChange} />
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
            <Dialog header="confirm" visible={displayingDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayingDialog(false) }>
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
                    <h1>Description</h1>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="add category" onClick={setevent}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <div style={{textAlign:'center'}}>
                      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={exportCsv}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {ticketcategriesData.isLoading && <ProgressSpinner />}
                      {!ticketcategriesData.isLoading && (                        
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

                     <Column field="ticketdescriptionid" header="S.no" sortable={true}/>
                        <Column field="description" header="Description" sortable={true}/>
                        <Column field="department" header="Department" sortable={true}/>  
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
    const { aapermissionsData, ticketcategriesData} = state;
    return {
      aapermissionsData,ticketcategriesData
    };
  };
export default connect(mapStateToProps)(Ticketcategory);