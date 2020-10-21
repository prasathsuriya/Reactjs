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

interface IWorkflowstages {}
interface IWorkflowstages {
    workflowstageData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  Workflowstages: React.FC<IWorkflowstages> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"workflowstageid":"1","workflowid":"Meter Details","description":"Meter Reading approach","longdescription":"getting the total amperes from meter","orderofexecution":"bottomtotop"},
        {"workflowstageid":"2","workflowid":"Product Details","description":"Product Reading approach","longdescription":"getting total product infromation from meter","orderofexecution":"toptobottom"},
        {"workflowstageid":"3","workflowid":"Insident details","description":"insident setup approach","longdescription":"reading total number of insident cases","orderofexecution":"straightforward"}
 ];
       const workflowstagedetail={
        workflowstageid:0,
        workflowid:"",
        description : "",
        longdescription:"",
        orderofexecution: ""
      };      
       let [workflowstageData, setInput] = useState(workflowstagedetail);

       

       
    const onWorkflowstageSelect=(event)=>{
    
    
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        workflowstageData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...workflowstageData }); 
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
            <label htmlFor="workflowstageid">Workflow Stage Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="workflowstageid" value={workflowstageData.workflowstageid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowid">Workflow ID</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="workflowid" options={workflowids} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="description">Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="description"  value={workflowstageData.description}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="longdescription">Long Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="longdescription"  value={workflowstageData.longdescription}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="orderofexecution">Order Of Execution</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="orderofexecution"  value={workflowstageData.orderofexecution}/>
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
                    onRowSelect={onWorkflowstageSelect}>
                                                 
     
                        <Column field="workflowstageid" header="Workflow Stage id" sortable={true} />
                        <Column field="workflowid" header="Work Flow Id" sortable={true} />
                        <Column field="description" header="Description" sortable={true} />
                        <Column field="longdescription" header="Long Description" sortable={true} />
                        <Column field="orderofexecution" header="Order Of Execution" sortable={true} />
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
export default connect(mapStateToProps)(Workflowstages)