import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  font-weight: bold;
  color: #4a4a4a;
  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    font-size: 16px;
  }
`;

export const Submit = styled.button`
  background-color: #bbd1bdfc;
  font-weight: bold;
  color: #4a4a4a;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
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
