import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { } from "react-router-dom"
import { getCurrentUser } from "../../../store/selectors/Accounts";
import { getDeviceDetails, getMeterDetails, saveNMeterLocation, saveActivateMeter } from "../../../store/actions/NewDevice";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ScrollPanel } from 'primereact/scrollpanel';
import { Message } from "primereact/message";
import { Growl } from "primereact/growl";
import { Dropdown } from "primereact/dropdown";
import { getConsumerList } from "../../../store/actions/Consumer";
import { InputSwitch } from "primereact/inputswitch";
import { ProgressSpinner } from "primereact/progressspinner"; 
interface IAssignMeter {
    dispatch: Dispatch<any>;
    deviceFormData: any;
    props: any;
    match: any;
    consumerData: any; 
    globalFilter: any;
}
const AssignMeter: React.FC<IAssignMeter> = ({
    dispatch, deviceFormData, props, match, consumerData,globalFilter
}) => {
//alert("initialDialogForm");
    const initialDialogForm = {
        meterProfileId: 0,
        locationId: 0,
        country: "",
        state: "",
        zone: "",
        district: "",
        city: "",
        pincode: "",
        region: "",
        feeder: "",
        subStation: "",
        transformer: "",
        latitude: "",
        longitude: "",
        consumerId: 0,
        consumerName: "",
        cAddress: "",
        cPhoneNumber: "",
        cUniqueNumber: "",
        cEmailId: "",
        cNumber: "",
        userId: ""
    }
    const deviceInput = {
        tenantId: 0,
        deviceType: "",
        meterNumber: ""
    };
  
    function handlePageChange()
    {
        refreshList();
     //   dispatch(getReportOnDemand(model));
      //  setPageLoaded(false);

   //  window.location.href = "/staticui/searchcommondetails";
  //   window.location.hash = "#/staticui/searchcommondetails"; 
    }
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
        {label: 'Select Country', value: null},
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
        {label: 'Instant', value: 'Instant Profile'},
        {label: 'Daily', value: 'Daily Load Profile'},
        {label: 'Billing', value: 'Billing Profile'},
        {label: 'Block', value: 'Block Load Profile'}
    ];
    const [isReadOnly, setIsReadOnlyState] = useState(true);
    //const [isAssignPage, setAssignPage] = useState(false);
    const [isEditPage, setEditPage] = useState(false);
    const [getInput, setGetInput] = useState(deviceInput);
    const [deviceType, setDeviceType] = useState("");
    const [isPageLoaded, setPageLoaded] = useState(false);
    const [isShowActivate, setShowActivate] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [consumerList, setConsumerList] = useState(new Array<any>());
    const [consumerDropDownList, setConsumerDropDownList] = useState(new Array<any>());
    const [datatable, setDatatable] = useState();
    const [dialogData, setDialogData] = useState();
    const [meterData, setMeterData] = useState(initialDialogForm);
    const [isDialogState, setDialogState] = useState(false);
    const [isEditLoaded, setEditLoaded] = useState(false);
    const [isValid, setValid] = useState(false);
    const [isSubmit, setSubmit] = useState(false);
    const [currentUser, setCurrentUser] = useState();
   // alert("deviceType " + deviceType);
   // alert(" match.params.id " +  match.params.id);

   const [globalfilter, setglobalfilter] = useState();
   const onSelectionChangeed=(e) => {setDatatable(e.value)};
   const onfilter=(e) => {setglobalfilter(e.target.value)}

   const profiledata = {
    meterNumber:"",
    zone:"",
    consumptionZone:""
  };

   const [profile, setProfile] = useState(profiledata);
   const handleProfileChange = (event: any) => {
      
       if (event.target.id === "MeterNumber") {
        profile.meterNumber=event.target.value;
      //  alert(event.target.value);
       }
       setProfile({ ...profile });
       
   }
    if (deviceType !== match.params.id) {
        setPageLoaded(false);
        setDeviceType(match.params.id);
        refreshLoad(match.params.id);
    }
    console.log("params" + match.params.id);
    useEffect(() => {
    }, []);
    function refreshLoad(devType) {
        var data = getCurrentUser();
        if (data !== null) {
            console.log(data);
            deviceInput.tenantId = data.userProfile.tenantFkId.id;
            deviceInput.deviceType = devType;
            setCurrentUser(data);
            //setAssignPage(false);
            setEditPage(false);
            setIsReadOnlyState(true);
            if (deviceInput.deviceType === "assign") {
                //setAssignPage(true);
                setIsReadOnlyState(false);
                setEditPage(true);
                setShowActivate(false);
            }
            else if (deviceInput.deviceType === "activate") {
                setShowActivate(true);
            }
            
            dispatch(getConsumerList(data.userProfile.tenantFkId.id));
            setGetInput(deviceInput);
            dispatch(getDeviceDetails(deviceInput));
            //refreshList();
        } else {
        }
    }

    if (consumerData.items.length > 0 && consumerList.length === 0) {
        setConsumerList(consumerData.items);
        var elements = new Array<any>();
        for (var i = 0; i < consumerData.items.length; i++) {
            elements.push({ label: consumerData.items[i].cNumber, value: consumerData.items[i].cNumber.toString() });
        }
        setConsumerDropDownList(elements);
    }
    function refreshList() {
        setPageLoaded(false);
        if(profile.meterNumber!=""){
            getInput.meterNumber= profile.meterNumber;
        }
      alert(getInput.meterNumber);
        dispatch(getDeviceDetails(getInput));
    }
    if (!isPageLoaded && !deviceFormData.isListLoading && deviceFormData.input.deviceType === deviceType) {
     //   alert(deviceFormData.items);
        var table = deviceFormData.items
     //   alert(table);
        setTableData(table);
        setPageLoaded(true);
    }

    const showDialog = (e: any) => {
        console.log(e.data);
        setDialogData(e.data);
        setEditLoaded(false);
        setMeterData(initialDialogForm);
        dispatch(getMeterDetails(e.data.meterConnectionInfoId))
        setDialogState(true);
    }
    const renderHeader = () => {
        return (
            <div>
                List of Meters
                <div  className="p-datatable-globalfilter-container">
                <InputText type="search" onInput= {onfilter} placeholder="Global Search" />
                   
                </div>
            </div>
        );
    }
    if (setDialogState && !isEditLoaded && !deviceFormData.isLoading && deviceFormData.meterConnectionData) {
        var table = deviceFormData.meterConnectionData;
      //  alert(table);
        console.log("table " + table);
        console.log(table); 
        meterData.meterProfileId = table.id;
        if (table.meterProfileFkId.meterConsumerInfoFkId && table.meterProfileFkId.meterConsumerInfoFkId !== null) {
            meterData.consumerId = table.meterProfileFkId.meterConsumerInfoFkId.id;
            meterData.consumerName = table.meterProfileFkId.meterConsumerInfoFkId.consumerName;
            meterData.cAddress = table.meterProfileFkId.meterConsumerInfoFkId.consumerAddress;
            meterData.cEmailId = table.meterProfileFkId.meterConsumerInfoFkId.consumerEmailid;
            meterData.cPhoneNumber = table.meterProfileFkId.meterConsumerInfoFkId.consumerNumber;
            meterData.cNumber = table.meterProfileFkId.meterConsumerInfoFkId.consumerNumber;
            if (table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId && table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId !== null) {
                meterData.locationId = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId;
                console.log("table1 " + table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId);
                meterData.country = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.country;
                meterData.state = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.state;
                meterData.zone = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.zone;
                meterData.district = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.district;
                meterData.city = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.city;
                meterData.pincode = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.pincode;
                meterData.region = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.region;
                meterData.feeder = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.feeder;
                meterData.subStation = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.subStation;
                meterData.transformer = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.transformer;
                meterData.latitude = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.latitude;
                meterData.longitude = table.meterProfileFkId.meterConsumerInfoFkId.meterLocationFkId.longitude;

            }
        }
        setEditLoaded(true);
    }

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        if (event.target.id === "consumerId") {
            meterData.cNumber = event.target.value;
            var item = consumerList.find(x => x.cNumber === meterData.cNumber);
            if (item != null) {
                meterData.consumerId = item.consumerId;
                meterData.consumerName = item.consumerName;
                meterData.cAddress = item.cAddress;
                meterData.cEmailId = item.cEmailId;
                meterData.cPhoneNumber = item.cPhoneNumber;
                meterData.cNumber = item.cNumber;
                meterData.cUniqueNumber = item.cUniqueNumber
                meterData.locationId =item.locationId;
                meterData.country = item.country;
                meterData.state = item.state;
                meterData.zone = item.zone;
                meterData.district = item.district;
                meterData.city = item.city;
                meterData.pincode = item.pincode;
                meterData.region = item.region;
                meterData.feeder = item.feeder;
                meterData.subStation = item.subStation;
                meterData.transformer = item.transformer;
                meterData.latitude = item.latitude;
                meterData.longitude = item.longitude;
            }
            setMeterData({ ...meterData });
        }
        else {
            setMeterData({ ...meterData, [name]: value });
        }

        setValid(true);
        checkValidity()
    }

    function checkValidity() {
        if (checkValueIsNullorEmpty(meterData.transformer) === false
            || checkValueIsNullorEmpty(meterData.feeder) === false
            || checkValueIsNullorEmpty(meterData.subStation) === false
            || checkValueIsNullorEmpty(meterData.zone) === false
            || checkValueIsNullorEmpty(meterData.region) === false
            || checkValueIsNullorEmpty(meterData.district) === false
            || checkValueIsNullorEmpty(meterData.city) === false
            || checkValueIsNullorEmpty(meterData.state) === false
            || checkValueIsNullorEmpty(meterData.country) === false
            || checkValueIsNullorEmpty(meterData.pincode) === false
            || checkValueIsNullorEmpty(meterData.cNumber) === false) {
            if (isValid) {
                setValid(false);
            }
        }
        else {
            if (!isValid) {
                setValid(true);
            }

        }
    }
  
    const handleSubmit = () => {
        console.log(meterData);

        meterData.userId = currentUser.userProfile.userFkId.userId;
        if (isValid) {
            dispatch(saveNMeterLocation(meterData));
            setDialogState(false);
        }
        setSubmit(true);
    }

    const [growl, setGrowl] = useState();
    const [showMessage, setShowMessage] = useState(false);
    const [msgSeverity, setSeverity] = useState("success");
    const [msgDescription, setDescriptiony] = useState("Meter and consumer linked successfully");

    function successMessage(key: string) {
        return <Message severity={msgSeverity} key={key} text={msgDescription} />
    }
    if (!deviceFormData.isLoading && deviceFormData.isFormSubmit && isSubmit) {
        if (deviceFormData.status && deviceFormData.status !== null) {
            setDescriptiony(deviceFormData.status.displayMessage);
            if (deviceFormData.status.value === true) {
                if (deviceFormData.status.code === 200) {
                    setShowMessage(true);
                    refreshList();   
                    setSeverity('success');
                    growl.show({ severity: 'success', summary: 'Success', detail: deviceFormData.status.displayMessage });
                }
                else if (deviceFormData.status.code === 200) {
                    growl.show({ severity: 'warn', summary: 'Warn', detail: deviceFormData.status.displayMessage });
                    setShowMessage(false);
                    setSeverity('warn');
                }
            }
            else {
                growl.show({ severity: 'error', summary: 'Error', detail: deviceFormData.status.displayMessage });
                setShowMessage(false);
                setSeverity('error');
            }
        }
        refreshList();
        setSubmit(false);
    }

    const exportCsv = () => {
        console.log(datatable);
        if (datatable)
            datatable.exportCSV();
    }
    let header = <div style={{ textAlign: 'left' }}>
        <Button type="button" style={{ width: 100 }} icon="pi pi-external-link" iconPos="left" label="CSV" onClick={exportCsv}></Button>
    </div>;

    function checkValueIsNullorEmpty(value: any) {
        if (value !== null && value && value !== "") {
            return true;
        }
        else {

            return false;
        }
    }

    const [Activestatus, setActiveAstatus] = useState(false);
    const ActivateModel = {
        meterConnectionInfoId: 0,
        userId: ""
    }
    const [activateInput, setActivateInput] = useState(ActivateModel);


    function onEditorValueChangeForRowEditing(props, event) {
        console.log(event);
        console.log(props);
        ActivateModel.meterConnectionInfoId = props.rowData.meterConnectionInfoId;
        ActivateModel.userId = currentUser.userProfile.userFkId.userId;
        setActivateInput(ActivateModel);
        setActiveAstatus(!Activestatus);
    }

    function editorForRowEditing(props, field) {
        return <InputSwitch id="dropdownControl" style={{ width: "3em" }} checked={Activestatus} onChange={(e) => onEditorValueChangeForRowEditing(props, e)} />
        // <InputText type="text" value={props.rowData[field]} } />;
    }


    function onRowEditSave(event) {
        if (Activestatus) {
            setSubmit(true);
            dispatch(saveActivateMeter(activateInput));
        }
    }

    function onRowEditCancel(event) {
        setActiveAstatus(false);
    }

    function rowColumnClick(rowData) {
        window.location.href = "/staticui/meterview/" + rowData.meterSerialNumber;
    }
    
    function three60Click(rowData) {
        window.location.href = "/staticui/meter360view/" + rowData.meterSerialNumber;
    }
    const dateTemplate = (rowData, column) => {
        return <div>
            <a onClick={() => rowColumnClick(rowData)}>{rowData.meterSerialNumber}</a>
        </div>;
    }
    const three60Template = (rowData, column) => {
        return <div>
            <a onClick={() => three60Click(rowData)}> View </a>
        </div>;
    }
    const header1 = renderHeader();
    function requiredMessage(key: string) { return <Message severity="error" key={key} text="Field is required" /> }
    return (
    
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card card-w-title">
                    <h1>Meter Details</h1>

                    <div className="p-grid">
                   
                   <div className="p-col-12 p-md-2">
                           <label htmlFor="Country">  Country :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="countries" options={countries} required  autoWidth={false}  onChange={handleProfileChange}/>   
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="State">  State :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="states" options={states} required  autoWidth={false}  onChange={handleProfileChange}/> 
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="CustomerNumber">Region Name</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="region" options={regions} required  autoWidth={false}  onChange={handleProfileChange}/>   
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="District">  District :</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                       <Dropdown id="districts" options={districts} required  autoWidth={false}  onChange={handleProfileChange}/> 
                    
                       </div> 
                      
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="CustomerName">Sub Station</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                           <InputText id="CustomerName"  onChange={handleProfileChange}/>
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="FeederName">Feeder Name</label>
                       </div>
                       <div className="p-col-12 p-md-4">
                           <InputText id="FeederName"  onChange={handleProfileChange}/>
                       </div> 
                       <div className="p-col-12 p-md-2">
                           <label htmlFor="TransformerName">Transformer Name</label>
                       </div>
                      
                       <div className="p-col-12 p-md-4">
                       <InputText id="TransformerName"  onChange={handleProfileChange} />
                    
                           </div>
                           <div className="p-col-12 p-md-2">
                           <label htmlFor="PoleNumber">Pole Number</label>
                       </div>
                      
                       <div className="p-col-12 p-md-4">
                       <InputText id="PoleNumber"  onChange={handleProfileChange}/>
                    
                           </div>
                      
                           <div className="p-col-12 p-md-2">
                           <label htmlFor="MeterNumber">Meter Number</label>
                       </div>
                      
                       <div className="p-col-12 p-md-4">
                       <InputText id="MeterNumber"  onChange={handleProfileChange}/>
                    
                           </div>
                       
                       <div className="p-col-12 p-md-2">
                           <Button label="Search" icon="pi pi-search" onClick={handlePageChange} />
                       </div>
                       <div className="p-col-12 p-md-2">
                           <Button label="Cancel" icon="pi pi-ban" />
                       </div>
                       
    
                    </div>
             
                 
                    <Growl ref={(el) => setGrowl(el)} />
                    {showMessage && (successMessage("Success"))}
                    {deviceFormData.isListLoading && !isPageLoaded && <ProgressSpinner />}
                    {!deviceFormData.isListLoading && (
                        <div>
                            {!isShowActivate && (
                               
                                <DataTable
                                   value={tableData}
                                    paginatorPosition="bottom"
                                    selectionMode="single"
                                     paginator={true}
                                   rows={10}
                                    header={header1} 
                                    ref={(el) => { setDatatable(el); }}
                                    responsive={true}
                                    onRowClick={showDialog}
                                    emptyMessage="No Record Found"
                                    globalFilter={globalfilter}
                                    scrollable={true}
                                    style={{marginTop:'5px', width: '1500px'}}
                                >
                                    <Column  body={dateTemplate} className="dtcolumnoverflow" field="meterSerialNumber" header="Meter Serial Number"   />
                                    <Column field="deviceId"  header="Device ID"   />
                                    <Column field="manufactureName" header="Manufacturer name"   />
                                    <Column field="firmwareVersion" header="Firmware Version"  />
                                    <Column field="meterPort" header="Meter Port"    />
                                    <Column field="phaseString" header="Meter Category"  />                                  
                                    <Column field="yearManufacture" header="Year of Manufacture"   />
                                    <Column field="meterIp" header="Meter ip"  />
                                    <Column field="sourceType" header="Source Type"    />
                                    <Column field="statusString" header="Status"    />
                                    <Column body={three60Template}    header="360 Degree View" />
                                    
                                   {/* 
                                   
                                   meterName
phaseString
imeiNumber
manufatureName,statusString,meterip,meterPort,sourceType
  <Column field="currentRating" header="Current Rating"    />
<Column field="meterIp" header="Host Name" sortable={true} filter={true} />
                                    <Column className="dtcolumnoverflow" field="imeiNumber" header="IMEI" sortable={true} filter={true} />
                                    <Column field="phaseString" header="Phase" sortable={true} filter={true} />
                                    <Column field="aunthenticationType" header="Authentication Type" sortable={true} filter={true} />
                                    <Column field="sourceType" header="Source" sortable={true} filter={true} />
                                    <Column field="connectionStatus" header="Connection Status" sortable={true} filter={true} />
                            <Column field="statusString" header="Status" sortable={true} filter={true} /> */}

                                </DataTable>
                            )}
                            {isShowActivate && (
                                <DataTable
                                    value={tableData}
                                    paginatorPosition="bottom"
                                    selectionMode="single"
                                    paginator={true}
                                    rows={10}
                                    header={header} ref={(el) => { setDatatable(el); }}
                                    responsive={true}
                                    editMode="row" onRowEditSave={onRowEditSave} onRowEditCancel={onRowEditCancel}
                                    emptyMessage="No Record Found"
                                >
                                    <Column body={dateTemplate} className="dtcolumnoverflow" field="meterSerialNumber" header="Serial Number" sortable={true} filter={true} />
                                    <Column field="meterIp" header="Host Name" sortable={true} filter={true} />
                                    <Column className="dtcolumnoverflow" field="imeiNumber" header="IMEI" sortable={true} filter={true} />
                                    <Column field="phaseString" header="Phase" sortable={true} filter={true} />
                                    <Column field="aunthenticationType" header="Authentication Type" sortable={true} filter={true} />
                                    <Column field="sourceType" header="Source" sortable={true} filter={true} />
                                    <Column field="connectionStatus" header="Connection Status" sortable={true} filter={true} />
                                    <Column field="statusString" header="Status" sortable={true} filter={true} editor={(props) => editorForRowEditing(props, 'statusString')} style={{ height: '3.5em' }} />
                                    <Column rowEditor={true} style={{ 'width': '70px', 'textAlign': 'center' }}></Column>

                                </DataTable>
                            )}
                        </div>
                    )}
                    <Dialog
                        header="Meter Details"
                        visible={isDialogState}
                        style={{ width: "50vw" }}
                        modal={true}
                        onHide={() => setDialogState(false)}
                    >
                        {isDialogState && (
                            <ScrollPanel style={{ width: '100%', height: '400px' }}>
                                <div className="card card-w-title">
                                    <div className="p-grid">
                                        <div className="p-col-12 p-md-2">
                                            <label htmlFor="meterSerialNumber">Meter Serial Number</label>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <InputText onChange={handleInputChange}
                                                id="meterSerialNumber"
                                                name="meterSerialNumber"
                                                dsiabled
                                                value={dialogData.meterSerialNumber}
                                            />
                                        </div>
                                        <div className="p-col-12 p-md-2">
                                            <label htmlFor="manufactureName">Manufacture Name</label>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <InputText onChange={handleInputChange}
                                                id="manufactureName"
                                                name="manufactureName"
                                                dsiabled
                                                value={dialogData.manufactureName}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-grid">
                                        <div className="p-col-12 p-md-2">
                                            <label htmlFor="meterIp">Host Name</label>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <InputText onChange={handleInputChange}
                                                id="meterIp"
                                                name="meterIp"
                                                dsiabled
                                                value={dialogData.meterIp}
                                            />
                                        </div>
                                        <div className="p-col-12 p-md-2">
                                            <label htmlFor="meterPort">Port</label>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <InputText onChange={handleInputChange}
                                                id="meterPort"
                                                name="meterPort"
                                                dsiabled
                                                value={dialogData.meterPort}
                                            />
                                        </div>

                                    </div>

                                    <div className="card card-w-title">
                                        <h1>Meter Consumer</h1>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="consumerId">Consumer Number</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                {isReadOnly && <InputText onChange={handleInputChange}
                                                    id="cNumber"
                                                    name="cNumber"
                                                    readOnly={isReadOnly}
                                                    value={meterData.cNumber}
                                                />}
                                                {!isReadOnly && <Dropdown id="consumerId" name="cNumber"
                                                    key="consumerId"
                                                    options={consumerDropDownList}
                                                    value={meterData.cNumber} required onChange={handleInputChange}>
                                                </Dropdown>
                                                }
                                                {isSubmit && (meterData.cNumber === null || meterData.cNumber === "") && (requiredMessage("cNumber"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="consumerName">Consumer Name</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="consumerName"
                                                    name="consumerName"
                                                    readOnly
                                                    value={meterData.consumerName}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="cEmailId">Consumer Email</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="cEmailId"
                                                    name="cEmailId"
                                                    readOnly
                                                    value={meterData.cEmailId}
                                                />
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="cPhoneNumber">Mobile Number</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="cPhoneNumber"
                                                    name="cPhoneNumber"
                                                    readOnly
                                                    value={meterData.cPhoneNumber}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="cAddress">Consumer Address</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="cAddress"
                                                    name="cAddress"
                                                    readOnly
                                                    value={meterData.cAddress}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-w-title">
                                        <h1>Meter Location / Address</h1>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="transformer">Transformer</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="transformer"
                                                    name="transformer"
                                                    readOnly
                                                    value={meterData.transformer}
                                                />
                                                {isSubmit && (meterData.transformer === null || meterData.transformer === "") && (requiredMessage("transformer"))}

                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="feeder">Feeder</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="feeder"
                                                    name="feeder"
                                                    readOnly
                                                    value={meterData.feeder}
                                                />
                                                {isSubmit && (meterData.feeder === null || meterData.feeder === "") && (requiredMessage("feeder"))}
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="subStation">Sub Station</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="subStation"
                                                    name="subStation"
                                                    readOnly
                                                    value={meterData.subStation}
                                                />
                                                {isSubmit && (meterData.subStation === null || meterData.subStation === "") && (requiredMessage("subStation"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="zone">Zone</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="zone"
                                                    name="zone"
                                                    readOnly
                                                    value={meterData.zone}
                                                />
                                                {isSubmit && (meterData.zone === null || meterData.zone === "") && (requiredMessage("zone"))}
                                            </div>
                                        </div>

                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="region">Region</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="region"
                                                    name="region"
                                                    readOnly
                                                    value={meterData.region}
                                                />
                                                {isSubmit && (meterData.region === null || meterData.region === "") && (requiredMessage("region"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="district">District</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="district"
                                                    name="district"
                                                    readOnly
                                                    value={meterData.district}
                                                />
                                                {isSubmit && (meterData.district === null || meterData.district === "") && (requiredMessage("district"))}
                                            </div>
                                        </div>

                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="city">City</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="city"
                                                    name="city"
                                                    readOnly
                                                    value={meterData.city}
                                                />
                                                {isSubmit && (meterData.district === null || meterData.district === "") && (requiredMessage("city"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="state">State</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="state"
                                                    name="state"
                                                    readOnly
                                                    value={meterData.state}
                                                />
                                                {isSubmit && (meterData.state === null || meterData.state === "") && (requiredMessage("state"))}
                                            </div>
                                        </div>

                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="country">County</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="country"
                                                    name="country"
                                                    readOnly
                                                    value={meterData.country}
                                                />
                                                {isSubmit && (meterData.country === null || meterData.country === "") && (requiredMessage("country"))}
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="pincode">Pin Code</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="pincode"
                                                    name="pincode"
                                                    readOnly
                                                    value={meterData.pincode}
                                                />
                                                {isSubmit && (meterData.pincode === null || meterData.pincode === "") && (requiredMessage("pincode"))}
                                            </div>
                                        </div>
                                        <div className="p-grid">
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="mLatId">Latitude</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange}
                                                    id="latitude"
                                                    name="latitude"
                                                    readOnly
                                                    value={meterData.latitude}
                                                />
                                            </div>
                                            <div className="p-col-12 p-md-2">
                                                <label htmlFor="longitude">Longitude</label>
                                            </div>
                                            <div className="p-col-12 p-md-4">
                                                <InputText onChange={handleInputChange} name="longitude"
                                                    id="longitude"
                                                    readOnly
                                                    value={meterData.longitude}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    {isEditPage && <Button type="button" style={{ width: 100 }} iconPos="left" label="Save" onClick={handleSubmit}></Button>}
                                </div>
                            </ScrollPanel>
                        )}
                    </Dialog>

                </div>
            </div>
        </div>


    );
};

const mapStateToProps = (state: any) => {
    const { deviceFormData, consumerData } = state;
    return {
        deviceFormData, consumerData
    };
};


export default connect(mapStateToProps)(AssignMeter); 