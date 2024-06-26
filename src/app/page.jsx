import Carousel from '@/components/Carousel/Carousel';
import HomeAbout from '@/components/HomePage/AboutMe';
import HomeContact from '@/components/HomePage/Contact';
import CountdownTimer from '@/components/HomePage/Countdown';
import HomeHero from '@/components/HomePage/Hero';
import HomeSkills from '@/components/HomePage/Skills';

export default function Home() {
  return (
    <>
      <Carousel />
      {/* Hero Section */}
      <HomeHero />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* About Section */}
      <HomeAbout />

      {/* Skills Section */}
      <HomeSkills />

      {/* Contact Section */}
      <HomeContact />
    </>
  );
}
