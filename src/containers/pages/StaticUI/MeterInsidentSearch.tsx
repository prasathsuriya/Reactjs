import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Dialog } from 'primereact/dialog';

//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterInsidentSearch {}
interface IMeterInsidentSearch {
    consumerData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterInsidentSearch: React.FC<IMeterInsidentSearch> = ({
    consumerData
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"insidentid":"1","meterid":"10001","metermake":"INESH","category":"Network failure, etc","metername":"","subcategory":"Network failure","metertype":"","regionname":"Chennai North","status":"Open","descriptiondetails":[{"sno":"1","description":"Test By Muru","assignedby":"Murugavel","assignto":"Pavan","assigneddate":"02-Feb-2020","aging":"12"},{"sno":"2","description":"Test By Pavan","assignedby":"Pavan","assignto":"Murugavel","assigneddate":"12-Feb-2020","aging":"2"}]},
        {"insidentid":"2","meterid":"10001","metermake":"INESH","category":"Periodic reading missing","metername":"","subcategory":"Network failure, etc","metertype":"","regionname":"Chennai South","status":"Open","descriptiondetails":[{"sno":"1","description":"Test By Muru","assignedby":"Murugavel","assignto":"Pavan","assigneddate":"02-Feb-2020","aging":"12"}]},
		{"insidentid":"3","meterid":"10001","metermake":"INESH","category":"Network failure, etc","metername":"","subcategory":"Network failure, etc","metertype":"","regionname":"Thirunelveli","status":"Open","descriptiondetails":[{"sno":"1","description":"Test By Muru","assignedby":"Murugavel","assignto":"Pavan","assigneddate":"02-Feb-2020","aging":"12"}]},
		{"insidentid":"4","meterid":"10002","metermake":"INESH","category":"Periodic reading missing","metername":"","subcategory":"Periodic reading missing","metertype":"","regionname":"Madurai","status":"Open","descriptiondetails":[{"sno":"1","description":"Test By Muru","assignedby":"Murugavel","assignto":"Pavan","assigneddate":"02-Feb-2020","aging":"12"}]},
		{"insidentid":"5","meterid":"10002","metermake":"INESH","category":"Failure to connect etc","metername":"","subcategory":"Failure to connect etc","metertype":"","regionname":"Trichy","status":"Open","descriptiondetails":[{"sno":"1","description":"Test By Muru","assignedby":"Murugavel","assignto":"Pavan","assigneddate":"02-Feb-2020","aging":"12"}]},
		{"insidentid":"6","meterid":"10002","metermake":"INESH","category":"Network failure, etc","metername":"","subcategory":"Network failure, etc","metertype":"","regionname":"Vilupuram","status":"Open","descriptiondetails":[{"sno":"1","description":"Test By Muru","assignedby":"Murugavel","assignto":"Pavan","assigneddate":"02-Feb-2020","aging":"12"}]},
		{"insidentid":"7","meterid":"10003","metermake":"INESH","category":"Failure to connect etc","metername":"","subcategory":"Failure to connect etc","metertype":"","regionname":"Chennai North","status":"Open","descriptiondetails":[{"sno":"1","description":"Test By Muru","assignedby":"Murugavel","assignto":"Pavan","assigneddate":"02-Feb-2020","aging":"12"}]} 
       ];
       const incident={
        insidentid:0,
        meterid:"",
        metermake : "",
        category : "",
        metername:"",
        metertype : "",
        regionname:"",
        status:"",
        subcategory:"",
        description:""
      };      
       let [insidentData, setInput] = useState(incident);
       
    const onInsidentSelect=(event)=>{
      alert("Hai");
      
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        insidentData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...insidentData }); 
        setdisplayDialog(true);
        //If need to show delete button
        //setShowDelete(true);
      }
      } 
      function onClickAdd(event) {
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isValid, setValid] = useState(false);
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
      }
      const handleDeleteSubmit=(event)=>{
               
      }

      const regions= [
        {label: 'Select Region', value: null},
        {label: 'Chennai North', value: 'Chennai North'},
        {label: 'Chennai South', value: 'Chennai South'},
        {label: 'Vilupuram', value: 'Vilupuram'},
        {label: 'Trichy', value: 'Trichy'},
        {label: 'Madurai', value: 'Madurai'},
        {label: 'Salem', value: 'Salem'},
        {label: 'Coimbatore', value: 'Coimbatore'},
        {label: 'Tirunelveli', value: 'Tirunelveli'}
      ];
      const users= [
        {label: 'Select Users', value: null},
        {label: 'Murugavel', value: 'Murugavel'},
        {label: 'PavanKumar', value: 'PavanKumar'},
        {label: 'Prasanth', value: 'Prasanth'},
        {label: 'Sathesh', value: 'Sathesh'} 
      ] ;
      const categories = ['Data not received from DCU/Meter','Relay not operating for connect / disconnect','Communication link failure with DCU/Meter','Network failure, etc','Retry attempts on communication failure','Periodic reading missing','Failure to connect etc'];
  
      
  return (
    <div>


<Dialog header="Add Configuration" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="meterid">Meter Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="meterid" value={insidentData.meterid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="regionname">Region Name</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="regionname" options={regions} required  autoWidth={false} />   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="metername">Meter Name</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="metername"  value={insidentData.metername}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="category">Category</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="category" options={categories} required  autoWidth={false} />   
        
        
       
                   </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="subcategory">Sub Category</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="subcategory" value={insidentData.subcategory}/>
        </div>
        <div className="p-col-12 p-md-2">
        <label htmlFor="description">Description</label>
        </div>
        <div className="p-col-12 p-md-4">
         <InputTextarea id="description" value={insidentData.description} rows={3} cols={30} autoResize={true}></InputTextarea>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="assignto">Assign To</label>
        </div>
        <div className="p-col-12 p-md-4">

        <Dropdown options={users} id="userId"  autoWidth={false} />   

       </div>
                            <div className="p-col-12 p-md-4">
                           
                                <Button label="Create Incident" icon="pi pi-save" onClick={handleSubmit} />
                           
                            </div>
    </div>
               
               
                </div>
           
                )
              }
            </Dialog>

         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Search Incident</h1>
                    </div>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Incident" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Incident Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onInsidentSelect}>
                                                 
     
                        <Column field="insidentid" header="Incident id" sortable={true} />
                        <Column field="meterid" header="Meter id" sortable={true} />
                        <Column field="metermake" header="Meter Make" sortable={true} />
                        <Column field="category" header="Category" sortable={true}  />
                        <Column field="metername" header="Meter Name" sortable={true} />
                        <Column field="subcategory" header="Sub Category" sortable={true} />
                        <Column field="metertype" header="Meter Type" sortable={true} />
                        <Column field="regionname" header="Region Name" sortable={true} />
                    </DataTable>
                    </div>
    </div>
    );
        
    
};
const mapStateToProps = (state: any) => {
    const { deviceFormData } = state;
    return {
        deviceFormData
    };
};
export default connect(mapStateToProps)(MeterInsidentSearch);
 