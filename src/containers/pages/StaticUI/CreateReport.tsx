import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown'; 
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

interface ICreateReport {
    dispatch: Dispatch<any>;
    roleData: any;
    newUserData: any;
    props: RouteComponentProps;
    dataTableValues: any
}
const CreateReport: React.FC<ICreateReport> = ({

    dispatch, roleData,newUserData,dataTableValues

}) => {
    const initialReportForm = {
        country: "Select Country",
        state: "Select State",
        region: "Select Region",
        district: "",
        processName: "",
       
      }
      const [reportForm, setReport] = useState(initialReportForm);
      const [dataTableSelection, setdataTableSelection] = useState();
       const  basicTableValues = [
        {"sno":"1","meterserialnumber":"SM_5682","deviceid":"1001","manufacturername":"panasonic","communicationmodule":"rfid","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.36.38","metersimno":"9840285889","meterstation":"v8","transformer":"steupup","pole":"north","station":"thermal","substation":"chennai","feeder":"s6","latitude":"12.397","longitude":"20.323","country":"India","state":"tamilnadu","zone":"south","district":"chennai","city":"chennai","locality":"thirumangalam","pincode":"600087","metertime":"5:30pm","meterdate":"22/11/95","frequencyofreading":"6hz"},
        {"sno":"2","meterserialnumber":"SM_2684","deviceid":"1002","manufacturername":"toshiba","communicationmodule":"radio","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.40.38","metersimno":"9840285869","meterstation":"v4","transformer":"stepdown","pole":"north","station":"thermal","substation":"chennai","feeder":"s7","latitude":"12.567","longitude":"22.456","country":"India","state":"tamilnadu","zone":"east","district":"villupuram","city":"trichy","locality":"kolathur","pincode":"600093","metertime":"6:00am","meterdate":"23/12/84","frequencyofreading":"7hz"},
        {"sno":"3","meterserialnumber":"VS_8457","deviceid":"1003","manufacturername":"vivo","communicationmodule":"gsm","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.66.38","metersimno":"9840285829","meterstation":"v6","transformer":"stepup","pole":"south","station":"wind","substation":"vilupuaram","feeder":"s4","latitude":"12.837","longitude":"23.373","country":"India","state":"tamilnadu","zone":"west","district":"trichy","city":"coimbatore","locality":"ramnad","pincode":"600037","metertime":"4:20pm","meterdate":"25/03/01","frequencyofreading":"10hz"},
        {"sno":"4","meterserialnumber":"AS_8367","deviceid":"1004","manufacturername":"Eon","communicationmodule":"wifi","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.76.38","metersimno":"9840285819","meterstation":"v2","transformer":"stepdown","pole":"north","station":"wind","substation":"chennai","feeder":"s3","latitude":"12.943","longitude":"24.676","country":"India","state":"tamilnadu","zone":"north","district":"madurai","city":"madurai","locality":"dholakpur","pincode":"600027","metertime":"5:45pm","meterdate":"26/05/09","frequencyofreading":"15hz"},
        {"sno":"5","meterserialnumber":"ST_7478","deviceid":"1005","manufacturername":"Dell","communicationmodule":"wifi","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.65.38","metersimno":"9840285789","meterstation":"v3","transformer":"stepup","pole":"north","station":"thermal","substation":"vilupuram","feeder":"s9","latitude":"13.287","longitude":"24.832","country":"India","state":"tamilnadu","zone":"south","district":"thirunelveli","city":"salem","locality":"thillainagar","pincode":"600044","metertime":"6:15pm","meterdate":"28/07/11","frequencyofreading":"25hz"},
        {"sno":"6","meterserialnumber":"ST_3437","deviceid":"1006","manufacturername":"Nokia","communicationmodule":"gsm","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.86.38","metersimno":"9840285589","meterstation":"v1","transformer":"stepdown","pole":"south","station":"thermal","substation":"chennai","feeder":"s4","latitude":"13.165","longitude":"25.637","country":"India","state":"tamilnadu","zone":"west","district":"coimbatore","city":"thiruvallur","locality":"athur","pincode":"600078","metertime":"6:25pm","meterdate":"30/08/13","frequencyofreading":"36hz"},
        {"sno":"7","meterserialnumber":"HS_7437","deviceid":"1007","manufacturername":"Asus","communicationmodule":"radio","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.56.38","metersimno":"9840285689","meterstation":"v88","transformer":"stepup","pole":"north","station":"wind","substation":"vilupuram","feeder":"s1","latitude":"13.453","longitude":"25.437","country":"India","state":"tamilnadu","zone":"north","district":"ramnad","city":"ramnad","locality":"ambur","pincode":"600087","metertime":"6:15pm","meterdate":"02/08/15","frequencyofreading":"18hz"} 
]; 
const instantTableValues = [
    {"sno":"1","meterserialnumber":"SM_5681","rtcdateandtime":"10/01","l1currentir":"1A","l2currentIY":"1A","l3currentib":"3A","l1voltagevrn":"2A","l2voltagevyn":"1L","l3voltagevbn":"1L","l1signedpowerfactorrphase":"2","l2signedpowerfactoryphase":"1","l3signedpowerfactorbphase":"3","signedthreephasepowerfactorpf":"2","frequencyhz":"2","aparentpowerva":"2","signedactivepowerw":"2","signedreactionpowervar":"3","noofpowerfailures":"4","cumpoweroffdurationinminutes":"5sec","cumtampercount":"3","cumbillingcount":"6","cumprogrammingcount":"5","lastbillingdate":"6/11","cumenergywhimport":"5w","cumenergywhexport":"4w","cumenergyvahimport":"7v","cumenergyvahexport":"22v","maximumdemandactiveimport":"7v","maximumdemandactivedateandtime":"5:30pm","maximumdemandapparentimport":"5v","maximumdemandapparentdateandtime":"6pm","loadlimitfunctionstatus":"low","loadlimitvalueinw":"6w","cumenergyvarhq1":"6v","cumenergyvarhq2":"22v","cumenergyvarhq3":"6w","cumenergyvarhq4":"10w" },
    {"sno":"2","meterserialnumber":"SM_5682","rtcdateandtime":"10/02","l1currentir":"2A","l2currentIY":"2A","l3currentib":"2A","l1voltagevrn":"1A","l2voltagevyn":"2L","l3voltagevbn":"2L","l1signedpowerfactorrphase":"3","l2signedpowerfactoryphase":"2","l3signedpowerfactorbphase":"2","signedthreephasepowerfactorpf":"3","frequencyhz":"1","aparentpowerva":"1","signedactivepowerw":"4","signedreactionpowervar":"2","noofpowerfailures":"5","cumpoweroffdurationinminutes":"1min","cumtampercount":"5","cumbillingcount":"8","cumprogrammingcount":"8","lastbillingdate":"3/11","cumenergywhimport":"8w","cumenergywhexport":"6w","cumenergyvahimport":"10v","cumenergyvahexport":"10v","maximumdemandactiveimport":"10v","maximumdemandactivedateandtime":"6:30pm","maximumdemandapparentimport":"10v","maximumdemandapparentdateandtime":"8pm","loadlimitfunctionstatus":"heavy","loadlimitvalueinw":"7w","cumenergyvarhq1":"8v","cumenergyvarhq2":"20v","cumenergyvarhq3":"8w","cumenergyvarhq4":"8w" },
    {"sno":"3","meterserialnumber":"SM_5683","rtcdateandtime":"10/04","l1currentir":"3A","l2currentIY":"3A","l3currentib":"!A","l1voltagevrn":"3A","l2voltagevyn":"3L","l3voltagevbn":"3L","l1signedpowerfactorrphase":"2","l2signedpowerfactoryphase":"2","l3signedpowerfactorbphase":"1","signedthreephasepowerfactorpf":"1","frequencyhz":"3","aparentpowerva":"3","signedactivepowerw":"6","signedreactionpowervar":"1","noofpowerfailures":"6","cumpoweroffdurationinminutes":"8min","cumtampercount":"7","cumbillingcount":"10","cumprogrammingcount":"10","lastbillingdate":"2/11","cumenergywhimport":"6w","cumenergywhexport":"8w","cumenergyvahimport":"8v","cumenergyvahexport":"15v","maximumdemandactiveimport":"8v","maximumdemandactivedateandtime":"7:30pm","maximumdemandapparentimport":"12v","maximumdemandapparentdateandtime":"10pm","loadlimitfunctionstatus":"low","loadlimitvalueinw":"8w","cumenergyvarhq1":"10v","cumenergyvarhq2":"11v","cumenergyvarhq3":"10w","cumenergyvarhq4":"10w" }
];  
const billingTableValues = [
    {"sno":"1","meterserialnumber":"SM_5681","lastbillingdate":"10/01","cumenergywhimport":"1w","cumenergywhexport":"1w","cumenergyvahimport":"9w","cumenergyvahexport":"12w","maximumdemandactiveimport":"10w","maximumdemandactivedateandtime":"15hrs","maximumdemandapparentimport":"10w","maximumdemandapparentdateandtime":"15/10","cumenergyvarhq1":"1w","cumenergyvarhq2":"2w","cumenergyvarhq3":"9w","cumenergyvarhq4":"7w","systempowerfactorforbillingperiod":"2days","cumenergywhimporttz1":"3w","cumenergywhimporttz2":"4w","cumenergywhimporttz3":"15w","cumenergywhimporttz4":"30w","cumenergywhimporttz5":"62w","cumenergywhimporttz6":"55w","cumenergywhimporttz7":"6w","cumenergywhimporttz8":"15w","cumenergyvahimporttz1":"40w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"22w","cumenergyvahimporttz4":"7w","cumenergyvahimporttz5":"5w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"6w","mdwimporttz8":"10w","mdwtz8datetime":"21w","billingpoweronduration":"5days"},
    {"sno":"2","meterserialnumber":"SM_5682","lastbillingdate":"12/01","cumenergywhimport":"4w","cumenergywhexport":"2w","cumenergyvahimport":"7w","cumenergyvahexport":"15w","maximumdemandactiveimport":"10w","maximumdemandactivedateandtime":"6hrs","maximumdemandapparentimport":"12w","maximumdemandapparentdateandtime":"1/8","cumenergyvarhq1":"2w","cumenergyvarhq2":"4w","cumenergyvarhq3":"4w","cumenergyvarhq4":"9w","systempowerfactorforbillingperiod":"4days","cumenergywhimporttz1":"5w","cumenergywhimporttz2":"7w","cumenergywhimporttz3":"50w","cumenergywhimporttz4":"31w","cumenergywhimporttz5":"60w","cumenergywhimporttz6":"50w","cumenergywhimporttz7":"63w","cumenergywhimporttz8":"52w","cumenergyvahimporttz1":"4w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"23w","cumenergyvahimporttz4":"71w","cumenergyvahimporttz5":"5w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"61w","mdwimporttz8":"17w","mdwtz8datetime":"28w","billingpoweronduration":"8days"},
    {"sno":"3","meterserialnumber":"SM_5683","lastbillingdate":"15/01","cumenergywhimport":"6w","cumenergywhexport":"6w","cumenergyvahimport":"10w","cumenergyvahexport":"16w","maximumdemandactiveimport":"20w","maximumdemandactivedateandtime":"8hrs","maximumdemandapparentimport":"20w","maximumdemandapparentdateandtime":"2/8","cumenergyvarhq1":"5w","cumenergyvarhq2":"6w","cumenergyvarhq3":"6w","cumenergyvarhq4":"10w","systempowerfactorforbillingperiod":"6days","cumenergywhimporttz1":"8w","cumenergywhimporttz2":"8w","cumenergywhimporttz3":"5w","cumenergywhimporttz4":"33w","cumenergywhimporttz5":"61w","cumenergywhimporttz6":"60w","cumenergywhimporttz7":"62w","cumenergywhimporttz8":"35w","cumenergyvahimporttz1":"4w","cumenergyvahimporttz2":"7w","cumenergyvahimporttz3":"20w","cumenergyvahimporttz4":"5w","cumenergyvahimporttz5":"5:w","cumenergyvahimporttz6":"5v","cumenergyvahimporttz7":"6pm","cumenergyvahimporttz8":"low","mdwimporttz1":"6w","mdwtz1datetime":"6v","mdwimportz2":"22v","mdwtz2datetime":"6w","mdwimporttz3":"10w","mdwtz3datetime":"24w", "mdwimporttz4":"6w","mdwtz4datetime":"6v","mdwimportz5":"22v","mdwtz5datetime":"6w","mdwimporttz6":"10w","mdwtz6datetime":"24w","mdwimportz7":"22v","mdwtz7datetime":"6w","mdwimporttz8":"10w","mdwtz8datetime":"24w","billingpoweronduration":"10days"}
];
const dailyTableValues = [
    {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"10/01","cumenergywhimport":"50hz","cumenergywhexport":"11hz","cumenergyvahimport":"12hz","cumenergyvahexport":"19hz","maximumdemandactiveimport":"17w","maximumdemandactivedatetime":"10/11","maximumdemandapparentimport":"19W","maximumdemandapparentdatetime":"14/10"},
    {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/01","cumenergywhimport":"10hz","cumenergywhexport":"17hz","cumenergyvahimport":"15hz","cumenergyvahexport":"75hz","maximumdemandactiveimport":"6w","maximumdemandactivedatetime":"15/11","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"15/10"},
    {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"13/11","cumenergywhimport":"25hz","cumenergywhexport":"25hz","cumenergyvahimport":"20hz","cumenergyvahexport":"97hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"6/12","maximumdemandapparentimport":"7W","maximumdemandapparentdatetime":"8/10"},
    {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"12/01","cumenergywhimport":"35hz","cumenergywhexport":"30hz","cumenergyvahimport":"30hz","cumenergyvahexport":"195hz","maximumdemandactiveimport":"4w","maximumdemandactivedatetime":"8/12","maximumdemandapparentimport":"10W","maximumdemandapparentdatetime":"6/10"},
    {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"17/01","cumenergywhimport":"17hz","cumenergywhexport":"17hz","cumenergyvahimport":"45hz","cumenergyvahexport":"975hz","maximumdemandactiveimport":"8w","maximumdemandactivedatetime":"24/9","maximumdemandapparentimport":"8W","maximumdemandapparentdatetime":"1/10"},
    {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"10/01","cumenergywhimport":"30hz","cumenergywhexport":"45hz","cumenergyvahimport":"12hz","cumenergyvahexport":"5hz","maximumdemandactiveimport":"19w","maximumdemandactivedatetime":"30/9","maximumdemandapparentimport":"12W","maximumdemandapparentdatetime":"6/11"}
];
const blockTableValues = [
    {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"14/02/2020 05:30:00","currentir":"2","currentiy":"4","currentib":"6","voltagevrn":"4","voltagevyn":"6","voltagevbn":"0","energywhimport":"5","energyvahimport":"0","energywhexport":"0","energyvahexport":"0","statusbyte":"5","averagesignalstrength":"0"},
    {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/02/2020 05:25:00","currentir":"3","currentiy":"0","currentib":"5","voltagevrn":"0","voltagevyn":"5","voltagevbn":"2","energywhimport":"8","energyvahimport":"6","energywhexport":"0","energyvahexport":"2","statusbyte":"8","averagesignalstrength":"4"},
    {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"14/02/2020 05:20:00","currentir":"4","currentiy":"2","currentib":"4","voltagevrn":"6","voltagevyn":"8","voltagevbn":"3","energywhimport":"6","energyvahimport":"5","energywhexport":"0","energyvahexport":"3","statusbyte":"6","averagesignalstrength":"0"},
    {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0","energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4"},
    {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4","energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0"},
    {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"14/02/2020 05:05:00","currentir":"3","currentiy":"7","currentib":"3","voltagevrn":"6","voltagevyn":"0","voltagevbn":"0","energywhimport":"5","energyvahimport":"1","energywhexport":"2","energyvahexport":"8","statusbyte":"1","averagesignalstrength":"2"}
];
const nameTableValues = [
    {"sno":"1","meterserialnumber":"IN4000055","rtcdateandtime":"14/02/2020 05:30:00","deviceid":"ISEIN4000055","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"0","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"0","statusbyte":"5","averagesignalstrength":"0"},
    {"sno":"2","meterserialnumber":"IN4000057","rtcdateandtime":"14/02/2020 05:25:00","deviceid":"ISEIN4000057","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"2","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"2","statusbyte":"8","averagesignalstrength":"4"},
    {"sno":"3","meterserialnumber":"IN4000059","rtcdateandtime":"14/02/2020 05:20:00","deviceid":"ISEIN4000059","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"3","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"3","statusbyte":"6","averagesignalstrength":"0"},
    {"sno":"4","meterserialnumber":"IN4000061","rtcdateandtime":"14/02/2020 05:15:00","deviceid":"ISEIN4000061","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"0","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4"},
    {"sno":"5","meterserialnumber":"IN4000063","rtcdateandtime":"14/02/2020 05:10:00","deviceid":"ISEIN4000063","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"4","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0"},
    {"sno":"6","meterserialnumber":"IN4000065","rtcdateandtime":"14/02/2020 05:05:00","deviceid":"ISEIN4000065","manufacturername":"INESH SMART ENERGY (P) LTD","firmwareversion":"V-01.10","metertype":"8","metercategory":"D3","voltagevbn":"0","currentrating":"(5-10) A","yearofmanufacture":"2019","energywhexport":"2","energyvahexport":"8","statusbyte":"1","averagesignalstrength":"2"}
];
const tamperTableValues = [
    {"sno":"1","meterserialnumber":"SM_5682","rtcdateandtime":"14/02/2020 05:30:00","eventcode":"1","currentir":"2","currentiy":"4","currentib":"6","voltagevrn":"4","voltagevyn":"6","voltagevbn":"0", "rphase":"6","yphase":"4","bphase":"4",  "energywhimport":"5","energyvahimport":"0","energywhexport":"0","energyvahexport":"0","statusbyte":"5","averagesignalstrength":"0","cumtampercount":"6","sequencenumber":"0" },
    {"sno":"2","meterserialnumber":"vM_5692","rtcdateandtime":"14/02/2020 05:25:00","eventcode":"2","currentir":"3","currentiy":"0","currentib":"5","voltagevrn":"0","voltagevyn":"5","voltagevbn":"2", "rphase":"5","yphase":"0","bphase":"0",  "energywhimport":"8","energyvahimport":"6","energywhexport":"0","energyvahexport":"2","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"5","sequencenumber":"2" },
    {"sno":"3","meterserialnumber":"HM_5688","rtcdateandtime":"14/02/2020 05:20:00","eventcode":"3","currentir":"4","currentiy":"2","currentib":"4","voltagevrn":"6","voltagevyn":"8","voltagevbn":"3", "rphase":"4","yphase":"6","bphase":"2",  "energywhimport":"6","energyvahimport":"5","energywhexport":"0","energyvahexport":"3","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"8","sequencenumber":"3" },
    {"sno":"4","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","eventcode":"4","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0", "rphase":"0","yphase":"5","bphase":"3",  "energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"6","sequencenumber":"0" },
    {"sno":"5","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","eventcode":"5","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4", "rphase":"2","yphase":"8","bphase":"4",  "energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"0","sequencenumber":"4" },
    {"sno":"6","meterserialnumber":"LM_5482","rtcdateandtime":"14/02/2020 05:05:00","eventcode":"6","currentir":"3","currentiy":"7","currentib":"3","voltagevrn":"6","voltagevyn":"0","voltagevbn":"0", "rphase":"3","yphase":"6","bphase":"7",  "energywhimport":"5","energyvahimport":"1","energywhexport":"2","energyvahexport":"8","statusbyte":"1","averagesignalstrength":"2","cumtampercount":"0","sequencenumber":"0" },
    {"sno":"7","meterserialnumber":"ZM_5672","rtcdateandtime":"14/02/2020 05:15:00","eventcode":"7","currentir":"0","currentiy":"3","currentib":"0","voltagevrn":"5","voltagevyn":"6","voltagevbn":"0", "rphase":"0","yphase":"5","bphase":"3",  "energywhimport":"2","energyvahimport":"8","energywhexport":"4","energyvahexport":"6","statusbyte":"8","averagesignalstrength":"4","cumtampercount":"6","sequencenumber":"0" },
    {"sno":"8","meterserialnumber":"RM_5632","rtcdateandtime":"14/02/2020 05:10:00","eventcode":"8","currentir":"2","currentiy":"4","currentib":"2","voltagevrn":"8","voltagevyn":"0","voltagevbn":"4", "rphase":"2","yphase":"8","bphase":"4",  "energywhimport":"6","energyvahimport":"6","energywhexport":"0","energyvahexport":"5","statusbyte":"6","averagesignalstrength":"0","cumtampercount":"0","sequencenumber":"4" }
                                                                                                                                                                                                                                                                                        
];
 
      const handleInputChange = (event: any) => {
        if (event.target.id === "countries") {
            reportForm.country = event.target.value;
          }else if (event.target.id === "states") {
            reportForm.state = event.target.value;
          }else if (event.target.id === "region") {
            reportForm.region = event.target.value;
          }else if (event.target.id === "districts") {
            reportForm.district = event.target.value;
          }else if (event.target.id === "process") {
            reportForm.processName = event.target.value;
          }
          setReport({...reportForm});
          checkValidation(); 
             
      }  
      const [isValid, setValid] = useState(false);
      const [isBasicReport, setBasicReport] = useState(false);
      const [isInstantReport, setInstantReport] = useState(false);
      const [isBillingReport, setBillingReport] = useState(false);
      const [isDailyReport, setDailyReport] = useState(false);
      const [isBlockReport, setBlockReport] = useState(false);
      const [isNamePlate, setNamePlate] = useState(false);
      const [isTamperEvent, setTamperEvent] = useState(false);
      const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
      const checkValidation=()=>{
        setBasicReport(false);
        setInstantReport(false);
        setBillingReport(false);
        setDailyReport(false);
        setBlockReport(false);
        setNamePlate(false);
        setTamperEvent(false);
        if((reportForm.processName!==null && reportForm.processName!=="" ))
        {
          setValid(true);
        
        }
        else
        {
          setValid(false); 
        }
      }
     

    const handleSubmit = (event: any) => {
   
        if(isValid){     
            if((reportForm.processName=="Meter Information" ))
            {  
                setBasicReport(true);
            }else if((reportForm.processName=="Instant Profile" ))
            {
               setInstantReport(true);
            }else if((reportForm.processName=="Billing Profile" ))
            {
               setBillingReport(true);
            }else if((reportForm.processName=="Daily Load Profile" ))
            {
               setDailyReport(true);
            }else if((reportForm.processName=="Block Load Profile" ))
            {
               setBlockReport(true);
            }else if((reportForm.processName=="Name Plate" ))
            {
               setNamePlate(true);
            }else if((reportForm.processName=="Tamper Event" ))
            {
               setTamperEvent(true);
            }
        }
      };
        const regions= [
            {label: 'Select Zone', value: null},
            {label: 'Chennai North', value: 'Chennai North'},
            {label: 'Chennai South', value: 'Chennai South'},
            {label: 'Vilupuram', value: 'Vilupuram'},
            {label: 'Trichy', value: 'Trichy'},
            {label: 'Madurai', value: 'Madurai'},
            {label: 'Salem', value: 'Salem'},
            {label: 'Coimbatore', value: 'Coimbatore'},
            {label: 'Tirunelveli', value: 'Tirunelveli'}
          ];
          const countries= [           
            {label: 'India', value: 'India'}
          ];
          const states= [
            {label: 'Select State', value: null},
            {label: 'TamilNadu', value: 'TamilNadu'}
          ];
          const districts= [
            {label: 'Select District', value: null},
            {label: 'Chennai', value: 'Chennai'},
            {label: 'Madurai', value: 'Madurai'}
          ];
        const processName=[
            {label: 'Select Process', value: null},
            {label: 'Meter Information', value: 'Meter Information'},
            {label: 'Instant Profile', value: 'Instant Profile'},
            {label: 'Billing Profile', value: 'Billing Profile'},
            {label: 'Daily Load Profile', value: 'Daily Load Profile'},            
            {label: 'Block Load Profile', value: 'Block Load Profile'},
            {label: 'Name Plate', value: 'Name Plate'},
            {label: 'Tamper Event', value: 'Tamper Event'},
        ];
     

        return ( 

<div className="p-grid p-fluid">
     <div className="p-col-12">

                <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                            <div className="p-messages-wrapper">
                                <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                                <ul>
                                    <li>
                                        <span className="p-messages-detail">Create Report  menu used to View All summary report and link with a particular selected meters... 
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card card-w-title">
                            <h1>Create Report</h1>
                            
                            <Panel header="Search " toggleable={true}>
                            <div className="p-grid">
                   
                   <div className="p-col-12 p-md-2">
                           <label htmlFor="Country">  Country :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="countries" options={countries} required  value={reportForm.country} onChange={handleInputChange} autoWidth={false}   />   
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="State">  State :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="states" options={states} required  autoWidth={false}   value={reportForm.state} onChange={handleInputChange}  /> 
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="CustomerNumber">Region Name</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="region" options={regions} required  autoWidth={false}   value={reportForm.region} onChange={handleInputChange}  />   
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="District">  District :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="districts" options={districts} required  autoWidth={false} value={reportForm.district} onChange={handleInputChange}/> 
                    
                       </div> 
                      
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="CustomerName">Sub Station</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                           <InputText id="CustomerName" />
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="FeederName">Feeder Name</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                           <InputText id="FeederName" />
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="ProcessName">Process Name</label>
                       </div>
                      
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="process" options={processName} required  autoWidth={false} value={reportForm.processName} onChange={handleInputChange} /> 
                    
                    
                           </div>
                      
   
                       
                       <div className="p-col-12 p-md-1"> </div>
                       <div className="p-col-12 p-md-2">     
                           <Button
                label="Show Report"
                onClick={handleSubmit}
                type="button"
                className="generateButton"
                 
              />
                       </div>
                       <div className="p-col-12 p-md-1">
                           <Button label="Cancel" icon="pi pi-ban" />
                       </div>
                       
                      
                    </div>
                            </Panel> 
                            {isValid && isBasicReport &&(   
                            <Panel header="Meter Information" toggleable={true} style={{marginTop:'5px', width: '6000px'}}>
                            
                            <DataTable value={basicTableValues} paginatorPosition="both" selectionMode="single" 
                             paginator={true} rows={10}  alwaysShowPaginator={false}        selection={dataTableSelection} 
                            scrollable={true} scrollHeight="200px" style={{marginTop:'5px', width: '6000px'}}  
                            onSelectionChange={onSelectionChangeed} 
                                >

                       <Column field="sno" header="S.no"   />
                       <Column field="meterserialnumber" header="Meter Serial Number"  />
                       <Column field="deviceid" header="Device ID"   />
                       <Column field="manufacturername" header="Manufacturer Name"  />
                       <Column field="communicationmodule" header="Communication Module"   />
                       <Column field="metercategory" header="Meter Category"   />
                       <Column field="yearofmanufacture" header="Year Of Manufacture"  />
                       <Column field="meterIP" header="Meter IP"   />
                       <Column field="metersimno" header="Meter Sim No"   />
                       <Column field="meterstation" header="Meter Station"  />
                       <Column field="transformer" header="Transformer"  />
                       <Column field="pole" header="Pole"  />
                       <Column field="station" header="Station"  />
                       <Column field="substation" header="Sub Station"  />
                       <Column field="feeder" header="Feeder"  />
                       <Column field="latitude" header="Latitude"   />
                       <Column field="longitude" header="Longitude"   />
                       <Column field="country" header="Country"  />
                       <Column field="state" header="State"   />
                       <Column field="zone" header="Zone"   />
                       <Column field="district" header="District"  />
                       <Column field="city" header="City"   />
                       <Column field="locality" header="Locality"  />
                       <Column field="pincode" header="Pincode"   />
                       <Column field="metertime" header="Meter Time"   />
                       <Column field="meterdate" header="Meter Date"   />
                       <Column field="frequencyofreading" header="Frequency Of Reading"   />                 
                                       
                                                
      </DataTable>
                       
                            </Panel>
                              )}  
                               {isValid && isInstantReport &&(   
                            <Panel header="Instant Report" toggleable={true}>
                           <DataTable value={instantTableValues} 
                  paginatorPosition="both" 
                  selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}  
                 selection={dataTableSelection} 
                 scrollable={true} 
                 scrollHeight="200px" 
                 style={{marginTop:'5px', width: '6000px'}} 
              //   header={header}
                 onSelectionChange={onSelectionChangeed}  
                // globalFilter={globalfilter}
                    >
 <Column field="sno" header="S.no"  />
                        <Column field="meterserialnumber" header="Meter Serial Number"  />
                        <Column field="rtcdateandtime" header="RTC - Date  Time"  />
                        <Column field="l1currentir" header="L1 Current - IR"   />
                        <Column field="l2currentIY" header="L2 Current - IY"   />
                        <Column field="l3currentib" header="L3 Current - IB"  />
                        <Column field="l1voltagevrn" header="L1 Voltage - VRN"   />
                        <Column field="l2voltagevyn" header="L2 Voltage - VYN"   />
                        <Column field="l3voltagevbn" header="L3 Voltage - VBN"   />
                        <Column field="l1signedpowerfactorrphase" header="L1 Signed Power Factor - R Phase"   />
                        <Column field="l2signedpowerfactoryphase" header="L2 Signed Power Factor - Y Phase"   />
                        <Column field="l3signedpowerfactorbphase" header="L3 Signed Power Factor - B Phase"  />
                        <Column field="signedthreephasepowerfactorpf" header="Signed Three Phase Power Factor - PF"  />
                        <Column field="frequencyhz" header="Frequency - Hz"   />
                        <Column field="aparentpowerva" header="Apparent Power - VA"   />
                        <Column field="signedactivepowerw" header="Signed Active Power - W"  />
                        <Column field="signedreactionpowervar" header="Signed Reactive Power- VAr"  />
                        <Column field="noofpowerfailures" header="No Of Power Failures"   />
                        <Column field="cumpoweroffdurationinminutes" header="Cum. Power OFF duration in minutes"  />
                        <Column field="cumtampercount" header="Cum. Tamper Count"   />
                        <Column field="cumbillingcount" header="Cum. Billing Count"  />
                        <Column field="cumprogrammingcount" header="Cum. Programming Count"  />
                        <Column field="lastbillingdate" header="Last Billing Date"   />
                        <Column field="cumenergywhimport" header="Cum Energy - Wh Import"   />
                        <Column field="cumenergywhexport" header="Cum Energy - Wh Export"   />
                        <Column field="cumenergyvahimport" header="Cum Energy - VAh Import"  />
                        <Column field="cumenergyvahexport" header="Cum Energy - VAh Export"   />
                        <Column field="maximumdemandactiveimport" header="Maximum demand Active Import - W"   />
                        <Column field="maximumdemandactivedateandtime" header="Maximum demand Active - Date  Time"   />
                        <Column field="maximumdemandapparentimport" header="Maximum demand Apparent Import - W"  />
                        <Column field="maximumdemandapparentdateandtime" header="Maximum demand Apparent - Date  Time"   />
                        <Column field="loadlimitfunctionstatus" header="Load Limit Function Status"   />
                        <Column field="loadlimitvalueinw" header="Load Limit Value in W"   />
                        <Column field="cumenergyvarhq1" header="Cum Energy - VArh - Q1"  />
                        <Column field="cumenergyvarhq2" header="Cum Energy - VArh - Q2"   />
                        <Column field="cumenergyvarhq3" header="Cum Energy - VArh - Q3"   />
                        <Column field="cumenergyvarhq4" header="Cum Energy - VArh - Q4"   />           
                                                 
       </DataTable>
                            </Panel>
                              )}   
                               {isValid && isBillingReport &&(   
                            <Panel header="Billing Report" toggleable={true}>
                               <DataTable value={billingTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false} 
                 selection={dataTableSelection} 
                 scrollable={true} scrollHeight="200px" 
                 style={{marginTop:'5px', width: '6000px'}} 
               //  header={header}
                 onSelectionChange={onSelectionChangeed} 
                // globalFilter={globalfilter}
                    >

<Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="lastbillingdate" header="Last Billing Datee" />
                        <Column field="cumenergywhimport" header="Cum Energy - Wh Import" />
                        <Column field="cumenergywhexport" header="Cum Energy - Wh Export" />
                        <Column field="cumenergyvahimport" header="Cum Energy - VAh Import" />
                        <Column field="cumenergyvahexport" header="Cum Energy - VAh Export" />
                        <Column field="maximumdemandactiveimport" header="Maximum demand Active Import - W" />
                        <Column field="maximumdemandactivedateandtime" header="Maximum demand Active - Date  Time" />
                        <Column field="maximumdemandapparentimport" header="Maximum demand Apparent Import - VA" />
                        <Column field="maximumdemandapparentdateandtime" header="Maximum demand Apparent - Date  Time" />
                        <Column field="cumenergyvarhq1" header="Cum Energy - VArh - Q1" />
                        <Column field="cumenergyvarhq2" header="Cum Energy - VArh - Q2" />
                        <Column field="cumenergyvarhq3" header="Cum Energy - VArh - Q3" />
                        <Column field="cumenergyvarhq4" header="Cum Energy - VArh - Q4" />
                        <Column field="systempowerfactorforbillingperiod" header="System Power Factor for Billing Period" />
                        <Column field="cumenergywhimporttz1" header="Cum. Energy - Wh Import - TZ1" />
                        <Column field="cumenergywhimporttz2" header="Cum. Energy - Wh Import - TZ2" />
                        <Column field="cumenergywhimporttz3" header="Cum. Energy - Wh Import - TZ3" />
                        <Column field="cumenergywhimporttz4" header="Cum. Energy - Wh Import - TZ4" />
                        <Column field="cumenergywhimporttz5" header="Cum. Energy - Wh Import - TZ5" />
                        <Column field="cumenergywhimporttz6" header="Cum. Energy - Wh Import - TZ6" />
                        <Column field="cumenergywhimporttz7" header="Cum. Energy - Wh Import - TZ7" />
                        <Column field="cumenergywhimporttz8" header="Cum. Energy - Wh Import - TZ8" />
                        <Column field="cumenergyvahimporttz1" header="Cum. Energy - VAh Import - TZ1" />
                        <Column field="cumenergyvahimporttz2" header="Cum. Energy - VAh Import - TZ2" />
                        <Column field="cumenergyvahimporttz3" header="Cum. Energy - VAh Import - TZ3" />
                        <Column field="cumenergyvahimporttz4" header="Cum. Energy - VAh Import - TZ4" />
                        <Column field="cumenergyvahimporttz5" header="Cum. Energy - VAh Import - TZ5" />
                        <Column field="cumenergyvahimporttz6" header="Cum. Energy - VAh Import - TZ6" />
                        <Column field="cumenergyvahimporttz7" header="Cum. Energy - VAh Import - TZ7" />
                        <Column field="cumenergyvahimporttz8" header="Cum. Energy - VAh Import - TZ8" />
                        <Column field="mdwimporttz1" header="MD W Import - TZ1" />
                        <Column field="mdwtz1datetime" header="MD W - TZ1 - Date  Time" />
                        <Column field="mdwimportz2" header="MD W Import - TZ2" />
                        <Column field="mdwtz2datetime" header="MD W - TZ2 - Date  Time" />
                        <Column field="mdwimporttz3" header="MD W Import - TZ3" />
                        <Column field="mdwtz3datetime" header="MD W - TZ3 - Date  Time" />
                        <Column field="mdwimporttz4" header="MD W Import - TZ4" />
                        <Column field="mdwtz4datetime" header="MD W - TZ4 - Date  Time" />
                        <Column field="mdwimportz5" header="MD W Import - TZ5" />
                        <Column field="mdwtz5datetime" header="MD W - TZ5 - Date  Time" />
                        <Column field="mdwimporttz6" header="MD W Import - TZ6" />
                        <Column field="mdwtz6datetime" header="MD W - TZ6 - Date  Time" />
                        <Column field="mdwimportz7" header="MD W Import - TZ7" />
                        <Column field="mdwtz7datetime" header="MD W - TZ7 - Date Time" />
                        <Column field="mdwimporttz8" header="MD W Import - TZ8" />
                        <Column field="mdwtz8datetime" header="MD W - TZ8 - Date & Time" />
                        <Column field="billingpoweronduration" header="Billing Power On Duration in Minutes (During Billing Period)" />
                                       
                                                 
       </DataTable>
                            </Panel>
                              )}   
                               {isValid && isDailyReport &&(   
                            <Panel header="Daily Report" toggleable={true}>
                            <DataTable value={dailyTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}
                 selection={dataTableSelection} 
                 scrollable={true}
                //    header={header}
                    onSelectionChange={onSelectionChangeed} 
              //      globalFilter={globalfilter}
                    >
 <Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="rtcdateandtime" header="RTC - Date  Time" />
                        <Column field="cumenergywhimport" header="Cum Energy - Wh Import" />
                        <Column field="cumenergywhexport" header="Cum Energy - Wh Export" />
                        <Column field="cumenergyvahimport" header="Cum Energy - VAh Import" />
                        <Column field="cumenergyvahexport" header="Cum Energy - VAh Export" />
                        <Column field="maximumdemandactiveimport" header="Maximum demand Active Import - W" />
                        <Column field="maximumdemandactivedatetime" header="Maximum demand Active - Date  Time" />
                        <Column field="maximumdemandapparentimport" header="Maximum demand Apparent Import - W" />
                        <Column field="maximumdemandapparentdatetime" header="Maximum demand Apparent - Date  Time" />             
                                                 
       </DataTable>
                            </Panel>
                              )}   
                               {isValid && isBlockReport &&(   
                            <Panel header="Block Report" toggleable={true}>
                           <DataTable value={blockTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}
                 selection={dataTableSelection} 
                 scrollable={true}
                 style={{marginTop:'5px', width: '2000px'}} 
              
                    onSelectionChange={onSelectionChangeed} 
                  
                    >
                        <Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="rtcdateandtime" header="RTC - Date  Time" />
                       
                        <Column field="currentir" header="Current,Ir" />
                        <Column field="currentiy" header="Current,Iy" />
                        <Column field="currentib" header="Current,Ib" />
                        <Column field="voltagevrn" header="Voltage,Vrn" />
                        <Column field="voltagevyn" header="Voltage,Vyn" />
                        <Column field="voltagevbn" header="Voltage,Vbn" />
                        <Column field="energywhimport" header="Energy - Wh Import" />
                        <Column field="energyvahimport" header="Energy - VAh Import" />    
                        <Column field="energywhexport" header="Energy -Wh Export" />
                        <Column field="energyvahexport" header="Energy - VAh Export" />
                        <Column field="statusbyte" header="Status Byte" />
                        <Column field="averagesignalstrength" header="Average Signal Strength" />    

                       										          
               
                                                 
       </DataTable>
                            </Panel>
                              )}   
                               {isValid && isNamePlate &&(   
                            <Panel header="Name Plate " toggleable={true}>
                            <DataTable value={nameTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}
                 selection={dataTableSelection} 
                 scrollable={true}
             
                    onSelectionChange={onSelectionChangeed} 
                            
                    >
                        <Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="rtcdateandtime" header="RTC - Date  Time" />
                       
                        <Column field="deviceid" header="Device Id" />
                        <Column field="manufacturername" header="Manufacturer Name" />
                        <Column field="firmwareversion" header="Firmware Version" />
                        <Column field="metertype" header="Meter Type" />
                        <Column field="metercategory" header="Meter Category" />
                        <Column field="currentrating" header="Current Rating" />
                        <Column field="yearofmanufacture" header="Year of Manufacture" />
                   										          
               
                                                 
       </DataTable>
                            </Panel>
                              )}   
                                {isValid && isTamperEvent &&(   
                            <Panel header="Tamper Event " toggleable={true}>
                             <DataTable value={tamperTableValues}
                 paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}
                 selection={dataTableSelection} 
                 scrollable={true}
                 style={{marginTop:'5px', width: '2000px'}} 
                    
                    onSelectionChange={onSelectionChangeed} 
                    
                    >
                        <Column field="sno" header="S.no" />
                        <Column field="meterserialnumber" header="Meter Serial Number" />
                        <Column field="rtcdateandtime" header="RTC - Date  Time" />
                        <Column field="eventcode" header="Event code" />
                        
                        <Column field="currentir" header="Current,Ir" />
                        <Column field="currentiy" header="Current,Iy" />
                        <Column field="currentib" header="Current,Ib" />
                        <Column field="voltagevrn" header="Voltage,Vrn" />
                        <Column field="voltagevyn" header="Voltage,Vyn" />
                        <Column field="voltagevbn" header="Voltage,Vbn" />
                        <Column field="rphase" header="R-phase" />
                        <Column field="yphase" header="Y-phase" />
                        <Column field="bphase" header="B-phase" />
 
                        <Column field="energywhimport" header="Cum Energy - Wh Import" />
                        <Column field="energywhexport" header="Cum Energy -Wh Export" />
                        <Column field="cumtampercount" header="Tamper Count" />
                        <Column field="sequencenumber" header="Log Sequence Number" />
                     
                        
 
                          										          
               
                                                 
       </DataTable>
                            </Panel>
                              )}   
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
      export default connect(mapStateToProps)(CreateReport);
 