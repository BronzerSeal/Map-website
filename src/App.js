import { Container, Flex } from "@radix-ui/themes";
import NavBar from "./components/ui/navBar";
import InfoPanel from "./components/ui/infoPanel";
import MapPanel from "./components/ui/mapPanel";
import { useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState([55.76, 37.64]);
  const [controls, setControls] = useState(["1", "2", "3"]);

  return (
    <>
      <NavBar />
      <hr />
      <br />
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
}

export default App;
