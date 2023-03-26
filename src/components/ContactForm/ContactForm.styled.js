import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 
  font-weight: bold;
  color: #4a4a4a;
  input {
    width: 210px;
    height: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    font-size: 16px;
  }
`;

export const Submit = styled.button`
  width: 40px;
  height: 40px;
  background-color: #bbd1bdfc;
  font-weight: bold;
  color: #4a4a4a;
  margin-left: 20px;
  padding: 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 250ms ease-in-out;
  :before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.3;
    transform: skewX(-30deg);
    transition: left 250ms ease-in-out;
    z-index: -1;
  }
  :hover {
    color: #fff;

    :before {
      left: 100%;
    }
  }
`;
