import { Avatar, Flex, Link, Text } from "@radix-ui/themes";
import logoImgLight from "../../img/logoLight.png";
import logoImgDark from "../../img/logoDark.png";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <>
      <Flex justify={"between"} align={"center"} height={"65px"}>
        <Flex justify={"center"} align={"center"} display={"inline-flex"}>
          <img
            style={{ margin: "0px 20px 0px 15px" }}
            src={
              theme === "light"
                ? logoImgLight
                : theme === "dark"
                ? logoImgDark
                : logoImgLight
            }
            alt="Logo"
          />
          <Text weight={"bold"} size={"4"}>
            Map Site
          </Text>
        </Flex>
        <div>
          <Link
            mr="5"
            weight={"medium"}
            style={{ textDecoration: "none" }}
            color="gray"
            highContrast
            href="/"
          >
            Home
          </Link>
          <Link
            mr="5"
            weight={"medium"}
            style={{ textDecoration: "none" }}
            color="gray"
            highContrast
            href="/places"
          >
            Places
          </Link>
          <Link
            mr="5"
            weight={"medium"}
            style={{ textDecoration: "none" }}
            color="gray"
            highContrast
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            mr="5"
            weight={"medium"}
            style={{ textDecoration: "none" }}
            color="gray"
            highContrast
            href="/help"
          >
            Help
          </Link>
          <Avatar
            radius="full"
            mr={"4"}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2CLnZH4HMYIoalSJvzJLdRI8Vrmz_OjAjrHIBAHDSec-Tv1TioO8V1kInEK_N0SCNk329YdnQHx1lymDUYa4P4uKiQubnfqfPbKt2qyDFzBfL1uU0rMs4UXqbeFliIrz8JdAmRUBti-7nLi7BwJmrKStHFG60MhFeT6_B9qwHEUENUOfs49-CLt_b_DjQi0uZM_9LDjxjWwZsydj0ftXu6O-AGr1CKtOu2Ym_Ipw-z5gJdDiE5dRssB0utWSpqXQlN4hTxhadcQ"
          />
        </div>
      </Flex>
    </>
  );
};

export default NavBar;
