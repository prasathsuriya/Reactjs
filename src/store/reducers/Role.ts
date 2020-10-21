import {
    GET_ROLE_STARTED,
    GET_ROLE_COMPLETED,
   GET_ROLE_FAILED
}  from '../actions/Role';
const initialRole = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    items: [],
    RoleInput: {  
        roleId: 0,
        roleName: String,
        description: String
    },
    tenantId: 0,
    categoryId: 0,
    isLoading: true,
    error: ''
};
export const roleData = (state = initialRole, action: any) => {
    switch (action.type) {
        
        case GET_ROLE_STARTED:
            return {
                ...state,
                isLoading: true,
            };    

        case GET_ROLE_COMPLETED:
            return{
               ...state,
               isLoading:true,
               items: action.payload
          };
          
          case GET_ROLE_FAILED:
              return{
                  ...state,
                  isLoading:true,
              };
              default:
                return state;
        }
    };

