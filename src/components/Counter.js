import classes from './Counter.module.css';
import { useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/datastore';
// import { Component } from 'react';


//functional component
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.show)


  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const incrementHandler5 = () => {
    dispatch(counterActions.increase(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {incrementHandler}>Increment</button>
        <button onClick = {decrementHandler}>Decrement</button>
        <button onClick = {incrementHandler5}>increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//class component

// class Counter extends Component{

//   incrementHandler = () => {
//     this.props.increment();
//   }
//   decrementHandler = () => {
//     this.props.decrement();
//   }
//   toggleCounterHandler = () => {}
    

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick = {this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick = {this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapdispatchtoprops = (dispatch) => {
//   return {
//     increment: () => dispatch({type:"increment"}),
//     decrement: () => dispatch({type:"decrement"})
//   }
// };

// const mapstatetoprops = (state) => {
//   return {
//     counter: state.counter
//   }
// };

// export default connect(mapstatetoprops, mapdispatchtoprops)(Counter);
