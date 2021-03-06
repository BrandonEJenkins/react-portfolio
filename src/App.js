import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer.component.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Brandon Jenkins',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Welcome to my site!',
        subTitle: 'Check out my portfolio and work history',
        text: 'Browse through my projects'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Get in Touch!'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Brandon Jenkins</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/react-portfolio/">Home</Link>
                  <Link className="nav-link" to="/react-portfolio/about">About</Link>
                  <Link className="nav-link" to="/react-portfolio/contact">Contact</Link>

                </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/react-portfolio/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}   />} />
          <Route path="/react-portfolio/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/react-portfolio/contact" render={() => <ContactPage title={this.state.contact.title} />} />


          <Footer />

        </Container>
      </Router>
    );

  }
}

export default App;
