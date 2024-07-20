import React from 'react';
import ViewCart from './Components/ViewCart';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductContext from './Context/ProductContext';


const App = () => {

  return<>
   <Navbar />
   <ProductContext><ViewCart />
   </ProductContext>
   {/* <Totalprice /> */}
   <Footer/>
  </>
};

export default App;