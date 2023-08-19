import React from "react";
import * as style from "./styles";

export default function Input(props) {
  return (
    <style.Input
      backgroundColor={props.backgroundColor}
      height={props.height}
      fontWeight={props.fontWeight}
      borderColor={props.borderColor}
      color={props.color || "#808080"}
      padding={props.padding}
      marginBottom={props.marginBottom}
    >
      {props.contentPlaceholder ? (
        <textarea
          name={props.name}
          type={props.type || "text"}
          placeholder={props.contentPlaceholder}
        />
      ) : (
        <input
          name={props.name}
          type={props.type || "text"}
          placeholder={props.placeholder}
        />
      )}
    </style.Input>
  );
}
