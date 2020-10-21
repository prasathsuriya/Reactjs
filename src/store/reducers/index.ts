import { reportColumnNames } from "./ReportColumns";
import { reportOnDemandtData } from "./ReportOnDemand";
import { combineReducers } from "redux";
import { newUserData } from "./CreateUser";
import { loginData } from "./Login";
import { reportData } from "./Report";
import { dashboardData } from "./Dashboard";
import { jobscheduleData } from "./JobSchedule";
import { deviceFormData } from "./NewDevice";
import { roleData } from "./Role";
import { jobProfileData } from "./JobProfile";
import { consumerData } from "./Consumer";
import { manufactureData } from "./Manufacture";
import { simulatorData } from "./Simulator";
import { bulkUploadData } from "./BulkUpload";
import { commonData } from "./Common";
import { pushSetupData } from "./PushSetup";
import { selfDeviceData } from "./SelfDevice";
import { inputFormData } from "./ProcessScheduler";
import { ticketsData } from "./Tickets";
import { ticketcategriesData } from "./Ticketcategory";
import { subticketcategriesData } from "./Ticketsubcategory";
import { aarolesData } from "./Aaroles";
import { aapermissionsData } from "./Aapermissions";
import { aarolespermissionData } from "./Aarolespermission";
import { AaapermissionData } from "./Aaapermission";
import { passwordhistoryData } from "./Passwordhistory";
import { commondetailsData } from "./Commondetails";
import { passwordresetData } from "./Passwordreset";
import { passwordpolicyData } from "./Passwordpolicy";
import { newpasswordresetData } from "./Newpasswordreset";
import { CIRCLEData } from "./Circle";
import { DIVISIONData } from "./Division";
import { SUBDIVISIONData } from "./Subdivision";
import { SECTIONData } from "./Section";
import { TOWNData } from "./Town";
import { SUBSTATIONData } from "./Substation";
import { FEEDERData } from "./Feeder";
import { TRANSFORMERData } from "./Transformer";
import { METERLOCATIONData } from "./Meterlocation";
import { METERMANUFACTUREData } from "./Metermanufacture";
import { METERDETAILData } from "./Meterdetail";
import { ACTUALINSTANTData } from "./Actualinstant";
import { ACTUALBLOCKLOADData } from "./ActualBlockload";
import { ACTUALBILLINGData } from "./Actualbilling";
import { ACTUALDAILYLOADData } from "./Actualdailyload";
import { ACTUALNAMEPLATEData } from "./Actualnameplate";
import { ACTUALTAMBEREVENTData } from "./ActualTamberevent";
import { METERDETAILSData } from "./Meterdetails";
import { METERMFDETAILSData } from "./Metermfdetails";
import { METERCONNECTIONData } from "./Meterconnection";
import { NEWMETERLOCATIONData } from "./Newmeterlocation";
import { METERDATEData } from "./Meterdate";
const reducers = combineReducers({
  loginData,
  newUserData,
  reportData,
  dashboardData,
  jobscheduleData,
  reportColumnNames,
  reportOnDemandtData,
  deviceFormData,
  roleData,
  jobProfileData,
  consumerData,
  manufactureData,
  simulatorData, 
  bulkUploadData, 
  commonData, 
  pushSetupData,
  selfDeviceData,
  inputFormData,
  ticketsData,
  aarolesData,
  aapermissionsData,
  aarolespermissionData,
  ticketcategriesData,
  subticketcategriesData,
  AaapermissionData,
  passwordresetData,
  passwordhistoryData,
  commondetailsData,
 newpasswordresetData,
 passwordpolicyData,
 CIRCLEData ,
 DIVISIONData,
 SUBDIVISIONData,
 SECTIONData,
 TOWNData ,
 SUBSTATIONData ,
 FEEDERData ,
 TRANSFORMERData,
 METERLOCATIONData,
 METERMANUFACTUREData,
 ACTUALINSTANTData,
 ACTUALBLOCKLOADData,
 ACTUALBILLINGData,
 ACTUALDAILYLOADData,
 ACTUALNAMEPLATEData,
 ACTUALTAMBEREVENTData,
 METERDETAILData,
 METERDETAILSData,
 METERMFDETAILSData,
 METERCONNECTIONData,
 NEWMETERLOCATIONData,
 METERDATEData
});
export default reducers;
