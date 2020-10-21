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

interface IWorkflowconditionvalues {}
interface IWorkflowconditionvalues {
    workflowconditionvalueData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  Workflowconditionvalues: React.FC<IWorkflowconditionvalues> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"workflowconditionvalueid":"1","icareunit":"TNEB","operatingunitid":"South chennai","workflowconditionid":"meter","fromconditionvalue":"Inprogress","toconditionvalue":"setup", "workflowid":"Meter Details"},
        {"workflowconditionvalueid":"2","icareunit":"TNEB","operatingunitid":"Chennai central","workflowconditionid":"product","fromconditionvalue":"presetup","toconditionvalue":"preprogress", "workflowid":"Product Details"},
        {"workflowconditionvalueid":"3","icareunit":"TNEB","operatingunitid":"Vilupuram","workflowconditionid":"insident","fromconditionvalue":"postsetup","toconditionvalue":"forward", "workflowid":"Insident details"}
 ];
       const workflowconditionvaluedetail={
        workflowconditionvalueid:0,
        icareunit:"",
        operatingunitid : "",
        workflowcondiionid:"",
        fromconditionvalue: "",
        toconditionvalue:"",
        workflowid: ""
      };      
       let [workflowconditionvalueData, setInput] = useState(workflowconditionvaluedetail);

       

       
    const onWorkflowconditionvalueSelect=(event)=>{
    
    
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        workflowconditionvalueData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...workflowconditionvalueData }); 
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
      const operatingunits= [
        {label: 'Select Operatingunits', value: null},
        {label: 'Chennai central', value: 'Chennai central'},
        {label: 'South chennai', value: 'South chennai'},
        {label: 'Vilupuram', value: 'Vilupuram'},
        {label: 'Coimbatore', value: 'Coimbatore'},
        {label: 'vellore', value: 'vellore'},
        {label: 'thirunelveli', value:'thirunelveli'},
        {label: 'erode', value:'erode'},
        {label: 'trichy',value:'trichy'},
        {label:'madurai' ,value:'madurai'}
      ] ;
      const workflowconditionids= [
        {label: 'Select Workflowconditionid', value: null},
        {label: 'meter', value: 'meter'},
        {label: 'product', value: 'product'},
        {label: 'insident', value: 'insident'}
      ] ; 
      const workflowids= [
        {label: 'Select workflowid', value: null},
        {label: 'Meter Details', value: 'Meter Details'},
        {label: 'Product Details', value: 'Product Details'},
        {label: 'Insident details', value: 'Insident details'}
      ] ;
  return (
    <div>


<Dialog header="Workflow condition Value Details" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowconditionvalueid">Workflow Condition Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="workflowconditionvalueid" value={workflowconditionvalueData.workflowconditionvalueid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="icareunit">Icare Unit</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="icareunit" options={Icareunits} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="operatingunit">Operating Unit</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="operatingunit" options={operatingunits} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowconditionid">Workflow Condition</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="workflowconditionid" options={workflowconditionids} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="fromconditionvalue">From Condition Value</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="fromconditionvalue"  value={workflowconditionvalueData.fromconditionvalue}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="toconditionvalue">To Condition Value </label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="toconditionvalue" value={workflowconditionvalueData.toconditionvalue}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowid">Work Flow ID</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="workflowid" options={workflowids} required  autoWidth={false} />
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
                        <h1>Search Workflow condition value </h1>
                    </div>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Workflow Condition Value " onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Workflow condition value Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onWorkflowconditionvalueSelect}>
                                                 
     
                        <Column field="workflowconditionvalueid" header="Workflow id" sortable={true} />
                        <Column field="icareunit" header="Icare Unit" sortable={true} />
                        <Column field="operatingunitid" header="Operating Unit" sortable={true} />
                        <Column field="workflowconditionid" header="Work Flow Condition ID" sortable={true} />
                        <Column field="fromconditionvalue" header="From Condition Value" sortable={true} />
                        <Column field="toconditionvalue" header="To Condtion Value" sortable={true} />
                        <Column field="workflowid" header="Work Flow ID" sortable={true} />
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
export default connect(mapStateToProps)(Workflowconditionvalues)