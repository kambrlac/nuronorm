import React from 'react'
import { mozak, prst, telo } from '../Images/images'
import {Container, Line, Left, Right, Image, Title, Text, Button} from './style'
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
                Nuronorm ima kompletniji sastav, jer pored aLA, sadrži druge komponente sa pozitivnim efektom na periferne nerve: karnozin, cink i vitamine B kompleksa.
Nuronorm ima proširene indikacije. Pored standardne primene kod dijabetesne polineuropatije, može se koristiti kod gojaznih, predijabetesa i osoba koje imaju dijabetes ali nisu još uvek razvili dijabetesnu neuropatiju. Takođe, Nuronorm ima svoju ulogu kao dodatna terapija u lečenju radikulopatija, kompresivnih neuropatija, kao i kod drugih bolesti i oštećenja perifernih nerava.
                </Text>
                <a href='/kombinacija'><Button>SAZNAJTE VISE</Button></a>
            </Right>  
        </Line>
        <Line>
            <Left>
            <Title>Moćni cink i njegova dejstva</Title>
            <Text>
            Cink je bitan kofaktor više od 200 različitih enzima. Deluje kao antioksidans, jer je kofaktor najznačajnijeg enzima antioksidativne zaštite – superoksid dizmutaze 1 (SOD1). Pored toga, pomaže dejstvo prirodnog insulina i ima direktnog uticaja na smanjenje bola. Kod pacijenata sa dijabetesom, cink se gubi preko bubrega, a njegov nedostatak je povezan sa mikrovaskularnim komplikacijama dijabetesa (uključujući polineuropatiju) i srčanim bolestima. Povoljan efekat primene cinka je posebno izražen kod muškaraca sa dijabetesom.
            </Text>
            <a href='/cink'><Button>SAZNAJTE VISE</Button></a>
            </Left>
            <Right data-aos="fade" data-aos-duration="1500">
                <Image src={telo}/>
            </Right>  
        </Line>
        <Line>
            <Left data-aos="fade" data-aos-duration="1500">
                <Image src={mozak}/>
            </Left>
            <Right>
                <Title>Sva lica alfa lipoinske kiseline</Title>
                <Text>
                Alfa-lipoinska kiselina (aLA) je normalno prisutna u ljudskom organizmu i ima značajnu ulogu u ćelijskom metabolizmu. Jak je antioksidans i smanjuje zapaljenske procese. Pored toga, aLA ima metaboličku ulogu tako što utiče na bolju potrošnju glukoze. Deluje povoljno na mikrocirkulaciju i periferne nerve. Novija istraživanja pokazuju i direktno dejstvo aLA na smanjenje bola.
Kliničke studije pokazuju jasnu efikasnost aLA u dozi od 600mg dnevno kod pacijenata sa dijabetesnom neuropatijom. Naime, aLA smanjuje simptome bolesti (pre svega, neprijatne osećaje u stopalima i šakama), ali utiče i na znake bolesti, uključujući neurološki i elektroneurografski nalaz. Pokazano je da je aLA potpuno bezbedna i nakon višegodišnje svakodnevne primene. Najčešća neželjena dejstva su blaga i uključuju mučninu, povraćanje i osećaj vrtoglavice. Jednom rečju, aLA je dokazano među najefikasnijim i najbezbednijim preparatima za lečenje neuropatskog bola kod dijabetesne neuropatije.
                </Text>
                <a href='/lipoinska-kiselina'><Button>SAZNAJTE VISE</Button></a>
            </Right>  
        </Line>
    </Container>
  )
}

export default Composition