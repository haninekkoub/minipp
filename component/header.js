import React, {useState , useEffect, useRef} from 'react'
import styled from 'styled-components'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const  Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
`
const  Logo = styled.div`
  height: 30px; 
  width: 150px;
  background-color: cyan;
  z-index: 90;
`
const  Hamberger = styled.button`
  z-index: 90;
`
const  Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-Y: hidden;
  width: 100vw;
  transform: ${({ nav }) => (nav ? "translate(-300%)" : "translate(0 , 3%)")};
  backdrop-filter: ${({ nav }) => (nav ? "blur(0)" : "blur(5px)")};
  transition: opacity 300ms;
  z-index: 10;

`
const  MenuLeft = styled.div`
  height: 80vh;
  width: 40vw;
  background-color: green;
  transform: ${({ nav }) => (nav ? "translateY(-300vh)" : "translateY(0)")};
  opacity: ${({ nav }) => (nav ? "0" : "1")};
  transition: all 600ms;
  background: rgb(194,206,208);
  background: -moz-linear-gradient(180deg, rgba(194,206,208,1) 0%, rgba(255,255,255,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(194,206,208,1) 0%, rgba(255,255,255,1) 100%);
  background: linear-gradient(180deg, rgba(194,206,208,1) 0%, rgba(255,255,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c2ced0",endColorstr="#ffffff",GradientType=1);
  .title {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 8rem;
    font-weight: bold;
    opacity: .2;
    line-height: 82%;

  }
  .description {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 3vw;
    gap: 20px;
    h5 {
      font-size: 1.3rem;
    }
  }
`
const  MenuRight = styled.div`
  height: 80vh;
  width: 40vw;
  background-color: gray;
  transform: ${({ nav }) => (nav ? "translateY(300vh)" : "translateY(0)")};
  opacity: ${({ nav }) => (nav ? "0" : "1")};
  transition: all 600ms;
  background: rgb(255,255,255);
  background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,206,208,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,206,208,1) 100%);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(194,206,208,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#c2ced0",GradientType=1);
  position: relative;
  .title {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 7.5rem;
    font-weight: bold;
    opacity: .2;
    line-height: 82%;
  }
  .description {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3vw;
    gap: 20px;
  }
  .rs {
    height: 80px;
    width: 100%;
    background-color: blue;
  }
  `
  const  Cta = styled.button`
    padding: 14px 30px;
    font-size: 1.3rem;
    border: 1px solid black;
    position: relative;
    box-shadow: 6px 6px 0px black;
    &:hover {
      box-shadow: 0px 0px 0px black;
      transform: translate3D( 6px, 6px, 0);
      transition: all 100ms ease-in-out;
    }
  `
export default function Header() {
  const [nav, showNav] = useState(true)

  return (
    <Container>
        <Logo />   
        <Hamberger nav={nav} onClick={() => showNav(!nav)}  >
          button
        </Hamberger>  
        <Menu nav={nav}>
          <MenuLeft nav={nav}>
            <h2 className='title'>
                About
            </h2>
            <div className='description'>
              <h5>
                front end devloper
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, amet ornare placerat tellus, amet lectus leo a quam. Egestas malesuada sagittis mattis quisque facilisis arcu ac.
                Malesuada congue in cursus tortor. Egestas venenatis ipsum nunc ut tristique libero sit. Feugiat habitant amet malesuada fusce risus.
              </p>
            </div>
          </MenuLeft>
          <MenuRight nav={nav}>
            <h2 className='title'>
              Contact
            </h2>
            <div className='description'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ac eu nec ut at nibh vestibulum.
              </p>
              <Cta>
                Say Hello
              </Cta>
              <div className='rs'>

              </div>
            </div>
          </MenuRight>
        </Menu>

    </Container>
  )
}
