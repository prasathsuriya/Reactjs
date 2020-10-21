import { Http } from "../Http";
export class ProcessSchedulerAPI {
  public static saveNewFrom(input: any) {
    var obj = JSON.stringify(input);
    console.log("New Device " + obj);
    var url = "/api/saveReportRun";
    if (input.processName !== null) {
      url = "/api/saveReportRun";
      const resultMethod = Http.axios()
        .post(url, obj, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
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



public static getPSDetails(input: any) {
  var url = "";
  url = "/api/getAllReportsData";
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