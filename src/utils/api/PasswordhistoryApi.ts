import axios from "axios";
import { listenerCount } from "cluster";
import { Http } from "../Http";
export class PasswordhistoryApi {

  static list=new Array();



public static getpasswordhistory(input: any) {
    if (input == "") {
      return { data: [] };
    }
   // alert(input);
  //  alert("hi");
    var url = "/api/getdescending/" + input;
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