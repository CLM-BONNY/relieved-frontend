import axios from "axios";
import React, { useEffect } from "react";

const { kakao } = window;

const Map = (props) => {
  const title = "지도";
  const data = props.data;
  const address = process.env.REACT_APP_API_ADDRESS;

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    switch (data.type) {
      case "dangerous_place":
        axios.get(`${address}/report`).then((res) => {
          res.data.forEach((e) => {
            const marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(e.lat, e.lng),
            });
            const infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${e.detail}</div>`,
            });
            kakao.maps.event.addListener(marker, "mouseover", function () {
              infowindow.open(map, marker);
            });
            kakao.maps.event.addListener(marker, "mouseout", function () {
              infowindow.close();
            });
          });
        });
    }
  }, []);

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
    </>
  );
};
export default Map;
