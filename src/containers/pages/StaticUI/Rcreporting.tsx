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
import {getRcreportingList, saveRcreporting, deleteRcreporting} from "../../../store/actions/Rcreporting";
import {getJobProfiles  } from "../../../store/actions/JobProfile";
import { Column } from 'primereact/column';
import {Growl} from 'primereact/growl';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { getCurrentUser } from "../../../store/selectors/Accounts";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';
import {Panel} from 'primereact/panel';
interface IRcreporting {
    dispatch: Dispatch<any>;
    rcreportingData: any;
  }
const Rcreporting: React.FC<IRcreporting> = ({ dispatch,rcreportingData
}) => {
    useEffect(() => {
        dispatch(getJobProfiles(""));
        var keys=getKeys(rcreportingInputData);
        var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
          dispatch(getRcreportingList(curentUser.userProfile.tenantFkId.id));          
        }                  
      }, []);
    const rcreporting={
      report_id:0,
      report_type:"",
      status: "",
      report_type_name : "",
      file_name:"",
      file_name1: "",
      file_name2:"",
      createdBy:"",
      updatedBy:""
    };           
     function getKeys(obj){
        var keys = new Array();
        for(var key in obj){
           keys.push(key);
        }
        return keys;
     }
      let [rcreportingInputData, setInput] = useState(rcreporting);
      const [userData, setUserData] = useState();
      const [isEmailValid, setEmailValid] = useState(false);

      const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        
        setInput({ ...rcreportingInputData, [name]: value });    
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
        if((rcreportingInputData.report_type!==null && rcreportingInputData.report_type!==""  )
        &&(rcreportingInputData.report_type_name!==null && rcreportingInputData.report_type_name!=="")    
        &&(rcreportingInputData.file_name!==null && rcreportingInputData.file_name!=="")    
        &&(rcreportingInputData.file_name1!==null && rcreportingInputData.file_name1!=="")    
        &&(rcreportingInputData.file_name2!==null && rcreportingInputData.file_name2!=="")   
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
          setInput({ ...rcreportingInputData });       
          dispatch(saveRcreporting(rcreportingInputData));
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
      if(isDispatchedSave && !rcreportingData.isLoading && rcreportingData.isFormSubmit)
      {
        setdisplayDialog(false);
        if(userData!=null){
          dispatch(getRcreportingList(userData.userProfile.tenantFkId.id));            
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
        if (!isPageLoaded && !rcreportingData.isLoading) {
          var meters=new Array<any>();
          if(rcreportingData.items.length>0){                
            for(var i=0;i<rcreportingData.items.length;i++){
              var element=rcreportingData.items[i];             
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
          setInput(rcreporting);   
          //consumerInputData=consumer; 
          setInput({ ...rcreporting }); 
          setTimeout(() => {
            if(userData!=null){
              rcreporting.createdBy= userData.userProfile.userFkId.userId;
              rcreporting.updatedBy= userData.userProfile.userFkId.userId;                    
              setInput({ ...rcreporting }); 
            } 
          }, 1000);
          
          setdisplayDialog(true);
          setShowDelete(false);
        }
      }
      

      function successMessage( key:string){     
        return <Message severity="success" key={key} text="Consumer Saved Successfully." />
      }
      const onSelectionChangeed=(e) => {setSelectedData(e.value)}
      const onRowSelected=(event)=>{
        setShowMessage(false);
        if(!displayDialog){
          var data=event.data;
          //setInput(consumer);
          rcreportingInputData=data;
          if(userData!=null){
            rcreportingInputData.updatedBy= userData.userProfile.userFkId.userId;
            rcreportingInputData.createdBy=data.createdBy;                                
          }           
          //setInput(consumer);
          setInput({ ...rcreportingInputData }); 
          setdisplayDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
      }     
      
      const handleDeleteSubmit=(event)=>{
        dispatch(deleteRcreporting(selectedData));        
      }

      const [growl, setGrowl]=useState();
      const [showMessage, setShowMessage]=useState(false);

      if(!rcreportingData.isLoading && rcreportingData.isFormSubmit && isFormSubmitted){
        if(rcreportingData.status.search("Success") || rcreportingData.status.search("success") ){
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
        <div className="p-grid p-fluid">
        <div className="p-col-12">
                <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                    <div className="p-messages-wrapper">
                        <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                        <ul>
                            <li>
                                <span className="p-messages-detail">ProcessScheduler menu used to create a new  Scheduler... 
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                <div className="p-messages-wrapper">
                    <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                    <ul>
                        <li>
                            <span className="p-messages-detail">ProcessScheduler menu used to create a new  Scheduler... 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card card-w-title">
         
            <h1>Create New Scheduler </h1>
      <Panel header="Scheduler " toggleable={true}>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">report_type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type" name="report_type" value={rcreportingInputData.report_type} required onChange={handleInputChange} />
                        </div>
                    
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name">Report_type_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type_name" name="report_type_name" value={rcreportingInputData.report_type_name} required onChange={handleInputChange} />
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">file_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name" name="file_name" value={rcreportingInputData.file_name} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">file_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name1" name="file_name1" value={rcreportingInputData.file_name1} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="status" name="status" value={rcreportingInputData.status} onChange={handleInputChange} />
                        </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="file_name">file_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={rcreportingInputData.file_name2} onChange={handleInputChange} />
                        </div>
                      </div>
                         
                    </div>
              
             
       
         </Panel>
         <Panel header="Scheduler Details" toggleable={true}>
<Dialog header="Add Configuration" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                <div className="p-grid card-w-title">    
                <div className="p-col-12">    
                    <div className="card summary">                                               
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type">report_type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type" name="report_type" value={rcreportingInputData.report_type} required onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="report_type_name">Report_type_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="report_type_name" name="report_type_name" value={rcreportingInputData.report_type_name} required onChange={handleInputChange} />
                        </div>
                      </div>
                      
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">file_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name" name="file_name" value={rcreportingInputData.file_name} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">file_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name1" name="file_name1" value={rcreportingInputData.file_name1} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="consumerAddress">file_name</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="file_name2" name="file_name2" value={rcreportingInputData.file_name2} onChange={handleInputChange} />
                        </div>
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
                    <h1>Rcreport</h1>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {rcreportingData.isLoading && <ProgressSpinner />}
                      {!rcreportingData.isLoading && (                        
                    <DataTable
                      value={tableData}
                      paginatorPosition="bottom"
                      selectionMode="single"
                      header="Consumers"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                      onRowSelect={onRowSelected}
                    >             

                     <Column field="consumeName" header="Name" sortable={true}/>
                        <Column field="report_type" header="Report Type" sortable={true}/>
                        <Column field="report_type_name" header="Report Type name" sortable={true}/>
                        <Column field="status" header="status" sortable={true}/>
                        <Column field="file_name" header="file_name" sortable={true}/>  
                    </DataTable>
                 
                    )}
           </div>
           </div>
              </div>
            </div>
           </Panel>
                </div>
              </div>
            </div>
       
      );
};

const mapStateToProps = (state: any) => {
    const {  rcreportingData } = state;
    return {
      rcreportingData
    };
  };
export default connect(mapStateToProps)(Rcreporting);