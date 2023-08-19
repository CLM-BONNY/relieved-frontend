import React, { useState } from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import Map from "../../Components/Map/Map";
import Footer from "../../Components/Footer/Footer";

const search = (callback) => {
  let search = new window.daum.Postcode({
    oncomplete: (data) => {
      console.log(data);
      if (callback) callback(data);
    },
  });
  // search.open();
  search.embed(document.getElementById("search"));
};

export default function WayBackHome() {
  const title = "안심 귀갓길";
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searchMode, setSearchMode] = useState("");

  return (
    <>
      <Header title={title} />
      <div style={{ display: searchMode ? "block" : "none" }}>
        <style.location>
          <div
            id="search"
            style={{
              width: "100%",
            }}
          >
            <img
              src="//t1.daumcdn.net/postcode/resource/images/close.png"
              id="btnFoldWrap"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "20px",
                top: "60px",
                "z-index": "1",
              }}
              onClick={() => {
                document.querySelector("#search > div").remove();
                setSearchMode(false);
              }}
              alt="접기 버튼"
            ></img>
          </div>
        </style.location>
      </div>
      <div
        style={{
          display: searchMode ? "none" : "block",
        }}
      >
        <style.location>
          <img
            src={process.env.PUBLIC_URL + "/Images/WayBackHome/DepartIcon.svg"}
          />
          <Input
            placeholder={"출발지를 입력해 주세요"}
            onClick={() => {
              setSearchMode(true);
              search((data) => {
                setSearchMode(false);
                setFrom(data.address);
              });
            }}
            value={from}
          />
        </style.location>
        <style.location>
          <img
            src={process.env.PUBLIC_URL + "/Images/WayBackHome/ArriveIcon.svg"}
          />
          <Input
            placeholder={"도착지를 입력해 주세요"}
            onClick={() => {
              setSearchMode(true);
              search((data) => {
                setSearchMode(false);
                setTo(data.address);
              });
            }}
            value={to}
          />
        </style.location>
        <Map type="way_back_home" from={from} to={to} title={title} />
      </div>
      <Footer title={title} />
    </>
  );
}
