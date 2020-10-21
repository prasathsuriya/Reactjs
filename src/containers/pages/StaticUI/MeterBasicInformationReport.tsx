import React, { Dispatch, useState } from "react";
import { connect } from "react-redux";
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

 
//import {getConsumerList, saveConsumer, deleteConsumer} from "../../store/actions/Consumer";

interface IMeterBasicInformationReport {}
interface IMeterBasicInformationReport {
    viewData: any;
    dispatch: Dispatch<any>;
      state : {
        value: 0,
        dataTableValue:[] ,
        dataTableSelection:[] 
    }
}
const  MeterBasicInformationReport: React.FC<IMeterBasicInformationReport> = ({
   
    
}) => {
   
     const [dataTableSelection, setdataTableSelection] = useState();
    const onSelectionChangeed=(e) => {setdataTableSelection(e.value)};
    const dataTableValues = [
        {"sno":"1","meterserialnumber":"SM_5682","deviceid":"1001","manufacturername":"panasonic","communicationmodule":"rfid","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.36.38","metersimno":"9840285889","meterstation":"v8","transformer":"steupup","pole":"north","station":"thermal","substation":"chennai","feeder":"s6","latitude":"12.397","longitude":"20.323","country":"India","state":"tamilnadu","zone":"south","district":"chennai","city":"chennai","locality":"thirumangalam","pincode":"600087","metertime":"5:30pm","meterdate":"22/11/95","frequencyofreading":"6hz"},
        {"sno":"2","meterserialnumber":"SM_2684","deviceid":"1002","manufacturername":"toshiba","communicationmodule":"radio","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.40.38","metersimno":"9840285869","meterstation":"v4","transformer":"stepdown","pole":"north","station":"thermal","substation":"chennai","feeder":"s7","latitude":"12.567","longitude":"22.456","country":"India","state":"tamilnadu","zone":"east","district":"villupuram","city":"trichy","locality":"kolathur","pincode":"600093","metertime":"6:00am","meterdate":"23/12/84","frequencyofreading":"7hz"},
        {"sno":"3","meterserialnumber":"VS_8457","deviceid":"1003","manufacturername":"vivo","communicationmodule":"gsm","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.66.38","metersimno":"9840285829","meterstation":"v6","transformer":"stepup","pole":"south","station":"wind","substation":"vilupuaram","feeder":"s4","latitude":"12.837","longitude":"23.373","country":"India","state":"tamilnadu","zone":"west","district":"trichy","city":"coimbatore","locality":"ramnad","pincode":"600037","metertime":"4:20pm","meterdate":"25/03/01","frequencyofreading":"10hz"},
        {"sno":"4","meterserialnumber":"AS_8367","deviceid":"1004","manufacturername":"Eon","communicationmodule":"wifi","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.76.38","metersimno":"9840285819","meterstation":"v2","transformer":"stepdown","pole":"north","station":"wind","substation":"chennai","feeder":"s3","latitude":"12.943","longitude":"24.676","country":"India","state":"tamilnadu","zone":"north","district":"madurai","city":"madurai","locality":"dholakpur","pincode":"600027","metertime":"5:45pm","meterdate":"26/05/09","frequencyofreading":"15hz"},
        {"sno":"5","meterserialnumber":"ST_7478","deviceid":"1005","manufacturername":"Dell","communicationmodule":"wifi","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.65.38","metersimno":"9840285789","meterstation":"v3","transformer":"stepup","pole":"north","station":"thermal","substation":"vilupuram","feeder":"s9","latitude":"13.287","longitude":"24.832","country":"India","state":"tamilnadu","zone":"south","district":"thirunelveli","city":"salem","locality":"thillainagar","pincode":"600044","metertime":"6:15pm","meterdate":"28/07/11","frequencyofreading":"25hz"},
        {"sno":"6","meterserialnumber":"ST_3437","deviceid":"1006","manufacturername":"Nokia","communicationmodule":"gsm","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.86.38","metersimno":"9840285589","meterstation":"v1","transformer":"stepdown","pole":"south","station":"thermal","substation":"chennai","feeder":"s4","latitude":"13.165","longitude":"25.637","country":"India","state":"tamilnadu","zone":"west","district":"coimbatore","city":"thiruvallur","locality":"athur","pincode":"600078","metertime":"6:25pm","meterdate":"30/08/13","frequencyofreading":"36hz"},
        {"sno":"7","meterserialnumber":"HS_7437","deviceid":"1007","manufacturername":"Asus","communicationmodule":"radio","metercategory":"ionic","yearofmanufacture":"1975","meterIP":"172.56.38","metersimno":"9840285689","meterstation":"v88","transformer":"stepup","pole":"north","station":"wind","substation":"vilupuram","feeder":"s1","latitude":"13.453","longitude":"25.437","country":"India","state":"tamilnadu","zone":"north","district":"ramnad","city":"ramnad","locality":"ambur","pincode":"600087","metertime":"6:15pm","meterdate":"02/08/15","frequencyofreading":"18hz"} 
];
      
       
    
      function onClickAdd(event) {
        setdisplayDialog(true);
      }
      const[displayDialog, setdisplayDialog]=useState(false);
      const[isShowFormMessage, setShowFormMessage]=useState(false);
      const[showDelete, setShowDelete]=useState(false);
      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
      const [isValid, setValid] = useState(false);
      const handleSubmit = (event: any) => {    
            
        setIsFormSubmitted(true);
        
      }
      const handleDeleteSubmit=(event)=>{
               
      }
      var header = <div style={{'textAlign':'left'}}>
      <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV"></Button>
      <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
      
  </div>;
     
  return (
    <div>




         <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1> Meter Basic Information Report</h1>
                    </div>
                     
                </div>

                <div className="content-section implementation">

                <DataTable value={dataTableValues} paginatorPosition="both" selectionMode="single" 
                 paginator={true} rows={10}  
                 alwaysShowPaginator={false}        selection={dataTableSelection} 
                 scrollable={true} scrollHeight="200px" style={{marginTop:'5px', width: '6000px'}}  header={header}
                    onSelectionChange={onSelectionChangeed} 
                    >

<Column field="sno" header="S.no" filter={true} />
                        <Column field="meterserialnumber" header="Meter Serial Number" filter={true} />
                        <Column field="deviceid" header="Device ID" filter={true} />
                        <Column field="manufacturername" header="Manufacturer Name" filter={true} />
                        <Column field="communicationmodule" header="Communication Module" filter={true} />
                        <Column field="metercategory" header="Meter Category" filter={true} />
                        <Column field="yearofmanufacture" header="Year Of Manufacture" filter={true} />
                        <Column field="meterIP" header="Meter IP" filter={true} />
                        <Column field="metersimno" header="Meter Sim No" filter={true} />
                        <Column field="meterstation" header="Meter Station" filter={true} />
                        <Column field="transformer" header="Transformer" filter={true} />
                        <Column field="pole" header="Pole" filter={true} />
                        <Column field="station" header="Station" filter={true} />
                        <Column field="substation" header="Sub Station" filter={true} />
                        <Column field="feeder" header="Feeder" filter={true} />
                        <Column field="latitude" header="Latitude" filter={true} />
                        <Column field="longitude" header="Longitude" filter={true} />
                        <Column field="country" header="Country" filter={true} />
                        <Column field="state" header="State" filter={true} />
                        <Column field="zone" header="Zone" filter={true} />
                        <Column field="district" header="District" filter={true} />
                        <Column field="city" header="City" filter={true} />
                        <Column field="locality" header="Locality" filter={true} />
                        <Column field="pincode" header="Pincode" filter={true} />
                        <Column field="metertime" header="Meter Time" filter={true} />
                        <Column field="meterdate" header="Meter Date" filter={true} />
                        <Column field="frequencyofreading" header="Frequency Of Reading" filter={true} />                 
                                       
                                                 
       </DataTable>
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
export default connect(mapStateToProps)(MeterBasicInformationReport);
 