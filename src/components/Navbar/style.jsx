import styled from 'styled-components';
import { mobile, laptop, tablet } from '../../responsive';   

const Container = styled.div`
    top: 0;
    height: 60px;
    background: #EFFFFD;
    position: fixed;
    width: 100vw;
    z-index: 1000000;
`
const Wrapper = styled.div`
    position: relative;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    ${laptop({ display: 'none'})};
`
const Language = styled.a`
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    color: darkblue;
    text-decoration: none;

    &:hover{
        color: teal;
        transition: 0.5s;
    }

    
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${laptop({ textAlign: 'start'})};
`
const Logo = styled.h1`
    font-weight: bold;
    color: darkblue;
    cursor: default;
    font-size: 36px;

    
    ${mobile({ fontSize: '24px'})};
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`
const MenuItem = styled.a`
    font-size: 16px;
    cursor: pointer;
    margin-left: 35px;
    font-weight: 500;
    color: darkblue;
    text-decoration: none;
    scroll-behavior: smooth;

    &:hover{
        color: teal;
        transition: 0.5s;
    }

    
    ${tablet({ display: 'none'})};
`
const Dropdown = styled.div`
    position: relative;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: none;
    background: #EFFFFD;
    opacity: 0.9;

    
    ${tablet({ display: 'flex'})};
`
const DropText = styled.a`
    font-size: 16px;
    cursor: pointer;
    margin: 30px 0;
    font-weight: 500;
    color: darkblue;
    text-decoration: none;
    display: none;
    opacity: 1;
    
    ${tablet({ display: 'flex'})};
`
const MenuIcon = styled.div`
    display: none;
    ${tablet({ display: 'flex'})};
`
const Icon = styled.i`
    font-size: 1.8rem;
    color: darkblue;
    
    ${mobile({ fontSize: '24px'})};
`
export {
    Container,
Wrapper,
Left,
Language,
Center,
Logo,
Right,
MenuItem,
Dropdown,
DropText,
MenuIcon,
Icon,

}