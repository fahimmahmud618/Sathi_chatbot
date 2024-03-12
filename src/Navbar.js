import React from 'react'
import logo from "./asset/sathi-logo.svg";
import userwhite from "./asset/userwhite.png";
import './Home.css';
export default function Navbar() {
  return (
    <div class="navbg row p-2">
        <div class="col-1">
        <a href="\">          <img className="navimg" src={logo} alt="" />
</a>
        </div>
        <div class="col-9"></div>
        <div class="col-1">FAQ</div>
        <div class="col-1">
          <img className="navimg" src={userwhite} alt="" />
        </div>
      </div>
  )
}