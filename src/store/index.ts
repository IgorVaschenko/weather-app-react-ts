import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'
import thunk from 'redux-thunk'

import toggleTemperatureReducer from 'store/reducers/toggleTemperatureReducer'
import weatherReducer from 'store/reducers/weatherReducer'
import rootSaga from 'saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    weather: weatherReducer,
    toggle: toggleTemperatureReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>

export default store;