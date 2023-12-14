import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
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
                    <BsCart size={"20px"} style={{ transform: 'rotateY(180deg)' }}/>
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
