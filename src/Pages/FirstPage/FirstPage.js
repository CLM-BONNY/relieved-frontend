import React from "react";
import * as style from "./styles";

export default function FirstPage(props) {
    return (
        <style.wrap>
            <style.header><h1>Relieved</h1></style.header>
            <style.container>
                <style.icon>
                    <img src={process.env.PUBLIC_URL + "/Images/FirstPage/road-map.png"} alt="안심귀갓길" />
                    <style.iconInfo>
                        안심 귀갓길
                    </style.iconInfo>
                </style.icon>
                <style.icon>
                    <img src={process.env.PUBLIC_URL + "/Images/FirstPage/package.png"} alt="안심택배함" />
                    <style.iconInfo>
                        안심 택배함
                    </style.iconInfo>
                </style.icon>
                <style.icon>
                    <img src={process.env.PUBLIC_URL + "/Images/FirstPage/danger.png"} alt="위험장소" />
                    <style.iconInfo>
                        위험 장소 제보
                    </style.iconInfo>
                </style.icon>
      
            </style.container>
            
            {/* <style.background>
                <img src={process.env.PUBLIC_URL + "/Images/FirstPage/landscape.png"} alt="배경" />
            </style.background>   */}

            <style.char>
                <img src={process.env.PUBLIC_URL + "/Images/FirstPage/raccoon.png"} alt="너구리" />
            </style.char> 
                
        </style.wrap>

    );
}