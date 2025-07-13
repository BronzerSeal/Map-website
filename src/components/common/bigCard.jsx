import { Flex, Text } from "@radix-ui/themes";

const BigCard = ({ info }) => {
  return (
    <Flex direction={"column"} width={"300px"}>
      <img
        style={{ width: "300px", height: "160px", borderRadius: "15px" }}
        src={info.img}
        alt="img"
      />
      <Text as="h2" size={"4"} weight={"bold"} mt={"3"}>
        {info.title}
      </Text>
      <Text as="h3" size={"2"} color="gray" mt={"1"}>
        {info.subTitle}
      </Text>
    </Flex>
  );
};

export default BigCard;
