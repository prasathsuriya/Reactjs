import {
    GET_AAAPERMISSION_STARTED,
    GET_AAAPERMISSION_COMPLETED,
   GET_AAAPERMISSION_FAILED
}  from '../actions/Aaapermission';
const initialAaapermission = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    items: [],
    AaapermissionInput: {  
        permission_id: 0,
        permission_name: String
    },
    role_id: 0,
    categoryId: 0,
    isLoading: true,
    error: ''
};
export const AaapermissionData = (state = initialAaapermission, action: any) => {
    switch (action.type) {
        
        case GET_AAAPERMISSION_STARTED:
            return {
                ...state,
                isLoading: true,
            };    

        case GET_AAAPERMISSION_COMPLETED:
            return{
               ...state,
               isLoading:true,
               items: action.payload
          };
          
          case GET_AAAPERMISSION_FAILED:
              return{
                  ...state,
                  isLoading:true,
              };
              default:
                return state;
        }
    };

