import axios from "axios";
import { listenerCount } from "cluster";
import { Http } from "../Http";
export class PasswordresetApi {

  static list=new Array();


    public static savepasswordreset(input: any) {
        console.log(input);
       // alert("saverole");
        var obj=JSON.stringify(input);
        var url="api/resetpassword";
        // if(input.jobId>0 ){
        //   //var url="api/updateSchedulerJobsRepository";
        // }
       
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
            //alert(JSON.stringify(res.status));
            return res;
          }).catch((e: any) => {
            console.log("Error in post" + e);
            return e.response;
          });
        return resultMethod;
}

public static getpasswordbyactcode(input: any) {
    if (input == "") {
      return { data: [] };
    }
   // alert(input);
   // alert("hi");
    var url = "/api/getactcode/" + input;
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
}