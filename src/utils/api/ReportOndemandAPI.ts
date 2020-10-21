import axios from "axios";
import { Http, HttpReport } from "../Http";
export class ReportAPI {
  public static getOnDemandReport(input: any) {
    var url = "/onDemand";
    if (!input) {
      return { data: [] };
    }
    const inp = {
      profileShortName: "NAME_PLATE_PROFILE",
      meterSerials: [791]
    };

    //input.profileShortName = " DAILY_LOAD_PROFILE";
    //input.fromDate = "06-02-2020-23:00";
    //input.toDate = "07-02-2020-22:59";
    //input.meterSerials = [791];

    var obj = JSON.stringify(input);
    var obJSon = JSON.parse(obj);

    const resultMethod = HttpReport.axios()
      .post(url, obJSon, {
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
