import { Flex, Text } from "@radix-ui/themes";

const SmallCard = ({ info }) => {
  return (
    <Flex direction={"column"} width={"200px"}>
      <img
        style={{ width: "200px", height: "150px", borderRadius: "15px" }}
        src={info.image}
        alt="img"
      />
      <Text as="h2" mt={"3"}>
        {info.title}
      </Text>
    </Flex>
  );
};
export default SmallCard;
