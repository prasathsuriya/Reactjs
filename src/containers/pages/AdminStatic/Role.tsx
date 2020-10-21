import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';
import moment from "moment";
import CheckboxTree from 'react-checkbox-tree';



interface IRoles { }
interface IRoles {
  roleData: any;
  dispatch: Dispatch<any>;
  state: {
    label: string;
    value: 0,
    dataTableValue: [],
    dataTableSelection: [],
    defaultChecked?: boolean;
    checkboxValue: any;
    checkedIcon?: any;
    uncheckedIcon?: any;
    checked: [];
    expanded: [];

  };

}
const Roles: React.FC<IRoles> = ({


}) => {
  const [checked, setChecked] = useState();
  const [expanded, setExpanded] = useState();

  const [dataTableSelection, setdataTableSelection] = useState();


  const onSelectionChangeed = (e) => { setdataTableSelection(e.value) };
  const dataTableValues = [
    { "roleid": "1", "roletype": "AE", "rolename": "Assistant Engineer", "permissiontype": "Meter On Board", "description": "AssistantEngineer", "longdescription": "AssistantEngineer", "status": "Active", "department": "EB", "effectivedate": "02/01/2020", "enddate": "01/03/2040", "insertedby": "Murugavel", "inserteddate": "01-Feb-2020", "updatedby": "murugavel", "updateddate": "01-Feb-2020" },
    { "roleid": "2", "roletype": "SE", "rolename": "Senior Engineer", "permissiontype": "Product Configuration", "description": "SeniorEngineer", "longdescription": "SeniorEngineer", "status": "InActive", "department": "EB", "effectivedate": "02/06/2019", "enddate": "02/06/2039", "insertedby": "Rahul", "inserteddate": "01-March-2020", "updatedby": "Rahul", "updateddate": "01-March-2020" },
    { "roleid": "3", "roletype": "TA", "rolename": "Technical Assistant", "permissiontype": "Insident Management", "description": "TechnicalAssistant", "longdescription": "TechnicalAssistant", "status": "Active", "department": "EB", "effectivedate": "05/01/2019", "enddate": "05/01/2039", "insertedby": "kumar", "inserteddate": "01-Jan-2020", "updatedby": "kumar", "updateddate": "01-Jan-2020" }
  ];
  const roledetail = {
    roleid: 0,
    rolename: "",
    roletype: "",
    description: "",
    longdescription: "",
    status: "",
    department: "",
    effectivedate: "",
    enddate: "",
    projectName: ""
  };
  const [effectivedate, setEffectivedate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  let [roleData, setInput] = useState(roledetail);

  const styles = {
    checkbox: {
      marginBottom: 16
    }
  };
  const handleCheckboxChange = (event) => {
    //checked: (event.target.checked);
  }



  const onPermissionSelect = (event) => {

    window.location.href = "/rolemapview";

    if (!displayingDialog) {

    }
  }
  function onClickPermission(event) {


    setdisplayingDialog(true);
  }
  const [displayingDialog, setdisplayingDialog] = useState(false);

  const handlingSubmit = (event: any) => {

    setIsFormSubmitted(true);

  }
  const handlingDeleteSubmit = (event) => {

  }


  const onRoleSelect = (event) => {


    if (!displayDialog) {
      var data = event.data;

      roleData = data;
      const effDate = moment(data.effectivedate, 'DD/MM/YYYY').toDate();
      setEffectivedate(effDate);
      const endDate = moment(data.enddate, 'DD/MM/YYYY').toDate();
      setEnddate(endDate);
      setInput({ ...roleData });
      setdisplayDialog(true);

    }
  }
  function onClickAdd(event) {
    setdisplayDialog(true);
  }
  const [displayDialog, setdisplayDialog] = useState(false);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
    if (event.target.id === "roleid") {
      roleData.roleid = event.target.value;
    } else if (event.target.id === "rolename") {
      roleData.rolename = event.target.value;
    } else if (event.target.id === "roletype") {
      roleData.roletype = event.target.value;
    } else if (event.target.id === "description") {
      roleData.description = event.target.value;
    } else if (event.target.id === "longdescription") {
      roleData.longdescription = event.target.value;
    } else if (event.target.id === "projectName") {
      roleData.projectName = event.target.value;
    } else if (event.target.id === "status") {
      roleData.status = event.target.value;
    } else if (event.target.id === "effectivedate") {
      roleData.effectivedate = event.target.value;
    } else if (event.target.id === "enddate") {
      roleData.enddate = event.target.value;
    }
    setInput({ ...roleData });
  }
  const nodes = [{
    value: 'mars',
    label: 'Mars',
    children: [
      { value: 'phobos', label: 'Phobos' },
      { value: 'deimos', label: 'Deimos' },
    ],
  }];
  const onCheck = (checked) => {
   // alert(checked);
    setChecked({ ...checked });
    setdisplayingDialog(true);

  }

  const onExpand = (expanded) => {
    setExpanded({ ...expanded });
  }

  const status = [
    { label: 'Select Status', value: null },
    { label: 'Active', value: 'Active' },
    { label: 'InActive', value: 'InActive' }
  ];
  return (

    <div>
      <Dialog header={roleData.roletype} visible={displayingDialog} style={{ width: '50vw', overflow: 'scroll' }} modal={true} onHide={() => setdisplayingDialog(false)}>
        {
          displayDialog &&
          (

            <div className="p-grid card-w-title">
              <div className="p-grid">

                <CheckboxTree
                  nodes={nodes}
                  checked={checked}
                  expanded={expanded}
                  onCheck={onCheck}
                  onExpand={onExpand}
                  iconsClass='fa5'
                  icons={{
                    check: <span className="rct-icon rct-icon-check" />,
                    uncheck: <span className="rct-icon rct-icon-uncheck" />,
                    halfCheck: <span className="rct-icon rct-icon-half-check" />,
                    expandClose: <span className="rct-icon rct-icon-expand-close" />,
                    expandOpen: <span className="rct-icon rct-icon-expand-open" />,
                    expandAll: <span className="rct-icon rct-icon-expand-all" />,
                    collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                    parentClose: <span className="rct-icon rct-icon-parent-close" />,
                    parentOpen: <span className="rct-icon rct-icon-parent-open" />,
                    leaf: <span className="rct-icon rct-icon-leaf" />,
                  }}
                />

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

      <Dialog header="Role Details" visible={displayDialog} style={{ width: '50vw', overflow: 'scroll' }} modal={true} onHide={() => setdisplayDialog(false)}>
        {
          displayDialog &&
          (

            <div className="p-grid card-w-title">
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="roleid">Role Id </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="roleid" value={roleData.roleid} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="rolename">Role  Name</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="rolename" value={roleData.rolename} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="roletype">Role Type</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="roletype" value={roleData.roletype} onChange={handleInputChange} />
                </div>

                <div className="p-col-12 p-md-2">
                  <label htmlFor="description">Description</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="description" value={roleData.description} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="longdescription">Long Description</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="longdescription" value={roleData.longdescription} onChange={handleInputChange} />
                </div>


                <div className="p-col-12 p-md-2">
                  <label htmlFor="department">Department </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="department" value={roleData.department} onChange={handleInputChange} />
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
                  <Dropdown id="status" options={status} value={roleData.status} required autoWidth={false} onChange={handleInputChange} />

                </div>
                <div className="p-col-12 p-md-3">
                  <Button label="Add Role" icon="pi pi-save" onClick={handleSubmit} />
                </div>
                <div className="p-col-12 p-md-3">


                  <Button label="Assign Permission" icon="pi pi-save" onClick={onPermissionSelect} />
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
        <div style={{ textAlign: 'left' }}>
          <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Role" onClick={onClickAdd}></Button>
        </div>
      </div>

      <div className="content-section implementation">

        <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single"
          paginator={true} rows={10} header="List of Role Details" responsive={true}
          alwaysShowPaginator={false} selection={dataTableSelection}
          onSelectionChange={onSelectionChangeed}
          onRowSelect={onRoleSelect}>

          <Column field="roleid" header="Role id" sortable={true} />
          <Column field="rolename" header="Role Name" sortable={true} />
          <Column field="roletype" header="Role Type" sortable={true} />
          <Column field="description" header="Description" sortable={true} />
          <Column field="longdescription" header="Long Description" sortable={true} />
          <Column field="status" header="Status" sortable={true} />
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