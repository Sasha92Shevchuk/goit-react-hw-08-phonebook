import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 0 20px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-width: 800px;
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
  width: 40px;
  height: 40px;
  border-radius: 5px;
  color: #646363;
  margin-left: 20px;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms ease;
  transition: color 250ms ease;
  :hover {
    background-color: #c8ddc9fc;
    color: #fff;
  }
`;
export const BtnEdit = styled.button`
  background-color: #c8ddc9fc;
  border: none;
  border-radius: 5px;
  color: #646363;
  margin-left: auto;
  width: 40px;
  height: 40px;
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
