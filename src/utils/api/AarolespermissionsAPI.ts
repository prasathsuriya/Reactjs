import axios from "axios";
import { Http } from "../Http";
export class AarolespermissionsAPI {

  static list=new Array();

  
  public static  getAarolespermission(input: any){

    var url = "api/Aarolespermission" ;
    //alert("url"+url);
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
  }

    public static saveAarolespermission(input: any) {
        console.log(input);
       // alert("saverolepermission");
        var obj=JSON.stringify(input);
        var url="api/saveAarolespermission";
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

public static DeleteAarolespermission(input: any) {
  console.log(input);
 // alert("deleterole");
  var obj=JSON.stringify(input);
  var url="api/deleteAarolespermission";

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
public static  getRolesPermissionByRoleid(input: any){

  var url = "api/Aarolespermissionjj" ;
 // alert("url"+url);
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
}
public static  SaveAarolepermission(input: any){

  var url = "api/Aarolespermissionjj" ;
 // alert("url"+url);
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
}

}


