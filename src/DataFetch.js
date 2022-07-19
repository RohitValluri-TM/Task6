import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {post:{}, error:''}

const reducer = (currstate, action)=>{
    switch(action.type){
        case 'Success':
            return{
                post:action.payload,
                error:''
            }
        case 'Failure':
            return{
                post:{},
                error:'Error'
            }
        default:
            return currstate
    }
}

function DataFetch() {
    const [currstate, dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           dispatch({type:'Success', payload:response.data})
           console.log(response.data, 'data')
        })
        .catch(error=>{
           dispatch({type:'Failure'})
        })
        
   }, [])
   const data = Array.from(currstate.post)
  return (
    <div>
        <h2>Users</h2>
        {data.map((i,id)=>{
            return (<h4 key={id}>{i.name}</h4>)
        })}
        
    </div>
  )
}

export default DataFetch