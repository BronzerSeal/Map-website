import InfoPanel from "../ui/infoPanel";
import MapPanel from "../ui/mapPanel";
import { Container, Flex } from "@radix-ui/themes";
import { useState } from "react";

const MainPage = () => {
  const [coordinates, setCoordinates] = useState([55.76, 37.64]);
  const [controls, setControls] = useState(["1", "2", "3"]);
  return (
    <>
      <Container>
        <Flex width={"1220px"} justify={"between"}>
          <InfoPanel
            setCoordinates={setCoordinates}
            setControls={setControls}
          />
          <MapPanel
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            controls={controls}
          />
        </Flex>
      </Container>
    </>
  );
};

export default MainPage;
