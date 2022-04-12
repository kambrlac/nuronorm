import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import {Box,Container,Left,Logo,Description,SocialContainer,SocialIcon,Title,Right,ContactItem,Rights} from './style'


const Footer = () => {
  return (
      <Box id="kontakt">
    <Container>
        <Right>
            <Title>KORISNI LINKOVI</Title>
            <ContactItem href="https://www.adoc-pharma.com" target="_blank" rel="noopener noreferrer">AODC</ContactItem>
            <ContactItem href="https://www.oliva.rs/product/nuronorm-tbl-20-adoc" target="_blank" rel="noopener noreferrer">Nuronorm</ContactItem>
            <ContactItem href="/politika-privatnosti">Politika privatnosti</ContactItem>
        </Right>
        <Left>
            <Logo>NURONORM</Logo>
            <Description>Ovlašćeni predstavnik/distributer ADOC d.o.o. Beograd</Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Right>
            <Title>KONTAKT</Title>
            <ContactItem href="tel:+3810113051512"><Phone style={{marginRight:'10px'}}/>+381 (0)11 305 15 12</ContactItem>
            <ContactItem href="mailto:office@adocpharma.com"><MailOutline style={{marginRight:'10px'}}/>office@adocpharma.com</ContactItem>
            <ContactItem href="https://www.google.com/maps/place/Milorada+Jovanovi%C4%87a+11,+Beograd/@44.7618944,20.4028539,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6e2478e52611:0x1335d1906e5b98cd!8m2!3d44.7618944!4d20.4050426" target="_blank" rel="noopener noreferrer"><Room style={{marginRight:'10px'}}/>Milorada Jovanovića 11, Beograd</ContactItem>
        </Right>
    </Container>
    <Rights>© 2020 ADOC d.o.o. Beograd. All rights reserved.</Rights>
    </Box>
  )
}

export default Footer