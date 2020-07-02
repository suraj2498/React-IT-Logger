import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from '../actions/types';

const initalState = {
    techs: null,
    loading: false,
    error: null
}

export default (state=initalState, action) => {
    switch(action.type){
        case GET_TECHS:
            return{
                ...state,
                techs: action.payload
            }

        case ADD_TECH:
            return{
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }

        case TECHS_ERROR:
            return{
                ...state,
                error: action.payload
            }

        case SET_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return{
                ...state
            }
    }
}