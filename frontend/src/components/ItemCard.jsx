import React, { useState } from 'react';
import { Box, Button, Flex, Image, Input, Spinner, Text, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { IoCheckmark } from 'react-icons/io5';
import { HiX } from 'react-icons/hi';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateOrder } from '../redux/orderReducer/action';

const ItemCard = ({ item, lastItem, index }) => {
  const { orders } = useSelector((store) => {
    return {
      orders: store.orders
    }
  }, shallowEqual)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const [Status, setStatus] = useState(item.Status)
  const [loadingMissing, setLoadingMissing] = useState(false)
  const [checkLoading,setCheckLoading]=useState(false)
  const [loadingMissingUrgent, setLoadingMissingUrgent] = useState(false)
  const [editClick, setEditClick] = useState(false)
  const [Price, setPrice] = useState(item.Price)
  const [Quantity,setQuantity]=useState(item.Quantity)
  const [sendLoading,setSendLoading]=useState(false)
  const handleApprove = () => {
    item.Status = "Approved"
    orders[0].items.forEach((el) => {
      if (el.id == item.id) {
        el = item;
      }
    })
    const data = {
      id: orders[0].id,
      order: orders[0]
    }
    setCheckLoading(true)
    dispatch(updateOrder(data)).then((res)=>{
      setCheckLoading(false)
    })
  }
  const handleCut = () => {
    setEditClick(false)
    onOpen()
  }
  const handleMissing = () => {
    setLoadingMissing(true)
    item.Status = "Missing"
    orders[0].items.forEach((el) => {
      if (el.id == item.id) {
        el = item;
      }
    })
    const data = {
      id: orders[0].id,
      order: orders[0]
    }
    dispatch(updateOrder(data)).then((res) => {
      setLoadingMissing(false)
      onClose()
    })
  }
  const handleUrgent = () => {
    setLoadingMissingUrgent(true)
    item.Status = "Missing-urgent"
    orders[0].items.forEach((el) => {
      if (el.id == item.id) {
        el = item;
      }
    })
    const data = {
      id: orders[0].id,
      order: orders[0]
    }
    dispatch(updateOrder(data)).then((res) => {
      setLoadingMissingUrgent(false)
      onClose()
    })
  }
  const handleSend=()=>{
    if(Price!==item.Price && Quantity!==item.Quantity){
      item.Status="Quantity and Price Updated"
      item.OldPrice=item.Price;
      item.OldQuantity=item.Quantity;
      item.Quantity=Quantity;
      item.Price=Price
    }else if(Price!==item.Price){
      item.Status="Price Updated"
      item.OldPrice=item.Price;
      item.Price=Price;
    }else if(Quantity!==item.Quantity){
      item.Status="Quantity Updated"
      item.OldQuantity=item.Quantity;
      item.Quantity=Quantity
    }else{
      item.Status=Status
    }
    orders[0].items.forEach((el) => {
      if (el.id == item.id) {
        el = item;
      }
    })
    const data = {
      id: orders[0].id,
      order: orders[0]
    }
    setSendLoading(true)
    dispatch(updateOrder(data)).then((res) => {
      setSendLoading(false)
      onClose()
    })
  }
  return (
    <div>
      <Flex className='heading' borderBottom={lastItem == index ? "" : "2px solid #b4b4b4"} p={"10px"} >
        <Flex flex={2.5} alignItems={"center"}>
          <Image src={item.image} w="60px" />
          <Text color={"#575757"}>
            {item.name}
          </Text>
        </Flex>
        <Flex flex={1} alignItems={"center"}>
          <Text color={"#575757"}>
            {item.Brand}
          </Text>
        </Flex>
        <Flex flex={1} flexDir={"column"} justifyContent={"center"}>
          <Text color={"#575757"}>
            {item.Price}/6*1LB
          </Text>
          <Text fontSize={"14px"} color={"#7d7d7d"} textDecor={"line-through"} display={item.OldPrice?"block":"none"}>
            {item.Price}
          </Text>
        </Flex>
        <Flex flex={1} flexDir={"column"} justifyContent={"center"}>
          <Text color={"#575757"}>
            <b>{item.Quantity}</b>x6*1LB
          </Text>
          <Text fontSize={"14px"} color={"#7d7d7d"} textDecor={"line-through"} display={item.OldQuantity?"block":"none"}>
            {item.OldQuantity}
          </Text>
        </Flex>
        <Flex flex={1} flexDir={"column"} justifyContent={"center"}>
          <Text color={"#575757"}>
            ${(item.Price * item.Quantity).toFixed(2)}
          </Text>
          <Text fontSize={"14px"} color={"#7d7d7d"} textDecor={"line-through"} display={item.OldQuantity?"block":"none"}>
            {(item.Price * item.OldQuantity).toFixed(2)}
          </Text>
          <Text fontSize={"14px"} color={"#7d7d7d"} textDecor={"line-through"} display={item.OldPrice?"block":"none"}>
            {(item.OldPrice * item.Quantity).toFixed(2)}
          </Text>
          {/* <Text fontSize={"14px"} color={"#7d7d7d"} textDecor={"line-through"} display={(item.OldPrice && item.OldPrice)?"block":"none"}>
            {(item.OldPrice * item.OldQuantity).toFixed(2)}
          </Text> */}
        </Flex>
        <Flex flex={1.3} pl={"20px"} alignItems={"center"} bgColor={"#f3f3f3"} my={"-10px"} ml={"-10px"}>
          <Text color={"#ffffff"} bgColor={item.Status ? (item.Status.includes("Missing-urgent") ? "red" : item.Status.includes("Missing") ? "#ff5b5b" : item.Status.includes("Approved") ? "green" : "green"):""} py={"4px"}
            borderRadius={"full"} px={"10px"}
          >
            {item.Status}
          </Text>
        </Flex>
        <Flex flex={0.7} alignItems={"center"} gap={"5px"} cursor={'pointer'} bgColor={"#f3f3f3"} my={"-10px"} mr={"-10px"}>
          {
            checkLoading?
            <Spinner size={"sm"}/>
            :
            <IoCheckmark size={"22px"} color={item.Status == "Approved" ? "green" : "grey"} onClick={handleApprove} fontWeight={"bold"} />
          }
          <HiX size={"25px"} color={item.Status.includes("Missing-urgent") ? "red" : item.Status.includes("Missing") ? "#ff5b5b" : "grey"} fontWeight={"bold"} onClick={handleCut} />
          <Text onClick={() => {
            setEditClick(true)
            onOpen()
          }}>Edit</Text>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size={editClick?"xl":"md"}>
        {
          editClick
            ?
            <div>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontWeight={700}>{item.name.split(" ")[0]} {item.name.split(" ")[1]} {item.name.split(" ")[2]} {item.name.split(" ")[3]}...</ModalHeader>
                <ModalCloseButton />
                <ModalBody mt={'-25px'}>
                  <Text fontWeight={500} color={"#b5b5b5"}>{item.Brand}</Text>
                  <Flex gap={"10px"} mt={"10px"} w={"100%"}>
                    <Image src={item.image} w={"100px"} />
                    <Box w={"100%"} pr={"20px"}>
                      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
                        <Text>{"Price {$}"}</Text>
                        <Flex gap={"5px"}>
                          <Input value={Price} onChange={(e) => setPrice(e.target.value)} w={"100px"} size={"sm"} borderRadius={"10px"} />
                          <Text>/6*1LB</Text>
                        </Flex>
                      </Flex>
                      <br />
                      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
                        <Text>Quantity</Text>
                        <Flex gap={"5px"} alignItems={"center"}>
                          <Button size={"xs"} fontWeight={800} borderRadius={"full"} colorScheme='green' onClick={()=>{
                            setQuantity((pre)=>pre-1)
                          }} isDisabled={Quantity==0}
                          >-</Button>
                          <Input value={Quantity} w={"100px"} size={"sm"} borderRadius={"10px"} isDisabled />
                          <Button size={"xs"} fontWeight={800} borderRadius={"full"} colorScheme='green' onClick={()=>{
                            setQuantity((pre)=>pre+1)
                          }}>+</Button>
                        </Flex>
                      </Flex>
                      <br />
                      <Flex alignItems={"center"} justifyContent={"space-between"} w={"100%"}>
                        <Text>{"Total"}</Text>
                        <Text>{(Price*Quantity).toFixed(2)}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                  <br />
                  <Flex>
                    <Text fontSize={"18px"} fontWeight={600}>Choose Reason <span
                    style={{fontSize:"14px",color:"#9f9f9fff"}}>(optional)</span></Text>
                  </Flex>
                  <Flex gap={"10px"} mt={"10px"}>
                    <Button variant={'outline'} size={"sm"} borderRadius={'full'}
                    fontWeight={400} bgColor={Status.includes("Missing")?"#abffa9":""}
                    onClick={()=>setStatus('Missing')}
                    >Missing Product</Button>
                    <Button variant={'outline'} size={"sm"} borderRadius={'full'}
                    bgColor={Status.includes("Quantity is not the same")?"#abffa9":""}
                    fontWeight={400} onClick={()=>setStatus('Quantity is not the same')}
                    >Quatity is not the same</Button>
                    <Button variant={'outline'} size={"sm"} borderRadius={'full'}
                    bgColor={Status.includes("Price is not the same")?"#abffa9":""}
                    fontWeight={400} onClick={()=>setStatus('Price is not the same')}
                    >Price is not the same</Button>
                    <Button variant={'outline'} size={"sm"} borderRadius={'full'}
                    bgColor={Status.includes("Other")?"#abffa9":""}
                    fontWeight={400} onClick={()=>setStatus('Other')}>Other</Button>
                  </Flex>
                </ModalBody>

                <ModalFooter>
                  <Button variant='ghost' colorScheme='green' borderRadius={"full"} onClick={onClose} size={'sm'}>Cancel</Button>
                  <Button colorScheme='green' borderRadius={"full"} onClick={handleSend} px={"20px"} size={"sm"} isLoading={sendLoading}>Send</Button>
                </ModalFooter>
              </ModalContent>
            </div>
            :
            <div>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontWeight={700}>Missing product</ModalHeader>
                <ModalCloseButton />
                <ModalBody display={'flex'}>
                  Is '{item.name.split(" ")[0]} {item.name.split(" ")[1]} {item.name.split(" ")[2]} {item.name.split(" ")[3]}...'?urgent
                </ModalBody>

                <ModalFooter>
                  <Button variant='ghost' onClick={handleMissing} isLoading={loadingMissing}>No</Button>
                  <Button variant='ghost' onClick={handleUrgent} isLoading={loadingMissingUrgent}>Yes</Button>
                </ModalFooter>
              </ModalContent>
            </div>

        }
      </Modal>
    </div>
  );
}

export default ItemCard;
