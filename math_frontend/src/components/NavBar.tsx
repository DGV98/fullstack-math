import { HStack, LinkBox, Text } from "@chakra-ui/react";
import { BiMath, BiMenu } from "react-icons/bi";

interface Props {
  openMenu: () => void;
}

const NavBar = ({ openMenu }: Props) => {
  return (
    <HStack marginBottom={5} justifyContent="space-between">
      <HStack>
        <BiMath size={40} />
        <Text minWidth="200px" fontSize="4xl">
          Math Problem Generator
        </Text>
      </HStack>
      <LinkBox paddingTop={2} onClick={() => openMenu()}>
        <BiMenu size={40} />
      </LinkBox>
    </HStack>
  );
};

export default NavBar;
