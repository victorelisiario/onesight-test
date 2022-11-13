import { Flex, Link, Stack, Icon, Text } from "@chakra-ui/react";
import { RiDashboardLine, } from "react-icons/ri";

export function Sidebar() {
  return (
    <Flex h='100%'
      w='150px'
      pt="8"
    >
      <Stack p='4' spacing='2'>
        <Link display="flex" alignContent="center">
          <Flex align="center" color="onesight.500">
            <Icon as={RiDashboardLine} />
            <Text px="2" >Junior</Text>
          </Flex>
        </Link>
        <Link display="flex" alignContent="center">
          <Flex align="center">
            <Icon as={RiDashboardLine} />
            <Text px="2">Pleno</Text>
          </Flex>
        </Link><Link display="flex" alignContent="center">
          <Flex align="center">
            <Icon as={RiDashboardLine} />
            <Text px="2">Senior</Text>
          </Flex>
        </Link>
      </Stack>
    </Flex >
  )
}