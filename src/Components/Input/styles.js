import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: ${(props) => props.marginBottom || "20px"};
  > span {
    font-weight: 600;
    font-size: 16px;
    color: #808080;
    margin-bottom: 5px;
  }
  > input {
    height: ${(props) => props.height};
    border: none;
    border-bottom: 2px solid ${(props) => props.borderColor || "#e0e0e0"};
    padding: ${(props) => props.padding || "12px 15px"};
    background-color: ${(props) => props.backgroundColor};
    font-size: 16px;
    font-weight: ${(props) => props.fontWeight || 400};
    color: ${(props) => props.color};
    &:hover,
    &:focus-visible {
      border: none;
      outline: none;
      border-bottom: 2px solid ${(props) => props.borderColor || "#e0e0e0"};
    }
    &::placeholder {
      color: ${(props) => props.color};
      font-weight: ${(props) => props.fontWeight};
    }
  }
  > textarea {
    height: 70vh;
    border: none;
    padding: 12px 15px;
    font-size: 16px;
    font-weight: 400;
    &:hover,
    &:focus-visible {
      border: none;
      outline: none;
    }
  }
`;