import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { ProgressSpinner } from "primereact/progressspinner";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import moment from "moment";

import { saveNewDevice } from "../../../store/actions/NewDevice";
import { Growl } from "primereact/growl";
import { Form } from "antd";
import $ from 'jquery';

interface INewDevice {
    dispatch: Dispatch<any>;
    deviceFormData: any;
}

const NewDevice: React.FC<INewDevice> = ({
    dispatch, deviceFormData
}) => {
    const newDeviceForm = {
        meterName: "",
        manufacturerId: 0,
        hostName: "",
        port: "",
        protocol: "TCP",
        authType: null,
        passowrd: "",
        conProtocol: "DLMS",
        securityType: null,
        systemTitle: "",
        blockCipherKey: "",
        authenticationKey: "",
        userId: "",
        tenantId: 0,
        interface: "Wrapper",
        referencingName: ""
        ,phase:0
    };

    const manfacturerList = [
        { label: "Select Manufacturer", value: 0 },
        { label: "INESH", value: "1" }
    ];

    const protocolList = [
        { label: "Select Protocol", value: null },
        { label: "TCP", value: "TCP" }
    ];

    const conProtocoList = [
        { label: "Select Protocol", value: null },
        { label: "DLMS", value: "DLMS" }
    ];

    const authenticationTypeList = [
        { label: "Select Authentication Type", value: null },
        { label: "None", value: "None" },
        { label: "Low", value: "Low" },
        { label: "High", value: "High" }
    ];

    const securityList = [
        { label: "Select Authentication Type", value: null },
        { label: "None", value: "None" },
        { label: "Authentication", value: "Authentication" },
        { label: "Encryption", value: "Encryption" },
        { label: "Authentication_Encryption", value: "Authentication_Encryption" }
    ];

    const refNameList = [
        { label: "Select Referencing", value: null },
        { label: "ln", value: "ln" },
        { label: "sn", value: "sn" }
    ];

    let [deviceForm, setDevice] = useState(newDeviceForm);
    const [isIpValid, setisIpValid] = useState(true);
    const [isValidPort, setIsValidPort] = useState(true);
    const handleInputChange = (event: any) => {
        if (event.target.id === "meterNameId") {
            deviceForm.meterName = event.target.value;
        } else if (event.target.id === "manfactureId") {
            deviceForm.manufacturerId = event.target.value;
        } else if (event.target.id === "hostNameId") {
            deviceForm.hostName = event.target.value;
            if (!event.target.value.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")) {
                setisIpValid(false);
            }
            else {
                setisIpValid(true);
            }
        } else if (event.target.id === "portId") {
            deviceForm.port = event.target.value;
            if(event.target.value>65535){
                setIsValidPort(false)
            }else{
                setIsValidPort(true)
            }
        } else if (event.target.id === "protocolId") {
            deviceForm.protocol = event.target.value;
        } else if (event.target.id === "autuTypeId") {
            deviceForm.authType = event.target.value;
        } else if (event.target.id === "passwordId") {
            deviceForm.passowrd = event.target.value;
        } else if (event.target.id === "securityTypeId") {
            deviceForm.securityType = event.target.value;
        } else if (event.target.id === "SysTitleId") {
            deviceForm.systemTitle = event.target.value;
        } else if (event.target.id === "blockKeyId") {
            deviceForm.blockCipherKey = event.target.value;
        } else if (event.target.id === "authKeyId") {
            deviceForm.authenticationKey = event.target.value;
        } else if (event.target.id === "refNamelId") {
            deviceForm.referencingName = event.target.value;
        }else if (event.target.id === "phaseId") {
            deviceForm.phase = event.target.value;
        }
        setDevice({ ...deviceForm });

    };
    const [isValid, setValid] = useState(false);
    const checkValidation = () => {
         if ((deviceForm.meterName !== null && deviceForm.meterName !== "")
            && (deviceForm.manufacturerId !== null && deviceForm.manufacturerId !== 0)
            && (deviceForm.hostName !== null && deviceForm.hostName !== "" && isIpValid === true)
            && (deviceForm.port !== null && deviceForm.port !== "")
            && (deviceForm.protocol !== null && deviceForm.protocol !== "")
            && (deviceForm.authType !== null && deviceForm.authType !== "")
            && (deviceForm.passowrd !== null && deviceForm.passowrd !== "")
            && (deviceForm.securityType !== null && deviceForm.securityType !== "")
            && (deviceForm.blockCipherKey !== null && deviceForm.blockCipherKey !== "")
            && (deviceForm.authenticationKey !== null && deviceForm.authenticationKey !== "")
            && (deviceForm.referencingName !== null && deviceForm.referencingName !== "")
        ) {
            setValid(true);
        }
        else {
            setValid(false);
        }
    }
    
    const [isSumbmit, setSumbmited] = useState(false);

    const handleSubmit = (event: any) => {
        setSumbmited(true);
        checkValidation();
        console.log(deviceForm)
        if ((deviceForm.meterName !== null && deviceForm.meterName !== "")
            && (deviceForm.manufacturerId !== null && deviceForm.manufacturerId !== 0)
            && (deviceForm.hostName !== null && deviceForm.hostName !== "" && isIpValid === true)
            && (deviceForm.port !== null && deviceForm.port !== "")
            && (deviceForm.protocol !== null && deviceForm.protocol !== "")
            && (deviceForm.authType !== null && deviceForm.authType !== "")
            && (deviceForm.passowrd !== null && deviceForm.passowrd !== "")
            && (deviceForm.securityType !== null && deviceForm.securityType !== "")
            && (deviceForm.blockCipherKey !== null && deviceForm.blockCipherKey !== "")
            && (deviceForm.authenticationKey !== null && deviceForm.authenticationKey !== "")
            && (deviceForm.referencingName !== null && deviceForm.referencingName !== "")
        ){
            const loggedInString = localStorage.getItem("AUTHDATA");
            if (loggedInString) {
                const loggedInData = JSON.parse(loggedInString);
                if (loggedInData) {
                    deviceForm.userId = loggedInData.userProfile.userFkId.userId;
                    //console.log("roleId " + loggedInData.userProfile.userFkId.roleFkId.roleId)
                    deviceForm.tenantId = loggedInData.userProfile.userFkId.roleFkId.tenantFkId.id;
                }
            }
            console.log(deviceForm);
            dispatch(saveNewDevice(deviceForm));
            setPageLoaded(false);
        }
        else {

        }
    };
    const [growl, setGrowl] = useState();
    const [showMessage, setShowMessage] = useState(false);
    const handleReset = (e) => {
        //setDevice(newDeviceForm);
        setDevice({...newDeviceForm});
        setSumbmited(false);
        setShowMessage(false);
    }
    const [msgSeverity, setSeverity]=useState("success");    
    const [msgDescription, setDescriptiony]=useState("Meter added successfully");    
    
    function successMessage( key:string){     
        return <Message severity={msgSeverity} key={key} text={msgDescription} />
      }
    if (!deviceFormData.isLoading && deviceFormData.isFormSubmit && isSumbmit) {
        if(deviceFormData.status && deviceFormData.status!==null){
            setDescriptiony(deviceFormData.status.displayMessage);
            if(deviceFormData.status.value ===true ){
              if(deviceFormData.status.code ===200 || deviceFormData.status.code ===201 ){
                setShowMessage(true);
                //handleReset(null);
                growl.show({ severity: 'success', summary: 'Success', detail: deviceFormData.status.displayMessage,life:5000 });
                setSeverity("success");
                setDevice({...newDeviceForm});
                }
                else if(deviceFormData.status.code ===300 ){
                    growl.show({ severity: 'warn', summary: 'Warn', detail: deviceFormData.status.displayMessage });
                    setShowMessage(true);
                    setSeverity("warn");
                }
            }
            else{
                growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});
                setShowMessage(true);
                setDescriptiony("Error occuerd in process.");
                setSeverity("error");
              }
            }
        setSumbmited(false);
    }
    
    const [isPageLoaded, setPageLoaded] = useState(false);

    function requiredMessage(key: string) { 
        var msg="Field is required";
        if(key==="meterName"){
            msg="Enter Meter Serial Number";
        }
        return <Message severity="error" key={key} text={msg} /> }
    return (
        <div className="p-grid p-fluid">
            <div className="p-col-12 ">
                <div className="card card-w-title">
                    <h1>Meter Info</h1>

                    <Growl ref={(el) => setGrowl(el)} />
                    {showMessage && ( <Message severity={msgSeverity} key="msg" text={msgDescription} />)}
                    <Form id="formDevice">
                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="meterNameId">Meter Serial Number*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off"
                                    id="meterNameId" required value={deviceForm.meterName}
                                    onChange={handleInputChange} placeholder="Meter Serial Number" />
                                {isSumbmit && deviceForm.meterName === "" && (requiredMessage("meterName"))}
                            </div>
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="manfactureId">Manufacturer*</label>
                            </div>
                            <div className="p-col-14 p-md-3">
                                <Dropdown
                                    options={manfacturerList}
                                    value={deviceForm.manufacturerId}
                                    id="manfactureId" required onChange={handleInputChange} />
                                {isSumbmit && deviceForm.manufacturerId === 0 && (requiredMessage("manufacturerId"))}
                            </div>
                        </div>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="hostNameId">Host Name*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off" id="hostNameId" value={deviceForm.hostName} onChange={handleInputChange} placeholder="Host Name" />
                                {isSumbmit && deviceForm.hostName === "" && (requiredMessage("authType"))}
                                {isSumbmit && !isIpValid && (<Message severity="error" key="emailvalid" text="Host Name not valid" />)}
                            </div>
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="portId">Port*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off" id="portId" value={deviceForm.port} required keyfilter="pint" minLength={4} maxLength={5} onChange={handleInputChange} placeholder="Port" />
                                {isSumbmit && deviceForm.port === "" && (requiredMessage("authType"))}
                                {isSumbmit && (!isValidPort )&& (<Message severity="error" key="portva" text="port not valid" />)}
                            </div>
                        </div>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="protocolId">Protocol</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Dropdown
                                    options={protocolList} disabled
                                    value={deviceForm.protocol} id="protocolId" onChange={handleInputChange} placeholder="Protocol" />
                            </div>
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="autuTypeId">Authentication Type*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Dropdown
                                    options={authenticationTypeList}
                                    value={deviceForm.authType}
                                    id="autuTypeId" required onChange={handleInputChange} />
                                {isSumbmit && deviceForm.authType === "" && (requiredMessage("authType"))}
                            </div>
                        </div>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="passwordId">Password*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off" id="passwordId" required value={deviceForm.passowrd}
                                    onChange={handleInputChange} placeholder="Password" />
                                {isSumbmit && deviceForm.passowrd === "" && (requiredMessage("passowrd"))}
                            </div>
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="interfaceId">Interface*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off" id="interfaceId" value={deviceForm.interface}
                                    onChange={handleInputChange} disabled />
                                {isSumbmit && deviceForm.interface === "" && (requiredMessage("referencingName"))}
                            </div>
                        </div>

                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="dlmsProtocolId">Meter Protocol*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Dropdown
                                    options={conProtocoList} disabled
                                    value={deviceForm.conProtocol}
                                    onChange={handleInputChange} id="dlmsProtocolId" />
                                {isSumbmit && deviceForm.conProtocol === "" && (requiredMessage("conProtocol"))}
                            </div>
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="refNamelId">Referencing Name*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Dropdown
                                    options={refNameList}
                                    value={deviceForm.referencingName}
                                    onChange={handleInputChange} id="refNamelId" />
                                {isSumbmit && deviceForm.referencingName === "" && (requiredMessage("referencingName"))}
                            </div>
                        </div>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="securityTypeId">Security Type*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Dropdown
                                    options={securityList}
                                    value={deviceForm.securityType}
                                    id="securityTypeId" required onChange={handleInputChange} />
                                {isSumbmit && deviceForm.securityType === "" && (requiredMessage("securityType"))}
                            </div>
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="SysTitleId">System Title</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off" id="SysTitleId" value={deviceForm.systemTitle} onChange={handleInputChange} placeholder="System Title" />
                            </div>
                        </div>

                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="blockKeyId">Block Cipher Key*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off" id="blockKeyId" value={deviceForm.blockCipherKey} required onChange={handleInputChange} placeholder="Block Cipher Key" />
                                {isSumbmit && deviceForm.blockCipherKey === "" && (requiredMessage("blockCipherKey"))}
                            </div>
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="authKeyId">Authentication Key*</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <InputText autocomplete="off" id="authKeyId" 
                                value={deviceForm.authenticationKey}
                                required onChange={handleInputChange} placeholder="Authentication Key" />
                                {isSumbmit && deviceForm.authenticationKey === "" && (requiredMessage("authenticationKey"))}
                            </div>
                        </div> 
                        <div className="p-grid">
                            <div className="p-col-12 p-md-2">
                                <label htmlFor="phaseId">Phase</label>
                            </div>
                            <div className="p-col-12 p-md-3">
                                <Dropdown
                                    options={[ { label: "Single", value: "1" },
                                    { label: "Three", value: "3" }]}
                                    value={deviceForm.phase}
                                    id="phaseId" required onChange={handleInputChange} />                                
                            </div>
                            
                        </div>

                    </Form>
                </div>
            </div>
            
            <div className="p-col-12 p-lg-6">
            {!isValid && isSumbmit && (<Message severity="error" key={"error"} text="Form is invalid" />)}
                <div className="p-grid">
                    <div className="p-col-12 p-md-4" style={{ textAlign: 'center' }}>
                        <Button
                            label="Reset"
                            type="reset"
                            onClick={handleReset}
                            className="p-button-raised"
                            style={{  marginBottom: '10px' }}
                        />
                    </div>
                    <div className="p-col-12 p-md-4" style={{ textAlign: 'center' }}>
                        <Button
                            label="Save"
                            onClick={handleSubmit}
                            type="button"
                            className="p-button-raised"
                            style={{  marginBottom: '10px' }}
                        />
                    </div>
                </div>
                <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                        {deviceFormData.isLoading && isSumbmit && <ProgressSpinner />}
                        </div>
                    </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state: any) => {
    const { deviceFormData } = state;
    return {
        deviceFormData
    };
};
export default connect(mapStateToProps)(NewDevice);