import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import { Map } from "./components/map/Map";
import { RoutingMachine } from "./components/RoutingMachine/RoutingMachine";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <RoutingMachine /> */}
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="100vh"
        w="100vw"
      >
        <Box position="absolute" left={0} top={0} h="100%" w="100%">
          <Map />
        </Box>
        <Box
          p={4}
          borderRadius="lg"
          m={4}
          bgColor="white"
          shadow="base"
          minW="container.md"
          zIndex="999"
        >
          <HStack spacing={2} justifyContent="space-between">
            <Box flexGrow={1}>
              <Input type="text" placeholder="Origin" />
            </Box>
            <Box flexGrow={1}>
              <Input type="text" placeholder="Destination" />
            </Box>

            <ButtonGroup>
              <Button colorScheme="green">Calculate Route</Button>
              <IconButton aria-label="center back" icon={<FaTimes />} />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent="space-between">
            <Text>Distance: </Text>
            <Text>Duration: </Text>
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
            />
          </HStack>
        </Box>
      </Flex>
    </div>
  );
}

export default App;
