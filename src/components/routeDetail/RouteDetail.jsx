import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FcFullTrash } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useRoute } from "../../context/routeContext";
import "./RouteDetail.css";

const RouteDetail = ({ stopId, route }) => {
  const { removeRouteDetail, updateRouteDetail } = useRoute();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [routeName, setRouteName] = useState(route.route_Name);
  const [routeDirection, setrouteDirection] = useState(route.route_Direction);
  const [routeStatus, setRouteStatus] = useState(route.route_Status);

  const updatedRouteDetail = {
    route_ID: route.route_ID,
    route_Name: routeName,
    route_Direction: routeDirection,
    route_Status: routeStatus,
    stops: route.stops,
  };

  const handleUpdateSubmit = () => {
    updateRouteDetail(route, updatedRouteDetail);
    onClose();
  };



  return (
    <div className="route_detail">
      <Link to={`/route/${route.route_ID}`} className="route_info_wrapper">
        <div className="route_info">
          <p>{route.route_Name}</p>
          <p>{route.route_Direction}</p>
          <p className="route_status">{route.route_Status}</p>
        </div>
      </Link>
      <div className="edit_remove_btns">
        <FcFullTrash
          route={route}
          className="remove_btn"
          onClick={() => {
            removeRouteDetail(route);
          }}
        />
        <GrEdit
          route={route}
          className="edit_btn"
          onClick={onOpen}
          ref={finalRef}
        />
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter Route/ Bus Number</FormLabel>
                <Input
                  ref={initialRef}
                  type="text"
                  placeholder="Enter Route/ Bus Number"
                  value={routeName}
                  onChange={(e) => setRouteName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Route Direction</FormLabel>
                <Select
                  value={routeDirection}
                  onChange={(e) => setrouteDirection(e.target.value)}
                >
                  <option value="UP">UP</option>
                  <option value="DOWN">Down</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Route Status</FormLabel>
                <Select
                  value={routeStatus}
                  onChange={(e) => setRouteStatus(e.target.value)}
                >
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">Inactive</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdateSubmit}>
                UPDATE
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export { RouteDetail };
