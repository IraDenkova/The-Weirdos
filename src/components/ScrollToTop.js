import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import { useWindowScroll } from 'react-use'
import styled from 'styled-components'

const Up = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};

  font-size: ${props => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all .2s;

  &:hover{
    transform: scale(1.2);
  }
  &:active{
    transform: scale(0.9);
  }
`

const ScrollToTop = () => {

  const ref = useRef(null)
  const {y} = useWindowScroll();


  const scrollToTop = () => {
    let element = document.getElementById("navigation")
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    })
  }

  useLayoutEffect(() => {
    if(y > 200){
      ref.current.style.display = "flex"
    } else {
      ref.current.style.display = "none"
    }
  }, [y])

  return (
    <Up ref={ref} onClick={() => scrollToTop()}>
      &#x2191;
    </Up>
  )
}

export default ScrollToTop
