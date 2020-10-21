import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getReportOnDemand } from "../../store/actions/ReportOnDemand";
import { getReportColumnNames } from "../../store/actions/ReportColumns";
import { getDeviceList } from "../../store/actions/NewDevice";

import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import {Calendar} from 'primereact/calendar';

import ColumnType from "../../store/types/Columns";
import Moment from "react-moment";
import moment from "moment";
import { getJobProfiles } from "../../store/actions/JobProfile";
import { getAllSearchCriteriaList } from "../../store/actions/Report";
import { getCurrentUser } from "../../store/selectors/Accounts";

interface IReport {
  dispatch: Dispatch<any>;
  reportOnDemandtData: any;
  reportColumnNames: any;
  deviceFormData: any;
  jobProfileData:any;
  reportData:any;
}

const ReportOnDemand: React.FC<IReport> = ({
  dispatch,
  reportOnDemandtData,
  reportColumnNames,
  deviceFormData,
  jobProfileData,
  reportData
}) => {

  useEffect(() => {
    dispatch(getJobProfiles(""));
    dispatch(getDeviceList(null));
    var curentUser=getCurrentUser();
    if(curentUser!=null){
      setUserData(curentUser);
      dispatch(getAllSearchCriteriaList(curentUser.userProfile.tenantFkId.id));    
    }          
  }, []);
  const profiledata = {
    selected: "",    
    entry:"",
    startdate:"",
    enddate:"",
    id: 0,
    meter:"",
    simulator:"false", 
    zone:"",
    consumptionZone:""
  };

  const dataLoadTypes = [
    { label: "Live", value: "false" },
    { label: "Simulator", value: "true" }
  ];
  const profiles = [
    { label: "Block load", value: "1" },
    { label: "Daily load", value: "2" },
    { label: "Biiling", value: "3" },
    { label: "Name plate", value: "4" }
  ];
  const countList= [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
  ];
  const columns = Array<ColumnType>();

  const [profile, setProfile] = useState(profiledata);

  const [meterList, setMeterList] = useState(new Array<any>());
  const [columnNames, setColumnNames] = useState(columns);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [conZoneList, setConZoneList] = useState(new Array<any>());
  const [distZoneList, setDistZoneList] = useState(new Array<any>());
  const [userData, setUserData] = useState();
  
  if (reportData && reportData.searchCriteria && !reportData.isSearchCriteriaLoading) {
    if (conZoneList.length === 0) {
      var list = new Array<any>();
      reportData.searchCriteria.consumptionList.map(function (item) {
        list.push({ label: item.conZoneName, value: item.conZoneName, key: item.id });
      });
      console.log(list);
      setConZoneList(list);
    }
    if (distZoneList.length === 0) {
      var list = new Array<any>();
      reportData.searchCriteria.areaList.map(function (item) {
        list.push({ label: item.description, value: item.description, key: item.id });
      });
      console.log(list);
      setDistZoneList(list);
    }
    if (distZoneList.length === 0) {
      var meters = new Array<any>();
      if (meterList.length === 0) {
        meters.push({ label: "All", value: "true", selected: true });
        for (var i = 0; i < reportData.searchCriteria.meterSerialNumberList.length; i++) {
          var element = reportData.searchCriteria.meterSerialNumberList[i];
          meters.push({ label: element, value: element });
        }
        setMeterList(meters);
      }
    }
  }

  const handleProfileChange = (event: any) => {
    if (event.target.id === "dropdownProfile") {
      profile.selected = event.target.value;
      profile.id = event.target.value;
      ChangeInput(profile.id);
    }else if (event.target.id === "dropdownMeter") {
      profile.meter = event.target.value;    
    }    
    else if (event.target.id === "dtStart") {
      profile.startdate = event.target.value;
    } else if (event.target.id === "dtEnd") {
      profile.enddate = event.target.value;
    }
    else if (event.target.id === "billCount") {
      profile.entry = event.target.value;
    }
    else if (event.target.id === "dataTypeId") {
      profile.simulator = event.target.value;
    }
    else if (event.target.id === "dropdownDistZone") {
      profile.zone = event.target.value;
    } else if (event.target.id === "dropdownConZone") {
      profile.consumptionZone = event.target.value;
    }
    setProfile({ ...profile });

    dispatch(getReportColumnNames(profile));
  };

  const handleStartDateChange=(event: any)=>{
    setStartDate(event.value);
  };
  const handleEndDateChange=(event: any)=>{
    setEndDate(event.value);
  };
  const [profileData, setProfileData] = useState(new Array<any>());
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [profileOptions, setProfileOptions] = useState(profiles);
  if (!profileLoaded && !jobProfileData.isLoading) {
    var meters=new Array<any>();
    if(jobProfileData.items.length>0){                
      for(var i=0;i<jobProfileData.items.length;i++){
        meters.push( { label: jobProfileData.items[i].profileLongName, value: jobProfileData.items[i].id })
      }
      console.log(meters);
      setProfileOptions(meters);
      setProfileData(jobProfileData.items);
      setProfileLoaded(true);
    }
  }
  function ChangeInput(id:any){
    if(id===3 || id===1){
      setShowDate(true);
      setShowCount(false);
    }
    else if(id>=4){
      setShowDate(false);
      setShowCount(true);
    }
    else{
      setShowDate(false);
      setShowCount(false);
    }
  }

  const handleSubmit = (event: any) => {
    
    var item=profileData.find(x=>x.id===profile.id);
    var profilename="";
    if(item!==null && item){
      profilename=item.profileShortName;
    }
    var model={profileShortName:profilename};   
    if(profile.id===1){
        model["fromDate"]=moment(startDate).format("DD-MM-YYYY-HH:mm");
        model["toDate"]=moment(endDate).format("DD-MM-YYYY-HH:mm");
        if(profile.meter==="true")
        model["readAll"]=profile.meter;
        else
        model["meterSerials"]=[profile.meter];     
    } 
    else if(profile.id===2){
      if(profile.meter==="true")
      model["readAll"]=profile.meter;
      else
      model["meterSerials"]=[profile.meter];
    } 
    else if(profile.id===3){
        model["fromDate"]=moment(startDate).format("DD-MM-YYYY-HH:mm");
        model["toDate"]=moment(endDate).format("DD-MM-YYYY-HH:mm");
        if(profile.meter==="true")
        model["readAll"]=profile.meter;
        else
        model["meterSerials"]=[profile.meter];
    }
    else if(profile.id>=4){
        model["billingCount"]=parseInt(profile.entry);
        if(profile.meter==="true")
        model["readAll"]=profile.meter;
        else
        model["meterSerials"]=[profile.meter];
    }
    if(profile.simulator === "true"){
      model["simulator"]=profile.simulator;
    }
    if(profile.consumptionZone !== "")
    model["consumptionZone"] = profile.consumptionZone;
    if(profile.zone !== "")
    model["zone"] = profile.zone;
    
    dispatch(getReportOnDemand(model));
    setPageLoaded(false);
  };
  const [isPageLoaded, setPageLoaded] = useState(false);
  const [tableData, setTableData] = useState(new Array<any>());
  const [columnList, setColumnList] = useState(new Array<string>());
  const [isMeterLoaded, setMeterLoaded] = useState(false);
  const [isShowCount, setShowCount] = useState(false);
  const [isShowDate, setShowDate] = useState(false);

  if (isPageLoaded) {
    console.log("Haha : " + reportColumnNames.length);
  }
  if (!isMeterLoaded && !deviceFormData.isLoading) {
    var meters=new Array<any>();
    if(deviceFormData.items.length>0){      
      meters.push({ label: "All", value: "true", selected: true });
      for(var i=0;i<deviceFormData.items.length;i++){
        var element=deviceFormData.items[i];
        meters.push({ label: element, value: element });
      }      
      setMeterLoaded(true);
      setMeterList(meters);   
    }     
  }
  if (!isPageLoaded && !reportOnDemandtData.isLoading) {
    setTableData(new Array<any>());
    setColumnList(new Array<string>());
    var list = new Array<any>();
    var columnNameList = new Array<any>();
    var columnNameDesc = new Array<any>();
    if (reportOnDemandtData.items.length > 0) {
      console.log(reportColumnNames);     
      var columnIsFiled = false;
      if( reportOnDemandtData.items.length>0 )
      {
        columnNameDesc.push("Meter Serial Number");
        columnNameList.push("Meter Serial Number");        
        columnNameDesc.push("Error");
        columnNameList.push("Error");
        setColumnList(columnNameList);
        setColumnNames(columnNameDesc);
      reportOnDemandtData.items.forEach(element => {
        //var data = element.records[0];
       try{                
        if(element.data && element.data!==null &&  typeof element.data !== "string") {
          if(element.data.length>0){
            element.data.forEach(elementData => {
              var obj = JSON.parse(elementData);  
              if (typeof obj !== "string") {
                if (!columnIsFiled) {   
                 // columnNameDesc.push("RTC");
                 // columnNameList.push("RTC");               
                  for (var key in obj) {
                    var colName = reportColumnNames.items.find(
                      e => e.partialObisCode === key.replace(/[^a-zA-Z0-9]/g, "")
                    );
                    //console.log("colName: " + colName.description);
                    try {
                      if(colName!==null){
                        columnNameDesc.push(colName.obisName);
                        columnNameList.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                        }
                        else{
                          columnNameDesc.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                        columnNameList.push(key.replace(/[^a-zA-Z0-9]/g, ""));
                        }
                    }
                    catch(error) {
                      console.error(error);
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
                newobj["Meter Serial Number"] = element.meter.meterSerialNo;
                newobj["RTC"] = moment(element.rtc).format("DD/MM/YYYY hh:mm:ss");
                if (newobj["RTC"] === "Invalid date")
                newobj["RTC"] = "NA"
                list.push(newobj);
              }
            });

          }
          else{
                var newobj = {};               
                newobj["Meter Serial Number"] = element.meter.meterSerialNo;
                var msg="";
                if(element.errors && element.errors!==null &&  typeof element.errors !== "string") {
                  if(element.errors.length>0){
                    element.errors.forEach(elementData => {
                      msg= msg + elementData.toString();

                    });
                  }
                }
                newobj["Error"] = msg;
                list.push(newobj);
          }
        }     
        

      }catch(error) {
       }
      });
    }
      setTableData(list);
    }else{
      columnNameDesc.push("Meter Serial Number");
      columnNameList.push("No Record Found");
      columnNameDesc.push("RTC");
      columnNameList.push("RTC");
      setColumnList(columnNameList);
      setColumnNames(columnNameDesc);      
      setTableData(list);
    }
    setPageLoaded(true);
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

  const[datatable, setDatatable]=useState();

  const exportCsv=()=>{
    console.log(datatable);
    datatable.exportCSV();
  }

  const exportPDDF=()=>{
    datatable.exportPDF();
  }

  let header = <div style={{textAlign:'left'}}>
    <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={exportCsv}></Button>
    {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
  </div>;

  return (
    
    <div>
      <div className="p-grid p-fluid dashboard">    
        <div className="p-col-12">    
          <div className="card summary">    
          <div className="p-grid">           
              <div className="p-col-12 p-md-1">
                <label htmlFor="hostNameId">Select Data Type</label>
              </div>
              <div className="p-col-12 p-md-3">
                <Dropdown
                    options={dataLoadTypes}
                    value={profile.simulator}
                    autoWidth={false}
                    onChange={handleProfileChange}
                    placeholder="Select meter"
                    id="dataTypeId"
                  />
              </div>
              <div className="p-col-12 p-md-1">
                  <label htmlFor="hostNameId">Distribution Zone</label>
                </div>
                <div className="p-col-12 p-md-3">
                  <Dropdown
                    options={distZoneList}
                    value={profile.zone}
                    autoWidth={false}
                    onChange={handleProfileChange}
                    id="dropdownDistZone"
                  />
                </div>
                <div className="p-col-12 p-md-1">
                  <label htmlFor="portId">Consumption Zone</label>
                </div>
                <div className="p-col-12 p-md-3">
                  <Dropdown
                    options={conZoneList}
                    value={profile.consumptionZone}
                    autoWidth={false}
                    onChange={handleProfileChange}
                    id="dropdownConZone"
                  />
                </div>
            </div>
            <div className="p-grid">  
              <div className="p-col-12 p-md-1">
                <label htmlFor="portId">Select Meter</label>
              </div>
              <div className="p-col-12 p-md-3">
                 <Dropdown
                    options={meterList}
                    value={profile.meter}
                    autoWidth={false}
                    onChange={handleProfileChange}
                    placeholder="Select meter"
                    id="dropdownMeter"                    
                  />
              </div>
              <div className="p-col-12 p-md-1">
                <label htmlFor="portId">Select Profile</label>
              </div>
              <div className="p-col-12 p-md-3">
                 <Dropdown
                    options={profileOptions}
                    value={profile.selected}
                    autoWidth={false}
                    onChange={handleProfileChange}
                    placeholder="Select profile"
                    id="dropdownProfile"                 
                  />
              </div>
              {isShowCount && (
              <div className="p-col-12 p-md-4">     
                <div className="p-grid">    
                    <div className="p-col-12 p-md-3">
                      <label htmlFor="hostNameId">Select Entry</label>
                    </div>
                    <div className="p-col-12 p-md-9">
                      <Dropdown
                          options={countList}
                          value={profile.entry}
                          autoWidth={false}
                          onChange={handleProfileChange}
                          placeholder="Select Entry"
                          id="billCount"
                          style={{ width: 250 }}
                        />
                    </div>
                  </div>
                </div>)}
                {isShowDate &&(                  
                  <div className="p-col-12 p-md-4">
                    <div className="p-grid">
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">start:</label>                        
                      </div> 
                      <div className="p-col-12 p-md-4" >
                            <Calendar placeholder="DateTime" showTime={true} value={startDate} viewDate={startDate} id="dtStart" dateFormat="mm/dd/yy" onSelect={handleStartDateChange}/>
                        </div> 
                      <div className="p-col-12 p-md-2">                  
                        <label className="labelfont">end:</label>                        
                      </div>  
                      <div className="p-col-12 p-md-4">
                            <Calendar placeholder="DateTime" showTime={true} value={endDate} viewDate={endDate} id="dtEnd" dateFormat="mm/dd/yy"  onSelect={handleEndDateChange}/>
                        </div>              
                    </div>
                  </div>
                )}              
            </div>            
          </div>    
          <div className="p-col-12 p-md-2">
            <span className="title"></span>
            <div className="p-grid">
                <Button
                  label="Get Data"
                  onClick={handleSubmit}
                  type="button"
                  className="generateButton"
                  style={{ width: 250 }}
                />
              </div>
            </div>
           
        </div>
      </div>      
      {reportOnDemandtData.isLoading && (<ProgressSpinner />)}
      {!reportOnDemandtData.isLoading && (
        <div className="animated fadeIn">
          <div className="p-grid">
            <div className="p-col-12">
              <div className="card card-w-title">
                <h1>On Demand Report</h1>
                <DataTable
                  value={tableData}
                  paginatorPosition="bottom"
                  selectionMode="single"
                  header={header} ref={(el:any) => { setDatatable(el); }}
                  paginator={true}
                  rows={10}
                  responsive={true}
                  alwaysShowPaginator={false}
                  emptyMessage="No Record Found"
                  scrollable={true}
                  style={{marginTop:'30px'}}
                >
                  {indents}
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  const { reportOnDemandtData, reportColumnNames, deviceFormData, jobProfileData, reportData } = state;
  return {
    reportOnDemandtData,
    reportColumnNames,
    deviceFormData,
    jobProfileData,
    reportData
  };
};
 
export default connect(mapStateToProps)(ReportOnDemand);
