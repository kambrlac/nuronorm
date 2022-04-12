import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Title, Text } from './style'

const Politika = () => {
  return (
    <React.Fragment>
      <Navbar/>
        <Container>
          <Inform>
            <BigTitle>Politika privatnosti</BigTitle>
          </Inform>
          <Text>Ovaj sajt ima veoma jednostavnu i jasnu politiku u vezi sa privatnošću korisnika: mi ne delimo lične podatke ili adrese elektronske pošte ni sa kim. Posetioci sajta koji se prijave na liste za primanje obaveštenja mogu da budu sigurni da se njihovi podaci čuvaju na sigurnom. Elektronske adrese onih koji nam pišu neće biti objavljene, osim ako nam korisnik to lično ne dozvoli. Pri tome, poseta korisnika je anonimna, osim ako nam korisnik lično ne da svoje podatke, kao što su: ime, adresa elektronske pošte itd., ili dok se lično ne prijavi na izveštaje, biltene i priručnike. Naime, www.nuronorm.rs ne koristi nijedan od programa koji mogu nasilno, bez saglasnosti korisnika, da pročitaju lične podatke sa korisnikovog računara.</Text>
          <Title>Pažljivo čuvamo podatke</Title>
          <Text>Mi pažljivo čuvamo sve podatke korisnika koji se nalaze na ovom sajtu, tako da to važi i za elektronske adrese. Naš odnos prema ličnim informacijama korisnika je veoma jasan: mi ne prodajemo, ne iznajmljujemo, ne delimo i ne pokazujemo lične podatke korisnika, uključujući adresu elektronske pošte, nikome sa strane. Pri tome, ulažemo veliki napor da informacije koje dobijemo od svakog korisnika budu maksimalno zaštićene i sigurne uz nas.</Text>
          <Title>Kolačići u veb-pretraživaču (Cookies)</Title>
          <Text>Ako koristite naš sajt, sačuvaćemo kolačiće na Vašem računaru kako bismo Vam olakšali i prilagodili korišćenje našeg sajta.</Text>
          <Title>Šta je kolačić?</Title>
          <Text>Kolačić je mala tekstualna datoteka, koju internet strana čuva na hard-disku Vašeg računara (ako Vaš brauzer dozvoli), a koja se kasnije preuzima i identifikuje Vas kod nas. Kolačići Vam omogućavaju lakše korišćenje internet stranice i bolje funkcionisanje sajta. Vi, naravno, uvek možete da odbijete naše kolačiće ako Vam brauzer dozvoljava, ali ako to uradite, naš sajt neće prepoznati Vaš računar i možda nećete imati pristup svim delovima sajta. U partnerstvu sa nezavisnim oglasnim mrežama oglašavamo se i na drugim sajtovima. Kao deo njihove usluge, oni postavljaju poseban kolačić na Vaš računar. Vaše lične podatke za identifikaciju ili informacije o Vašim onlajn-kursevima nećemo otkriti nijednom nezavisnom reklamnom serveru. Zajedno sa nezavisnim reklamnim serverom ćemo prikupljati i koristiti informacije o Vama, koje nisu lični podaci za identifikaciju, već podaci o IP adresi, tipu pretraživača, serveru na koji je Vaš računar povezan, pozivnom i poštanskom broju koji su vezani za Vaš server, o tome da li ste odgovorili na određeni oglas. Treća strana bi mogla upotrebiti kolačić za prikazivanje oglasa.</Text>
          <Title>Marketing</Title>
          <Text>Ne iznajmljujemo, ne prodajemo, niti razmenjujemo Vaše lične informacije sa drugim ljudima ili nepoznatim kompanijama u marketinške svrhe (uključujući i direktne marketinške svrhe) bez Vaše dozvole. Možemo koristiti i razmenjivati podatke koji nisu Vaši lični podaci, a za naše marketinške svrhe, uključujući, bez ograničenja, marketing na drugim sajtovima. Na primer, možemo koristiti informacije kako bismo kontrolisali koliko puta ćete videti oglas, kako bismo slali oglase prilagođene Vašim interesovanjima i merili efikasnost reklamnih kampanja. Brisanjem kolačića nas možete sprečiti da naše oglase prilagodimo Vama na drugim sajtovima.</Text>
          <Title>Zaštita korisnika</Title>
          <Text style={{marginBottom: '60px'}}>Radi zaštite korisnika sajta www.nuronorm.rs, zadržavamo pravo da svaku zloupotrebu ovog sajta istražimo, prijavimo i pokrenemo pravne akcije u onolikoj meri koliko je to maksimalno zakonski dozvoljeno.</Text>
          </Container>
      <Footer/>
    </React.Fragment>
  )
}

export default Politika