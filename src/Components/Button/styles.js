import styled from "styled-components";

export const Button = styled.div`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "5px"};
  background-color: #83dcb7;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
`;
