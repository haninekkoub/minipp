import React, {useState} from 'react'
import styled from 'styled-components'
import Hello from "./hello"
import Logo from "./logo"
import Menu from "./menu"

const Container = styled.div `
  padding-top: 80px;

  
`
const  Head = styled.div`
  position: Fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 40px;
  z-index: 90;
  background-color: #EBEBEB;
`

const  Hamberger = styled.div`
  cursor: pointer;

`

export default function Header() {
  const [nav, showNav] = useState(false)
  
  return (
    <Container>
        <Head>
          <Logo />    
          <Hamberger  nav={nav} onClick={() => showNav(!nav)} >
            <Hello />
          </Hamberger>            
        </Head>
        {nav &&    
          <Menu />
        }

    </Container>
  )
}
