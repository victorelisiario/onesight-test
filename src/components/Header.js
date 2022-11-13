import { Flex, Image, HStack, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100vw"
      bgOpacity="90%"
      py='4'
      pb='6'
      justify='center'
    >
      <Flex maxW='1200px' w="100vw" justify='space-around' px="2">
        <Image src='logo.png' alt='Onesight' maxH="32px" />

        <HStack spacing='4'>
          <Link >Home</Link>
          <Link color="onesight.500" textDecoration='underline' fontWeight='500' >Candidates</Link>
        </HStack>

      </Flex>
    </Flex >
  )
}