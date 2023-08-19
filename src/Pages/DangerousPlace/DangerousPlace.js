import React from "react";
import Header from "../../Components/Header/Header";
import Map from "../../Components/Map/Map";
import Footer from "../../Components/Footer/Footer";

export default function DangerousPlace() {
  const title = "위험 장소 제보";
  return (
    <>
      <Header title={title} />
      <Map type="dangerous_place" title={title}/>
      <Footer title={title} />
    </>
  );
}
