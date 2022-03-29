import {Box,Heading,List,ListIcon,ListItem,Text} from '@chakra-ui/react'
import {SettingsIcon,CheckCircleIcon} from "@chakra-ui/icons"
import {GrInProgress} from "react-icons/gr"


const MapList = ({}) => {
        return (
        <div style={{paddingLeft:"",fontSize:"18px"}}>
            <List spacing={40}>
                <Heading as='h2' size='3xl' isTruncated>Phase 2</Heading>
            <ListItem>
                {/* <ListIcon as={SettingsIcon} color='green.500' marginRight="10px" /> */}
                <span style={{marginRight:"15px"}} >🔜</span> Create a DAO with 15% of the total mDAW fund, whose purpose will be to invest in Metis DeFi and NFT projects 
            </ListItem>
            <ListItem>
                {/* <ListIcon as={SettingsIcon} color='green.500' marginRight="10px" /> */}
                <span style={{marginRight:"15px"}} >🔜</span> Develop a staking platform which is going to reward stakers with upcoming NFT drops and DAO rewards 
            </ListItem>
            <ListItem>
                {/* <ListIcon as={SettingsIcon} color='green.500' marginRight="10px"/> */}
                <span style={{marginRight:"15px"}} >🔜</span> Collab with other Metis projects in order to gain exposure to the ecosystem and spread our name 
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
                {/* <ListIcon as={SettingsIcon} color='green.500' marginRight="10px"/> */}
                <span style={{marginRight:"15px"}} >🔜</span> Design the mDAW Metaverse 
            </ListItem>
            </List>
        </div>
);
}
export default MapList;





{/* <div style={{padding:"20px"}}>
            <Box maxW='32rem'>
            <Heading mb={4}>Modern online and offline payments for Africa</Heading>
            <Text fontSize='xl'>
                Paystack helps businesses in Africa get paid by anyone, anywhere in the
                world
            </Text>
            </Box>
            </div> */}