import React from 'react'
import Footer from '../components/Footer/Footer'
import { doktor } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Title, Image, Text } from './style'

const Lumbalni = () => {
  return (
    <React.Fragment>
        <Navbar/>
          <Container>
            <Inform>
                <BigTitle>Lumbalni bolni sindrom</BigTitle>
                <Image src={doktor} style={{objectFit: 'cover', width: '400px'}}/>
                <Title style={{color: 'lightblue'}}>Klin. assist. dr sc. med. Stojan Perić, neurolog</Title>
            </Inform>
            <Title>Šta je lumbalni bolni sindrom?</Title>
            <Text>Lumbalni bolni sindrom (LBS) se definiše kao bol koji se javlja u području leđa, između donje ivice rebara i donje ivice mišića zadjnice, sa ili bez širenja niz nogu (1). LBS može biti akutni, ako traje do nekoliko nedelja ili hronični, ako traje više od tri meseca. Najveći broj pacijenata sa LBS se oporavlja u roku do četiri nedelje, ali se veoma često u toku života mogu javiti ponovni ataci bola. Zbog svoje višestruke funkcije, kičma je izložena stalnim mehaničkim opterećenjima, ali i degenerativnim promenama koje progrediraju s godinama. Stres, gojaznost, manjak fizičke aktivnosti, loše držanje tela, nepravilno podizanje tereta, kao i različiti deformiteti stopala su vodeći uzroci nastanka LBS (2).</Text>
            <Title>Koliko je čest lumbalni bolni sindrom?</Title>
            <Text>LBS je, posle glavobolje, najčešći simptom u neurologiji. Epidemiološke studije pokazuju da je životna prevalencija LBS u opštoj populaciji 60-90%, a trenutna prevalencija 10-25% (3-6). Oko 7% ljudi u svetu (više od 500 miliona) u svakom trenutku ima LBS, koji ih ograničava u svakodnevnim aktivnostima. S obzirom na to da je učestalost LBS u dramatičnom porastu, ovo oboljenje predstavlja sve veći javno-zdravstveni problem. LBS je u Evropi najčešći uzrok uzimanja bolovanja i prevremenog penzionisanja, a u SAD dovodi do češćeg odsustvovanja sa posla nego bilo koja druga mišićno-koštana bolest (3-6).</Text>
            <Title>Kako se dijagnostikuje lumbalni bolni sindrom?</Title>
            <Text>Nacionalni institut Ujedinjenog Kraljevstva za zdravlje i izvrsnost u lečenju (engl. NICE) izdao je 2016. preporuke za dijagnostiku i lečenje pacijenata sa LBS (7). Shematski prikaz osnovnih postulata ovog vodiča dat je u Grafikonu.</Text>
            <Text>Dijagnoza LBS je klinička i postavlja se na osnovu karakterističnih simptoma bolesti i na osnovu neurološkog pregleda. Prema dosadašnjim literaturnim podacima, radiološku dijagnostiku je opravdano sprovoditi kod oko 1% obolelih od LBS (8). Radiološka i druga dopunska dijagnostika ima smisla ukoliko se sumnja na drugu bolest kao uzrok LBS (tumor, infekcija, trauma, inflamatorni proces) ili ako bi ovo moglo uticati na dalje lečenje (sindrom caudae equinae i akutna protruzija diskusa). Indikacije za hiruršku intervenciju su prisustvo slabosti u nogama (najčešće nemogućnost hoda na peti ili prstima jedne noge), poremećaj kontrole sfinktera (problemi sa mokrenjem, stolicom, erekcijom i ejakulacijom) ili prisustvo produženog, jakog bola, koji se ne smanjuje na primenjenu terapiju i ometa svakodnevno funkcionisanje pacijenta. Pacijenti kod kojih se simptomi bolesti povuku u periodu do četiri nedelje, ne zahtevaju rutinska radiološka ispitivanja. Radiološka dijagnostika se preporučuje kod pacijenata kod kojih se simptomi bolesti, i pored fizikalne i farmakološke terapije, ne povlače u periodu od šest nedelja.</Text>
            <Title>Kako se leči lumbalni bolni sindrom?</Title>
            <Text>Zvanične preporuke za lečenje akutnog LBS podrazumevaju da bolesnik ostane aktivan, da dobija oralne nesteroidne antiinflamatorne lekove (NSAIL) i lekove za neuropatski bol ukoliko je on prisutan (8). Ukoliko su simptomi jači i dugo traju, može se savetovati primena lokalnih infiltracionih injekcija kortikosteroida ili anestetika. Hirurška intervencija se razmatra prema gore navedenim indikacijama. Nakon kupiranja akutnog bola, savetuju se vežbe, manuelne procedure, fizikalna terapija i psihoterapija. Analize pokazuju da se u zemljama zapadne Evrope i SAD retko i nepotpuno poštuju zvanične preporuke za lečenje LBS (9-13).</Text>
            <Text style={{marginBottom: '60px'}}>Primena preparata alfalipoinske kiseline u kombinaciji sa vitaminima B kompleksa, cinkom i karnozinom pokazala se kao efikasna u lečenju bolne sakralne radikulopatije (14). Primećen je pozitivan efekat na smanjenje intenziteta bola, ali i na funkciju mokraćne bešike, erekcije i seksualne funkcije kod žena.</Text>
          </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Lumbalni