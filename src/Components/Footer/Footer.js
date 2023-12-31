import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

function Footer(props) {
  const navigate = useNavigate();

  return (
    <style.Wrap>
      <style.Menu>
        <style.BtnLink>
          {props.title !== "메인" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/MainIcon.svg"}
              onClick={() => navigate("/")}
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/SelectMainIcon.svg"}
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "안심 귀갓길" ? (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/WayBackHomeIcon.svg"
              }
              onClick={() => navigate("/wayBackHome")}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL +
                "/Images/Footer/SelectWayBackHomeIcon.svg"
              }
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "안심 택배함" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/CourierBoxIcon.svg"}
              onClick={() => navigate("/courierBox")}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL +
                "/Images/Footer/SelectCourierBoxIcon.svg"
              }
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "위험 장소 제보" ? (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/DangerousPlaceIcon.svg"
              }
              onClick={() => navigate("/dangerousPlace")}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL +
                "/Images/Footer/SelectDangerousPlaceIcon.svg"
              }
            />
          )}
        </style.BtnLink>
        <style.BtnLink>
          {props.title !== "제보하기" ? (
            <img
              src={process.env.PUBLIC_URL + "/Images/Footer/ReportIcon.svg"}
              onClick={() => navigate("/report")}
            />
          ) : (
            <img
              src={
                process.env.PUBLIC_URL + "/Images/Footer/SelectReportIcon.svg"
              }
            />
          )}
        </style.BtnLink>
      </style.Menu>
    </style.Wrap>
  );
}

export default Footer;
