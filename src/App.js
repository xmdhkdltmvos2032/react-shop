import React, { useState } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button } from 'react-bootstrap';
import './App.css';
import 오브젝트 from './data.js';

import { Link, Route, Switch } from 'react-router-dom';
import Detail from "./Detail.js";

function App() {

  let [신발, 신발변경] = useState(오브젝트);

  return (

    <div className="App">


      <Navber></Navber>


      <Switch>

        <Route exact path='/'>
          <div className='container'>
            <div className='row'>
              {
                신발.map(function (data, i) {
                  return <Card 신발={신발[i]} i={i} key={i}></Card>
                })
              }
            </div>
          </div>
        </Route>

        <Route path='/detail/:id'>
          <Detail 신발={신발}></Detail>  
        </Route>


        <Route path="/:id">
          <div>아무거나 보여주세요</div>
        </Route>

      </Switch>


    </div>
  );
}

function Card(props) {
  return (

    <div className='col-md-4'>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="100%"></img>
      <h4><Link to={`/detail/${props.신발.id}`}>{props.신발.title}</Link> </h4>
      <p>{props.신발.content} & {props.신발.price}</p>
    </div>

  )
}

function Navber() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" className='link-nav'>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/detail" className='link-nav'>Detail</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default App;
