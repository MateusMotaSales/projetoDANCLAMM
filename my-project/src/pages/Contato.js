import React, {Component} from 'react';
import {Card, CardGroup, Col, Form, Row, Button} from 'react-bootstrap';

class Contato extends Component{
    render(){
        return(
            <div className="Card">
            <CardGroup >
            <Card>
             <Card.Body>
             <Card.Text>
             <Form>
             <Row>
             <Col>
             <Form.Control placeholder="Nome" />
             </Col>
             <Col>
            <Form.Control placeholder="Email" />
            </Col>
            </Row>

            <Form.Group controlId="formGridAddress1" className="Assunto">
            <Form.Control placeholder="Assunto" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1" className="Text">
             <Form.Control as="textarea" rows="3"  placeholder="Escreva algo.."/>
            </Form.Group>

            <Button variant="info" className="Button">Enviar</Button>{' '}
            </Form>

             </Card.Text>
             </Card.Body>
             </Card>

             <Card>
              <Card.Body>
              <Card.Text className="Nos">
                Tá precisando de serviços contabéis ? Precisa melhorar a gestão financeira da sua empresa? Quer melhorar
                a perfomance da sua empresa? A DANCLAM conta com mais de 10 anos de experiência e com a preferência dos
                principais grupos empresariais do Ceará. Qualidade, seriedade e credibilidade são a nossa marca! Peça uma 
                visita do nosso consultor e solicite um orçamento sem compromisso. Teremos o prazer de recebê-lo e saber
                um pouco sobre a sua necessidade.
                <br></br>
                <strong>DANCLAM assessória contábil</strong>
                <hr></hr>
                Rua XXXXXXXXX, XXX
                <br></br>
                Fortaleza-CE - Brasil
                <br></br>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31847.913069889957!2d-38.54785163250285!3d-3.8124270225002608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74e4f06de6bb9%3A0xf35be0473cca0c37!2sPassar%C3%A9%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1598972630781!5m2!1spt-BR!2sbr" className="Mapa"></iframe>
              </Card.Text>
              </Card.Body>
              </Card>
              </CardGroup>
            </div>
        )
    }
}

export default Contato;