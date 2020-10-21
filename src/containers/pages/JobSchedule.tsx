import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DataTable } from 'primereact/datatable';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import CustomCron from '../core/corneditor';
import { getJobscheduleList, saveJobschedule, deleteJobschedule } from "../../store/actions/JobSchedule";
import { getJobProfiles } from "../../store/actions/JobProfile";
import { getAllSearchCriteriaList } from "../../store/actions/Report";
import { Column } from 'primereact/column';
import { Growl } from 'primereact/growl';
import { InputText } from 'primereact/inputtext';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { Dialog } from 'primereact/dialog';
import { getCurrentUser } from "../../store/selectors/Accounts";
import { InputSwitch } from 'primereact/inputswitch';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from 'primereact/message';

// import CronEditor from 'cron-editor-react';

// import Cron from 'react-cron-generator'
// import 'react-cron-generator/dist/cron-builder.css'


interface IJobSchedule {
  dispatch: Dispatch<any>;
  jobscheduleData: any;
  jobProfileData: any;
  reportData: any;
}
const JobSchedule: React.FC<IJobSchedule> = ({ 
  dispatch, jobscheduleData, jobProfileData,reportData
}) => {
  useEffect(() => {
    dispatch(getJobProfiles(""));
    var keys = getKeys(scheduleData);
    var curentUser = getCurrentUser();
    if (curentUser != null) {
      setUserData(curentUser);
      dispatch(getJobscheduleList(curentUser.userProfile.tenantFkId.id));
      dispatch(getAllSearchCriteriaList(curentUser.userProfile.tenantFkId.id)); 
    }
  }, []);

  const schedule = {
    profileId: "0",
    priority: "0",
    profileName: "",
    control: "0",
    controlValue: true,
    userId: "admin",
    cron: "0 0 0 * * ? *",
    tenantId: 0,
    jobId: 0,
    zone: "",
    consumptionZone: ""
  };
  function getKeys(obj) {
    var keys = new Array();
    for (var key in obj) {
      keys.push(key);
    }
    return keys;
  }
  const profiles = [
    { label: "Block load", value: "1" },
    { label: "Daily load", value: "2" },
    { label: "Biiling", value: "3" },
    { label: "Name plate", value: "4" }
  ];
  const preorityList = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" }
  ];
  const [conZoneList, setConZoneList] = useState(new Array<any>());
  const [distZoneList, setDistZoneList] = useState(new Array<any>());
  if (reportData && reportData.searchCriteria && !reportData.isSearchCriteriaLoading) {
    if (conZoneList.length === 0) {
      var list = new Array<any>();
      reportData.searchCriteria.consumptionList.map(function (item) {
        list.push({ label: item.conZoneName, value: item.conZoneName, key: item.id });
      });
      setConZoneList(list);
    }
    if (distZoneList.length === 0) {
      var list = new Array<any>();
      reportData.searchCriteria.areaList.map(function (item) {
        list.push({ label: item.description, value: item.description, key: item.id });
      });
      setDistZoneList(list);
    }
  }

  const [scheduleData, setInput] = useState(schedule);
  const [userData, setUserData] = useState();

  const handleProfileChange = (event: any) => {
    if (event.target.id === "dropdownProfile") {
      scheduleData.profileName = event.target.value;
    } else if (event.target.id === "dropdownControl") {
      scheduleData.controlValue = event.value;
    }
    else if (event.target.id === "dropdownPriority") {
      scheduleData.priority = event.target.value;
    }
    else if (event.target.id === "dropdownDistZone") {
      scheduleData.zone = event.target.value;
    }else if (event.target.id === "dropdownConZone") {
      scheduleData.consumptionZone = event.target.value;
    }
    setInput({ ...scheduleData });
    checkValidation();
  };

  const [isValid, setValid] = useState(false);

  const checkValidation = () => {
    if ((scheduleData.profileName !== null && scheduleData.profileName !== "")
      && (scheduleData.priority !== null && scheduleData.priority !== "")
      && (scheduleData.cron !== null && scheduleData.cron !== "0 0 0 * * ? *")
    ) {
      setValid(true);
    }
    else {
      setValid(false);
    }

  }
  const handleSubmit = (event: any) => {
    setIsFormSubmitted(true);
    if (isValid) {
      scheduleData.control = (scheduleData.controlValue === true) ? "1" : "0";
      setInput({ ...scheduleData });
      dispatch(saveJobschedule(scheduleData));
      setIsDispatchedSave(true);
      setSumbmited(true);
    }
  }
  const [tableData, setTableData] = useState(new Array<any>());
  const [profileData, setProfileData] = useState(new Array<any>());
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isDispatchedSave, setIsDispatchedSave] = useState(false);
  const [profileOptions, setProfileOptions] = useState(profiles);
  const [cornValue, setCornValue] = useState('* * 0 * * ? *');
  const [displayDialog, setdisplayDialog] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  if (!profileLoaded && !jobProfileData.isLoading) {
    var meters = new Array<any>();
    if (jobProfileData.items.length > 0) {
      for (var i = 0; i < jobProfileData.items.length; i++) {
        meters.push({ label: jobProfileData.items[i].profileLongName, value: jobProfileData.items[i].profileShortName })
      }
      setProfileOptions(meters);
      setProfileData(jobProfileData.items);
      setProfileLoaded(true);
    }
  }
  const [selectedData, setSelectedData] = useState();

  const [isPageLoaded, setPageLoaded] = useState(false);
  const [isSumbmit, setSumbmited] = useState(false);
  const [growl, setGrowl]=useState();
  const [showMessage, setShowMessage]=useState(false);
  const [msgSeverity, setSeverity]=useState("success");    
    const [msgDescription, setDescriptiony]=useState("saved successfully");    
    
    function successMessage( key:string){     
        return <Message severity={msgSeverity} key={key} text={msgDescription} />
      }
  if (isDispatchedSave && !jobscheduleData.isLoading && jobscheduleData.isFormSubmit && isSumbmit) {
    setdisplayDialog(false);    
    setSumbmited(false);
    if(jobscheduleData.status && jobscheduleData.status!==null){
      setDescriptiony(jobscheduleData.status.displayMessage);
      if(jobscheduleData.status.value ===true ){
        if(jobscheduleData.status.code ===200){
          if (userData != null) {
            dispatch(getJobscheduleList(userData.userProfile.tenantFkId.id));
          }
          setIsDispatchedSave(false);
          setIsFormSubmitted(false);
          setTimeout(() => {
            setPageLoaded(false);
            //          loadGrid();
          }, (1000)); 
        // growl.show({severity: 'success', summary: 'Success', detail: jobscheduleData.status.displayMessage});
        setSeverity("success");
        setShowMessage(true);
        }
        else if(jobscheduleData.status.code ===300){
          //growl.show({severity: 'warn', summary: 'Warn', detail: jobscheduleData.status.displayMessage});
          
          setSeverity("warn");
          setShowMessage(true);
        }
      }
      else{
        //growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});        
        setSeverity("error");
        setShowMessage(true);
      }
    }
  }
  loadGrid();
  function loadGrid() {
    if (!isPageLoaded && !jobscheduleData.isLoading) {
      var meters = new Array<any>();
      if (jobscheduleData.items.length > 0) {
        for (var i = 0; i < jobscheduleData.items.length; i++) {
          var element = jobscheduleData.items[i];
          var elem = element.cron.split(" ");
          var values = elem.filter(function (el) { return el; });
          element["seconds"] = values[0];
          element["minutes"] = values[1];
          element["hours"] = values[2];
          element["dayOfMonth"] = values[3];
          element["month"] = values[4];
          element["dayOfWeek"] = values[5];
          element["year"] = values[6];
          if (element.control === 1)
            element["controlString"] = "ON";
          else
            element["controlString"] = "OFF";
          element["profileDisplay"] = getJobName(element.jobName);
          meters.push(element);
        }
        setPageLoaded(true);
        setTableData(meters);
      }
    }
  }

  function getJobName(id) {
    var item = profileData.find(x => x.profileShortName === id);
    if (item !== null) {
      return item ? item.profileLongName : "";
    }
    else {
      return "";
    }
  }

  function onClickAdd(event) {
    if (!displayDialog) {
      setInput(schedule);
      //scheduleData=schedule; 
      setInput({ ...schedule });
      setTimeout(() => {
        if (userData != null) {
          schedule.tenantId = userData.userProfile.tenantFkId.id;
          schedule.userId = userData.userProfile.userFkId.userId;
          setInput({ ...schedule });
        }
      }, 1000);

      setdisplayDialog(true);
      setShowDelete(false);
    }
  }
  const handleCrontabChange = (event) => {
    setCornValue(event);
    scheduleData.cron = event;
    setInput({ ...scheduleData });
    checkValidation();
  }

  const onSelectionChangeed = (e) => { setSelectedData(e.value) }
  const onRowSelected = (event) => {

    if (!displayDialog) {
      var data = event.data;
      setInput(schedule);

      if (userData != null) {
        scheduleData.tenantId = userData.userProfile.tenantFkId.id;
        scheduleData.userId = userData.userProfile.userFkId.userId;
      }
      scheduleData.control = data.control;
      scheduleData.controlValue = data.control === 1 ? true : false;
      scheduleData.jobId = data.id;
      var item = profileData.find(x => x.profileShortName === scheduleData.profileName);
      scheduleData.profileName = data.jobName;
      scheduleData.priority = data.priority.toString();
      scheduleData.cron = data.cron;
      scheduleData.zone = data.zone;
      scheduleData.consumptionZone = data.consumptionZone;
      //setInput(schedule);
      setInput({ ...scheduleData });
      setdisplayDialog(true);
      //setShowDelete(true);
    }
  }

  const handleDeleteSubmit = (event) => {
    dispatch(deleteJobschedule(selectedData));
  }

  let tableHeader = <div style={{ textAlign: 'right' }}>
    <Button type="button" icon="pi pi-plus" iconPos="left" label="Add" onClick={onClickAdd}></Button>
    {/* <Button type="button" icon="pi pi-external-link" iconPos="left" label="PDF" onClick={exportPDDF}></Button> */}
  </div>

  function requiredMessage(key: string) { return <Message severity="error" key={key} text="Field is required" /> }
  return (
    <div>

      <Dialog header="Add Configuration" visible={displayDialog} style={{ width: '60vw' }} modal={true} onHide={() => setdisplayDialog(false)}>
        {
          displayDialog &&
          (
            <ScrollPanel style={{ width: '100%', height: '400px' }}>
              <div className="p-grid card-w-title">
                <div className="p-col-12">
                  <div className="card summary">
                    <div className="p-grid">                      
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="input">Profile</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <Dropdown
                            options={profileOptions}
                            value={scheduleData.profileName}
                            autoWidth={false}
                            onChange={handleProfileChange}
                            key="10001"
                            placeholder="Select profile"
                            id="dropdownProfile"
                            style={{ width: 250 }}
                          />
                          {isFormSubmitted && scheduleData.profileName === "" && (requiredMessage("profileName"))}
                        </div>

                        <div className="p-col-12 p-md-2">
                          <label htmlFor="input">Priority</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <Dropdown
                            options={preorityList}
                            value={scheduleData.priority}
                            autoWidth={false}
                            onChange={handleProfileChange}
                            key="10001"
                            placeholder="Select priority"
                            id="dropdownPriority"
                            style={{ width: 250 }}
                          />
                          {isFormSubmitted && scheduleData.priority === "0" && (requiredMessage("priority"))}
                        </div>

                        <div className="p-col-12 p-md-2">
                          <label htmlFor="input">Distribution Zone</label>
                        </div>

                        <div className="p-col-12 p-md-4">
                          <Dropdown
                            options={distZoneList}
                            value={scheduleData.zone}
                            autoWidth={false}
                            onChange={handleProfileChange}
                            key="10001"
                            placeholder="Select Zone"
                            id="dropdownDistZone"
                            style={{ width: 250 }}
                          />
                        </div>

                        <div className="p-col-12 p-md-2">
                          <label htmlFor="input">Consumption Zone</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <Dropdown
                            options={conZoneList}
                            value={scheduleData.consumptionZone}
                            autoWidth={false}
                            onChange={handleProfileChange}
                            key="10001"
                            placeholder="Select Zone"
                            id="dropdownConZone"
                            style={{ width: 250 }}
                          />
                        </div>                        
                      
                      </div>
                     <div className="p-grid">
                      <div className="p-col-12">
                        <div className="p-col-12 p-md-2">
                          <label htmlFor="input">Control:</label>
                        </div>
                        <div className="p-col-12 p-md-4">
                          <InputSwitch id="dropdownControl" checked={scheduleData.controlValue} onChange={handleProfileChange} />
                        </div>
                      </div>
                      <div className="p-col-12">
                        {isFormSubmitted && scheduleData.cron === "0 0 0 * * ? *" && (requiredMessage("cron"))}
                        <div className="p-grid">
                          <CustomCron
                            onChange={handleCrontabChange}
                            tabType="card"
                            showCrontab={true}
                            value={scheduleData.cron}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="p-dialog-footer">
                <div className="ui-dialog-buttonpane p-clearfix">
                  {showDelete && (
                    <button onClick={handleDeleteSubmit} className="p-button p-component p-button-text-icon-left">
                      <span className="pi pi-times p-c p-button-icon-left"></span>
                      <span className="p-button-text p-c">Delete</span>
                    </button>
                  )}

                  <button onClick={handleSubmit} className="p-button p-component p-button-text-icon-left">
                    <span className="pi pi-check p-c p-button-icon-left"></span>
                    <span className="p-button-text p-c">Save</span>
                  </button>
                </div>
              </div>
            </ScrollPanel>
          )
        }
      </Dialog>

      {jobscheduleData.isLoading && <ProgressSpinner />}
      {!jobscheduleData.isLoading && (
        <div className="animated fadeIn">
          <div className="p-grid">
            <div className="p-col-12">
              <div className="card card-w-title">
                <h1>Scheduler Configuration</h1>
                <Growl ref={(el) => {
                  return setGrowl(el);
                }} />
         {showMessage && (successMessage("Success"))}  
                <DataTable
                  value={tableData}
                  paginatorPosition="bottom"
                  selectionMode="single"
                  header={tableHeader}
                  paginator={true}
                  rows={10}
                  responsive={true}
                  alwaysShowPaginator={false}
                  selection={selectedData}
                  onSelectionChange={onSelectionChangeed}
                  onRowSelect={onRowSelected}
                  emptyMessage="No Record found"
                >

                  <Column field="profileDisplay" header="Job" sortable={true} />
                  <Column field="priority" header="Priority" sortable={true} />
                  <Column field="controlString" header="Control" sortable={true} />
                  <Column field="seconds" header="Second" sortable={true} />
                  <Column field="minutes" header="Minutes" sortable={true} />
                  <Column field="hours" header="Hours" sortable={true} />
                  <Column field="dayOfMonth" header="Day Of Month" sortable={true} />
                  <Column field="month" header="Month" sortable={true} />
                  <Column field="dayOfWeek" header="Day Of Week" sortable={true} />
                  <Column field="year" header="Year" sortable={true} />
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
  const { jobscheduleData, jobProfileData,reportData } = state;
  return {
    jobscheduleData, jobProfileData,reportData
  };
};
export default connect(mapStateToProps)(JobSchedule);