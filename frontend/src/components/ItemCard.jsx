import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { IoCheckmark } from 'react-icons/io5';
import { HiX } from 'react-icons/hi';
import apple from "../assets/Apple-Green-Smith.png"

const ItemCard = () => {
  return (
    <div>
      <Flex className='heading' borderBottom={"2px solid #b4b4b4"} p={"10px"} >
        <Flex flex={2.5} alignItems={"center"}>
          <Image src={apple} w="60px" />
          <Text color={"#575757"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, minus!
          </Text>
        </Flex>
        <Flex flex={1} alignItems={"center"}>
          <Text color={"#575757"}>
            Hormal Black Labelmany
          </Text>
        </Flex>
        <Flex flex={1} alignItems={"center"}>
          <Text color={"#575757"}>
            $60.67/6*1LB
          </Text>
        </Flex>
        <Flex flex={1} alignItems={"center"}>
          <Text color={"#575757"}>
            <b>0</b>x6*1LB
          </Text>
        </Flex>
        <Flex flex={1} alignItems={"center"}>
          <Text color={"#575757"}>
            0
          </Text>
        </Flex>
        <Flex flex={1.3} pl={"10px"} alignItems={"center"}>
          <Text color={"#ffffff"} bgColor={"#e70000"} py={"4px"}
            borderRadius={"full"} px={"10px"}
          >
            Missing - Urgent
          </Text>
        </Flex>
        <Flex flex={0.7} alignItems={"center"} gap={"5px"} cursor={'pointer'}>
          <IoCheckmark size={"22px"} color='grey' />
          <HiX size={"25px"} color='red' fontWeight={"bold"} />
          <Text>Edit</Text>
        </Flex>
      </Flex>
    </div>
  );
}

export default ItemCard;
