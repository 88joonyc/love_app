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
import Message from "./pages/message";

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
      {user && <Navigation isLoaded={isLoaded} setLoaded={setLoaded} connected={connected} setConnected={setConnected}/>}
        <Routes>
          {isLoaded && <Route path='/messages' element={<Message />} />}
          {isLoaded && <Route path='/connect' element={<Connect />} />}
          <Route path='/login' element={<LoginForm setLoaded={setLoaded} />} />
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
      )
      <Footer />
    </>
  );
}

export default App;
