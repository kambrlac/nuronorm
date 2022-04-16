import styled from 'styled-components'
import { laptop, tablet, mobile, midsize, mobtel } from '../../responsive'

const Container = styled.div`

`
const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 550px;

    ${tablet({ flexDirection: 'column'})}
`
const LineMob = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    height: 550px;
    flex-directon: column;

    ${tablet({ display: 'flex'})}
`
const LinePc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 550px;

    ${tablet({ display: 'none'})}
`
const Left = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
    flex: 1;
    justify-content: center;
`
const Right = styled.div`
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
    flex: 1;
`
const Image = styled.img`
    object-fit: cover;
    height: 400px;
    width: 600px;
    border-radius: 15px;
    
    ${laptop({ height: '300px', width: '400px'})}
    ${tablet({ height: '250px', width: '350px'})}
    ${mobile({ height: '200px', width: '300px'})}
`
const Title = styled.h1`
    color: darkblue;
    text-align: center;
    cursor: default;
`
const Text = styled.p`
    margin: 0 100px;
    cursor: default;
    
    ${mobtel({ margin: '0 40px'})}
`
const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    padding: 10px;
    margin: 25px 0 20px;
    border-radius: 5px;

    &:hover{
        background-color: teal;
        transition: 0.5s;
        cursor: pointer;
    }
`

export{
    Container,
Line,
Left,
Right,
Image,
Title,
Text,
Button,
LineMob,
LinePc
}