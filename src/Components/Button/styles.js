import styled from "styled-components";

export const Button = styled.div`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "5px"};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #83dcb7;
  text-align: center;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: 600;
  border-radius: 10px;
`;
