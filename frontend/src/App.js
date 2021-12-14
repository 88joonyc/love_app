import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';

import * as sessionActions from './actions/session'
import { connect, loadConnection, couple } from "./actions/connection";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Connect from "./pages/connect";

function App() {
  const dispatch = useDispatch()
  const [ isLoaded, setLoaded ] = useState(false)
  const [ connected, setConnected ] = useState(false)

  const user = useSelector(state => state.session.user)
  console.log('================thisis id===================', user?.id)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true))
    // dispatch(loadConnection()).then(() => setConnected(true))
    dispatch(couple({ id: user?.id }))
  }, [dispatch])


  return (
    <>
      {user && <Navigation isLoaded={isLoaded} connected={connected} />}
      {isLoaded && (
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          {!connected && <Route path='/connect' element={<Connect />} />}
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
