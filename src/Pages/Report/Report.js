import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import axios from "axios";

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
    window.history.go(-1);
  }
};

function Write() {
  const address = process.env.REACT_APP_API_ADDRESS;
  let pos;
  getMyPos().then((e) => {
    pos = e;
  });

  let detail = "";

  return (
    <>
      <Header
        title={"제보하기"}
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
              window.history.go(-1);
            });
        }}
      />
      <style.Wrap>
        <Input
          marginBottom={"15px"}
          contentPlaceholder={"내용을 입력해 주세요"}
          value={detail}
        />
      </style.Wrap>
    </>
  );
}

export default Write;
