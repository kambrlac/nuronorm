import React from 'react';
import {Container,Wrapper,Left,Language,Center,Logo,Right,MenuItem} from './style'

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
             <Left>
             <Language href='/#naslovna'>NASLOVNA</Language>
             </Left>
             <Center><Logo>NURONORM</Logo></Center>
             <Right>
             <MenuItem href='/#namena'>NAMENA</MenuItem>
             <MenuItem href='/#sastav'>SASTAV</MenuItem>
             <MenuItem href='/#upotreba'>UPOTREBA</MenuItem>
             <MenuItem href='/#iskustva'>ISKUSTVA</MenuItem>
             <MenuItem href='/#kontakt'>KONTAKT</MenuItem>
             <MenuItem href='https://www.oliva.rs/product/nuronorm-tbl-20-adoc' target="_blank" rel="noopener noreferrer">PORUCI</MenuItem>
             <MenuItem></MenuItem>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar