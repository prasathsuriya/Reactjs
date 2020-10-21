import React, {Component} from 'react';
import {FileUpload} from 'primereact/fileupload';
import {Growl} from 'primereact/growl';
import {ProgressBar} from 'primereact/progressbar';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
 
interface IAppProps {}
interface IAppState {
}
 
export class BulkUploadMeters extends Component<IAppProps>  {
    public state = {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[]
    }
    public interval;
    public growl;
 
    public constructor(props: any) {
        super(props);
          
        this.onUpload = this.onUpload.bind(this);
    }
    

      onUpload() {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let val = this.state.value;
            val += Math.floor(Math.random() * 10) + 1;
            if (val >= 100) {
                val = 100;
                clearInterval(this.interval);
            }
            this.setState({value: val});
        }, 2000);

      //  this.meterService.getMeterBulkUpload().then(data => this.setState({dataTableValue: data}));
    }
    public dataTableValues = [
        {"sno":"1","reportid":"10001","Date":"01-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"2","reportid":"10002","Date":"01-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"3","reportid":"10003","Date":"02-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"4","reportid":"10004","Date":"02-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"5","reportid":"10005","Date":"03-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"6","reportid":"10006","Date":"03-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"7","reportid":"10007","Date":"04-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"8","reportid":"10008","Date":"04-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"9","reportid":"10009","Date":"05-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"10","reportid":"10010","Date":"05-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"11","reportid":"10011","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"12","reportid":"10012","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"13","reportid":"10013","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"14","reportid":"10014","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"15","reportid":"10015","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"16","reportid":"10016","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"17","reportid":"10017","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"18","reportid":"10018","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"19","reportid":"10019","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"20","reportid":"10020","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"21","reportid":"10021","Date":"01-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"22","reportid":"10022","Date":"01-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"23","reportid":"10023","Date":"02-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"24","reportid":"10024","Date":"02-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"25","reportid":"10025","Date":"03-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"26","reportid":"10026","Date":"03-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"27","reportid":"10027","Date":"04-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"28","reportid":"10028","Date":"04-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"29","reportid":"10029","Date":"05-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"30","reportid":"10030","Date":"05-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"31","reportid":"10031","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"32","reportid":"10032","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"33","reportid":"10033","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"34","reportid":"10034","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"35","reportid":"10035","Date":"06-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"36","reportid":"10036","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"37","reportid":"10037","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"38","reportid":"10038","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"39","reportid":"10039","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"40","reportid":"10040","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"},
        {"sno":"41","reportid":"10041","Date":"07-02-2020","uploadedby":"Murugavel","status":"Success","view":"sample.xlsx"}

    ];
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
    return (
        <div className="p-grid">
        <div className="p-col-12">
            <div className="card">
                <h1>Bulk Upload Meters</h1>
                <p>Use this page to Bulk Upload Meters using excel sheet upload.</p>
                <p>You can Upload up to 1000 records through an .xls, .xlsx, or .csv file. <br></br>
                    To upload more than 1000 records at a time, use a .csv file.</p>
            </div>

            <div className="p-col-12">
            <div className="card">
                <h1>Download Sample File  <a  href="/assets/layout/sample.xlsx" >Download</a></h1>
            
                
            </div>
        </div>

            <div className="p-col-12">
            <div className="card">
                <h1>Browse File to Upload</h1>
                <Growl ref={(el) => this.growl = el} />
        
                <FileUpload name="demo[]" url="./upload" onUpload={this.onUpload} multiple={true} accept="image/*" maxFileSize={1000000} />
            </div>
        </div>
    
        <div className="p-col-12">
            <div className="card">
                <h1>Upload Progress </h1>
                <ProgressBar value={this.state.value}/>
            </div>
        </div>
       

        <div className="card card-w-title">
                <h1>Report Data</h1>

                <DataTable value={this.dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}   
                 scrollable={true} scrollHeight="200px"   header="List of Meter Upload"
                    
                    >

                     <Column field="sno" header="S No" sortable={true}/>
                    <Column field="reportid" header="Report Id" sortable={true}/>
                    <Column field="Date" header="Date" sortable={true}/>
                    <Column field="uploadedby" header="Uploaded By" sortable={true}/>
                    <Column field="status" header="Status" />
                    <Column  header="View File" />  

                    
                </DataTable>
            </div>


        </div>
    </div>
        );
    }
}
  
  export default BulkUploadMeters;