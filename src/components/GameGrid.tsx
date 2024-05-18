import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={5}>
        {isLoading && skeletonNumbers.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((g) => (
          <GameCard game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
