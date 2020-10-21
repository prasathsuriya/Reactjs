import axios from "axios";
import { Http } from "../Http";
export class ReportAPI {
  public static getReport1(input: any) {
    var url = "";
    if (input.id == "1") {
      url = "/api/blockLoad";
    } else if (input.id == "3") {
      url = "/api/dailyLoad";
    } else if (input.id == "4") {
      url = "/api/allBilling";
    } else if (input.id == "5") {
      url = "/api/allNamePlate";
    } else if (input.id == "6" || input.id == "7" || input.id == "8"
      || input.id == "9" || input.id == "10" || input.id == "11" || input.id == "12") {
      url = "/api/getAllTamperEvents/" + input.id;
    } else {
      return { data: [] };
    }

    const resultMethod = Http.axios()
      .get(url, {
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

  public static getReport(input: any) {
    var obj = JSON.stringify(input);
    var url = "";
    if (input.id == "1") {
      url = "/api/getBlockLoadByCriteria";
    } else if (input.id == "3") {
      url = "/api/getActualsDailyLoadByCriteria";
    } else if (input.id == "4") {
      url = "/api/getActualsBillingByCriteria";
    } else if (input.id == "5") {
      url = "/api/getActualsNamePlateByCriteria";
    } else if (input.id == "6" || input.id == "7" || input.id == "8"
      || input.id == "9" || input.id == "10" || input.id == "11" || input.id == "12") {
      url = "/api/getActualsTamperEventByCriteria/";
    } else {
      return { data: [] };
    }

    const resultMethod = Http.axios()
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

      //alert(resultMethod);
    return resultMethod;
  }

  public static getReportColumnNames(input: any) {
    var url = "/api/getAllObisCodes/";
    /* if (input.id == "") {
       return { data: [] };
     }*/

    const resultMethod = Http.axios()
      .get(url, {
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

  public static saveReport(input: any) {
    var obj = JSON.stringify(input);
    var url = "/api/user/";
    if (input.userId !== null && input.userId !== "") {
      url = "/api/user/" + input.userId;
      const resultMethod = Http.axios()
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

  public static getAllSearchCriteriaList(input: any) {
    var obj = JSON.stringify(input);
    var url = "/api/allSearchCriteriaList/1";
    const resultMethod = Http.axios()
      .get(url, {
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
