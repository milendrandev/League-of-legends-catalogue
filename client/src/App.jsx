import { Route, Routes } from "react-router"

import Home from "./compononets/Home"
import AllChampionsCatalogue from "./compononets/champion/AllChampionsCatalogue"
import Login from "./compononets/Authentication/Login"
import Register from "./compononets/Authentication/Register"
import Header from "./compononets/Header"
import CreateChampion from "./compononets/champion/CreateChampion"
import DetailChampion from "./compononets/champion/DetailChampion"
import Logout from "./compononets/Authentication/Logout"
import CollectionChamps from "./compononets/champion/CollectionChamps"
import AuthGuard from "./compononets/guards/Authguard"
import GuestGuard from "./compononets/guards/GuestGuard"
import UserProvider from "./compononets/providers/UserProvider"
import MyCollectionProvider from "./compononets/providers/MyCollectionProvider"
import Profile from "./compononets/Authentication/Profile"
import EditChampion from "./compononets/champion/EditChampion"

function App() {
  return (
    <UserProvider>
      <MyCollectionProvider>
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
              <Route path="/:championId/edit" element={<EditChampion />}></Route>
              <Route path="/collection" element={<CollectionChamps />}></Route>
              <Route path="/create-champion" element={<CreateChampion />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>

        </>
      </MyCollectionProvider>
    </UserProvider>
  )
}

export default App
