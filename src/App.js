import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';
import ProductsScreen from './containers/ProductsScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <HomeScreen />
          }} />
          <Route exact path="/products" render={(props) => {
            return <ProductsScreen />
          }} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
