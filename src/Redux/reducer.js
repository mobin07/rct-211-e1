import { GET_SHOES_FAILURE,GET_SHOES_SUCCESS,GET_SHOES_REQUEST } from "./actionTypes";
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload}=action;
    switch(type){
        case GET_SHOES_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false,
            };
        case GET_SHOES_SUCCESS:
            return{
                ...state,
                shoes:payload,
                isLoading:false,
                isError:false,
            };
        case GET_SHOES_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        default:
            return state;
}
}
