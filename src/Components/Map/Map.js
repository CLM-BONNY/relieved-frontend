import axios from "axios";
import React, { useEffect } from "react";
import * as style from "./styles.js";

const { kakao } = window;
let map;
let objects = [];

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

let loadingwindow;
const loading = (b) => {
  loadingwindow.setMap(b ? map : null);
  map.setDraggable(!b);
};

let gpswindow;
const gpsloading = (b) => gpswindow.setMap(b ? map : null);

const Map = (props) => {
  const title = "지도";
  const address = process.env.REACT_APP_API_ADDRESS;

  const getMyPos = async () => {
    // 시간이 조금 걸림. 로딩 화면 띄우면 좋을듯
    gpsloading(true);
    try {
      let { coords } = await new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej)
      );
      return { lat: coords.latitude, lng: coords.longitude };
    } catch (err) {
      console.log(err);
      return { lat: 33.450701, lng: 126.570667 };
    } finally {
      gpsloading(false);
    }
  };

  const setPos2MyPos = async () => {
    // 시간이 조금 걸림. 로딩 화면 띄우면 좋을듯
    let pos = await getMyPos();
    map.panTo(new kakao.maps.LatLng(pos.lat, pos.lng));
  };

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    map = new kakao.maps.Map(container, options);
    loadingwindow = new kakao.maps.CustomOverlay({
      content: `<div style="background-color:white;border-radius:10px;width:150px;text-align:center;padding:3px 5px;">잠시만 기다려주세요.</div>`,
    });
    gpswindow = new kakao.maps.CustomOverlay({
      content: `<div style="background-color:white;border-radius:10px;width:150px;text-align:center;padding:3px 5px;">GPS 로딩중...</div>`,
    });

    loadingwindow.setPosition(map.getCenter());
    gpswindow.setPosition(map.getCenter());
    kakao.maps.event.addListener(map, "center_changed", () => {
      loadingwindow.setPosition(map.getCenter());
      gpswindow.setPosition(map.getCenter());
    });

    setPos2MyPos();

    switch (props.type) {
      case "dangerous_place":
        loading(true);
        axios
          .get(`${address}/report`)
          .then((res) => {
            res.data.forEach((e) => {
              const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(e.lat, e.lng),
              });
              const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${e.detail}</div>`,
                removable: true,
              });
              kakao.maps.event.addListener(marker, "click", function () {
                infowindow.open(map, marker);
              });
              kakao.maps.event.addListener(marker, "mouseover", function () {
                infowindow.open(map, marker);
              });
              kakao.maps.event.addListener(marker, "mouseout", function () {
                infowindow.close();
              });
              marker.setMap(map);
            });
          })
          .finally(() => loading(false));
        break;
      case "courier_box":
        loading(true);
        axios
          .post(`${address}/mailbox`)
          .then((res) => {
            res.data.forEach((e) => {
              const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(e.wgsxpt, e.wgsypt),
              });
              const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${e.ansiminm}</div>`,
                removable: true,
              });
              kakao.maps.event.addListener(marker, "click", function () {
                infowindow.open(map, marker);
              });
              kakao.maps.event.addListener(marker, "mouseover", function () {
                infowindow.open(map, marker);
              });
              kakao.maps.event.addListener(marker, "mouseout", function () {
                infowindow.close();
              });
              marker.setMap(map);
            });
          })
          .finally(() => loading(false));
        break;
    }
  }, []);

  useEffect(() => {
    if (props.type !== "way_back_home" || !props.from || !props.to) return;
    loading(true);
    for (let obj of objects) {
      try {
        obj.setMap(null);
      } catch {}
    }
    objects = [];

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

      const polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5,
        strokeColor: "#FF0000",
        strokeOpacity: 0.7,
        strokeStyle: "solid",
      });
      polyline.setMap(map);
      objects.push(polyline);

      safe.forEach((e) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(e.latitude, e.longitude),
        });
        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;">${e.remark}</div>`,
          removable: true,
        });
        kakao.maps.event.addListener(marker, "click", function () {
          infowindow.open(map, marker);
        });
        kakao.maps.event.addListener(marker, "mouseover", function () {
          infowindow.open(map, marker);
        });
        kakao.maps.event.addListener(marker, "mouseout", function () {
          infowindow.close();
        });
        marker.setMap(map);
        objects.push(marker);
      });

      console.log(map);
      map.setCenter(new kakao.maps.LatLng(from.lat, from.lng));
    })().finally(() => loading(false));
  }, [props.from, props.to]);

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "100%",
          height: props.title === "안심 귀갓길" ? "70vh" : "90vh",
        }}
      ></div>
      <style.imgBtn>
        <img
          src={process.env.PUBLIC_URL + "/Images/CourierBox/CurrentIcon.svg"}
          onClick={() => {
            setPos2MyPos();
          }}
        />
      </style.imgBtn>
    </>
  );
};
export default Map;
