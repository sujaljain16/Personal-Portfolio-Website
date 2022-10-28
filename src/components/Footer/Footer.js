import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:+91-7985473932'>+91-7985473932</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>MailTo</LinkTitle>
      <LinkItem href='mailto:jainsujal2001@gmail.com'>jainsujal2001@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
          <Slogan>Focusing one thing at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href='https://github.com/sujaljain16'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/sujal-jain-30a5791b8/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/_sujal__jain/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
