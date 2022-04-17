import styled from 'styled-components'
import { laptop, tablet, mobile, midsize } from '../../responsive'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`
const Background = styled.img`
    height: 100%;
    width: 100%;
    bottom: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.5;

    
    ${midsize({ display: 'none'})};
`
const BackgroundSmall = styled.img`
    height: 100%;
    width: 100%;
    bottom: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.5;
    display: none;

    
    ${midsize({ display: 'flex'})};
`
const Title = styled.h1`
    padding: 50px 0 0 0;
    color: darkblue;
    cursor: default;
    z-index: 100;
    text-align: center;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Row = styled.div`
    flex: 1;
    margin: 40px 100px;
    height: 400px;
    width: 400px;
    background: #5B7DB1;
    border-radius: 10px;
    position: relative;

    
    ${tablet({ height: '300px', width: '300px', margin: '20px 50px'})};

`
const Hover = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;

    &:hover{
    opacity:1;
    }

`
const Image = styled.img`
    opacity: 1;
    height: 80%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const Description = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    color: white;

    
    ${tablet({ fontSize: '16px'})};
`
 export{ 
    Container,
    Title,
    Info,
    Row,
    Hover,
    Image,
    Description,
    Background,
    BackgroundSmall
}