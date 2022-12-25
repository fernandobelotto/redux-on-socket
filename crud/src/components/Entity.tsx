import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";

type Props = {
  entity: any;
  handleRemove: (id: string) => void;
  handleUpdate: (id: string, name: string) => void;
};

export const EntityItem = (props: Props) => {
  const { entity, handleRemove, handleUpdate } = props;

  const [name, setName] = React.useState(entity?.name || "");

  useEffect(() => {
    setName(entity?.name || "");
  }, [entity?.name]);

  return (
    <HStack>
      <Input
        size="md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Button size="md" onClick={() => handleRemove(entity.id)}>
        Remove
      </Button>
      <Button size="md" onClick={() => handleUpdate(entity?.id, name)}>
        Update
      </Button>
    </HStack>
  );
};
