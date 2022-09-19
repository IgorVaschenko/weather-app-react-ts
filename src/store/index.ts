import { combineReducers, createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import toggleTemperatureReducer from 'store/reducers/toggleTemperatureReducer'
import weatherReducer from 'store/reducers/weatherReducer'

const rootReducer = combineReducers({
    weather: weatherReducer,
    toggle: toggleTemperatureReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store;