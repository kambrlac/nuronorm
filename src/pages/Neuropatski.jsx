import React from 'react'
import Footer from '../components/Footer/Footer'
import { bol } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Image, Text } from './style'

const Neuropatski = () => {
  return (
    <React.Fragment>
        <Navbar/>
          <Container>
            <Inform>
                <BigTitle>Neuropatski bol</BigTitle>
                <Image src={bol}/>
            </Inform>
            <Text>Neuropatski bol se javlja kao posledica oštećenja i oboljenja nervnog sistema. To je hronični bol koji traje mesecima, uporan je i teško se toleriše. Iako nije velike jačine, često ometa san, utiče na raspoloženje, remeti koncentraciju, radnu sposobnost, pa i društvene navike. Zbog toga mu se često pridružuju depresija, anksioznost i poremećaj sna.</Text>
            <Text>Uzroci neuropatskog bola su brojna stanja i povrede koje mogu direktno oštetiti nerve. Često, on može da bude komplikacija drugih promena i stanja vezanih za nerve - dijabetes, bol u donjem delu leđa, herpes zoster, trigeminalna neuralgija.</Text>
            <Text>Pacijenti ga opisuju kao osećaj žarenja, paljenja, mravinjanja, trnjenja, sevanja ili žiganja. Draži koje su suviše blage da kod zdravih osoba izazovu osećaj bola kod obolelih od neuropatskog bola zbog sniženog praga nadražaja izazivaju bol. Dodir odeće ili posteljine, pa čak i pomeranje dlačica na telu provociraju neprijatnost. U isto vreme, na obolelom delu tela smanjen je osećaj za dodir, toplo i hladno.</Text>
            <Text>Rano prepoznavanje i tretiranje neuropatskog bola je najvažnije za uspešanost terapije. Lečenje treba da smanji i otkloni doživljaj bola i poboljša, ne samo fizičke sposobnosti pacijenta već i psihičke sposobnosti za uspešne porodične i društvene odnose. Dostupne su brojne metode lečenja, ali svakako ključno mesto zauzimaju:</Text>
            <Text>lečenje osnovnog uzroka, zdrave životne navike, sistemski lekovi (antidepresivi, antikonvulzivi, opioidi) i različite metode fizikalne terapije.</Text>
            <Text>Primena lekova trebalo bi da bude isključivo predložena od strane lekara, kada treba imati u vidu tačnu indikaciju za primenu leka i obratiti pažnju na eventualno postojanje kontraindikacija kod svakog pacijenta ponaosob.</Text>
            <Text>Brojna istraživanja ukazuju i na važnost ishrane. Treba unositi vitamine B kompleksa, alfaliponsku kiselinu koja oporavlja oštećene nerve i ostale antioksidanse, biljna ulja.</Text>
            <Text>Grupa italijanskih lekara sprovela je ispitivanje o efikasnosti antikovulziva u kombinaciji sa Nuronorm-om u lečenju hroničnog pelvično-perinealnog bola uzrokovanog sakralnom neuropatijom.</Text>
            <Text>120 pacijenata podeljeno je u dve jednake grupe:</Text>
            <Text>- Grupa A: 60 pacijenata su 90 dana bili na terapiji Nuronorm + antikolvuziv, a zatim na terapiji samo Nuronorm-om još 90 dana</Text>
            <Text>- Grupa B: 60 pacijenata je svih 180 dana bila samo na terapiji antikolvuzivom</Text>
            <Text>Efekti su mereni neposredno pre pocetka terapije (T0), posle 3 meseca (T1), posle 6 meseci (T2)</Text>
            <Text style={{marginBottom: '60px'}}>Primena kombinacije antikovulziva i Nuronorma se pokazala efikasnijom u smanjenju bola i poboljšanju periferne reinervacije. Nuronorm sam u terapiji nadalje omogućava održavanje postignutih efekata bez pojave neželjenih dejstava.</Text>
          </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Neuropatski