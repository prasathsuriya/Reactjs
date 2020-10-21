import axios from "axios";
import { Http } from "../Http";
export class Role {

    public static getRolesByTenant(input: any) {
        var url = "/api/aarolesByTenant/" + input.input;
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


