import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import calcReducer from './calc';
// import { setupListeners } from '@reduxjs/toolkit/query'

export default configureStore({
    reducer: {
        counter: counterReducer,
        calculator: calcReducer
    }
})