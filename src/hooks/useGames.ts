import useData from "./useData";
import { Genre } from "./useGenres";
import { PlatForm } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: PlatForm | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [
    selectedGenre?.id,
    selectedPlatform?.id,
  ]);

export default useGames;
