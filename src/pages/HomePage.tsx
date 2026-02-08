import HeroSection from "../sections/home/HeroSection";
import Navbar from '../components/Navbar';
import FeaturedGamesSection from '../sections/home/FeaturedGamesSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <Navbar />
      <HeroSection />
      <FeaturedGamesSection/>
    </div>
  );
}

export default HomePage;