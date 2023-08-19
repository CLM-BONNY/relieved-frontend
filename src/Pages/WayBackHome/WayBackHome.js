import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import Map from "../../Components/Map/Map";

export default function WayBackHome() {
  return (
    <>
      <Header title={"안심 귀갓길"} />
      <style.location>
        <img
          src={process.env.PUBLIC_URL + "/Images/WayBackHome/DepartIcon.svg"}
        />
        <Input placeholder={"출발지를 입력해 주세요"} />
      </style.location>
      <style.location>
        <img
          src={process.env.PUBLIC_URL + "/Images/WayBackHome/ArriveIcon.svg"}
        />
        <Input placeholder={"도착지를 입력해 주세요"} />
      </style.location>
      <Map />
    </>
  );
}
