import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {AutoComplete} from 'primereact/autocomplete';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IWorkflows {}
interface IWorkflows {
    workflowData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  Workflows: React.FC<IWorkflows> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"workflowid":"1","icareunit":"AE","workflowcode":"Meter On Board","description":"Meter Details","longdescription":"View meter details"},
        {"workflowid":"2","icareunit":"SE","workflowcode":"Product Configuration","description":"Product Details","longdescription":"view product details"},
        {"workflowid":"3","icareunit":"TA","workflowcode":"Insident Management","description":"Insident details","longdescription":"view insident details"}
 ];
       const workflowdetail={
        workflowid:0,
        icareunit:"",
        workflowcode : "",
        description:"",
        longdescription: "",
      };      
       let [workflowData, setInput] = useState(workflowdetail);

       

       
    const onWorkflowSelect=(event)=>{
    
    
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        workflowData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...workflowData }); 
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
 
      const Icareunits= [
        {label: 'Select Icareunits', value: null},
        {label: 'TNEB', value: 'TNEB'}
      ] ; 
  return (
    <div>


<Dialog header="Workflow Details" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowid">Workflow Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="workflowid" value={workflowData.workflowid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="icareunit">Icare Unit</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="Icareunits" options={Icareunits} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowcode">Workflow Code</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="workflowcode"  value={workflowData.workflowcode}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="description">Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="description" value={workflowData.description}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="longdescription">Long Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="longdescription"  value={workflowData.longdescription}/>
        </div>
      
                   <div className="p-col-12 p-md-4">
       
                   </div>
                   <div className="p-col-12 p-md-4">
                       </div>
                            <div className="p-col-12 p-md-4">
                       
                                <Button label="Save" icon="pi pi-save" onClick={handleSubmit} />
                           
                            </div>
                            <div className="p-col-12 p-md-4">
                       </div>
    </div>
               
               
                </div>
           
                )
              }
            </Dialog>

         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Search Workflow</h1>
                    </div>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Workflow" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Permission Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onWorkflowSelect}>
                                                 
     
                        <Column field="workflowid" header="Workflow id" sortable={true} />
                        <Column field="icareunit" header="Icare Unit" sortable={true} />
                        <Column field="workflowcode" header="Work Flow Code" sortable={true} />
                        <Column field="description" header="Description" sortable={true} />
                        <Column field="longdescription" header="Long Description" sortable={true} />
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
export default connect(mapStateToProps)(Workflows)