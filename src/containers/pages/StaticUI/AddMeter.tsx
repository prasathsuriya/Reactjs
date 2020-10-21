import React, { Dispatch, useState } from "react";
import './Components/Addmeter/App.css'
import Input from './Components/Addmeter/Input/Input'
import { connect } from "react-redux";
import FormComponent from './FormCont'
import axios from 'axios'
  
interface IAddMeter {}
interface IAddMeter {
    dropdownIptype: null
}
const  AddMeter: React.FC<IAddMeter> = ({
//  dispatch,deviceFormData
dropdownIptype
}) => {
  
   function handlePageChange() {
    window.location.href = "/staticui/viewmeter/all";
      }
    const  iptypes= [
        {label: 'Select IP Type', value: null},
        {label: 'Static', value: 'Static'},
        {label: 'Dynamic', value: 'Dynamic'} 
    ]
  const [state, setState] = React.useState({
    MeterList: '',
    MeterSerial: '',
    DeviceID: '',
    MeterCategory: '',
    ManfactureName:'',
    CurrentRating: '',
    Firmareversion: '',
    yearofMaf: '',
    IPadress: '',
    Metersimno: '',
    Installtype: '',
    Installsubtype: '',
    connectionstatus: '',
    voltagemult: '',
    energymultipler: '',
    Currentmulti: '',
    Circlename: '',
    circlenameArray: [],
    divisionname: '',
    subDivisionname: '',
    Sectionname: '',
    SSname: '',
    Townname: '',
    Feedername: '',
    DTname: '',
    Lstitude: '',
    Longtitude: '',
    Metertype: '',
    MeterIP: '',
    MeterPort: '',
    Authtype: '',
    meterpass: '',
    systemtitle: '',
    blockCliperkey: '',
    authkey: '',
    refreshkey: '',
    IsWrapper: '',
    IEC: '',
    SerialPort: '',
    Connection2status: '',
     Division:[],
      Subdiv:[] ,
      Sec:[],
      Town:[],
      ss:[],
      Feeder:[],
      DT:[],
      MF:[],
      CM:[],
    search: [],
    IT: [],
    IST: [],
    CS:[]
  })

  const [fullerror, SetFullError] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(true);
   const [errors, SetErrors] = React.useState({});
  const [datas, setdatas] = React.useState({});
  const [toogle, setToggle] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(fullerror).length === 0;
      if (noError) {
        console.log("Submitted Successfully");
      }
      else {
        alert("Fillup the Following Details");
        console.log(fullerror);
        setSubmitting(false);
      }
    }
    else {
      setSubmitting(false);
    }
  },[fullerror])

  React.useEffect(() => {
    axios.get(`/getAllCircleName`).then((res) => {
      setState({ ...state, circlenameArray: res.data });
      console.log(res.data);
    })
    axios.get(`/getAllDivisionName`)
    .then(x => {
      console.log(x.data);
      setState({...state,Division: x.data});
    });
    axios.get(`/getAllSubDivisionName`)
    .then(x => {
      console.log(x.data);
      setState({...state,Subdiv: x.data});
    });
    axios.get(`/getAllSectionName`)
    .then(x => {
      console.log(x.data);
      setState({...state,Sec: x.data});
    });
    axios.get(`/getTownDetails`)
    .then(x => {
      console.log(x.data);
      setState({...state,Town: x.data});
    });
      axios.get(`/getSubStationdetails`)
    .then(x => {
      console.log(x.data);
      setState({...state,ss: x.data});
    });
    axios.get(`/getFeederdetails`)
    .then(x => {
      console.log(x.data);
      setState({...state,Feeder: x.data});
    });
     axios.get(`/getTransformerdetails`)
    .then(x => {
      console.log(x);
      setState({ ...state,DT: x.data});
    });
    axios.get(`/getManufactureDetails`)
    .then(x => {
      console.log(x);
      setState({...state,MF: x.data});
    });
    axios.get(`/getCommonNameByMeterType?commonName=meter_type`)
    .then(x => {
      console.log(x);
      setState({...state,CM: x.data,CS:x.data,IT:x.data,IST:x.data});
    });
    
  }, [])
    

  function handleCM(event: any) {
    console.log(event.target.value);
    setState({...state,Connection2status:((event.target as any).value)})
  }
  function handleInstall(event: any) {
    localStorage.clear();
    console.log(event.target.value);
    setState({...state,Installtype:((event.target as any).value)})
  }
  function handleInstallsubtype(event: any) {
    console.log(event.target.value);
    setState({...state,Installsubtype:((event.target as any).value)})
  }
  function handleConnection(event: any) {
    console.log(event.target.value);
    setState({ ...state, connectionstatus: ((event.target as any).value) })
    
    
  }
  
  function handleAuthentication(event: any) {
    console.log(event.target.value);
     setState({...state,Authtype:((event.target as any).value)})
  }
  function handleRefreshing(event: any) {
    console.log(event.target.value);
     setState({...state,refreshkey:((event.target as any).value)})
  }
  function handleIsWrapper(event: any) {
    console.log(event.target.value);
    setState({ ...state, IsWrapper: ((event.target as any).value) });
  }
  

  
 
  function Submit()  {
    console.log(datas);  
    const Circle = localStorage.getItem("Circle Name");
    const Division = localStorage.getItem("Division Name");
    const TownName = localStorage.getItem("Town Name")
    const SSName = localStorage.getItem("SS Name");
    const SectionName = localStorage.getItem("Section Name");
    const SubDivisionName = localStorage.getItem("SubDivision Name");
    const FeederName = localStorage.getItem("Feeder Name");
    const DTname = localStorage.getItem("DT Name");
    const data = {
      meterSerialNumber: state.MeterList,
      deviceId: state.DeviceID,
      manufactureName: state.ManfactureName,
      vmMeterManufactureAutoId: "2",
      fwVersion: state.Firmareversion,
      ipAddress: state.IPadress,
      connectionStatus: state.connectionstatus,
      energyMultipiler: state.energymultipler,
      meterType: state.Metertype,
      meterCategory: state.MeterCategory,
      currentRating: state.CurrentRating,
      mfyear: state.yearofMaf,
      simNumber: state.Metersimno,
      voltageMultipiler: state.voltagemult,
      currentMultipiler: state.Currentmulti,
      latitude: state.Lstitude,
      longitude: state.Longtitude,
      meterIp: state.MeterIP,
      meterPort: state.MeterPort,
      aunthenticationType: state.Authtype,
      connectionStatusConnInfo: state.Connection2status,
      meterPassword: state.meterpass,
      meterName: state.Metertype,
      systemTitle: state.systemtitle,
      blockCipherKey: state.blockCliperkey,
      authenticationKey: state.authkey,
      referencingName: state.refreshkey,
      isWrapper: state.IsWrapper,
      iec : state.IEC,
      serialPort: state.SerialPort,
      circleId: Circle,
      divisionId: Division,
      subDivisionId: SubDivisionName,
      sectionId: SectionName,
      townId: TownName,
      subStationId: SSName,
      feederId: FeederName,
      transformerId: DTname,
    }
    localStorage.setItem("Datas", JSON.stringify(data));
    const err = validate(data);
    if (err) {
      axios.post('/saveMeterDetails', data).then((res) => alert(res.data.message));
      
    }
    
    else {
      setToggle(false);
      alert("Fill the Remaining Fields");
      setToggle(true);
    }
  
  }

  function validate(data) {
    let method = true;    
    if (!data.meterSerialNumber) {
      setToggle(false);
      alert(toogle);
      method = false;
      alert("Fill the serialNumber");
    }
    if (!data.deviceId) {
      SetErrors({ ...errors, deviceId: "Fill the table" });
       alert("Fill the DeviceID");
      method = false;
    }
    if (!data.manufactureName) {
      SetErrors({ ...errors, ManfactureName: "Fill the table" });
      method = false;
       alert("Fill the MafacturerNAme");
    }
    if (!data.vmMeterManufactureAutoId) {
      SetErrors({ ...errors, vmMeterManufactureAutoId: "Fill the table" });
      method = false;
          alert("Fill the VmMeterManfactureAutoId");
    }
    if (!data.fwVersion) {
      SetErrors({ ...errors, fwVersion: "Fill the table" });
      method = false;
          alert("Fill the FirmWare Version");

    }
    if (!data.ipAddress) {
      SetErrors({ ...errors, ipAddress: "Fill the table" });
      method = false;
      alert("Fill the IpAddress");
    }
    if (!data.connectionStatus) {
      SetErrors({ ...errors, connectionStatus: "Fill the table" });
      method = false;
      alert("Fill the ConnectionStatus");
    }
    if (!data.energyMultipiler) {
      SetErrors({ ...errors, energymultipler: "Fill the table" });
      method = false;
       alert("Fill the EnergyMMultipler");
    }
    if (!data.meterType) {
      SetErrors({ ...errors, meterType: "Fill the table" });
      method = false;
      alert("Fill the meterType");
    }
    if (!data.meterCategory) {
      SetErrors({ ...errors, meterCategory: "Fill the table" });
      method = false;
       alert("Fill the meterCategory");
    }
    if (!data.currentRating) {
      SetErrors({ ...errors, meterCategory: "Fill the table" });
      method = false;
       alert("Fill the CurrentRating");
    }
    if (!data.mfyear) {
      SetErrors({ ...errors, mfyear: "Fill the table" });
      method = false;
    }
    if (!data.simNumber) {
      SetErrors({ ...errors, simNumber: "Fill the table" });
      method = false;
          alert("Fill the SimNumber");
    }
    if (!data.voltageMultipiler) {
      SetErrors({ ...errors, voltageMultipiler: "Fill the table" });
      method = false;
           alert("Fill the VoltageMultipler");
    }
    if (!data.currentMultipiler) {
      SetErrors({ ...errors, currentMultipiler: "Fill the table" });
      method = false;
      alert("Fill the CurrentMultipler");
    }
    if (!data.latitude) {
      SetErrors({ ...errors, latitude: "Fill the table" });
      method = false;
        alert("Fill the Latitude");
    }
    if (!data.longitude) {
      SetErrors({ ...errors, longitude: "Fill the table" });
      method = false;
        alert("Fill the Longtitude");
    }
    if (!data.meterIp) {
      SetErrors({ ...errors, meterIp: "Fill the table" });
      method = false;
      alert("Fill the meterIp");
    }
    if (!data.meterPort) {
      SetErrors({ ...errors, meterIp: "Fill the table" });
      method = false;
       alert("Fill the meterPort");
    }
    if (!data.aunthenticationType) {
      SetErrors({ ...errors, aunthenticationType: "Fill the table" });
      method = false;
       alert("Fill the AuthType");
    }
    if (!data.connectionStatus) {
      SetErrors({ ...errors, connectionStatus: "Fill the table" });
      method = false;
        alert("Fill the ConnectionStatus2");
    }
    if (!data.meterPassword) {
      SetErrors({ ...errors, connectionStatus: "Fill the table" });
      method = false;
       alert("Fill the MeterPassword");
    }
    if (!data.systemTitle) {
      SetErrors({ ...errors, systemTitle: "Fill the table" });
      method = false;
       alert("SystemTitle");
    }
    if (!data.blockCipherKey) {
      SetErrors({ ...errors, blockCliperkey: "Fill the table" });
      method = false;
        alert("BlockCliperKey");
    }
    if (!data.authenticationKey) {
      SetErrors({ ...errors, authenticationKey: "Fill the table" });
      method = false;
      alert("AuthKey");
    }
    if (!data.referencingName) {
      SetErrors({ ...errors, referencingName: "Fill the table" });
      method = false;
      alert("RefreshingName");
    }
    if (!data.isWrapper) {
      SetErrors({ ...errors, isWrapper: "Fill the table" });
      method = false;
           alert("IsWrapper");
    }
    
    if (!data.serialPort) {
      SetErrors({ ...errors, serialPort: "Fill the table" });
      method = false;
           alert("SerialPort");
    }
    if (!data.circleId) {
      SetErrors({ ...errors, circleId: "Fill the table" });
      method = false;
           alert("CircleID");
    }
    if (!data.divisionId) {
      SetErrors({ ...errors, divisionId: "Fill the table" });
      method = false;
           alert("DivisionId");
    }
    if (!data.sectionId) {
      SetErrors({ ...errors, subDivisionId: "Fill the table" });
      method = false;
           alert("SectionId");
    }
    if (!data.townId) {
      SetErrors({ ...errors, townId: "Fill the table" });
      method = false;
      alert("TownId");
    }
    if (!data.subStationId) {
      SetErrors({ ...errors, subStationId: "Fill the table" });
      method = false;
      alert("SubStationId");
    }
    if (!data.feederId) {
      SetErrors({ ...errors, feederId: "Fill the table" });
      method = false;
      alert("FeederId");
    }
    if (!data.transformerId) {
      SetErrors({ ...errors, transformerId: "Fill the table" });
      method = false;
      alert("TransformerId");
    }
   
    return method;
    
  }

  function handleChange(value) {
    setState({ ...state, MeterList: value });
    console.log(value);
  }

  return (
    <div className="p-grid p-fluid">
       <div className="p-col-12">
            <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
              
            </div>

            <div className="card1 card-w-title">
                
                <div className="p-grid">

                 
                  <div className="AddMeter">
                <h3 className="title">Meter Info</h3>
                <div className="name">
                  
                   <div className="inputs">
                  <b>Meter Details  </b>
                  
                  <Input value={state.MeterList} type="number" onChange={(value) => handleChange(value)} label="Meter Serial Number" /> 
                  
                    <Input value={state.MeterSerial} type="number" onChange={(value)=>setState({...state,MeterSerial:value})} label="Meter Type"/>
                    <Input value={state.DeviceID} type="text" onChange={(value)=>setState({...state,DeviceID:value})} label="Device ID"/>
                    <Input value={state.MeterCategory} type="text" onChange={(value)=>setState({...state,MeterCategory:value})} label="Meter Category"/>
                    <Input value={state.ManfactureName} type="text" onChange={(value)=>setState({...state,ManfactureName:value})} label="Manfacturer Name"/>
                    <Input value={state.CurrentRating} type="number" onChange={(value)=>setState({...state,CurrentRating:value})} label="Current Rating "/>
                    <Input value={state.Firmareversion} type="number" onChange={(value)=>setState({...state,Firmareversion:value})} label="Firmware Version"/>
                    <Input value={state.yearofMaf} type="number" onChange={(value)=>setState({...state,yearofMaf:value})} label="Year of Manfacturer"/>
                    <Input value={state.IPadress} type="text" onChange={(value)=>setState({...state,IPadress:value})} label="IP Address"/>
                    <Input value={state.Metersimno} type="number" onChange={(value)=>setState({...state,Metersimno:value})} label="Meter Sim No"/>
                <div className="ref"> <label>Installation Type</label>
                     <select onChange={handleInstall}>
                       
                     

                      <option>Not Communicating</option>
                      <option>Communicating</option>
                      </select></div>
                <div className="ref">  <label>InstallationSubtype</label>
                     <select onChange={handleInstallsubtype} > <option>Not Communicating</option>
                      <option>Communicating</option></select></div>
                   <div className="ref"> <label>Connection Status</label>
                     <select onChange={handleConnection}> <option>Not Communicating</option>
                      <option>Communicating</option></select></div>
                    <Input value={state.voltagemult} type="number" onChange={(value)=>setState({...state,voltagemult:value})} label="Voltage Multiplier"/>
                    <Input value={state.energymultipler} type="number" onChange={(value)=>setState({...state,energymultipler:value})} label="Energy Multipler"/>
                    <Input value={state.Currentmulti} type="number" onChange={(value)=>setState({...state,Currentmulti:value})} label="Current Multipler"/>
                  
                 
                    
                    </div>
         <div className="inputs2">
                    <b>Organisation Structure</b>
                     <FormComponent/>
                    <Input value={state.Lstitude} type="number" onChange={(value)=>setState({...state,Lstitude:value})} label="Latitude"/>
                    <Input value={state.Longtitude} type="number" onChange={(value)=>setState({...state,Longtitude:value})} label="Longitude"/>
                    <Input value={state.Metertype} type="text" onChange={(value)=>setState({...state,Metertype:value})} label=" Meter Type"/>
                   
                    
                    </div>                          </div>
                  <div className="inputs3">
                    <b>Meter Connection Info</b>
                    <Input value={state.MeterIP} type="number" onChange={(value)=>setState({...state,MeterIP:value})} label="Meter IP"/>
                <Input value={state.MeterPort} type="number" onChange={(value) => setState({ ...state, MeterPort: value })} label="Meter Port" />
                <div className="ref">
                   <label>Authentication Type</label>
                <select onChange={handleAuthentication}>
                  <option selected>Please select anyone</option>
                  <option>Low</option>
                    <option>High</option>
                    
                  </select>
                  </div>
                    <Input value={state.meterpass} type="password" onChange={(value)=>setState({...state,meterpass:value})} label="Meter Password"/>
                    <Input value={state.systemtitle} type="text" onChange={(value)=>setState({...state,systemtitle:value})} label="System Title"/>
                    <Input value={state.blockCliperkey} type="number" onChange={(value)=>setState({...state,blockCliperkey:value})} label="Block Cipher Key"/>
                <Input value={state.authkey} onChange={(value) => setState({ ...state, authkey: value })} label="Authentication Key" />
                <div className="ref">
                 <label>Referencing Name</label>
                <select onChange={handleRefreshing}>
                  <option selected>Please select anyone</option>
                  <option>IN</option>
                    <option>SN</option>
                    </select>
                    </div>

                <div className="ref">
                <label>Is Wrapper</label>
                <select onChange={handleIsWrapper}>
                  <option selected>Please select anyone</option>
                  <option>Yes</option>
                  <option>No</option>
                  </select> 
                </div>  
                  
                    <Input value={state.IEC} type="number" onChange={(value) => setState({ ...state, IEC: value })} label="IEC" />
                <Input value={state.SerialPort} type="number" onChange={(value) => setState({ ...state, SerialPort: value })} label="Serial Port" />
                <div className="ref">
                <label>Connection Status</label>
                    <select onChange={handleCM}> <option>Not Communicating</option>
                      <option>Communicating</option></select>
                 </div>
                    
                </div>  
                          <div className="buttons">
  
                    <button onClick={Submit}  className="button1">Save</button>
                    <button className="button1">Cancel</button>
                    </div>
                
            </div>
             
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
export default connect(mapStateToProps)(AddMeter);
 