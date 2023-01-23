import { memo } from "react";
import { Stack, Box, HStack, VStack, Text } from "@chakra-ui/react";
import Logo from "../../atoms/Logo/index";
import style from "./style.module.css";
import { menuItems } from "../CustomNavBar/config";
import { useRenderPropsMenuItems } from "../../hooks/index";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const socialIcons = [
  { name: <FaFacebook />, href: "/" },
  { name: <FaWhatsapp />, href: "/" },
];

const CustomFooter = () => {
  const [handlerRenderMenuItems] = useRenderPropsMenuItems();
  return (
    <Stack as="footer" padding="2rem" gap="1rem" bg="#1D1D1B">
      <HStack justifyContent={"space-between"}>
        <Box filter={"brightness(0) invert(1)"}>
          <Logo />
        </Box>
        <HStack
          color="white"
          className={style.flexWrap}
          display={{ base: "none", lg: "block" }}
        >
          {menuItems.map(handlerRenderMenuItems)}
        </HStack>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <VStack color="white" className={style.flexWrap}>
          {socialIcons.map(({ name, href }, index) => (
            <Link key={`social-index${index}`} href={href}>
              {name}
            </Link>
          ))}
        </VStack>
        <HStack
          color="white"
          className={style.flexWrap}
          alignItems={"flex-start"}
        >
          <VStack>
            <Text>Contactos: +51 949 570 005 / +51 964 200 304</Text>
            <Text>Email: ecosecurit.consulting@gmail.com</Text>
          </VStack>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default memo(CustomFooter);