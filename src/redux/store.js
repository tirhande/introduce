import { configureStore } from '@reduxjs/toolkit'

import myselfReducer from './reducer/myselfSlice'

export default configureStore({
    reducer: {
        myself: myselfReducer,
    }
})