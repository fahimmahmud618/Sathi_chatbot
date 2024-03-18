import React from "react";
import logo from "./asset/sathi-logo.svg";
import userwhite from "./asset/userwhite.png";
import "./Home.css";
import ppolice from "./asset/police.png";
import ppasport from "./asset/passport.png";
import pbirth from "./asset/birth.png";
import pallowance from "./asset/allowance.png";
import pnid from "./asset/nid.png";
import pcitizen from "./asset/citizen.png";

import p333 from "./asset/333.png";
import pekshop from "./asset/ekshop.png";
import pekshoplogo from "./asset/ekshoplogo.png";
import penamjari from "./asset/enamjari.png";
import pereturn from "./asset/ereturn.png";
import pmygov from "./asset/mygov.png";
import pmuktopath from "./asset/muktopath.png";
import plogoset from "./asset/logoset.png";
import Navbar from "./Navbar";

export default function Home() {
  const gotochatClick = () => {
    alert("The div was clicked!");
  };
  return (
    <>
      <Navbar/>
      <div className="row introsec pb-4">
        <div class="col-6 introsec1 text-white">
          <div className="row sathiaitext">নৈপুণ্য এআই</div>
          <div className="row">
          নৈপুণ্য সেবা এখন হাতের মুঠোতে। নিজের ভাষায় নৈপুণ্য এআই এর সাথে চ্যাট করুন এবং
            প্রয়োজনীয় সেবা গ্রহন করুন
          </div>
          <div className="row">
            <a href="/chat">
            <div className="text-white gotochatbutton">
              চ্যাট করুন
            </div></a>
          </div>
        </div>
        <div class="col-6 introsec2 mt-4"></div>
      </div>
      
      <div className="space"></div>
      <div className="footer">
        <div className="footersec row">
          <div className="c1 col-3 ">
            <div className="row">কারিগরি সহায়তায়</div>
            <div className="ekslogo row">
              <img className="ekshhoplogo" src={pekshoplogo} alt="" />
            </div>
          </div>
          <div className="c2 col-6">
            Level 7, Asa Center, <br />
            House 44 Rd No. 2A, <br />
            Dhaka 1209
          </div>
          <div className="c2 col-3">
            <img className="logoset" src={plogoset} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
