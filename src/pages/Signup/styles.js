import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 240px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 10px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 10px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
