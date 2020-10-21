import React, { Component } from 'react';
import { connect } from "react-redux";
import { Message } from "primereact/message";
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Dropdown} from 'primereact/dropdown';
import {Chart} from 'primereact/chart';
interface IDashboardStatic {
    deviceFormData: any;
    consumerData: any;
    city: any

}
const DashboardStatic: React.FC<IDashboardStatic> = ({
    deviceFormData, consumerData,city
}) => {
    const networkmeters= [
        {networkmeter:45232, nonnetworkmeter: 2435, totalmeter: 74667}
    ];
    const cities= [
        {label:'Chennai', value:{id:1, name: 'Chennai', code: 'CHN'}},
        {label:'Trichy', value:{id:2, name: 'Trichy', code: 'TRY'}},
        {label:'Madurai', value:{id:3, name: 'Madurai', code: 'MDU'}},
        {label:'Coimbatore', value:{id:4, name: 'Coimbatore', code: 'CBE'}},
        {label:'Salem', value:{id:5, name: 'Salem', code: 'SA'}}
    ];
    const tasks= [];
    var barData= {
        labels: ['Total Meters', 'Active Meters', 'Unmapped Meters', 'De-activated Meters','Faulty'],
        datasets: [
            {
                label: 'Single Phase',
                backgroundColor: '#03A9F4',
                borderColor: '#03A9F4',
                data: [2775, 2033, 200, 322,220]
            },
            {
                label: 'Three Phase',
                backgroundColor: '#FFC107',
                borderColor: '#FFC107',
                data: [2335, 1733, 200, 222,180]
            }

            
        ]
    }

    var barDataMeterStatus= {
        labels: ['Total Meters', 'Active Meters', 'Unmapped Meters', 'De-activated Meters','Faulty'],
        datasets: [
            {
                label: 'Meter Status',
                backgroundColor: '#03A9F4',
                borderColor: '#03A9F4',
                data: [5510, 3766,400, 544,400]
            } 

            
        ]
    }

    var  manufacturerData= {
        labels: ['INESH','L & T','Secure Meters '],
        datasets: [
            {
                data: [3766, 800, 544],
                backgroundColor: [
                    "#FFC107",
                    "#03A9F4",
                    "#4CAF50"
                ],
                hoverBackgroundColor: [
                    "#FFE082",
                    "#81D4FA",
                    "#A5D6A7"
                ]
            }]
    }


  var  firmwareData = {
    labels: ['V1.2.3.10','V1.2.4','V1.2.4.2'],
    datasets: [
        {
            data: [2766, 1300, 1044],
            backgroundColor: [
                "#FFC107",
                "#03A9F4",
                "#4CAF50"
            ],
            hoverBackgroundColor: [
                "#FFE082",
                "#81D4FA",
                "#A5D6A7"
            ]
        }]
}


var averageDailyLoad= {
    labels: ['06-Mar-2020', '07-Mar-2020', '08-Mar-2020', '09-Mar-2020', '10-Mar-2020'],
    datasets: [
        {
            label: 'Chennai North',
            data: [65, 59, 80, 81, 56],
            fill: false,
            borderColor: '#03A9F4'
        },
        {
            label: 'Chennai South',
            data: [28, 48, 40, 19, 86],
            fill: false,
            borderColor: '#FFC107'
        },
        {
            label: 'Vilupuram',
            data: [38, 48, 30, 29, 76],
            fill: false,
            borderColor: '#038cfc'
        },
        {
            label: 'Madurai',
            data: [25, 49, 60, 69, 46],
            fill: false,
            borderColor: '#ca03fc'
        },
        {
            label: 'Trichy',
            data: [38, 58, 30, 29, 66],
            fill: false,
            borderColor: '#03fcb5'
        }
    ]
}
var AveragekWH30Days= {
    labels: ['01-Feb','02-Feb', '03-Feb', '04-Feb', '05-Feb', '06-Feb', '07-Feb', '08-Feb', '09-Feb', '10-Feb', '11-Feb', '12-Feb', '13-Feb', '14-Feb', '15-Feb', '16-Feb', '01-Feb', '17-Feb', '18-Feb', '19-Feb', '20-Feb', '21-Feb', '22-Feb', '23-Feb', '24-Feb', '25-Feb', '26-Feb', '27-Feb', '28-Feb', '29-Feb'],
    datasets: [
        {
            label: 'Chennai North',
            data: [65, 59, 80, 81, 56,56,75,34,64,35,89,56,65, 59, 80, 81, 56,56,75,34,64,35,89,56, 56,56,75,34,64,35],
            fill: false,
            borderColor: '#03A9F4'
        },
        {
            label: 'Chennai South',
            data: [28, 48, 40, 19, 86,46,54,75,98,34,65,87,28, 48, 40, 19, 86,46,54,75,98,34,65,87,28, 48, 40, 19, 86,46],
            fill: false,
            borderColor: '#FFC107'
        },
        {
            label: 'Vilupuram',
            data: [38, 48, 30, 29, 76,65,78,43,85,53,59,56,38, 48, 30, 29, 76,65,78,43,85,53,59,56,38, 48, 30, 29, 76,65],
            fill: false,
            borderColor: '#038cfc'
        },
        {
            label: 'Madurai',
            data: [25, 49, 60, 69, 46,41,56,63,57,25, 49, 60, 69, 46,41,56,63,57,49,51,63,49,51,63, 69, 46,41,56,63,57],
            fill: false,
            borderColor: '#ca03fc'
        },
        {
            label: 'Trichy',
            data: [38, 58, 30, 29, 66,56,74,55,46,61,34,59,38, 58, 30, 29, 66,56,74,55,46,61,34,59,46,61,34,59,38, 58],
            fill: false,
            borderColor: '#03fcb5'
        }
    ]
}
var AveragekWH12Months= {
    labels: ['Feb-2020','Jan-2020', 'Dec-2019', 'Nov-2019', 'Oct-2019', 'Sep-2019', 'Aug-2019', 'Jul-2019', 'Jun-2019', 'May-2019', 'Apr-2019', 'Mar-2019'],
    datasets: [
        {
            label: 'Chennai North',
            data: [65, 59, 80, 81, 56,56,75,34,64,35,89,56],
            fill: false,
            borderColor: '#03A9F4'
        },
        {
            label: 'Chennai South',
            data: [28, 48, 40, 19, 86,46,54,75,98,34,65,87],
            fill: false,
            borderColor: '#FFC107'
        },
        {
            label: 'Vilupuram',
            data: [38, 48, 30, 29, 76,65,78,43,85,53,59,56],
            fill: false,
            borderColor: '#038cfc'
        },
        {
            label: 'Madurai',
            data: [25, 49, 60, 69, 46,41,56,63,57,49,51,63],
            fill: false,
            borderColor: '#ca03fc'
        },
        {
            label: 'Trichy',
            data: [38, 58, 30, 29, 66,56,74,55,46,61,34,59],
            fill: false,
            borderColor: '#03fcb5'
        }
    ]
}
      city=null;
   function dateTemplate(rowData, column) {
        if(column.field=="networkmeter")
             {
              return <div>
                  <a  onClick={()=>rowColumnClick(rowData)} style={{cursor: 'pointer'}}>{rowData.networkmeter}</a>
                 
              </div>;
             }
             if(column.field=="nonnetworkmeter")
             {
              return <div>
                  <a  onClick={()=>rowColumnClick(rowData)} style={{cursor: 'pointer'}}>{rowData.nonnetworkmeter}</a>
                 
              </div>;
             }
             if(column.field=="totalmeter")
             {
              return <div>
                  <a  onClick={()=>rowColumnClick(rowData)} style={{cursor: 'pointer'}}>{rowData.totalmeter}</a>
                 
              </div>;
             }   
          }

        function  rowColumnClick(rowData){
    
            window.location.hash = "#/assignmeter";
        }
        function   handlePageChange() {
            window.location.hash = "#/insidentsearch";
          }
          function handleMeterPageChange(){
    
   window.location.href = "/staticui/viewmeter/all";
          }
        function onTaskChange(e) {
            let selectedTasks = [];
            if(e.checked)
                selectedTasks=e.value;
            else
                selectedTasks=e.value;
              //  selectedTasks.splice(selectedTasks.indexOf(e.value), 1);
    
           // this.setState({tasks: selectedTasks});
        }
        function onCityChange(e) {
            city=e.value;
        }
    function requiredMessage( key:string){ return <Message severity="error" key={key} text="Field is required" />}
    return (
        <div className="p-grid p-fluid dashboard">
 
                 
                  <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#007be5',color:'#00448f'}}><span>UM</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-search"/>
                            <span>Un-Mapped Meters</span>
                            <span className="count"><a href="/staticui/viewmeter/all"   style={{cursor: 'pointer'}}>254</a></span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#ef6262',color:'#a83d3b'}}><span>BM</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-question-circle"/>
                            <span>Billed Meters </span>
                            <span className="count"><a href="/staticui/viewmeter/all" style={{cursor: 'pointer'}}>545</a></span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#20d077',color:'#038d4a'}}><span>FM</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-filter"/>
                            <span>Faulty Meters</span>
                            <span className="count"><a href="/staticui/viewmeter/all" style={{cursor: 'pointer'}}>25</a></span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#f9c851',color:'#b58c2b'}}><span>TM</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-check"/>
                            <span>Total Meters</span>
                            <span className="count"><a href="/staticui/viewmeter/all" style={{cursor: 'pointer'}}>799</a></span>
                        </div>
                    </div>
                </div>

                  
                

                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#007be5',color:'#00448f'}}><span>TI</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-search"/>
                            <span>Total Insidents</span>
                            <span className="count"><a href="" onClick={handlePageChange} style={{cursor: 'pointer'}}>523</a></span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#ef6262',color:'#a83d3b'}}><span>TP</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-question-circle"/>
                            <span>Total Problems</span>
                            <span className="count"><a href="" onClick={handlePageChange} style={{cursor: 'pointer'}}>81</a></span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#20d077',color:'#038d4a'}}><span>OP</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-filter"/>
                            <span>Open Problems</span>
                            <span className="count"><a href="" onClick={handlePageChange} style={{cursor: 'pointer'}}>21</a></span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#f9c851',color:'#b58c2b'}}><span>CI</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-check"/>
                            <span>Closed Insidents</span>
                            <span className="count"><a href="" onClick={handlePageChange} style={{cursor: 'pointer'}}>60</a></span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-lg-6 ">
                    <div className="card">
                        <h1 className="centerText">Meter Type Dashboard </h1>
                        <Chart type="bar" data={barData}/>
                    </div>
                 </div>
                 <div className="p-col-12 p-lg-6 ">
                    <div className="card">
                        <h1 className="centerText">Meter Status Dashboard </h1>
                        <Chart type="bar" data={barDataMeterStatus}/>
                    </div>
                 </div>
                 <div className="p-col-12 p-lg-6 ">
                    <div className="card">
                        <h1 className="centerText">Manufacturer Dashboard </h1>
                        <Chart type="pie" data={manufacturerData} />
                    </div>
                 </div>
                 <div className="p-col-12 p-lg-6 ">
                    <div className="card">
                        <h1 className="centerText">Firmware Dashboard </h1>
                        <Chart type="pie" data={firmwareData}/>
                    </div>
                 </div>
                 <div className="p-col-12 p-lg-6 ">
                    <div className="card">
                        <h1 className="centerText">Daily Load Last 5 Days </h1>
                        <Chart type="line" data={averageDailyLoad}/>
                    </div>
                 </div>
                 <div className="p-col-12 p-lg-6 ">
                    <div className="card">
                        <h1 className="centerText">Average Load 12 months </h1>
                        <Chart type="line" data={AveragekWH12Months}/>
                    </div>
                 </div>
                 <div className="p-col-12 p-lg-12 ">
                    <div className="card">
                        <h1 className="centerText">Average Load  30 Days  </h1>
                        <Chart type="line" data={AveragekWH30Days}/>
                    </div>
                 </div>
                <div className="p-col-12 p-md-6 p-lg-4">
                    <Panel header="Tasks" style={{height: '100%'}}>
                        <ul className='task-list'>
                            <li>
                                <Checkbox value="task1" onChange={onTaskChange} checked={tasks[1]>-1?true:false}></Checkbox>
                                <span className="task-name">Open Incident Reports</span>
                                <i className="pi pi-chart-bar" />
                            </li>
                            <li>
                                <Checkbox value="task2" onChange={onTaskChange} checked={tasks[2]>-1?true:false}></Checkbox>
                                <span className="task-name">On Demand Report</span>
                                <i className="pi pi-dollar" />
                            </li>
                            <li>
                                <Checkbox value="task3" onChange={onTaskChange} checked={tasks[3]>-1?true:false}></Checkbox>
                                <span className="task-name">Meter Onboard Pending Report</span>
                                <i className="pi pi-user" />
                            </li>
                            <li>
                                <Checkbox value="task4" onChange={onTaskChange} checked={tasks[4]>-1?true:false}></Checkbox>
                                <span className="task-name">Frequent Problems Meter Report</span>
                                <i className="pi pi-users" />
                            </li>
                            <li>
                                <Checkbox value="task5" onChange={onTaskChange} checked={tasks[5]>-1?true:false}></Checkbox>
                                <span className="task-name">Meter 360 degree View</span>
                                <i className="pi pi-briefcase" />
                            </li>
                            <li>
                                <Checkbox value="task6" onChange={onTaskChange} checked={tasks[6]>-1?true:false}></Checkbox>
                                <span className="task-name">User Management Report</span>
                                <i className="pi pi-briefcase" />
                            </li>
                        </ul>
                    </Panel>
                </div>
                <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
                    <Panel header="Contact Us">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <Dropdown value={city} options={cities} placeholder="Select a City" onChange={onCityChange} autoWidth={false} />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Name" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Age" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Message" />
                            </div>
                            <div className="p-col-12">
                                <Button type="button" label="Send" icon="fa-send"/>
                            </div>
                        </div>
                    </Panel>
                </div>
                

                <div className="p-col-12 p-lg-4 contacts">
                     <Panel header="Contacts">
                        <ul>
                            <li>
                                <button className="p-link">
                                    <img src="../../../assets/images/profile.png" width="35" alt="avatar1"/>
                                    <span className="name">Kandan Rathinam</span>
                                    <span className="email">kandanr@acumentec.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="../../../assets/layout/images/avatar_2.png" width="35" alt="avatar2"/>
                                    <span className="name">Muthu</span>
                                    <span className="email">spmuthu@gmail.com </span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="../../../assets/layout/images/avatar_2.png" width="35" alt="avatar3"/>
                                    <span className="name">Pavankumar</span>
                                    <span className="email">pavan.acumen@gmail.com</span>
                                </button>
                            </li>
                         
                        </ul>
                    </Panel> 
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


export default connect(mapStateToProps)(DashboardStatic);