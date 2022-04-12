import React from 'react'
import Footer from '../components/Footer/Footer'
import { diabetis, grafikon1, grafikon2, grafikon3, grafikon4, grafikon5 } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Image, Text } from './style'

const Dijabetes = () => {
  return (
    <React.Fragment>
        <Navbar/>
          <Container>
          <Inform>
            <BigTitle>Dijabetes i komplikacije</BigTitle>
            <Image src={diabetis}/>
        </Inform>
        <Text>Prema definiciji svetske zdravstvene organizacije, dijabetes je poremećaj metabolizma koji karakteriše povišen nivo šećera u krvi koji vremenom može da dovede do ozbiljnih oštećenja srca, krvnih sudova, oka, bubrega i nerava.</Text>
        <Text>Prema proceni Instituta za javno zdravlje Srbije, od dijabetesa u Srbiji približno boluje 750,000 osoba što je 10,3% ukupne populacije. Od toga je tip 2 dijabetesa zastupljen čak 95%.</Text>
        <Text>Prema proceni domaćih eksperata, i na osnovu rezultata domaćih studija, 39% osoba s tipom 2 dijabetesa, nema postavljenu dijagnozu i ne zna za svoju bolest.</Text>
        <Text>Klasični simptomi povišenog šećera u krvi su učestalo mokrenje, pojačana žeđ, gubitak u težini, pojačan apetit. Postoji često osećaj lakog zamaranja, kao i sklonost ka infekcijama ali isto tako može biti i bez simptoma.</Text>
        <Text>Ukoliko se dijabetes ne otkrije pravovremeno i ne tretira na pravi način, često se javljaju komplikacije koje mogu biti rane i kasne.</Text>
        <Text>Dijabetesna neuropatija je jedna od najčešćih kasnih komplikacija dijabetesa, bez obzira da li je u pitanju tip 1 ili tip 2 šećerne bolesti, i može pogoditi gotovo svaki organ. Prisutna je kod skoro 50% starijih osoba s dijabetesom.</Text>
        <Text>Oštećenja nerava u neuropatiji, mogu da dovedu do: bolova, gubitka osetljivosti, mravinjanja ili osećaja žarenja u stopalima ili nogama (parestezije). Kod pojave ovakvih simptoma, potrebno je odmah obavestiti lekara. Ukoliko dijabetes nije dobro regulisan i postoji oštećenje nerava, moguće je da se pojave i problemi smanjene seksualne funcije.</Text>
        <Text>Jedan od italijanskih stručnjaka iz oblasti endokrinologije i poremećaja metabolizma u Bergamu, sproveo je istraživanje o pozitivnim metaboličkim efektima nastalih upotrebom jedinstvene formulacije Nuronorma ( kombinacija alfalipoinske kiseline, cinka i L-karnozina i vitamina B grupe) kod osoba obolelih od dijabetesa.</Text>
        <Text>U studiji je učestvovalo 46 pacijenta koji su bili podeljeni u dve grupe:</Text>
        <Text>- Prva grupa (LICA®): 23 pacijenta koji su koristili jedinstvenu formulaciju Nuronorma (alfa-lipoinska kiselina+cink+L-karnozin). LICA®je naziv ove patentom zaštićene jedinstvene formulacije pa je tako nazvana i grupa pacijenata koja je uzimala ovaj proizvod.</Text>
        <Text>- Druga grupa (kontrolna): 23 pacijenta koji su koristili samo alfa-lipoinsku kiselinu, isti vremenski period (90 dana). Kod osoba iz grupe A, koji su uzimali jedinstvenu zaštićenu kombinaciju Nuronorm, efekat tretmana je bio sledeći u odnosu grupu B:</Text>
        <b>
        <ul style={{margin: '0 20vw'}}>
            <li>Značajno smanjenje koncentracije šećera u krvi - grafikon 1</li>
            <li>Značajno smanjenje glikoziliranog hemoglobina (HbA1c) - grafikon 2</li>
            <li>Umanjenje percepcije bola - grafikon 3</li>
            <li>Poboljšanje osećaja za vibraciju i toplotu grafikoni 4 i 5</li>
            <li>Značajno smanjenje fruktozamina (parametra koji je takođe povećan kod osoba koje imaju dijabetes)</li>
            <li>Održanje mehanizama kontrole lančanih događaja koji pokreću nastanak dijabetesne neuropatije.</li>
        </ul>
        </b>
        <Text>U toku studije nije zabeležena ni jedna neželjna reakcija na proizvod Nuronorm.</Text>
        <Text>Na osnovu ovoga možemo da tvrdimo da proizvod Nuronorm daje bolje rezultate u odnosu na proizvode koji sadrže samo alfa lipoinsku kiselinu. Vitamini B grupe i cink, koji ulaze u sastav proizvoda Nuronorm doprinose zaštiti ćelija od oksidativnog stresa, održanju normalne funkcije nervnog sistema, kao i normalnom energetskom metabolizmu. Zbog svega navedenog primena Nuronorma pomaže kod neuropatije kao jedne od najčešćih hroničnih komplikacija šećerne bolesti.</Text>
        <Text>S toga se upotreba Nuronorma preporučuje i u ranim fazama šećerne bolesti.</Text>
        <Inform style={{marginBottom: '60px'}}>
            <Image src={grafikon1}/>
            <Text style={{ margin: '0'}}>grafikon 1</Text>
            <Image src={grafikon2}/>
            <Text style={{ margin: '0'}}>grafikon 2</Text>
            <Image src={grafikon3}/>
            <Text style={{ margin: '0'}}>grafikon 3</Text>
            <Image src={grafikon4}/>
            <Text style={{ margin: '0'}}>grafikon 4</Text>
            <Image src={grafikon5}/>
            <Text style={{ margin: '0'}}>grafikon 5</Text>
        </Inform>
          </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Dijabetes