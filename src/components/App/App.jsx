import './App.scss';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext.js';
import { LoggedInContext } from '../../contexts/LoggedInContext.js';
import { ProductContext } from '../../contexts/ProductContext.js';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Products from '../Products/Products.jsx';
import SignIn from '../SignIn/SignIn.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import ProductDesc from '../ProductDesc/ProductDesc.jsx';
import Cart from '../Cart/Cart.jsx';
import NotFound from '../NotFound/NotFound.js';
import AboutUs from '../AboutUs/AboutUs.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogin, setUserLogin] = useState('');
  const [products, setProducts] = useState([]);
  return (
    <UserContext.Provider value={{userLogin, setUserLogin}}>
    <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <ProductContext.Provider value={{products, setProducts}}>
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <>
          <Header />
          <Products />
          <Footer />
          </>
        } />
        <Route path='/signin' element={
          <>
          <SignIn />
          <Footer />
          </>
        } />
        <Route path='/signup' element={
          <>
          <SignUp />
          <Footer />
          </>
        } />
        <Route path='/product/:id' element={
          <>
          <Header />
          <ProductDesc />
          <Footer />
          </>
        } />
        <Route path='/cart' element={
          <>
          <Header />
          <Cart />
          <Footer />
          </>
        } />
        <Route path='*' element={
          <>
          <NotFound />
          </>
        } />
        <Route path='/about' element={
          <>
          <Header />
          <AboutUs />
          <Footer />
          </>
        } />
      </Routes>
    </div>
    </ProductContext.Provider>
    </LoggedInContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
