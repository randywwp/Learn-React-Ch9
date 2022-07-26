/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import PlayRPS from './components/game/rock-paper-siscors/Play'
import GameHome from './components/game/Index'
import { getUser } from './firebase'

import './App.partial.css'

function App () {
  const [user] = useAuthState(auth)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    async function fetchdata() {
      if (user) {
        const data = await getUser(user.uid)
        setUserData(data)
      }
    }
    fetchdata()
  }, [user])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="game" element={<GameHome />}>
        <Route path="rock-paper-sisccors" element={<PlayRPS user={userData} /> }/>
      </Route>
    </Routes>
  )
}

export default App
