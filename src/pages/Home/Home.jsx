import { useEffect } from 'react';
import ReactGA from 'react-ga';

import Hero from '../../components/Hero/Hero.component';
import AboutBVCOE from '../../components/AboutBVCOE/AboutBVCOE.component';
import Sponsors from '../../components/Sponsors/Sponsors.component';
import Speakers from '../../components/Speakers/Speakers.component';
import SpeakerForm from '../../components/SpeakerForm/SpeakerForm.component';
import SponsorUs from '../../components/SponsorUs/SponsorUs.component';
import FAQs from '../../components/FAQs/FAQs.component';
import Team from '../../components/Team/Team.component';
import Contact from '../../components/Contact/Contact.component';

import './Home.styles.scss';

// TODO: unhide sections & swap team & contact components

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
      <Hero />
      <AboutBVCOE />
      {/* <Sponsors /> */}
      {/* <Speakers /> */}
      <SpeakerForm />
      {/* <SponsorUs /> */}
      <Team />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Home;
