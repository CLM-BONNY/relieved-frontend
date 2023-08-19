import React, { useState } from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import Map from "../../Components/Map/Map";

const search = (callback) => {
  let search = new window.daum.Postcode({
    oncomplete: (data) => {
      console.log(data);
      if (callback) callback(data);
    },
  });
  search.open();
};

export default function WayBackHome() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <>
      <Header title={"안심 귀갓길"} />
      <style.location>
        <img
          src={process.env.PUBLIC_URL + "/Images/WayBackHome/DepartIcon.svg"}
        />
        <Input
          placeholder={"출발지를 입력해 주세요"}
          onClick={() => {
            search((data) => setFrom(data.address));
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
            search((data) => setTo(data.address));
          }}
          value={to}
        />
      </style.location>
      <Map type="way_back_home" from={from} to={to} />
    </>
  );
}
