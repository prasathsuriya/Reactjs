import React, { Component } from 'react'
import axios from 'axios'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
export default class App extends Component {
  constructor(){
    super()
    this.state={
      search:[],
      data1:[
       { "MeterNo": "IN43567",
         "Location Name": "tranformer",
         "Location Id": "1",
          "LocationType": "LTmeter",
        "Division": "south",
         "Circle": "salem",
         "First Communicated": "20-04-2020",
        "Last Communicated": "23-04-2020"
      }, 
        {
          "MeterNo": "IN4322",
          "Location Name": "ghmm",
          "Location Id": "1",
          "LocationType": "LTmeter",
          "Division": "south",
          "Circle": "salem",
          "First Communicated":"20-04-2020",
          "Last Communicated": "23-04-2020"
        },
        {
          "MeterNo": "X125488",
          "Location Name": "211204063-THIRUVALLUVAR NAGAR",
          "Location Id": "TVL",
          "LocationType": "Feeder Meter",
          "Division": "south",
          "Circle": "Trichy",
          "First Communicated": "10-04-2020",
          "Last Communicated": "23-04-2020"
          },
          {
          "MeterNo": "X125487",
          "Location Name": "VELLALAR SS",
          "Location Id": "VELS",
          "LocationType": "DT Meter",
          "Division": "south",
          "Circle": "Chennai",
          "First Communicated": "12-01-2020",
          "Last Communicated": "23-04-2020"
          },
          
          { "MeterNo": "IN43567",
          "Location Name": "VELLALAR",
          "Location Id": "VELS",
          "LocationType": "DT Meter",
          "Division": "Trichy",
          "Circle": "salem",
          "First Communicated": "12-01-2019",
          "Last Communicated": "23-04-2019"
          },
          
          {"MeterNo": "X125488",
          "Location Name": "211204063-THIRUVALLUVAR NAGAR",
          "Location Id": "TVL",
          "LocationType": "Feeder Meter",
          "Division": "south",
          "Circle": "Trichy",
          "First Communicated": "10-02-2020",
          "Last Communicated": "23-04-2020"
          },
          
          {"MeterNo": "X1254890",
          "Location Name": "211204077-THIRUVALLUVAR NAGAR",
          "Location Id": "TVL",
          "LocationType": "Feeder Meter",
          "Division": "south",
          "Circle": "Chennai",
          "First Communicated": "10-01-2020",
          "Last Communicated": "23-04-2020"
          },
          
          
          {"MeterNo": "X125450",
          "Location Name": "211204064-BHARATHY NAGAR",
          "Location Id": "TVL",
          "LocationType": "Feeder Meter",
          "Division": "south",
          "Circle": "salem",
          "First Communicated": "11-11-1019",
          "Last Communicated": "23-04-2020"
          
          },
          
          {
          "MeterNo": "X125451",
          "Location Name": "VELLALAR SS",
          "Location Id": "VELS",
          "LocationType": "DT Meter",
          "Division": "south",
          "Circle": "salem",
          "First Communicated": "14-01-2020",
          "Last Communicated": "20-04-2020"
          },
          
          {
          "MeterNo": "IN43552",
          "Location Name": "VELLALAR",
          "Location Id": "VELS",
          "LocationType": "DT Meter",
          "Division": "south",
          "Circle": "salem",
          "First Communicated": "28-01-2019",
          "Last Communicated": "23-04-2019"
          },
          
          {
          "MeterNo": "X125453",
          "Location Name": "211204069-KAVERI NAGAR",
          "Location Id": "TRI",
          "LocationType": "Feeder Meter",
          "Division": "south",
          "Circle": "Trichy",
          "First Communicated": "16-02-2020",
          "Last Communicated": "23-04-2020"
          }
          
        
        ]
       
    }
  }
  componentDidMount(){
    axios.get(`/getMeterSearchDetailsByCircleId`)
    .then(x => {
      console.log(x);
      this.setState({search: x.data});
    });
  }
  fDtname=()=>{
    console.log(this.state.search)
    return this.state.search.map(s=>s.circleName)
  }
  render(){
    return(
      <div>
         <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
      </div>
    )
  }
}
