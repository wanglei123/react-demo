import {createStore} from 'redux'

const counterReducer = (state = {count: 0}, action) => {
  switch(action.type){
    case 'ADD': 
      return {
        ...state,
        count: state.count + 1
      };
    case 'MINUS':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state
  }
}

export default createStore(counterReducer)

