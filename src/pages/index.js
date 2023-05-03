import 'bootstrap/dist/css/bootstrap.min.css';
import Acomplishments from '../components/Acomplishments/Acomplishments';

import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { AnimatePresence, motion } from 'framer-motion';
import MusicContainer from '../components/MusicContainer/MusicContainer';

const Home = () => {
	return (
		<Layout>
			<Section>
				<motion.div
					initial={{ x: '-100vw ' }}
					animate={{ x: 0 }}
					transition={{ type: 'spring', duration: 0.7, bounce: 0.3 }}
				>
					<Hero />
					<MusicContainer className="pt-4" />
				</motion.div>

				<Timeline />
			</Section>
			<Projects />
			<Technologies />

			<Acomplishments />
		</Layout>
	);
};

export default Home;
