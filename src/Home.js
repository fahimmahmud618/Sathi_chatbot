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
      <div className="row introsec">
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
        <div class="col-6 introsec2 text-white"></div>
      </div>
      <div className="row headingseba">গুরুত্বপুর্ণ নাগরিক সেবা</div>
      <div className="row justify-content-md-center">
        <a
          className="col-1 aa"
          target="blank"
          href="https://pcc.police.gov.bd/ords/pcc2/r/pcc/home"
        >
                      <img className="sebalogos" src={ppolice} alt="" />

          পুলিশ ক্লিয়ারেন্স
        </a>

        <a
          className="col-1 aa"
          target="blank"
          href="https://mowca.gov.bd/site/forms/df4ad3fe-8faa-48e2-a039-f246a44f01f7/%E0%A6%AC%E0%A6%BF%E0%A6%A7%E0%A6%AC%E0%A6%BE-%E0%A6%93-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%AE%E0%A7%80-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%A4-%E0%A6%AD%E0%A6%BE%E0%A6%A4%E0%A6%BE-%E0%A6%86%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8-%E0%A6%AB%E0%A6%B0%E0%A6%AE-"
        >
                    <img className="sebalogos" src={pallowance} alt="" />
বয়স্ক এবং বিধবা ভাতা
        </a>

        <a
          className="col-1 aa"
          target="blank"
          href="https://www.epassport.gov.bd/"
        >
                    <img className="sebalogos" src={ppasport} alt="" />
পাসপোর্ট
        </a>

        <a
          className="col-1 aa"
          target="blank"
          href="https://bdris.gov.bd/br/application"
        >
          <img className="sebalogos" src={pcitizen} alt="" />
          নাগরিক সনদ
        </a>

        <a
          className="col-1 aa"
          target="blank"
          href="https://bdris.gov.bd/br/application"
        >
           <img className="sebalogos" src={pbirth} alt="" />
         জন্ম নিবন্ধন
        </a>

        <a className="col-1 aa" target="blank" href="https://www.nidw.gov.bd/">
        <img className="sebalogos" src={pnid} alt="" />
          জাতীয় পরিচয়পত্র
        </a>
      </div>
      <div className="space"></div>
      <div className="row headingseba">সকল স্মার্ট সেবা</div>
      <div className="row justify-content-md-center">
        <a className="col-1 aa" target="blank" href="">
          <img className="sebalogos" src={pmygov} alt="" />
          মাই গভ
        </a>

        <a className="col-1 aa" target="blank" href="">
          <img className="sebalogos" src={pereturn} alt="" />
          ই-রিটার্ন
        </a>

        <a className="col-1 aa" target="blank" href="">
          <img className="sebalogos" src={p333} alt="" />
          ৩৩৩
        </a>

        <a className="col-1 aa" target="blank" href="">
          <img className="sebalogos" src={pekshop} alt="" />
          একশপ
        </a>

        <a className="col-1 aa" target="blank" href="">
          <img className="sebalogos" src={penamjari} alt="" />
          ই-নামজারি
        </a>

        <a className="col-1 aa" target="blank" href="">
          <img className="sebalogos" src={pmuktopath} alt="" />
          মুক্তপাঠ
        </a>
      </div>
      <div className="space"></div>
      <div className="footer">
        <div className="footersec row">
          <div className="c1 col-2 ">
            <div className="row">কারিগরি সহায়তায়</div>
            <div className="ekslogo row">
              <img className="ekshhoplogo" src={pekshoplogo} alt="" />
            </div>
          </div>
          <div className="c1 col-2">
            Level 7, Asa Center, <br />
            House 44 Rd No. 2A, <br />
            Dhaka 1209
          </div>
          <div className="col-5"></div>
          <div className="c1 col-3">
            <img className="logoset" src={plogoset} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
