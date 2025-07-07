import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, TextField } from "@radix-ui/themes";
import YandexMap from "../../services/YandexMap";
import { useState } from "react";

const MapPanel = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSearch(key) {
    if (key.key === "Enter") {
      setSearch(value);
    }
  }
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
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <YandexMap searchQuery={search} />
      </div>
    </Flex>
  );
};

export default MapPanel;
