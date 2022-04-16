import React, { Component } from 'react';
import {Container,Wrapper,Left,Language,Center,Logo,Right,MenuItem, Dropdown, DropText, MenuIcon, Icon} from './style'

class Navbar extends Component{
  state = { clicked: false}

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }
render(){
  return (
    <Container>
        <Wrapper>
             <Left>
             <Language href='/#naslovna'>NASLOVNA</Language>
             </Left>
             <Center><a href='/#naslovna'><Logo>NURONORM</Logo></a></Center>
             <Right>
             <MenuItem href='/#namena'>NAMENA</MenuItem>
             <MenuItem href='/#sastav'>SASTAV</MenuItem>
             <MenuItem href='/#upotreba'>UPOTREBA</MenuItem>
             <MenuItem href='/#iskustva'>ISKUSTVA</MenuItem>
             <MenuItem href='/#kontakt'>KONTAKT</MenuItem>
             <MenuItem href='https://www.oliva.rs/product/nuronorm-tbl-20-adoc' target="_blank" rel="noopener noreferrer">PORUCI</MenuItem>
             <MenuIcon className='menu-icon' onClick={this.handleClick}>
                    <Icon className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></Icon>
                </MenuIcon>
             </Right>
        </Wrapper>
        <Dropdown style={this.state.clicked ? {display: 'flex'} : {display: 'none'}}>
        <DropText href='/#namena' onClick={this.handleClick}>NAMENA</DropText>
        <DropText href='/#sastav' onClick={this.handleClick}>SASTAV</DropText>
        <DropText href='/#upotreba' onClick={this.handleClick}>UPOTREBA</DropText>
        <DropText href='/#iskustva' onClick={this.handleClick}>ISKUSTVA</DropText>
        <DropText  href='/#kontakt' onClick={this.handleClick}>KONTAKT</DropText>
        </Dropdown>
    </Container>
  )
}
}

export default Navbar