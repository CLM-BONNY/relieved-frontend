import React from "react";
import Header from "../../Components/Header/Header.js";
import Map from "../../Components/Map/Map.js";
import Footer from "../../Components/Footer/Footer.js";

export default function CourierBox() {
  const title = "안심 택배함";
  return (
    <>
      <Header title={title} />
      <Map type="courier_box" title={title}/>
      <Footer title={title} />
    </>
  );
}
