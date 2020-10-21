import React, { Dispatch, useState, useEffect } from "react";
import { connect } from "react-redux";
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { getBulkUpload } from "../../../store/actions/BulkUpload";
import { ProgressSpinner } from "primereact/progressspinner";
import { Http } from "../../../utils/Http";
import { getCurrentUser } from "../../../store/selectors/Accounts";
import { Growl } from "primereact/growl";
import { Message } from "primereact/message";
import { Dropdown } from "primereact/dropdown";

import {apiURL} from "../../../utils/Http"

interface IUpload {
    dispatch: Dispatch<any>;
    bulkUploadData: any;
}

const BulkUpload: React.FC<IUpload> = ({
    dispatch,bulkUploadData
}) => {
    useEffect(() => {
dispatch(getBulkUpload(null));
    }, []);

    const [isDialogState, setDialogState] = useState(false);
    const showUploadDialog = () => {
        setDialogState(true);
    }
    const [selectedFile, setSelectedFile] = useState();

    const onFileSelect=(event:any)=>{
        var file =event.files[0];
        setSelectedFile(file);
    }
    const [msgSeverity, setSeverity]=useState("success");    
    const [msgDescription, setDescriptiony]=useState("saved successfully");    
    
    function successMessage( key:string){     
        return <Message severity={msgSeverity} key={key} text={msgDescription} />
      }
    const [isSumbmit, setSumbmited] = useState(false);
    const [growl, setGrowl]=useState();
    const [showMessage, setShowMessage]=useState(false);
    function processSave(data:any)
    {
        if(data.value ===true ){
            if(data.code ===200){
            setDialogState(false);
            dispatch(getBulkUpload(null));
            setIsDispatchedSave(false);
            setIsFormSubmitted(false);        
            setTimeout(() => {
                setPageLoaded(false);
        //          loadGrid();
            }, (1000));
            setSumbmited(false);
            setShowMessage(true);    
            setPageLoaded(false);  
            growl.show({severity: 'success', summary: 'Success', detail: data.displayMessage});
            setSeverity("success");
            }
            else if(data.code ===300){
              growl.show({severity: 'warn', summary: 'Warn', detail: data.displayMessage});
              setShowMessage(false);
              setSeverity("warn");
            }
          }
          else{
            growl.show({severity: 'error', summary: 'Error', detail: "Error occuerd in process."});
            setShowMessage(false);
            setSeverity("error");
          }      
    }
    const onUpload = (event:any) => {
        setSumbmited(true);
        if(selectedProfile==="" || selectedProfile===null || !selectedProfile){
            return;
        }
        let formData = new FormData();
        var curentUser=getCurrentUser();
        formData.append("file", selectedFile);
        formData.set("processName", selectedProfile);
        if(curentUser!=null){ 
            formData.set("userId", curentUser.userProfile.userFkId.userId);
        }
        Http.axios().post('/api/uploadFile', formData)
        .then((e) => {
            console.log(e);
            processSave(e.data);
        })
        .catch((e) => {
            return e.response;
        })
        .finally(() => {
            let frm = document.getElementById("uploadFile");
        });
    }
    const [tableData, setTableData] = useState(new Array<any>());
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isDispatchedSave, setIsDispatchedSave] = useState(false);
    const[showDelete, setShowDelete]=useState(false);
    
    const [selectedProfile, setSelectedProfile] = useState("");

    const [isPageLoaded, setPageLoaded] = useState(false);
    const profileList = [
        { label: "Meter Profile", value: "Meter Profile" },
        { label: "Meter Consumer", value: "Meter Consumer" }
    ];
    loadGrid();
    function loadGrid(){
      if (!isPageLoaded && !bulkUploadData.isLoading) {
        var meters=new Array<any>();
        if(bulkUploadData.items.length>0){                
          for(var i=0;i<bulkUploadData.items.length;i++){
            var element=bulkUploadData.items[i];             
            meters.push(element);
          }      
          setPageLoaded(true);
          setTableData(meters);   
        }     
      }
    }

    const uploadedFile = (rowData, column) => {    
        let url = apiURL+"/downloadFile/"+rowData.uploadedFilePath; 
        return rowData.uploadedFilePath != null ? <a href={url}
         target="_blank" >Download</a> :<span></span>;
    }
    const successFile = (rowData, column) => {    
        let url = apiURL+"/downloadFile/"+rowData.successsFilePath;        
        return rowData.successsFilePath != null ? <a href={url}
         target="_blank" >Download</a> :<span></span>;
    }
    const errorFile = (rowData, column) => {    
        let url = apiURL+"/downloadFile/"+rowData.errorFilePath;
        return rowData.errorFilePath != null ? <a href={url}
        target="_blank" >Download</a> :<span></span>;
    }

    let header = <div style={{ textAlign: 'right' }}>
        <Button type="button" icon="pi pi-plus"
            iconPos="left" label="Add" onClick={showUploadDialog} ></Button>
    </div>;
    function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
    return (
        <div>
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Bulk Upload Meters</h1>
                        <p>Use this page to Bulk Upload Meters using excel sheet upload.</p>
                        <p>You can Upload up to 1000 records through an .xls, .xlsx, or .csv file. <br></br>
                            To upload more than 1000 records at a time, use a .csv file.</p>
                    </div>
                    <div className="p-grid">
                    <div className="p-col-6">
                        <div className="card">
                            <h1>Meter Details Template <a href="./assets/bulkuploadsample/Bulk_upload_meter_profile.xlsx" >Download</a></h1> 
                        </div>
                    </div>
                    <div className="p-col-6">
                        <div className="card">
                            <h1>Consumer Profile Template <a href="./assets/bulkuploadsample/Bulk_upload_meter_consumer.xlsx" >Download</a></h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card card-w-title">
                    <h1>Uploads</h1>
                    <Growl ref={(el) => setGrowl(el)} />
                    {showMessage && (successMessage("Success"))}    
                    {bulkUploadData.isLoading && <ProgressSpinner />}
                      {!bulkUploadData.isLoading && (        
                    <DataTable paginatorPosition="both" selectionMode="single"
                    value={tableData}
                        paginator={true} rows={10}
                        alwaysShowPaginator={false}
                        scrollable={true} scrollHeight="200px"
                        header={header}
                        emptyMessage="No Record Found"
                    >
                        <Column field="processName" header="process Name" sortable={true} />
                        <Column field="uploadedDate" header="Uploaded Date" sortable={true} />
                        <Column field="createdBy" header="Uploaded By" sortable={true} />
                        <Column field="uploadedFilePath" body={uploadedFile}  header="Uploaded File" />
                        <Column field="successsFilePath" body={successFile} header="Success File" />
                        <Column field="errorFilePath" body={errorFile} header="Error File" />
                        <Column field="statusString" header="Status" />
                    </DataTable>
                      )}
                </div>
            </div>

            <Dialog
                header="Meter Details"
                visible={isDialogState}
                modal={true}
                style={{ width: "55vw" }}
                onHide={() => setDialogState(false)}
            >
              {isDialogState && ( 
                  <div className="card">
                    <h1>Browse File to Upload</h1> 

                    <div className="p-grid">   
                  
                    <div className="p-col-12 p-md-2">
                      <label htmlFor="emailIds">Profile</label>
                    </div>
                    <div className="p-col-12 p-md-4">
                    <Dropdown id="roleId"
                        options={profileList}
                        value={selectedProfile} required onChange={(e)=> {setSelectedProfile(e.value)}}>
                      </Dropdown>
                      { isSumbmit && selectedProfile==="" && (requiredMessage("Profile"))}
                    </div>
                    </div>
                    <FileUpload name="demo" customUpload={true} onSelect={onFileSelect} uploadHandler={onUpload} multiple={false} accept=".xls,.xlsx" maxFileSize={1000000} />
                </div>
              )}
            </Dialog>
        </div>
    );

};

const mapStateToProps = (state: any) => {
    const { bulkUploadData} = state;
    return {
        bulkUploadData
    };
};


export default connect(mapStateToProps)(BulkUpload);