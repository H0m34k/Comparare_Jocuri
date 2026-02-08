import { mockGames } from '../../_mock/games';
import GameCard from '../../components/GameCard';

function FeaturedGamesSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent mb-4">
            Featured Games
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our handpicked selection of the most popular and highly-rated games
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all rounded-lg font-semibold text-lg hover:scale-105 transform duration-200">
            View All Games
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGamesSection;