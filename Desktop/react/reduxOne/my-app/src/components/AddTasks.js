import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


function AddTasks() {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const addTask = ()=>{
      dispatch({type:"ADD_TASK", payload: task})
    }

  return (
    <div className='mt-4'>
        <input type='text' className='form control' placeholder='enter task' value ={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTask} className="btn btn-primary">Enter task</button>
    </div>
  )
}

export default AddTasks