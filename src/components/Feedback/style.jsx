import styled from 'styled-components'
import { laptop, tablet, mobile, midsize, mobtel } from '../../responsive'


const Box = styled.div`
 background-color: #9ADCFF;
`
const Titl = styled.h1`
    color: darkblue;
    text-align: center;
    padding: 40px 0 0 0;
    cursor: default;
`
const Container = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    position: relative;
    overflow: hidden;
    jusify-content: center;
    align-items: center;
    
    ${midsize({height: '800px'})}
    ${mobtel({height: '900px'})}
    ${mobile({height: '950px'})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: 1s;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    min-height 100%;
`
const InfoContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 250px;

    ${laptop({margin: '0 70px 0'})}
    ${mobtel({margin: '0 40px 0'})}
    ${mobile({margin: '0 20px 0'})}
    
`
const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: darkblue;
    cursor: default;
    ${tablet({fontSize: '16px'})}
    ${mobile({fontSize: '14px'})}
`

export{
    Box,
Titl,
Container,
Arrow,
Wrapper,
Slide,
InfoContainer,
Desc,
}