import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface ICreateInsidentReport {}
interface ICreateInsidentReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  CreateInsidentReport: React.FC<ICreateInsidentReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
      {"sno":"1","reportname":"PRODUCT_MAKE","category":"Data not received from DCU/Meter","subcategory":"Relay not operating for connect / disconnect","reportedgenerated":"Good","reporteddate":"25-jan-2020"},
        {"sno":"2","reportname":"PRODUCT_MAKE","category":"Relay not operating for connect / disconnect","subcategory":"Communication link failure with DCU/Meter","reportedgenerated":"Satisfactory","reporteddate":"20-jan-2020"},
        {"sno":"3","reportname":"METER_PHASE","category":"Communication link failure with DCU/Meter","subcategory":"Network failure, etc","reportedegenerated":"Positive","reporteddate":"23-jan-2020"},
        {"sno":"4","reportname":"METER_PHASE","category":"Network failure, etc","subcategory":"Network failure, etc","reportedgenerated": "Good","reporteddate":"22-jan-2020"},
        {"sno":"5","reportname":"COMMUNICATION_MODEL_TYPE","category":"Retry attempts on communication failure","subcategory":"Periodic reading missing","reportedgenerated":"unsatisfactory","reporteddate":"21-jan-2020"}
];
       const viewdetail={
        sno:0,
        reportname:"",
        category : "",
        subcategory : "",
        reportedgenerated:"",
        reporteddate : "" 
      };      
       let [viewData, setInput] = useState(viewdetail);
       
    const onInsidentSelect=(event)=>{
      
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        viewData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...viewData }); 
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
 
     
  return (
    <div>

         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Incident </h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Incident Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onInsidentSelect}>

<Column field="sno" header="S.no" sortable={true} />
                                        <Column field="reportname" header="Report Name" sortable={true} />
                                        <Column field="category" header="Category" sortable={true} />
                                        <Column field="subcategory" header="Sub Category" sortable={true} />
                                        <Column field="reportedgenerated" header="Reported Generated" sortable={true} />
                                        <Column field="reporteddate" header="Reported Date" sortable={true} />
                                        <Column
                                          header="File View"
                                          
                                        />
                                                 
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
export default connect(mapStateToProps)(CreateInsidentReport);
 