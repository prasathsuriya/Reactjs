import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Spinner } from 'primereact/spinner';
import { Button } from "primereact/button";
import { Message } from 'primereact/message';
import { Growl } from "primereact/growl";
import { ProgressSpinner } from 'primereact/progressspinner';
import {
    getRunningSimulatorCount,
    startSimulation,
    stopSimulation
} from "../../../store/actions/Simulator";

interface ISimulation {
    dispatch: Dispatch<any>;
    simulatorData: any;
}

const Simulator: React.FC<ISimulation> = ({
    dispatch, simulatorData
}) => {
    const initialInput = {
        tenantId: 0,
        noOfServers: 0
    }
    const loggedInString = localStorage.getItem("AUTHDATA");
    if (loggedInString) {
        const loggedInData = JSON.parse(loggedInString);
        if (loggedInData) {
            initialInput.tenantId = loggedInData.userProfile.userFkId.roleFkId.tenantFkId.id;
        }
    }
    const [formInput, setInput] = useState(initialInput);
    useEffect(() => {
        dispatch(getRunningSimulatorCount(formInput));
        setInstanceCount(0);
    }, []);

    const [isSumbmit, setSumbmited] = useState(false);
    const [instanceCount,setInstanceCount] = useState(0);
    const [growl, setGrowl] = useState();
    const [growlStatus, setGrowlStatus] = useState(false);
    const [isValidNoOfServer, setIsValidNoOfServer] = useState(true); 
    if (simulatorData && !simulatorData.isLoading && !simulatorData.isUseEffectLoading) {
        if (instanceCount == 0 && simulatorData.simulatorCount > 0) {
            setInstanceCount(simulatorData.simulatorCount);
            
        }
    } 
    if(!growlStatus && simulatorData && !simulatorData.isLoading 
        && !simulatorData.isUseEffectLoading && isValidNoOfServer){
                setGrowlStatus(true);
                growl.show({ severity: 'success', summary: 'info', detail: simulatorData.simulatorCount+" Simulator instance is running" });
    }
    const handleInputChange = (event: any) => {
        if (event.target.id === "spinnerId") {
            formInput.noOfServers = event.target.value;
        }
        setInput({ ...formInput });
    }
       
    const handleStart = (event: any) => {
        setSumbmited(true);
        setIsValidNoOfServer(true);
        if (formInput.noOfServers <= 0) {
            setIsValidNoOfServer(false);
        }

        dispatch(startSimulation(formInput));
        dispatch(getRunningSimulatorCount(formInput));
        setGrowlStatus(false);
    }
    const handleStop = (event: any) => {
        dispatch(stopSimulation());
        dispatch(getRunningSimulatorCount(formInput));
        setInstanceCount(0);
        formInput.noOfServers = 0;
        setInput(formInput);
        setGrowlStatus(false);
    }

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card card-w-title">
                    <h1>Simulation</h1>
                    <Growl ref={(el) => setGrowl(el)} />
                    <div className="p-grid">
                        <div className="p-col-12 p-md-5">
                            <label htmlFor="meterNameId">{instanceCount} Simulator instance is running</label>
                        </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                            <label htmlFor="meterNameId">No Of Servers</label>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Spinner min={1} max={10000} id="spinnerId" value={formInput.noOfServers} onChange={handleInputChange} />
                            {!isValidNoOfServer && isSumbmit && (<Message severity="error" key={"error"} text="No Of Server cannot be zero" />)}
                        </div>
                    </div>


                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                            <Button
                                label="Start Server"
                                onClick={handleStart}
                                type="button"
                                disabled={instanceCount > 0 ? true : false}
                                className="p-button-raised"
                                style={{ marginBottom: '10px' }}
                            />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button
                                label="Stop Server"
                                onClick={handleStop}
                                disabled={instanceCount > 0 ? false : true}
                                type="button"
                                className="p-button-raised"
                                style={{ marginBottom: '10px' }}
                            />
                        </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-2">
                        {simulatorData.isLoading && <ProgressSpinner />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    const { simulatorData } = state;
    return {
        simulatorData
    };
};

export default connect(mapStateToProps)(Simulator);