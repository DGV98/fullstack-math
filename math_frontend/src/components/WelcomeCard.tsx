import { Center, Heading, Stack, Text } from "@chakra-ui/react";

const WelcomeCard = () => {
  return (
    <Center>
      <Stack>
        <Heading marginBottom={10}>Welcome!</Heading>
        <Text fontSize="2xl">
          Sharpen Your Mind: Challenge yourself with a vast array of math
          problems from every category imaginable! From simple addition to
          mind-boggling calculus, we've got it all! Our app is designed to help
          you level up your math skills and boost your problem-solving
          abilities.
        </Text>
      </Stack>
    </Center>
  );
};

export default WelcomeCard;
