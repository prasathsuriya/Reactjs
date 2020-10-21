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


interface IIcareunits { }
interface IIcareunits {
  icareunitData: any;
  dispatch: Dispatch<any>;
  state: {
    value: 0,
    dataTableValue: [],
    dataTableSelection: []
  }
}
const Icareunits: React.FC<IIcareunits> = ({


}) => {


  const [dataTableSelection, setdataTableSelection] = useState();
  const onSelectionChangeed = (e) => { setdataTableSelection(e.value) };
  const dataTableValues = [
    { "icareunitid": "1", "icareunittype": "PrePaid Meters", "icareunitname": "TNEB", "description": "PrePaid Meter Management", "longdescription": "PrePaid meter Management", "status": "Active", "department": "EB", "effectivedate": "02/01/2020", "enddate": "01/03/2040", "insertedby": "Murugavel", "inserteddate": "01-Feb-2020", "updatedby": "murugavel", "updateddate": "01-Feb-2020" },
    { "icareunitid": "2", "icareunittype": "Products", "icareunitname": "TNEB", "description": "Product Details", "longdescription": "view product details", "status": "InActive", "department": "EB", "effectivedate": "02/06/2019", "enddate": "02/06/2039", "insertedby": "Rahul", "inserteddate": "01-March-2020", "updatedby": "Rahul", "updateddate": "01-March-2020" },
    { "icareunitid": "3", "icareunittype": "PostPaid Meters", "icareunitname": "TNEB", "description": "PostPaid Meter Management", "longdescription": "PostPaid meter Management", "status": "Active", "department": "EB", "effectivedate": "05/01/2019", "enddate": "05/01/2039", "insertedby": "kumar", "inserteddate": "01-Jan-2020", "updatedby": "kumar", "updateddate": "01-Jan-2020" }
  ];
  const icareunitdetail = {
    icareunitid: 0,
    icareunitname: "",
    icareunittype: "",
    description: "",
    longdescription: "",
    status: "",
    department: "",
    effectivedate: "",
    enddate: ""
  };

  const [effectivedate, setEffectivedate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  let [icareunitData, setInput] = useState(icareunitdetail);




  const onIcareunitSelect = (event) => {



    if (!displayDialog) {
      var data = event.data;

      icareunitData = data;

      const effDate = moment(data.effectivedate, 'DD/MM/YYYY').toDate();
      setEffectivedate(effDate);
      const endDate = moment(data.enddate, 'DD/MM/YYYY').toDate();
      setEnddate(endDate);

      setInput({ ...icareunitData });
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
      icareunitData.icareunitid = event.target.value;
    } else if (event.target.id === "icareunitname") {
      icareunitData.icareunitname = event.target.value;
    } else if (event.target.id === "icareunitid") {
      icareunitData.icareunitid = event.target.value;
    } else if (event.target.id === "icareunittype") {
      icareunitData.icareunittype = event.target.value;
    } else if (event.target.id === "description") {
      icareunitData.description = event.target.value;
    } else if (event.target.id === "longdescription") {
      icareunitData.longdescription = event.target.value;
    } else if (event.target.id === "status") {
      icareunitData.status = event.target.value;
    } else if (event.target.id === "department") {
      icareunitData.department = event.target.value;
    } else if (event.target.id === "effectivedate") {
      icareunitData.effectivedate = event.target.value;
    } else if (event.target.id === "enddate") {
      icareunitData.enddate = event.target.value;
    }
    setInput({ ...icareunitData });
  }
  const status = [
    { label: 'Select Status', value: null },
    { label: 'Active', value: 'Active' },
    { label: 'InActive', value: 'InActive' }
  ];
  return (
    <div>


      <Dialog header="Project  Details" visible={displayDialog} style={{ width: '50vw', overflow: 'scroll',position:'absolute' }}  modal={true} onHide={() => setdisplayDialog(false)}>
        {
          displayDialog &&
          (

            <div className="p-grid card-w-title">
              <div className="p-grid">
                <div className="p-col-12 p-md-2">
                  <label htmlFor="icareunitid">Project Id </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="icareunitid" value={icareunitData.icareunitid} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="icareunitname">Project Name</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="icareunitname" value={icareunitData.icareunitname} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="icareunittype">Project Code</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="icareunittype" value={icareunitData.icareunittype} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="description">Description</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="description" value={icareunitData.description} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="longdescription">Long Description</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <InputText id="longdescription" value={icareunitData.longdescription} onChange={handleInputChange} />
                </div>


                <div className="p-col-12 p-md-2">
                  <label htmlFor="department">Verical </label>
                </div>
                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                  <InputText id="department" value={icareunitData.department} onChange={handleInputChange} />
                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="effectivedate">Effective Date</label>
                </div>
                <div className="p-col-12 p-md-4">

                  <Calendar placeholder="DateTime"   value={effectivedate} viewDate={effectivedate} id="effectivedate" dateFormat="mm/dd/yy" onSelect={handleStartDateChange}  showIcon={true} />

                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="enddate">End Date</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Calendar placeholder="DateTime" value={enddate} viewDate={enddate} id="effectivedate" dateFormat="mm/dd/yy" onSelect={handleEndDateChange}  showIcon={true} />

                </div>
                <div className="p-col-12 p-md-2">
                  <label htmlFor="status">status</label>
                </div>
                <div className="p-col-12 p-md-4">
                  <Dropdown id="status" options={status} value={icareunitData.status} required autoWidth={false} onChange={handleInputChange} />

                </div>

                <div className="p-col-12 p-md-6">


                  <Button label="Save" icon="pi pi-save" onClick={handleSubmit} />

                </div>

              </div>


            </div>

          )
        }
      </Dialog>

      <div className="content-section introduction">
        <div className="feature-intro">
          <h1>Search Project</h1>
        </div>
        <div style={{ textAlign: 'left' }}>
          <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Project" onClick={onClickAdd}></Button>

        </div>
      </div>

      <div className="content-section implementation">

        <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single"
          paginator={true} rows={10} header="List of Project Details" responsive={true}
          alwaysShowPaginator={false} selection={dataTableSelection}
          onSelectionChange={onSelectionChangeed}
          onRowSelect={onIcareunitSelect}>


          <Column field="icareunitid" header="Project Id" sortable={true} />
          <Column field="icareunitname" header="Project Name" sortable={true} />
          <Column field="icareunittype" header="Project Type" sortable={true} />
          <Column field="description" header="Description" sortable={true} />
          <Column field="longdescription" header="Long Description" sortable={true} />
          <Column field="status" header="Status" sortable={true} />
          <Column field="department" header="Verical" sortable={true} />
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
export default connect(mapStateToProps)(Icareunits)