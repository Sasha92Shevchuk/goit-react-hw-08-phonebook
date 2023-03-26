import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #4a4a4a;
`;

export const LogOut = styled.button`
  background-color: #bbd1bdfc;
  border: none;
  border-radius: 5px;
  color: #333;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 250ms ease;
  :hover {
    background-color: #c8ddc9fc;
  }
`;
