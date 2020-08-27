import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';
import ProductsScreen from './containers/ProductsScreen';
import InsideProductScreen from './containers/InsideProductScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => <HomeScreen />} />
          <Route exact path="/products" render={(props) => <ProductsScreen />} />
          <Route exact path="/products/1" render={(props) => <InsideProductScreen />} />          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
