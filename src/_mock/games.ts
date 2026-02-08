export interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string[];
  platform: string[];
  rating: number;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    description: "Open-world action RPG set in Night City.",
    image: "https://via.placeholder.com/400x300",
    genre: ["RPG", "Action"],
    platform: ["PC", "PS5"],
    rating: 4.5,
  },
];
