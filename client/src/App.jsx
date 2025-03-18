import { Route, Routes } from "react-router"
import Home from "./compononets/Home"
import AllChampionsCatalogue from "./compononets/champion/AllChampionsCatalogue"
import Login from "./compononets/Authentication/Login"
import Register from "./compononets/Authentication/Register"
import Header from "./compononets/Header"
import CreateChampion from "./compononets/champion/CreateChampion"

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/catalogue" element={<AllChampionsCatalogue />}></Route>
        <Route path="/create-champion" element={<CreateChampion />}></Route>
      </Routes>
    </>
  )
}

export default App
