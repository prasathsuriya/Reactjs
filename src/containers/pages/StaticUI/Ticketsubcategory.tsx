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
import {getTicketsubcategoriesList  } from "../../../store/actions/Ticketsubcategory";
import {saveTicketsubcategories } from "../../../store/actions/Ticketsubcategory";
import {getTicketcategoriesList } from "../../../store/actions/Ticketcategory";
import { AaapermissionData } from '../../../store/reducers/Aaapermission';
import { savesubticketcategories } from '../../../store/sagas/Ticketsubcategory';
interface IAapermissions {
    dispatch: Dispatch<any>;
    aapermissionsData: any;
    ticketcategriesData: any;
    subticketcategriesData: any;
  }
const Ticketsubcategory: React.FC<IAapermissions> = ({ dispatch,aapermissionsData, ticketcategriesData,subticketcategriesData
}) => {
    useEffect(() => {
        dispatch(getJobProfiles(""));
        var keys=getKeys(aapermissionsInputData);
        //alert(JSON.stringify(aapermissionsData));
        var curentUser=getCurrentUser();
        if(curentUser!=null){
          setUserData(curentUser);
          dispatch(getAapermissionsList(curentUser.userProfile.roleFkId.companyAutoId.id)); 
          dispatch(getTicketsubcategoriesList(curentUser.userProfile.roleFkId.companyAutoId.id));
          dispatch(getTicketcategoriesList(curentUser.userProfile.roleFkId.companyAutoId.id));
        }                  
      }, []);
    const aapermissions={
        ticketsubdescriptionid:0,
        ticketdescriptionid:"",
        subdescription:"",
        status : 0,
        user:""
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
        if (event.target.id === "subdescription") {
            aapermissionsInputData.subdescription = event.target.value;
          }   else if (event.target.id === "description") {
            aapermissionsInputData.user= event.target.value;
            aapermissionsInputData.ticketdescriptionid= event.target.value.ticketdescriptionid;
           // alert(aapermissionsInputData.ticketdescriptionid);
            setticketid(event.target.value.ticketdescriptionid);
          } else if (event.target.id === "status") {
            aapermissionsInputData.status = event.target.value;
          } 
          
          setInput({...aapermissionsInputData});
          checkValidation(); 
          newsetfield();
      };
      
      const newsetfield=()=>{
        //var meters=new Array<any>();
        if(subticketcategriesData.items.length>0){                
          for(var i=0;i<subticketcategriesData.items.length;i++){
            var element=subticketcategriesData.items[i]; 
            var get = aapermissionsInputData.ticketsubdescriptionid;
            var set = subticketcategriesData.items[get];
            // alert(set.role_name);
           // alert(aarolesData.items[aarolesInputData.role_id].role_name);
           // alert(aarolesInputData.role_id);
            if(aapermissionsInputData.ticketsubdescriptionid==0) {
            if (aapermissionsInputData.subdescription==element.subdescription)  {              
           // alert("invalid entry");    
            setValid(false); 
        }  
        else {
          if (aapermissionsInputData.subdescription==element.subdescription)  {    
            if(aapermissionsInputData.subdescription==set.subdescription)  {
              
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
      
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        if(isValid){ 
          setShowFormMessage(false);
          aapermissionsInputData.ticketdescriptionid = ticketid;
         // alert(aapermissionsInputData.ticketdescriptionid);
          setInput({ ...aapermissionsInputData });  
          checkValidation();
          newsetfield();
          dispatch(saveTicketsubcategories(aapermissionsInputData));
          setIsDispatchedSave(true);
         // alert("submit");
          newsetfield();
        // setfield();
         //fieldval(rowdata);
         window.location.href="/staticui/aapermissions";
        }else{
            // setShowFormMessage(true);
           // alert("valid issue");
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
           aapermissionsInputData.status=0;
           aapermissionsInputData.ticketdescriptionid = ticketid;
          setShowFormMessage(false);
          setInput({ ...aapermissionsInputData });       
          dispatch(savesubticketcategories(aapermissionsInputData));
          setIsDispatchedSave(true);
          //alert(JSON.stringify(Aaroles(aarolesInputData)));
         // setfield();
         // window.location.href="/staticui/aapermissions";
     
      }
      const[ticketid, setticketid] = useState("");
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
        if (!isPageLoaded && !subticketcategriesData.isLoading) {
          var meters=new Array<any>();
          if(subticketcategriesData.items.length>0){                
            for(var i=0;i<subticketcategriesData.items.length;i++){
              var element=subticketcategriesData.items[i]; 
              if (element.status!==1)  {              
              
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
    const checkValidation=()=>{
        if((aapermissionsInputData.subdescription!==null && aapermissionsInputData.subdescription!=="")    
        &&(aapermissionsInputData.status!==null ) 
        )
        {
          setValid(true);
        }
        else
        {
          setValid(false); 
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
      const [category, setcategory] = useState(new Array<any>());
      const [isPagesLoaded, setPagesLoaded] = useState(false)
      loaderGrid();
      function loaderGrid(){
        if (!isPagesLoaded && !ticketcategriesData.isLoading) {
          var meters=new Array<any>();
          if(ticketcategriesData.items.length>0){                
            for(var i=0;i<ticketcategriesData.items.length;i++){
              var element=ticketcategriesData.items[i];             
              meters.push(element);
            }      
            setPagesLoaded(true);
            setcategory(meters);   
          }     
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
        {label: 'Active', value: 1},
        {label: 'InActive', value: 2} 
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
                          <label htmlFor="subdescription">Sub description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputText id="subdescription" name="subdescription" value={aapermissionsInputData.subdescription} required onChange={handleInputChange} />
                        </div>
                      
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="description">Description</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        <Dropdown id="description" optionLabel="description" options={category}onChange={handleInputChange}  value={aapermissionsInputData.user} required  autoWidth={false} /> 
                         
                        </div>
                      </div>
                      <div className="p-grid">
                      
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="status">Status</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                        < Dropdown id="status" name="status" options={status} value={aapermissionsInputData.status} onChange={handleInputChange} required  autoWidth={false}   />
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
                      {subticketcategriesData.isLoading && <ProgressSpinner />}
                      {!subticketcategriesData.isLoading && (                        
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

                     <Column field="ticketsubdescriptionid" header="S.no" sortable={true}/>
                        <Column field="subdescription" header="Subdescription" sortable={true}/>
                        <Column field="ticketdescriptionid" header="Descriptionid" sortable={true}/>  
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
    const { aapermissionsData, ticketcategriesData,subticketcategriesData} = state;
    return {
      aapermissionsData,ticketcategriesData,subticketcategriesData
    };
  };
export default connect(mapStateToProps)(Ticketsubcategory);