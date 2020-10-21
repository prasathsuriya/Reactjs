import axios, { AxiosInstance } from "axios";

let API_URL = "";
if (process.env.REACT_APP_API_URL) {
  
  API_URL = process.env.REACT_APP_API_URL;
}


export class Http {
  public static axios(): AxiosInstance {
    return axios.create({
    //  baseURL: "http://3.12.189.49:8096/"
   // baseURL: "http://3.22.202.87:8096/"
 //  baseURL: "http://18.223.244.212:8096/"
    baseURL: "http://localhost:8080/"
    });
  }
}

export class HttpReport {
  public static axios(): AxiosInstance {
    return axios.create({
    //  baseURL: "http://3.12.189.49:9090/meter/"
     // baseURL: "http://3.22.202.87:9090/meter/"
      baseURL: "http://18.223.244.212:9090/meter/"
    });
  }
}

export const apiURL = "http://localhost:8080/api/";
