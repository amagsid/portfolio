import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from '../components/Hero/Hero';
import PastWork from '../components/PastWork/PastWork';
import Experience from '../components/Experience/Experience';
import AboutMe from '../components/AboutMe/AboutMe';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { motion } from 'framer-motion';
import MusicContainer from '../components/MusicContainer/MusicContainer';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <Layout>
      <motion.div
        initial={{ x: '-100vw ' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 0.7, bounce: 0.3 }}
      >
        <Hero />
      </motion.div>

      {/* <MusicContainer className="pt-4" /> */}

      <AboutMe />

      {/* <Experience /> */}

      <PastWork />

      <Contact />
    </Layout>
  );
};

export default Home;
