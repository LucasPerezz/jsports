import './App.css';
// import Footer from './containers/Footer/Footer';
import Navbar from './containers/Navbar/Navbar';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ItemListContainer />} />
      <Route path='/products/:category/:id' element={<ItemDetailContainer />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  );
}

export default App;
