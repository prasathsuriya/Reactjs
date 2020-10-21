import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import moment from "moment";



interface IOperatingunits { }
interface IOperatingunits {
  operatingunitData: any;
  dispatch: Dispatch<any>;
  state: {
    value: 0,
    dataTableValue: [],
    dataTableSelection: []
  }
}
const Operatingunits: React.FC<IOperatingunits> = ({


}) => {

  const [dataTableSelection, setdataTableSelection] = useState();
  const onSelectionChangeed = (e) => { setdataTableSelection(e.value) };


  const dataTableValues = [
    { "icareunitid": "PrePaid Meters", "operatingunitid": "1", "operatingunitname": "Meter on Board", "operatingunittype": "South chennai", "description": "Meter Details", "longdescription": "View meter details", "status": "Active", "department": "EB", "effectivedate": "02/01/2020", "enddate": "01/03/2040", "insertedby": "Murugavel", "inserteddate": "01-Feb-2020", "updatedby": "murugavel", "updateddate": "01-Feb-2020" },
    { "icareunitid": "Products", "operatingunitid": "2", "operatingunitname": "Product Configuration", "operatingunittype": "Chennai central", "description": "Product Details", "longdescription": "view product details", "status": "InActive", "department": "EB", "effectivedate": "02/06/2019", "enddate": "02/06/2039", "insertedby": "Rahul", "inserteddate": "01-March-2020", "updatedby": "Rahul", "updateddate": "01-March-2020" },
    { "icareunitid": "PrePaid Meters", "operatingunitid": "3", "operatingunitname": "Insident Management", "operatingunittype": "Vilupuram", "description": "Insident details", "longdescription": "view insident details", "status": "Active", "department": "EB", "effectivedate": "05/01/2019", "enddate": "05/01/2039", "insertedby": "kumar", "inserteddate": "01-Jan-2020", "updatedby": "kumar", "updateddate": "01-Jan-2020" }
  ];
  const branchunitdetail = {
    operatingunitid: 0,
    icareunitid: "",
    operatingunitname: "",
    operatingunittype: "",
    description: "",
    longdescription: "",
    status: "",
    department: "",
    effectivedate: "",
    enddate: ""
  };
  const [effectivedate, setEffectivedate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  let [operatingunitData, setInput] = useState(branchunitdetail);




  const onOperatingunitSelect = (event) => {



    if (!displayDialog) {
      var data = event.data;

      operatingunitData = data;

      const effDate = moment(data.effectivedate, 'DD/MM/YYYY').toDate();
      setEffectivedate(effDate);
      const endDate = moment(data.enddate, 'DD/MM/YYYY').toDate();
      setEnddate(endDate);
      setInput({ ...operatingunitData });
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

    if (event.target.id === "icareunitid") {
      operatingunitData.icareunitid = event.target.value;
    } else if (event.target.id === "operatingunitid") {
      operatingunitData.operatingunitid = event.target.value;
    } else if (event.target.id === "operatingunitname") {
      operatingunitData.operatingunitname = event.target.value;
    } else if (event.target.id === "operatingunittype") {
      operatingunitData.operatingunittype = event.target.value;
    } else if (event.target.id === "description") {
      operatingunitData.description = event.target.value;
    } else if (event.target.id === "longdescription") {
      operatingunitData.longdescription = event.target.value;
    } else if (event.target.id === "status") {
      operatingunitData.status = event.target.value;
    } else if (event.target.id === "department") {
      operatingunitData.department = event.target.value;
    } else if (event.target.id === "effectivedate") {
      operatingunitData.effectivedate = event.target.value;
    } else if (event.target.id === "enddate") {
      operatingunitData.enddate = event.target.value;
    }


    setInput({ ...operatingunitData });
  }

  const status = [
    { label: 'Select Status', value: null },
    { label: 'Active', value: 'Active' },
    { label: 'InActive', value: 'InActive' }
  ];
  const projectValues = [
    { label: 'PrePaid Meters', value: '1' },
    { label: 'Products', value: '2' },
    { label: 'PostPaid Meters', value: '3' }
  ];
  return (
    <div>


      <Dialog header="Business Unit Details" visible={displayDialog} style={{ width: '50vw', overflow: 'scroll' }} modal={true} onHide={() => setdisplayDialog(false)}>
        {
          displayDialog &&
          (

            <div className="p-grid card-w-title">
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="icareunitid">Project Name </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <Dropdown id="icareunitid" options={projectValues} value={operatingunitData.operatingunitid} required autoWidth={false} onChange={handleInputChange} />

                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="operatingunitid">Business Unit Id </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="operatingunitid" value={operatingunitData.operatingunitid} onChange={handleInputChange} />

                </div>


                <div className="p-col-12 p-md-2">
                  <label htmlFor="operatingunitname">Business Unit  Name</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="operatingunitname" value={operatingunitData.operatingunitname} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="operatingunittype">Business Unit Type</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="operatingunittype" value={operatingunitData.operatingunittype} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="description">Description</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="description" value={operatingunitData.description} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="longdescription">Long Description</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="longdescription" value={operatingunitData.longdescription} onChange={handleInputChange} />
                </div>


                <div className="p-col-12 p-md-2">
                  <label htmlFor="department">Department </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="department" value={operatingunitData.department} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="status">status</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Dropdown id="status" options={status} value={operatingunitData.status} required autoWidth={false} onChange={handleInputChange} />

                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="effectivedate">Effective Date</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Calendar placeholder="DateTime" value={effectivedate} viewDate={effectivedate} id="effectivedate" dateFormat="mm/dd/yy"   showIcon={true} onSelect={handleStartDateChange} />

                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="enddate">End Date</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Calendar placeholder="DateTime" value={enddate} viewDate={enddate} id="effectivedate" dateFormat="mm/dd/yy"  showIcon={true} onSelect={handleEndDateChange} />

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
          <h1>Search Business Unit</h1>
        </div>
        <div style={{ textAlign: 'left' }}>
          <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Business unit" onClick={onClickAdd}></Button>

        </div>
      </div>

      <div className="content-section implementation">

        <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single"
          paginator={true} rows={10} header="List of Business unit Details" responsive={true}
          alwaysShowPaginator={false} selection={dataTableSelection}
          onSelectionChange={onSelectionChangeed}
          onRowSelect={onOperatingunitSelect}
          style={{ marginTop: '5px', width: '2000px' }} >
          <Column field="icareunitid" header="Project Name" sortable={true} />
          <Column field="operatingunitid" header="Business Unit id" sortable={true} />


          <Column field="operatingunitname" header="Business Unit Name" sortable={true} />
          <Column field="operatingunittype" header="Business Unit Type" sortable={true} />
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
export default connect(mapStateToProps)(Operatingunits)