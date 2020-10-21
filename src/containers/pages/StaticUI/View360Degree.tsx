import React, { Dispatch, Component ,useState, useEffect} from 'react';
import { connect } from "react-redux";
import { Message } from "primereact/message";
import {PanelMenu} from 'primereact/panelmenu';
import {Panel} from 'primereact/panel';
import { MenuItem } from "primereact/components/menuitem/MenuItem";
import { getThreeSixtyInfo } from "../../../store/actions/NewDevice";

import TreeMenu from 'react-simple-tree-menu';

interface IView360Degree {
    deviceFormData: any;
    match: any;
  
    dispatch: Dispatch<any>;
    panelMenuItems : Array<MenuItem>;
  
}
const View360Degree: React.FC<IView360Degree> = ({
    dispatch,deviceFormData,   match,panelMenuItems
}) => {
   
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    let meterSerialNumber = match.params.id;
  //  alert(meterSerialNumber);
    useEffect(() => {
             dispatch(getThreeSixtyInfo(meterSerialNumber))
    }, []);
 //   alert(JSON.stringify(deviceFormData));
    if (!isDataAvailable && deviceFormData && !deviceFormData.isThree60Loading) {
     
        if (deviceFormData != null && deviceFormData.three60Data != null) {
            setIsDataAvailable(true);
        }
    }

   // export const MenuItems: MenuItem[]
 
 
  panelMenuItems = [
    {
        label:'Insidents',
        icon:'pi pi-fw pi-file',
        items:[
           {
            
                    label:'Open',
                    icon:'pi pi-fw pi-lock-open' ,
                    command: () => {
                        window.location.href = "/insidentsearch";
                      }
                 },
                 {
                    label:'Closed',
                    icon:'pi pi-fw pi-lock'  ,
                    command: () => {
                        window.location.href = "/insidentsearch";
                      }
                 }
  
              
        ]
     },
     {
        label:'Alarms',
        icon:'pi pi-fw pi-bell',
        items:[
           {
              label:'Open',
              icon:'pi pi-fw pi-lock-open',
              command: (event) => {  rowColumnClick("insidentsearch"); } 
           },
           {
              label:'Closed',
              icon:'pi pi-fw pi-lock',
              command: (event) => { rowColumnClick("insidentsearch"); } 
           } 
        ]
     },
     {
        label:'Events',
        icon:'pi pi-fw pi-user',
        items:[
           {
              label:'History',
              icon:'pi pi-fw pi-user-plus',
  
           } 
        ]
     },
     {
        label:'Billing',
        icon:'pi pi-fw pi-calendar',
       
              items:[
                 {
                    label:'Current',
                    icon:'pi pi-fw pi-calendar-plus'
                 },
                 {
                    label:'History',
                    icon:'pi pi-fw pi-calendar-minus'
                 },
                 {
                    label:'Payment History',
                    icon:'pi pi-fw pi-calendar-minus'
                 }
              ]
           } ];

           
           const name =[{
            key: 'Insidents',
            label:'Insidents',
            icon:'pi pi-fw pi-file',
            url: 'staticui/meterinsidentsearch',  
            nodes: [
              {
                key: 'open',
                label:'Open',
                icon:'pi pi-fw pi-lock-open' ,
                nodes: [],
                url: 'staticui/meterinsidentsearch'  
               
              },
              {
                key: 'closed',
                label:'Closed',
                icon:'pi pi-fw pi-lock'  ,
                nodes: [],
                url: 'staticui/meterinsidentsearch'  
               
              }
            ] 
          },
          {
                key: 'Alarms',
                label:'Alarms',
                icon:'pi pi-fw pi-bell',
                url :"staticui/meterinsidentsearch" ,
                nodes:[
                   {
                      key: 'open',
                      label:'Open',
                      icon:'pi pi-fw pi-lock-open',
                      url : "staticui/meterinsidentsearch", 
                      nodes: []
                   },
                   {
                      key: 'closed',
                      label:'Closed',
                      icon:'pi pi-fw pi-lock',
                      url :"staticui/meterinsidentsearch" ,
                      nodes: []
                   } 
                ]
             

          },
            {
        key: 'events',
        label:'Events',
        icon:'pi pi-fw pi-user',
        nodes:[
           {
              key: 'history',
              label:'History',
              icon:'pi pi-fw pi-user-plus',
  
           } 
        ]
        },
        {
            label:'Billing',
            icon:'pi pi-fw pi-calendar',
            key: 'billing',
            nodes:[
                     {
                        key: 'current',
                        label:'Current',
                        icon:'pi pi-fw pi-calendar-plus'
                     },
                     {
                        key: 'history',
                        label:'History',
                        icon:'pi pi-fw pi-calendar-minus'
                     },
                     {
                        key: 'payment',
                        label:'Payment History',
                        icon:'pi pi-fw pi-calendar-minus'
                     }
                  ]
               }
        
        
        ];

          
       function  rowColumnClick(reDirectPage){
               // alert(reDirectPage);
              window.location.hash = reDirectPage;
          }
    function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
    return (
<div className="p-grid p-fluid">
                <div className="p-col-12">
                        <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                            <div className="p-messages-wrapper">
                                <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                                <ul>
                                    <li>
                                        <span className="p-messages-detail">View 360 Degree  menu used to View All summary data and link with a particular selected meter... 
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card card-w-title">
                            <h1>360 Degree View Meter</h1>
                            
                            <Panel header="Meter Info" toggleable={true}>
                           
                            <div className="p-grid">
                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Meter Serial Number</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterSerialNumber}  
                                </div> 
                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="MeterId" >Meter Id</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                {isDataAvailable && deviceFormData.three60Data.meterProfile.meterProfileFkId.meterSerialNumber}  
                                </div> 
                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="Version" >Version</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                V1.2.3.10
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="LastPowerReading" >Last Power Reading (Watt)

</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               46
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="MinVoltage" >Min Voltage</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               456
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="MaxVoltage" >Max Voltage</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               600
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="EnergyReading" >Energy Reading (Last 6 hours)</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                345
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="PowerReading" >Power Reading (Last 6 hours)</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                4567
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="VoltageReading" >Voltage Reading (Last 6 hours)</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                56789
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack" >
                                    <label htmlFor="EnergyConsumption" >Energy Consumption (cumulative for current Month)</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               345456
                                </div> 
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Category</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               Single Phase 
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="MeterCategory" >Consumer Name</label>
                                </div>
                                <div className="p-col-12 p-md-2 " >
                                            Rama Krishna
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="DeviceID">Manufacturer Name</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                Inesh
                                </div> 
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="YearofManufacture">Consumer Number</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                312545215
                                </div> 


                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="ManufacturerName">Meter IP</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                117.231.125.249
                                </div> 
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="MeterIP">Consumer Phone No</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                91121212121
                                </div>  
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Sim No</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                8991808036452420072
                                </div> 

                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="ComunicationModuleType">  Consumer Email ID</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                                ramu@gmail.com
                                </div> 
                                
                                <div className="p-col-12 p-md-4 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Connection  Status</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               Active
                                </div> 
                                <div className="p-col-12 p-md-6  dtcolumnoverflow"  >
                               <a href="/staticui/meterview/IN1007137">View Meter</a>
                                </div> 
                                </div>
                                </Panel>
                            
                                <Panel header="Profiles Links" toggleable={true}>

                                <div className="p-grid">
                       
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Profile Name</label>
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                RTC - Date & Time
                                </div> 
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterCategory" >View</label>
                                </div>
                                <div className="p-col-12 p-md-6 formlableboldblack" >
                                    Interaction Notes <a  href="#/view360degree"  >Add Interaction</a>  
                                </div>
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Instant Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               18-Feb-2020 15:25:00
                                </div> 
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" > <a  href="#/view360degree"  >View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">

                                </div>
                                 <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Load Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               18-Feb-2020 15:15:00
                                </div> 
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" ><a  href="#/view360degree"  >View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">
                                </div>


                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Day Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               18-Feb-2020 15:15:00
                                </div> 
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" ><a  href="#/view360degree"  >View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">
                                </div>

                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Billing Profile</label>
                                </div>
                                <div className="p-col-12 p-md-2">
                               18-Feb-2020 15:15:00
                                </div> 
                                <div className="p-col-12 p-md-2">
                                    <label htmlFor="MeterCategory" ><a  href="#/view360degree"  >View</a></label>
                                </div>
                                <div className="p-col-12 p-md-6">
                                </div>

                               </div>
                                   
                               
                             

                          


                                 </Panel>
                            <Panel header="Activities" toggleable={true}>
                            <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                       
                            <PanelMenu model={panelMenuItems} />
                            
                            </div>
                            <div className="p-col-12 p-md-6">

                            <TreeMenu data={name}
   
                                    onClickItem={({  ...props }) => {
                                    window.location.href=props.url;  
                                                                    }}/>
   

                                </div>
                            </div>
                               </Panel>
                       
                       
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


export default connect(mapStateToProps)(View360Degree);
