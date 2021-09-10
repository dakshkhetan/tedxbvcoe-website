import { useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Spinner from './components/Spinner/Spinner.component';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
// import Merch from './components/Merch/Merch.component';
// import Tickets from './components/Tickets/Tickets.component';

import './global.scss';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Home = lazy(() => import('./pages/Home/Home'));
const Speakers = lazy(() => import('./pages/Speakers/Speakers'));
const Sponsors = lazy(() => import('./components/Sponsors/Sponsors.component'));
const Sponsor = lazy(() => import('./components/Sponsor/Sponsor.component'));
const SponsorUs = lazy(() =>
  import('./components/SponsorUs/SponsorUs.component')
);
const Tickets = lazy(() => import('./components/Tickets/Tickets.component'));
const Merch = lazy(() => import('./components/Merch/Merch.component'));
const Team = lazy(() => import('./components/Team/Team.component'));
const FAQs = lazy(() => import('./components/FAQs/FAQs.component'));
const Contact = lazy(() => import('./components/Contact/Contact.component'));

ReactGA.initialize('UA-202539038-1');

const TicketsWrapper = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Tickets />
      <Merch />
    </>
  );
};

const MerchWrapper = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Merch />
      <Tickets />
    </>
  );
};

const Root = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/speakers' component={Speakers} />
        <Route path='/sponsors' component={Sponsors} />
        <Route path='/sponsorship' component={SponsorUs} />
        <Route path='/tickets' component={TicketsWrapper} />
        <Route path='/merch' component={MerchWrapper} />
        <Route path='/faq' component={FAQs} />
        <Route path='/team' component={Team} />
        <Route path='/contact' component={Contact} />
        <Route path='/sponsor/:sponsorName' component={Sponsor} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </Suspense>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
