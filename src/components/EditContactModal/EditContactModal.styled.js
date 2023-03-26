import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Modal = styled.div`
  position: relative;
  width: 250px;
  padding: 24px;
  background-color: #fff;
  z-index: 10;
  border-radius: 10px;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelModal = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  font-weight: bold;
  color: #4a4a4a;
  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    font-size: 16px;
  }
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 0;
  color: rgb(74, 74, 74);
  background-color: #fff;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;
