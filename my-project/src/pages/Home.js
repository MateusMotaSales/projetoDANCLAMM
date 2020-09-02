import React, {Component} from 'react'
import { Carousel, Card, CardGroup, Button} from 'react-bootstrap'
 


class Home extends Component{
    render(){
        return(
       <div>
       <Carousel>
       <Carousel.Item>
       <img className="d-block w-100" src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="imagem" alt="First slide" className="ImagemCA"/>
      <Carousel.Caption>
      <h3>Experiência e conhecimento</h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d-block w-100" src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="imagem" alt="Third slide" className="ImagemCA"/>
      <Carousel.Caption>
      <h3>Tecnologia e inovação</h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d-block w-100" src="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" id="imagem" alt="Third slide" className="ImagemCA"/>
      <Carousel.Caption>
      <h3>Qualidade no atendimento</h3>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      <div className="Background">
          <h1><center>Boas Vindas</center></h1>
         <p className="TextInicial"> Bem-vindo a DANCLAM Assessória contábil. Sediada em Fortaleza, somos uma empresa de contabilidade composta por uma equipe interdisciplinar
          de profissionais : Contadores, Administradores, Gerentes de projetos, Marketing e muito mais </p>
      </div>

      <div>
      <CardGroup>
      <Card>
       <img src="https://image.flaticon.com/icons/svg/631/631180.svg" className="ImagemC"/>
      <Card.Body>
      <Card.Title className="Cardd">Planejamento Tributário</Card.Title>
      <Card.Text className="Texto">
       Planejamento tributário é a gestão do pagamento de tributos de uma empresa e também o estudo de maneiras de reduzir legalmente a carga tributária que incide sobre ela.
      </Card.Text>
      </Card.Body>
      </Card>

      <Card>
       <img src="https://image.flaticon.com/icons/svg/1585/1585266.svg" className="ImagemC"/>
      <Card.Body>
      <Card.Title className="Cardd">Contabilidade Societária</Card.Title>
      <Card.Text className="Texto">
      A contabilidade societária avalia as leis relativas à constituição das sociedades, empresas que devem ser registradas diretamente na Junta Comercial ou cujas pessoas jurídicas devem fazer o registro civil.
      </Card.Text>
      </Card.Body>
      </Card>

      <Card>
       <img src="https://image.flaticon.com/icons/svg/558/558385.svg" className="ImagemC"/>
      <Card.Body>
      <Card.Title className="Cardd">Consolidação e demonstração contábies</Card.Title>
      <Card.Text className="Texto">
      A Consolidação de Demonstrações Contábeis (ou simplesmente Consolidação de Balanços) são as demonstrações financeiras combinadas de uma empresa e suas subsidiárias. Ela permite avaliar a saúde geral de um grupo inteiro de empresas ao invés de somente a posição de uma empresa.
      </Card.Text>
      </Card.Body>
      </Card>
      </CardGroup>
      </div>

      </div>
       
         
        )
    }
}

export default Home