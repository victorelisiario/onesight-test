import { Button, Checkbox, Icon, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { useEffect, useContext, useState } from "react";
import { CandidatesContext } from "../context/useCandidates";
import { api } from "../services/axios";
import { CandidateInfoModal } from "./CandidateInfoModal";
import { useMultipleDeleteSelection } from "../context/useMultipleDeleteSelection";

export function CandidatesTable() {
  const { candidates, setCandidates } = useContext(CandidatesContext);
  const { isChecked, setIsChecked } = useContext(useMultipleDeleteSelection);

  console.log(isChecked)

  useEffect(() => {
    api.get('/read').then(response => {
      setCandidates(response.data)
    })
  }, [])

  function handleMultipleDeleteMark(uuid) {
    const checkedIndex = isChecked.findIndex(checked => checked === uuid);

    if (checkedIndex === -1) {
      setIsChecked([...isChecked, uuid])
    } else {
      const newIsCheckedList = [...isChecked]
      newIsCheckedList.splice(checkedIndex, 1);
      setIsChecked(newIsCheckedList)
    }
  }

  function formatDate(string) {
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }

  function handleDeleteCandidate(candidadeUUID) {
    api.post('/delete', { uuid: candidadeUUID }).then(response => {
      setCandidates(response.data)
    })
  }

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
          {
            candidates?.map((candidate, key) => {
              return (
                <Tr key={candidate.uuid}>
                  <Td w="2"><Checkbox onChange={() => handleMultipleDeleteMark(candidate.uuid)}  >
                  </Checkbox></Td>
                  <Td><CandidateInfoModal candidate={candidate} /></Td>
                  <Td><Text type="datetime-local">
                    {candidate.meeting ? formatDate(candidate.meeting) : ''}
                  </Text></Td>
                  <Td>
                    <Button
                      bg='transparent'
                      h='4'
                      p='0px'
                      m='0px'
                      size='sm'
                      _hover={{ color: "onesight.500" }}
                      onClick={() => handleDeleteCandidate(candidate.uuid)}
                    >
                      <Icon as={FaRegTrashAlt} />
                    </Button>
                  </Td>
                </Tr>)
            }
            )}
        </Tbody>
      </Table>
    </TableContainer >
  )
}