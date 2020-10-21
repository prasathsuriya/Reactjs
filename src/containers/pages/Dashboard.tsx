import React, { useState, Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import { saveLogin } from "../../store/actions/Login";
import {
  getNoOfDevicees,
  getActiveMeterCount,
  getLoadGraphData
} from "../../store/actions/NewDevice";
import { getCurrentUser } from "../../store/selectors/Accounts";
import { RouteComponentProps } from "react-router";
import { Chart } from "primereact/chart";
import moment from "moment";

interface Icreate {
  dispatch: Dispatch<any>;
  loginData: any;
  props: RouteComponentProps;
  deviceFormData: any;
  loadGraphData: any;
  dailyGraphData: any;
}

const Dashboard: React.FC<Icreate> = ({
  dispatch,
  deviceFormData,
  loadGraphData,
  dailyGraphData
}) => {
  useEffect(() => {
    var data = getCurrentUser();
    
  }, []);

  const graphOptions = {
    responsive: true,
    hoverMode: "index",
    stacked: false,
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1"
        }
      ]
    }
  };

  const initialFormState = {
    emailid: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    role: ""
  };
  const [user, setUser] = useState(initialFormState);
  const [noOfMeterCOunt, setMeterCount] = useState(0);

  if (
    noOfMeterCOunt === 0 &&
    deviceFormData.numberOfDevices !== 0 &&
    !deviceFormData.isLoading
  ) {
    setMeterCount(deviceFormData.numberOfDevices);
  }

  const [noOfActiveMeterCOunt, setActiveMeterCount] = useState(0);
  const [totalActiveJobs, settotalActiveJobsCount] = useState(0);
  const [liveMeters, setliveMetersCount] = useState(0);
  if (
    noOfActiveMeterCOunt === 0 &&
    deviceFormData.activeDevices !== 0 &&
    !deviceFormData.isLoading
  ) {
    setActiveMeterCount(deviceFormData.activeDevices);
  }

  //Hanld the graph data
  const [isPageLodaed, setPageLoaded]=useState(false);
  const [hourlyGrapgData, setHourlyGrapgData]=useState();
  const [dailyGrapgData, setDailyGrapgData]=useState();
  const [monthlyGrapgData, setMonthlyGrapgData]=useState();
  const borders=["#007be5", "#FFCC80", "#66gB6A", "#66BB33", "#ef6262","#66BB99","#0388E5"];
     

  return (
    <div className="p-grid p-fluid dashboard">
      <div className="p-col-12 p-lg-3">
        <div className="card summary">
          <span className="title">Total Meters</span>
          <span className="detail">Total Number of meters</span>
          <span className="count visitors">
            <a href="/devices/all">{noOfMeterCOunt}</a>
          </span>
        </div>
      </div>
      <div className="p-col-12 p-lg-3">
        <div className="card summary">
          <span className="title">Active Meters</span>
          <span className="detail">Number of active meters</span>
          <span className="count visitors">
            <a href="/devices/active">{noOfActiveMeterCOunt}</a>
          </span>
        </div>
      </div>
      <div className="p-col-12 p-lg-3">
        <div className="card summary">
          <span className="title">Jobs</span>
          <span className="detail">Number of jobs</span>
          <span className="count purchases">{totalActiveJobs}</span>
        </div>
      </div>
      <div className="p-col-12 p-lg-3">
        <div className="card summary">
          <span className="title">Live Meters</span>
          <span className="detail">Number of live meters</span>
          <span className="count revenue">{liveMeters}</span>
        </div>
      </div>
      <div className="p-col-12 p-md-6">
        <div className="card summary">
          <span className="title">Average Voltage - Last 5 days</span>
          <Chart type="line" data={hourlyGrapgData} options={graphOptions} />
        </div>
      </div>
      <div className="p-col-12 p-md-6">
        <div className="card summary">
          <span className="title">Average Energy - Last 5 days</span>
          {dailyGrapgData && (
            <Chart type="line" data={dailyGrapgData} options={graphOptions} />
          )}
        </div>
      </div>
      <div className="p-col-12 p-md-6">
        <div className="card summary">
          <span className="title">Monthly Average Voltage - Last 5 Months</span>
          {monthlyGrapgData && (
            <Chart type="bar" data={monthlyGrapgData} options={graphOptions} />
          )}
        </div>
      </div>
    </div>
  );
};


export default (Dashboard);
