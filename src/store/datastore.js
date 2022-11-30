
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitialState = {counter:0, show:true};
const authInitialState = {login:false};
const counterSlice = createSlice({
    name: "counter",
    initialState:counterInitialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.show = !state.show;
        }
    }
});

const authSlice = createSlice({
    name:"auth",
    initialState: authInitialState,
    reducers: {
        login(state){
            state.login = true;
        },
        logout(state){
            state.login = false;

        }
    }
})

const store = configureStore({
    reducer: {counter:counterSlice.reducer, auth:authSlice.reducer}
});

// const CounterReducer = (state = {counter:0,showCounter:true},action) => {
//     if (action.type === "increment"){
//         return {
//             counter:state.counter + 1,
//             showCounter:state.showCounter
//         }
//     }
//     if (action.type === "decrement"){
//         return {
//             counter:state.counter - 1,
//             showCounter:state.showCounter
//         }
//     }
//     if (action.type==="incrementby5"){
//         return {
//             counter:state.counter + action.value,
//             showCounter:state.showCounter
//         }
//     }
//     if (action.type ==="toggleCounter"){
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//     }
//     return state;
// }

// const store = createStore(CounterReducer);
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store






