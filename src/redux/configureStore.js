import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
// import { setupListeners } from '@reduxjs/toolkit/query'

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})