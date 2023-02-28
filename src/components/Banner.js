import React from 'react'
import styled from 'styled-components'

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";


const Section = styled.section`
  height: 25rem;
  width: 100vw;
  border-top: 2px solid ${props => props.theme.text};
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;

  img{
    width: 14rem;
    height: auto;
  }
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  color: ${props => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${props => props.theme.text};
`
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;
`
const JoiNow = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  outline: none;
  border: none;
  font-weight: 600;
  font-size: ${props => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all .2s;
  position: relative;

  &:hover{
    transform: scale(0.9);
  }

  &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all .2s;
  }
  &:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt='The Weirdos' />   
        <img src={img2} alt='The Weirdos' />   
        <img src={img3} alt='The Weirdos' />   
        <img src={img4} alt='The Weirdos' />   
        <img src={img5} alt='The Weirdos' />   
        <img src={img6} alt='The Weirdos' />   
      </ImgContainer>
      <Title>
        Join the <br /> weirdos club
      </Title>
      <BtnContainer>
        <JoiNow>
          Join now
        </JoiNow>
      </BtnContainer>
    </Section>
  )
}

export default Banner
