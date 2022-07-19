import './App.css';
import Counter1 from './Counter1';
import React, {useReducer} from 'react'
import DataFetch from './DataFetch';

export const CountContext = React.createContext()
const initialState = 0
const reducer=(currstate, action)=>{
    switch(action){
        case 'Increment':
            return currstate+1
        case 'Decrement':
            return currstate-1
        case 'Reset':
            return initialState
        default:
            return currstate
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countstate: count, countDispatch: dispatch}}>
    <div className="App">
    Count : {count}
      <Counter1/>
    </div>
    <div>
      <DataFetch/>
    </div>
    </CountContext.Provider>
    
  );
}

export default App;
