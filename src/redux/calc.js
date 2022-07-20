import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  calcVal: 0,
}

export const calcSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increment: (state) => {
      state.calcVal += 1
    },
    decrement: (state) => {
      state.calcVal -= 1
    },
    incrementByAmount: (state, action) => {
      state.calcVal += action.payload
    },
    decrementByAmount: (state, action) => {
      state.calcVal -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = calcSlice.actions

export default calcSlice.reducer