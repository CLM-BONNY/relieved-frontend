import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";

let pos;

function Write() {
  const title = "제보하기";
  const address = process.env.REACT_APP_API_ADDRESS;

  const navigate = useNavigate();
  const getMyPos = async () => {
    // 시간이 조금 걸림. 로딩 화면 띄우면 좋을듯
    try {
      let { coords } = await new Promise((res, rej) =>
        navigator.geolocation.getCurrentPosition(res, rej)
      );
      return { lat: coords.latitude, lng: coords.longitude };
    } catch (err) {
      console.log(err);
      alert("위치 정보를 가져올 수 없습니다. 제보 기능을 이용할 수 없습니다.");
      navigate("/dangerousPlace");
    }
  };

  getMyPos().then((e) => {
    pos = e;
  });

  let [detail, setDetail] = useState("");

  return (
    <>
      <Header
        title={title}
        buttonOnClick={() => {
          if (!pos) {
            alert("위치정보를 가지고 오는 중입니다. 잠시만 기다려주세요.");
            return;
          }
          axios
            .post(`${address}/report`, {
              detail,
              ...pos,
            })
            .then(() => {
              alert("제보가 완료되었습니다.");
              navigate("/dangerousPlace");
            });
        }}
      />
      <style.Wrap>
        <Input
          marginBottom={"15px"}
          contentPlaceholder={"내용을 입력해 주세요"}
          onChange={(e) => setDetail(e.target.value)}
          value={detail}
        />
      </style.Wrap>
      <Footer title={title} />
    </>
  );
}

export default Write;
