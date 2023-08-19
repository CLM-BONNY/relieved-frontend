import React from "react";
import * as style from "./styles.js";
import Header from "../../Components/Header/Header.js";
import Map from "../../Components/Map/Map.js";

export default function CourierBox() {
  return (
    <>
      <Header title={"안심 택배함"} />
      <Map type="courier_box" />
      <style.imgBtn>
        <img
          src={process.env.PUBLIC_URL + "/Images/CourierBox/CurrentIcon.svg"}
        />
      </style.imgBtn>
    </>
  );
}
