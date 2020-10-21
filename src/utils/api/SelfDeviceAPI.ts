import axios from "axios";
import { Http } from "../Http";
export class SelfDeviceAPI {

    public static getAllSelfDevice(input: any) {
        var url = "/api/getAllSelfRegistered/";

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