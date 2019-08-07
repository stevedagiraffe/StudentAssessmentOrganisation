import { ItemDatabase as dbTypes, ItemSelection as selectTypes } from "./Types"

const INITIAL_STATE = {

    subjects: {},
    assignments: {},
    goals: {},
    splits: {
        "0": {
            name: "Bob",
        }
    },

    /*
     *Requires a lot less fiddling around when recursively selecting higher tier item from
     *lower tier (ie selecting goal -> selecting assignment -> selecting subject)
     */
    selected: {
        subject: "0",
        assignment: "0",
        goal: "0",
        split: "0",
    },
}

export const actionCreators = {
    selectSubject(subjectKey) {return ({type: selectTypes.selectSubject, subjectKey: subjectKey})},
    selectAssignment(assignmentKey) { return({type: selectTypes.selectAssignment, assignmentKey: assignmentKey})},
    selectGoal(goalKey) {return ({type: selectTypes.selectGoal, goalKey: goalKey})},
    selectSplit(splitKey) {return ({type: selectTypes.selectSplit, splitKey: splitKey})},
}

export const reducer = (state = INITIAL_STATE, action) => {

    let newState = { ...state };

    switch (action.type) {

        //#region Selection
        //If i can find a better way to not repeat myself here, then I will be happy.
        case selectTypes.selectSubject:
            newState.selected.subject = action.subjectKey;
            break;
        case selectTypes.selectAssignment:
            newState.selected.assignment = action.assignmentKey;
            newState.selected.subject = newState.assignments[newState.selected.assignment].subject;
            break;
        case selectTypes.selectGoal:
            newState.selected.goal = action.goalKey;
            newState.selected.assignment = newState.goals[newState.selected.goal].assignment;
            newState.selected.subject = newState.assignments[newState.selected.assignment].subject;
            break;
        case selectTypes.selectSplit:
            newState.selected.split = action.splitKey;
            newState.selected.goal = newState.splits[newState.selected.split].goal;
            newState.selected.assignment = newState.goals[newState.selected.goal].assignment;
            newState.selected.subject = newState.assignments[newState.selected.assignment].subject;
            break;
        //#endregion
    }
    return newState;
}