import React from 'react'
import { PiButterflyBold } from "react-icons/pi";

import { NavLink, Navbar } from "./HeaderElements"

function Header() {
  return (
    <Navbar>
        <NavLink to="/info">info</NavLink>
        <NavLink to="/"> <PiButterflyBold /></NavLink>
        <NavLink to="/showcase">showcase</NavLink>
    </Navbar>
  )
}

export default Header
