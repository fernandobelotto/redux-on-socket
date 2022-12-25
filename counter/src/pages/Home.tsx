import { Button, Center, Heading, VStack } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../store"
import { decrement, increment } from "../store/counter.slice"

export const Home = () => {

  const counter = useAppSelector(state => state.counter.value)

  const dispatch = useAppDispatch()

  const handleIncrease = () => {
    dispatch({ ...increment(), broadcast: true })
  }
  const handleDecrease = () => {
    dispatch({...decrement(), broadcast: true})
  }

  return (
    <Center h="100vh">
      <VStack>

      <Heading>Counter on Sync</Heading>
      <Heading>{counter}</Heading>
      <Button onClick={handleIncrease}>Increase</Button>
      <Button onClick={handleDecrease}>Decrease</Button>
      </VStack>
    </Center>
  )
}