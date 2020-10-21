import axios from "axios";
import { listenerCount } from "cluster";
import { Http } from "../Http";
import { message } from "antd";
export class NewpasswordresetApi {

  static list=new Array();


    public static savenewpasswordreset(input: any) {
        console.log(input);
         
       // alert("saverole");
        var obj=JSON.stringify(input);
        var url="api/newpasswordreset";
        // if(input.jobId>0 ){
        //   //var url="api/updateSchedulerJobsRepository";
        // }
       //alert("Muru url = "+url);
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
           // alert("Muru Return res "+JSON.stringify(res));
            return res;
          }).catch((e: any) => {
            console.log("Error in post" + e);
          //  alert("Muru Return Error "+e);
            return e.response;
          });
        //  alert("Muru Return resultMethod "+JSON.stringify(resultMethod)); 
        return resultMethod;
}

}