import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 18px;
  background: none;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  color: rgb(200, 10, 10);
  transition: box-shadow 150ms linear, transform 250ms ease-in-out;
  &:before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
    }
  
  &:hover {
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.6);
    background: rgb(200, 10, 10);
    border: 1px solid rgb(200, 10, 10);
    color: #fff;
  }
  &:hover:before {
    left: 150px;
    transition: .5s ease-in-out;
    }
`;

export const InfoTitle = styled.h3`
  margin-bottom: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  max-width: 100px;
  max-height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: black;
  transition: color 250ms linear, border 250ms linear;
  &.active {
    background-color: orangered;
    color: white;
    border: 1px solid orangered;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.6);
  }
  :hover:not(.active) {
    color: orangered;
    border: 1px solid orangered;
  }
`;