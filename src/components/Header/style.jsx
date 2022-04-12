import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 60px 0 0 0;
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
`
const Box = styled.div`
    position: absolute;
    right: 0;
    margin-bottom: 700px;
    margin-right: 50px;
    opacity: 0.8;
`
const Stats = styled.div`
    padding: 15px;
    margin: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    height: 15vh;
    color: darkblue;
    background: #EFFFFD;
`
const Row = styled.div`
    width: 200px;
    padding: 0px 100px;
    margin: 0px;
`
const Icon = styled.div`
    padding: 0;
`
const Number = styled.h1`
    margin: 0;
    padding: 0;
    cursor: default;
`
const Letter = styled.p`
    font-weight: 500;
    cursor: default;
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
Background
}