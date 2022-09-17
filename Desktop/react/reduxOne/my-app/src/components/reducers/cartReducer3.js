const initialData ={
    tasks: []
}

function cartReducer3(state = initialData, action) {
    switch(action.type){
        case "ADD_TASK": return{
            ...state,
            tasks: [...state.tasks, action.payload]
        }
        case "DELETE_TASK": return{
            ...state,
            tasks: state.tasks.filter((task)=> task !== action.payload)
        }
        case "EDIT_TASK": return{
            ...state,
            tasks: state.tasks.map((task)=>{
                if(task === action.payload.oldtask)
                task = action.payload.newtask
                return task
            })
            // tasks: state.tasks.filter((task)=> task !== action.payload)
        }
        default : {
            return state
        }
    }
}

export default cartReducer3