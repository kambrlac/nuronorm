import styled from 'styled-components'

const Container = styled.div`

`
const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50vh;
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
`
const Title = styled.h1`
    color: darkblue;
    text-align: center;
    cursor: default;
`
const Text = styled.p`
    margin: 0 100px;
    cursor: default;
`
const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    padding: 10px;
    margin-top: 25px;
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

}