import React, { Component } from 'react';
import { connect } from "react-redux";
import { Message } from "primereact/message";
import {InputText} from 'primereact/inputtext';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Button} from 'primereact/button';
import {PanelMenu} from 'primereact/panelmenu';

 

interface IView360Degree {
    deviceFormData: any;
    consumerData: any;
}
const View360Degree: React.FC<IView360Degree> = ({
    deviceFormData, consumerData
}) => {
    const panelMenuItems = [
        {
            label:'Insidents',
            icon:'pi pi-fw pi-file',
            items:[
               {
                
                        label:'Open',
                        icon:'pi pi-fw pi-lock-open' 
                     },
                     {
                        label:'Closed',
                        icon:'pi pi-fw pi-lock' 
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
       function  rowColumnClick(reDirectPage){
                alert(reDirectPage);
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
                            
                      
                            <Accordion   activeIndex="0,1,2"   >
                            <AccordionTab header="Meter Info" >
                            <div className="p-grid">
                                <div className="p-col-12 p-md-2 formlableboldblack" >
                                    <label htmlFor="MeterSerialNumber" >Meter Serial Number</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                IN25145266
                                </div> 
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterCategory" >Consumer Name</label>
                                </div>
                                <div className="p-col-12 p-md-4 " >
                                            Rama Krishna
                                </div> 

                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="DeviceID">Manufacturer Name</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                Inesh
                                </div> 
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="YearofManufacture">Consumer Number</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                312545215
                                </div> 


                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="ManufacturerName">Meter IP</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                117.231.125.249
                                </div> 
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterIP">Consumer Phone No</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                91121212121
                                </div>  
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Sim No</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                8991808036452420072
                                </div> 

                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="ComunicationModuleType">  Consumer Email ID</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                                ramu@gmail.com
                                </div> 
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Category</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                               Single Phase 
                                </div> 
                                <div className="p-col-12 p-md-2 formlableboldblack">
                                    <label htmlFor="MeterSimNo">Meter Status</label>
                                </div>
                                <div className="p-col-12 p-md-4">
                               Active
                                </div> 
                                </div>
                                </AccordionTab>
                                <AccordionTab header="Profiles Links">


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
                                   
                               
                               
                               
                                   
                            

                          


                                 </AccordionTab>
                            <AccordionTab header="Activities">
                            <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                            <PanelMenu model={panelMenuItems} />
                            
                            </div>
                            <div className="p-col-12 p-md-6">


                                </div>
                            </div>
                               </AccordionTab>
                        </Accordion>
                                

                       
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
