import { useState, useMemo } from 'react';
import { mockGames } from '../_mock/games';
import GameCard from '../components/GameCard';
import FilterBar from '../components/FilterBar';  // ← ADAUGĂ IMPORT

function GameListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('All');
  const [platformFilter, setPlatformFilter] = useState('All');
  const [sortBy, setSortBy] = useState('title');

  // Filter and sort games
  const filteredGames = useMemo(() => {
    let filtered = [...mockGames];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((game) =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Genre filter
    if (genreFilter !== 'All') {
      filtered = filtered.filter((game) => game.genre.includes(genreFilter));
    }

    // Platform filter
    if (platformFilter !== 'All') {
      filtered = filtered.filter((game) => game.platform.includes(platformFilter));
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'year') {
        return b.releaseYear - a.releaseYear;
      }
      return 0;
    });

    return filtered;
  }, [searchQuery, genreFilter, platformFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 mt-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent mb-4">
            Browse Games
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our collection of {mockGames.length} amazing games
          </p>
        </div>

        {/* FilterBar - ÎNLOCUIEȘTE TODO cu asta */}
        <FilterBar
          onSearch={setSearchQuery}
          onGenreFilter={setGenreFilter}
          onPlatformFilter={setPlatformFilter}
          onSort={setSortBy}
        />

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No games found matching your filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setGenreFilter('All');
                setPlatformFilter('All');
              }}
              className="mt-4 px-6 py-3 bg-neon-purple hover:bg-neon-pink transition-all rounded-lg font-semibold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameListPage;