import React from 'react'
import { store } from '../reactredux/Store/Store'
import Task from './Task'
function ListTask() {
  return (
    <div>

        {
            store.map((el,key)=>(<Task el={el}/>))
        }
    </div>
  )
}

export default ListTask