import React from 'react';
import "./App.css"

import {
  BrowserRouter,
  Switch
} from "react-router-dom";

import Home from './routes/Home';
import Favourites from './routes/Favourites';
import SignUp from './routes/SignUp';
import Login from './routes/Login';

import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './routes/RouteComponents/ProtectedRoute';
import AuthRoute from './routes/RouteComponents/AuthRoute';
import Search from './routes/Search';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/favourites" component={Favourites} />
            <ProtectedRoute exact path="/search/:searchQuery" component={Search} />
            <AuthRoute exact path="/signup" component={SignUp} />
            <AuthRoute exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
