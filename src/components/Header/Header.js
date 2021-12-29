import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          href=''
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <DiCssdeck size='3rem' />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    {/*  TODO : change links */}
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
