export const createStore = (reducer, initialState) => {
  let isDispatching = false;
  let currentState = initialState;

  let listeners = [];

  function dispatch (action) {  
    if (isDispatching) {
      throw new Error("Redux is currently dispatching")
    }
    isDispatching = true
    currentState = reducer(currentState, action)
    isDispatching = false

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]()
    }
  }

  function getState () {
    return currentState
  }

  function subscribe (listener) {
    listeners.push(listener)
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch,
    getState,
    subscribe
  }
}
