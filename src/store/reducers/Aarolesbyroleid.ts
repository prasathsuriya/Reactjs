import {
    GET_ROLEBYID_STARTED,
    GET_ROLEBYID_COMPLETED,
   GET_ROLEBYID_FAILED
}  from '../actions/Aarolesbyroleid';
const initialRole = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    items: [],
    RoleInput: {  
        roleName: String,
        description: String
    },
    roleId: 0,
    categoryId: 0,
    isLoading: true,
    error: ''
};
export const AarolebyIdData = (state = initialRole, action: any) => {
    switch (action.type) {
        
        case GET_ROLEBYID_STARTED:
            return {
                ...state,
                isLoading: true,
            };    

        case GET_ROLEBYID_COMPLETED:
            return{
               ...state,
               isLoading:true,
               items: action.payload
          };
          
          case GET_ROLEBYID_FAILED:
              return{
                  ...state,
                  isLoading:true,
              };
              default:
                return state;
        }
    };