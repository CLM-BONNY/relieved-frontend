import React from "react";
import * as style from "./styles";
import Button from "../Button/Button";

export default function Header(props) {
  return (
    <style.Wrap>
      <img
        onClick={() =>
          (
            props.backOnClick ??
            (() => {
              window.history.go(-1);
            })
          )()
        }
        src={process.env.PUBLIC_URL + "/Images/Header/BackIcon.svg"}
      />
      <span>{props.title}</span>
      {props.title === "제보하기" ? (
        <style.ButtonBlock>
          <Button
            width={"50px"}
            height={"30px"}
            fontSize={"15px"}
            onClick={() => (props.buttonOnClick ?? (() => {}))()}
          />
        </style.ButtonBlock>
      ) : props.title === "위험 장소 제보" ? (
        <style.ButtonBlock>
          <Button
            width={"60px"}
            height={"40px"}
            fontSize={"15px"}
            btnName={"제보하기"}
            onClick={() => (props.buttonOnClick ?? (() => {}))()}
          />
        </style.ButtonBlock>
      ) : null}
    </style.Wrap>
  );
}
