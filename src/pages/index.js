import { Flex, Icon, Stack, Button, HStack, Divider } from '@chakra-ui/react'
import { FaRegTrashAlt } from "react-icons/fa";

import { Header } from '../components/Header'
import { Sidebar } from '../components/sidebar'
import { CandidatesTable } from '../components/CandidatesTable';
import { NewCandidateModal } from '../components/NewCandidateModal';


export default function Home() {
  return (
    <>
      <Header />
      <Flex direction="coloumn" justify="center" >
        <Sidebar />
        <Flex
          justify='center'
          w="100%"
          maxW='1200px'
        >
          <Divider orientation='vertical' color="red" h="90vh" />
          <Stack spacing='2' w="100%" px="4" maxW='1200px'>
            <Flex w="100%" px="4" maxW='1200px' justify="start">
              <HStack spacing="2" >
                <Button h="8" bg="white" color="blue.700" fontWeight="400" colorScheme="blue"><Icon as={FaRegTrashAlt} /></Button>
                <NewCandidateModal />
              </HStack>
            </Flex>

            <CandidatesTable />
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}
