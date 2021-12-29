import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='footer'>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+918910474969'>+918910474969</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:hisupriyooo@gmail.com'>
            hisupriyooo@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target='_blank' href='https://github.com/supriyoMondal'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            target='_blank'
            href='https://www.linkedin.com/in/supriyo-mondal-306944178/'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons
            target='_blank'
            href='https://m.facebook.com/100007614071055/'
          >
            <AiFillFacebook size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
