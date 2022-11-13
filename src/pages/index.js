import { Flex, Icon, Stack, Button, HStack, Divider } from '@chakra-ui/react'
import { FaRegTrashAlt } from "react-icons/fa";

import { Header } from '../components/Header'
import { Sidebar } from '../components/sidebar'
import { CandidatesTable } from '../components/CandidatesTable';
import { NewCandidateModal } from '../components/NewCandidateModal';

import { useContext } from 'react';
import { CandidatesContext } from '../context/useCandidates';
import { useMultipleDeleteSelection } from '../context/useMultipleDeleteSelection';
import { api } from '../services/axios';

export default function Home() {
  const { setCandidates } = useContext(CandidatesContext);
  const { isChecked, setIsChecked } = useContext(useMultipleDeleteSelection);

  function handleDeleteMultipleCandidates() {
    api.post('/multipleDelete', { isChecked }).then(response => {
      setCandidates(response.data)
    })
    setIsChecked([])
  }

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
                <Button
                  isDisabled={isChecked.length > 0 ? false : true}
                  h="8"
                  bg="white"
                  color="blue.700"
                  fontWeight="400"
                  colorScheme="blue"
                  onClick={handleDeleteMultipleCandidates}
                ><Icon as={FaRegTrashAlt} /></Button>
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
