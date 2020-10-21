import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dialog } from "primereact/dialog";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ScrollPanel } from 'primereact/scrollpanel';
import { getThreeSixtyInfo } from "../../../store/actions/NewDevice";
import { getReportColumnNames } from "../../../store/actions/ReportColumns";
import moment from "moment";
import {Panel} from 'primereact/panel';
interface IViewMeter {
    dispatch: Dispatch<any>;
    deviceFormData: any;
    match: any;
    reportColumnNames: any;
} 

const ViewMeter: React.FC<IViewMeter> = ({
    dispatch, deviceFormData, match,
    reportColumnNames
}) => {
    let meterSerialNumber = match.params.id;
    useEffect(() => {
        dispatch(getReportColumnNames(null));
        dispatch(getThreeSixtyInfo(meterSerialNumber))
    }, []);
//alert(JSON.stringify(deviceFormData));
    const lastRTC = {
        blockLoadRTC: "-",
        dailyLoadRTC: "-",
        instantRTC: "-",
        billingRTC: "-"
    }

    const dataMeterProfile = [

        {"sno":"1","profileName":"Instant Profile","lastFetchDateTime":"18-Dec-2019 3:27 PM","profilefetchInterval":"5 Min","viewData":"View Data","meterno":"0000824"},
        {"sno":"2","profileName":"Block Load Profile","lastFetchDateTime":"18-Dec-2019 3:27 PM","profilefetchInterval":"15 Min","viewData":"View Data","meterno":"0000824"},
        {"sno":"3","profileName":"Daily Load Profile","lastFetchDateTime":"18-Dec-2019 3:27 PM","profilefetchInterval":"1 Day","viewData":"View Data","meterno":"0000824"},
        {"sno":"4","profileName":"Billing Profile","lastFetchDateTime":"18-Dec-2019 3:27 PM","profilefetchInterval":"1 Month","viewData":"View Data","meterno":"0000824"},
        {"sno":"5","profileName":"Name Plate","lastFetchDateTime":"18-Dec-2019 3:27 PM","profilefetchInterval":"NA","viewData":"View Data","meterno":"0000824"},
        {"sno":"6","profileName":"Tamper Event","lastFetchDateTime":"18-Dec-2019 3:27 PM","profilefetchInterval":"Immediate","viewData":"View Data","meterno":"0000824"}
         
      
           ];
           const    dataMeterEvent =[
            {"sno":"1","eventType":"Voltage related event","lastOccurrenceDateTime":"18-Dec-2019 3:27 PM","eventID":"1","eventName":"R-Phase – Voltage Missing – Occurrence","viewData":"View Data","meterno":"0000824"},
            {"sno":"2","eventType":"Current related event","lastOccurrenceDateTime":"18-Dec-2019 3:27 PM","eventID":"53","eventName":"Y Phase – Current reverse – Occurrence","viewData":"View Data","meterno":"0000824"},
            {"sno":"3","eventType":"Other event","lastOccurrenceDateTime":"18-Dec-2019 3:27 PM","eventID":"201","eventName":"Influence of Permanent Magnet or AC/ DC Electromagnet - Occurence","viewData":"View Data","meterno":"0000824"},
            {"sno":"4","eventType":"Power Related event","lastOccurrenceDateTime":"18-Dec-2019 3:27 PM","eventID":"105","eventName":"Power failure – Occurrence","viewData":"View Data","meterno":"0000824"},
            {"sno":"5","eventType":"Transaction event","lastOccurrenceDateTime":"18-Dec-2019 3:27 PM","eventID":"151","eventName":"Real Time Clock – Date and Time","viewData":"View Data","meterno":"0000824"},
            {"sno":"6","eventType":"Non rollover event","lastOccurrenceDateTime":"18-Dec-2019 3:27 PM","eventID":"251","eventName":"Meter Cover Opening – Occurrence","viewData":"View Data","meterno":"0000824"},
            {"sno":"7","eventType":"Control event","lastOccurrenceDateTime":"18-Dec-2019 3:27 PM","eventID":"301","eventName":"Load switch status - Disconnected","viewData":"View Data","meterno":"0000824"}
        
           ];     
    const [getLastRTC, setLastRTC] = useState(lastRTC);
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const [isConDataAvailable, setIsConDataAvailable] = useState(false);
    console.log( deviceFormData.three60Data);
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
            />
        );
    }
    function loadViewTable(listData: any[]) {
        setDatatable([]);
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
    function rowColumnClick(rowData) {
        
        if(rowData.profileName=="Instant Profile"){
            window.location.href = "/staticui/meterinstantinformationreport";
        }else if (rowData.profileName=="Daily Load Profile"){
            window.location.href = "/staticui/meterdailyloadinformationreport";
        }else if(rowData.profileName=="Billing Profile"){
            window.location.href = "/staticui/meterbillinginformationreport";
        }else if(rowData.profileName=="Block Load Profile"){
            window.location.href = "/staticui/meterblockloadinformationreport";
        }else if(rowData.profileName=="Name Plate"){
            window.location.href = "/staticui/meternameplateinformationreport";
        }else if(rowData.profileName=="Tamper Event"){
            window.location.href = "/staticui/metereventinformationreport";
        }else{
            window.location.href = "/staticui/metereventinformationreport";
        }
            
    }
    const dateTemplate = (rowData, column) => {     
        return <div>
            <a onClick={() => rowColumnClick(rowData)}>{rowData.viewData}</a>
        </div>;
    }
    
    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card card-w-title">
                    <h1> View Meter </h1>

                 
                    <Panel header="Meter Information" toggleable={true}>
                            <div className="p-grid">
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Meter Serial Number</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterSerialNumber}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterType" >Meter Type</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterType || "8"}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterDeviceId" >Device ID</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterDeviceId || "ISEIN4000055"}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterCategory" >Meter Category</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterCategory  || "D3"}
                                </div>
                             	
	
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="DeviceID">Manufacturer Name</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.manufactureFkId.manufactureName   || "INESH SMART ENERGY (P) LTD"}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="CurrentRating">Current Rating</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.currentRating || "(5-10) A"}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="FirmwareVersion">Firmware Version</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.firmwareVersion || "V-01.10"}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="YearofManufacture">  Year of Manufacture</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.yearofManufacture || "2019"}
                                </div>
                              
 
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="ManufacturerName">Meter IP</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && deviceFormData.three60Data.meterProfile.meterIp || "123.253.35.212"}
                                </div>
                              
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Sim No</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterSimNo || "56985456321"}
                                </div>
                               
                            </div>
                            </Panel>
                            <Panel header="Pre Paid Meter Information" toggleable={true}>
                       
                       <div className="p-grid">
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="CANo" > CA No</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           25874565456
                           </div>
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="IPType" >IP Type</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           Static
                           </div>

                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="DCUId" > DCU Id</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           6
                           </div>
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="IPAddress" >IP Address</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           123.253.35.212
                           </div>

                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="MACID" >MAC ID</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           254
                           </div>
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="IPAddress" >Port No</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           4059
                           </div>
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="ScheduleType" >Schedule Type</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           Day
                           </div>
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="ScheduleRetryNumber" >Schedule Retry Number</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           3
                           </div>

                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="ScheduleInterval" >Schedule Interval</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           1
                           </div>
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="ServerPortNo" >Server Port No</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           4059
                           </div>
                           <div className="p-col-12 p-md-2 formlableboldblack" >
                               <label htmlFor="ServerIPAddress" >Server IP Address</label>
                           </div>
                           <div className="p-col-12 p-md-4 formlableboldblack">
                           3.25.245.25	
                           </div>
                           <div className="p-col-12 p-md-6  dtcolumnoverflow"  >
                               <a href="/staticui/meter360view/IN1007137">360 Degree View Meter</a>
                                </div> 
                         </div>


                         </Panel>
                            <Panel header="Meter Location / Address" toggleable={true}>
                       
                            <div className="p-grid">
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Zone" >Zone</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                Egmore
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Country" >Country</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                India
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Region" >Region</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                01-Chennai Urban
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="State" >State</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                Tamil Nadu
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="SubStation" >Sub Station</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                Chintadripet
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="District" >District</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                Chennai
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Feeder" >Feeder</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                F545
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="City" >City</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                Chennai
                                </div>	
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Transformer" >Transformer</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                T2541
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Locality" >Locality</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                Anna Salai
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Pole" >Pole</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                P2514
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Pincode" >Pincode</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                600002
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Latitude" >Latitude</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                12.365458
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="Longitude" >Longitude</label>
                                </div>
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                82.1545456
                                </div>
		
	
                            </div>
                            </Panel>
                    <Panel  header="Meter Consumer Information" toggleable={true}>
                       
                       <div className="p-grid">
                    <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterCategory" >Consumer Name</label>
                                </div>
                                <div className="p-col-12 p-md-4 " >
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumeName}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="YearofManufacture">Consumer Number</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumerNumber}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="ConsumerAddress">Consumer Address</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumerAddress}
                                </div>

                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterIP">Consumer Phone No</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumerPhNo}
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="ComunicationModuleType">  Consumer Email ID</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    {isDataAvailable && isConDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterConsumerInfoFkId.consumerEmailid}
                                </div>
                                </div>
                    </Panel>

                    <Panel  header="Meter Profile Data" toggleable={true}>
                    <DataTable
                                   value={dataMeterProfile}
                                    paginatorPosition="bottom"
                                    selectionMode="single"
                                     paginator={true}
                                     editMode="row"
                                   rows={10}                                 
                                    responsive={true}                                   
                                    emptyMessage="No Record Found"
                                >
                                    <Column  field="sno" header="S No"  />
                                    <Column   className="dtcolumnoverflow"  field="profileName" header="Profile Name"  />
                                    <Column  field="lastFetchDateTime" header="(RTC) Last Fetch Date & Time"  />
                                    <Column  field="profilefetchInterval" header="Profile fetch Interval"  />
                                    <Column   body={dateTemplate} field="viewData" header="View Data"  />
                                  
                                   
                                </DataTable>
                    
                    </Panel>
                    <Panel  header="Meter Event Data" toggleable={true}>
                    <DataTable
                                   value={dataMeterEvent}
                                    paginatorPosition="bottom"
                                    selectionMode="single"
                                     paginator={true}
                                   rows={10}                                 
                                    responsive={true}                                   
                                    emptyMessage="No Record Found"
                                >
                                    <Column  field="sno" header="S No"  />
                                    <Column  field="eventType" header="Event Type"  />
                                    <Column  field="lastOccurrenceDateTime" header="Last Occurrence Date & Time"  />
                                    <Column  field="eventID" header="Event ID"  />
                                    <Column  field="eventName" header="Event Name"  /> 
                                    <Column    body={dateTemplate} className="dtcolumnoverflow"  field="viewData" header="View Data"  />
                                  
                                   
                                </DataTable>
                    
                    </Panel>
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
        
        
export default connect(mapStateToProps)(ViewMeter);