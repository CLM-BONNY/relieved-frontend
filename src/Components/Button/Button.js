import React from "react";
import * as style from "./styles";

export default function Button(props) {
  return (
    <style.Button
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      onClick={() => (props.onClick ?? (() => {}))()}
    >
      {props.btnName ? <span>{props.btnName}</span> : "완료"}
    </style.Button>
  );
}
