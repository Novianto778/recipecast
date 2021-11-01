import React from 'react';
import {
  FooterContainer,
  FooterIcon,
  FooterItem,
  FooterList,
  FooterLogo,
  FooterSection,
} from './FooterElements';
import Logo from 'src/assets/images/logo.png';
import { FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer className="container">
        <FooterLogo src={Logo} />
        <FooterItem>
          <FooterList>Recipes</FooterList>
          <FooterList>Categories</FooterList>
          <FooterList>About</FooterList>
        </FooterItem>
        <FooterItem>
          <FooterList>Contact</FooterList>
          <FooterList>+12345678</FooterList>
          <FooterList>novianto778@gmail.com</FooterList>
        </FooterItem>
        <FooterItem row maxWidth>
          <FaInstagram className="icon" />
          <FaGithub className="icon" />
          <FaFacebook className="icon" />
        </FooterItem>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
