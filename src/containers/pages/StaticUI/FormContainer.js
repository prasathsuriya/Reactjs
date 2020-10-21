import React from 'react'
import "./App.css"
import axios from 'axios'
import FormComponent from "./FormComponent"

class FormContainer extends React.Component{
  constructor(){
    super()
    this.state={
      body:{
        "circleAutoid":"2"
      },
      Savedfilter:"",
      Circlename:"",
      Divisionname:"",
      Subdivision:"",
      Section:"",
      Townname:"",
      SSname:"",
      Feedername:"",
      Dtname:"",
      Manufacturername:"",
      Metertype:"",
      YearofManufacture:"",
      Metercategory:"",
      Filmwareversion:"",
      Communicated:"",
      Fromdate:"",
      Todate:"",
      Metergroup:"",
      Meterserialnumber:"",
      Circle: [],
      Cir:[],
      Division:[],
      Subdiv:[] ,
      Sec:[],
      Town:[],
      ss:[],
      Feeder:[],
      DT:[],
      MF:[],
      CM:[],
      MN:[],
      Yr:[],
      MC:[],
      FW:[],
      MG:[],
      MSN:[],
      search:[],
      h:'',
      on:false,
      on1:false,
      on2:false,
      table:false
    }
    this.handlechange=this.handlechange.bind(this)
  }
  componentDidMount() {
    axios.get(`/getAllCircleName`)
    .then(x => {
      console.log(x);
      this.setState({Circle: x.data});
    });
    this.fetchdiv()
    this.fetchSubdiv()
    this.fetchSection()
    this.fetchTown()
    this.fetchSs()
    this.fetchFeeder()
    this.fetchDt()
    this.fetchMetermanufacture()
    this.fetchcommunicate()
    this.fetchyrofmanufacture()
    this.fetchmetergroup()
    this.fetchautoid()
  }
  fetchdiv(){
    axios.get(`/getAllDivisionName`)
    .then(x => {
      console.log(x);
      this.setState({Division: x.data});
    });
  }
  fetchSubdiv(){
    axios.get(`/getAllSubDivisionName`)
    .then(x => {
      console.log(x);
      this.setState({Subdiv: x.data});
    });
  }
  fetchSection(){
    axios.get(`/getAllSectionName`)
    .then(x => {
      console.log(x);
      this.setState({Sec: x.data});
    });
  }
  fetchTown(){
    axios.get(`/getTownDetails`)
    .then(x => {
      console.log(x);
      this.setState({Town: x.data});
    });
  }
  fetchSs(){
    axios.get(`/getSubStationdetails`)
    .then(x => {
      console.log(x);
      this.setState({ss: x.data});
    });
  }
  fetchFeeder(){
    axios.get(`/getFeederdetails`)
    .then(x => {
      console.log(x);
      this.setState({Feeder: x.data});
    });
  }
  fetchDt(){
    axios.get(`/getTransformerdetails`)
    .then(x => {
      console.log(x);
      this.setState({DT: x.data});
    });
  }
  fetchMetermanufacture(){
    axios.get(`/getManufactureDetails`)
    .then(x => {
      console.log(x);
      this.setState({MF: x.data});
    });
  }
  fetchcommunicate(){
    axios.get(`/getCommonNameByMeterType?commonName=meter_type`)
    .then(x => {
      console.log(x);
      this.setState({CM: x.data});
    });
  }
  fetchyrofmanufacture(){
    axios.get(`/getMeterMfDetailsByMfYear?mfYear=1994`)
    .then(x => {
      console.log(x);
      this.setState({Yr: x.data});
    });
  }
  fetchmetergroup(){
    axios.get(`/getAllMeterGroup`)
    .then(x => {
      console.log(x);
      this.setState({MG: x.data});
    });
  }
  fetchautoid(){
    axios.get(`/getAllCircleName`)
    .then(x => {
      console.log(x);
      this.setState({Cir: x.data[0]});
      this.setState({h:this.state.Cir.autoId})
      console.log(this.state.h)
    })
  }
  fetchSearch()
  {
    let d=localStorage.getItem('data')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'circleAutoid':d
      })
  };
  fetch('/getMeterSearchDetails', requestOptions)
      .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
          this.setState({search:data})
          console.log(data);
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
  }
  
  fCirclename=()=>{
    return this.state.Circle.map(s=>s.circleName.split('\n'))
  }
  fDivname=()=>{
    return this.state.Division.map(s=>s.divisionName.split('\n'))
  }
  fSubDivname=()=>{
    return this.state.Subdiv.map(s=>s.subdivisionName.split('\n'))
  }
  fSecname=()=>{
    return this.state.Sec.map(s=>s.sectionName.split('\n'))
  }
  fTownname=()=>{
    return this.state.Town.map(s=>s.townName.split('\n'))
  }
  fSS=()=>{
    return this.state.ss.map(s=>s.subStationShortName)
  }
  fFeedername=()=>{
    return this.state.Feeder.map(s=>s.feederName.split('\n'))
  }
  fDtname=()=>{
    return this.state.DT.map(s=>s.transformerName.split('\n'))
  }
  fMname=()=>{
    return this.state.MF.map(s=>s.manufactureName.split('\n'))
  }
  fComm=()=>{
    return this.state.CM.map(s=>s)
  }

  fyear=()=>{
    return this.state.Yr.map(s=>s)
  }
  
  fmetergrp=()=>{
    return this.state.MG.map(s=>s.groupName.split('\n'))
  }
  
  toggle=()=>{
    this.setState({
      on:!this.state.on
    })
  }
  toggle1=()=>{
    this.setState({
      on1:!this.state.on1
    })
  }
  toggle2=()=>{
    this.setState({
      table:!this.state.table
    })
  }
  toggle3=()=>{
    this.setState({
      on2:!this.state.on2
    })
  }

  handlechange(event){
    this.fetchSearch()
    this.setState({
      table:!this.state.table
    })
  }
  
  render(){
    return(
      <FormComponent 
      handlechange={this.handlechange}
      data={this.state}
      Circle_name={this.fCirclename()}
      Division_name={this.fDivname()}
      Sub_divname={this.fSubDivname()}
      Section_name={this.fSecname()}
      Town_name={this.fTownname()} 
      ss_name={this.fSS()}
      Feeder_name={this.fFeedername()}
      Dt_name={this.fDtname()}
      M_name={this.fMname()}
      Comm={this.fComm()}
      year={this.fyear()}
      mg={this.fmetergrp()}
      toggle={this.toggle}
      toggle1={this.toggle1}
      toggle2={this.toggle2}
      toggle3={this.toggle3}
     />
    )
  }
}


export default FormContainer