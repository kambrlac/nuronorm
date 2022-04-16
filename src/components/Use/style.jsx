import styled from 'styled-components'
import { laptop, tablet, mobile, midsize } from '../../responsive'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    margin: 100px 0 50px 0;
    color: darkblue;
    cursor: default;
`
const Description = styled.p`
    margin-bottom: 50px;
    cursor: default;
`
const Docs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
    ${tablet({flexDirection: 'column'})}
`
const Row = styled.div`
    position: relative;
    height: 450px;
    width: 350px;
    background: #5B7DB1;
    border-radius: 10px;
    color: white;

    ${midsize({height: '350px', width: '275px'})}

    
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
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const Titl = styled.h3`
    text-align: center;
    font-weight: 500;
    ${midsize({fontSize: '16px'})}
`
const Desc = styled.p`
    text-align: center;
    font-weight: 400; 
    
    ${midsize({fontSize: '12px'})}
`

export{
Container,
Title,
Description,
Docs,
Row,
Hover,
Image,
Titl,
Desc,

}