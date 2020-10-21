import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IBillingGenerateStatus {}
interface IBillingGenerateStatus {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  BillingGenerateStatus: React.FC<IBillingGenerateStatus> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [

{"cano":"20191200010187","customername":"G1-001","macid":"1","blockno":"G1","flatno":"001","meterno":"0000824","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"7.855","balanceinr":"36.53","loadcontrol":"ON","meteroperation":"EB (EB-58.266 / DG-0.088)","lastupdatetime":"11-02-2020 01:03:13","requesteddate":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","billgeneratestatus":"Success - Bill Generated"},
{"cano":"20191200010189","customername":"G1-002","macid":"2","blockno":"G1","flatno":"002","meterno":"0000844","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"1.253","balanceinr":"5.82","loadcontrol":"ON","meteroperation":"EB (EB-0.371 / DG-0.012)","lastupdatetime":"11-02-2020 01:05:57","requesteddate":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","billgeneratestatus":"Success - Bill Generated"},
{"cano":"20191200010188","customername":"G1-003","macid":"3","blockno":"G1","flatno":"003","meterno":"0000848","maxloadeb":"54.000","maxloaddg":"18.000","dcuid":"6","balancekwh":"0.255","balanceinr":"1.18","loadcontrol":"ON","meteroperation":"EB (EB-7.907 / DG-0.003)","lastupdatetime":"11-02-2020 01:04:25","requesteddate":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","billgeneratestatus":"Success - Bill Generated"},
{"cano":"20191200010191","customername":"G1-004","macid":"4","blockno":"G1","flatno":"004","meterno":"0000805","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"101.075","balanceinr":"470.00","loadcontrol":"ON","meteroperation":"EB (EB-0.168 / DG-0.000)","lastupdatetime":"11-02-2020 01:30:57","requesteddate":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","billgeneratestatus":"Failed - Bill Not Generated"}
      
   ];
  
   const uploadedFile = (rowData, column) => {    
    let url = "./assets/BillingReport.pdf"; 
    return   <a href={url}     target="_blank" >Download</a>;
} 
      var header = <div style={{'textAlign':'left'}}>
      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button>
      <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
      
  </div>;
     
  return (
    <div>

 



         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Billing  - Status</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="400px" style={{marginTop:'5px', width: '2000px'}}  header={header}
                    onSelectionChange={onSelectionChangeed}  
                    >
												
                                              
                     
                    
                        <Column field="cano" header="CA No." filter={true} />
                        <Column field="customername" header="Customer Name" filter={true} />
                        <Column field="blockno" header="Block No" filter={true} />
                        <Column field="flatno" header="Flat No" filter={true} />
                        <Column field="meterno" header="Meter No" filter={true} />
                        <Column field="dcuid" header="Dcu Id" filter={true} />
                        <Column field="macid" header="Mac Id" filter={true} />  
                        <Column field="lastupdatetime" header="Last Updatetime" filter={true} />
                        <Column field="requesteddate" header="Requested datetime" filter={true} />
                        
                        <Column field="billgeneratestatus" header="Status"  filter={true} />
                        <Column  body={uploadedFile}  header="File View" />
                        
                       
                         
                                    
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
export default connect(mapStateToProps)(BillingGenerateStatus);