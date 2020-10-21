import axios from "axios";
export class DashboardAPI {
    public static saveDashboard(input: any) {
        console.log("Password"+input.password);
       console.log("USERRID"+input.userId);
        var obj = JSON.stringify(input);
        console.log("obj"+obj.length);
        console.log("obj"+obj)
        console.log("input:::: "+input.userId+"password "+input.password);
        var url='/api/user/';
        if (input.userId!==null && input.userId !=="") {
            url = '/api/user/' + input.userId;
           
   const resultMethod= axios.post(url,obj,
        {
        headers: {
            'Content-Type': 'application/json'
        }})
      .then(res =>    {
        console.log("Response in post"+res.data.userId+" password "+res.data.answer);
        return res;
      }).catch((e:any) =>{
        console.log("Error in post"+e);
        return e.response;
      });
      return resultMethod;
    }
}
}