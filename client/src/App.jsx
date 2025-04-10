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
import Profile from "./compononets/Authentication/Profile"
import EditChampion from "./compononets/champion/EditChampion"
import Footer from "./compononets/Footer"
import Faq from "./compononets/footer-links/Faq"
import TermsOfUse from "./compononets/footer-links/TermsOfUse"

function App() {
  return (
    <UserProvider>
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalogue" element={<AllChampionsCatalogue />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/terms-of-use" element={<TermsOfUse />}></Route>
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
    </UserProvider>
  )
}

export default App
