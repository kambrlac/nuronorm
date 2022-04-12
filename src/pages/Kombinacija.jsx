import React from 'react'
import Footer from '../components/Footer/Footer'
import { prst } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Image, Text } from './style'

const Kombinacija = () => {
  return (
    <React.Fragment>
        <Navbar/>
          <Container>
            <Inform>
                <BigTitle>Prednosti i efikasnost kombinacije</BigTitle>
                <Image src={prst}/>
            </Inform>
            <Text>Nuronorm ima kompletniji sastav, jer pored aLA, sadrži druge komponente sa pozitivnim efektom na periferne nerve: karnozin, cink i vitamine B kompleksa.</Text>
            <Text>Nuronorm ima proširene indikacije. Pored standardne primene kod dijabetesne polineuropatije, može se koristiti kod gojaznih, predijabetesa i osoba koje imaju dijabetes ali nisu još uvek razvili dijabetesnu neuropatiju. Takođe, Nuronorm ima svoju ulogu kao dodatna terapija u lečenju radikulopatija, kompresivnih neuropatija, kao i kod drugih bolesti i oštećenja perifernih nerava.
            </Text>
            <Text style={{marginBottom: '60px'}}>Nuronorm ima unapređenu farmakokinetiku. Iz jednog dela tableta dolazi do brzog oslobađanja aktivnih supstanci i brzog dejstva na periferne nerve, dok se iz drugog dela tablete, komponente oslobađaju sporo omogućavajući ravnomernu koncentraciju aktivnih supstanci tokom 24h. Primena kombinacije navedenih molekula ima povoljno dejstvo kod pacijenata sa dijabetesnom polineuropatijom, ali i kod osoba sa predijabetesom i osoba s dijabetesom koji nisu još uvek razvili simptome dijabetesne polineuropatije. Primena Nuronorma smanjuje nivo šećera u krvi našte i nakon obroka, smanjuje vrednosti tromesečnog šećera u krvi, smanjuje nivo lošeg holesterola i triglicerida. Nuronorm takođe smanjuje nivo faktora zapaljenja i pojačava aktivnost antioksidativnih enzima kod osoba s dijabetesom. Najznačajniji efekat Nuronorma za korisnike jeste smanjenje bola i neprijatnih senzacija, kao i bolji osećaj vibracija i toplote u stopalima. Nuronorm može imati i šire indikacije. Poznato je da kod bolnih simptoma u krstima, Nuronorm smanjuje bol, poboljšava mokrenje, erektilnu disfunkciju kod muškaraca i seksualnu funkciju kod žena.
            </Text>
          </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Kombinacija