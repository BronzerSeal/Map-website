import { Button, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import PriceCard from "../common/priceCard";
import PriceQuestion from "../common/priceQuestion/priceQuestions";
import {
  cardsData,
  pricingQuestionsData,
} from "../../services/getData.service";

const PricingPage = () => {
  return (
    <>
      <Container>
        <Heading as="h1" size={"8"}>
          Choose the plan that's right for you
        </Heading>
        <br />

        <Flex wrap={"wrap"} gap={"3"} mb={"5"}>
          {cardsData.map((cardData, index) => {
            return <PriceCard key={index} card={cardData} />;
          })}
        </Flex>

        <Heading as="h1" size={"6"} mb={"5"}>
          Frequently Asked Questions
        </Heading>
        <Flex direction={"column"} gap={"3"}>
          {pricingQuestionsData.map((question, index) => (
            <PriceQuestion key={index} data={question} />
          ))}
        </Flex>

        <Flex direction={"column"} align={"center"}>
          <Flex direction={"column"} mt={"9"} align={"center"}>
            <Heading align={"center"} as="h1" size={"8"} mb={"1"}>
              Ready to find any point?
            </Heading>
            <Text
              as="p"
              align={"center"}
              size={"3"}
              style={{ paddingLeft: "240px" }}
              mb={"5"}
            >
              start finding interesting places today with our easy-to-use
              platform.
            </Text>
            <Button
              variant="soft"
              color="indigo"
              highContrast
              size={"3"}
              radius="full"
              mb={"3"}
              style={{ width: "130px" }}
            >
              <Link
                color="gray"
                highContrast
                href="/"
                style={{ textDecoration: "none" }}
              >
                Get started
              </Link>
            </Button>
          </Flex>

          <Flex style={{ marginTop: "100px" }} gap={"9"}>
            <Text as="p" color="gray" size={"2"}>
              Terms of Service
            </Text>
            <Text as="p" color="gray" size={"2"}>
              Privacy Policy
            </Text>
            <Text as="p" color="gray" size={"2"} mr={"6"}>
              Contact Us
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default PricingPage;
