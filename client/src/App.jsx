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
import CollectionChamps from "./compononets/champion/CollectionChamps"
import { CollectionContext } from "./contexts/collectionContext"
import AuthGuard from "./compononets/guards/Authguard"
import GuestGuard from "./compononets/guards/GuestGuard"

function App() {
  const [authData, setAuthData] = useState({});
  const [champs, setChamps] = useState([]);

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };
  const userLogoutHandler = () => {
    setAuthData({});
  };

  const addToCollectionHandler = (champ) => {
    setChamps(state => [...state, champ]);
  };
  const removeCollectionHandler = (champId) => {
    setChamps(state => state.filter(champ => champ._id !== champId));
  }

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
      <CollectionContext.Provider value={{ champs, addToCollectionHandler, removeCollectionHandler }}>
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalogue" element={<AllChampionsCatalogue />}></Route>
            <Route element={<GuestGuard />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
            <Route element={<AuthGuard />}>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/:championId/details" element={<DetailChampion />}></Route>
              <Route path="/collection" element={<CollectionChamps />}></Route>
              <Route path="/create-champion" element={<CreateChampion />}></Route>
            </Route>
          </Routes>
        </>
      </CollectionContext.Provider>
    </UserContext.Provider>
  )
}

export default App
