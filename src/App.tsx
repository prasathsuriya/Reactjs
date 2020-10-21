/*global google*/
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
  LoginPage, ResetpasswordPage, PasswordchangePage,
  CheckingPage ,
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
 SelfDevice,
   Createticket,
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
  Aarolespermission,
  AdminDashboard,
  AddConsumer,
  AddMeter,
  AllCustomer,
  MonthlyConsumption,
  ActiveCustomer,
  InActiveCustomer,
  Controls,
  MonthlyMaintenance,
  Passwordpolicy,
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
  Commondetails,
    Workflowsactors,
    Ticketsubcategory,
   Workflowstage,
   Workflowtask,
   AssignMeter,
   ViewMeter,
   showtickets,
   MeterBlockLoadInformationReport,
   MeterNamePlateReport,
   MeterEventInformationReport,
   ProcessScheduler,
   CreateReport,
   MeterCredentials,
   RolePermissionMap,
   Rcreporting,
   ViewRawData,
  Newshowticket,
  Ticketcategory,
  Newmetersearch,
  Metersearch,
  Newviewmeter,
   Aaroles,
   Aapermissions,
   Newmeterthreesixty,
   setPassword,
   Newactualblockload,
   Newactualinstant,
   Newactualbilling,
   Newactualnameplate,
   Newactualtamperevent,
   Metermap,
   Welcome,
   Metersave,
   Meterlifecyclereport,
   Meterdate,
   Actualblocksearch,
   Powerfactor,
   Averagevoltage
  
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
import Newactualdailyload from "./containers/pages/StaticUI/Newactualdailyload";
import NewactualNameplate from "./containers/pages/StaticUI/NewactualNameplate";
//import { IdleTimeOutModal } from "./IdleTimeOutModal";
  
interface IAppProps {
}
interface IAppState {
  //timeout:number,
  showModal: boolean,
  userLoggedIn: boolean,
 // isTimedOut: boolean,
  isloading: boolean,
  staticMenuInactive: boolean,
    overlayMenuActive: boolean,
    mobileMenuActive: boolean,
    isLogged: boolean,
    layoutMode: string,
    layoutColorMode: string,
    UserDisplayName:string,
    role:string,
    
    rolebyid:[],
    rolepermission:[],
    roleid:string,
    Aaroles:string
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
      isLogged: true,
    //  timeout:1000 * 20 * 60,
      showModal: true,
      userLoggedIn: true,
      isloading: true,
     // isTimedOut: false,
      staticMenuInactive: true,
      overlayMenuActive: true,
      mobileMenuActive: true,
      layoutMode: "static",
      layoutColorMode: "dark",
      role: "",
      UserDisplayName: "",

      rolepermission:[],
      rolebyid:[],
      Aaroles:"",
      roleid:""
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
   // this.setState({isTimedOut: false})
  }
 
  _onActive(e) {
  console.log('user is active', e)
  // this.setState({isTimedOut: false})
  }
 
  _onIdle(e) {
    // console.log('user is idle', e)
    // const isTimedOut = this.state.isTimedOut
    // var currentUser = getCurrentUser();
    // console.log(currentUser);
    // if (currentUser !== null && currentUser !== "") {    
    //   if (isTimedOut) {
    //     //this.handleLogout();
    //       //this.props.history.push('/');
    //   } else {
    //     this.setState({showModal: true})
    //     this.idleTimer.reset();
    //     this.setState({isTimedOut: true})
    //   }
    // }
    
  }
  handleClose() {
    this.setState({showModal: false})
  }

  handleLogout() {
    // this.setState({showModal: false})
    // //this.props.history.push('/')
    // window.localStorage.setItem("AUTHDATA", "");
    // window.location.href = "/";
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
          this.props.history.push("/meter/meternewsearch");
        }
      },
      {
        label: "METER SCREENS",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "Search Meter",
            icon: "pi pi-fw pi-file",
            command: () => {
              this.props.history.push("/meter/searchmeter");
            }
          },
          {
            label: "Add Meter",
            icon: "pi pi-fw pi-file",
            command: () => {
              this.props.history.push("/staticui/addmeter");
            }
          },          
        ]
      },
      
    
    
      
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
   

   // alert(file);
   
      
        this.createAdminMenu();
       
  
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
           <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAzmb-yIUociOEymczq8w0Tf_YeRCrj7Y&callback=init"
    async defer></script>
        <Switch>
          {!this.state.isLogged && (
            <div className="layout-main">
              <Route path="/" exact={true} component={LoginPage} />
              <Route path="/resetpassword/:id" exact={true} component={ResetpasswordPage} />
              <Route path="/passwordchange" exact={true} component={PasswordchangePage} />
              <Route path="/checkingpage" exact={true} component={CheckingPage} />
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
                <Route path="/user/manageusers" exact={true} component={Users} />
                <Route path="/user/createuser" exact={true} component={CreateUser} />
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
                <Route path="/showtickets" exact={true} component={showtickets} />
                <Route path="/newdevice" exact={true} component={NewDevice} />
                <Route path="/consumers" exact={true} component={Consumers} />
                <Route path="/selfDevice" exact={true} component={SelfDevice} />
                 <Route path="/bulkupload" exact={true} component={BulkUpload} />
          <Route path="/threesixty/:id" exact={true} component={ThreeSixty} />

                
                <Route path="/push" exact={true} component={PushSetup}/>


                <Route path="/staticui/meter360view/:id" exact={true} component={View360Degree} />
                <Route path="/staticui/dashboard" exact={true} component={DashboardStatic} />
                <Route path="/staticui/commondetails" exact={true} component={Commondetails} />
                <Route path="/staticui/bulkuploadmeters" exact={true} component={BulkUploadMeters} />
                <Route path="/staticui/meterinsident" exact={true} component={MeterInsident} />
                <Route path="/staticui/meterinsidentsearch" exact={true} component={MeterInsidentSearch} />
                <Route path="/staticui/searchcommondetails" exact={true} component={SearchCommonDetails} />
                <Route path="/staticui/createinsidentreport" exact={true} component={CreateInsidentReport} />
                <Route path="/staticui/frequentinsidentreport" exact={true} component={FrequentInsidentReport} />
                <Route path="/staticui/meterbasicinformationreport" exact={true} component={MeterBasicInformationReport} />
                <Route path="/staticui/meterinstantinformationreport" exact={true} component={MeterInstantInformationReport} />
                <Route path="/ticket/newshowticket" exact={true} component={Newshowticket} />
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
                <Route path="/ticket/createticket" exact={true} component={Createticket} />
                <Route path="/staticui/controls" exact={true} component={Controls} />
                <Route path="/staticui/monthlymaintenance" exact={true} component={MonthlyMaintenance} />
                <Route path="/staticui/settingstatus" exact={true} component={SettingStatus} />
                <Route path="/staticui/settingreport" exact={true} component={SettingStatus} />
                <Route path="/staticui/billinggenerate" exact={true} component={BillingGenerate} />
                <Route path="/staticui/billinggeneratestatus" exact={true} component={BillingGenerateStatus} />
                <Route path="/staticui/billingreport" exact={true} component={BillingReport} />
                <Route path="/staticui/paymenthistory" exact={true} component={PaymentHistory} />
                <Route path="/staticui/billingreport" exact={true} component={BillingReport} />
                <Route path="/passwordpolicy" exact={true} component={Passwordpolicy} />
                <Route path="/adminstaticui/addproject" exact={true} component={Icareunits} />
                <Route path="/adminstaticui/addbusinessunits" exact={true} component={Operatingunits} />
                <Route path="/adminstaticui/addpermission" exact={true} component={Permission} />
                <Route path="/adminstaticui/addrole" exact={true} component={Role} />
                <Route path="/adminstaticui/userlists" exact={true} component={Userlists} />
                <Route path="/adminstaticui/workflowconditions" exact={true} component={Workflowconditions} />
                <Route path="/adminstaticui/workflowconditionvalues" exact={true} component={Workflowconditionvalues} />
                <Route path="/adminstaticui/workflows" exact={true} component={Workflows} />
                {/* <Route path="/adminstaticui/workflowsactors" exact={true} component={Workflowsactors} /> */}
                {/* <Route path="/adminstaticui/workflowstage" exact={true} component={Workflowstage} />
                    <Route path="/adminstaticui/workflowsactors" exact={true} component={Workflowsactors} />   */}
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
               <Route path="/staticui/metercredentials" exact={true} component={MeterCredentials} />
                <Route path="/rolemapview" exact={true} component={RolePermissionMap} />
                <Route path="/rcreporting" exact={true} component={Rcreporting} />     
                <Route path="/staticui/viewrawdata" exact={true} component={ViewRawData} />          
                <Route path="/ticket/ticketcategory" exact={true} component={Ticketcategory} />   
                <Route path="/user/aaroles" exact={true} component={Aaroles} />
                  <Route path="/user/aapermissions" exact={true} component={Aapermissions} />
                  <Route path="/user/aarolespermission" exact={true} component={Aarolespermission} />
                  <Route path="/staticui/setpassword" exact={true} component={setPassword} />
                  <Route path="/ticket/ticketsubcategory" exact={true} component={Ticketsubcategory} />
                  <Route path="/checkingpage" exact={true} component={CheckingPage} />
                  <Route path="/meter/newmeterthreesixty/:id" exact={true} component={Newmeterthreesixty} />
                  <Route path="/meter/newviewmeter/:id" exact={true} component={Newviewmeter} />
                  <Route path="/meter/searchmeter" exact={true} component={Newmetersearch} />
                  <Route path="/data/actualblockload" exact={true} component={Newactualblockload} />
                  <Route path="/data/actualinstant" exact={true} component={Newactualinstant} />
                  <Route path="/data/actualdailyload" exact={true} component={Newactualdailyload} />
                  <Route path="/data/actualtamperevent" exact={true} component={Newactualtamperevent} />
                  <Route path="/data/actualNameplate" exact={true} component={Newactualnameplate} />
                  <Route path="/data/actualBilling" exact={true} component={Newactualbilling} />
                  <Route path="/metermap" exact={true} component={Metermap} />
                  <Route path="/welcome" exact={true} component={Welcome} />
                  <Route path="/meter/metersave" exact={true} component={Metersave} />
                  <Route path="/meter/meternewsearch" exact={true} component={Metersearch} />
                  <Route path="/meterlifecyclereport" exact={true} component={Meterlifecyclereport} />
                  <Route path="/meterdate" exact={true} component={Meterdate} />
                  <Route path="/searchblock" exact={true} component={Actualblocksearch} />
                  <Route path="/powerfactor" exact={true} component={Powerfactor} />
                  <Route path="/averagevoltage" exact={true} component={Averagevoltage} />
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
