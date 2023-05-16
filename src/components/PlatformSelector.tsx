import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../stores/gameQueryStore";

const PlatformSelector = () => {
  const { gameQuery, setPlatformId } = useGameQueryStore((s) => ({
    gameQuery: s.gameQuery,
    setPlatformId: s.setPlatformId,
  }));
  const { data, error } = usePlatforms();
  const platform = usePlatform(gameQuery.platformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((plat) => (
          <MenuItem onClick={() => setPlatformId(plat.id)} key={plat.id}>
            {plat.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
