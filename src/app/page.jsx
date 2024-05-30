import HomeAbout from '@/components/HomePage/AboutMe';
import HomeContact from '@/components/HomePage/Contact';
import CountdownTimer from '@/components/HomePage/Countdown';
import HomeHero from '@/components/HomePage/Hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}

      <HomeHero />

      {/* Countdown Timer */}

      <CountdownTimer />

      {/* About Section */}
      <HomeAbout />

      {/* Contact Section */}
      <HomeContact />
    </>
  );
}
