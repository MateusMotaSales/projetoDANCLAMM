import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap'


import Home from './pages/Home'
import Somos2 from './pages/Somos2'
import Contato from './pages/Contato'

import Footer from './pages/Footer'
import Planejamento from './pages/Planejamento';
import Contabilidade from './pages/Contabilidade';
import Consol from './pages/Consol';

class App extends Component{
  render(){
    return(
      <div>
        <header>
        <div className="Nav">
             <Navbar bg="light" expand="lg">
             <Navbar.Brand href="/" className="Title">DANCLAM Assessória contábil</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto" className="Teste">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/page1">Quem somos</Nav.Link>

            <NavDropdown title="Serviços" id="basic-nav-dropdown">
            <NavDropdown.Item href="/page4">Planejamento Tributário</NavDropdown.Item>
            <NavDropdown.Item href="/page5">Contabilidade Societária </NavDropdown.Item>
            <NavDropdown.Item href="/page6">Consolidação e demonstração contábeis </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/page3">Contato</Nav.Link>
            </Nav>
           </Navbar.Collapse>
           </Navbar>
            </div>
        </header>
          
        <main>
          <BrowserRouter>
          <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/page1' component={ Somos2 } />
          <Route path="/page3" component={Contato} />
          <Route path="/page4" component={Planejamento} />
          <Route path="/page5" component={Contabilidade} />
          <Route path="/page6" component={Consol} />
        </Switch>
        </BrowserRouter>
        <Footer></Footer>

        </main>
      </div>
    );
  }
}

export default App;
