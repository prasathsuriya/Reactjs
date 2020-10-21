import React,{ useRef }  from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import {OverlayPanel} from 'primereact/overlaypanel';
import { stringify } from "querystring";
interface AppProps {
  onToggleMenu: React.MouseEventHandler;
  isLogged?: boolean;
}

interface AppState {
  items: Array<{}>;
  userName: string;
  userfirstName: string;
  userSecondName: string;
  role: string;
  userId: string ;
  isAdmin: boolean;
}

export class AppTopbar extends React.Component<AppProps, AppState> {
 private menu!: Menu | null;
  
  constructor(props: AppProps) {
    super(props);
    
    this.state = {
      isAdmin: false,
      userName: "",
      userId: "",
      userfirstName:"",
      userSecondName:"",
      role:"",
      items: [
        {
          icon: "pi pi-fw pi-file",
          items: [
            {
              label1: "",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark"
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video"
                }
              ]
            },
            {
              label: "",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark"
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video"
                }
              ]
            },
            {
              label: "",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark"
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video"
                }
              ]
            },
            {
              label: "",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark"
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video"
                }
              ]
            }
          ]
        }
      ]
    };
  }
  
  componentWillMount() {
    const loggedInString = localStorage.getItem("AUTHDATA");
    if (loggedInString) {
      const loggedInData = JSON.parse(loggedInString);
      console.log(loggedInData);
      if (!loggedInData && loggedInData.loggedStatus == 1) {
        window.localStorage.setItem("AUTHDATA", "");
        //window.location.href = "/";
      }
      
      var currentLocation = window.location.pathname;
      this.setState({
        userName: loggedInData.userProfile.userautoid.personautoid.first_name
      });
      this.setState({
        userSecondName: loggedInData.userProfile.userautoid.personautoid.second_name
      });
      this.setState({
        role: loggedInData.userProfile.roleFkId.roleName
      });
      this.setState({
        userId: loggedInData.userProfile.userautoid.userId
      });
      this.setState({
        isAdmin: loggedInData.userProfile.roleFkId.roleId === 1
      });
    } else {
      window.location.href = "/";
    }
  }

  clickLogout() {

    const loggedInString = localStorage.getItem("AUTHDATA");
    if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    //alert(JSON.stringify(loggedInData.loginhistory.userId));
    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify({ userId: loggedInData.userProfile.userautoid.userId  })
  };
  fetch('http://localhost:8080/api/logout', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ userId: loggedInData.loginhistory.userId }));
    }
  
    window.localStorage.setItem("AUTHDATA", "");
    window.location.href = "/";
// Call Backend method for logout userid 
    

  }

  clickChange() {
   // alert(JSON.stringify(this.state.userId));
    window.location.href = "/staticui/setpassword";
  }

  showmenu(event) {
    if (this.menu) this.menu.toggle(event);
  }

  render() {
    const { isLogged } = this.props;
    return (
      <div className="layout-topbar clearfix">
        <a className="layout-menu-button" onClick={this.props.onToggleMenu}>
          <span className="pi pi-bars" />
        </a>
        <div className="layout-topbar-icons">
        <a
           href="#"
           className="p-menuitem-link"
           title="Settings"
           onClick={this.clickChange} 
          >
            <span
              style={{
                fontSize: "1.0em",
                float: "left",
                margin: "2px 2px 2 2"
              }}
            >
              Settings
            </span>{" "}
          </a>
          <a 
           href="#"
           className="p-menuitem-link"
           title=   {this.state.userName}
          onClick={this.showmenu} >
            {" "}
            <span
              style={{
                fontSize: "1.3em",
                float: "left",
                margin: "1px 0px 0 0"
              }}
            >
              {this.state.userName}

            </span>{" "}
          </a>
          
       


          <a
            href="#"
            className="p-menuitem-link"
            title="Logout"
            onClick={this.clickLogout}
          >
            <span
              className="p-menuitem-icon pi pi-power-off"
              style={{ fontSize: "2em" }}
            ></span>
          </a>
          <span>
            <Menu
              model={this.state.items}
              ref={el => (this.menu = el)}
              popup={true}
              style={{ width: 250, left: 100 }}
            />
          </span>
        </div>
      </div>
    );
  }
}