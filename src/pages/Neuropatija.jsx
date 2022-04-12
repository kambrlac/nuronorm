import React from 'react'
import Footer from '../components/Footer/Footer'
import { doktorka } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Title, Image, Text } from './style'

const Neuropatija = () => {
  return (
    <React.Fragment>
        <Navbar/>
          <Container id='vrh'>
            <Inform>
                <BigTitle>Dijabetesna neuropatija</BigTitle>
                <Image src={doktorka} style={{objectFit: 'cover', width: '400px'}}/>
                <Title style={{color: 'lightblue'}}>Prof. dr Dragana Lavrnić</Title>
            </Inform>
            <Title>Šta je to dijabetesna neuropatija i koji simptomi upućuju na njeno prisustvo?</Title>
            <Text>Pod dijabetesnom polineuropatijom (neuropatijom) (DN) podrazumevamo prisustvo simptoma i/ili znakova oštećenja perifernih nerava kod pacijenata koji imaju šećernu bolest (dijabetes), ali tek nakon što se isključe drugi mogući uzroci neuropatije (1,2). Najčešći simptomi koji upućuju na prisustvo dijabetesne neuropatije su trnjenje, bridjenje, mravinjanje, žarenje, paljenje, osećaj kao da postoje jastučići ispod prednjeg dela stopala, ili osećaj da se hoda po pesku, utrnulost i bolovi, i to najčešće u regiji stopala i potkolenica, kasnije i šaka, što se slikovito poredi sa distribucijom po tipu “čarapa i rukavica”. Pored ovih senzitivnih simptomaa postoji često i gubitak maljavosti i suva, perutava koža potkolenica, kao i blagi otoci stopala i donjih partija potkolenica, dok se slabost i gubitak mišićne mase potkolenica i šaka javljaju ređe, i to u kasnijim fazama bolesti (1-4)</Text>
            <Title>Koliko je dijabetesna neuropatija česta?</Title>
            <Text>DN je najčešća stečenA polineuropatija. Danas u svetu oko 470 miliona ljudi boluje od šećerne bolesti, a smatra se da oko 50% tokom vremena razvije simptome polineuropatije, što znači da DN ima preko 200 miliona ljudi . U Srbiji dijabetes mellitus ima oko 720.000 ljudi, a DN oko 360.000, što nam jasno ukazuje i koliki je njen značaj (2).</Text>
            <Title>Kako dijagnostikujemo DN?</Title>
            <Text>Dijagnoza DN se postavlja na osnovu prisustva karakterističnih pomenutih senzitivnih simptoma bolesti (trnjenje, bolovi, bridjenje, paljenje..), koji su relativno simetrični, tipa čarapa i rukavica, i vremenom se postepeno pogoršavaju, kao i tipičnog neurološkog nalaza (ugašeni Ahilovi refleksi, ispad senzibiliteta..). Dijagnoza se potvrđuje elektromioneurografskim pregledom (EMNG) koji odredjuje da li su više zahvaćena motorna ili senzitivna vlakna, da li je više zahvaćen omotoč nerva (demijelinizaciona neuropatija), ili nervno stablo (aksonalna neuropatija), da li je oštećenje nerava difuzno ili segmentno itd…(1-4) Medjutim, mora se istaći da kod pacijenata obolelih od šećerne bolesti nije svaka neuropatija uzrokovana dijabetesom. Zato se kod svakog obolelog moraju isključiti i drugi mogući uzroci neuropatije, kao što su snižen nivo vitamina B12 i folata, smanjena funkcija štitne žlezde, sistemske bolesti vezivnog tkiva, maligne bolesti i dr, zbog čega se rade analize krvi i urina, a kada je potrebno i likvora (2).</Text>
            <Title>Kako se leči dijabetesna neuropatija?</Title>
            <Text>Osnovna i najvažnija terapijska mera u lečenju DN je svakako regulisanje nivoa šećera u krvi (6), ali i delovanje na procese u osnovi oštećenja nerava kao što su oksidativni stres i smanjena prokrvljenost i provodljivost nerava. Takodje je značajno delovati i na same simptome neuropatije (bol, trnjenje, mravinjanje, žarenje...), jer su oni često vrlo izraženi i utiču na funkcionisanje obolelih.</Text>
            <Text>Dakle, pored lekova za samu šećernu bolest, danas postoje i lekovi koji mogu biti korisni kako u prevenciji, tako i u lečenju DN. Ovde posebno mesto zauzima alfa lipoinska kiselina (ALA) čija je efikasnost dokazana u brojnim kliničkim studijama, a koja je dostupna u svakodnevnoj kliničkoj praksi (2, 7). Pored nje pozitivan učinak imaju i vitamini koji deluju na funkciju nerava, B1 (posebno u obliku benfotiamina), B6 i B12 (2, 8) .</Text>
            <Text style={{marginBottom: '60px'}}>ALA deluje na više načina. Jedan od osnovnih je njeno metaboličko (antioksidativno) dejstvo, antizapaljensko i dejstvo na mikrocirkulaciju, direktno dejstvo na periferne nerve, ali i direktno dejstvo na simptome bolesti (trnjenje, žarenje, bol..). Optimalna doza ALA je 600mg dnevno kroz duži vremenski period, a prednost svakako imaju preparati koji pored ALA imaju i dodatne sastojke koji potenciraju dejstvo ALA kao što su L-karnozin, i vitamini B grupe. ALA se odlično podnosi, i jedino što je u praksi zabaleženo su samo blage stomačne smetnje, što se takođe može ublažiti specijalnim formulacijama leka (2, 8).</Text>
          </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Neuropatija