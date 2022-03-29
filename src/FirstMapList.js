import {Box,Heading,List,ListIcon,ListItem,Text} from '@chakra-ui/react'
import {SettingsIcon,CheckCircleIcon} from "@chakra-ui/icons"

const FirstMapList = ({}) => {
        return (<div style={{paddingLeft:"5px",fontSize:"18px"}}>
            <List spacing={40}>
                <Heading as='h2' size='3xl' isTruncated>Phase 1</Heading>
            <ListItem>
                {/* <ListIcon as={CheckCircleIcon} color='green.500' marginRight="10px" /> */}
                <span style={{marginRight:"15px"}} >✅</span>   Launch the mint event
            </ListItem>
            <ListItem>
                {/* <ListIcon as={SettingsIcon} color='green.500' marginRight="10px" /> */}
                <span style={{marginRight:"15px"}} >🏗</span> Get listed on all Metis marketplaces or create or own
            </ListItem>
            <ListItem>
                {/* <ListIcon as={SettingsIcon} color='green.500' marginRight="10px" /> */}
                <span style={{marginRight:"15px"}} >🏗</span> Create a discord server exclusive to mDAW hodlers where we will exchange info about Metis NFT and DeFi alpha
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
                {/* <ListIcon as={SettingsIcon} color='green.500' marginRight="10px" /> */}
                <span style={{marginRight:"15px"}} >🔜</span> Hire Tik Tok and Instagram influencers to shill our project to a wider audience
            </ListItem>
            </List>
        </div>);
}
export default FirstMapList;


