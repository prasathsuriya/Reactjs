import axios from "axios";
import { Http } from "../Http";
export class DeviceAPI {
  public static saveNewDevice(input: any) {
    var obj = JSON.stringify(input);
    console.log("New Device " + obj);
    var url = "/api/addmeter";
    if (input.hostName !== null && input.port !== "") {
      url = "/api/addmeter";
      const resultMethod = Http.axios()
        .post(url, obj, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
          }
        })
        .then(res => {
          return res;
        })
        .catch((e: any) => {
          return e.response;
        });
      return resultMethod;
    }
  }


  public static saveMeterLocation(input: any) {
    var obj = JSON.stringify(input);
    console.log("New Device " + obj);
    var url = "/api/saveMeterLocation";
      const resultMethod = Http.axios()
        .post(url, obj, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
          }
        })
        .then(res => {
          return res;
        })
        .catch((e: any) => {
          return e.response;
        });
      return resultMethod;
    
  }

  
  public static activateNewMeter(input: any) {
    var obj = JSON.stringify(input);
    var url = "/api/activateNewMeter";
      const resultMethod = Http.axios()
        .post(url, obj, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
          }
        })
        .then(res => {
          return res;
        })
        .catch((e: any) => {
          return e.response;
        });
      return resultMethod;
    
  }

  public static getDeviceList(input: any) {
    var url = "/api/meterprofileStatus/1";
    if (input == "") {
      return { data: [] };
    }

    const resultMethod = Http.axios()
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res;
      })
      .catch((e: any) => {
        return e.response;
      });
    return resultMethod;
  }

  public static getNumberOfMeterCount(input: any) {
    var url = "/api/getNumberOfMeterCount/" + input;
    if (input == "") {
      return { data: [] };
    }

    const resultMethod = Http.axios()
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res;
      })
      .catch((e: any) => {
        return e.response;
      });
    return resultMethod;
  }

  public static getActiveMeterCount(input: any) {
    var url = "/api/getActiveMeterCount/" + input;
    if (input == "") {
      return { data: [] };
    }

    const resultMethod = Http.axios()
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res;
      })
      .catch((e: any) => {
        return e.response;
      });
    return resultMethod;
  }

  public static getAllMeterDetails(input: any) {
    if (input == "") {
      return { data: [] };
    }
   // alert("getAllMeterDetails");
   // alert(JSON.stringify(input));
        var url = "";
        if(input.deviceType === "all")
        url = "/api/getAllMeterDetails/"+input.tenantId ;     
        else if(input.deviceType === "active")
        url = "/api/getActiveMeterDetails/"+input.tenantId ;    
        else if(input.deviceType === "assign")
        url = "/api/getAssignMeterDetails/"+input.tenantId ;    
        else if(input.deviceType === "activate")
        url = "/api/getActivateMeterDetails/"+input.tenantId ;    
        const resultMethod = Http.axios()
          .get(url, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            }
          })
          .then(res => {
            return res;
          })
          .catch((e: any) => {
            return e.response;
          });
        return resultMethod;
      }

  public static getAllProfiless(input: any) {
    if (input == "") {
      return { data: [] };
    }
    var url = "/api/getAllMeterDetails/" + input.tenantId;
    const resultMethod = Http.axios()
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res;
      })
      .catch((e: any) => {
        return e.response;
      });
    return resultMethod;
  }

  public static getMeterDetails(input: any) {
    if (input == "") {
      return { data: [] };
    }
    var url = "/api/meterinfo/" + input;
    const resultMethod = Http.axios()
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res;
      })
      .catch((e: any) => {
        return e.response;
      });
    return resultMethod;
  }

  public static getThreeSixtyInfo(input: any) {
    if (input == "") {
      return { data: [] };
    }
    var url = "/api/getThreeSixtyDegreeProfile/" + input;
    const resultMethod = Http.axios()
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res;
      })
      .catch((e: any) => {
        return e.response;
      });
    return resultMethod;
  }

  

  public static getGraphData(input: any) {
    if (input == "") {
      return { data: [] };
    }
    var url = "/api/getDashboard/" + input;
    const resultMethod = Http.axios()
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        return res;
      })
      .catch((e: any) => {
        return e.response;
      });
    return resultMethod;
  }
  public static getGraphData_old(graphType: any) {
    if (graphType <= 0) {
      return { data: [] };
    }
    if (graphType === 1) {
      return {
        loadGraphData: {
          labels: [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23
          ],
          datasets: [
            {
              label: "01/02/2020",
              data: [
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                12,
                14,
                10
              ],
              fill: false,
              borderColor: "#007be5"
            },
            {
              label: "02/02/2020",
              data: [
                80,
                81,
                56,
                55,
                40,
                12,
                14,
                10,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                65,
                59
              ],
              fill: false,
              borderColor: "#FFCC80"
            },
            {
              label: "03/02/2020",
              data: [
                40,
                65,
                59,
                80,
                81,
                56,
                55,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                12,
                14,
                10
              ],
              fill: false,
              borderColor: "#66BB6A"
            },
            {
              label: "04/02/2020",
              data: [
                56,
                55,
                40,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                65,
                65,
                59,
                80,
                81,
                59,
                80,
                81,
                56,
                55,
                40,
                12,
                14,
                10
              ],
              fill: false,
              borderColor: "#66BB33"
            },
            {
              label: "05/02/2020",
              data: [
                56,
                55,
                40,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                12,
                14,
                65,
                59,
                80,
                81,
                56,
                55,
                40,
                65,
                59,
                80,
                81,
                10
              ],
              fill: false,
              borderColor: "#66BB44"
            }
          ]
        },
        dailyGraphData: {
          labels: [
            "01/02/2020",
            "02/02/2020",
            "03/02/2020",
            "04/02/2020",
            "05/02/2020"
          ],
          datasets: [
            {
              label: "01/02/2020",
              data: [1000, 2000, 1000.5, 3000, 900],
              fill: false,
              borderColor: "#66BB99"
            }
          ]
        }
      };
    }
    if (graphType === 2) {
      return {};
    }

    //Validate the input and call the appropriate api
    //return [];
  }
}
