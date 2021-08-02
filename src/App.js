import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Servicos from './components/pages/Servicos/Servicos';
import Contato from './components/pages/Contato/Contato';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/contato' component={Contato} />
      </Switch>
      <a
        href='https://api.whatsapp.com/send?phone=5581996023874&text=Ol%C3%A1%2C%20estou%20interessado%20em%20servi%C3%A7os%20de%20sinaliza%C3%A7%C3%A3o%20e%20comunica%C3%A7%C3%A3o%20visual.'
        class='whatsapp_float'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i class='fa fa-whatsapp whatsapp-icon'></i>
      </a>
      <Footer />
    </Router>
  );
}

export default App;
