import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies />
      <AboutMe />
      <Contact />
    </>
  );
}
