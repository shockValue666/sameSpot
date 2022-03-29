import React from 'react'
import {Box,Heading,useColorModeValue,Stack,Image,Center,Flex,Square,Text} from '@chakra-ui/react'
import BoxSquare from './BoxSquare';
import MapList from './MapList';
import FirstMapList from './FirstMapList';
//         import {
//   Box,
//   Center,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image,
// } from '@chakra-ui/react';


// split in 2 parts the roadmap, the 1st and the 3rd


//bg="#04d8c1"
const RoadMap = ({}) => {
        return (
            <div style={{height:"100%"}}>
                <div style={{paddingLeft:"20px",backgroundColor:"#000000",color:"#05DAC8",borderBottom:"1px solid black",position:"absolute"}}>
                    <Heading as='h1' size='3xl' isTruncated> RoadMap </Heading>
                </div>
            {/* <Flex color='white' alignItems="stretch" height="100%" border="2px solid pink"> */}
            <Flex color='white' alignItems="stretch" height="100%">
                <Center flex='33.3333333' bg="#000000">
                    <FirstMapList/>
                </Center>
                <Square bg='#000000' flex='33.3333333'>
                    <Text>
                        <Image src={require('./assets/images/newerroadmap.jpg')}></Image>
                    </Text>
                </Square>
                <Center flex='33.3333333' bg='#000000'>
                    <MapList/>
                </Center>
            </Flex>
        </div> 
        );
}
export default RoadMap;



{/* <div style={{border:"10px solid black"}}>
            RoadMap write sth inside ffs
        </div> */}


        // Sample card from Airbnb




 