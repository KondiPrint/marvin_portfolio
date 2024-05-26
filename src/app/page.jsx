import HomeAbout from '@/components/HomePage/AboutMe';
import HomeContact from '@/components/HomePage/Contact';
import HomeHero from '@/components/HomePage/Hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}

      <HomeHero />

      {/* About Section */}
      <HomeAbout />

      {/* Contact Section */}
      <HomeContact />
    </>
  );
}
