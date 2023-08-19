import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";

function Write() {
  return (
    <>
      <Header
        title={"제보하기"}
      />
      <style.Wrap>
        <Input
          placeholder={"제목"}
          borderColor={"#e0e0e0"}
        />
        <Input
          marginBottom={"15px"}
          contentPlaceholder={"내용을 입력해 주세요"}
        />
      </style.Wrap>
    </>
  );
}

export default Write;