import { HStack, Button } from "@chakra-ui/react";

export const difficulties = [
  { level: "Easy", color: "green" },
  { level: "Medium", color: "yellow" },
  { level: "Hard", color: "red" },
];

interface Props {
  onClose: () => void;
  setDifficulty: (difficulty: string) => void;
}

const DifficultyList = ({ onClose, setDifficulty }: Props) => {
  return (
    <HStack>
      {difficulties.map((difficulty) => (
        <Button
          onClick={() => {
            setDifficulty(difficulty.level);
            onClose();
          }}
          key={difficulty.level}
          fontSize="sm"
          variant="ghost"
          colorScheme={difficulty.color}
        >
          {difficulty.level}
        </Button>
      ))}
    </HStack>
  );
};

export default DifficultyList;
