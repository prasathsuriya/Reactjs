import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IFrequentInsidentReport {}
interface IFrequentInsidentReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  FrequentInsidentReport: React.FC<IFrequentInsidentReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
      {"sno":"1","regionname":"Chennai Central","category":"Data not received from DCU/Meter","meterid":"1001","metername":"panasonic","totalinsidentcount":"5"},
      {"sno":"2","regionname":"Villupuram","category":"Relay not operating for connect / disconnect","meterid":"1002","metername":"radon","totalinsidentcount":"10"},
      {"sno":"3","regionname":"Coimbatore","category":"Communication link failure with DCU/Meter","meterid":"1003","metername":"higher","totalinsidentcount":"15"},
      {"sno":"4","regionname":"Erode","category":"Network failure, etc","meterid":"1004","metername":"beat","totalinsidentcount":"20"},
      {"sno":"5","regionname":"Madurai","category":"Retry attempts on communication failure","meterid":"1005","metername":"mitsubishi","totalinsidentcount":"25"},
      {"sno":"6","regionname":"Trichy","category":"Periodic reading missing","meterid":"1006","metername":"thrive","totalinsidentcount":"30"},
      {"sno":"7","regionname":"Thirunelveli","category":"Failure to connect etc","meterid":"1007","metername":"hander","totalinsidentcount":"35"},
      {"sno":"8","regionname":"vellure","category":"Failure to connect etc","meterid":"1008","metername":"clock","totalinsidentcount":"40"},
      {"sno":"9","regionname":"Chennai South","category":"Communication link failure with DCU/Meter","meterid":"1009","metername":"regal","totalinsidentcount":"45"}
];
       const viewdetail={
        sno:0,
        regionname:"",
        category : "",
        meterid : "",
        metername:"",
        totalinsidentcount : "" 
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
                        <h1> Frequent Insident Report</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Incident Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onInsidentSelect}>

<Column field="sno" header="S.no" filter={true} />
                        <Column field="regionname" header="Region Name" filter={true} />
                        <Column field="category" header="Category" filter={true} />
                        <Column field="meterid" header="Meter id" filter={true} />
                        <Column field="metername" header="Meter Name" filter={true} />
                        <Column field="totalinsidentcount"  header="Total Insident Count" />
                                        
                                       
                                                 
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
export default connect(mapStateToProps)(FrequentInsidentReport);
 