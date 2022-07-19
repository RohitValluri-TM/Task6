import React, {useContext} from 'react'
import { CountContext } from './App'


function Counter1() {
    const countcontext = useContext(CountContext)
  return (
    <div>
        <button onClick={()=>countcontext.countDispatch('Increment')}>Increment</button>
        <button onClick={()=>countcontext.countDispatch('Decrement')}>Decrement</button>
        <button onClick={()=>countcontext.countDispatch('Reset')}>Reset</button>
    </div>
  )
}

export default Counter1