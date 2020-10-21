import React, { Component } from "react";
import classNames from "classnames";
import { Route, Switch, withRouter, RouteComponentProps } from "react-router-dom";
import { ScrollPanel } from "primereact/components/scrollpanel/ScrollPanel";
import { MenuItem } from "primereact/components/menuitem/MenuItem";
import { AppTopbar } from "./AppTopbar";
import { AppMenu } from "./AppMenu";
import { getCurrentUser } from "../src/store/selectors/Accounts";
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
 
import {
  LoginPage,
  Dashboard,
  JobSchedule,
  Report,
  Users, 
  ReportOnDemand,
  NewDevice,
  CreateUser,
  Devices ,
  Consumers ,
  Simulator,
  BulkUpload,
 ThreeSixty,
   
  View360Degree,
  DashboardStatic,
  BulkUploadMeters,
  MeterInsident,
  MeterInsidentSearch,
  SearchCommonDetails,
  CreateInsidentReport,
  FrequentInsidentReport,
  MeterBasicInformationReport,
  MeterInstantInformationReport,
  MeterBillingInformationReport,
  MeterDailyLoadInformationReport,
  Permissions,
  Roles,

  AdminDashboard,
  AddConsumer,
  AddMeter,
  AllCustomer,
  MonthlyConsumption,
  ActiveCustomer,
  InActiveCustomer,
  Controls,
  MonthlyMaintenance,
  SettingStatus, 
  BillingGenerate ,
  BillingGenerateStatus,
  BillingReport,
  PaymentHistory,
   AdminControl,
  Searchadmincontrol,
  Icareunits,
  Operatingunits,
  Permission,
  Role,
  Userlists,
  Workflowconditions,
  Workflowconditionvalues,
  Workflows,
    Workflowsactors,
   Workflowstage,
   Workflowtask,
   AssignMeter,
   ViewMeter,

   MeterBlockLoadInformationReport,
   MeterNamePlateReport,
   MeterEventInformationReport,
   ProcessScheduler,
   CreateReport
} from "./containers/pages";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./layout/layout.css";
import "./App.css";
import { formatWithOptions } from "util";
import { createBrowserHistory } from "history";
import { IdleTimeOutModal } from "./IdleTimeOutModal";
import PushSetup from "./containers/pages/PushSetup";
//import { IdleTimeOutModal } from "./IdleTimeOutModal";

interface IAppProps {
}
interface IAppState {
  timeout:number,
  showModal: boolean,
  userLoggedIn: boolean,
  isTimedOut: boolean,
  staticMenuInactive: boolean,
    overlayMenuActive: boolean,
    mobileMenuActive: boolean,
    isLogged: boolean,
    layoutMode: string,
    layoutColorMode: string,
    UserDisplayName:string,
    role:string
}
interface Props extends RouteComponentProps { }
class App extends Component<Props, IAppState> {
  private menuClick: boolean = false;
  private layoutMenuScroller!: ScrollPanel | null;
  private menu!: Array<MenuItem>;
  history = createBrowserHistory();
  
  public idleTimer;

  public constructor(props: any) {
    super(props);
    this.state = {
      isLogged: false,
      timeout:1000 * 20 * 60,
      showModal: false,
      userLoggedIn: false,
      isTimedOut: false,
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      layoutMode: "static",
      layoutColorMode: "dark",
      role: "",
      UserDisplayName: ""
    }
    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.componentWillMount();
    console.log("this.state.role " + this.state.role);
    
    

  this.idleTimer = null
  this._onAction = this._onAction.bind(this)
  this._onActive = this._onActive.bind(this)
  this._onIdle = this._onIdle.bind(this)
  this.handleClose = this.handleClose.bind(this)
  this.handleLogout = this.handleLogout.bind(this)
  }

  _onAction(e) {
    console.log('user did something', e)
    this.setState({isTimedOut: false})
  }
 
  _onActive(e) {
    console.log('user is active', e)
    this.setState({isTimedOut: false})
  }
 
  _onIdle(e) {
    console.log('user is idle', e)
    const isTimedOut = this.state.isTimedOut
    var currentUser = getCurrentUser();
    console.log(currentUser);
    if (currentUser !== null && currentUser !== "") {    
      if (isTimedOut) {
        //this.handleLogout();
          //this.props.history.push('/');
      } else {
        this.setState({showModal: true})
        this.idleTimer.reset();
        this.setState({isTimedOut: true})
      }
    }
    
  }
  handleClose() {
    this.setState({showModal: false})
  }

  handleLogout() {
    this.setState({showModal: false})
    //this.props.history.push('/')
    window.localStorage.setItem("AUTHDATA", "");
    window.location.href = "/";
  }

  createReportUserMenu() {
    this.menu = [
      {
        label: "Reports",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "Reports",
            icon: "pi pi-fw pi-file",
            command: () => {
              this.props.history.push( "/reports");
            }
          }
        ]
      }
    ];
  }

  createAdminMenu() {
    this.menu = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        command: () => {
          this.props.history.push("/home");
        }
      },
      {
        label: "Reports",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "Reports",
            icon: "pi pi-fw pi-file",
            command: () => {
              this.props.history.push("/reports");
            }
          },          
        ]
      },
      {
        label: "On Demand Data Acquisation",
        icon: "pi pi-fw pi-id-card",
        command: () => {
          this.props.history.push("/ondemandreports");
        }
      },
      {
        label: "Manage Users",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Users List",
            icon: "pi pi-fw pi-users",
            command: () => {
              this.props.history.push("/manageusers");
               
            }
          } 
        ]
      },
      {
        label: "Meter On Board",
        icon: "pi pi-fw pi-calendar-minus",
        items: [
          {
            label: "Add New Meter",
            icon: "pi pi-fw pi-calendar-minus",
            command: () => {
              this.props.history.push("/newdevice");
            }
          },{
            label: "Assign Meter",
            icon: "pi pi-fw pi-calendar-minus",
            command: () => {
              this.props.history.push("/devices/assign");
            }
          },{
            label: "Activate Meter",
            icon: "pi pi-fw pi-calendar-minus",
            command: () => {
              this.props.history.push("/devices/activate");
            }
          },
          {
            label: "Meter Consumers",
            icon: "pi pi-fw pi-calendar-minus",
            command: () => {
              this.props.history.push("/consumers");
            }
          },
          {
            label: "Bulk Upload",
            icon: "pi pi-fw pi-calendar-minus",
            command: () => {
              this.props.history.push("/bulkupload");
            }
          }

        ]
      },
      {
        label: "Scheduler Configuration",
        icon: "pi pi-fw pi-calendar-minus",
        command: () => {
          this.props.history.push("/jobschedule");
        }
      },
      {
        label: "Simulator",
        icon: "pi pi-fw pi-calendar-minus",
        command: () => {
          this.props.history.push( "/simulator");
        }
      },
      {
        label: "Push Setup",
        icon: "pi pi-fw pi-calendar-minus",
        command: () => {
          this.props.history.push( "/push");
        }
      },
      {
        label: "Static UI",
        icon: "pi pi-fw pi-calendar-minus",
        items: [
          {
            label: "Home",
            icon: "pi pi-fw pi-calendar-minus",
            command: () => {
              this.props.history.push( "/staticui/dashboard");
            }
          },
          {
            label: "Pre Paid Meter",
            icon: "pi pi-fw pi-calendar-minus",
            items: [                 
              {
                label: "Dashboard",
                icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                  this.props.history.push( "/staticui/admindashboard");
                }
              },
              {
                label: "Configuration",
                icon: "pi pi-fw pi-calendar-minus",
                items: [                 
                  {
                    label: "Customer",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/addconsumer")
                    }
                  },
                  {
                    label: "Meter",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/addmeter");
                    }
                  },
                  {
                    label: "View Meter",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/viewmeter/all");
                    }
                  },
                {
                    label: "AdminControl",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                        this.props.history.push( "/staticui/AdminControl");
                    }
          },
          {
            label: "SearchadminControl",
            icon: "pi pi-fw pi-calendar-minus",
            command: () => {
              this.props.history.push( "/staticui/Searchadmincontrol");
            }
          } 
                ]
              },              
              {
                label: "Reports",
                icon: "pi pi-fw pi-calendar-minus",
                items: [                 
                  {
                    label: "All Customer",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/allcustomer");
                    }
                  },
                  {
                    label: "Monthly Cons",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/monthlyconsumption");
                    }
                  },
                  {
                    label: "Active",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/activecustomer");
                    }
                  },
                  {
                    label: "	In Active",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/inactivecustomer");
                    }
                  }
                ]
              },              
              {
                label: "Setting",
                icon: "pi pi-fw pi-calendar-minus",
                items: [                 
                  {
                    label: "Control",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/controls");
                    }
                  },
                  {
                    label: "Maintenance",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/monthlymaintenance");
                    }
                  },
                  {
                    label: "Status",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/settingstatus");
                    }
                  },
                  {
                    label: "Report",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/settingreport");
                    }
                  }
                ]
              },              
              {
                label: "Billing",
                icon: "pi pi-fw pi-calendar-minus",
                items: [                 
                  {
                    label: "Generate",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/billinggenerate");
                    }
                  },
                  {
                    label: "Status",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/billinggeneratestatus");
                    }
                  },
                  {
                    label: "MIS",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/createinsidentreport");
                    }
                  },
                  {
                    label: "Report",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/billingreport");
                    }
                  }
                ]
              },              
              {
                label: "Monitor",
                icon: "pi pi-fw pi-calendar-minus",
                items: [                 
                  {
                    label: "Scheduler",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/createinsidentreport");
                    }
                  },
                  {
                    label: "Service",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/createinsidentreport");
                    }
                  },
                  {
                    label: "Non Configure",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/createinsidentreport");
                    }
                  } 
                ]
              },
              {
                label: "Payment",
                icon: "pi pi-fw pi-calendar-minus",
                items: [                 
                  {
                    label: "History",
                    icon: "pi pi-fw pi-calendar-minus",
                    command: () => {
                      this.props.history.push( "/staticui/createinsidentreport");
                    }
                  }
                ]
                }
 
            ]
          
        },
          {
            label: "Meter On Board",
            icon: "pi pi-fw pi-calendar-minus",
            items: [
              {
                label: "Bulk Upload Meter",
                icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                  this.props.history.push( "/staticui/bulkuploadmeters");
                }
              },{
                label: "360 Degree View",
                icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                  this.props.history.push( "/staticui/meter360view/IN1007137");
                }
              }
            ]
            },
             {
              label: "Incident Management",
              icon: "pi pi-fw pi-calendar-minus",
              items: [                 
                {
                  label: "Create",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meterinsident");
                  }
                },
                {
                  label: "Search",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meterinsidentsearch");
                  }
                }
              ]
            },           
            {
             label: "Process Scheduler",
             icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                   this.props.history.push( "/staticui/processscheduler");
                 }
               
           },
           
              {
             label: "User Management",
             icon: "pi pi-fw pi-calendar-minus",
             items: [   
              {
                label: "icare Unit",
                icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                  this.props.history.push( "/adminstaticui/icareunits");
                }
              },  
              {
                label: "Operating Unit",
                icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                  this.props.history.push( "/adminstaticui/operatingunits");
                }
              },              
               {
                 label: "Role",
                 icon: "pi pi-fw pi-calendar-minus",
                 command: () => {
                   this.props.history.push( "/adminstaticui/role");
                 }
               },
               {
                 label: "Permission",
                 icon: "pi pi-fw pi-calendar-minus",
                 command: () => {
                   this.props.history.push( "/adminstaticui/permission");
                 }
               },
               {
                 label: "Users",
                 icon: "pi pi-fw pi-calendar-minus",
                 command: () => {
                   this.props.history.push( "/adminstaticui/userlists");
                 }
               }
             ]
           },
           {
             label: "Workflow Management",
             icon: "pi pi-fw pi-calendar-minus",
             items: [   
              {
                label: "WF Conditions",
                icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                  this.props.history.push( "/adminstaticui/workflowconditions");
                }
              },  
              {
                label: "WF Condition Value",
                icon: "pi pi-fw pi-calendar-minus",
                command: () => {
                  this.props.history.push( "/adminstaticui/workflowconditionvalues");
                }
              },              
               {
                 label: "Workflow",
                 icon: "pi pi-fw pi-calendar-minus",
                 command: () => {
                   this.props.history.push( "/adminstaticui/workflows");
                 }
               },
               {
                 label: "Workflow Actors",
                 icon: "pi pi-fw pi-calendar-minus",
                 command: () => {
                   this.props.history.push( "/adminstaticui/workflowsactors");
                 }
               },
               {
                 label: "Workflow Stage",
                 icon: "pi pi-fw pi-calendar-minus",
                 command: () => {
                   this.props.history.push( "/adminstaticui/workflowstage");
                 }
               },
               {
                 label: "Workflow Task",
                 icon: "pi pi-fw pi-calendar-minus",
                 command: () => {
                   this.props.history.push( "/adminstaticui/workflowtask");
                 }
               }
             ]                           
           },
            {
              label: "Reports",
              icon: "pi pi-fw pi-calendar-minus",
              items: [                 
                {
                  label: "Incident Report",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/createinsidentreport");
                  }
                },
                {
                  label: "Frequent Incident",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/frequentinsidentreport");
                  }
                },
                {
                  label: "Create Meter Report",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/createreport");
                  }
                }
                /*, 
                {
                  label: "Basic Meter Info",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meterbasicinformationReport");
                  }
                },
                {
                  label: " Instant Info ",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meterinstantinformationreport");
                  }
                },
                {
                  label: " Billing Info ",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meterbillinginformationreport");
                  }
                },
                {
                  label: "Daily Load Info ",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meterdailyloadinformationreport");
                  }
                },
                {
                  label: "Block Load Info ",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meterblockloadinformationreport");
                  }
                }
                ,
                {
                  label: "Name Plate Info ",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/meternameplateinformationreport");
                  }
                },
                {
                  label: "Tamper Event Info ",
                  icon: "pi pi-fw pi-calendar-minus",
                  command: () => {
                    this.props.history.push( "/staticui/metereventinformationreport");
                  }
                }

                */
              ]
              
               
            },

            
            {
              label: "Product Configuration",
              icon: "pi pi-fw pi-calendar-minus",
              command: () => {
                this.props.history.push( "/staticui/searchcommondetails");
              }
            
          }
          

        ]
      }
    ]
    }
  
  createStaticMenu() {
    this.menu = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        command: () => {
          this.props.history.push( "/staticui/dashboard");
        }
      },
      {
        label: "Reports",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "Reports",
            icon: "pi pi-fw pi-file",
            command: () => {
              this.props.history.push( "/reports");
            }
          },
          {
            label: "On Demand Report",
            icon: "pi pi-fw pi-id-card",
            command: () => {
              this.props.history.push( "/ondemandreports");
            }
          }
        ]
      }
    ]
  }
  componentWillMount() {
    var currentUser = getCurrentUser();
    console.log(currentUser);
    if (currentUser !== null) {
      this.setState({UserDisplayName: (currentUser.userProfile.first_name +" " +currentUser.userProfile.last_name)});
    }
    const loggedInString = localStorage.getItem("AUTHDATA");

    if (loggedInString) {
      console.log("loggedInString" + loggedInString);
      const loggedInData = JSON.parse(loggedInString);
      this.setState({ isLogged: loggedInData.loggedStatus == 1 });
      console.log(
        "roleName" + loggedInData.userProfile.userFkId.roleFkId.roleName
      );
      var role = loggedInData.userProfile.userFkId.roleFkId.roleName;
      this.setState({ role: role });
      console.log("this.customstate.role " + this.state.role);
      if (role === "ADMIN") {
        this.createAdminMenu();
      } else if (role === "REPORT_USER") {
        this.createReportUserMenu();
      }else if (role === "STATIC_UI") {
        this.createStaticMenu();
      }
    } else {
      this.setState({ isLogged: false });
    }
  }

  onWrapperClick(event: React.MouseEvent) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event: React.MouseEvent) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  isDesktop(): boolean {
    return window.innerWidth > 1024;
  }

  onSidebarClick(event: React.MouseEvent) {
    this.menuClick = true;
    setTimeout(() => {
      if (this.layoutMenuScroller) {
        // Workaround because file ScrollPanel.d.ts is missing moveBar() function definition
        (this.layoutMenuScroller as any)["moveBar"]();
        //                this.layoutMenuScroller.moveBar()
      }
    }, 500);
  }

  onMenuItemClick(event: { originalEvent: Event; item: MenuItem }) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }

  public render() {
    let wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });

    let sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark"
    });
    


    return (
      <React.Fragment>
          
        <Switch>
          {!this.state.isLogged && (
            <div className="layout-main">
              <Route path="/" exact={true} component={LoginPage} />
            </div>
          )}
          {this.state.isLogged && (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
              <AppTopbar onToggleMenu={this.onToggleMenu} />
              <div className={sidebarClassName} onClick={this.onSidebarClick}>
                <ScrollPanel
                  ref={el => (this.layoutMenuScroller = el)}
                  style={{ height: "100%" }}
                >
                  <div className="layout-sidebar-scroll-content">
                    <div className="layout-logo">
                      <h2>Meter UI</h2>

                      <div className="layout-profile"></div>
                      <AppMenu
                        model={this.menu}
                        onMenuItemClick={this.onMenuItemClick}
                      />
                    </div>
                  </div>
                </ScrollPanel>
              </div>
              <div className="layout-main">
                <Route path="/home" exact={true} component={Dashboard} />
                <Route path="/manageusers" exact={true} component={Users} />
                <Route path="/createuser" exact={true} component={CreateUser} />
                <Route
                  path="/jobschedule"
                  exact={true}
                  component={JobSchedule}
                />
                <Route path="/reports" exact={true} component={Report} />
                <Route
                  path="/ondemandreports"
                  exact={true}
                  component={ReportOnDemand}
                />
                <Route path="/devices/:id" exact={true} component={Devices} />
                <Route path="/newdevice" exact={true} component={NewDevice} />
                <Route path="/consumers" exact={true} component={Consumers} />
                { <Route path="/simulator" exact={true} component={Simulator} /> }
                 <Route path="/bulkupload" exact={true} component={BulkUpload} />
          <Route path="/threesixty/:id" exact={true} component={ThreeSixty} />

                <Route path="/staticui/meter360view/:id" exact={true} component={View360Degree} />
                <Route path="/staticui/dashboard" exact={true} component={DashboardStatic} />
                <Route path="/staticui/bulkuploadmeters" exact={true} component={BulkUploadMeters} />
                <Route path="/staticui/meterinsident" exact={true} component={MeterInsident} />
                <Route path="/staticui/meterinsidentsearch" exact={true} component={MeterInsidentSearch} />
                <Route path="/staticui/searchcommondetails" exact={true} component={SearchCommonDetails} />
                <Route path="/staticui/createinsidentreport" exact={true} component={CreateInsidentReport} />
                <Route path="/staticui/frequentinsidentreport" exact={true} component={FrequentInsidentReport} />
                <Route path="/staticui/meterbasicinformationreport" exact={true} component={MeterBasicInformationReport} />
                <Route path="/staticui/meterinstantinformationreport" exact={true} component={MeterInstantInformationReport} />
                <Route path="/staticui/meterbillinginformationreport" exact={true} component={MeterBillingInformationReport} />
                <Route path="/staticui/meterdailyloadinformationreport" exact={true} component={MeterDailyLoadInformationReport} />
                <Route path="/staticui/roles" exact={true} component={Roles} />
                <Route path="/staticui/permissions" exact={true} component={Permissions} />
                <Route path="/staticui/admindashboard" exact={true} component={AdminDashboard} />
                <Route path="/staticui/addconsumer" exact={true} component={AddConsumer} />
                <Route path="/staticui/addmeter" exact={true} component={AddMeter} />
                <Route path="/staticui/allcustomer" exact={true} component={AllCustomer} />
                <Route path="/staticui/monthlyconsumption" exact={true} component={MonthlyConsumption} />
                <Route path="/staticui/inactivecustomer" exact={true} component={InActiveCustomer} />
                <Route path="/staticui/activecustomer" exact={true} component={ActiveCustomer} />
                <Route path="/staticui/controls" exact={true} component={Controls} />
                <Route path="/staticui/monthlymaintenance" exact={true} component={MonthlyMaintenance} />
                <Route path="/staticui/settingstatus" exact={true} component={SettingStatus} />
                <Route path="/staticui/settingreport" exact={true} component={SettingStatus} />
                <Route path="/staticui/billinggenerate" exact={true} component={BillingGenerate} />
                <Route path="/staticui/billinggeneratestatus" exact={true} component={BillingGenerateStatus} />
                <Route path="/staticui/billingreport" exact={true} component={BillingReport} />
                <Route path="/staticui/paymenthistory" exact={true} component={PaymentHistory} />
              
                <Route path="/adminstaticui/icareunits" exact={true} component={Icareunits} />
                <Route path="/adminstaticui/operatingunits" exact={true} component={Operatingunits} />
                <Route path="/adminstaticui/permission" exact={true} component={Permission} />
                <Route path="/adminstaticui/role" exact={true} component={Role} />
                <Route path="/adminstaticui/userlists" exact={true} component={Userlists} />
                <Route path="/adminstaticui/workflowconditions" exact={true} component={Workflowconditions} />
                <Route path="/adminstaticui/workflowconditionvalues" exact={true} component={Workflowconditionvalues} />
                <Route path="/adminstaticui/workflows" exact={true} component={Workflows} />
                <Route path="/push" exact={true} component={PushSetup}/>
                {/* <Route path="/adminstaticui/workflowsactors" exact={true} component={Workflowsactors} /> */}
                {/* <Route path="/adminstaticui/workflowstage" exact={true} component={Workflowstage} />
                <Route path="/adminstaticui/workflowtask" exact={true} component={Workflowtask} /> */}
                <Route path="/adminstaticui/workflowsactors" exact={true} component={Workflowsactors} />  
               <Route path="/adminstaticui/workflowstage" exact={true} component={Workflowstage} />
                <Route path="/adminstaticui/workflowtask" exact={true} component={Workflowtask} />  
                 <Route path="/staticui/AdminControl" exact={true} component={AdminControl} />
                <Route path="/staticui/SearchadminControl" exact={true} component={Searchadmincontrol} />
                
                 <Route path="/staticui/viewmeter/:id" exact={true} component={AssignMeter} />
                <Route path="/staticui/meterview/:id" exact={true} component={ViewMeter} />

                <Route path="/staticui/meterblockloadinformationreport" exact={true} component={MeterBlockLoadInformationReport} />
                <Route path="/staticui/meternameplateinformationreport" exact={true} component={MeterNamePlateReport} />
               
                <Route path="/staticui/metereventinformationreport" exact={true} component={MeterEventInformationReport} />
                <Route path="/staticui/processscheduler" exact={true} component={ProcessScheduler} />
                <Route path="/staticui/createreport" exact={true} component={CreateReport} />
              
                
              </div>
            </div>
          )}
        </Switch>
        
      </React.Fragment>
    );
  }
}
const ChildApp = withRouter(App as any);
export default ChildApp;
