import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Button from "../Button/Button";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <style.Wrap>
      <img
        src={process.env.PUBLIC_URL + "/Images/Header/BackIcon.svg"}
        onClick={() => navigate(-1)}
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
            width={"70px"}
            height={"30px"}
            fontSize={"15px"}
            btnName={"제보하기"}
            onClick={() => navigate("/report")}
          />
        </style.ButtonBlock>
      ) : null}
    </style.Wrap>
  );
}
