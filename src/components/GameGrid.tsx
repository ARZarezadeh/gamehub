import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) <Text>{error}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding={5}>
      {isLoading &&
        skeletonNumbers.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((g) => (
        <GameCardContainer key={g.id}>
          <GameCard game={g} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
