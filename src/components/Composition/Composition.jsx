import React from 'react'
import { mozak, prst, telo } from '../Images/images'
import {Container, Line, Left, Right, Image, Title, Text, Button, LineMob, LinePc} from './style'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Composition = () => {
  return (
    <Container id='sastav'>
        <Title style={{padding: '70px 0'}}>SASTAV NURONORMA</Title>
        <Line>
            <Left data-aos="fade" data-aos-duration="1500">
                <Image src={prst}/>
            </Left>
            <Right>
                <Title>Prednosti i efikasnost kombinacije</Title>
                <Text>
                Nuronorm ima kompletniji sastav, jer pored aLA, sadrži druge komponente sa pozitivnim efektom na periferne nerve...</Text>
                <a href='/kombinacija'><Button>SAZNAJTE VISE</Button></a>
            </Right>  
        </Line>
        <LineMob>
            <Left>
            <Right data-aos="fade" data-aos-duration="1500">
                <Image src={telo}/>
            </Right> 
            <Title>Moćni cink i njegova dejstva</Title>
            <Text>
            Cink je bitan kofaktor više od 200 različitih enzima. Deluje kao antioksidans, jer je kofaktor najznačajnijeg enzima antioksidativne zaštite...</Text>
            <a href='/cink'><Button>SAZNAJTE VISE</Button></a>
            </Left>
        </LineMob>
        <LinePc>
            <Left>
            <Title>Moćni cink i njegova dejstva</Title>
            <Text>
            Cink je bitan kofaktor više od 200 različitih enzima. Deluje kao antioksidans, jer je kofaktor najznačajnijeg enzima antioksidativne zaštite...</Text>
            <a href='/cink'><Button>SAZNAJTE VISE</Button></a>
            </Left>
            <Right data-aos="fade" data-aos-duration="1500">
                <Image src={telo}/>
            </Right>  
        </LinePc>
        <Line>
            <Left data-aos="fade" data-aos-duration="1500">
                <Image src={mozak}/>
            </Left>
            <Right>
                <Title>Sva lica alfa lipoinske kiseline</Title>
                <Text>
                Alfa-lipoinska kiselina (aLA) je normalno prisutna u ljudskom organizmu i ima značajnu ulogu u ćelijskom metabolizmu...</Text>
                <a href='/lipoinska-kiselina'><Button>SAZNAJTE VISE</Button></a>
            </Right>  
        </Line>
    </Container>
  )
}

export default Composition