import React from 'react'
import { Box, Flex, Grid, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Loader = () => {
    const arr = new Array(7).fill(1)
    return (
        <div>
            <Grid gap={"50px"} gridTemplateColumns={"repeat(6,1fr)"}>
                <Skeleton height='100px' />
                <Skeleton height='100px' />
                <Skeleton height='100px' />
                <Skeleton height='100px' />
                <Skeleton height='100px' />
                <Skeleton height='100px' />
            </Grid>
            <br />
            <br />
            <Box>
                <Flex justifyContent={"space-between"}>
                    <Skeleton height='40px' borderRadius={"20px"} w={"40%"} />
                    <Flex gap={"10px"}>
                        <Skeleton height='40px' borderRadius={"20px"} w={"100px"} />
                        <Skeleton height='40px' borderRadius={"20px"} w={"100px"} />
                    </Flex>
                </Flex>
                <br />
                {
                    arr.map((el, i) => (
                        <div>
                            <Flex w={"100%"} gap={"40px"}>
                                <Flex w={"30%"} alignItems={"center"} gap={"5px"}>
                                    <Skeleton height='50px' w={"60px"} />
                                    <Flex flexDir={"column"} gap={"4px"} w={"100%"}>
                                        <Skeleton height='20px' w={"100%"} />
                                        <Skeleton height='20px' w={"90%"} />
                                    </Flex>
                                </Flex>
                                <Flex w={"36%"} alignItems={"center"} gap={"10px"}>
                                    <Flex flexDir={"column"} justifyContent={"center"} w={"25%"} gap={"5px"}>
                                        <Skeleton height='20px' w={"100%"} />
                                        <Skeleton height='20px' w={"100%"} />
                                    </Flex>
                                    <Flex flexDir={"column"} justifyContent={"center"} w={"25%"} gap={"5px"}>
                                        <Skeleton height='20px' w={"100%"} />
                                        <Skeleton height='20px' w={"100%"} />
                                    </Flex>
                                    <Flex flexDir={"column"} justifyContent={"center"} w={"25%"} gap={"5px"}>
                                        <Skeleton height='20px' w={"100%"} />
                                        <Skeleton height='20px' w={"100%"} />
                                    </Flex>
                                    <Flex flexDir={"column"} justifyContent={"center"} w={"25%"} gap={"5px"}>
                                        <Skeleton height='20px' w={"100%"} />
                                        <Skeleton height='20px' w={"100%"} />
                                    </Flex>
                                </Flex>
                                <Flex w={"30%"} alignItems={"center"} gap={"10px"} justifyContent={"space-between"}>
                                    <Flex flexDir={"column"} justifyContent={"center"} w={"40%"} gap={"5px"}>
                                        <Skeleton height='40px' w={"100%"} borderRadius={"full"} />
                                    </Flex>
                                    <Flex justifyContent={"center"} w={"30%"} gap={"5px"}>
                                        <Skeleton height='20px' w={"100%"} />
                                        <Skeleton height='20px' w={"100%"} />
                                        <Skeleton height='20px' w={"100%"} />
                                    </Flex>
                                </Flex>
                            </Flex>
                            <br />
                        </div>
                    ))
                }
            </Box>
        </div>
    )
}

export default Loader
