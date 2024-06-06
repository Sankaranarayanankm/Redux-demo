const redux = require("redux");

const initalState = {
  counter: 0,
};
const counterReducer = (state = initalState, action) => {
  if (action.type == "INCREMENT") {
    return {
      counter: state.counter + 5,
    };
  }
  else if(action.type=='DECREMENT'){
    return {
      counter:state.counter-1,
    }
  }
  else return state;
};

const store = redux.createStore(counterReducer);

// now to create suscriber
const counterSubcriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubcriber);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({type:'DECREMENT'});

