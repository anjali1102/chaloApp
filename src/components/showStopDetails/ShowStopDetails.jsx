import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Box, Flex, HStack, IconButton, Input } from "@chakra-ui/react";

const ShowStopDetails = () => {
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState();

  return (
    <Flex
      // position="relative"
      flexDirection="column"
      alignItems="center"
      h="20vh"
      w="100vw"
    >
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        // zIndex="999"
      >
        <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Input type="number" placeholder="Bus/Route Id" width="100px" />
          </Box>
          <Box flexGrow={1}>
            <Input type="text" placeholder="Stop Name (Delhi)" />
          </Box>
          <Box flexGrow={1}>
            <Input
              type="number"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => {
                setlatitude(e.target.value);
              }}
            />
          </Box>
          <Box flexGrow={1}>
            <Input
              type="number"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => {
                setlongitude(e.target.value);
              }}
            />
          </Box>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Box flexGrow={0.5}>
            <Input type="number" placeholder="Bus/Route Id" width="100px" />
          </Box>
          <Box flexGrow={1}>
            <Input type="text" placeholder="Stop Name (Punjab)" />
          </Box>
          <Box flexGrow={1}>
            <Input
              type="number"
              placeholder="Latitude "
              onChange={(e) => {
                e.target.value;
              }}
            />
          </Box>
          <Box flexGrow={1}>
            <Input
              type="number"
              placeholder="Longitude"
              onChange={(e) => {
                e.target.value;
              }}
            />
          </Box>
          {/* <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
            /> */}
        </HStack>
        {/* <RouteStatus />
          <Direction />
          <AddStop /> */}
      </Box>
      <Box p={4} borderRadius="lg" m={4}>
        {/* <ShowStopDetails /> */}
      </Box>
    </Flex>
  );
};

export { ShowStopDetails };

// <HStack spacing={2} justifyContent="space-between">
//   <Box flexGrow={1}>
//     <div>
//       <input
//         type="text"
//         placeholder="Stop Name"
//         className="stop_name"
//         value=""
//         onChange=""
//       />
//       <div className="error_message">//error mesage</div>
//     </div>
//     <div>
//       <input
//         type="text"
//         placeholder="Latitude"
//         className="enterLatitude"
//         value=""
//         onChange=""
//       />
//     </div>
//     <div>
//       <input
//         type="text"
//         placeholder="Longitude"
//         className="enterLongitude"
//         value=""
//         onChange=""
//       />
//     </div>
//     <span className="delete-icon" onClick="">
//       <IoMdCloseCircle />
//     </span>
//   </Box>
// </HStack>
