import axios from "axios";
import { listenerCount } from "cluster";
import { Http } from "../Http";
export class forgotpasswordApi {

  static list=new Array();


    public static saveforgotpassword(input: any) {
        console.log(input);
       // alert("input");
       // alert("saverole");
        var obj=JSON.stringify(input);
        var url="api/passwordreset";
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
            return res;
          }).catch((e: any) => {
            console.log("Error in post" + e);
            return e.response;
          });
        return resultMethod;
}
}