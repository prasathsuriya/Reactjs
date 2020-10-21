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
import {saveTickets,getTicketsList } from "../../../store/actions/Tickets";
import {getTicketcategoriesList } from "../../../store/actions/Ticketcategory";
import {getTicketsubcategoriesList } from "../../../store/actions/Ticketsubcategory";
import moment from "moment";
import { getUsersList, saveUser, updateUserStatus } from "../../../store/actions/CreateUser";

interface IRcreporting {
    dispatch: Dispatch<any>;
    ticketcategriesData: any;
    subticketcategriesData: any;
    ticketsData: any;
    newUserData:any; 
  }
const Showtickets: React.FC<IRcreporting> = ({ dispatch,
    ticketcategriesData,
    subticketcategriesData,
    ticketsData,
    newUserData
}) => {
    useEffect(() => {
        dispatch(getJobProfiles(""));
        var curentUser=getCurrentUser();
       
        if(curentUser!=null){
          setUserData(curentUser);
          dispatch(getTicketsList(curentUser.userProfile.tenantFkId.id));   
          dispatch(getUsersList(rcreportData.tenantId));
        }                  
      }, []);
     
    const rcreporting={
        meterid:0,
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
        insert_datetime:"",
        status:1,
        tenantId:0
    };           
    const workflowinput={
        meterid:0,
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
        status:1,
        tenantId:0,
        role:"",
        userid:""
    };    
     function getKeys(obj){
        var keys = new Array();
        for(var key in obj){
           keys.push(key);
        }
        return keys;
     }
      let [workflowData, setInput] = useState(rcreporting);
      let [rcreportData, setrcreport] = useState(workflowinput);
      const [userData, setUserData] = useState();
      const [isEmailValid, setEmailValid] = useState(false);
      const [newtenant, setnewtenant]= useState("");
const loggedInString = localStorage.getItem("AUTHDATA");
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      rcreportData.updated_by = loggedInData.userProfile.userFkId.userId;
      rcreportData.userid = loggedInData.userProfile.userFkId.userId;
      rcreportData.inserted_by = loggedInData.userProfile.userFkId.userId;
      rcreportData.tenantId =
      loggedInData.userProfile.userFkId.roleFkId.tenantFkId.id;
      rcreportData.role =
      loggedInData.userProfile.userFkId.roleFkId.role_name;
    }
  }
      const handleInputChange = (event: any) => {
        if (event.target.id === "ticketid") {
         
            workflowData.ticketid = event.target.value;
          }
       else if (event.target.id === "meterid") {
         
            workflowData.meterid = event.target.value;
          } else if (event.target.id === "priority") {
             workflowData.priority = event.target.value;
          } else if (event.target.id === "type") {
            workflowData.tickettype = event.target.value;
          } else if (event.target.id === "newdescription") {
            workflowData.ticketcategoryid = event.target.value;
            workflowData.ticketdescriptionid = event.target.value.ticketdescriptionid;
          } else  if (event.target.id === "newsubdescription") {
              workflowData.ticketsubcategoryid = event.target.value;
            }
           else if (event.target.id === "details") {
              workflowData.details = event.target.value;
            }   else if (event.target.id === "inserted_by") {
                workflowData.inserted_by = event.target.value;
              } else if (event.target.id === "inserted_datetime") {
                workflowData.insert_datetime = event.target.value;
              } 
            else if (event.target.id === "assign") {
            workflowData.user = event.target.value;
          } else if (event.target.id === "callfrom") {
            workflowData.callfromname = event.target.value;
          } else if (event.target.id === "phonenumber") {
              workflowData.phonenumber = event.target.value;
            } 
          setInput({...workflowData});
          
            setInput({...workflowData});
      };
      const handlenewInputChange = (event: any) => {
        if (event.target.id === "meterid") {
         
            rcreportData.meterid = event.target.value;
          } else if (event.target.id === "priority") {
             rcreportData.priority = event.target.value;
          } else if (event.target.id === "type") {
            rcreportData.tickettype = event.target.value;
          } else if (event.target.id === "newdescription") {
            rcreportData.ticketcategoryid = event.target.value;
              rcreportData.ticketdescriptionid = event.target.value.ticketdescriptionid;
          } else  if (event.target.id === "newsubdescription") {
              rcreportData.ticketsubcategoryid = event.target.value;
              rcreportData.ticketsubdescriptionid = event.target.value.ticketsubdescriptionid;
            }
           else if (event.target.id === "details") {
              rcreportData.details = event.target.value;
            }  else if (event.target.id === "assign") {
            rcreportData.user = event.target.value;
            rcreportData.assignedto = event.target.value.userFkId.userId;
          } else if (event.target.id === "insert_datetime") {
            rcreportData.callfromname = event.target.value;
          } else if (event.target.id === "phonenumber") {
              rcreportData.phonenumber = event.target.value;
            } 
          setrcreport({...rcreportData});
          
            setrcreport({...rcreportData});
      };

      const [isValid, setValid] = useState(false);
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const handleSubmit = (event: any) => {    
       /*     
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
        */
       
       rcreportData.ticketid=newtenant;
      // setrcreport(rcreportData ); 
      // alert(JSON.stringify(rcreportData));
       rcreportData.status = 1;
       setrcreport(rcreportData);
       dispatch(saveTickets(rcreportData));  
      
      }

      const getRowTemplate=(rowData:any , column:any)=> {
        return <div>
               <a >{rowData.role_name}</a>
           
        </div>;
    }
    const [roleList, setRoleList] = useState([]);
    const [isPageLoader, setPageLoader] = useState(false)
    
      const handleSet = (event: any) => {    
        /*     
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
         */alert(JSON.stringify(workflowData));
         setPageLoaded(false);
         if (!isPageLoaded && !ticketsData.isLoading) {
            var meters=new Array<any>();
             dispatch(getTicketsList);  
            if(ticketsData.items.length>0){                
              for(var i=0;i<ticketsData.items.length;i++){
                var element=ticketsData.items[i]; 
                if(element.ticketid.ticketid==workflowData.ticketid){            
                   if(element.ticketid.meterid==workflowData.meterid){
                    meters.push(element);
                   }else{
                    meters.push(element);
                   }
                } else if (element.ticketid.meterid==workflowData.meterid){            
                    meters.push(element);
                    }
              }      
              setPageLoaded(true);
              setTableData(meters);   
             // alert(meters);
            }     
          }
           
       }
      const [tableData, setTableData] = useState(new Array<any>());
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isDispatchedSave, setIsDispatchedSave] = useState(false);
      const[displayDialog, setdisplayDialog]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      
      const [selectedData, setSelectedData] = useState();

      const [isPageLoaded, setPageLoaded] = useState(false);
      loadGrid();
      function loadGrid(){
       // alert(rcreportData.role);
        if( rcreportData.role=="ADMIN"){
        if (!isPageLoaded && !ticketsData.isLoading) {
          var meters=new Array<any>();
          
         ticketsData.items.sort(function(a,b){
            return parseInt(a.ticketid.ticketid)  - parseInt(b.ticketid.ticketid);});  
            
          if(ticketsData.items.length>0){  
               var count =0 ;
               var start = false; 
            for(var i=0;i<ticketsData.items.length;i++){
             
                for (var j = 0; j < meters.length; j++) 
                {       
                    

                        if (ticketsData.items[i].ticketid.ticketid == meters[j].ticketid.ticketid) 
                        {
                           // meters.push(ticketsData.items[i]); // means there are duplicate values
                              
                            start = true; 
                            
                        }     
    
                }
                count++;
                if (count == 1 && start == false) { 
                    meters.push(ticketsData.items[i]); 
                } 
                start = false; 
                count = 0;

             // var element=ticketsData.items[i]; 
             
                
            }      
            
            setPageLoaded(true);
            setTableData(meters);   
          }     
        }
      } else if (rcreportData.role=="REPORT_USER"){
        if (!isPageLoaded && !ticketsData.isLoading) {
          var meters=new Array<any>();
          
         ticketsData.items.sort(function(a,b){
            return parseInt(a.ticketid.ticketid)  - parseInt(b.ticketid.ticketid);});  
            
          if(ticketsData.items.length>0){  
               var count =0 ;
               var start = false; 
            for(var i=0;i<ticketsData.items.length;i++){
             
                for (var j = 0; j < meters.length; j++) 
                {       
                    

                        if (ticketsData.items[i].ticketid.ticketid == meters[j].ticketid.ticketid) 
                        {
                           // meters.push(ticketsData.items[i]); // means there are duplicate values
                              
                            start = true; 
                            
                        }     
    
                }
                count++;
                if (count == 1 && start == false) { 
                  if(ticketsData.items[i].ticketid.assignedto == rcreportData.userid ){
                    meters.push(ticketsData.items[i]); 
                  } else if (ticketsData.items[i].ticketid.inserted_by == rcreportData.userid ){
                    meters.push(ticketsData.items[i]); 
                  }
                } 
                start = false; 
                count = 0;

             // var element=ticketsData.items[i]; 
             
                
            }      
            
            setPageLoaded(true);
            setTableData(meters);   
          }     
        }
      }
      }
      loaderGrid();
    function loaderGrid(){
      if (
          !isPageLoader &&
          !newUserData.isListLoading 
        ) {
          var table = newUserData.userList;
          console.log(table);    
          if (table.length > 0) {
            table=table.filter(x=>x.id!==userData.userProfile.id);
            for (var i = 0; i < table.length; i++) {
              table[i]["statusValue"] =
                table[i].userFkId.status === 1 ? "Active" : "InActive";
            }
          }
         
          setRoleList(table);
          setPageLoader(true);
        //  alert(JSON.stringify(roleList));
        }
    }
      const rowfileClick = (rowData:any) => {
        var now = moment().format("DD-MM-YYYYThh:mm:ss");
        var mod = rowData.ticketid.insert_datetime;
        
      
          var msDiff = new Date().getTime() - new Date(rowData.ticketid.insert_datetime).getTime(); 
          var datedifference = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        return <div>
               <h1>{datedifference}</h1>
        </div>
    }

    const rowselectClick = (rowData:any) => {
        var now = moment().format("DD-MM-YYYYThh:mm:ss");
        var mod = rowData.ticketid.insert_datetime;
        
      
          var msDiff = new Date().getTime() - new Date(rowData.update_datetime).getTime(); 
          var datedifference = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        return <div>
               <h1>{datedifference}</h1>
        </div>
    }
     
      function onClickAdd(event) {
        if(!displayDialog){      
          setShowMessage(false);
          setrcreport(rcreportData);   
          //consumerInputData=consumer; 
          setrcreport({ ...rcreportData }); 
          setTimeout(() => {
            if(userData!=null){
              rcreportData.inserted_by= userData.userProfile.userFkId.userId;
              rcreportData.updated_by= userData.userProfile.userFkId.userId;                    
              setrcreport({ ...rcreportData }); 
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
          rcreportData=data;
          
          if(userData!=null){
            rcreportData.updated_by= userData.userProfile.userFkId.userId;
            rcreportData.inserted_by=data.createdBy;  

          }           
          //setInput(consumer);
          setrcreport({ ...rcreportData }); 
          if(data.ticketid.status==1){
              setnewtenant(data.ticketid.ticketid);
           // rcreportData.ticketid=data.ticketid.ticketid;
            setrcreport({ ...rcreportData }); 
          setdisplayDialog(true);
        //  alert(newtenant);
          //If need to show delete button
          //setShowDelete(true);
          }
        }
      }     
      
      const handleDeleteSubmit=(event)=>{
        
       // alert(JSON.stringify(rcreportData));
        rcreportData.ticketid=newtenant;
        // setrcreport(rcreportData ); 
        // alert(JSON.stringify(rcreportData));
        rcreportData.status = 0;
        setrcreport(rcreportData);
        dispatch(saveTickets(rcreportData));        
      }
      const handleset=(event)=>{
        
     //  alert(JSON.stringify(workflowData));

      }

      const [growl, setGrowl]=useState();
      const [showMessage, setShowMessage]=useState(false);

      if(!ticketsData.isLoading && ticketsData.isFormSubmit && isFormSubmitted){
        if(ticketsData.status.search("Success") || ticketsData.status.search("success") ){
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
                                <span className="p-messages-detail">Ticket management used to Assign Ticket... 
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
                            <span className="p-messages-detail">Ticket management
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card card-w-title">
         
            <h1>Ticket Search </h1>
      <Panel header="Tickets " toggleable={true}>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="ticketid">Ticket ID</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="ticketid" name="ticketid" value={workflowData.ticketid} required onChange={handleInputChange} />
                        </div>
                        
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="meterid">Meter ID</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="meterid" name="meterid" value={workflowData.meterid} required onChange={handleInputChange} />
                        </div>
                      </div>
                      
                    
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="priority">Priority</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="priority" name="report_type_name" value={workflowData.priority} required onChange={handleInputChange} />
                        </div>
                     
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="type">Type</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="type" name="type" value={workflowData.tickettype} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="newdescription">Category</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="newdescription" name="newdescription" value={workflowData.ticketcategoryid} onChange={handleInputChange} />
                        </div>
                    
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="newsubdescription">Sub category</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="newsubdescription" name="newsubdescription" value={workflowData.ticketsubcategoryid} onChange={handleInputChange} />
                        </div>
                        </div>
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="inserted_by">Inserted By</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="inserted_by" name="inserted_by" value={workflowData.inserted_by} onChange={handleInputChange} />
                        </div>
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="insert_datetime">Inserted Datetime</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="insert_datetime" name="inserted_datetime" value={workflowData.insert_datetime} onChange={handleInputChange} />
                        </div>
                        </div>
                        <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="assign">Assigned To</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="assign" name="assign" value={workflowData.user} onChange={handleInputChange} />
                        </div>
                      </div>
                   
                      <div className="p-grid">
                <div className="p-col-12 p-md-3">
                  <Button
                    label="Submit"
                    onClick={handleSet}
                    type="button"
                    className="generateButton"
                    style={{ width: 200 }}
                  />
                </div>
              </div>
             
       
         </Panel>
         <Panel header="Ticket Details" toggleable={true}>
<Dialog header={newtenant} visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  <ScrollPanel style={{ width: '100%', height: '400px' }}>
                <div className="p-grid card-w-title">    
                <div className="p-col-12">    
                    <div className="card summary">                                               
                      <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="assignto">Assign to</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="assign" options={roleList} optionLabel="userFkId.userId" value={rcreportData.user} onChange={handlenewInputChange} required  autoWidth={false} />
                        </div>
                      </div>
                         
                    </div>
                  </div>

                </div>      

                <div className="p-dialog-footer">
                  <div className="ui-dialog-buttonpane p-clearfix">
                  
                    <button onClick={handleDeleteSubmit} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">close</span>
                    </button>
                     
                  
                    <button onClick={handleSubmit} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-check p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">assign</span>
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
                    <h1>Tickets</h1>
                    <div style={{textAlign:'left'}}>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                    <Growl ref={(el) => setGrowl(el)} />
                      {showMessage && (successMessage("Success"))}              
                      {ticketsData.isLoading && <ProgressSpinner />}
                      {!ticketsData.isLoading && (                        
                    <DataTable
                      value={tableData}
                      paginatorPosition="bottom"
                      selectionMode="single"
                      header="tickets"
                      paginator={true}
                      rows={10}
                      responsive={true}
                      alwaysShowPaginator={false}
                      selection={selectedData}
                      onSelectionChange={onSelectionChangeed}
                      onRowSelect={onRowSelected}
                    >             

                     <Column field="ticketid.ticketid" header="Ticketid" sortable={true}/>
                        <Column field="details" header="Details" sortable={true}/>
                        <Column field="ticketid.inserted_by" header="Assigned_by" sortable={true}/>
                        <Column field="assignedto" header="Assigned_to" sortable={true}/>
                        <Column field="ticketid.insert_datetime" header="Assigned Date" sortable={true}/>  
                        <Column
                                          header="aging"
                                         body={rowfileClick}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
                        <Column
                                          header="aging as per user"
                                         body={rowselectClick}
                                         style={{ textAlign: "center", width: "8em" }}
                                        />
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
    const {  ticketcategriesData,
        subticketcategriesData,
        ticketsData,
        newUserData} = state;
    return {
        ticketcategriesData,
        subticketcategriesData,
        ticketsData,
        newUserData
    };
  };
export default connect(mapStateToProps)(Showtickets);