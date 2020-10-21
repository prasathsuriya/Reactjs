import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
//import {DropDownList} from '@progress/kendo-react-dropdowns';
import {Button} from 'primereact/button';
import {Calendar} from 'primereact/calendar';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
interface IPaymentHistory {}
interface IPaymentHistory {
    dropdownIptype: any;
    rowData: any;
}
const  PaymentHistory: React.FC<IPaymentHistory> = ({
//  dispatch,deviceFormData
 
rowData
}) => {
   function handlePageChange() {
    window.location.href = "/staticui/searchcommondetails";
      }
     
    const handleInputChange = (event: any) => {
        if (event.target.id === "searchby") {
            userForm.searchbyvalue= event.target.value;
        }else if(event.target.id === "paymentmode"){
            userForm.paymentmode= event.target.value;
        }
     
      setUser({...userForm});

    };
    const  paymentmodelist= [
        {label: 'Select', value: null},
        {label: 'All', value: 'All'},
        {label: 'Cash', value: 'Cash'},
        {label: 'Debit/Credit Card', value: 'Debit/Credit Card'},
        {label: 'Inhouse', value: 'Inhouse'},
        {label: 'NetBanking', value: 'NetBanking'},
        {label: 'UPI/Paytm', value: 'UPI/Paytm'} 
    ];
    const  searchby= [
        {label: 'Select', value: null},
        {label: 'CA Number', value: 'CA Number'},
        {label: 'Meter No', value: 'Meter No'},
        {label: 'Block No', value: 'Block No'},
        {label: 'Flot No', value: 'Flot No'},
        {label: 'DUC ID', value: 'DUC ID'} 
    ];
    let date1;
     
   
    const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
   
    const dataTableValues = [

        {"cano":"20191200010187","customername":"G1-001","blockno":"G1","flatno":"001","meterno":"0000824","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"7.855","balanceinr":"36.53","loadcontrol":"ON","meteroperation":"EB (EB-58.266 / DG-0.088)","lastupdatetime":"11-02-2020 01:03:13","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","transactionid":"11111","authorizedby":"Murugavel","paymentmode":"NetBanking","paymentdescription":"Last Mont Payment","paymentreference":"1111","date":"01-Mar-2020","amount":"200"},
        {"cano":"20191200010189","customername":"G1-002","blockno":"G1","flatno":"002","meterno":"0000844","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"1.253","balanceinr":"5.82","loadcontrol":"ON","meteroperation":"EB (EB-0.371 / DG-0.012)","lastupdatetime":"11-02-2020 01:05:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","transactionid":"11111","authorizedby":"Murugavel","paymentmode":"NetBanking","paymentdescription":"Last Mont Payment","paymentreference":"1111","date":"01-Mar-2020","amount":"200"},
        {"cano":"20191200010188","customername":"G1-003","blockno":"G1","flatno":"003","meterno":"0000848","maxloadeb":"54.000","maxloaddg":"18.000","dcuid":"6","balancekwh":"0.255","balanceinr":"1.18","loadcontrol":"ON","meteroperation":"EB (EB-7.907 / DG-0.003)","lastupdatetime":"11-02-2020 01:04:25","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","transactionid":"11111","authorizedby":"Murugavel","paymentmode":"NetBanking","paymentdescription":"Last Mont Payment","paymentreference":"1111","date":"01-Mar-2020","amount":"200"},
        {"cano":"20191200010191","customername":"G1-004","blockno":"G1","flatno":"004","meterno":"0000805","maxloadeb":"3.000","maxloaddg":"1.000","dcuid":"6","balancekwh":"101.075","balanceinr":"470.00","loadcontrol":"ON","meteroperation":"EB (EB-0.168 / DG-0.000)","lastupdatetime":"11-02-2020 01:30:57","month":"01-2020","energyeb":"12.299","energydg":"0.039","mobileno":"8807247481","emailid":"murugavelt@acumentec.com","transactionid":"11111","authorizedby":"Murugavel","paymentmode":"NetBanking","paymentdescription":"Last Mont Payment","paymentreference":"1111","date":"01-Mar-2020","amount":"200"}
          
   ];
   
 
const initialUserForm = {
    emailId: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    roleId: 0,
    userId: "",
    tenantId: 0,
    roleDescription: "",
    searchbyvalue:"",
    paymentmode:""
  }

  const [userForm, setUser] = useState(initialUserForm);
   var header = <div style={{'textAlign':'left'}}>
   <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button>
   <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
   </div>;

  return (
    <div className="p-grid p-fluid">
    <div className="p-col-12">
            <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                <div className="p-messages-wrapper">
                    <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                    <ul>
                        <li>
                            <span className="p-messages-detail">Payment History  menu used to View the Payment history with particular search creditiya... 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card card-w-title">
                <h1>Payment History</h1>
                <div className="p-grid">
                
 

                <div className="p-col-12 p-md-2">
                        <label htmlFor="searchfor">  Enter For Search:</label>
                          </div> 
                    <div className="p-col-12 p-md-4">
                    <InputText id="searchfor" value=""/> 
                     </div> 
                     <div className="p-col-12 p-md-2">
                        <label htmlFor="searchby">   Search By:</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown id="searchby" options={searchby} value={userForm.searchbyvalue}  onChange={handleInputChange}  required  autoWidth={false} optionLabel="label" />   
                 
                     </div> 

                     <div className="p-col-12 p-md-2">
                        <label htmlFor="fromdate"> From Date:</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Calendar id="fromdate" value={date1} onChange={(e) =>date1= e.value } showIcon={true} />

                     </div> 
                     <div className="p-col-12 p-md-2">
                        <label htmlFor="todate"> To Date:</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Calendar  id="todate"  value={date1} onChange={(e) =>  date1= e.value } showIcon={true} />

                     </div> 
                     <div className="p-col-12 p-md-2">
                     <label htmlFor="paymentMode"> Payment Mode</label>
                    </div>
                     <div className="p-col-12 p-md-4">
                     <Dropdown id="paymentmode" options={paymentmodelist}  value={userForm.paymentmode}  onChange={handleInputChange}  required  autoWidth={false} />   
                 
                 
                    </div>
                    <div className="p-col-12 p-md-2">
                        
                        </div>
                    <div className="p-col-12 p-md-2">
                    <Button label="Search" icon="pi pi-search" onClick={handlePageChange} />
                     </div>   
                     <div className="p-col-12 p-md-2">
                        
                        </div>
  
 
                  </div>
            </div>
            <div className="content-section implementation">
            <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="400px" style={{marginTop:'5px', width: '2000px'}}  header="Search Details"
                    onSelectionChange={onSelectionChangeed}                     > 
                      <Column field="cano" header="CA No." filter={true} />
                        <Column field="customername" header="Customer Name" filter={true} />
                        <Column field="blockno" header="Block No" filter={true} />
                        <Column field="flatno" header="Flat No" filter={true} />
                        <Column field="meterno" header="Meter No" filter={true} />
                        <Column field="dcuid" header="DCU Id" filter={true} />
                        <Column field="transactionid" header="Transaction Id" filter={true} />
                        <Column field="authorizedby" header="Authorized By" filter={true} />
                        <Column field="paymentmode" header="Payment Mode" filter={true} />
                        <Column field="paymentdescription" header="Payment Description" filter={true} />
                        <Column field="paymentreference" header="Payment Reference" filter={true} />
                        <Column field="date" header="Date/Time Stamp" filter={true} />
                        <Column field="amount" header="Amount" filter={true} />
                                         
       </DataTable>
    </div>


             
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
export default connect(mapStateToProps)(PaymentHistory);
 