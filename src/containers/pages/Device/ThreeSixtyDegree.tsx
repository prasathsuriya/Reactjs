import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dialog } from "primereact/dialog";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from 'primereact/scrollpanel';
import { getThreeSixtyInfo } from "../../../store/actions/NewDevice";
import { getReportColumnNames } from "../../../store/actions/ReportColumns";
import moment from "moment";

interface IThreeSixty {
    dispatch: Dispatch<any>;
    deviceFormData: any;
    match: any;
    reportColumnNames: any;
}

const ThreeSixty: React.FC<IThreeSixty> = ({
    dispatch, deviceFormData, match,
    reportColumnNames
}) => {
    let meterSerialNumber = match.params.id;
    useEffect(() => {
        dispatch(getReportColumnNames(null));
        dispatch(getThreeSixtyInfo(meterSerialNumber))
    }, []);

    const lastRTC = {
        blockLoadRTC: "-",
        dailyLoadRTC: "-",
        instantRTC: "-",
        billingRTC: "-"
    }
    const [getLastRTC, setLastRTC] = useState(lastRTC);
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const [isConDataAvailable, setIsConDataAvailable] = useState(false);
    if (!isDataAvailable && deviceFormData && !deviceFormData.isThree60Loading) {
        console.log( deviceFormData.three60Data);
        if (deviceFormData != null && deviceFormData.three60Data != null) {
            setIsDataAvailable(true);
            if (!isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId != null
                && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId != null) {
                setIsConDataAvailable(true);
            }

            const dateFarmet = "DD-MMM-YYYY hh:mm:ss";
            if (deviceFormData.three60Data.blockLoad[0] != null) {
                if (deviceFormData.three60Data.blockLoad[0] != null
                    && deviceFormData.three60Data.blockLoad[0].dateTime != null)
                    lastRTC.blockLoadRTC = moment(deviceFormData.three60Data.blockLoad[0].dateTime).format(dateFarmet);
            }
            if (deviceFormData.three60Data.dailyLoad[0] != null
                && deviceFormData.three60Data.dailyLoad[0].dateTime != null) {
                lastRTC.dailyLoadRTC = moment(deviceFormData.three60Data.dailyLoad[0].dateTime).format(dateFarmet);
            }
            if (deviceFormData.three60Data.billing[0] != null
                && deviceFormData.three60Data.billing[0].dateTime != null) {
                lastRTC.billingRTC = moment(deviceFormData.three60Data.billing[0].dateTime).format(dateFarmet);
            }
            if (deviceFormData.three60Data.instant[0] != null
                && deviceFormData.three60Data.instant[0].dateTime != null) {
                lastRTC.instantRTC = moment(deviceFormData.three60Data.instant[0].dateTime).format(dateFarmet);
            }
            setLastRTC({ ...lastRTC });
        }
    }
    const viewProfile = {
        header: "",
    }
    const [getViewProfile, setViewProfile] = useState(viewProfile);
    const [datatable, setDatatable] = useState();
    const [isDialogState, setDialogState] = useState(false);
    const [columnList, setColumnList] = useState(new Array<string>());
    const [columnNames, setColumnNames] = useState(new Array<string>());
    function getKeys(obj) {
        var keys = new Array<string>();
        for (var key in obj) {
            keys.push(key);
        }
        return keys;
    }
    var indents = new Array<any>();
    for (var i = 0; i < columnList.length; i++) {
        indents.push(
            <Column
                field={columnList[i]}
                header={columnNames[i]}
                key={i}
                sortable={true}
                style={{width:'220px'}}
            />
        );
    }
    function loadViewTable(listData: any[]) {
        setDatatable([]);
        setColumnList(new Array<string>());
        if (listData !== null) {
            if (listData.length > 0) {
                var list = new Array<any>();
                var columnNameList = new Array<any>();
                var columnNameDesc = new Array<any>();
                var columnIsFiled = false;
                listData.forEach(element => {
                    var data = element.data;
                    data = data.replace(/^"(.*)"$/, '$1');
                    //var strf=JSON.stringify(data);
                    var obj = JSON.parse(data);
                    if (typeof obj !== "string") {
                        if (!columnIsFiled) {
                           // columnNameDesc.push("Date");
                           // columnNameList.push("dateTime");
                            for (var key in obj) {
                                var colName = reportColumnNames.items.find(
                                    e => e.partialObisCode === key.replace(/[^a-zA-Z0-9]/g, "")
                                );
                                try {
                                    if (colName !== null) {
                                        columnNameDesc.push(colName.obisName);
                                        columnNameList.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                                    }
                                    else {
                                        columnNameDesc.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                                        columnNameList.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                                    }
                                }
                                catch (error) {
                                    //console.error(error);
                                    columnNameDesc.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                                    columnNameList.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                                }
                            }
                            columnIsFiled = true;
                            setColumnList(columnNameList);
                            setColumnNames(columnNameDesc);
                        }
                        var newobj = {};
                        for (var key in obj) {
                            newobj[key.replace(/[^a-zA-Z0-9]/g, "")] = obj[key];
                        }
                        //newobj["dateTime"] = moment(element.dateTime).format("DD/MM/YYYY hh:mm:ss");
                        //if (newobj["dateTime"] === "Invalid date")
                          //  newobj["dateTime"] = "NA"
                        list.push(newobj);
                    }
                });
                setDatatable(list);
            }
        }

    }
    const showViewDialog = (id: any) => (e: any) => {
        console.log("id " + id);
        if (id == 4) {
            viewProfile.header = "Billing";
            loadViewTable(deviceFormData.three60Data.billing);
            // setDatatable(deviceFormData.three60Data.billing.data);
        } else if (id == 3) {
            viewProfile.header = "Daily Profile";
            loadViewTable(deviceFormData.three60Data.dailyLoad);
        } else if (id == 2) {
            viewProfile.header = "Load Profile";
            loadViewTable(deviceFormData.three60Data.blockLoad);
        } else if (id == 1) {
            viewProfile.header = "Instant Profile";
            loadViewTable(deviceFormData.three60Data.instant);
        }
        setViewProfile({ ...viewProfile });
        setDialogState(true);
    }

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card card-w-title">
                    <h1>360 Degree View</h1>

                    <Accordion activeIndex={0} >
                        <AccordionTab header="Meter Info" >
                            <div className="p-grid">
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Meter Serial Number</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterSerialNumber}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterCategory" >Consumer Name</label>
                                </div>
                                <div className="p-col-12 p-md-4 " >
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumeName}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="DeviceID">Manufacturer Name</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.manufactureFkId.manufactureName}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="YearofManufacture">Consumer Number</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumerNumber}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="ManufacturerName">Meter IP</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterIp}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterIP">Consumer Phone No</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumerPhNo}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter IMEI No</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.imeiNumber}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="ComunicationModuleType">  Consumer Email ID</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumerEmailid}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Phase</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.phaseString}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Status</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.statusString}
                                </div>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="Profiles Links">
                            <div className="p-grid">
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Profile Name</label>
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    RTC - Date & Time
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterCategory" >View</label>
                                </div>
                                <div className="p-col-12 p-md-6 formlableboldblack" >
                                    Interaction Notes <a  >Add Interaction</a>
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Instant Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                    {getLastRTC.instantRTC}
                                </div>
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" > <a onClick={showViewDialog('1')}>View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">

                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Load Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                    {getLastRTC.blockLoadRTC}
                                </div>
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" ><a onClick={showViewDialog('2')}>View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Daily Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                    {getLastRTC.dailyLoadRTC}
                                </div>
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" ><a onClick={showViewDialog('3')}>View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">
                                </div>

                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Billing Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                    {getLastRTC.billingRTC}
                                </div>
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" ><a onClick={showViewDialog('4')} >View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">
                                </div>
                            </div>
                        </AccordionTab>
                    </Accordion>

                </div>
            </div>

            <Dialog
                header={getViewProfile.header}
                visible={isDialogState}
                style={{ width: "90%" }}
                modal={true}
                onHide={() => setDialogState(false)}
            >
                {isDialogState && (
                    <ScrollPanel style={{ width: '100%', height: '400px' }}>

                        <div className="card card-w-title">
                            <div className="p-grid">
                                <DataTable
                                    value={datatable}
                                    responsive={true}
                                    emptyMessage="No Record Found"
                                    scrollable={true}
                                    style={{marginTop:'30px'}}
                                >
                                    {indents}
                                    {/* <Column className="dtcolumnoverflow" field="meterSerialNumber" header="Serial Number" sortable={true} filter={true} /> */}
                                </DataTable>

                            </div>
                        </div>
                    </ScrollPanel>
                )}
            </Dialog>    
        </div>
            );
        
        };
        
const mapStateToProps = (state: any) => {
    const {deviceFormData, reportColumnNames} = state;
    return {
                deviceFormData, reportColumnNames
            };
        };
        
        
export default connect(mapStateToProps)(ThreeSixty);