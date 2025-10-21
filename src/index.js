import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.css';

import Cred from './pages/Cred';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Verity from './pages/Verity';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* Homepage */}
        <Route exact path="/" component={Home} />

        {/* Your form/application */}
        <Route path="/cred" component={Cred} />

       {/* Contact */}
        <Route path="/contact" component={Contact} />
       
       {/* Verity */}
        <Route path="/verity" component={Verity} />

      </Switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
