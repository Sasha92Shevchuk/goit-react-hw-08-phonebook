import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 0 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Image = styled.img`
  display: block;
  border-radius: 10px 10px 0 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BtnDelete = styled.button`
  background-color: #bbd1bdfc;
  border: none;
  border-radius: 5px;
  color: #333;
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 250ms ease;
  :hover {
    background-color: #c8ddc9fc;
  }
`;
