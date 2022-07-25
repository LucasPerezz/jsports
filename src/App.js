import './App.css';
// import Footer from './containers/Footer/Footer';
import Navbar from './containers/Navbar/Navbar';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { UseCartContext } from './cartContext/UseCartContext';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
      <UseCartContext>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/products/:clothing_type/:brand' element={<ItemListContainer />} />
        <Route path='/products/:clothing_type/:brand/:id' element={<ItemDetailContainer />} />
        </Routes>
      </Router>
      </UseCartContext>
      </>
    );
  }
}

export default App;
