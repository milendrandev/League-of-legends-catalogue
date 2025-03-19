import { useState } from "react"
import { Route, Routes } from "react-router"

import { UserContext } from "./contexts/UserContext"

import Home from "./compononets/Home"
import AllChampionsCatalogue from "./compononets/champion/AllChampionsCatalogue"
import Login from "./compononets/Authentication/Login"
import Register from "./compononets/Authentication/Register"
import Header from "./compononets/Header"
import CreateChampion from "./compononets/champion/CreateChampion"
import DetailChampion from "./compononets/champion/DetailChampion"
import Logout from "./compononets/Authentication/Logout"

function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };
  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/catalogue" element={<AllChampionsCatalogue />}></Route>
          <Route path="/catalogue/:championId/details" element={<DetailChampion />}></Route>
          <Route path="/create-champion" element={<CreateChampion />}></Route>
        </Routes>
      </>
    </UserContext.Provider>
  )
}

export default App
