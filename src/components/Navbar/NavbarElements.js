import styled, { css } from 'styled-components';
import { ReactComponent as Menu } from 'src/assets/menu.svg';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button/Button';
import { FaTimes } from 'react-icons/fa';

export const NavContainer = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 2rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  background-color: #fff;
  height: 100vh;
  width: 100%;
  grid-template-rows: 1fr 2fr 1fr;
  row-gap: 2rem;
  display: grid;
  padding: 0 2rem;
  left: ${(props) => (props.show ? 0 : '-100%')};
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    left: 0;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: var(--nav-height);
    column-gap: 1rem;
    justify-content: space-between;
    height: var(--nav-height);
  }
`;

export const NavLogo = styled.img`
  width: 160px;
  align-self: center;
`;

export const NavMenu = styled.div`
  padding: 0;
  align-self: center;
`;

export const NavList = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  margin: 4rem 0;
  position: relative;

  @media screen and (min-width: 768px) {
    margin: 2rem;
  }
`;

export const NavLink = styled(Link)`
  color: var(--body);
  font-size: 1.5rem;

  ${(props) =>
    props.active &&
    css`
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        bottom: -4px;
        left: 0;
        border-radius: 20px;
        background: var(--primary);
      }
    `}
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const MenuIcon = styled(Menu)`
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  width: 32px;
  height: 32px;
  display: block;
  position: absolute;
  cursor: pointer;

  top: 30px;
  right: 30px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavButton = styled(Button)`
  align-self: center;
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
