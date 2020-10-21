import axios from "axios";
import { listenerCount } from "cluster";
import { Http } from "../Http";
export class MeterlocationAPI {

  static list=new Array();

  
  public static  getmeterlocationdetails(input: any){

    var url = "api/meterlocationdetail" ;
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
  public static  getmetersearch(input: any){
 var obj = JSON.stringify(input);
    var url = "api/viewmeterdetailprofile" ;
   // alert("url"+url);
    if (input.length>0) {
      return { data: [] };
    }

    const resultMethod = Http.axios()
      .post(url,obj, {
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
  public static  getmeterdate(input: any){
    var obj = JSON.stringify(input);
    alert("val");
       var url = "api/newerviewmeterdetailprofile" ;
      // alert("url"+url);
       if (input.length>0) {
         return { data: [] };
       }
   
       const resultMethod = Http.axios()
         .post(url,obj, {
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