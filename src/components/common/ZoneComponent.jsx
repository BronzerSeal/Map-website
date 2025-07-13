import { DrawingPinFilledIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  Popover,
  Box,
  TextArea,
  Text,
  Card,
} from "@radix-ui/themes";
import { useRef, useState } from "react";
import getLocation from "../../services/getLocation.service";
import { ToastContainer, toast } from "react-toastify";

const ZoneComponent = ({ setCoordinates }) => {
  const ref = useRef();
  const [locations, setLocations] = useState([]);

  async function handleSubmit() {
    try {
      await getLocation(ref.current.value).then((result) => {
        const data = {
          name: result[0].name,
          coord: [+result[0].lat, +result[0].lon],
        };
        setLocations((prevLocations) => [...prevLocations, data]);
      });
    } catch (error) {
      toast("Not found");
    }
  }

  function deleteMarker(index) {
    setLocations((prevLocations) =>
      prevLocations.filter((_, i) => i !== index)
    );
  }

  function handleGoMarker(index) {
    setCoordinates(locations[index].coord);
  }

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      width={"290px"}
      height={"250px"}
      style={{ border: "2px dashed #CFDBE8", borderStyle: "dashed" }}
      position={"relative"}
    >
      <p
        style={{
          position: "absolute",
          top: "4px",
          left: "4px",
          color: "gray",
          fontSize: "15px",
        }}
      >
        Markers: {locations.length} out of 3
      </p>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        {locations.length > 0 ? (
          locations.map((location, index) => {
            return (
              <Box key={location.coord[0]} width="270px" mb={"2"} mt={"2"}>
                <Card onClick={() => handleGoMarker(index)}>
                  <Flex gap="3" align="center" justify={"between"}>
                    <Text as="div" size="2" weight="bold">
                      {location.name}
                    </Text>
                    <TrashIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMarker(index);
                      }}
                    />
                  </Flex>
                </Card>
              </Box>
            );
          })
        ) : (
          <Flex justify={"center"} align={"center"} direction={"column"}>
            <h2>No markers yet</h2>
            <p
              style={{ width: "190px", fontSize: "14px", marginBottom: "20px" }}
            >
              Add markers to your map to highlight specific locations.
            </p>
          </Flex>
        )}

        <Popover.Root>
          <Popover.Trigger>
            <Button disabled={locations.length === 3} variant="soft">
              <DrawingPinFilledIcon width="16" height="16" />
              Add marker
            </Button>
          </Popover.Trigger>
          <Popover.Content width="360px">
            <Flex gap="3">
              <Box flexGrow="1">
                <TextArea
                  ref={ref}
                  placeholder="Location"
                  color="gray"
                  style={{ height: 60 }}
                />
                <Flex gap="3" mt="3" justify="between">
                  <Flex align="center" gap="2" asChild>
                    <Text as="label" size="2"></Text>
                  </Flex>

                  <Popover.Close>
                    <Button onClick={handleSubmit} size="1">
                      search
                    </Button>
                  </Popover.Close>
                </Flex>
              </Box>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </Flex>

      <ToastContainer />
    </Flex>
  );
};

export default ZoneComponent;
