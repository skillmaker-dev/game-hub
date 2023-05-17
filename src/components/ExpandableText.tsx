import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, 300);

  return (
    <Text>
      {!expanded ? summary + "..." : children}
      <Button
        size="xs"
        fontWeight={"bold"}
        colorScheme="yellow"
        marginX={2}
        onClick={() => setExpanded((expanded) => !expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
