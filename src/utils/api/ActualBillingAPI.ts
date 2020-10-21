import { Http } from "../Http";
export class ActualBillingAPI {

  static list=new Array();

  
  public static  getactualbilling(input: any){

    var url = "api/getActuallsbilling" ;
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