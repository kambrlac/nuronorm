import React from 'react'
import { devojka, kutija} from '../Images/images'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import {Container,Head,Image,Box,Stats,Row,Icon,Number,Letter, Background} from './style'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Header = () => {
  return (
    <Container id='naslovna'>
        <Background>
        <Image src={devojka}/>
        </Background>
        <Head>
            <Box>
                <Image src={kutija} data-aos="fade" data-aos-duration="1500" data-aos-delay="1000"/>
            </Box>
        </Head>
        <Stats>
            <Row>
            <Icon>
        <EventAvailableIcon style={{ fontSize: 60 }} />
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
    </Container>
  )
}

export default Header