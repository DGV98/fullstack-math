import {
  Box,
  Button,
  Center,
  HStack,
  IconButton,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { BiMath, BiMenu } from "react-icons/bi";

interface Props {
  openMenu: () => void;
  isLoading: boolean;
}

const NavBar = ({ openMenu, isLoading }: Props) => {
  return (
    <HStack marginBottom={5} justifyContent="space-between">
      <HStack>
        <BiMath size={40} />
        <Text minWidth="200px" fontSize="4xl">
          Math Problem Generator
        </Text>
      </HStack>
      <IconButton
        aria-label="Open Menu"
        isDisabled={isLoading}
        variant="link"
        onClick={() => openMenu()}
        icon={<BiMenu size={40} />}
      />
    </HStack>
  );
};

export default NavBar;
