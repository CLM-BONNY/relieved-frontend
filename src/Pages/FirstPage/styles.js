import styled from "styled-components";

export const wrap = styled.div`
  position: relative;
  background-color: #83dcb7;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

export const header = styled.div`
  color: #ffffff;
  padding: 40px 0px 0px 90px;
  width: 100%;
  height: 60px;
  font-size: 50px;
  font-weight: 800;
`;

export const container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 80px 0px 30px 0px;
`;

export const icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding: 20px;
    background-color: white;
    border-radius: 180px;
    width: 75px;
    height: 75px;
  }
  padding: 24px;
  gap: 20px;
`;

export const iconInfo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const char = styled.div`
  display: flex;
  align-items: center;
  margin: 50px;
  width: 45%;
  > img {
    width: 100%;
  }
`;
