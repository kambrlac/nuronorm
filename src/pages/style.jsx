import styled from 'styled-components'


const Container = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #F7F5F2;
`
const Inform = styled.div`
    max-width: 100vw;
    display: flex;
    justify-contnent: center;
    align-items: center;
    flex-direction: column;
`
const BigTitle = styled.h1`
    color: darkblue;
    cursor: default;
    text-align: center;
`
const Title = styled.h2`
    color: darkblue;
    cursor: default;
    text-align: center;
`
const Image = styled.img`
    height: 350px;
    width: 500px;
    border-radius: 10px;
    margin: 30px 0;
`
const Text = styled.p`
    cursor: default;
    margin: 10px 20vw;
`

export{
    Container,
    Inform,
    BigTitle,
    Title,
    Image,
    Text
}