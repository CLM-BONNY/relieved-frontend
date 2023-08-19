import React from "react";
import * as style from "./styles.js";
import Header from "../../Components/Header/Header.js";
import Map from "../../Components/Map/Map.js";
import Footer from "../../Components/Footer/Footer.js";

export default function CourierBox() {
  const title = "안심 택배함";
  return (
    <>
      <Header title={title} />
      <Map type="courier_box" />
      <style.imgBtn>
        <img
          src={process.env.PUBLIC_URL + "/Images/CourierBox/CurrentIcon.svg"}
        />
      </style.imgBtn>
      <Footer title={title} />
    </>
  );
}
