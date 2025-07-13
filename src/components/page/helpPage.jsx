import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";
import {
  helpQuestionsData,
  smallCardsdata,
} from "../../services/getData.service";
import PriceQuestion from "../common/priceQuestion/priceQuestions";
import SmallCard from "../common/smallCard";

const HelpPage = () => {
  return (
    <Container>
      <Heading size={"8"} weight={"bold"}>
        Help center
      </Heading>
      <Text as="p" color="gray" mt={"2"} mb={"5"} size={"2"}>
        Search our knowledge base, browse FAQs, watch tutorials, or contact
        support
      </Text>
      <TextField.Root
        radius="large"
        variant="soft"
        color="gray"
        size="3"
        placeholder="Search for help"
        style={{ width: "1100px", height: "50px" }}
        mb={"6"}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon color="gray" height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <Heading as="h2" size={"6"} mb={"5"}>
        Frequently Asked Questions
      </Heading>
      <Flex direction={"column"} gap={"3"}>
        {helpQuestionsData.map((question, index) => (
          <PriceQuestion padding="15px" key={index} data={question} />
        ))}
      </Flex>

      <Heading mt={"6"} mb={"4"}>
        Tutorials
      </Heading>
      <Flex gap={"4"} wrap={"wrap"}>
        {smallCardsdata.map((card, index) => {
          return <SmallCard key={index} info={card} />;
        })}
      </Flex>

      <Flex direction={"column"}>
        <Heading mt={"6"} mb={"4"}>
          Contact us
        </Heading>
        <Text as="h2">
          "If you can't find what you're looking for, please contact us. We're
          here to help!"
        </Text>
        <Button
          variant="soft"
          color="indigo"
          highContrast
          size={"3"}
          radius="full"
          mt={"4"}
          style={{ width: "170px" }}
        >
          <Link
            color="gray"
            highContrast
            href="#"
            style={{ textDecoration: "none" }}
          >
            Contact support
          </Link>
        </Button>
      </Flex>
    </Container>
  );
};

export default HelpPage;
