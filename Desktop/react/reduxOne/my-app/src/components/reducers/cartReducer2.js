const initialData = {
    game: "Football",
    playerName: "Messi",
    userName: "Johnson"
}

function cartReducer2(state = initialData, action) {
    switch(action.type){
        case "CHANGE_NAME" : return{
            ...state,
            game: action.payload
        }
        case "CHANGE_PLAYER" : return{
            ...state,
            playerName: action.payload
        }
        case "CHANGE_USERNAME" : return{
            ...state,
            userName: action.payload.username
        }
        default : {
            return state
        }
    }
}

export default cartReducer2