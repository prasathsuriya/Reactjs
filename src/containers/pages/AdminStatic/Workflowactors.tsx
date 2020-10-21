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

interface IWorkflowactors {}
interface IWorkflowactors {
    workflowactorData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  Workflowactors: React.FC<IWorkflowactors> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"workflowactorid":"1","workflowtaskid":"Meter Reading approach","workflowstageid":"Meter Reading approach","workflowid":"Meter Details","workflowroleid":"1","description":"Meter Reading approach","longdescription":"getting the total amperes from meter","workflowapprovaloption":"yes","workflowapprovaldiscretion":"approve","orderofexecution":"high"},
        {"workflowactorid":"2","workflowtaskid":"Product Reading approach","workflowstageid":"Product Reading approach","workflowid":"Product Details","workflowroleid":"2","description":"Product Reading approach","longdescription":"getting total product infromation from meter","workflowapprovaloption":"yes","workflowapprovaldiscretion":"Notapprove","orderofexecution":"low"},
        {"workflowactorid":"3","workflowtaskid":"insident setup approach","workflowstageid":"insident setup approach","workflowid":"Insident details","workflowroleid":"3","description":"insident setup approach","longdescription":"reading total number of insident cases","workflowapprovaloption":"no","workflowapprovaldiscretion":"approve","orderofexecution":"normal"}
 ];
       const workflowactordetail={
        workflowactorid:0,
        workflowtaskid:"",
        workflowid:"",
        workflowstageid : "",
        workflowroleid:"",
        description: "",
        longdescription:"",
        workflowapprovaloption:"",
        workflowapprovaldiscretion:"",
        orderofexecution:""
      };      
       let [workflowactorData, setInput] = useState(workflowactordetail);

       

       
    const onWorkflowactorSelect=(event)=>{
    
    
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        workflowactorData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...workflowactorData }); 
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
      const workflowapprovaloptions=[
          {label:'Select workflowapproval', value:null},
          {label:'yes', value:'yes'},
          {label:'no', value:'no'}
      ]
      const workflowroleids= [
        {label: 'Select workflowroleid', value: null},
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'}
      ] ;
      const workflowtaskids= [
        {label: 'Select workflowtaskid', value: null},
        {label: 'Meter Reading approach', value: 'Meter Reading approach'},
        {label: 'Product Reading approach', value: 'Product Reading approach'},
        {label: 'insident setup approach', value: 'insident setup approach'}
      ] ;

      const workflowids= [
        {label: 'Select workflowid', value: null},
        {label: 'Meter Details', value: 'Meter Details'},
        {label: 'Product Details', value: 'Product Details'},
        {label: 'Insident details', value: 'Insident details'}
      ] ;
      const workflowstageids= [
        {label: 'Select workflowstageid', value: null},
        {label: 'Meter Reading approach', value: 'Meter Reading approach'},
        {label: 'Product Reading approach', value: 'Product Reading approach'},
        {label: 'insident setup approach', value: 'insident setup approach'}
      ] ;
  return (
    <div>


<Dialog header="Workflow task Value Details" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowtaskid">Workflow Actor Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="workflowtaskid" value={workflowactorData.workflowactorid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowtaskid">Workflow Task Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <Dropdown id="workflowtaskid" options={workflowtaskids} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowid">Workflow ID</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="workflowid" options={workflowids} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowstageid">Workflow Stage ID</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="workflowstageid" options={workflowstageids} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowroleid">Workflow Role ID</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="workflowroleid" options={workflowroleids} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="description">Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="description"  value={workflowactorData.description}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="longdescription">Long Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="longdescription" value={workflowactorData.longdescription}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowapprovaloption">Work Flow Approval option</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="workflowapprovaloption" options={workflowapprovaloptions} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="orderofexecution">Order Of Execution</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="orderofexecution"  value={workflowactorData.orderofexecution}/>
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
                    onRowSelect={onWorkflowactorSelect}>
                                                 
                        <Column field="workflowactorid" header="Workflow Actor id" sortable={true} />
                        <Column field="workflowtaskid" header="Workflow Task id" sortable={true} />
                        <Column field="workflowid" header="Work Flow Id" sortable={true} />
                        <Column field="workflowstageid" header="Work Stage Id" sortable={true} />
                        <Column field="workflowroleid" header="Work Role Id" sortable={true} />
                        <Column field="workflowapprovaloption" header="Work Flow Approval Option" sortable={true} />
                        <Column field="workflowapprovaldiscretion" header="Work Flow Approval discretion" sortable={true} />
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
export default connect(mapStateToProps)(Workflowactors)