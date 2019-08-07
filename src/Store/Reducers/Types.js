

export const GlobalSettings = {
    setSplitNotification: "SET_SPLIT_NOTIFICATION",
}

export const ItemDatabase = {
    addSubject: "ADD_SUBJECT",
    removeSubject: "REMOVE_SUBJECT",
    modifySubject: "MODIFY_SUBJECT",

    addAssignment: "ADD_ASSIGNMENT",
    removeAssignment: "REMOVE_ASSIGNMENT",
    modifyAssignment: "MODIFY_ASSIGNMENT",

    addGoal: "ADD_GOAL",
    removeGoal: "REMOVE_GOAL",
    modifyGoal: "MODIFY_GOAL",

    addSplit: "ADD_SPLIT",
    removeSplit: "REMOVE_SPLIT",
    modifySplit: "MODIFY_SPLIT",
}
//Splitting these from the main database types makes it a bit cleaner when selection is
//used for multiple screens
export const ItemSelection = {
    selectSubject: "SELECT_SUBJECT",
    selectAssignment: "SELECT_ASSIGNMENT",
    selectGoal: "SELECT_GOAL",
    selectSplit: "SELECT_SPLIT",
}