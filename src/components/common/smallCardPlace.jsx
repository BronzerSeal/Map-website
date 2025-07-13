import { Flex, Text } from "@radix-ui/themes";

const SmallCardPlace = ({ info }) => {
  return (
    <Flex direction={"column"} width={"200px"}>
      <img
        style={{ width: "200px", height: "130px", borderRadius: "15px" }}
        src={info.img}
        alt="img"
      />
      <Text as="h2" mt={"3"} weight={"bold"}>
        {info.title}
      </Text>
      <Text as="h2" color="gray">
        {info.subTitle}
      </Text>
    </Flex>
  );
};

export default SmallCardPlace;
