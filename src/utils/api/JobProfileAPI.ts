import axios from "axios";
import { Http } from "../Http";
export class JobProfile {

    public static getProfiles(input: any) {
        var url = "/api/activeProfiles/";
        if (input.id == "") {
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
}


