import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { shallowEqual, useSelector } from 'react-redux';

const Navbar = () => {
    const { orders } = useSelector((store) => {
        return {
            orders: store.orders
        }
    }, shallowEqual)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(orders[0]?.items.length)
    }, [orders])
    return (
        <>
            <Flex w={"90%"} m={"auto"} py={"5px"} alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={"40px"}>
                    <Heading>Reeco</Heading>
                    <Flex gap={"40px"} alignItems={"center"} mt={"8px"}>
                        <Text>Store</Text>
                        <Text>Orders</Text>
                        <Text>Analytics</Text>
                    </Flex>
                </Flex>
                <Flex gap={"60px"} alignItems={"center"}>
                    <Flex position={"relative"}>
                        <BsCart size={"20px"} style={{ transform: 'rotateY(180deg)' }} />
                        <Text position={'absolute'} color={"white"} bgColor={"#59dd7c"}
                        borderRadius={"50%"} fontSize={"10px"} fontWeight={600} px={"5px"} left={"-5px"} top={"-5px"} py={"1px"}>{total}</Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={"5px"}>
                        <Text>Hello,James</Text>
                        <IoIosArrowDown />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Navbar
