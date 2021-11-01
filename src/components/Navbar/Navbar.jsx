import React, { useState } from 'react';
import Logo from 'src/assets/images/logo.png';
import { useLocation } from 'react-router-dom';

import {
  NavContainer,
  NavLogo,
  NavMenu,
  NavLink,
  MenuIcon,
  NavWrapper,
  NavItem,
  NavList,
  NavButton,
  CloseIcon,
} from './NavbarElements';

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const { pathname } = useLocation();

  const handleShow = () => {
    setIsShow(true);
  };

  const handleHide = () => {
    setIsShow(false);
  };
  return (
    <NavContainer>
      <NavLogo src={Logo} />
      <MenuIcon onClick={handleShow} />
      <NavWrapper show={isShow}>
        <NavLogo src={Logo} />
        <NavMenu>
          <CloseIcon onClick={handleHide} />
          <NavList>
            <NavItem>
              <NavLink to="/" active={pathname === '/' ? 'active' : ''}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/categories"
                active={pathname === '/categories' ? 'active' : ''}
              >
                Categories
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/popular"
                active={pathname === '/popular' ? 'active' : ''}
              >
                Popular
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about"
                active={pathname === '/about' ? 'active' : ''}
              >
                About
              </NavLink>
            </NavItem>
          </NavList>
        </NavMenu>
        <NavButton variant="shaped" primary>
          Login
        </NavButton>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
