import { Route, Routes } from "react-router"
import Home from "./compononets/Home"
import AllChampionsCatalogue from "./compononets/champion/AllChampionsCatalogue"
import Login from "./compononets/Authentication/Login"
import Register from "./compononets/Authentication/Register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/catalogue" element={<AllChampionsCatalogue />}></Route>
      </Routes>
    </>
  )
}

export default App
