import React from 'react'
import Footer from '../components/Footer/Footer'
import { telo } from '../components/Images/images'
import Navbar from '../components/Navbar/Navbar'
import { Container, Inform, BigTitle, Title, Image, Text } from './style'

const Cink = () => {
  return (
    <React.Fragment>
        <Navbar/>
            <Container>
                <Inform>
                    <BigTitle>Moćni cink i njegova dejstva</BigTitle>
                    <Image src={telo}/>
                </Inform>
                <Text>Cink je bitan kofaktor više od 200 različitih enzima. Deluje kao antioksidans, jer je kofaktor najznačajnijeg enzima antioksidativne zaštite – superoksid dizmutaze 1 (SOD1). Pored toga, pomaže dejstvo prirodnog insulina i ima direktnog uticaja na smanjenje bola. Kod pacijenata sa dijabetesom, cink se gubi preko bubrega, a njegov nedostatak je povezan sa mikrovaskularnim komplikacijama dijabetesa (uključujući polineuropatiju) i srčanim bolestima. Povoljan efekat primene cinka je posebno izražen kod muškaraca sa dijabetesom.</Text>
                <Title>L-karnozin</Title>
                <Text>Karnozin je molekul koji je normalno prisutan u ljudskom organizmu. Dokazano je da ubrzava metabolizam hormona koji se oslobađaju usled stresa, smanjujući na taj način koncentraciju hormona stresa u cirkulaciji. Takođe postoje dokazi da sprečava stvaranje slobodnih radikala čime se potvrđuje njegov antioksidativni status što je veoma važno jer oksidativni stres leži u osnovi mnogih poremećaja u organizmu kao što su neurodegenerativna i ishemijska oštećenja centralnog nervnog sistema. Od drugih efekata pokazuje imunostimulativno dejstvo.</Text>
                <Title>Kompleks vitamina B</Title>
                <Text style={{marginBottom: '60px'}}>Karnozin je molekul koji je normalno prisutan u ljudskom organizmu. Dokazano je da ubrzava metabolizam hormona koji se oslobađaju usled stresa, smanjujući na taj način koncentraciju hormona stresa u cirkulaciji. Takođe postoje dokazi da sprečava stvaranje slobodnih radikala čime se potvrđuje njegov antioksidativni status što je veoma važno jer oksidativni stres leži u osnovi mnogih poremećaja u organizmu kao što su neurodegenerativna i ishemijska oštećenja centralnog nervnog sistema. Od drugih efekata pokazuje imunostimulativno dejstvo.</Text>
            </Container>
        <Footer/>
    </React.Fragment>
  )
}

export default Cink