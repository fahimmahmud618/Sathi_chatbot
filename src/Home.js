import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="bodyhome">
      <div className="d1 ps-4 pt-2">
        <h2 className="text-white">Sathi AI</h2>
        <p className="text-white">Your virtual Government Assistance </p>
      </div>
      <div className="d2">
        <center>
          <p className="hometitle pt-3 pb-3">
            <u>গুরুত্বপুর্ণ নাগরিক সেবা</u>
          </p>
          <div className="row p-3 d-flex justify-content-around">
            <div className="col">
              {" "}
              <li className="w-50 h-100">
                <a
                  target="blank"
                  href="https://pcc.police.gov.bd/ords/pcc2/r/pcc/home"
                >
                  পুলিশ ক্লিয়ারেন্স
                </a>
              </li>
            </div>
            <div className="col">
              {" "}
              <li className="w-50 h-100">
                <a
                  target="blank"
                  href="https://mowca.gov.bd/site/forms/df4ad3fe-8faa-48e2-a039-f246a44f01f7/%E0%A6%AC%E0%A6%BF%E0%A6%A7%E0%A6%AC%E0%A6%BE-%E0%A6%93-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%AE%E0%A7%80-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%A4-%E0%A6%AD%E0%A6%BE%E0%A6%A4%E0%A6%BE-%E0%A6%86%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8-%E0%A6%AB%E0%A6%B0%E0%A6%AE-"
                >
                  বয়স্ক এবং বিধবা ভাতা
                </a>
              </li>
            </div>
            <div className="col">
              {" "}
              <li className="w-50 h-100">
                <a target="blank" href="https://www.epassport.gov.bd/">
                  পাসপোর্ট
                </a>
              </li>
            </div>
          </div>
          <div className="row p-3 d-flex justify-content-around">
            <div className="col">
              {" "}
              <li className="w-50 h-100">
                <a target="blank" href="https://bdris.gov.bd/br/application">
                  নাগরিক সনদ
                </a>
              </li>
            </div>
            <div className="col">
              {" "}
              <li className="w-50 h-100">
                <a target="blank" href="https://bdris.gov.bd/br/application">
                  জন্ম নিবন্ধন
                </a>
              </li>
            </div>
            <div className="col">
              {" "}
              <li className="w-50 h-100">
                <a target="blank" href="https://www.nidw.gov.bd/">
                  জাতীয় পরিচয়পত্র
                </a>
              </li>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
