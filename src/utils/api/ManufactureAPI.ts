import axios, { AxiosPromise } from "axios";
import { Http } from "../Http";
export class ManufactureAPI {
    public static saveManufacture(input: any) {
        console.log("id"+input.manufactureId);
       console.log("name"+input.manufactureName);
        var obj = JSON.stringify(input);
        console.log("obj"+obj.length);
        console.log("obj"+obj)
        console.log("input:::: "+input.manufactureId+"value"+input.manufactureName);
        var url='/api/metermanufacture';
        if (input.manufactureId!==null && input.manufactureId !=="") {
            url = '/api/metermanufacture';  
   const resultMethod= axios.post(url,obj,
        {
        headers: {
            'Content-Type': 'application/json'
        }})
      .then(res =>    {
        console.log("Response in post"+res.data.manufactureId+" value "+res.data.answer);
        return res;
      }).catch((e:any) =>{
        console.log("Error in post"+e);
        return e.response;
      });
      return resultMethod;
    }
}
public static getManufacture() {
  return Http.axios().get('/api/metermanufacture/')
    .catch((e) => {
      return e.response;
    }) as AxiosPromise<any>;
}
public static updateStaus(input: any) {
  var obj = JSON.stringify(input);
  var url = '/api/metermanufactureStatus/'+input;
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