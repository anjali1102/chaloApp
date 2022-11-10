import { Button, IconButton } from "@chakra-ui/react";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useCreateRoute } from "../../context/createroute-context";
import { useRoute } from "../../context/routeContext";

const SubmitForm = ({ edit }) => {
  const {
    createLocate: { route },
    dispatch,
  } = useCreateRoute();

  const { routes, addRoute } = useRoute();

  const submitHandler = () => {
    if (!edit) {
      addRoute(route);
    }
  };
  return (
    <div>
      <Button
        leftIcon={<BsFillArrowRightCircleFill />}
        colorScheme="teal"
        variant="solid"
        width={60}
        onClick={submitHandler}
      >
        Submit{" "}
      </Button>
    </div>
  );
};

export { SubmitForm };
