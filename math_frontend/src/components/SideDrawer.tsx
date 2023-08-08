import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import SubjectList from "./SubjectList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  changeDifficulty: (difficulty: string) => void;
  changeCategory: (category: string) => void;
}

const SideDrawer = ({
  isOpen,
  onClose,
  changeDifficulty,
  changeCategory,
}: Props) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Subjects</DrawerHeader>
        <DrawerBody>
          <SubjectList
            onClose={onClose}
            changeDifficulty={changeDifficulty}
            changeCategory={changeCategory}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
