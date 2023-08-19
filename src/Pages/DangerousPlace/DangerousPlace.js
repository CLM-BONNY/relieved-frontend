import React from "react";
import Header from "../../Components/Header/Header";
import Map from "../../Components/Map/Map";

export default function DangerousPlace() {
  return (
    <>
      <Header title="위험 장소 제보" />
      <Map type="dangerous_place" />
    </>
  );
}
