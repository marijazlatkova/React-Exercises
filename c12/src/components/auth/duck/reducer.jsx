import { LOGIN_FAILED,LOGIN_SUCCESS,LOGOUT_USER } from "./constants";
import {setUserStorage,removeUserStorage} from './../../../config/StorageFunctions';

const initialState = {
    token: null,
    user:null
}

const reducer = (state=initialState,action) =>{

    switch(action.type){

        case LOGIN_SUCCESS:
            setUserStorage(action.payload.token,action.payload.username)
            return{
                ...state,
                token: action.payload.token,
                user: action.payload.username
            }

        case LOGIN_FAILED:
            return{
                ...state
            }
        
        case LOGOUT_USER:
            removeUserStorage()
            return{
                ...state,
                token:null,
                user:null
            }

        default: return state;
    }
}

export default reducer;