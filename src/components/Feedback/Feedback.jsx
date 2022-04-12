import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import {sliderItems} from './data'
import {useState} from 'react'
import {Box,Titl,Container,Arrow,Wrapper,Slide,InfoContainer,Desc} from './style'

const Feedback = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 4)
        }else {
            setSlideIndex(slideIndex <4 ? slideIndex+1 : 0)
        }
    };

  return (
    <Box id='iskustva' style={{padding: '30px 0'}}>
    <Titl>Šta korisnici Nuronorma kažu</Titl>
    <Container >
        <Arrow direction='left' onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
            <Slide bg={item.bg} key={item.id}>
            <InfoContainer>
                <Desc>{item.desc}</Desc>
                <Desc style={{textAlign: 'center'}}>{item.title}</Desc>
                <Desc style={{textAlign: 'center'}}>{item.years}</Desc>
            </InfoContainer>
        </Slide>
        ) )}
        </Wrapper>
        <Arrow direction='right'  onClick={() => handleClick("right")}> 
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
    </Box>
  )
}

export default Feedback