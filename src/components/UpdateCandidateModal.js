import { HStack, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Text, Flex, Box, Image, Stack, Divider, Textarea, Tag, TagLabel, TagCloseButton, Grid, SimpleGrid, Wrap, WrapItem, useToast } from "@chakra-ui/react"

import { useContext, useState } from "react";
import { CandidatesContext } from "../context/useCandidates";

import { api } from "../services/axios";

export function UpdateCandidateModal({ candidate }) {
  const { setCandidates } = useContext(CandidatesContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  console.log(candidate.phone)

  const [name, setName] = useState(candidate.name);
  const [email, setEmail] = useState(candidate.email);
  const [phone, setPhone] = useState(candidate.phone);
  const [age, setAge] = useState(candidate.age);
  const [image, setImage] = useState(candidate.image);
  const [description, setDescription] = useState(candidate.description);
  const [skills, setSkills] = useState(candidate.skills);
  const [newSkill, setNewSkill] = useState('');
  const [meeting, setMeeting] = useState(candidate.meeting);

  async function handleUpdateCandidate() {
    const newCandidate = {
      uuid: candidate.uuid,
      name,
      email,
      phone,
      age,
      image,
      description,
      skills,
      meeting
    }

    await api.post('/update', newCandidate).then(response => {
      toast({
        title: 'New candidate created',
        description: `${name} profile created`,
        status: 'info',
        duration: 2000,
      })

      setCandidates(response.data);
      onClose();
    })

  }

  function handleAddNewSkill() {
    setSkills([...skills, newSkill])
    setNewSkill('')
  }

  function handleRemoveSkill(key) {
    const newSkillList = [...skills];
    newSkillList.splice(key, 1);
    setSkills(newSkillList)
  }

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>UPDATE</Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader bg="gray.700">Update Candidate Information</ModalHeader>
          <ModalBody bg="gray.700">

            <Text>PERSONAL INFORMATION </Text>
            <Flex flexDir="colunm" align="center" mb="4">
              <Image mr="2" src='https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg' boxSize='200px' alt='Image' />
              <Box w="100%">
                <Stack spacing="2">
                  <Box>
                    <Text mb='1px'>Name:</Text>
                    <Input onChange={() => setName(event.target.value)}
                      value={name} placeholder='John Doe' size='sm' />
                  </Box>

                  <Box>
                    <Text mb='1px'>Email:</Text>
                    <Input onChange={() => setEmail(event.target.value)}
                      value={email} placeholder='exemple@exemple.com' size='sm' />
                  </Box>

                  <Flex >
                    <Box flex='5' mr="4">
                      <Text mb='1px'>Phone:</Text>
                      <Input onChange={() => setPhone(event.target.value)}
                        value={phone} placeholder='(00) 00000-0000' size='sm' />
                    </Box>
                    <Box flex='1'>
                      <Text mb='1px'>Age:</Text>
                      <Input type="number" onChange={() => setAge(event.target.value)}
                        value={age} placeholder='00' size='sm' />
                    </Box>

                  </Flex>

                  <Box>
                    <Text mb='1px'>Image link</Text>
                    <Input onChange={() => setImage(event.target.value)}
                      value={image} size='sm' />
                  </Box>

                </Stack>
              </Box>
            </Flex>

            <Box mb="4">
              <Text>DESCRIPTION</Text>
              <Textarea onChange={() => setDescription(event.target.value)}
                value={description} placeholder="Insert description here"></Textarea>
            </Box>

            <Box mb="4">
              <Text>SKILLS</Text>
              <Flex mb="2">
                <Input onChange={() => setNewSkill(event.target.value)}
                  value={newSkill} size='sm' mr="2" />
                <Button colorScheme="blue" size="sm" onClick={handleAddNewSkill}> + ADD</Button>
              </Flex>

              <Wrap minChildWidth='100px' gap="2">
                {skills?.map((skill, key) =>
                  <WrapItem>
                    <Tag
                      size='md'
                      borderRadius='5'
                      variant='solid'
                      colorScheme='blue'
                    >
                      <TagLabel>{skill}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveSkill(key)} />
                    </Tag>
                  </WrapItem>
                )}
              </Wrap>
            </Box>
            <Box>
              <Text>MEETING DAY</Text>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                onChange={() => setMeeting(event.target.value)}
                value={meeting}
              />
            </Box>
          </ModalBody>

          <ModalFooter bg="gray.700">
            <HStack>
              <Button variant="outline"
                border="2px" bg="transparent" color="blue.500" borderColor="blue.500" onClick={onClose}>CANCEL</Button>
              <Button colorScheme='blue' mr={3} onClick={handleUpdateCandidate}>
                SAVE
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}