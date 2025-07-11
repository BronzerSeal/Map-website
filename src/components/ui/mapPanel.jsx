import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, TextField } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import CustomMap from "../common/customMap/customMap";
import getLocation from "../../services/getLocation.service";

const MapPanel = ({ coordinates, setCoordinates, controls }) => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [inputColor, setInputColor] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSearch(key) {
    if (key.key === "Enter") {
      setSearch(value);
    }
  }
  function removeCoordinates() {
    setCoordinates(null);
  }

  useEffect(() => {
    if (search) {
      getLocation(search).then((result) => {
        if (result.length > 0) {
          const { lat, lon } = result[0];
          setCoordinates([+lat, +lon]);
          setValue("");
          setInputColor("");
        } else {
          setValue("Not found");
          setInputColor("red");
        }
      });
    }
  }, [search]);

  return (
    <Flex direction={"column"} justify={"center"}>
      <div style={{ width: "900px", position: "relative" }}>
        <TextField.Root
          radius="large"
          variant="classic"
          size="3"
          value={value}
          onChange={handleChange}
          onKeyDown={handleSearch}
          color={inputColor}
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            zIndex: "999",
          }}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon color="gray" height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <CustomMap
          coordinates={coordinates}
          remove={removeCoordinates}
          controls={controls}
        />
      </div>
    </Flex>
  );
};

export default MapPanel;
