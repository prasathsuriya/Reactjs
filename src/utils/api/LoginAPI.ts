import axios, { AxiosPromise } from "axios";
import { Http } from "../Http";
export class LoginAPI {
  public static saveLogin(input: any) {
    var obj = JSON.stringify(input);
   // alert("login");
    var url = "/api/login";
    var source = {
      userId: input.userId,
      password: input.password
    };
    var obj = JSON.stringify(source);
    var obJSon = JSON.parse(obj);
    if (input.userId !== null && input.userId !== "") {
      const resultMethod = Http.axios()
        .post(url, obJSon, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          console.log(
            "Response in post" +
              res.data.userId +
              " password " +
              res.data.answer
          );
          return res;
        })
        .catch((e: any) => {
          console.log("Error in post" + e);
          return e.response;
        });
      return resultMethod;
    }
  }
}
