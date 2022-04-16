import React from 'react'
import {useState} from 'react'
import { devojka, kutija, pozadina} from '../Images/images'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Container,Head,Image,Box,Stats,Row,Icon,Number,Letter, Background, TablImage, BoxImage, Slide, Arrow, Wrapper, InfoContainer } from './style'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Header = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3)
        }else {
            setSlideIndex(slideIndex <3 ? slideIndex+1 : 0)
        }
    };
  return (
    <Container id='naslovna'>
        <Background>
        <Image src={devojka}/>
        <TablImage src={pozadina}/>
        </Background>
        <Head>
            <Box>
                <BoxImage src={kutija} data-aos="fade" data-aos-duration="1500" data-aos-delay="1000"/>
            </Box>
        </Head>
        <Stats>
            <Row>
            <Icon>
        <EventAvailableIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                10+
            </Number>
            <Letter>
                GODINA NA TRŽIŠTU EU
            </Letter>
            </Row>
            <Row>
            <Icon>
        <DoneAllIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                7+
            </Number>
            <Letter>
                PODRUČJA PRIMENE
            </Letter>
            </Row>
            <Row>
            <Icon>
        <PeopleAltIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                450
            </Number>
            <Letter>
                LEKARA KOJI MU VERUJU
            </Letter>
            </Row>
            <Row>
            <Icon>
        <ThumbUpOutlinedIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                5000+
            </Number>
            <Letter>
                ZADOVOLJNIH KORISNIKA
            </Letter>
            </Row>
        </Stats>
        <Slide>
        <Arrow direction='left' onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            <InfoContainer>
            <Row>
            <Icon>
        <EventAvailableIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                10+
            </Number>
            <Letter>
                GODINA NA TRŽIŠTU EU
            </Letter>
            </Row>
            </InfoContainer>
            <InfoContainer>
            <Row>
            <Icon>
        <DoneAllIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                7+
            </Number>
            <Letter>
                PODRUČJA PRIMENE
            </Letter>
            </Row>
            </InfoContainer>
            <InfoContainer>
            <Row>
            <Icon>
        <PeopleAltIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                450
            </Number>
            <Letter>
                LEKARA KOJI MU VERUJU
            </Letter>
            </Row>
            </InfoContainer>
            <InfoContainer>
            <Row>
            <Icon>
        <ThumbUpOutlinedIcon style={{ fontSize: 60 }}/>
            </Icon>
            <Number>
                5000+
            </Number>
            <Letter>
                ZADOVOLJNIH KORISNIKA
            </Letter>
            </Row>
            </InfoContainer>
            
        </Wrapper>
        <Arrow direction='right'  onClick={() => handleClick("right")}> 
            <ArrowRightOutlined/>
        </Arrow>
    </Slide>
    </Container>
  )
}

export default Header