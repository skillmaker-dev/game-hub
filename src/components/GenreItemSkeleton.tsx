import { HStack, Skeleton } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <Skeleton width="32px" height="5px" />
    </HStack>
  );
};

export default GenreItemSkeleton;
