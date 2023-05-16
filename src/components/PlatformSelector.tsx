import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPlatfrom: (platfrom: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatfrom, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((plat) => (
          <MenuItem onClick={() => onSelectPlatfrom(plat)} key={plat.id}>
            {plat.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
