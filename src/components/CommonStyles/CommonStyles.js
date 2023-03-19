import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  text-align: center;
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
