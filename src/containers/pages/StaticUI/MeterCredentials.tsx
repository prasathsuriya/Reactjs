import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';

interface IMeterCredentials {
    dispatch: Dispatch<any>;
    roleData: any;
    newUserData: any;
    meterCredentialsData: any;
    props: RouteComponentProps;
    dataTableValues: any
}
const MeterCredentials: React.FC<IMeterCredentials> = ({

    

}) => {
    
  
    const [dataTableSelection, setdataTableSelection] = useState();
    const [displayDialog, setdisplayDialog] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const basicTableValues = [
        { "sno": "1", "manufacturername": "INESH SMART ENERGY (P) LTD", "metercategory": "D3", "metertype": "8", "firmwareversion": "V-01.10", "Action": "Edit" },
        { "sno": "2", "manufacturername": "L&T Electrical & Automation", "metercategory": "D1", "metertype": "6", "firmwareversion": "V-02.15", "Action": "Edit" },
        { "sno": "3", "manufacturername": "INESH SMART ENERGY (P) LTD", "metercategory": "D1", "metertype": "6", "firmwareversion": "V-03.10", "Action": "Edit" }
    ];
    const metercredentialsdetail = {
        manufacturername: "",
        metercategory: "",
        metertype: "",
        firmwareversion: ""
    };
    let [meterCredentialsData, setInput] = useState(metercredentialsdetail);


    function onClickAdd(event) {
        setdisplayDialog(true);
    }
    const handleSubmit = (event: any) => {

        setIsFormSubmitted(true);

    }
    const handleInputChange = (event: any) => {
  
        if (event.target.id === "ManufacturerName") {
            meterCredentialsData.manufacturername = event.target.value;
        } else if (event.target.id === "MeterCategory") {
            meterCredentialsData.metercategory = event.target.value;
        } else if (event.target.id === "MeterType") {
            meterCredentialsData.metertype = event.target.value;
        } else if (event.target.id === "FirmwareVersion") {
            meterCredentialsData.firmwareversion = event.target.value;
        }

        setInput({ ...meterCredentialsData });
    }
    const showUserDialog = (items: any) => (e: any) => {
        var dataAssign = e.data;
        setdataTableSelection(dataAssign);
        meterCredentialsData.manufacturername = e.data.manufacturername;
        meterCredentialsData.metercategory = e.data.metercategory;
        meterCredentialsData.metertype = e.data.metertype;
        meterCredentialsData.firmwareversion = e.data.firmwareversion;
        setInput({ ...meterCredentialsData });
        setdisplayDialog(true);
    }
    return (

        <div className="p-grid p-fluid">
            <Dialog header="Icare unit Details" visible={displayDialog} style={{ width: '50vw', overflow: 'scroll' }} modal={true} onHide={() => setdisplayDialog(false)}>
                {
                    displayDialog &&
                    (

                        <div className="p-grid card-w-title">
                            <div className="p-grid">
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="ManufacturerName">Manufacturer Name </label>
                                </div>
                                <div className="p-col-12 p-md-4" style={{ marginBottom: '10px' }}>
                                    <InputText id="ManufacturerName" required value={meterCredentialsData.manufacturername} onChange={handleInputChange} />

                                </div>
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory">Meter Category</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <InputText id="MeterCategory" required value={meterCredentialsData.metercategory} onChange={handleInputChange} />
                                </div>
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterType">Meter Type</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <InputText id="MeterType" value={meterCredentialsData.metertype} onChange={handleInputChange} />
                                </div>
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="FirmwareVersion">Firmware Version</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <InputText id="FirmwareVersion" value={meterCredentialsData.firmwareversion} onChange={handleInputChange} />
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


            <div className="p-col-12">
                <div className="p-messages p-component p-messages-success" style={{ margin: '0 0 1em 0', display: 'block' }}>
                    <div className="p-messages-wrapper">
                        <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                        <ul>
                            <li>
                                <span className="p-messages-detail">Meter Credentials  menu used to View / Add / Eddit Meter Credentials ...
                                        </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                    </div>
                    <div style={{ textAlign: 'left' }}>
                        <Button type="button" icon="pi pi-plus" iconPos="left" label="Add Credentials" onClick={onClickAdd} style={{ width: '200px' }}></Button>
                    </div>
                </div>
                <div className="card card-w-title">

                    <Panel header="Meter Credentials" toggleable={true}  >

                        <DataTable value={basicTableValues} paginatorPosition="both" selectionMode="single"
                            paginator={true} rows={10} alwaysShowPaginator={false} selection={dataTableSelection}
                            scrollable={true} scrollHeight="200px"
                            onRowClick={showUserDialog(basicTableValues)}
                        // onSelectionChange={onSelectionChangeed}
                        >

                            <Column field="sno" header="S.no" />
                            <Column field="manufacturername" header="Meter Serial Number" />
                            <Column field="metercategory" header="Device ID" />
                            <Column field="metertype" header="Manufacturer Name" />
                            <Column field="firmwareversion" header="Communication Module" />
                            <Column field="Action" header="Meter Category" />

                        </DataTable>
                    </Panel>
                </div>

            </div>
        </div>

    );
};

const mapStateToProps = (state: any) => {
    const { roleData, newUserData } = state;
    console.log("state role " + roleData);
    return {
        roleData,
        newUserData
    };
}; 
export default connect(mapStateToProps)(MeterCredentials);
