import axios, { AxiosPromise } from "axios";
import { Http } from "../Http";
export class UserAPI {
  public static saveUser(input: any) {
    console.log("Password" + input.password);
    console.log("EMAILID" + input.emailid);
    var obj = JSON.stringify(input);
    console.log("obj" + obj.length);
    console.log("obj" + obj)
    console.log("input:::: " + input.userId + "password " + input.password);
    var url = '/api/users/';
    if(input.id!==0 && input.id>0){
      url = '/api/updateUsers/';
      var userInputInit={
        id:input.id,
      first_name:input.first_name,
      middle_name:input.middle_name,
      last_name:input.last_name,
      sex:input.sex,
      dob :input.dob,
      address1:input.address1,
      address2:input.address2,
      country:input.country,
      state:input.state,
      city:input.city,
      zipcode:input.zipcode,
      emailId:input.emailId,
      mobileNumber:input.mobileNumber,
      updatedBy:input.updatedBy,  
      }
      obj = JSON.stringify(userInputInit);
    }
    if (input.emailid !== null && input.emailid !== "") {
     

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


  public static updateStaus(input: any) {
    var obj = JSON.stringify(input);
    var url = 'api/changeUserStatus/'+input;
        
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

  public static getUsersList(input: any) {
    var url = "/api/userProfileByTenant/" + input;
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