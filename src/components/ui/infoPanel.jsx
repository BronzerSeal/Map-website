import { CheckboxGroup, Flex, Heading, TextField } from "@radix-ui/themes";
import CustomButton from "../common/customButton/customButtom";
import { useState } from "react";
import ZoneComponent from "../common/ZoneComponent";

const InfoPanel = () => {
  const [selectedStyle, setSelectedStyle] = useState("standart");

  function handleClick(styleName) {
    if (selectedStyle === styleName) {
      setSelectedStyle("");
    } else {
      setSelectedStyle(styleName);
    }
  }

  return (
    <Flex direction={"column"} width={"290px"}>
      <Heading>Map</Heading>
      <br />
      <TextField.Root
        radius="large"
        variant="classic"
        placeholder="Search for a location"
        size={"3"}
      ></TextField.Root>
      <br />

      <Heading>Map style</Heading>
      <br />
      <Flex width={"250px"} height={"120px"} wrap={"wrap"}>
        <CustomButton
          text={"standart"}
          click={() => handleClick("standart")}
          isSelected={selectedStyle === "standart"}
        />
        <CustomButton
          text={"Satellite"}
          click={() => handleClick("Satellite")}
          isSelected={selectedStyle === "Satellite"}
        />
        <CustomButton
          text={"Terrain"}
          click={() => handleClick("Terrain")}
          isSelected={selectedStyle === "Terrain"}
        />
        <CustomButton
          text={"Hybrid"}
          click={() => handleClick("Hybrid")}
          isSelected={selectedStyle === "Hybrid"}
        />
      </Flex>
      <br />

      <Heading>Map controls</Heading>
      <br />
      <CheckboxGroup.Root
        size={"3"}
        defaultValue={["1", "2", "3"]}
        name="example"
        color="indigo"
      >
        <CheckboxGroup.Item mb={"2"} value="1">
          Zoom controls
        </CheckboxGroup.Item>
        <CheckboxGroup.Item mb={"2"} value="2">
          Street view control
        </CheckboxGroup.Item>
        <CheckboxGroup.Item value="3">Fullscreen control</CheckboxGroup.Item>
      </CheckboxGroup.Root>
      <br />

      <Heading>Map markers</Heading>
      <br />
      <ZoneComponent />
    </Flex>
  );
};

export default InfoPanel;
