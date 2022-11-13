import { Button, Center, IconButton } from "@chakra-ui/react";
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
    <div className="view_submit_wrapper">
      <Center>
        <Button
          leftIcon={<BsFillArrowRightCircleFill />}
          colorScheme="teal"
          variant="solid"
          width={60}
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Center>
    </div>
  );
};

export { SubmitForm };
