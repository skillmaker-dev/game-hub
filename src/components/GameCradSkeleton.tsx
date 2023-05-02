import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCradSkeleton = () => {
  return (
    <Card borderRadius={5} width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCradSkeleton;
