import React from 'react'
import { doktor, doktorka } from '../Images/images'
import {Container,Title,Description,Docs,Row,Hover,Image,Titl,Desc} from './style'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Use = () => {
  return (
    <Container id='upotreba'>
        <Title>UPOTREBA</Title>
        <Description>Preporucena je jedna tableta dnevno, pre obroka.</Description>
        <Docs>
          <a href='/lumbalni-bolni-sindrom' style={{ margin: '0 100px 50px'}}>
            <Row  data-aos="fade" data-aos-duration="1500">
                <Image src={doktor}/>
                <Titl>Šta je lumbalni bolni sindrom?</Titl>
                <Desc>Klin. assist. dr sc. med. Stojan Perić</Desc>
                <Desc>Klinički centar Srbije</Desc>
                <Hover>Pročitajte više...</Hover>
            </Row>
          </a>
          <a  href='/dijabetesna-neuropatija' style={{ margin: '0 100px 50px'}}>
            <Row  data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                <Image src={doktorka}/>
                <Titl>Šta je to dijabetesna neuropatija?</Titl>
                <Desc>Prof. dr Dragana Lavrnić</Desc>
                <Desc>Klinički centar Srbije</Desc>
                <Hover>Pročitajte više...</Hover>
            </Row>
          </a>
        </Docs>
    </Container>

  )
}

export default Use