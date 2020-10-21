import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import {Dropdown} from 'primereact/dropdown';
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMonthlyMaintenance {}
interface IMonthlyMaintenance {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MonthlyMaintenance: React.FC<IMonthlyMaintenance> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [

{"cano":"20191200010187","customername":"G1-001","macid":"1","blockno":"G1","flatno":"001","meterno":"0000824","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"7.855","balanceinr":"36.53","loadcontrol":"ON","meteroperation":"EB (EB-58.266 / DG-0.088)","lastupdatetime":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","area":"690"},
{"cano":"20191200010189","customername":"G1-002","macid":"2","blockno":"G1","flatno":"002","meterno":"0000844","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"1.253","balanceinr":"5.82","loadcontrol":"ON","meteroperation":"EB (EB-0.371 / DG-0.012)","lastupdatetime":"11-02-2020 01:05:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","area":"690"},
{"cano":"20191200010188","customername":"G1-003","macid":"3","blockno":"G1","flatno":"003","meterno":"0000848","maxloadeb":"54.000","maxloaddg":"18.000","dcuid":"6","balancekwh":"0.255","balanceinr":"1.18","loadcontrol":"ON","meteroperation":"EB (EB-7.907 / DG-0.003)","lastupdatetime":"11-02-2020 01:04:25","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","area":"690"},
{"cano":"20191200010191","customername":"G1-004","macid":"4","blockno":"G1","flatno":"004","meterno":"0000805","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"101.075","balanceinr":"470.00","loadcontrol":"ON","meteroperation":"EB (EB-0.168 / DG-0.000)","lastupdatetime":"11-02-2020 01:30:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","status":"Active","unitrateeb":"4.65","unitratedg":"18.00","emergencytopup":"(Inactive) 500.00","loadeb":"3000.000","loaddg":"1000.000","credittopup":"-","area":"690"}
      
   ];
      
       
    
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
      const monthlymaintenance= [
        {label: 'Select', value: null},
        {label: 'Active', value: 'Active'},
        {label: 'InActive', value: 'InActive'} 
      ] ; 
        const rowdetail={
        roleid:0,
        monthlymaintenance:"Active",
        chargesrate : "" ,
        chargesload : "" ,
        maintenancechrges:"",
        serverrent:"",
        watercharge:"",
        authorizedby:""
      };   
      let [rowData, setInput] = useState(rowdetail);
      const onRowSelect=(event)=>{
      
 
        if(!displayDialog){
          var data=event.data;
         
          //setInput(consumer);
          rowData=data;
          //if(userData!=null){
         //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
         //   consumerInputData.createdBy=data.createdBy;                                
         // }          
          //setInput(consumer);
          setInput({ ...rowData }); 
          setdisplayDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
        }
      const handleDeleteSubmit=(event)=>{
               
      }
      var header = <div style={{'textAlign':'left'}}>
      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button>
      <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
      
  </div>;
     
  return (
    <div>
  
       
<Dialog header="Update Settings" visible={displayDialog} style={{ overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
                <div className="p-col-12 p-md-2">
            <label htmlFor="assignto">Monthly Maintenance</label>
        </div>
        <div className="p-col-12 p-md-4">

        <Dropdown options={monthlymaintenance} id="userId"  autoWidth={false} />   

       </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="meterid">Fix Charges On Sanctioned Load Per Unit Rate (₹) </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="amount" value={rowData.chargesrate}/>   
        </div>
     
        <div className="p-col-12 p-md-2">
            <label htmlFor="meterid">   Fix Charges On Sanctioned Load Unit(W) </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="amount" value={rowData.chargesload}/>   
        </div>
  
         
        <div className="p-col-12 p-md-2">
            <label htmlFor="maintenancechrges">  Maintenance Charges Per Sq. ft. (₹) </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="maintenancechrges" value={rowData.maintenancechrges}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="serverrent">   Server Rent (₹) </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="serverrent" value={rowData.serverrent}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="watercharge">   Water Charge (₹) </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="watercharge" value={rowData.watercharge}/>   
        </div>

        <div className="p-col-12 p-md-2">
            <label htmlFor="subcategory">Authorized By</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="authorizedby" value={rowData.authorizedby}/>
        </div>
       
        
                            <div className="p-col-12 p-md-4">
                           
                                <Button label="Set" icon="pi pi-save" onClick={handleSubmit} />
                           
                            </div>
    </div>
               
               
                </div>
           
                )
              }
            </Dialog>



         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Setting - Monthly Maintenance</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="400px" style={{marginTop:'5px', width: '2000px'}}  header={header}
                    onSelectionChange={onSelectionChangeed} onRowSelect={onRowSelect} 
                    >
												
                                              
                     
                    
                        <Column field="cano" header="CA No." filter={true} />
                        <Column field="customername" header="Customer Name" filter={true} />
                        <Column field="blockno" header="Block No" filter={true} />
                        <Column field="flatno" header="Flat No" filter={true} />
                        <Column field="meterno" header="Meter No" filter={true} />
                        <Column field="dcuid" header="Dcu Id" filter={true} />
                        <Column field="macid" header="Mac Id" filter={true} />     
                        <Column field="area" header="Area" filter={true} />                     
                        <Column field="status" header="Status" filter={true} />
   
                                    
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
export default connect(mapStateToProps)(MonthlyMaintenance);