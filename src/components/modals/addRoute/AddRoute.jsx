import {
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalContent,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Select,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import { FaLocationArrow, FaTimes, IoIosAddCircle } from "react-icons/fa";

const AddRoute = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //function that run when forn submitted
  const submitForm = (event) => {
    event.preventDefaut();

    //getting form data
    start = "";
    end: "";

    //run directions function
    runDirection(start, end);
    //reset form
  };

  function runDirection(start, end) {
    // recreating new map layer after removal
    map = L.map("map", {
      layers: MQ.mapLayer(),
      center: [35.791188, -78.636755],
      zoom: 12,
    });

    var dir = MQ.routing.directions();

    dir.route({
      locations: [start, end],
    });

    CustomRouteLayer = MQ.Routing.RouteLayer.extend({
      createStartMarker: (location) => {
        var custom_icon;
        var marker;

        custom_icon = L.icon({
          iconUrl: "img/red.png",
          iconSize: [20, 29],
          iconAnchor: [10, 29],
          popupAnchor: [0, -29],
        });

        marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

        return marker;
      },

      createEndMarker: (location) => {
        var custom_icon;
        var marker;

        custom_icon = L.icon({
          iconUrl: "img/blue.png",
          iconSize: [20, 29],
          iconAnchor: [10, 29],
          popupAnchor: [0, -29],
        });

        marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

        return marker;
      },
    });

    map.addLayer(
      new CustomRouteLayer({
        directions: dir,
        fitBounds: true,
      })
    );
  }

  return (
    <>
      {/* <ButtonGroup size="sm" isAttached variant="outline" onClick={onOpen}>
        <Button ml={4} ref={finalRef}>
          Create Route
        </Button>
        <IconButton aria-label="Add to friends" icon={<IoIosAddCircle />} />
      </ButtonGroup> */}
      <Button onClick={onOpen}>Add Route📍</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        AddRouteRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Add Routes <Input type="text" placeholder="Add Route ID" />
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>1st Route</FormLabel>
              {/* <Input type="text" placeholder="Add Route ID" /> */}
              <Input type="text" placeholder="Add Route Name" />
              <Input type="number" placeholder="latitude" />
              <Input type="number" placeholder="longitude" />
              <FormLabel>2nd Route</FormLabel>
              {/* <Input type="text" placeholder="Add Route ID" /> */}
              <Input type="text" placeholder="Add Route Name" />
              <Input type="number" placeholder="latitude" />
              <Input type="number" placeholder="longitude" />

              {/* <Input ref={initialRef} placeholder="First name" /> */}

              <RadioGroup onChange="" value="" defaultValue="UP">
                <Stack direction="row" spacing={5}>
                  <Radio value="UP" colorScheme="green">
                    UP
                  </Radio>
                  <Radio value="DOWN" colorScheme="green">
                    DOWN
                  </Radio>
                </Stack>
              </RadioGroup>
              <RadioGroup onChange="" value="" defaultValue="ACTIVE">
                <Stack direction="row" spacing={5}>
                  <Radio value="ACTIVE" colorScheme="green">
                    ACTIVE
                  </Radio>
                  <Radio value="INACTIVE" colorScheme="green">
                    INACTIVE
                  </Radio>
                </Stack>
              </RadioGroup>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                onClick={submitForm}
              >
                Get Directions
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { AddRoute };
