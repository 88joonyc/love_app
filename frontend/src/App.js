import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';

import * as sessionActions from './actions/session'

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch()
  const [ isLoaded, setLoaded ] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setLoaded(true))
  }, [dispatch])

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {!isLoaded && (
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
