import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Footer from "../../Components/Footer/Footer";

export default function FirstPage() {
  const title = "메인";
  const navigate = useNavigate();

  return (
    <>
      <style.wrap>
        <span>Relieved</span>
        <style.container>
          <style.icon>
            <img
              src={process.env.PUBLIC_URL + "/Images/FirstPage/road-map.png"}
              alt="안심귀갓길"
              onClick={() => navigate("/wayBackHome")}
            />
            <style.iconInfo>안심 귀갓길</style.iconInfo>
          </style.icon>
          <style.icon>
            <img
              src={process.env.PUBLIC_URL + "/Images/FirstPage/package.png"}
              alt="안심택배함"
              onClick={() => navigate("/courierBox")}
            />
            <style.iconInfo>안심 택배함</style.iconInfo>
          </style.icon>
          <style.icon>
            <img
              src={process.env.PUBLIC_URL + "/Images/FirstPage/danger.png"}
              alt="위험장소"
              onClick={() => navigate("/dangerousPlace")}
            />
            <style.iconInfo>위험 장소 제보</style.iconInfo>
          </style.icon>
        </style.container>
        <style.char>
          <img
            src={process.env.PUBLIC_URL + "/Images/FirstPage/raccoon.png"}
            alt="너구리"
          />
        </style.char>
      </style.wrap>
      <Footer title={title} />
    </>
  );
}
