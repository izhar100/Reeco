import { Box, Button, Flex, Grid, GridItem, Heading, IconButton, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { SlArrowRight } from "react-icons/sl";
import { GiFruitBowl } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { SlPrinter } from "react-icons/sl";
import ItemCard from '../components/ItemCard';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/orderReducer/action';

const Order = () => {
    const {orders}=useSelector((store)=>{
        console.log(store)
        return {
            orders:store.orders
        }
    })
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getOrders)
    },[])
    const arr = new Array(8).fill(1)
    return (
        <>
            <Box pt={"20px"} boxShadow={"md"} pb={"10px"}>
                <Box className='heading' w={"90%"} m={"auto"}>
                    <Flex alignItems={"center"}>
                        <Text>Order</Text>
                        <SlArrowRight size={"12px"} />
                        <Text borderBottom={"1px solid #9c9c9c"}>Order 34895ABC</Text>
                    </Flex>
                    <br />
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <Heading fontSize={"24px"}>Order 34895ABC</Heading>
                        <Flex gap={"20px"}>
                            <Button variant={"outline"} colorScheme='green' borderRadius={"full"} px={"20px"} size={"sm"}>Back</Button>
                            <Button colorScheme='green' borderRadius={"full"} px={"20px"} size={"sm"}>Approve Order</Button>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <br />
            <Flex w={"90%"} m={"auto"} py={"20px"} px={"5px"} borderRadius={"10px"} border={"2px solid #c2c2c2"}>
                <Box flex={1} px={"30px"} borderRight={"2px solid #bdbdbd"}>
                    <Text fontSize={"16px"} fontWeight={500} color={"#5c5c5c"}>Supplier</Text>
                    <Text fontSize={"18px"} fontWeight={700}>East cost fruits & vegetables</Text>
                </Box>
                <Box flex={1} px={"30px"} borderRight={"2px solid #bdbdbd"}>
                    <Text fontSize={"16px"} fontWeight={500} color={"#5c5c5c"}>Shipping date</Text>
                    <Text fontSize={"18px"} fontWeight={700}>Thu,Feb 10</Text>
                </Box>
                <Box flex={1} px={"30px"} borderRight={"2px solid #bdbdbd"}>
                    <Text fontSize={"16px"} fontWeight={500} color={"#5c5c5c"}>Total</Text>
                    <Text fontSize={"18px"} fontWeight={700}>$ 15,028.3</Text>
                </Box>
                <Box flex={1} px={"30px"} borderRight={"2px solid #bdbdbd"}>
                    <Text fontSize={"16px"} fontWeight={500} color={"#5c5c5c"}>Category</Text>
                    <Grid gridTemplateColumns={"repeat(4,1fr)"} gap={"15px"}>
                        {
                            arr.map((el, i) => (
                                <GridItem key={i}>
                                    <GiFruitBowl size={"18px"} color='#343434' />
                                </GridItem>
                            ))
                        }
                    </Grid>
                </Box>
                <Box flex={1} px={"30px"} borderRight={"2px solid #bdbdbd"}>
                    <Text fontSize={"16px"} fontWeight={500} color={"#5c5c5c"}>Department</Text>
                    <Text fontSize={"18px"} fontWeight={700}>300-444-678</Text>
                </Box>
                <Box flex={1} px={"30px"}>
                    <Text fontSize={"16px"} fontWeight={500} color={"#5c5c5c"}>status</Text>
                    <Text fontSize={"18px"} fontWeight={700}>Awaiting your approval</Text>
                </Box>
            </Flex>
            <br />
            <Box className='mainscreen' w={"90%"} m={"auto"} px={"30px"} py={"25px"}
            border={'2px solid #bcbcbc'} borderRadius={"10px"}
            >
                <Flex justifyContent={"space-between"}>
                    <InputGroup w={"40%"}>
                        <Input placeholder="Search..." borderRadius={"full"}
                          border={"1px solid #b4b4b4"}
                        />
                        <InputRightElement>
                            <IconButton
                                variant="ghost"
                                aria-label="Search"
                                icon={<IoIosSearch size={"25px"} color='gray' />}
                            />
                        </InputRightElement>
                    </InputGroup>
                    <Flex alignItems={"center"} gap={"20px"}>
                        <Button borderRadius={'full'} variant={"outline"} colorScheme='green' size={"sm"}>Add item</Button>
                        <SlPrinter size={"22px"} cursor={"pointer"} color='#008138'/>
                    </Flex>
                </Flex>
                <br />
                <Flex className='heading' border={"1px solid #bababa"} p={"10px"} borderTopRadius={"10px"}>
                   <Box flex={2.5}>
                     <Text textAlign={"center"} color={"#575757"}>
                        Product name
                     </Text>
                   </Box>
                   <Box flex={1}>
                     <Text color={"#575757"}>
                        Brand
                     </Text>
                   </Box>
                   <Box flex={1}>
                     <Text color={"#575757"}>
                        Price
                     </Text>
                   </Box>
                   <Box flex={1}>
                     <Text color={"#575757"}>
                        Quantity
                     </Text>
                   </Box>
                   <Box flex={1}>
                     <Text color={"#575757"}>
                        Total
                     </Text>
                   </Box>
                   <Box flex={1.3} pl={"10px"}>
                     <Text color={"#575757"}>
                        Status
                     </Text>
                   </Box>
                   <Box flex={0.7}>
                   </Box>
                </Flex>
                {
                    arr.map((el,i)=>(
                        <div key={i}>
                            <ItemCard/>
                        </div>
                    ))
                }

            </Box>
            <br />
            <br />
        </>
    )
}

export default Order
