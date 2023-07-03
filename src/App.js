import './App.css';
import Contains from './container';
import Header from './header/header';
import Carts from './header/cart';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { createContext} from 'react';
import Login from './header/login';
import { Toaster} from "react-hot-toast";
import Order from './Order';
import Placed from './Placed';
export const numMobContext = createContext();

function App() {
 
  return (
    <div style={{height:'200px'}}>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
          <Route path='/' element={<Contains />} />
          
          <Route path='/contains' element={<Contains />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Carts />} />
          <Route path='/order' element={<Order />} />
          <Route path='/place' element={<Placed />} />
      </Routes>
      <Toaster />
    </Router>
   
    </div>
  );
}

export default App;
