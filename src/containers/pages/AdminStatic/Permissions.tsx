import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import moment from "moment";
 

interface IPermissions {}
interface IPermissions {
    roleData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  Permissions: React.FC<IPermissions> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"permissionid":"1","parentPermissionid":"","permissionlink":"/home","permissionname":"Home","description":"Dashboard Details","longdescription":"Dashboard Details","status":"Active", "department":"EB", "effectivedate":"02/01/2020","enddate":"01/03/2040","insertedby":"Murugavel","inserteddate":"01-Feb-2020","updatedby":"murugavel","updateddate":"01-Feb-2020"},
        {"permissionid":"2","parentPermissionid":"","permissionlink":"","permissionname":"Reports","description":"Reports Details","longdescription":"Reports Details","status":"Active","department":"EB", "effectivedate":"02/06/2019","enddate":"02/06/2039","insertedby":"Rahul","inserteddate":"01-March-2020","updatedby":"Rahul","updateddate":"01-March-2020"},
        {"permissionid":"3","parentPermissionid":"2:Reports","permissionlink":"/reports","permissionname":"reports","description":"Reports","longdescription":"Reports details","status":"Active","department":"EB", "effectivedate":"05/01/2019","enddate":"05/01/2039","insertedby":"kumar","inserteddate":"01-Jan-2020","updatedby":"kumar","updateddate":"01-Jan-2020"}
 ];
       const permissiondetail={
        permissionid:0,
        parentPermissionid:"",
        permissionlink:"",
        permissionname : "",
        description:"",
        longdescription: "",
        status:"",
        department:"",
        effectivedate:"",
        enddate:""
      };      
      const [effectivedate, setEffectivedate] = useState(new Date());
      const [enddate, setEnddate] = useState(new Date());
       let [permissionData, setInput] = useState(permissiondetail);

       

       
    const onPermissionSelect=(event)=>{
    
    
 
      if(!displayDialog){
        var data=event.data;
        
        permissionData=data;
        const effDate = moment(data.effectivedate, 'DD/MM/YYYY').toDate();
        setEffectivedate(effDate);
        const endDate = moment(data.enddate, 'DD/MM/YYYY').toDate();
        setEnddate(endDate);
        setInput({ ...permissionData }); 
        setdisplayDialog(true);
        
      }
      } 
      function onClickAdd(event) {
        permissionData.permissionid=0;
        permissionData.parentPermissionid="";
        permissionData.permissionlink="";
        permissionData.permissionname="";
        permissionData.description="";
        permissionData.longdescription="";
        permissionData.status="";
        permissionData.department="";
        permissionData.effectivedate="";
        permissionData.enddate="";
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
     
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isValid, setValid] = useState(false);
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
      }
      const handleStartDateChange = (event: any) => {
        setEffectivedate(event.value);
      };
      const handleEndDateChange = (event: any) => {
        setEnddate(event.value);
      };

      const handleInputChange = (event: any) => {
        if (event.target.id === "permissionid") {
          permissionData.permissionid = event.target.value;
        } else if (event.target.id === "parentPermissionid") {
          permissionData.parentPermissionid = event.target.value;
        } else if (event.target.id === "permissionlink") {
          permissionData.permissionlink = event.target.value;
        } else if (event.target.id === "permissionname") {
          permissionData.permissionname = event.target.value;
        } else if (event.target.id === "description") {
          permissionData.description = event.target.value;
        } else if (event.target.id === "longdescription") {
          permissionData.longdescription = event.target.value;
        }else if (event.target.id === "status") {
          permissionData.status = event.target.value;
        } else if (event.target.id === "effectivedate") {
          permissionData.effectivedate = event.target.value;
        } else if (event.target.id === "enddate") {
          permissionData.enddate = event.target.value;
        }
        setInput({ ...permissionData });
      }

      const status= [
        {label: 'Select Status', value: null},
        {label: 'Active', value: 'Active'},
        {label: 'InActive', value: 'InActive'} 
      ] ; 
  return (
    <div>


<Dialog header="Permission Details" visible={displayDialog} style={{ width: '50vw', overflow:'scroll' }} modal={true} onHide={() => setdisplayDialog(false) }>
              {
                displayDialog &&
                (
                  
                <div className="p-grid card-w-title"> 
                <div className="p-grid">
        <div className="p-col-12 p-md-2">
            <label htmlFor="permissionid">Permission Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="permissionid" value={permissionData.permissionid} onChange={handleInputChange}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="permissionid">Parent Permission Id </label>
        </div>
        <div className="p-col-12 p-md-4" style={{marginBottom:'10px'}}>
        <InputText id="parentPermissionid" value={permissionData.parentPermissionid} onChange={handleInputChange}/>   
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="permissionname">Permission  Name</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="permissionname" value={permissionData.permissionname} onChange={handleInputChange}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="permissiontype">Permission Link</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="permissionlink"  value={permissionData.permissionlink} onChange={handleInputChange}/>
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="description">Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="description" value={permissionData.description} onChange={handleInputChange}/> 
        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="longdescription">Long Description</label>
        </div>
        <div className="p-col-12 p-md-4">
        <InputText id="longdescription"  value={permissionData.longdescription} onChange={handleInputChange}/>
        </div>
      
        
        <div className="p-col-12 p-md-2">
            <label htmlFor="effectivedate">Effective Date</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Calendar placeholder="DateTime" value={effectivedate} viewDate={effectivedate} id="effectivedate" dateFormat="mm/dd/yy" onSelect={handleStartDateChange} showIcon={true} />

        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="enddate">End Date</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Calendar placeholder="DateTime" value={enddate} viewDate={enddate} id="effectivedate" dateFormat="mm/dd/yy" onSelect={handleEndDateChange} showIcon={true} />

        </div>
        <div className="p-col-12 p-md-2">
            <label htmlFor="status">status</label>
        </div>
        <div className="p-col-12 p-md-4">
        <Dropdown id="status" options={status}  value={permissionData.status} required  autoWidth={false} onChange={handleInputChange}/> 
       
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
                        <h1>Search Permissions</h1>
                    </div>
                    <div style={{textAlign:'left'}}>
                      <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Permission" onClick={onClickAdd}></Button>
                      {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
                    </div>
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10} header="List of Permission Details"  responsive={true}
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                    onSelectionChange={onSelectionChangeed} 
                    onRowSelect={onPermissionSelect}>
                                                 
     
                        <Column field="permissionid" header="Permission id" sortable={true} />
                        <Column field="permissionname" header="Permission Name" sortable={true} />
                        <Column field="permissionlink" header="Permission Link" sortable={true} />
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
export default connect(mapStateToProps)(Permissions)