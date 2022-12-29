import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;

  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  :last-child {
    margin-left: 20px;
  }
  :first-child {
    margin-left: 50px;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;

  // padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  // justify-content: space-between;
  gap: 15 px;
  padding: 8px 40px;

  margin-bottom: 20px;
  font-size: 20px;
  background-color: #e6b0aa;
  // border-bottom: 1px solid black;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  > nav {
    display: flex;
  }
`;
