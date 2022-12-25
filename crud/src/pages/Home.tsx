import { Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EntityItem } from "../components/Entity";
import { useAppDispatch, useAppSelector } from "../store";
import { addEntity, removeEntity, updateEntity } from "../store/entity.slice";

export const Home = () => {
  const { entities } = useAppSelector((state) => state.entities);

  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleCreate = () => {
    const newEntity = {
      id: uuidv4(),
      name,
    };
    dispatch({ ...addEntity(newEntity), broadcast: true });
  };

  const handleRemove = (id: string) => {
    dispatch({ ...removeEntity(id), broadcast: true });
  };

  const handleUpdate = (id: string, name: string) => {
    dispatch({ ...updateEntity({ id, name }), broadcast: true });
  };

  return (
    <VStack>
      <Heading>CRUD on Sync</Heading>
      <HStack>
        <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
        <Button onClick={handleCreate}>Add</Button>
      </HStack>
      {entities.map((entity) => (
        <EntityItem
          key={entity.id}
          entity={entity}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
        />
      ))}
    </VStack>
  );
};
