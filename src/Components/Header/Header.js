import React from "react";
import * as style from "./styles";
import Button from "../Button/Button";

export default function Header(props) {
  return (
    <style.Wrap>
      <img src={process.env.PUBLIC_URL + "/Images/Header/BackIcon.svg"} />
      <span>{props.title}</span>
      {props.title === "제보하기" && (
        <style.ButtonBlock>
          <Button width={"50px"} height={"30px"} fontSize={"15px"} />
        </style.ButtonBlock>
      )}
    </style.Wrap>
  );
}
