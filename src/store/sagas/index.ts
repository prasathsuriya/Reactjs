import { all, takeLatest } from "redux-saga/effects";
import { GET_REPORT_COLUMNNAMES_STARTED } from "../actions/ReportColumns";
import { GET_BULK_UPLOAD_STARTED, SAVE_BULK_UPLOAD_STARTED } from "../actions/BulkUpload";
import { SAVE_LOGIN_STARTED } from "../actions/Login";
import { SAVE_USER_STARTED, GET_USER_STARTED, UPDATE_STATUS_STARTED } from "../actions/CreateUser";
import { SAVE_REPORT_STARTED, GET_REPORT_STARTED, GET_SEARCH_LIST_STARTED } from "../actions/Report";
import { GET_REPORTONDEMAND_STARTED } from "../actions/ReportOnDemand";
import { SAVE_DASHBOARD_STARTED } from "../actions/Dashboard";
import {
  SAVE_JOBSCHEDULE_STARTED,
  DELETE_JOBSCHEDULE_STARTED,
  GET_JOBSCHEDULE_STARTED
} from "../actions/JobSchedule";
import {
  SAVE_NEW_DEVICE_STARTED,
  GET_DEVICES_STARTED,
  GET_NOOF_DEVICES_STARTED,
  GET_NOOF_ACTIVE_DEVICES_STARTED,
  GET_DEVICES_DETAILS_STARTED,
  GET_LOADGRAPHDATA_STARTED,
  GET_METER_DETAILS_STARTED,
  SAVE_METER_LOCATION_STARTED,
  SAVE_METER_ACTIVATE_STARTED,
  GET_360DG_STARTED
} from "../actions/NewDevice";

import { GET_ROLE_STARTED } from "../actions/Role";
import { GET_TICKETCATEGORIES_STARTED,SAVE_TICKETCATEGORIES_STARTED } from "../actions/Ticketcategory";
import { GET_PASSWORDPOLICY_STARTED,SAVE_PASSWORDPOLICY_STARTED } from "../actions/Passwordpolicy";
import { GET_METERLOCATION_STARTED } from "../actions/Meterlocation";
import { GET_NEWMETERLOCATION_STARTED } from "../actions/Newmeterlocation";
import { GET_METERDATE_STARTED } from "../actions/Meterdate";
import { GET_METERMFDETAILS_STARTED } from "../actions/Metermfdetails";
import { GET_METERCONNECTION_STARTED } from "../actions/Meterconnection";
import { GET_METERMANUFACTURE_STARTED } from "../actions/metermanufacture";
import { GET_CIRCLE_STARTED } from "../actions/Circle";
import { GET_DIVISION_STARTED } from "../actions/Division";
import { GET_SUBDIVISION_STARTED } from "../actions/Subdivision";
import { GET_SECTION_STARTED } from "../actions/Section";
import { GET_TOWN_STARTED } from "../actions/Town";
import { GET_SUBSTATION_STARTED } from "../actions/Substation";
import { GET_FEEDER_STARTED } from "../actions/Feeder";
import { GET_TRANSFORMER_STARTED } from "../actions/Transformer";
import { GET_ACTUALINSTANT_STARTED } from "../actions/ActualInstant";
import { GET_ACTUALBLOCKLOAD_STARTED } from "../actions/ActualBlockload";
import { GET_ACTUALDAILYLOAD_STARTED } from "../actions/Actualdailyload";
import { GET_ACTUALBILLING_STARTED } from "../actions/Actualbilling";
import { GET_ACTUALNAMEPLATE_STARTED } from "../actions/Actualnameplate";
import { GET_ACTUALTAMBEREVENT_STARTED } from "../actions/Actaultamberevent";
import { GET_METERDETAIL_STARTED } from "../actions/Meterdetail";
import { SAVE_METERDETAILS_STARTED } from "../actions/Meterdetails";
import { GET_COMMONDETAILS_STARTED,SAVE_COMMONDETAILS_STARTED } from "../actions/Commondetails";
import { GET_SUBTICKETCATEGORIES_STARTED, SAVE_SUBTICKETCATEGORIES_STARTED} from "../actions/Ticketsubcategory";
import { SAVE_TICKETS_STARTED, GET_TICKETS_STARTED } from "../actions/Tickets";
import { GET_JOBPROFILE_STARTED } from "../actions/JobProfile";
import { saveReport, getReportsList, getAllSearchCriteriaList } from "./Report";
import { getOnDemantReportList } from "./ReportOnDemand";
import { saveLogin } from "./Login";
import { saveNewUser, getUsersList, updateStatus } from "./CreateUser";
import { saveDashboard } from "./Dashboard";
import {
  saveJobschedule,
  deleteJobschedule,
  getJobschedule
} from "./JobSchedule";
import { getReportColumnNames } from "./ReportColumns";
import { getBulkUploadsList, saveBulkUpload } from "./BulkUpload";
import {
  saveNewDevice,
  getDeviceList,
  getDeviceNumber,
  getActiveMeterCount,
  getAllMeterDetails,
  getGraphData,
  getMeterDetails, saveMeterLocation, saveActivateMeter, getThreeSixtyInfo
} from "./NewDevice";
import { getRolesByTenant } from "./Role";
import { getJobProfiles } from "./JobProfile";
import { getticketcategories,saveticketcategories } from "./Ticketcategory";
import { getpasswordpolicies,savepasswordpolicies } from "./Passwordpolicy";
import { getMETERLOCATION } from "./Meterlocation";
import { getNEWMETERLOCATION } from "./Newmeterlocation";
import { getMETERDATE} from "./Meterdate";
import { getMETERMFDETAILS } from "./Metermfdetails";
import { getMETERCONNECTION } from "./Meterconnection";
import { getCIRCLE } from "./Circle";
import { getACTUALDAILYLOAD } from "./ActualDailyload";
import { getACTUALBILLING } from "./ActualBilling";
import { getACTUALTAMBEREVENT } from "./Actualtamberevent";
import { getACTUALNAMEPLATE } from "./Actualnameplate";
import { getACTUALINSTANT } from "./Actualinstant";
import { getACTUALBLOCKLOAD } from "./ActualBlockload";
import { getDIVISION } from "./Division";
import { getSUBDIVISION } from "./Subdivision";
import { getSECTION } from "./Section";
import { getTOWN } from "./Town";
import { getSUBSTATION } from "./Substation";
import { getFEEDER } from "./Feeder";
import { getTRANSFORMER } from "./Transformer";
import { getMeterdetail } from "./Meterdetail";
import { saveMeterdetails } from "./Meterdetails";
import { getMETERMANUFACTURE } from "./Metermanufacure";
import { getcommondetails,savecommondetails } from "./Commondetails";
import { getsubticketcategories,savesubticketcategories } from "./Ticketsubcategory";

import { DELETE_CONSUMER_STARTED, GET_CONSUMER_STARTED, SAVE_CONSUMER_STARTED } from "../actions/Consumer";
import { getConsumer, deleteConsumer, saveConsumer } from "./Consumer";
import { DELETE_PUSH_SETUP_STARTED, GET_PUSH_SETUP_STARTED, SAVE_PUSH_SETUP_STARTED } from "../actions/PushSetup";
import { getPushSetup, deletePushSetup, savePushSetup } from "./PushSetup";
import { GET_SIMULATOR_CNT_STARTED, GET_START_SERVER_STARTED, GET_STOP_SERVR_STARTED } from "../actions/Simulator"
import { getRunningSimulatorCount, startSimulation, stopSimulation } from "./Simulator";

import { GET_AREA_STARTED, GET_COUNTRY_STARTED, GET_REGION_STARTED, GET_ZONE_STARTED, GET_STATE_STARTED } from "../actions/Common";
import { getAreaList, getCountry, getRegionList, getStates, getZoneList } from "./Common";

import { GET_MANUFACTURE_STARTED, GET_MANUFACTURE_COMPLETED, SAVE_MANUFACTURE_COMPLETED, SAVE_MANUFACTURE_STARTED } from "../actions/Manufacture";
import { getManufactures, saveManufacture } from "./Manufacture";

import { GET_ALL_SELF_DEVICE_STARTED } from "../actions/SelfDevice"
import { getAllSelfDevice } from "./SelfDevice";
import { SAVE_NEW_PS_FORM_STARTED,GET_PS_DETAILS_STARTED }from "../actions/ProcessScheduler";

import { saveNewFrom,getPSDetails } from "./ProcessScheduler";
import {  SAVE_AAROLES_STARTED,  DELETE_AAROLES_STARTED,  GET_AAROLES_STARTED} from "../actions/Aaroles";
import {  SAVE_AAROLESPERMISSION_STARTED,  DELETE_AAROLESPERMISSION_STARTED,  GET_AAROLESPERMISSION_STARTED} from "../actions/Aarolespermission";
import {  SAVE_AAPERMISSIONS_STARTED,  DELETE_AAPERMISSIONS_STARTED,  GET_AAPERMISSIONS_STARTED} from "../actions/Aapermissions";

import { getAaroles, deleteAaroles, saveAaroles } from "./Aaroles";
import { getAapermissions, deleteAapermissions, saveAapermissions } from "./Aapermissions";
import { getAarolespermission, deleteAarolespermission, saveAarolespermission } from "./Aarolespermission";

import {
  SAVE_PASSWORDRESET_STARTED,
  GET_ACTCODEPASSWORD_STARTED
} from '../actions/Passwordreset';
import {
  GET_PASSWORDHISTORY_STARTED
} from '../actions/Passwordhistory';
import {
  SAVE_NEWPASSWORDRESET_STARTED
} from '../actions/Newpasswordreset';
import {
  SAVE_FORGOTPASSWORD_STARTED,
  SAVE_FORGOTPASSWORD_COMPLETED,
  SAVE_FORGOTPASSWORD_FAILED,
  
} from '../actions/Forgotpassword';
import { saveForgotpassword } from "./Forgotpassword";
import { saveTickets, getTickets } from "./Tickets";

import {  savenewPassword, getactcodepassword } from "./Passwordreset";
import {   getpasswordhistory } from "./Passwordhistory";
import {  savenewresetPassword } from "./Newpasswordreset";
export default function* rootSaga() {
  yield all([
    takeLatest(SAVE_LOGIN_STARTED, saveLogin),
    takeLatest(SAVE_USER_STARTED, saveNewUser),
    takeLatest(SAVE_REPORT_STARTED, saveReport),
    takeLatest(SAVE_DASHBOARD_STARTED, saveDashboard),
    takeLatest(SAVE_JOBSCHEDULE_STARTED, saveJobschedule),
    takeLatest(GET_USER_STARTED, getUsersList),
    takeLatest(GET_REPORT_STARTED, getReportsList),
    takeLatest(GET_REPORT_COLUMNNAMES_STARTED, getReportColumnNames),
    takeLatest(GET_REPORTONDEMAND_STARTED, getOnDemantReportList),
    takeLatest(SAVE_NEW_DEVICE_STARTED, saveNewDevice),
    takeLatest(GET_ROLE_STARTED, getRolesByTenant),
    takeLatest(GET_DEVICES_STARTED, getDeviceList),
    takeLatest(GET_NOOF_DEVICES_STARTED, getDeviceNumber),
    takeLatest(GET_JOBSCHEDULE_STARTED, getJobschedule),
    takeLatest(DELETE_JOBSCHEDULE_STARTED, deleteJobschedule),
    takeLatest(GET_NOOF_ACTIVE_DEVICES_STARTED, getActiveMeterCount),
    takeLatest(GET_DEVICES_DETAILS_STARTED, getAllMeterDetails),
    takeLatest(GET_LOADGRAPHDATA_STARTED, getGraphData),
    takeLatest(GET_METER_DETAILS_STARTED, getMeterDetails),
    takeLatest(GET_JOBPROFILE_STARTED, getJobProfiles),
    takeLatest(SAVE_METER_LOCATION_STARTED, saveMeterLocation),
    takeLatest(GET_CONSUMER_STARTED, getConsumer),
    takeLatest(SAVE_CONSUMER_STARTED, saveConsumer),
    takeLatest(DELETE_CONSUMER_STARTED, deleteConsumer),
    takeLatest(UPDATE_STATUS_STARTED, updateStatus),
    takeLatest(SAVE_METER_ACTIVATE_STARTED, saveActivateMeter),
    takeLatest(GET_MANUFACTURE_STARTED, getManufactures),
    takeLatest(SAVE_MANUFACTURE_STARTED, saveManufacture),
    takeLatest(GET_SIMULATOR_CNT_STARTED, getRunningSimulatorCount),
    takeLatest(GET_START_SERVER_STARTED, startSimulation),
    takeLatest(GET_STOP_SERVR_STARTED, stopSimulation),
    takeLatest(GET_360DG_STARTED, getThreeSixtyInfo),
    takeLatest(GET_BULK_UPLOAD_STARTED, getBulkUploadsList),
    takeLatest(SAVE_BULK_UPLOAD_STARTED, saveBulkUpload),
    takeLatest(GET_COUNTRY_STARTED, getCountry),
    takeLatest(GET_STATE_STARTED, getStates), 
    takeLatest(GET_AREA_STARTED, getAreaList),
    takeLatest(GET_ZONE_STARTED, getZoneList),
    takeLatest(GET_REGION_STARTED, getRegionList),
    takeLatest(GET_SEARCH_LIST_STARTED, getAllSearchCriteriaList), 
    takeLatest(GET_PUSH_SETUP_STARTED, getPushSetup), 
    takeLatest(SAVE_PUSH_SETUP_STARTED, savePushSetup), 
    takeLatest(DELETE_PUSH_SETUP_STARTED, deletePushSetup),
    takeLatest(GET_ALL_SELF_DEVICE_STARTED, getAllSelfDevice),
    takeLatest(SAVE_NEW_PS_FORM_STARTED, saveNewFrom),
    takeLatest(GET_PS_DETAILS_STARTED, getPSDetails),
    takeLatest(GET_TICKETCATEGORIES_STARTED, getticketcategories),
    takeLatest(SAVE_TICKETCATEGORIES_STARTED, saveticketcategories),
    takeLatest(GET_PASSWORDPOLICY_STARTED, getpasswordpolicies),
    takeLatest(GET_METERLOCATION_STARTED, getMETERLOCATION),
    takeLatest(GET_NEWMETERLOCATION_STARTED, getNEWMETERLOCATION),
    takeLatest(GET_METERDATE_STARTED, getMETERDATE),
    takeLatest(GET_METERCONNECTION_STARTED, getMETERCONNECTION),
    takeLatest(GET_METERMFDETAILS_STARTED, getMETERMFDETAILS),
    takeLatest(GET_CIRCLE_STARTED, getCIRCLE),
    takeLatest(GET_ACTUALINSTANT_STARTED, getACTUALINSTANT),
    takeLatest(GET_ACTUALBLOCKLOAD_STARTED, getACTUALBLOCKLOAD),
    takeLatest(GET_ACTUALTAMBEREVENT_STARTED, getACTUALTAMBEREVENT),
    takeLatest(GET_ACTUALBILLING_STARTED, getACTUALBILLING),
    takeLatest(GET_ACTUALDAILYLOAD_STARTED, getACTUALDAILYLOAD),
    takeLatest(GET_ACTUALNAMEPLATE_STARTED, getACTUALNAMEPLATE),
    takeLatest(GET_ACTUALBLOCKLOAD_STARTED, getACTUALBLOCKLOAD),
    takeLatest(GET_METERMANUFACTURE_STARTED, getMETERMANUFACTURE),
    takeLatest(GET_DIVISION_STARTED, getDIVISION),
    takeLatest(GET_SUBDIVISION_STARTED, getSUBDIVISION),
    takeLatest(GET_SECTION_STARTED, getSECTION),
    takeLatest(GET_TOWN_STARTED, getTOWN),
    takeLatest(GET_SUBSTATION_STARTED, getSUBSTATION),
    takeLatest(GET_FEEDER_STARTED, getFEEDER),
    takeLatest(GET_TRANSFORMER_STARTED, getTRANSFORMER),
    takeLatest(SAVE_PASSWORDPOLICY_STARTED, savepasswordpolicies),
    takeLatest(GET_COMMONDETAILS_STARTED, getcommondetails),
    takeLatest(SAVE_COMMONDETAILS_STARTED, savecommondetails),
    takeLatest(SAVE_SUBTICKETCATEGORIES_STARTED, savesubticketcategories),
    takeLatest(GET_SUBTICKETCATEGORIES_STARTED, getsubticketcategories),
    takeLatest(GET_AAROLES_STARTED, getAaroles),
    takeLatest(SAVE_AAROLES_STARTED,saveAaroles),
    takeLatest(SAVE_TICKETS_STARTED,saveTickets),
    takeLatest(GET_TICKETS_STARTED,getTickets),
    takeLatest(SAVE_METERDETAILS_STARTED,saveMeterdetails),
    takeLatest(GET_METERDETAIL_STARTED,getMeterdetail),
    takeLatest(DELETE_AAROLES_STARTED, deleteAaroles),
    takeLatest(GET_AAROLESPERMISSION_STARTED, getAarolespermission),
    takeLatest(SAVE_AAROLESPERMISSION_STARTED,saveAarolespermission),
    takeLatest(DELETE_AAROLESPERMISSION_STARTED, deleteAarolespermission),
    takeLatest(GET_AAPERMISSIONS_STARTED, getAapermissions),
    takeLatest(SAVE_AAPERMISSIONS_STARTED,saveAapermissions),
    takeLatest(DELETE_AAPERMISSIONS_STARTED, deleteAapermissions),
    takeLatest(GET_ACTCODEPASSWORD_STARTED, getactcodepassword),
    takeLatest(GET_PASSWORDHISTORY_STARTED, getpasswordhistory),
    takeLatest(SAVE_PASSWORDRESET_STARTED,savenewPassword),
    takeLatest(SAVE_NEWPASSWORDRESET_STARTED,savenewresetPassword),
    takeLatest(SAVE_FORGOTPASSWORD_STARTED,  saveForgotpassword)
  ]);
}
