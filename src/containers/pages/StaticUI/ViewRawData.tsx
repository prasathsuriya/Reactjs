import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getReport, getAllSearchCriteriaList } from "../../../store/actions/Report";
import { getReportColumnNames } from "../../../store/actions/ReportColumns";
import { RouteComponentProps } from "react-router";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import classnames from "classnames";
import { reportColumnNames } from "../../../store/reducers/ReportColumns";
import ColumnType from "../../../store/types/Columns";
import Moment from "react-moment";
import moment from "moment";
import { getJobProfiles } from "../../../store/actions/JobProfile";

interface IViewRawData {
  dispatch: Dispatch<any>;
  reportData: any;
  reportColumnNames: any;
  jobProfileData: any;
}

const ViewRawData: React.FC<IViewRawData> = ({
  dispatch,
  reportData,
  reportColumnNames,
  jobProfileData
}) => {
  useEffect(() => {
    dispatch(getJobProfiles(""));
    dispatch(getAllSearchCriteriaList("1")); //tenanId // TODO
  }, []);
  const searchCriteria = {
    selected: "",
    startdate: "",
    enddate: "",
    id: 0,
    rawDataCnt: "",
    distributionZone: "",
    meterSerialNumber: ""
  };

  const profiles = [
    { label: "Select profile", value: null },
    { label: "Block load", value: "1" },
    { label: "Instant", value: "2" },
    { label: "Daily load", value: "3" },
    { label: "Biiling", value: "4" },
    { label: "Name plate", value: "5" }
  ];
  const rawDataLst=[
    { label: "Select", value: null },
    { label: "Last Record", value: "1" },
    { label: "Last 5 Record", value: "5" },
  ];
  const columns = Array<ColumnType>();

  const [profile, setProfile] = useState(searchCriteria);
  const [columnNames, setColumnNames] = useState(columns);
  const [profileData, setProfileData] = useState(new Array<any>());
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [profileOptions, setProfileOptions] = useState(profiles);
  if (!profileLoaded && !jobProfileData.isLoading) {
    var meters = new Array<any>();
    if (jobProfileData.items.length > 0) {
      for (var i = 0; i < jobProfileData.items.length; i++) {
        meters.push({ label: jobProfileData.items[i].profileLongName, value: jobProfileData.items[i].id })
      }
      setProfileOptions(meters);
      setProfileData(jobProfileData.items);
      setProfileLoaded(true);
    }
  }

  const handleProfileChange = (event: any) => {
    if (event.target.id === "dropdownProfile") {
      profile.selected = event.target.value;
      profile.id = event.target.value;
    } else if (event.target.id === "fnameId") {
      profile.startdate = event.target.value;
    } else if (event.target.id === "lnameId") {
      profile.enddate = event.target.value;
    } else if (event.target.id === "dropdownDistZone") {
      profile.distributionZone = event.target.value;
    } else if (event.target.id === "dropdownRawData") {
      profile.rawDataCnt = event.target.value;
    } else if (event.target.id === "dropdownSerialNumber") {
      profile.meterSerialNumber = event.target.value;
    }
    setProfile({ ...profile });

    dispatch(getReportColumnNames(profile));
  };

  const [conZoneList, setConZoneList] = useState(new Array<any>());
  const [distZoneList, setDistZoneList] = useState(new Array<any>());
  const [meterList, setMeterList] = useState(new Array<any>());
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

  const handleSubmit = (event: any) => {

    var item = profileData.find(x => x.id === profile.id);
    var profilename = "";
    var id=0;
    if (item !== null && item) {
      profilename = item.profileShortName;
      id=item.id;
    }
    var model = { profileShortName: profilename };
    model["id"] = id;
    if (profile.meterSerialNumber === "true") {
     // model["readAll"] = profile.meterSerialNumber;
    } else {
      if(profile.meterSerialNumber !== "")
      model["meterSerials"] = [profile.meterSerialNumber];
    }
    if(profile.rawDataCnt !== "")
    model["rawDataCnt"] = profile.rawDataCnt;
    if(profile.distributionZone !== "")
    model["zone"] = profile.distributionZone;
    dispatch(getReport(model));
    setPageLoaded(false);
  };

  const [isPageLoaded, setPageLoaded] = useState(false);
  const [tableData, setTableData] = useState(new Array<string>());
  const [columnList, setColumnList] = useState(new Array<string>());

  if (isPageLoaded) {
    
    console.log("Haha : " + reportColumnNames.items.length);
    console.log("Haha : " + reportColumnNames.length);
  }
  if (!isPageLoaded && !reportData.isLoading) {
    setTableData([]);
    setColumnList(new Array<string>());
    var list = new Array<any>();
    var columnNameList = new Array<any>();
      var columnNameDesc = new Array<any>();
    if (reportData.items.length > 0) {   
    //  alert(reportData.items.length);
      var columnIsFiled = false;
      reportData.items.forEach(element => {
        var data = element.data;
        var obj = JSON.parse(data);
        if (typeof obj !== "string") {
          if (!columnIsFiled) {
            columnNameDesc.push("Meter Serial Number");
            columnNameList.push("Meter Serial Number");
            columnNameDesc.push("RTC");
            columnNameList.push("RTC");
            columnNameDesc.push("Raw Data");
            columnNameList.push("Raw Data");
         /*   for (var key in obj) {
              var colName = reportColumnNames.items.find(
                e => e.partialObisCode === key
              );
              if (colName) {
                console.log("obisCode: " + colName.obisCode);
                console.log("colName: " + colName.obisName);

                columnNameDesc.push(colName.obisName);
                columnNameList.push(key.replace(/[^a-zA-Z0-9]/g, ""));
              }
            }*/
            columnIsFiled = true;
            setColumnList(columnNameList);
            setColumnNames(columnNameDesc);
          }
          var newobj = {};
          for (var key in obj) {
            newobj[key.replace(/[^a-zA-Z0-9]/g, "")] = obj[key];
          }
          newobj["RTC"] = moment(element.rtc).format("DD/MM/YYYY hh:mm:ss");
          newobj["Meter Serial Number"] = element.meterSerialNumber;
          newobj["Raw Data"] = element.rawData;
          if (newobj["RTC"] === "Invalid date")
            newobj["RTC"] = "NA"
          list.push(newobj);
        }
      });
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
  //alert(columnNameList);
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
  const [datatable, setDatatable] = useState();

  const exportCsv = () => {
    console.log(datatable);
    if (datatable)
      datatable.exportCSV();
  }

  let header = <div style={{ textAlign: 'left' }}>
    <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={exportCsv}></Button>
  </div>;

  return (
    <div>
      <div className="p-grid p-fluid dashboard">
        <div className="p-col-12">
          <div className="card summary">
            <div className="p-grid">
              <div className="p-col-12 p-md-2">
                <label htmlFor="hostNameId">Meter Serial Number</label>
              </div>
              <div className="p-col-12 p-md-3">
                <Dropdown
                  options={meterList}
                  value={profile.meterSerialNumber}
                  autoWidth={false}
                  onChange={handleProfileChange}
                  id="dropdownSerialNumber"
                />
              </div>
              <div className="p-col-12 p-md-2">
                <label htmlFor="portId">Profile</label>
              </div>
              <div className="p-col-12 p-md-3">
                <Dropdown
                  options={profileOptions}
                  value={profile.selected}
                  autoWidth={false}
                  onChange={handleProfileChange}
                  id="dropdownProfile"
                />
              </div>
            </div>

            <div className="p-grid">
              <div className="p-col-12 p-md-2">
                <label htmlFor="hostNameId">Distribution Zone</label>
              </div>
              <div className="p-col-12 p-md-3">
                <Dropdown
                  options={distZoneList}
                  value={profile.distributionZone}
                  autoWidth={false}
                  onChange={handleProfileChange}
                  id="dropdownDistZone"
                />
              </div>
              <div className="p-col-12 p-md-2">
                <label htmlFor="portId">RawData </label>
              </div>
              <div className="p-col-12 p-md-3">
                <Dropdown
                  options={rawDataLst}
                  value={profile.rawDataCnt}
                  autoWidth={false}
                  onChange={handleProfileChange}
                  id="dropdownRawData"
                />
              </div>
            </div>

            <div className="p-col-6">
              <div className="p-grid">
                <div className="p-col">
                  <Button
                    label="Get Raw Data"
                    onClick={handleSubmit}
                    type="button"
                    className="generateButton"
                    style={{ width: 250 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {reportData.isLoading && <ProgressSpinner />}
      {!reportData.isLoading && (
        <div className="animated fadeIn">
          <div className="p-grid">
            <div className="p-col-12">
              <div className="card card-w-title">
                <h1>View Raw Data</h1>
                <DataTable
                  value={tableData}
                  paginatorPosition="bottom"
                  selectionMode="single"
                  header={header} ref={(el) => { setDatatable(el); }}
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
  const { reportData, reportColumnNames, jobProfileData } = state;
  return {
    reportData,
    reportColumnNames,
    jobProfileData
  };
};

export default connect(mapStateToProps)(ViewRawData);
