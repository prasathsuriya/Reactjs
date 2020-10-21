import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Dialog } from 'primereact/dialog';
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IWorkflowconditions {}
interface IWorkflowconditions {
    workflowconditionData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  Workflowconditions: React.FC<IWorkflowconditions> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"workflowconditionid":"1","icareunit":"TNEB","operatingunitid":"South chennai","bizcase":"Meter Details","process":"View meter details","type":"meter", "effectivedate":"02/01/2020","enddate":"01/03/2040"},
        {"workflowconditionid":"2","icareunit":"TNEB","operatingunitid":"Chennai central","bizcase":"Product Details","process":"view product details","type":"product", "effectivedate":"02/06/2019","enddate":"02/06/2039"},
        {"workflowconditionid":"3","icareunit":"TNEB","operatingunitid":"Vilupuram","bizcase":"Insident details","process":"view insident details","type":"insident", "effectivedate":"05/01/2019","enddate":"05/01/2039"}
 ];
       const workflowconditiondetail={
        workflowconditionid:0,
        icareunit:"",
        operatingunitid : "",
        bizcase:"",
        process: "",
        type:"",
        effectivedate : "",
        enddate:""
      };      
       let [workflowconditionData, setInput] = useState(workflowconditiondetail);

       

       
    const onWorkflowconditionSelect=(event)=>{
    
    
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        workflowconditionData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...workflowconditionData }); 
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
  return (
    <div>


<Dialog header="Workflow condition Details" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="workflowid">Workflow Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="workflowid" value={workflowconditionData.workflowconditionid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="icareunit">Icare Unit</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="icareunits" options={Icareunits} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="operatingunits">Operating Unit</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="operatingunits" options={operatingunits} required  autoWidth={false} /> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="bizcase">Bizcase</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="bizcase" value={workflowconditionData.bizcase}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="process">Process</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="process"  value={workflowconditionData.process}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="type">Type</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="type" value={workflowconditionData.type}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="effectivedate">Effectivedate</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="effectivedate"  value={workflowconditionData.effectivedate}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="enddate">Enddate</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="enddate"  value={workflowconditionData.enddate}/>
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
                        <h1>Search Workflow Condition</h1>
                    </div>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Workflow" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Workflow Condition Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onWorkflowconditionSelect}>
                                                 
     
                        <Column field="workflowconditionid" header="Workflow id" sortable={true} />
                        <Column field="icareunit" header="Icare Unit" sortable={true} />
                        <Column field="operatingunitid" header="Operating Unit" sortable={true} />
                        <Column field="bizcase" header="Biz Case" sortable={true} />
                        <Column field="process" header="Process" sortable={true} />
                        <Column field="type" header="Type" sortable={true} />
                        <Column field="effectivedate" header="Effective Date" sortable={true} />
                        <Column field="enddate" header="End Date" sortable={true} />
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
export default connect(mapStateToProps)(Workflowconditions)