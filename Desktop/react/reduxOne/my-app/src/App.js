
import Items from './components/Items';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "./components/style.css"
import {createStore} from 'redux'
import {Provider} from "react-redux"
import cartReducer from './components/reducers/cartReducer';

function App() {
  const store = createStore(cartReducer)
  return (
    <div>
      <Provider store={store}>
      <Navbar/>
      <Items/>
      </Provider>
    </div>
  );
}

export default App;
