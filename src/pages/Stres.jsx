import React from 'react'
import Footer from '../components/Footer/Footer'
import { glava } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Image, Text } from './style'

const Stres = () => {
  return (
    <React.Fragment>
        <Navbar/>
          <Container>
            <Inform>
                <BigTitle>Oksidativni stres i starenje ćelije</BigTitle>
                <Image src={glava}/>
            </Inform>
            <Text>Slobodni radikali se normalno stvaraju u organizmu ali se normalno i neutrališu. S obzirom na to da su slobodni radikali molekule kiseonikovih jedinjenja sa jednim ili više nesparenih elektrona, oni nastoje da se stabilizuju oduzimajući potrebne elektrone ugljenim hidratima, lipidima ili proteinima koji izgrađuju ćelije u organizmu. Pokreće se štetna reakcija – oksidativni stres, u kojoj ćelije gube svoj integritet i postaju oštećene ili potpuno nefunkcionalne.</Text>
            <Text>Oksidativni stres je stanje u kome ne postoji ravnoteža između stvaranja slobodnih radikla i njihovog neutralisanja od strane antioksidativne zaštite organizma. Najčešće nastaje usled povećane produkcije slobodnih radikala a smanjene sposobnosti organizma za njihovu neutralizaciju.</Text>
            <Text>Slobodni radikali nastaju i tokom normalnih metaboličkih procesa u kojima dolazi do stvaranja energije neophodne za normalno funkcionisanje metabolizma. Oksidativni stres se javlja i prirodno i u osnovi je procesa starenja ćelije.</Text>
            <Text>Danas naučnici slobodne radikale i oksidativni stres povezuju sa kardiovaskularnim bolestima, dijabetesom, raznim vrstama karcinoma, starenjem, Alchajmerovom i Parkinsonovom bolešću, a spisak se stalno dopunjuje. Smatra se da proces ateroskleroze započinju i održavaju slobodni radikali. Ovo je važno imati u vidu s obzirom na to da su srčani i moždani udar, kao posledica ateroskleroze, danas najčešći uzroci umiranja u visoko i srednje razvijenim zemljama Evrope.</Text>
            <Text>Ćelija je tokom svog života izložena mnogim štetnim uticajima različitih faktora koji umanjuju njenu sposobnost preživljavanja. Nagomilavanje nepravilnosti u fiziološkim mehanizmima ćelije dovodi do nepovratnih promena koje se odražavaju na ceo organizam. Na ovaj proces podjednako utiču spoljašnji i genetski određeni faktori. Tokom starenja dolazi do promena mnogih procesa u ćeliji koje se karakterišu smanjenjem sinteze DNK, RNK i proteina a smanjuje se i kapacitet unosa hranljivih materija.</Text>
            <Text>U organizmu postoji stalna borba između slobodnih radikala i antioksidanasa. Antioksidansi štite organizam i pomažu nam da se odbranimo od negativnog uticaja slobodnih radikala. Donirajući jedan ili više elektrona slobodnom radikalu, stabilizuju ga i sprečavaju pokretanje oksidativnog stresa i jačaju odbrambenu sposobnost organizma.</Text>
            <Text>Naše telo stvara antioksidanse, ali to nije dovoljno da se izbori sa svim slobodnim radikalima koji nastaju u organizmu. Treba izbegavati stanja stresa koja ugrožavaju normalnu ravnotežu slobodnih radikala i sposobnosti organizma da ih neutralizuje.</Text>
            <Text>Antioksidanse treba dodatno unositi hranom ili dijetetskim suplementima. Balansirana i adekvatna ishrana su jedan od najboljih načina antioksidativne zaštite. Preporučuje se konzumiranje uravnoteženih obroka i međuobroka sa širokim spektrom namirnica (povrće, voće, žitarice, namirnice bogate cinkom...).</Text>
            <Text style={{marginBottom: '60px'}}>Ukoliko ne konzumirate dovoljno voća i povrća ili ne ispunjavate kriterijume balansiranog unosa, dodaci ishrani bogati antioksidansima su idealno rešenje da zadovoljite povećane potrebe organizma.</Text>   
          </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Stres