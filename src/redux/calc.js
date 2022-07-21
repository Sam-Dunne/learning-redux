import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    result: 0,
    display: '',
    arg1: '',
    operation: '',
    arg2: '',
    //   prevCalc: 0,
}

export const calcSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        backspace: (state) => {
            if (state.operation && state.arg2) {
                state.arg2 = state.arg2.slice(0, state.arg2.length - 1);
                state.display = `${state.arg1} ${state.operation} ${state.arg2}`
            } else if (state.operation) {
                state.operation = '';
                state.display = state.arg1;
            } else {
                if (state.arg1.length == 0) {
                    return
                }
                state.arg1 = state.arg1.slice(0, state.arg1.length - 1);
                state.display = state.arg1;
            }
        },
        setArg1: (state, action) => {
            if (!state.arg1) {
                state.display = ""
            }
            state.arg1 += action.payload.toString();
            state.display += `${action.payload}`
        },
        setArg2: (state, action) => {

            state.arg2 += action.payload.toString();
            state.display = `${state.arg1} ${state.operation} ${state.arg2}`
        },
        setOperation: (state, action) => {
            state.operation = action.payload;
            state.display = `${state.arg1} ${state.operation}`
        },
        setDisplay: (state) => {
            state.display = (state.arg1 + state.operation + state.arg2)
        },
        calculate: (state) => {
            function decimalAdjust(type, value, exp) {
                // If the exp is undefined or zero...
                if (typeof exp === 'undefined' || +exp === 0) {
                  return Math[type](value);
                }
                value = +value;
                exp = +exp;
                // If the value is not a number or the exp is not an integer...
                if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                  return NaN;
                }
                // Shift
                value = value.toString().split('e');
                value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
                // Shift back
                value = value.toString().split('e');
                return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
              }
              
            switch (state.operation) {  
                case "+":
                    state.result = Number(state.arg1) + Number(state.arg2)
                    state.display = state.result.toString();
                    state.arg1 = '';
                    state.operation = '';
                    state.arg2 = '';
                    state.arg1 = state.result.toString();
                    break;
                case "-":
                    state.result = Math.floor(Number(state.arg1)) - Math.floor(Number(state.arg2));
                    state.display = state.result.toString();
                    state.arg1 = '';
                    state.operation = '';
                    state.arg2 = '';
                    state.arg1 = state.result.toString();
                    break;
                case "x":
                    state.result = Number(state.arg1) * Number(state.arg2)
                    state.display = state.result.toString();
                    state.arg1 = '';
                    state.operation = '';
                    state.arg2 = '';
                    state.arg1 = state.result.toString();
                    break;
                case "/":
                    state.result = (Number(state.arg1)/ Number(state.arg2))         
                    state.display = state.result.toString();
                    state.arg1 = '';
                    state.operation = '';
                    state.arg2 = '';
                    state.arg1 = state.result.toString();
                    state.result = 0;
                    break;
                default:
                    break;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setArg1, setArg2, setDisplay, setOperation, calculate, backspace } = calcSlice.actions

export default calcSlice.reducer