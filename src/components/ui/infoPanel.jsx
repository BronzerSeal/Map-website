import { CheckboxGroup, Flex, Heading, TextField } from "@radix-ui/themes";
import CustomButton from "../common/customButton/customButtom";
import { useEffect, useState } from "react";
import ZoneComponent from "../common/ZoneComponent";
import getLocation from "../../services/getLocation.service";
import { useTheme } from "next-themes";

const InfoPanel = ({ setCoordinates, setControls }) => {
  const { theme, setTheme } = useTheme();
  const [selectedStyle, setSelectedStyle] = useState(theme);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [inputColor, setInputColor] = useState("");
  const [selectedValues, setSelectedValues] = useState(["1", "2", "3"]);

  const handleInputsChange = (value) => {
    setSelectedValues(value);
    setControls(value);
  };

  function handleClick(styleName) {
    if (selectedStyle === styleName) {
      setSelectedStyle("");
    } else {
      setSelectedStyle(styleName);
    }
  }
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSearch(key) {
    if (key.key === "Enter") {
      setSearch(value);
    }
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
    <Flex direction={"column"} width={"290px"}>
      <Heading>Map</Heading>
      <br />
      <TextField.Root
        radius="large"
        variant="classic"
        placeholder="Search for a location"
        color={inputColor}
        size={"3"}
        value={value}
        onChange={handleChange}
        onKeyDown={handleSearch}
      ></TextField.Root>
      <br />

      <Heading>Map style</Heading>
      <br />
      <Flex width={"250px"} height={"50px"} wrap={"wrap"}>
        <CustomButton
          text={"light"}
          click={() => {
            handleClick("light");
            setTheme("light");
          }}
          isSelected={selectedStyle === "light"}
        />
        <CustomButton
          text={"dark"}
          click={() => {
            handleClick("dark");
            setTheme("dark");
          }}
          isSelected={selectedStyle === "dark"}
        />
        <CustomButton
          text={"system"}
          click={() => {
            handleClick("system");
            setTheme("system");
          }}
          isSelected={selectedStyle === "system"}
        />
      </Flex>
      <br />

      <Heading>Map controls</Heading>
      <br />
      <CheckboxGroup.Root
        size={"3"}
        value={selectedValues}
        onValueChange={handleInputsChange}
        name="example"
        color="indigo"
      >
        <CheckboxGroup.Item mb={"2"} value="1">
          Double click controls
        </CheckboxGroup.Item>
        <CheckboxGroup.Item mb={"2"} value="2">
          Street view control
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="3">Scroll wheel zoom</CheckboxGroup.Item>
      </CheckboxGroup.Root>
      <br />

      <Heading>Map markers</Heading>
      <br />
      <ZoneComponent setCoordinates={setCoordinates} />
    </Flex>
  );
};

export default InfoPanel;
