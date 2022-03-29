import {Flex,Text,Divider,Box,Center,Heading} from "@chakra-ui/react"
import Gif from "./Gif";

const WhyYouBuyIt = ({}) => {
        return (<Flex flexDirection="row" width="100%" className="buyItSectionParent" color="white">
            {/* <div className="buyItSectionChild"> */}
                <Box flex="2">
                    <Center>
                        <div style={{marginTop:"15px"}}>
                        <Gif/>
                        </div>
                    </Center>
                </Box>
                <Box flex="3">
                    <Center>
                        <Text padding="20px" className="buyItSectionChild" color="white">
                            <Heading as='h2' size='3xl'>Why hodl a Metis ApeWife?</Heading>
                            <Divider orientation='horizontal' />
                            <p>    
                            Because mDAW aspires to build an inclusive, receptive and engaged community which will focus on evlovling the cultural and artistic aspect of Metis.
                            </p>
                            <Divider orientation='horizontal' />
                            <p>    
                            Owning an mDAW will give you access to our DAO and Staking Platform which will be 100% controlled by the mDAW community
                            </p>
                            <Divider orientation='horizontal' />
                            <p>
                            Gives you access to online events organized by our team
                            </p>
                            <Divider orientation='horizontal' />
                            <p>
                                Hodling an NFT will be gradually more and more valuable by offering privileges and rewards to hodlers
                            </p>
                            </Text>
                    </Center>
                </Box>
            {/* </div> */}
        </Flex>);
}
export default WhyYouBuyIt;