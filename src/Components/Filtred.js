import React from 'react'
import { store } from '../reactredux/Store/Store'
import Task from './Task'
function Filtred(fl) {
  const list =store.Filtred((el,key)=>(el !=fl));
  
  return (
    <div>{
      list.map((el,key)=>(<Task el={el}/>))
  }</div>
  )
}

export default Filtred