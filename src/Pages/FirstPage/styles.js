import styled from "styled-components";

export const wrap = styled.div`
    position: relative;
    background-color: #83dcb7;
    height: 100vh;
    width: 100%;    
    display: flex;
    flex-direction : column;
    align-items: center;
    z-index: 0;
`;

export const header = styled.div`
    /* background-color: black; */
    color: #ffffff;
    /* padding: 15px; */
    padding-left: 50px;
    width: 100%;
    height: 60px;
    /* border-bottom: 4px solid black; */
`;

export const container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 90px 0px 30px 0px;
`;

export const icon = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    img{
        padding: 20px;
        background-color: white;
        border-radius: 180px;
        width: 75px;
        height: 75px;
    }
    padding: 24px;
    /* margin: 10px; */
    gap: 20px;
`;

export const iconInfo = styled.div`
    font-weight: 600;
`

// export const background = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   img {
//     width: 100%;
//   }
//   z-index: -1;
//   /* width: 100px; Set the desired width */
//   /* height: 305px; Set the desired height */
//   opacity: 0.8;
// `
export const char = styled.div`
  display: flex;
  align-items: center;
  /* background-color: white; */
  bottom: 60px;
  right: 20px;
  margin: 10px;
  padding: 15px;
  width: 45%;
  > img {
    width: 100%;
  }
`

export const Button = styled.button`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "5px"};
  background-color: #83dcb7;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
`;