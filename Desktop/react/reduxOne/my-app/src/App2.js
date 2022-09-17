import React from 'react'
import Item2 from './components/Item2'
import {createStore} from "redux"
import { Provider } from 'react-redux'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import cartReducer2 from './components/reducers/cartReducer2'

function App2() {
    const store = createStore(cartReducer2)
  return (
    <div>
        <Provider store={store}>
            <Item2/>
        </Provider>
    </div>
  )
}

export default App2