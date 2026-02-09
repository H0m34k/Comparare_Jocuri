import type { Game } from '../_mock/games';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl overflow-hidden border border-neon-purple/20 hover:border-neon-pink/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/50">
      {/* Game Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-yellow-400">⭐</span>
          <span className="text-white font-semibold">{game.rating}</span>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
          {game.title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-2">
          {game.description}
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {game.genre.map((g) => (
            <span 
              key={g}
              className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-xs font-semibold rounded-full border border-neon-purple/30"
            >
              {g}
            </span>
          ))}
        </div>

        {/* Platforms */}
        <div className="flex items-center gap-2 text-gray-400 text-sm pt-2 border-t border-gray-700">
          <span>🎮</span>
          <span>{game.platform.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;