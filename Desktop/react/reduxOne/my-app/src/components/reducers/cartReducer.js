const initialData = {
    countCart: 34
}

function cartReducer(state = initialData, action) {

    switch(action.type){
        case "ADD_ITEM": return{
            countCart: ++state.countCart
        }
        case "REMOVE_ITEM": return{
            countCart: --state.countCart
        }
         default:{
            return state
         }
    }
   
}

export default cartReducer