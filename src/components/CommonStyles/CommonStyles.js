import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;
export const ContactNav = styled.div`
  margin: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
`;

export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  background-image: linear-gradient(90deg, #11f12d, #11aff1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Box = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnAddContact = styled.button`
  background-color: #f3bf3c;
  border: none;
  border-radius: 50%;
  color: #646363;
  width: 60px;
  height: 60px;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms ease;
  transition: color 250ms ease;
  :hover {
    background-color: #bbd1bdfc;
    color: #fff;
  }
`;
