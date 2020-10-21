import axios from "axios";
import { Http } from "../Http";
export class commonAPI {

    public static getCountry() {
        var url = "/api/country/";        
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

    public static getStates(input: any) {
        var url = "/api/states/" + input;
        
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

    public static getMeterregioncode(input: any) {
        var url = "/api/meterregioncode/" + input;
       
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

    public static getAreaList(input: any) {
        var url = "/api/meterareacode/" + input;
        
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

    public static getZoneList(input: any) {
        var url = "/api//meterConsumptionZone/" + input;
        
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


