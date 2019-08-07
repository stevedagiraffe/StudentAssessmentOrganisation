import {createStore, combineReducers} from 'redux'
import {reducer as GlobalSettings} from "./Reducers/GlobalSettings"
import {reducer as ItemDatabase} from "./Reducers/ItemDatabase"
const rootReducer = combineReducers({
    globalSettings: GlobalSettings,
    itemDatabase: ItemDatabase,
});



export default store = createStore(rootReducer);