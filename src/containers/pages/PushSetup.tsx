import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import moment from "moment";
import { Dialog } from "primereact/dialog";
import { ScrollPanel } from "primereact/scrollpanel";
import { Message } from "primereact/message";
import { Column } from "primereact/column";
import { Growl } from "primereact/growl";
import { DataTable } from "primereact/datatable";
import { ProgressSpinner } from "primereact/progressspinner";
import { getPushSetupList,savePushSetup } from "../../store/actions/PushSetup";
import { getCurrentUser } from "../../store/selectors/Accounts";
import { getDeviceList } from "../../store/actions/NewDevice";

interface ISimulation {
    dispatch: Dispatch<any>;
    pushSetupData:any;
    deviceFormData:any;
}

const PushSetup: React.FC<ISimulation> = ({
    dispatch,pushSetupData,deviceFormData
}) => {
    const pushsetupdatainit = {
        id:0,
        processName:"",
        pushSetup:"",
        meterSerialNumber:"",
        clock: 0,
        serverip:"",
        port:""
    }
    const [userData, setUserData] = useState();
    useEffect(() => {
        dispatch(getDeviceList(null));
        var curentUser=getCurrentUser();
            if(curentUser!=null){
              setUserData(curentUser);   
              dispatch(getPushSetupList(curentUser.userProfile.userFkId.roleFkId.tenantFkId.id));          
            }
      }, []);
    const [pushSetupInput, setPushSetupInput] = useState(pushsetupdatainit);
    const [isShowClock, setShowClock] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [isShowCount, setShowCount] = useState(false);
    const [isIpValid, setisIpValid] = useState(true);
    const [isValidPort, setIsValidPort] = useState(true);
    
    const  list2 = [
        { label: "Clock", value: "Clock" },
        { label: "Push Setup", value: "Push Setup" }
    ]
    const handleObjectchange = (event: any) => {
        setShowClock(event.value);
    };
    function ChangeInput(id: any) {
        if (id==="Clock") {
            setShowClock(false);
            setShowCount(true);
        }
        else if (id === "Push Setup") {
            setShowClock(true);
            setShowCount(false);
        }
        else {
            setShowClock(false);
            setShowCount(false);
        }
    }
    const handleDatechange=(event: any)=>{
        setStartDate(event.value);
      };
    const handleProfileChange = (event: any) => {
        if (event.target.id === "meterSerialNumber") {
            pushSetupInput.meterSerialNumber = event.target.value;
           
        }else if (event.target.id === "processName") {
            pushSetupInput.processName = event.target.value; 
            ChangeInput(pushSetupInput.processName);   
          }    
          else if (event.target.id === "dtStart") {
            pushSetupInput.clock = event.target.value;
          } 
          else if (event.target.id === "serverip") {
            pushSetupInput.serverip = event.target.value;
            if (!event.target.value.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")) {
                setisIpValid(false);
            }
            else {
                setisIpValid(true);
            }
          }
          else if (event.target.id === "port") {
            pushSetupInput.port = event.target.value;
            if(event.target.value>65535){
                setIsValidPort(false)
            }else{
                setIsValidPort(true)
            }
          }
          setPushSetupInput({ ...pushSetupInput });
        }        
        const [msgSeverity, setSeverity]=useState("success");    
          const [msgDescription, setDescriptiony]=useState("saved successfully");    
          
          function successMessage( key:string){     
              return <Message severity={msgSeverity} key={key} text={msgDescription} />
            }
        const intialforstate = {
        displayDialog: false
        };
        const [state, setState] = useState(intialforstate);  
        const [isPageLoaded, setPageLoaded] = useState(false);
        const [isFormValid, setFormInvalid] = useState(true);
        const [tableData, setTableData] = useState([]);
        const [isMeterLoaded, setMeterLoaded] = useState(false);
        const [meterList, setMeterList] = useState(new Array<any>());
        if (!isMeterLoaded && !deviceFormData.isLoading) {
            var meters=new Array<any>();
            if(deviceFormData.items.length>0){      
              for(var i=0;i<deviceFormData.items.length;i++){
                var element=deviceFormData.items[i];
                meters.push({ label: element, value: element });
              }      
              setMeterLoaded(true);
              setMeterList(meters);   
            }     
          }
        if (
          !isPageLoaded &&
          !pushSetupData.isListLoading 
        ) {
          var table = pushSetupData.items;
          console.log(table);    
          if (table.length > 0) {            
            for (var i = 0; i < table.length; i++) {
              table[i]["statusValue"] =
                table[i].status === 1 ? "Active" : "InActive";
            }
          }
          setTableData(table);
          setPageLoaded(true);
        }
      
        const showPushSetupDialog = (items: any) => (e: any) => {
          reset();
          console.log(e.data);
          var dataAssign=e.data;       
          if(dataAssign!==null){   
            dataAssign.meterSerialNumber= dataAssign.meterProfileFkId.meterSerialNumber;
            ChangeInput(dataAssign.processName);
            if(dataAssign.processName===list2[0].value){
                if(dataAssign.pushSetup!==null){
                    dataAssign.clock=dataAssign.pushSetup;
                    setStartDate(new Date(dataAssign.pushSetup));
                }
            }
            else if(dataAssign.processName===list2[1].value){
                if(dataAssign.pushSetup!==null){
                    var values=dataAssign.pushSetup.split(":");
                    dataAssign.serverip=values[0];
                    dataAssign.port=values[1];
                }                
            }
            setPushSetupInput(dataAssign); 
          }
          setState(items);
          setState({ displayDialog: true });
          
        };

        function reset(){
          setFormInvalid(true);
          setPushSetupInput(pushsetupdatainit);
          setFormInvalid(true);
          setValid(true);
          setSumbmited(false);
          setShowMessage(false);    
          setShowClock(false);
          setShowCount(false);

        }
        
        const handleCreate = () => {
          reset();
          setState({ displayDialog: true });
        };
      
        const handleSubmit = (event) => {
          setSumbmited(true);
          var valid=checkValidation();
          if(valid){     

            if(pushSetupInput.processName===list2[0].value){
                pushSetupInput.pushSetup=moment(startDate).format("YYYY-MM-DDTHH:mm:ss");                
            }
            else if(pushSetupInput.processName===list2[1].value){
                pushSetupInput.pushSetup=pushSetupInput.serverip+":"+pushSetupInput.port;                               
            }
              dispatch(savePushSetup(pushSetupInput));      
          }
          else{
              setFormInvalid(false);
          }
        };              
      
        const checkValidation=()=>{      
            var valid=false;
          if((pushSetupInput.meterSerialNumber!==null && pushSetupInput.meterSerialNumber!=="")          
          &&(pushSetupInput.processName!==null && pushSetupInput.processName!=="")
          )
          {
            if (pushSetupInput.processName === "pushsetup") {
                if((pushSetupInput.serverip!==null && pushSetupInput.serverip!=="")
                && (pushSetupInput.port!==null && pushSetupInput.port!=="")
                ){
                    setValid(true);
                    valid=true;
                }
                else {
                    setValid(false);
                    valid=false;
                }       
            }
            else {
                setValid(true);
                valid=true;
            }                        
          }
          else
          {
            setValid(false); 
            valid=false;
          }   
          return valid;   
        }
      
        const [isValid, setValid] = useState(false);
        const [isSumbmit, setSumbmited] = useState(false);
        const [growl, setGrowl]=useState();
        const [showMessage, setShowMessage]=useState(false);
      
        if(!pushSetupData.isLoading && pushSetupData.isFormSubmit && isSumbmit){
          console.log(pushSetupData.status);
          if(pushSetupData.status && pushSetupData.status!==null){
            setDescriptiony(pushSetupData.status.displayMessage);
            if(pushSetupData.status.value ===true ){
              if(pushSetupData.status.code ===200){
                dispatch(getPushSetupList(userData.userProfile.userFkId.roleFkId.tenantFkId.id));
                setState({ displayDialog: false });
                setSumbmited(false);
                setShowMessage(true);    
                setPageLoaded(false);  
                growl.show({severity: 'success', summary: 'Success', detail: pushSetupData.status.displayMessage});
                setSeverity("success");
              }
              else if(pushSetupData.status.code ===300){
                growl.show({severity: 'warn', summary: 'Warn', detail: pushSetupData.status.displayMessage});
                setShowMessage(true);
                setSeverity("warn");
              }
            }
            else{
              growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});
              setShowMessage(false);
              setSeverity("error");
            }
          }
          
        }
        let statusTemplate = props => {
          return <span>{props === 1 ? "Active" : "Inactive"}</span>;
        };
        let header = (
          <div className="p-clearfix" style={{ width: "100%" }}>
            <Button
              style={{ float: "right", width: 100 }}
              label="Add"
              icon="pi pi-plus"
              onClick={handleCreate}
            />
          </div>
        );              
        function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}

    return ( 
    
    <div className="p-grid p-fluid">
      <div className="p-col-12 ">
        <div className="card card-w-title">
          <h1>Push Setup</h1>
          <br></br>
          <Growl ref={(el: any) => setGrowl(el)} />
         {showMessage && (successMessage("Success"))}    
          
          <div className="p-grid">
          {pushSetupData.isListLoading && <ProgressSpinner />}
                      {!pushSetupData.isListLoading &&(
            <DataTable
              value={tableData}
              paginatorPosition="bottom"
              selectionMode="single"
              paginator={true}
              rows={10}
              header={header}
              responsive={true}
              emptyMessage="No records found"
             // onRowClick={showPushSetupDialog(tableData)}
            >
              <Column
                field="meterProfileFkId.meterSerialNumber"
                header="Meter Serial Number"
                sortable={true}
                filter={true} filterMatchMode="contains"
              /> 
              <Column
                field="processName"
                header="Process "
                sortable={true}
                filter={true} filterMatchMode="contains"
              />
              <Column
                field="pushSetup"
                header="Push Setup"
                sortable={true}
                filter={true} filterMatchMode="contains"
              />                           
              <Column
                field="statusValue"
                style={{ width: 100 }}
                header="status"
                sortable={true}
              ></Column>
            </DataTable>
            )}
            <Dialog
              header="PushSetup Details"
              visible={state.displayDialog}
              style={{ width: "35vw" }}
              modal={true}
              onHide={() => setState({ displayDialog: false })}
            >
              <ScrollPanel style={{ width: '100%', height: '500px' }}>
              {state.displayDialog && (
                <div className="card card-w-title">
                  <Growl ref={(el: any) => setGrowl(el)} />                  
                <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <span className="title">Meter serial number</span>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <Dropdown
                            options={meterList}
                            value={pushSetupInput.meterSerialNumber}
                            autoWidth={false}
                            style={{ width: 250 }}
                            id="meterSerialNumber"
                            onChange={handleProfileChange}
                        />
                        { isSumbmit && pushSetupInput.meterSerialNumber==="" && (requiredMessage("meterSerialNumber"))}
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <span className="title">Object</span>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <Dropdown
                            options={list2}
                            value={pushSetupInput.processName}
                            autoWidth={false}
                            id="processName"
                            style={{ width: 250 }}
                            onChange={handleProfileChange}
                            disabled={pushSetupInput.id!==0}
                        />
                        { isSumbmit && pushSetupInput.processName==="" && (requiredMessage("processName"))}
                    </div>
                </div>
                {isShowCount &&(                    
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                        <label className="labelfont">Clock</label>
                        </div>
                        <div className="p-col-12 p-md-6">
                        <Calendar placeholder="DateTime" showTime={true} id="dtStart" value={startDate} viewDate={startDate} dateFormat="mm/dd/yy" onSelect={handleDatechange} />
                        </div>
                    </div>                   
                )}
            {isShowClock && (
            <div>
            <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <label htmlFor="serverip">Server IP</label>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <InputText id="serverip" value={pushSetupInput.serverip} required  onChange={handleProfileChange}/>
                        {isSumbmit && pushSetupInput.serverip === "" && (requiredMessage("authType"))}
                        {isSumbmit && !isIpValid && (<Message severity="error" key="emailvalid" text="Host Name not valid" />)}
                    </div>
                </div> 
                        
                <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <label htmlFor="port">Port</label>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <InputText id="port" required value={pushSetupInput.port} onChange={handleProfileChange}/>
                        {isSumbmit && pushSetupInput.port === "" && (requiredMessage("authTypeportva"))}
                        {isSumbmit && (!isValidPort )&& (<Message severity="error" key="portva" text="port not valid" />)}
                    </div>
                </div>
            </div>
        )}                      
                 
                </div>
                
              )}
              <div className="p-dialog-footer">
                    {!isFormValid && (<Message severity="error" key={"error"} text="Form is invalid" />)}
                    <div className="ui-dialog-buttonpane p-clearfix">
                    <button onClick={handleSubmit} className="p-button p-component p-button-text-icon-left">
                        <span className="pi pi-check p-c p-button-icon-left"></span>
                        <span className="p-button-text p-c">Save</span>
                      </button>
                    </div>
                </div>                  
              </ScrollPanel>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  
    );

};

const mapStateToProps = (state: any) => {
    const { pushSetupData,deviceFormData } = state;
    return {
        pushSetupData,deviceFormData
    };
  };
  
  export default connect(mapStateToProps)(PushSetup);