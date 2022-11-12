import { HStack, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Text, Flex, Box, Image, Stack, Divider, Textarea, Tag, TagLabel, TagCloseButton, Grid, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react"

export function NewCandidateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleCreateNewCandidate() {
    console.log('hi')

    onClose;
  }

  return (
    <>
      <Button h="8" bg="blue.700" colorScheme="blue" fontWeight="400" onClick={onOpen}>+ New Candidate</Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader bg="gray.700">New Candidate Information</ModalHeader>
          <ModalBody bg="gray.700">

            <Text>PERSONAL INFORMATION </Text>
            <Flex flexDir="colunm" align="center" mb="4">
              <Image mr="2" src='https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg' boxSize='200px' alt='Image' />
              <Box w="100%">
                <Stack spacing="2">
                  <Box>
                    <Text mb='1px'>Nome:</Text>
                    <Input placeholder='John Doe' size='sm' />
                  </Box>

                  <Box>
                    <Text mb='1px'>Email:</Text>
                    <Input placeholder='exemple@exemple.com' size='sm' />
                  </Box>

                  <Flex >
                    <Box flex='5' mr="4">
                      <Text mb='1px'>Telefone:</Text>
                      <Input type="number" placeholder='(00) 00000-0000' size='sm' />
                    </Box>
                    <Box flex='1'>
                      <Text mb='1px'>Idade:</Text>
                      <Input placeholder='00' size='sm' />
                    </Box>

                  </Flex>

                  <Box>
                    <Text mb='1px'>Image link</Text>
                    <Input size='sm' />
                  </Box>

                </Stack>
              </Box>
            </Flex>

            <Box mb="4">
              <Text>DESCRIPTION</Text>
              <Textarea placeholder="Insert description here"></Textarea>
            </Box>

            <Box mb="4">
              <Text>SKILLS</Text>
              <Flex mb="2">
                <Input size='sm' mr="2" />
                <Button colorScheme="blue" size="sm"> + ADD</Button>
              </Flex>

              <Wrap minChildWidth='100px' gap="2">
                <WrapItem>
                  <Tag
                    size='md'
                    borderRadius='5'
                    variant='solid'
                    colorScheme='blue'
                  >
                    <TagLabel>React.JS</TagLabel>
                    <TagCloseButton />
                  </Tag>
                </WrapItem>
                <WrapItem>
                  <Tag
                    size='md'
                    borderRadius='5'
                    variant='solid'
                    colorScheme='blue'
                  >
                    <TagLabel>React.JS</TagLabel>
                    <TagCloseButton />
                  </Tag>
                </WrapItem>
              </Wrap>            </Box>








          </ModalBody>

          <ModalFooter bg="gray.700">
            <HStack>
              <Button variant="outline"
                border="2px" bg="transparent" color="blue.500" borderColor="blue.500" onClick={onClose}>CANCEL</Button>
              <Button colorScheme='blue' mr={3} onClick={handleCreateNewCandidate}>
                SAVE
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}