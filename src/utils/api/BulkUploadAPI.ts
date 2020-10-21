import axios from "axios";
import { Http } from "../Http";
export class BulkUploadAPI {
  
  public static getUploadedList(input: any) {    
    var url = "/api/masterupload/";
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

  public static uploadFile(input: any) {
    var obj = JSON.stringify(input);
    var url = "/api/user/";
    if (input.userId !== null && input.userId !== "") {
      url = "/api/user/" + input.userId;
      const resultMethod =  Http.axios()
        .post(url, obj, {
          headers: {
            "Content-Type": "application/json"
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
}
