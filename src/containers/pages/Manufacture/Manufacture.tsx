import React, { Dispatch, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Messages } from "primereact/messages";
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getManufacture, saveManufacture, updateManufactureStatus } from '../../../store/actions/Manufacture';
import { ProgressSpinner } from 'primereact/progressspinner';
import FileSaver from 'file-saver';
import { Message } from 'primereact/message';
import { Growl } from 'primereact/growl';
interface IManufacture {
    dispatch: Dispatch<any>;
    manufactureData: any;
    props: RouteComponentProps;
}
const Manufacture: React.FC<IManufacture> = ({
    dispatch, manufactureData
}) => {
    const initialFormState = {
        Id: 0,
        manufactureId: "",
        manufactureName: "",
        description: "",
        status: ""
    }
    const intialDialogstate = {
        displayDialogue: false
    }
    const [isShowActive, setShowActive] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(false);
    const [isAddPage, setIsAddPage] = useState(false);
    const [isSumbmit, setSumbmited] = useState(false);
    const [isPageLoaded, setPageLoaded] = useState(false);
    const [messages, setMessages] = useState();
    const [manufacturesData, setmanufacturesData] = useState([]);
    const [manufacturer, setManufacturer] = useState(initialFormState);
    const [dialogstate, setdialogState] = useState(intialDialogstate);
    let [manufactureDetails, setManufactureDetails] = useState();
    const [isFormInvalid, setFormInvalid] = useState(true);
    const [isValid, setValid] = useState(false);
    const [growl, setGrowl]=useState();
    const [showMessage, setShowMessage]=useState(false);
    const [msgSeverity, setSeverity]=useState("success");    
    const [msgDescription, setDescriptiony]=useState("saved successfully");    
    function successMessage( key:string){     
        return <Message severity={msgSeverity} key={key} text={msgDescription} />
      }
    useEffect(() => {
        dispatch(getManufacture(initialFormState));
    }, []);

    if (
        !isPageLoaded &&
        !manufactureData.isLoading &&
        manufactureData.manufactureList.length > 0
    ) {
        var table = manufactureData.manufactureList;
        if (table.length > 0) {
            for (var i = 0; i < table.length; i++) {
                table[i]["status"] =
                    table[i].status === 1 ? "Active" : "InActive";
            }
        }
        setmanufacturesData(table);
        setPageLoaded(true);
    }
    const handleNewInputchange = (event: any) => {
        const { name, value } = event.target;
        setManufactureDetails({ ...manufactureDetails, [name]: value });
    }
    const checkValidation=()=>{
        if((manufacturer.manufactureId!==null && manufacturer.manufactureId!=="")
        &&(manufacturer.manufactureName!==null && manufacturer.manufactureName!=="")
        &&(manufacturer.description!==null && manufacturer.description!=="")
        )
        {
          setValid(true);
        }
        else
        {
          setValid(false); 
        }
      }
    const handleInputchange = (event: any) => {
        if (event.target.id === "manufactureIdid") {
            manufacturer.manufactureId = event.target.value;
        }
        else if (event.target.id === "manufacturenameid") {
            manufacturer.manufactureName = event.target.value;
        } else if (event.target.id === "descriptionid") {
            manufacturer.description = event.target.value;
        }
        setManufacturer({ ...manufacturer });
        checkValidation();
    }
    const showDialog = (items: any) => (e: any) => {
        console.log(e.data);
        setIsAddPage(false);
        var dataAssign=e.data;
        setManufactureDetails(dataAssign);
        setShowActive(true);
        if(e.data.status==1){      
          setIsReadOnly(false);
        }
        else{
          setIsReadOnly(true);
        }
        setdialogState(items);
        setdialogState({ displayDialogue: true }); 
      };
    const handleActiveSubmit = (event: any) => {
        var agree = window.confirm("Are you sure to update status?");
        if (agree) {
            setSumbmited(true);
            dispatch(updateManufactureStatus(manufactureDetails.manufactureInput));
        }
    }
    const handleSubmit = (event: any) => {
        setSumbmited(true);
        if (isAddPage){
            if (isValid) {
                dispatch(saveManufacture(manufacturer));
            }
            else {
                setFormInvalid(false);
            }
        }
        else {
            dispatch(saveManufacture(manufactureDetails));
        }
    }
    const openDialog = (e:any) => {
        setShowActive(true);
        setIsAddPage(true);
        setManufacturer(initialFormState);
        setdialogState({ displayDialogue: true });
    };
    let header = (
        <div className="p-clearfix" style={{ width: "100%" }}>
            <Button
                style={{ float: "right", width: 100 }}
                label="Add"
                icon="pi pi-plus"
                onClick={openDialog}
            />
        </div>
    );
    const handleDownloadFile = () => {
        let link = document.createElement('a');
        link.setAttribute('Csv', 'hidden');
        link.href = 'assets/download.xlsx';
        link.download = "/staticui/bulkuploadmeters";
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    if(!manufactureData.isLoading && manufactureData.isFormSubmit && isSumbmit){
        console.log(manufactureData.status);
        if(manufactureData.status && manufactureData.status!==null){
          setDescriptiony(manufactureData.status.displayMessage);
          if(manufactureData.status.value ===true ){
            if(manufactureData.status.code ===200){
            dispatch(getManufacture(initialFormState.manufactureId));
            setdialogState({ displayDialogue: false });
            setSumbmited(false);
            setShowMessage(true);    
            setPageLoaded(false);  
            growl.show({severity: 'success', summary: 'Success', detail: manufactureData.status.displayMessage});
            setSeverity("success");
            }
            else if(manufactureData.status.code ===300){
              growl.show({severity: 'warn', summary: 'Warn', detail: manufactureData.status.displayMessage});
              setShowMessage(false);
              setSeverity("warn");
            }
          }
          else{
            growl.show({severity: 'error', summary: 'Error', detail: manufactureData.status.displayMessage});
            setShowMessage(false);
            setSeverity("error");
          }
        }
      }
    return (
        <div>
            <div className="card">
            <Growl ref={(el) => setGrowl(el)} />
         {showMessage && (successMessage("Success"))}    
                <h1>Download Sample File<a href="/assets/download.xlsx" onClick={handleDownloadFile}>Download</a></h1>
            </div>
            <Panel header="Manufacturers Detail">
                {manufactureData.isLoading && <ProgressSpinner/>}
                {!manufactureData.isLoading && (
                    <DataTable
                        id="table"
                        value={manufacturesData}
                        paginatorPosition="bottom"
                        selectionMode="single"
                        header={header}
                        paginator={true}
                        rows={5}
                        responsive={true}
                        onRowClick={showDialog(manufacturesData)}
                        emptyMessage="No records found"
                    >
                        <Column field="manufactureId" header="Manufacturer ID" sortable={true} filter={true} />
                        <Column field="manufactureName" header="Manufacturer Name" sortable={true} filter={true} />
                        <Column field="description" header="Description" sortable={true} filter={true} />
                        <Column field="status" header="Status" sortable={true} filter={true} />
                    </DataTable>
                )}
            </Panel>
            <Dialog header="Manufacturer"
                visible={dialogstate.displayDialogue}
                modal={true} style={{ width: '30vw' }}
                onHide={() => setdialogState({ displayDialogue: false })}
            >
                <Messages ref={el => setMessages(el)} />
                {dialogstate.displayDialogue &&
                    <div>
                        {isAddPage && (
                            <div className="p-grid">
                                <div className="p-col-12 p-md-4">
                                    <label htmlFor="manufactureid">Manufacturer ID</label>
                                </div>
                                <div className="p-col-10 p-md-8">
                                    <InputText id="manufactureIdid"
                                        value={manufacturer.manufactureId}
                                        autoComplete="off" className="p-col-10"
                                        onChange={handleInputchange}></InputText>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <label htmlFor="manufacturename">Manufacturer Name</label>
                                </div>
                                <div className="p-col-10 p-md-8">
                                    <InputText id="manufacturenameid"
                                        value={manufacturer.manufactureName}
                                        autoComplete="off" className="p-col-10"
                                        onChange={handleInputchange}></InputText>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <label htmlFor="description">Description</label>
                                </div>
                                <div className="p-col-4 p-md-8">
                                    <InputTextarea id="descriptionid"
                                        rows={3} value={manufacturer.description}
                                        className="p-col-10"
                                        onChange={handleInputchange}></InputTextarea>
                                </div>
                            </div>
                        )}
                        {!isAddPage && (
                            <div className="p-grid">
                                <div className="p-col-12 p-md-4">
                                    <label htmlFor="manufactureid">Manufacturer ID</label>
                                </div>
                                <div className="p-col-10 p-md-8">
                                    <InputText id="manufactureIdid" readOnly={isReadOnly} 
                                        value={manufactureDetails.manufactureId}
                                        autoComplete="off" className="p-col-10"
                                        onChange={handleNewInputchange}></InputText>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <label htmlFor="manufacturename">Manufacturer Name</label>
                                </div>
                                <div className="p-col-10 p-md-8">
                                    <InputText id="manufactureNameid" readOnly={isReadOnly} 
                                        value={manufactureDetails.manufactureName}
                                        autoComplete="off" className="p-col-10"
                                        onChange={handleNewInputchange}></InputText>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <label htmlFor="description">Description</label>
                                </div>
                                <div className="p-col-4 p-md-8">
                                    <InputTextarea id="descriptionid"
                                        rows={3} readOnly={isReadOnly} 
                                        value={manufactureDetails.description}
                                        className="p-col-10"
                                        onChange={handleNewInputchange}></InputTextarea>
                                </div>
                            </div>
                        )}
                          <div className="p-dialog-footer">
                    {!isFormInvalid  && (<Message severity="error" key={"error"} text="Form is invalid"/>)}
                    <div className="ui-dialog-buttonpane p-clearfix">
                    {isShowActive  &&(
                                      <button onClick={handleActiveSubmit} className="p-button p-component p-button-text-icon-left"> 
                        {isReadOnly  &&(
                           <div>  
                          <span className="pi pi-user-plus p-c p-button-icon-left"></span>
                        <span className="p-button-text p-c">Active</span>
                        </div>  
                        )}
                        {!isReadOnly  &&(
                          <div>  
                          <span className="pi pi-user-minus p-c p-button-icon-left"></span>
                        <span className="p-button-text p-c">InActive</span>
                        </div>
                        )}
                      </button>
                      )}
                    {!isReadOnly  &&(
                      <button onClick={handleSubmit} className="p-button p-component p-button-text-icon-left">
                        <span className="pi pi-check p-c p-button-icon-left"></span>
                        <span className="p-button-text p-c">Save</span>
                      </button>
                    )}
                    </div>
                    </div>
                  </div>
                } 
            </Dialog>
        </div>
    );
};
const mapStateToProps = (state: any) => {
    const { manufactureData } = state;
    return {
        manufactureData
    };
};
export default connect(mapStateToProps)(Manufacture);    