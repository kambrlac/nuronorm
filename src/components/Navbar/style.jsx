import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background: #EFFFFD;
    position: fixed;
    top: 0;
    width: 100%;
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
`
const Logo = styled.h1`
    font-weight: bold;
    color: darkblue;
    cursor: default;
    font-size: 36px;
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

}