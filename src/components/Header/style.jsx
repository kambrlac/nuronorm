import styled from 'styled-components'
import { laptop, tablet, mobile, midsize, mobtel } from '../../responsive'

const Container = styled.div`
    width: 100%;
    padding: 60px 0 0 0;
    overflow: hidden;
`
const Background = styled.div`
    width: 100%;
    height: 75vh;
    position: relative;

    &::before{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 130px;
    background: linear-gradient(to top, #EFFFFD, transparent);
    z-index: 1000;
  }
    ${tablet({ height: '60vh'})};
    ${mobile({ height: '40vh'})};
`
const Head = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
`
const Image = styled.img`
    padding: 0;
    margin: 0;
    height: 75vh;
    width: 100%;
    object-fit: cover;

    ${midsize({ display: 'none'})};
`
const BoxImage = styled.img`
    padding: 0;
    margin: 0;
    height: 75vh;
    width: 100%;
    object-fit: cover;

    ${tablet({ height: '50vh'})};
    ${mobile({ height: '300px'})};

`
const TablImage = styled.img`
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: none;

    
    ${midsize({ display: 'flex'})};

`
const Box = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: -50px;
    display: flex;
    

    
    ${laptop({ marginRight: '-150px'})};
    ${midsize({ justifyContent: 'center', alignItems: 'center'})};
    ${tablet({ margin: '0 0 80px 10px'})};
    ${mobile({ margin: '0'})};

`
const Stats = styled.div`
    padding: 10px;
    margin: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    color: darkblue;
    background: #EFFFFD;
    flex-wrap: wrap;
    
    ${mobtel({ display: 'none'})};
`
const Row = styled.div`
    width: 200px;
    margin: 0px 100px;
    height: 20vh;
    overflow: hidden;
    
    ${tablet({ height: '15vh', margin: '0 50px 15px'})};
    ${mobtel({ padding: '0', margin: '0', width: '100vw', height: '25vh'})};
`
const Icon = styled.div`
    padding: 0;
`
const Number = styled.h1`
    margin: 0;
    padding: 0;
    cursor: default;

    
    ${mobile({ fontSize: '20px'})};
`
const Letter = styled.p`
    font-weight: 500;
    cursor: default;

    
    ${mobile({ fontSize: '14px'})};
`
const Wrapper = styled.div`
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: 1s;
    display: flex;
    align-items: center;
    width: 100vw;
    background-color: #${props => props.bg}
`
const Slide = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    position: relative;
    overflow: hidden;
    jusify-content: center;
    align-items: center;
    display: none;

    
    ${mobtel({ display: 'flex'})};

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

const InfoContainer = styled.div`
    margin: 100px 0 0 0;
    text-align: center;
    color: darkblue;
`


export{
    Container,
Head,
Image,
Box,
Stats,
Row,
Icon,
Number,
Letter,
Background,
TablImage,
BoxImage,
Slide,
Arrow,
Wrapper,
InfoContainer
}