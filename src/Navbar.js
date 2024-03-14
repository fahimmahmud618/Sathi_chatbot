import React from 'react'
import logo from "./asset/noipunno-new-logo.png";
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
          <img className="navimg2" src={userwhite} alt="" />
        </div>
      </div>
  )
}