import axios from "axios";
import { listenerCount } from "cluster";
import { Http } from "../Http";
export class jobscheduleAPI {

  static list=new Array();

  
  public static  getJobschedule(input: any){

    var url = "api/schedulerJobsRepository/" + input;
    if (input == "") {
      return { data: [] };
    }

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
  
    // var list=new Array();

    // if(list.length>0)
    // return list;
    // else{

    //   const scheduleData={
    //     id:1,
    //     profile:"", 
    //     year:new Date().getFullYear(),
    //     month: new Date().getMonth(),
    //     seconds:new Date().getSeconds(),
    //     week:0,
    //     date: new Date().getDay(),
    //     hour:new Date().getHours(),
    //     minitues:new Date().getMinutes(),
    // };
    // list=new Array();
    //   list.push(scheduleData);
    //   scheduleData.id=scheduleData.id+1;
    //   list.push(scheduleData);
    //   scheduleData.id=scheduleData.id+1;
    //   list.push(scheduleData);
    //   scheduleData.id=scheduleData.id+1;
    //   list.push(scheduleData);
    //   scheduleData.id=scheduleData.id+1;
    //   list.push(scheduleData);
    //   return {data:list};
    // }
  }

    public static saveJobschedule(input: any) {
        console.log(input);
        var obj=JSON.stringify(input);
        var url="api/saveSchedulerJobsRepository";
        if(input.jobId>0 ){
          var url="api/updateSchedulerJobsRepository";
        }
       
        const resultMethod = Http.axios().post(url, obj,
          {
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "*",
              "Access-Control-Allow-Headers": "*"
            }
          })
          .then(res => {
            console.log("Response in post" + res);
            return res;
          }).catch((e: any) => {
            console.log("Error in post" + e);
            return e.response;
          });
        return resultMethod;
}

public static DeleteJobschedule(input: any) {
  return {data: "ture"};
}
}