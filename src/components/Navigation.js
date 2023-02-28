import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'

const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
`
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;

  .mobile{
    display: none;
  }

  @media(max-width: 64em){
    .desktop{
      display: none;
    }
    .mobile{
      display: inline-block;
    }
  }
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;


   @media(max-width: 64em){
    position: fixed;
    top: ${props => props.theme.navHeight };
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})` };
    z-index: 50;
    transform: ${props => props.click ? 'translateY(0)' : 'translateY(100%)'};
    transition: .3s;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)` };
    backdrop-filter: blur(2px);
    flex-direction: column;
    justify-content: center;
  }
`
const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;

  &::after{
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: width .3s;
  }
  &:hover::after{
    width: 100%;
  }
  @media(max-width: 64em){
    margin: 1rem 0;

    &::after{
      display: none;
    }
  }
`
const HamburgerMenu = styled.span`
  width: ${props => props.click ? '1.9rem' : '1.5rem' };
  height: 2px;
  background-color: ${props => props.theme.text};
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;

  left: 50%;
  top: 2rem;
  transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0deg)' };
  cursor: pointer;
  transition: all .3s;

  @media(max-width: 64em){
    display: flex;
  }

  &::after, &::before{
    content: "";
    position: absolute;
    background-color: ${props => props.theme.text};
    width: ${props => props.click ? '1rem' : '1.5rem' };
    right: ${props => props.click ? '-2px' : '0' };
    height: 2px;
    transition: all .3s;
  }
  &::after{
    top: ${props => props.click ? '0.3rem' : '0.5rem' };
    transform: ${props => props.click ? 'rotate(-40deg)' : ' rotate(0deg)' };
  }
  &::before{
    bottom: ${props => props.click ? '0.3rem' : '0.5rem' };
    transform: ${props => props.click ? 'rotate(40deg)' : ' rotate(0deg)' };
  }
`


const Navigation = () => {

  const [click, setClick] = useState(false)

  const scrollTo = (id) => {
    let element = document.getElementById(id)
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })

    setClick(!click)
  }

  return (
    <Section id="navigation">
     <NavBar>
      <Logo />
      <HamburgerMenu click={click} onClick={() => setClick(!click)}>
        &nbsp;
      </HamburgerMenu >
      <Menu click={click}>
        <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
        <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
        <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
        <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
        <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
        <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        <MenuItem>
          <div className="mobile">

          </div>
        </MenuItem>
      </Menu>
      
      <div className="desktop">
        <Button text='Connect Wallet' link='https://google.com' />
      </div>
     </NavBar>
    </Section>
  )
}

export default Navigation
