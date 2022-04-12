import React from 'react'
import Footer from '../components/Footer/Footer'
import { mozak } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Image, Text } from './style'

const Kiselina = () => {
  return (
    <React.Fragment>
        <Navbar/>
          <Container>
            <Inform>
                <Image src={mozak}/>
                <BigTitle>Sva lica alfa lipoinske kiseline</BigTitle>
            </Inform>
            <Text style={{marginBottom: '60px'}}>
                Alfa-lipoinska kiselina (aLA) je normalno prisutna u ljudskom organizmu i ima značajnu ulogu u ćelijskom metabolizmu. Jak je antioksidans i smanjuje zapaljenske procese. Pored toga, aLA ima metaboličku ulogu tako što utiče na bolju potrošnju glukoze. Deluje povoljno na mikrocirkulaciju i periferne nerve. Novija istraživanja pokazuju i direktno dejstvo aLA na smanjenje bola. Kliničke studije pokazuju jasnu efikasnost aLA u dozi od 600mg dnevno kod pacijenata sa dijabetesnom neuropatijom. Naime, aLA smanjuje simptome bolesti (pre svega, neprijatne osećaje u stopalima i šakama), ali utiče i na znake bolesti, uključujući neurološki i elektroneurografski nalaz. Pokazano je da je aLA potpuno bezbedna i nakon višegodišnje svakodnevne primene. Najčešća neželjena dejstva su blaga i uključuju mučninu, povraćanje i osećaj vrtoglavice. Jednom rečju, aLA je dokazano među najefikasnijim i najbezbednijim preparatima za lečenje neuropatskog bola kod dijabetesne neuropatije
            </Text>
          </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Kiselina