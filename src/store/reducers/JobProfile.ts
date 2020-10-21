import {
    GET_JOBPROFILE_COMPLETED,GET_JOBPROFILE_FAILED,GET_JOBPROFILE_STARTED
}  from '../actions/JobProfile';
const initialJobProfile = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    items: [],
    tenantId: 0,
    categoryId: 0,
    isLoading: true,
    error: ''
};
export const jobProfileData = (state = initialJobProfile, action: any) => {
    switch (action.type) {
        
        case GET_JOBPROFILE_STARTED:
            return {
                ...state,
                isLoading: true,
            };    

        case GET_JOBPROFILE_COMPLETED:
            return{
               ...state,
               isLoading:false,
               items: action.payload
          };
          
          case GET_JOBPROFILE_FAILED:
              return{
                  ...state,
                  isLoading:true,
              };
              default:
                return state;
        }
    };

