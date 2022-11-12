import { Button, Checkbox, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

export function CandidatesTable() {
  return (
    <TableContainer w="100%" px="4" maxW='1200px'>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>CANDIDATES</Th>
            <Th>MEETING DAY</Th>
            <Th>OPTIONS</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td w="2"><Checkbox ></Checkbox></Td>
            <Td><Button
              bg='transparent'
              h='4'
              p='0px'
              m='0px'
              size='sm'
              fontWeight='400'
              _hover={{ color: "onesight.500" }}>
              Victor Elisiario
            </Button></Td>
            <Td>Nov, 20 2022</Td>
            <Td>
              <Button
                bg='transparent'
                h='4'
                p='0px'
                m='0px'
                size='sm'
                _hover={{ color: "onesight.500" }}>
                <Icon as={FaRegTrashAlt} />
              </Button>
              <Button
                bg='transparent'
                h='4'
                p='0px'
                m='0px'
                size='sm'
                _hover={{ color: "onesight.500" }}>
                <Icon as={FaRegEdit} />
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}