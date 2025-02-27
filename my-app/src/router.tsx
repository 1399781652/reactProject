import * as React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/index"
import User from "./pages/user"
import Created from "./pages/Created"

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/created" element={<Created />} />
    </Routes>
  )
}

export default RootRouter