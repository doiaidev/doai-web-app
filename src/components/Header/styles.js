import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  @media (max-width: 720px) {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      margin-left: -20px;
      height: 64px;
    }

    a {
      font-weight: bold;
      color: ${props => (props.active ? '#791a3c' : '#FD79A8')};
      margin-left: 60px;
      font-size: 24px;
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        color: ${props => (props.active ? '#FD79A8' : '#791a3c')};
        transition: all 0.15s ease-in-out;
      }
    }

  }

  @media (max-width: 1030px) {
    nav {
    display: flex;
    align-items: left;

    img {
      margin-right: 20px;
      padding-right: 20px;
      margin-left: -20px;
      height: 64px;
    }

    a {
      font-weight: bold;
      color: ${props => (props.active ? '#791a3c' : '#FD79A8')};
      margin-left: 20px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        color: ${props => (props.active ? '#FD79A8' : '#791a3c')};
        transition: all 0.15s ease-in-out;
      }
    }

  }
  }
`;

export const MenuResponsive = styled.a`
  @media (min-width: 720px) {
    background: #444;
  }
`;

export const Profile = styled.div`
  display: flex;
  text-align: right;

  strong {
    display: block;
    color: #333;
  }

  a {
    font-family: 'Roboto', sans-serif;
    display: block;
    margin-top: 2px;
    padding: 10px 30px;
    font-size: 16px;
    color: #fff;
    border-radius: 22px;
    font-weight: bold;
    cursor: pointer;
    border: 2px solid #FFC800;
    background: #FFC800;
    transition: all 0.15s ease-in-out;

    &:hover {
      color: #fff;
      background: #FD79A8;
      box-shadow: 0 0 12px #FD79A8;
      border: 2px solid #fff;
      transition: all 0.15s ease-in-out;
    }
  }

  @media (max-width: 1030px) {
    a {
    font-family: 'Roboto', sans-serif;
    display: block;
    margin-top: 1px;
    padding: 5px 10px;
    font-size: 12px;
    color: #fff;
    border-radius: 22px;
    font-weight: bold;
    cursor: pointer;
    border: 2px solid #FFC800;
    background: #FFC800;
    transition: all 0.15s ease-in-out;

    &:hover {
      color: #fff;
      background: #FD79A8;
      box-shadow: 0 0 12px #FD79A8;
      border: 2px solid #fff;
      transition: all 0.15s ease-in-out;
    }
  }
  }
`;

export const ActiveLink = styled(NavLink).attrs(props => ({}))`
  font-weight: bold;
  color: ${colors.normalLink};
`;
