import {Selector as types} from "./Types"

const INITIAL_STATE = {
    selectedSubjectKey: null,
    selectedEventKey: null,
}

export const actionCreators = {
    setSubject
}

export const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.setSelectedEvent:
            return {
                ...state,
                selectedEventKey: action.eventKey
            };
        case types.setSelectedSubject:
            return {
                ...state,
                selectedSubjectKey: action.subjectKey
            }
        default:
            return state;
    }
}