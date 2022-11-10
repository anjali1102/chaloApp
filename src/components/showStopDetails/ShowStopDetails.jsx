import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Box, Flex, HStack, IconButton, Input } from "@chakra-ui/react";
import { GrEdit } from "react-icons/gr";
import { FcFullTrash } from "react-icons/fc";
import { useCreateRoute } from "../../context/createroute-context";

const ShowStopDetails = ({ position, stopId, stop, latitude, longitude }) => {
  const {
    createLocate: { route, errors, stopName },
    dispatch,
  } = useCreateRoute();

  const stopNameHandler = (e) => {
    dispatch({
      type: "ADD_STOP_NAME",
      payload: { stopId, stopName: e.target.value },
    });
  };
  const latitudeHandler = (e) => {
    dispatch({
      type: "ADD_LATITUDE",
      payload: { stopId, latitude: e.target.value },
    });
  };

  const longitudeHandler = (e) => {
    dispatch({ type: "ADD_LONGITUTE", payload: e.target.value });
  };

  return (
    <div className="stop_details">
      <div>
        <Input
          type="text"
          placeholder="Enter Stop Name"
          onChange={stopNameHandler}
          value={stopName}
        />
      </div>
      <div className="lat">
        <Input
          type="text"
          placeholder="latitude"
          className="lat_input"
          value={latitude} //stop.latitide
          onChange={latitudeHandler}
        />
      </div>
      <div className="long">
        <Input
          type="text"
          placeholder="Longitude"
          className="long_input"
          value={longitude} //stop.longitude
          onChange={longitudeHandler}
        />
      </div>
      <IconButton
        className="delete-icon"
        icon={<FcFullTrash />}
        onClick={() => dispatch({ type: "REMOVE_STOP", payload: { stopId } })}
      />
      <IconButton className="edit-icon" icon={<GrEdit />} />
    </div>
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

// <Flex
//   // position="relative"
//   flexDirection="column"
//   alignItems="center"
//   h="20vh"
//   w="100vw"
// >
//   <Box
//     p={4}
//     borderRadius="lg"
//     m={4}
//     bgColor="white"
//     shadow="base"
//     minW="container.md"
//     // zIndex="999"
//   >
//     <HStack spacing={2} justifyContent="space-between">
//       <Box flexGrow={1}>
//         <Input type="number" placeholder="Bus/Route Id" width="100px" />
//       </Box>
//       <Box flexGrow={1}>
//         <Input type="text" placeholder="Stop Name (Delhi)" />
//       </Box>
//       <Box flexGrow={1}>
//         <Input
//           type="number"
//           placeholder="Latitude"
//           onChange={(e) => {
//             e.target.value;
//           }}
//         />
//       </Box>
//       <Box flexGrow={1}>
//         <Input
//           type="number"
//           placeholder="Longitude"
//           onChange={(e) => {
//             e.target.value;
//           }}
//         />
//       </Box>
//     </HStack>
//     <HStack spacing={4} mt={4} justifyContent="space-between">
//       <Box flexGrow={0.5}>
//         <Input type="number" placeholder="Bus/Route Id" width="100px" />
//       </Box>
//       <Box flexGrow={1}>
//         <Input type="text" placeholder="Stop Name (Punjab)" />
//       </Box>
//       <Box flexGrow={1}>
//         <Input
//           type="number"
//           placeholder="Latitude "
//           onChange={(e) => {
//             e.target.value;
//           }}
//         />
//       </Box>
//       <Box flexGrow={1}>
//         <Input
//           type="number"
//           placeholder="Longitude"
//           onChange={(e) => {
//             e.target.value;
//           }}
//         />
//       </Box>
//       {/* <IconButton
//           aria-label="center back"
//           icon={<FaLocationArrow />}
//           isRound
//         /> */}
//     </HStack>
//     {/* <RouteStatus />
//       <Direction />
//       <AddStop /> */}
//   </Box>
//   <Box p={4} borderRadius="lg" m={4}>
//     {/* <ShowStopDetails /> */}
//   </Box>
// </Flex>
