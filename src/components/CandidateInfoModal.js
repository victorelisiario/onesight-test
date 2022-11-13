import { HStack, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Text, Flex, Box, Image, Stack, Divider, Textarea, Tag, TagLabel, TagCloseButton, Grid, SimpleGrid, Wrap, WrapItem, useToast } from "@chakra-ui/react"
import { UpdateCandidateModal } from "./UpdateCandidateModal";

export function CandidateInfoModal({ candidate }) {
  //MODAL FUNCTIONS
  const { isOpen, onOpen, onClose } = useDisclosure();

  // FORMATS STRING DATE TO DISPLAY ON SCREEN
  function formatDate(string) {
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }

  return (
    <>
      <Button
        bg='transparent'
        h='4'
        p='0px'
        m='0px'
        size='sm'
        fontWeight='400'
        _hover={{ color: "onesight.500" }}
        onClick={onOpen}
      >
        {candidate.name}
      </Button>      <Modal size="xl" isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader bg="gray.700">New Candidate Information</ModalHeader>
          <ModalBody bg="gray.700">

            <Text>PERSONAL INFORMATION </Text>
            <Flex flexDir="colunm" mb="4">
              {candidate.image ?
                <Image mr="2" src={candidate.image} boxSize='200px' alt='Image' />
                :
                <Image mr="2" src='https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg' boxSize='200px' alt='Image' />
              }
              <Box w="100%">
                <Stack spacing="2">
                  <Box>
                    <Text mb='1px'>Name:</Text>
                    <Text
                      border="1px"
                      borderRadius={2}
                      px="2"
                      py="1"
                    >{candidate.name}</Text>
                  </Box>

                  <Box>
                    <Text mb='1px'>Email:</Text>
                    <Text
                      border="1px"
                      borderRadius={2}
                      px="2"
                      py="1"
                    >{candidate.email ? candidate.email : 'No email available'}</Text>

                  </Box>

                  <Flex >
                    <Box flex='5' mr="4">
                      <Text mb='1px'>Phone:</Text>
                      <Text
                        border="1px"
                        borderRadius={2}
                        px="2"
                        py="1"
                      >{candidate.phone ? candidate.phone : 'No phone available'}</Text>

                    </Box>
                    <Box flex='1'>
                      <Text mb='1px'>Age:</Text>
                      <Text
                        border="1px"
                        borderRadius={2}
                        px="2"
                        py="1"
                      >{candidate.age ? candidate.age : '??'}</Text>
                    </Box>

                  </Flex>

                </Stack>
              </Box>
            </Flex>

            <Box mb="4">
              <Text>DESCRIPTION</Text>
              <Text
                border="1px"
                borderRadius={2}
                px="2"
                py="1"
              >{candidate.description ? candidate.description : 'No description available'}</Text>
            </Box>

            <Box mb="4">
              <Text>SKILLS</Text>
              {candidate.skills[0] ?
                <Wrap minChildWidth='100px' gap="2">
                  {candidate?.skills?.map((skill, key) =>
                    <WrapItem>
                      <Tag
                        size='md'
                        borderRadius='5'
                        variant='solid'
                        colorScheme='blue'
                      >
                        <TagLabel>{skill}</TagLabel>
                      </Tag>
                    </WrapItem>
                  )}
                </Wrap> :
                <Text>No skills available</Text>
              }
            </Box>
            <Box>
              <Text>MEETING DAY</Text>
              <Text
                border="1px"
                borderRadius={2}
                px="2"
                py="1"
              >{candidate.meeting ? formatDate(candidate.meeting) : 'No meeting scheduled'}</Text>
            </Box>
          </ModalBody>

          <ModalFooter bg="gray.700">
            <HStack>
              <Button variant="outline"
                border="2px"
                bg="transparent"
                color="blue.500"
                borderColor="blue.500"
                onClick={onClose}
              >CLOSE
              </Button>
              <UpdateCandidateModal candidate={candidate} />
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}