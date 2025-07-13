import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import BigCard from "../common/bigCard";
import {
  featuredTravelLocations,
  topTravelDestination,
} from "../../services/getData.service";
import SmallCardPlace from "../common/smallCardPlace";

const PlacesPage = () => {
  return (
    <>
      <Container>
        <Heading size={"8"}>Best places</Heading>
        <Text as={"p"} color="gray" mt={"3"}>
          Explore curated lists of top locations worldwide based on categories
          like travel, food, and adventure.
        </Text>

        <Heading size={"6"} mt={"6"} mb={"4"}>
          Top Travel Destinations
        </Heading>
        <Flex gap={"3"} wrap={"wrap"}>
          {topTravelDestination.map((place, index) => {
            return <BigCard key={index} info={place} />;
          })}
        </Flex>

        <Heading size={"6"} mt={"6"} mb={"4"}>
          Featured Travel Locations
        </Heading>
        <Flex gap={"3"} wrap={"wrap"}>
          {featuredTravelLocations.map((place, index) => {
            return <SmallCardPlace key={index} info={place} />;
          })}
        </Flex>
      </Container>
    </>
  );
};

export default PlacesPage;
