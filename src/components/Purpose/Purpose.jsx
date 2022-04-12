import React from 'react'
import {Container,Title,Info,Row,Hover,Image,Description, Background} from './style'
import { bol, glava, diabetis, pozadina } from '../Images/images'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Purpose = () => {
  return (
    <Container id='namena'>
        <Background src={pozadina}/>
        <Title>NURONORM OD GLAVE DO PETE!</Title>
        <Info>
        <a href='/neuropatski-bol'>
        <Row data-aos="fade-up" data-aos-duration="1000">
            <Image src={bol}/>
            <Description>
                BOL USLED OSTECENJA NERVA
            </Description>
            <Hover>Pročitajte više...</Hover>
        </Row>
        </a>
        <a href='/stres'>
        <Row  data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
            <Image src={glava}/>
            <Description>
                STARENJE CELIJA I OKSIDATIVNI STRES
            </Description>
            <Hover>Pročitajte više...</Hover>
        </Row>
        </a>
        <a href='/dijabetes'>
        <Row data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1000">
            <Image src={diabetis}/>
            <Description>
                DIJABETES I KOMPLIKACIJE
            </Description>
            <Hover>Pročitajte više...</Hover>
        </Row>
        </a>
        </Info>
    </Container>
  )
}

export default Purpose