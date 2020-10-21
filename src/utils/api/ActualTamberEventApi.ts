import { Http } from "../Http";
export class ActualTambereventAPI {

  static list=new Array();

  
  public static  getactualtamberevent(input: any){

    var url = "api/getActualtamberevent" ;
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