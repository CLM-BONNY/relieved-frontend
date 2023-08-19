import axios from "axios";
import React, { useEffect } from "react";

const { kakao } = window;

const address2pos = (address) => {
  return new Promise((resolve, reject) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const lat = result[0].y;
        const lng = result[0].x;

        resolve({
          lat: Number.parseFloat(lat),
          lng: Number.parseFloat(lng),
        });
      } else {
        reject();
      }
    });
  });
};

const Map = (props) => {
  const title = "지도";
  const address = process.env.REACT_APP_API_ADDRESS;
  let map;

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    map = new kakao.maps.Map(container, options);

    switch (props.type) {
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
            marker.setMap(map);
          });
        });
    }
  }, []);

  useEffect(() => {
    if (props.type !== "way_back_home" || !props.from || !props.to) return;

    (async () => {
      let from = await address2pos(props.from);
      let to = await address2pos(props.to);

      let res = await axios.post(`${address}/walk`, {
        from,
        to,
      });
      let { safe, result } = res.data;
      if (!result.legs || !result.legs.length === 0) return;

      let linePath = [];
      for (let leg of result.legs) {
        for (let step of leg.steps) {
          if (!step.path) continue;
          step.path.split(" ").forEach((e) => {
            let [lng, lat] = e.split(",");
            linePath.push(new kakao.maps.LatLng(lat, lng));
          });
        }
      }

      let polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5,
        strokeColor: "#FFAE00",
        strokeOpacity: 0.7,
        strokeStyle: "solid",
      });
      polyline.setMap(map);

      safe.forEach((e) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(e.latitude, e.longitude),
        });
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${e.remark}</div>`,
        });
        kakao.maps.event.addListener(marker, "mouseover", function () {
          infowindow.open(map, marker);
        });
        kakao.maps.event.addListener(marker, "mouseout", function () {
          infowindow.close();
        });
      });

      map.setCenter(new kakao.maps.LatLng(from.lat, from.lng));
    })();
  }, [props.from, props.to]);

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
