import { Container, Flex } from "@radix-ui/themes";
import NavBar from "./components/ui/navBar";
import InfoPanel from "./components/ui/infoPanel";
import MapPanel from "./components/ui/mapPanel";

function App() {
  return (
    <>
      <NavBar />
      <hr />
      <br />
      <Container>
        <Flex width={"1220px"} justify={"between"}>
          <InfoPanel />
          <MapPanel />
        </Flex>
      </Container>
    </>
  );
}

export default App;
