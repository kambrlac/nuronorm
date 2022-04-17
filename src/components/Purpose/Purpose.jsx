import React from 'react'
import {Container,Title,Info,Row,Hover,Image,Description, Background, BackgroundSmall} from './style'
import { bol, glava, diabetis, pozadina, pozadina2 } from '../Images/images'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Purpose = () => {
  return (
    <Container id='namena'>
        <Background src={pozadina}/>
        <BackgroundSmall src={pozadina2}/>
        <Title>NURONORM OD GLAVE DO PETE!</Title>
        <Info>
        <a href='/neuropatski-bol'>
        <Row data-aos="fade-up" data-aos-duration="1000">
            <Image src={bol}/>
            <Description>
            Bol usled oštećenja nerava
            </Description>
            <Hover>Pročitajte više...</Hover>
        </Row>
        </a>
        <a href='/stres'>
        <Row  data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000">
            <Image src={glava}/>
            <Description>
            Starenje ćelija i oksidativni stres
            </Description>
            <Hover>Pročitajte više...</Hover>
        </Row>
        </a>
        <a href='/dijabetes'>
        <Row data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1000">
            <Image src={diabetis}/>
            <Description>
            Dijabetes i komplikacije
            </Description>
            <Hover>Pročitajte više...</Hover>
        </Row>
        </a>
        </Info>
    </Container>
  )
}

export default Purpose