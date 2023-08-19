import styled from "styled-components";

export const wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #83dcb7;
  width: 100%;
  height: 100vh;
  > span {
    padding: 40px;
    color: #ffffff;
    font-size: 50px;
    font-weight: 800;
  }
`;
export const container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  img {
    padding: 15px;
    background-color: #ffffff;
    border-radius: 180px;
    width: 75px;
    height: 75px;
  }
`;

export const iconInfo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const char = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 50%;
    height: 50%;
  }
`;
