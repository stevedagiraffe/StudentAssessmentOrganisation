import {createStore, combineReducers} from 'redux'
import {reducer as GlobalSettings} from "./Reducers/GlobalSettings"

const rootReducer = combineReducers({
    globalSettings: GlobalSettings

});



export default store = createStore(rootReducer);