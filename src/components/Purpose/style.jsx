import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`
const Background = styled.img`
    height: 95%;
    width: 100%;
    bottom: 0;
    position: absolute;
    object-fit: cover;
    opacity: 0.5;
`
const Title = styled.h1`
    padding: 50px 0 0 0;
    color: darkblue;
    cursor: default;
    z-index: 100;
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
`
const Row = styled.div`
    flex: 1;
    margin: 50px 100px;
    height: 400px;
    width: 400px;
    background: #5B7DB1;
    border-radius: 10px;
    position: relative;
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
`
 export{ 
    Container,
    Title,
    Info,
    Row,
    Hover,
    Image,
    Description,
    Background
}