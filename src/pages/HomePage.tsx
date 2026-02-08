import HeroSection from "../sections/home/HeroSection";
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default HomePage;