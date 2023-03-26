import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #4a4a4a;

  &.active {
    background-color: #bbd1bd;
    border-radius: 10px;
    color: #fff;
  }
`;
