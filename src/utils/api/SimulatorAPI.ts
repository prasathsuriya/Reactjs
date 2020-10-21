import axios from "axios";
import { Http, HttpReport } from "../Http";

export class Simulator {

    public static getRunningSimulatorCount(input: any) {
        var url = "/api/getRunningSimulatorCount/" + input.tenantId +"/Simulator";
        if (input.tenantId == "") {
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

    public static startSimulation(input: any) {
        var url = "/startMeters?noOfServers=" + input.noOfServers;
        if (input.noOfServers <= 0) {
            return { data: [] };
        }
        const resultMethod = HttpReport.axios()
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

    public static stopSimulation() {
        var url = "/stopMeters";
        const resultMethod = HttpReport.axios()
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