import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <HomeScreen />
          }} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
