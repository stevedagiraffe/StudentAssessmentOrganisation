import {GlobalSettings as types}  from "./Types"

const INITIAL_STATE = {
    setSplitNotification: true,
}

export const actionCreators = {
    setSplitNotification: (val) => ({type: types.setSplitNotification, value: val}),
    
};


export const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.setSplitNotification:
            return {
                ...state,
                setSplitNotification: action.value
            }

        default:
            return state;
    }
}