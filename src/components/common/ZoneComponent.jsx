import { Button, Flex } from "@radix-ui/themes";

const ZoneComponent = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      width={"290px"}
      height={"250px"}
      style={{ border: "2px dashed #CFDBE8", borderStyle: "dashed" }}
    >
      <h2>No markers yet</h2>
      <p style={{ width: "190px", fontSize: "14px", marginBottom: "20px" }}>
        Add markers to your map to highlight specific locations.
      </p>
      <Button color="gray" highContrast variant="soft">
        Add marker
      </Button>
    </Flex>
  );
};

export default ZoneComponent;
