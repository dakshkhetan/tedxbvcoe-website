import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header/Header.component';
import Home from './pages/Home/Home';
import Speakers from './pages/Speakers/Speakers';
import Sponsors from './components/Sponsors/Sponsors.component';
import Sponsor from './components/Sponsor/Sponsor.component';
import Team from './components/Team/Team.component';
import FAQs from './components/FAQs/FAQs.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

import './index.scss';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

ReactGA.initialize('279735664');

const Root = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/speakers' component={Speakers} />
      <Route path='/sponsors' component={Sponsors} />
      <Route path='/faq' component={FAQs} />
      <Route path='/team' component={Team} />
      <Route path='/contact' component={Contact} />
      <Route path='/sponsor/:sponsorName' component={Sponsor} />
      <Redirect to='/' />
    </Switch>
    <Footer />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
