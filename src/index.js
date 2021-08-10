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
import SponsorUs from './components/SponsorUs/SponsorUs.component';
import Tickets from './components/Tickets/Tickets.component';
import Team from './components/Team/Team.component';
import FAQs from './components/FAQs/FAQs.component';
import Contact from './components/Contact/Contact.component';
import Footer from './components/Footer/Footer.component';

import './global.scss';

import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

ReactGA.initialize('UA-202539038-1');

const Root = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/speakers' component={Speakers} />
      <Route path='/sponsors' component={Sponsors} />
      <Route path='/sponsorship' component={SponsorUs} />
      <Route path='/tickets' component={Tickets} />
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
