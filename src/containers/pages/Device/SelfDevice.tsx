import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { getAllSelfDevice } from "../../../store/actions/SelfDevice";

interface ISelfDevice {
    dispatch: Dispatch<any>;
    selfDeviceData: any;
}

const SelfDevice: React.FC<ISelfDevice> = ({
    dispatch, selfDeviceData
}) => {
    useEffect(() => {
        dispatch(getAllSelfDevice(""));
    }, []);
    const [tableData, setTableData] = useState(new Array<any>());
    if (selfDeviceData && !selfDeviceData.isLoading && selfDeviceData.items.length > 0
        && (selfDeviceData.items.length != tableData.length)) {
        setTableData(selfDeviceData.items);
    }

    const [dataTable, setDataTable] = useState();
    const exportCsv = () => {
        console.log(dataTable);
        if (dataTable)
            dataTable.exportCSV();
    }
    let header = <div style={{ textAlign: 'left' }}>
        <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={exportCsv}></Button>
    </div>;

    function rowColumnClick(rowData) {
        //window.location.href = "/threesixty/" + rowData.systemTitle;
    }
    const dateTemplate = (rowData, column) => {
        if (rowData.status === 0) {
            return   <div> {rowData.systemTitle} </div>;           
        } else {
            return <div>
                <a onClick={() => rowColumnClick(rowData)}>{rowData.systemTitle}</a>
            </div>;
        }
    }

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card card-w-title">
                    <h1>Self Registered</h1>
                    {selfDeviceData.isLoading && <ProgressSpinner />}

                    {!selfDeviceData.isLoading &&
                        < DataTable
                            value={tableData}
                            paginatorPosition="bottom"
                            selectionMode="single"
                            header={header} ref={(el) => { setDataTable(el); }}
                            paginator={true}
                            rows={10}
                            responsive={true}
                            alwaysShowPaginator={false}
                            emptyMessage="No records found"
                        >
                            <Column body={dateTemplate} field="systemTitle" header="Meter Serial Number" sortable={true} filter={true} filterMatchMode="contains" />
                            <Column field="systemTitle" header="Syste Title" sortable={true} filter={true} filterMatchMode="contains" />
                            <Column field="createdAt" header="Received Date" sortable={true} filter={true} filterMatchMode="contains" />
                            <Column field="statusString" header="Status" sortable={true} filter={true} filterMatchMode="contains" />
                        </DataTable>
                    }
                </div>
            </div>
        </div >
    );

};

const mapStateToProps = (state: any) => {
    const { selfDeviceData } = state;
    return {
        selfDeviceData
    };
};
export default connect(mapStateToProps)(SelfDevice);