import axios from "axios";
import { listenerCount } from "cluster";
import { Http } from "../Http";
export class MetermfdetailsAPI {

  static list=new Array();

  
  public static  getmetermfdetails(input: any){

    var url = "api/metermfdetail" ;
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