import React from 'react'
import FormComponent from './FormComp'
import axios from 'axios'

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
      Division:[],
      Subdiv:[] ,
      Sec:[],
      Town:[],
      ss:[],
      Feeder:[],
      DT:[],
      MF:[],
      CM:[],
      search:[],
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
    this.fetchSearch()
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
  fetchSearch(){
    fetch('/getMeterSearchDetails',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify({
        'circleAutoid':'2'
      })
    }).then(res=>console.log(res.data))
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
  

  handlechange(event){
      const { name, value } = event.target;
      console.log(name, value);
      this.setState({ [name]: value })
      
  }
  
  render(){
      return (
        <>
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
      value={this.state}
              />
              
              </>
        
    )
  }
}


export default FormContainer