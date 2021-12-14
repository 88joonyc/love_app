import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';

import * as sessionActions from './actions/session'
import { couple } from "./actions/connection";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Connect from "./pages/connect";

function App() {
  const dispatch = useDispatch()
  const [ isLoaded, setLoaded ] = useState(false)
  const [ connected, setConnected ] = useState(true)

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setLoaded(true))
  }, [dispatch])

  useEffect(() => {
    dispatch(couple({id: user?.id})).then(() => setConnected(false))
  }, [user?.id])

  return (
    <>
      {user && <Navigation isLoaded={isLoaded} connected={connected} setConnected={setConnected}/>}
      {isLoaded && (
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          {connected && <Route path='/connect' element={<Connect />} />}
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
