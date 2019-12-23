import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import Products from './components/Products';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products/new" component={NewProduct} />
            <Route exact path="/products/edit/:id" component={EditProduct} />

          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
