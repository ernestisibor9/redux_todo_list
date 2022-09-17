import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "./components/style.css"
import {createStore} from "redux"
import {Provider} from "react-redux"
import cartReducer3 from './components/reducers/cartReducer3'
import Navbar3 from './components/Navbar3'
import AddTasks from './components/AddTasks'
import MyTask from './components/MyTask'


function App3() {
    const store = createStore(cartReducer3)
  return (
    <div>
        <Provider store={store}>
            <Navbar3/>
            <AddTasks/>
            <MyTask/>
        </Provider>
    </div>
  )
}

export default App3