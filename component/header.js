import React, {useState} from 'react'
import styled from 'styled-components'
import Hello from "./hello"
import Logo from "./logo"
import Menu from "./menu"

const  Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 40px;
`

const  Hamberger = styled.div`
  z-index: 90;
  cursor: pointer;

`

export default function Header() {
  const [nav, showNav] = useState(false)
  
  return (
    <Container>
        <Logo />    
        <Hamberger  nav={nav} onClick={() => showNav(!nav)} >
          <Hello />
        </Hamberger>            
        {nav &&    
          <Menu />
        }

    </Container>
  )
}
