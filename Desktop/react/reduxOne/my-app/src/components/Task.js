import React, { useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

function Task({item}) {
    const[show, setShow] = useState('none')
    const[newtask, setNewtask] = useState('')
    const dispatch = useDispatch()

    const deleteTask = ()=>{
        // alert(item)
        if(window.confirm("Are you sure you want to delete?")){
            dispatch({type: "DELETE_TASK", payload: item})
        }
    }

    const editTaskitem = ()=>{
        setShow('inline')

    }
    const finalEdit = ()=>{
        // alert(newtask)
        dispatch({type: "EDIT_TASK", payload: {oldtask: item, newtask: newtask}})
        setShow('none')
    }


  return (
    <div className='row'>
        {/* <h3>{item}</h3> */}
        <div className='col-md-8'>
            <h3>{item}</h3>
        </div>
        <div className='col-md-2'>
            <button className='btn btn-primary' onClick={()=>editTaskitem(item)}><FaEdit/> Edit</button>
        </div>
        <div className='col-md-2'>
            <button className='btn btn-danger' onClick={()=>deleteTask(item)}><FaTrash/> Delete</button>
        </div>
        <div>
            <input type = '' value={newtask} onChange={(e)=>setNewtask(e.target.value)} placeholder='Edit task' style={{display:show}}/>
            <button className='btn btn-success' onClick={()=>finalEdit(item)} style={{display:show}}><FaEdit/> Final Edit</button>
        </div>
        <hr style={{borderColor:'black'}}/>
    </div>
  )
}

export default Task