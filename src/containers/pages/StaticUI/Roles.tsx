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
import {Checkbox} from 'primereact/checkbox';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';
 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";


interface IRoles {}
interface IRoles {
    roleData: any;
    dispatch: Dispatch<any>;
      state : {
        label : string;
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] ,
        defaultChecked?: boolean;
        checkboxValue: any;
        checkedIcon?: any;
        uncheckedIcon?: any;

    }
}
const  Roles: React.FC<IRoles> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
      {"roleid":"1","rolename":"AE","roletype":"AssistantEngineer","permissiontype":"Meter On Board","description":"AssistantEngineer","longdescription":"AssistantEngineer","status":"Active", "department":"EB", "effectivedate":"02/01/2020","enddate":"01/03/2040","insertedby":"Murugavel","inserteddate":"01-Feb-2020","updatedby":"murugavel","updateddate":"01-Feb-2020"},
      {"roleid":"2","rolename":"SE","roletype":"SeniorEngineer","permissiontype":"Product Configuration","description":"SeniorEngineer","longdescription":"SeniorEngineer","status":"InActive","department":"EB", "effectivedate":"02/06/2019","enddate":"02/06/2039","insertedby":"Rahul","inserteddate":"01-March-2020","updatedby":"Rahul","updateddate":"01-March-2020"},
      {"roleid":"3","rolename":"TA","roletype":"TechnicalAssistant","permissiontype":"Insident Management","description":"TechnicalAssistant","longdescription":"TechnicalAssistant","status":"Active","department":"EB", "effectivedate":"05/01/2019","enddate":"05/01/2039","insertedby":"kumar","inserteddate":"01-Jan-2020","updatedby":"kumar","updateddate":"01-Jan-2020"}
 ];
       const roledetail={
        roleid:0,
        rolename:"",
        roletype : "",
        permissiontype : "",
        description:"",
        longdescription: "",
        status:"",
        department:"",
        effectivedate:"",
        enddate:""
      };      
       let [roleData, setInput] = useState(roledetail);
      const styles = {
        checkbox: {
          marginBottom: 16
        }
      };
      const handleCheckboxChange = (event) =>{
        //checked: (event.target.checked);
      }
      const[checked]=useState(false);
   

       const onPermissionSelect=(event)=>{
    
    
 
        if(!displayingDialog){
          //var data=event.data;
         
          //setInput(consumer);
         // permissionData=data;
          //if(userData!=null){
         //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
         //   consumerInputData.createdBy=data.createdBy;                                
         // }          
          //setInput(consumer);
         // setInput({ ...permissionData }); 
          setdisplayingDialog(true);
          //If need to show delete button
          //setShowDelete(true);
        }
        } 
        function onClickPermission(event) {
          setdisplayingDialog(true);
        }
        const[displayingDialog, setdisplayingDialog]=useState(false);

        const handlingSubmit = (event: any) => {    
              
          setIsFormSubmitted(true);
          
        }
        const handlingDeleteSubmit=(event)=>{
                 
        }
        
       
    const onRoleSelect=(event)=>{
      
 
      if(!displayDialog){
        var data=event.data;
       
        //setInput(consumer);
        roleData=data;
        //if(userData!=null){
       //   consumerInputData.updatedBy= userData.userProfile.userFkId.userId;
       //   consumerInputData.createdBy=data.createdBy;                                
       // }          
        //setInput(consumer);
        setInput({ ...roleData }); 
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
<Dialog header={roleData.roletype} visible={displayingDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayingDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-8 " style={{padding:'.5em'}}>
        <Checkbox value="Meter On Board" inputId="meteronboard" onChange={handleCheckboxChange} checked={checked} />
                    <label htmlFor="meteronboard" className="p-checkbox-label">Meter on Board</label>
                                </div>

                                <div className="p-col-8" style={{padding:'.5em'}}>
                                <Checkbox value="Product Configuration" inputId="cb2" onChange={handleCheckboxChange} checked={checked} />
                                <label htmlFor="cb2" className="p-checkbox-label">Product Configuration</label>
                                </div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                <Checkbox value="Insident Management" inputId="cb3" onChange={handleCheckboxChange} checked={checked} />
                                <label htmlFor="cb3" className="p-checkbox-label">Insident Management</label>
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

<Dialog header="Role Details" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="roleid">Role Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="roleid" value={roleData.roleid}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="rolename">Role  Name</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="rolename" value={roleData.rolename}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="roletype">Role Type</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="roletype"  value={roleData.roletype}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="permissiontype">Permission Type </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="permissiontype" value={roleData.permissiontype}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="description">Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="description" value={roleData.description}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="longdescription">Long Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="longdescription"  value={roleData.longdescription}/>
        </div>
      
        
        <div className="p-col-12 p-md-2">
            <label htmlFor="department">Department </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="department" value={roleData.department}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="effectivedate">Effective Date</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="effectivedate" value={roleData.effectivedate}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="enddate">End Date</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="enddate"  value={roleData.enddate}/>
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
                            <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Permission" onClick={onClickPermission}></Button>
                       </div>
    </div>
               
               
                </div>
           
                )
              }
            </Dialog>

         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Search Roles</h1>
                    </div>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Role" onClick={onClickAdd}></Button>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Permission" onClick={onClickPermission}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Role Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onRoleSelect} style={{marginTop:'5px', width: '2000px'}} > 
                                                 
     
                        <Column field="roleid" header="Role id" sortable={true} />
                        <Column field="rolename" header="Role Name" sortable={true} />
                        <Column field="roletype" header="Role Type" sortable={true} />
                        <Column field="permissiontype" header="Permission Type" sortable={true} />
                        <Column field="description" header="Description" sortable={true} />
                        <Column field="longdescription" header="Long Description" sortable={true} />
                        <Column field="status" header="Status" sortable={true}  />
                        <Column field="department" header="Department" sortable={true} />
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
export default connect(mapStateToProps)(Roles)