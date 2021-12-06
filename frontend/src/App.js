import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';


import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import * as sessionActions from './actions/session'

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      {/* <LoginForm /> */}
      {/* <SignupForm /> */}
    </>

  );
}

export default App;
