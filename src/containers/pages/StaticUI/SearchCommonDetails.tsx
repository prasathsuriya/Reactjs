import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Dialog } from 'primereact/dialog';

 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface ISearchCommonDetails {}
interface ISearchCommonDetails {
    commonData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  SearchCommonDetails: React.FC<ISearchCommonDetails> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"commonid":"1","commonname":"INCIDENT_CATEGORY","commonvalue":"Data not received from DCU/Meter","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
        {"commonid":"2","commonname":"INCIDENT_CATEGORY","commonvalue":"Relay not operating for connect / disconnect","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
		{"commonid":"3","commonname":"INCIDENT_CATEGORY","commonvalue":"Communication link failure with DCU/Meter","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
		{"commonid":"4","commonname":"INCIDENT_CATEGORY","commonvalue":"Network failure, etc","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
		{"commonid":"5","commonname":"INCIDENT_CATEGORY","commonvalue":"Retry attempts on communication failure","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
		{"commonid":"6","commonname":"INCIDENT_CATEGORY","commonvalue":"Periodic reading missing","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
		{"commonid":"7","commonname":"INCIDENT_CATEGORY","commonvalue":"Failure to connect etc","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""} ,
		{"commonid":"8","commonname":"PRODUCT_MAKE","commonvalue":"INESH","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
        {"commonid":"9","commonname":"PRODUCT_MAKE","commonvalue":"L and T","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
        {"commonid":"10","commonname":"METER_PHASE","commonvalue":"Single Phase","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""},
        {"commonid":"11","commonname":"METER_PHASE","commonvalue":"Third Phase","status":"Active","inserteddate": "20-jan-2020","insertedby":"murugavel","parentcommonid":""},
        {"commonid":"12","commonname":"COMMUNICATION_MODEL_TYPE","commonvalue":"TCP/IP","status":"Active","inserteddate":"20-jan-2020","insertedby":"murugavel","parentcommonid":""}
 ];
       const commondetail={
        commonid:0,
        commonname:"",
        commonvalue : "",
        status : "",
        inserteddate:"",
        insertedby : "",
        parentcommonid:"" 
      };      
       let [commonData, setInput] = useState(commondetail);
       
    const onInsidentSelect=(event)=>{
      
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        commonData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...commonData }); 
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
 
      const status= [
        {label: 'Select Status', value: null},
        {label: 'Active', value: 'Active'},
        {label: 'InActive', value: 'InActive'} 
      ] ; 
  return (
    <div>


<Dialog header="Add Product Configuration Details" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="commonid">Product Configuration Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="commonid" value={commonData.commonid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="commonname">Product Configuration  Name</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="commonname" value={commonData.commonname}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="commonvalue">Product Configuration Value</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="commonvalue"  value={commonData.commonvalue}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="status">status</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="status" options={status} required  autoWidth={false} />   
        
        
       
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
                        <h1>Search Product Configuration</h1>
                    </div>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Product Configuration" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Product Configuration Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onInsidentSelect}>
                                                 
     
                        <Column field="commonid" header="Product Configuration id" sortable={true} />
                        <Column field="commonname" header="Product Configuration Name" sortable={true} />
                        <Column field="commonvalue" header="Product Configuration Value" sortable={true} />
                        <Column field="status" header="Status" sortable={true}  />
                        <Column field="insertedby" header="Inserted By" sortable={true} />
                        <Column field="inserteddate" header="Inserted Date" sortable={true} />
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
export default connect(mapStateToProps)(SearchCommonDetails);
 