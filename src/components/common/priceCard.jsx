import { CheckIcon } from "@radix-ui/react-icons";
import { Button, Flex, Strong, Text } from "@radix-ui/themes";

const PriceCard = ({ card }) => {
  return (
    <div
      key={card.mainTitle}
      style={{
        width: "300px",
        height: "380px",
        border: "1px solid #DEE0E3",
        borderRadius: "15px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text weight={"bold"} size={"5"} mb={"2"}>
        {card.tarif}
      </Text>
      <Text size={"5"} weight={"bold"} mb={"4"}>
        <Strong style={{ fontSize: "40px" }}>{card.mainTitle}</Strong>{" "}
        {card.dopTitle}
      </Text>

      <Button
        variant="soft"
        color="gray"
        highContrast
        size={"3"}
        radius="full"
        mb={"3"}
      >
        Get started
      </Button>

      {card.advantages.map((info, index) => {
        return (
          <Flex key={index} mb={"2"}>
            <CheckIcon style={{ width: "22px", height: "22px" }} />
            <Text ml={"3"} as="p">
              {info}
            </Text>
          </Flex>
        );
      })}
    </div>
  );
};

export default PriceCard;
