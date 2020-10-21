import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {getACTUALDAILYLOADList } from "../../../store/actions/Actualdailyload";
import { ProgressSpinner } from 'primereact/progressspinner';
import {Growl} from 'primereact/growl';
import { getCurrentUser } from "../../../store/selectors/Accounts";
import {  useEffect } from "react";
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMonthlyConsumption {}
interface IMonthlyConsumption {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
    ACTUALDAILYLOADData: any;
}
const  Newactualdailyload: React.FC<IMonthlyConsumption> = ({
    dispatch,   ACTUALDAILYLOADData
    
}) => {
   useEffect(() => {
        var data = getCurrentUser();
        if (data !== null) {
          console.log(data);
          //dispatch(getNoOfDevicees(data.userProfile.tenantFkId.id));
          //dispatch(getActiveMeterCount(data.userProfile.tenantFkId.id));
        
          dispatch(getACTUALDAILYLOADList(data.userProfile.roleFkId.companyAutoId.id)); 
        } else {
          window.location.href = "/";
        }
      }, []);
      
     const [tableData, setTableData] = useState(new Array<any>());
     const [dataTableSelection, setdataTableSelection] = useState();
     const [isPageLoaded, setPageLoaded] = useState(false);
     const [growl, setGrowl]=useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [

{"cano":"20191200010187","customername":"G1-001","blockno":"G1","flatno":"001","meterno":"0000824","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"7.855","balanceinr":"36.53","loadcontrol":"ON","meteroperation":"EB (EB-58.266 / DG-0.088)","lastupdatetime":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com"},
{"cano":"20191200010189","customername":"G1-002","blockno":"G1","flatno":"002","meterno":"0000844","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"1.253","balanceinr":"5.82","loadcontrol":"ON","meteroperation":"EB (EB-0.371 / DG-0.012)","lastupdatetime":"11-02-2020 01:05:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com"},
{"cano":"20191200010188","customername":"G1-003","blockno":"G1","flatno":"003","meterno":"0000848","maxloadeb":"54.000","maxloaddg":"18.000","dcuid":"6","balancekwh":"0.255","balanceinr":"1.18","loadcontrol":"ON","meteroperation":"EB (EB-7.907 / DG-0.003)","lastupdatetime":"11-02-2020 01:04:25","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com"},
{"cano":"20191200010191","customername":"G1-004","blockno":"G1","flatno":"004","meterno":"0000805","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"101.075","balanceinr":"470.00","loadcontrol":"ON","meteroperation":"EB (EB-0.168 / DG-0.000)","lastupdatetime":"11-02-2020 01:30:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com"}
      
   ];
      
   loadGrid();
   function loadGrid(){
     if (!isPageLoaded && !ACTUALDAILYLOADData.isLoading) {
       var meters=new Array<any>();
       if(ACTUALDAILYLOADData.items.length>0){                
         for(var i=0;i<ACTUALDAILYLOADData.items.length;i++){
           var element=ACTUALDAILYLOADData.items[i];             
           meters.push(element);
         }      
         setPageLoaded(true);
         setTableData(meters);   
       }     
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
      var header = <div style={{'textAlign':'left'}}>
      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button>
      <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
      
  </div>;
     
  return (
    <div>




         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Daily Load Profile Data</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">
                <Growl ref={(el) => setGrowl(el)} />
                {ACTUALDAILYLOADData.isLoading && <ProgressSpinner />}
                      {!ACTUALDAILYLOADData.isLoading && (    
                <DataTable value={tableData} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="400px" style={{marginTop:'5px', width: '2000px'}}  header={header}
                    onSelectionChange={onSelectionChangeed} 
                    >
												

                        <Column field="rtcDate" header="RTC Date" filter={true} />
                        <Column field="meterAutoid.meterSerialNumber" header="Meter Serial Number" filter={true} />
                        <Column field="cumEnergyWhImport" header="Cum Energy Wh import" filter={true} />
                        <Column field="cumEnergyWhExport" header="Cum Energy vah import" filter={true} />
                        <Column field="cumEnergyVahImport" header="Cum Energy Wh export" filter={true} />
                        <Column field="cumEnergyVahExport" header="Cum Energy vah export" filter={true} />
                        <Column field="maxDemandActiveImportW" header="MD W " filter={true} />
                        <Column field="maxDemandActiveDateTime" header="MD W date" filter={true} />
                        <Column field="maxDemandApparentImportVa" header="MD VA " filter={true} />
                        <Column field="maxDemandApparentDateTime" header="MD VA date" filter={true} />
                                         
       </DataTable>
                      )}
                    </div>
    </div>
    );
};
const mapStateToProps = (state: any) => {
    const { deviceFormData,ACTUALDAILYLOADData } = state;
    return {
        deviceFormData,
        ACTUALDAILYLOADData
    };
};
export default connect(mapStateToProps)(Newactualdailyload);