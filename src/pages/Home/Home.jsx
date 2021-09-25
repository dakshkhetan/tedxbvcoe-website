import { useEffect } from 'react';
import ReactGA from 'react-ga';

import Hero from '../../components/Hero/Hero.component';
import About from '../../components/About/About.component';
import Speakers from '../../components/Speakers/Speakers.component';
import Sponsors from '../../components/Sponsors/Sponsors.component';
// import SpeakerForm from '../../components/SpeakerForm/SpeakerForm.component';
import SponsorUs from '../../components/SponsorUs/SponsorUs.component';
import Tickets from '../../components/Tickets/Tickets.component';
import FAQs from '../../components/FAQs/FAQs.component';
import Team from '../../components/Team/Team.component';
import Contact from '../../components/Contact/Contact.component';

import './Home.styles.scss';

// TODO: unhide sections & swap <Team /> & <FAQs /> components if bg-color is not ideal

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
      <Hero />
      <About />
      {/* <SpeakerForm /> */}
      <Speakers />
      <Tickets />
      <Sponsors />
      <SponsorUs />
      <FAQs />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
