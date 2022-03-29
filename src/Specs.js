import { Flex,Heading,Divider,Text,UnorderedList,ListItem,Image,Center,Square,Box } from "@chakra-ui/react";
import {DiCode} from 'react-icons/di'

const Specs = ({}) => {
        return (<Flex color='white' className="specsBack" alignItems="center" justifyContent="space-between" height="450px" width="100%">
        <Center flex="6" w='100px' bg='black' className="text-surrounding">
            <div className="borderParagraph">
                <Flex flexDirection="column">
                    <Text padding="20px">
                        <Heading position="absolute" top="120px">
                            Specs
                        </Heading>
                        <Divider orientation='horizontal' />
                        <p style={{fontSize:"20px"}}>    
                        mDAW implements the ERC-721A NFT contract. This reduces significantlly the gas fee for mass mints compared to the ERC-721 contract.
                        </p>
                        <Divider orientation='horizontal' />
                        <p style={{fontSize:"20px"}}>
                            Attributes, properties, number sequences etc. of mDAW are the same as the OG collection with the addition of an ancient greek pillar to fit in with the Metis aesthetic 
                        </p>
                        </Text>
                    {/* <Divider orientation='horizontal' />
                    <Text padding="20px">mDAW implements the ERC-721A NFT contract. This reduces significantlly the gas fee for mass mints compared to the ERC-721 contract. </Text>
                    <Divider orientation='horizontal' />
                    <Text padding="20px">Attributes, properties, number sequences etc. of mDAW are the same as the OG collection with the addition of an ancient greek pillar to fit in with the Metis aesthetic </Text> */}
                </Flex>
            </div>
        </Center>


  <Square flex="3" bg='black' size='150px' >
      <Flex flexDirection="column" alignItems="center" justifyContent="space-around" height="400px">
        {/* <img src="https://ipfs.io/ipfs/QmSsnai5auAVjRGgAqcwJhMQqh66AGxb2wYpiPwzV6RGcG/1400.png" height="150px" width="150px"/> */}

        {/* <img src={require('./assets/images/metisLogo.jpeg')} height="150px" width="150px"/> */}
        <Image src={require('./assets/images/1400.png')} height="190px" width="190px"></Image>
        <UnorderedList styleType="none">
            <ListItem>Name: LA</ListItem>
            <ListItem>Background: Mustard</ListItem>
            <ListItem>Fur: Tan</ListItem>
            <ListItem>Eyes: LA Eyes</ListItem>
            <ListItem>Clothing: Bikini LA</ListItem>
            <ListItem>Necklace: Mulitple Necklaces </ListItem>
            <ListItem>Hair: LA Hair </ListItem>
            <ListItem>Mouth: Juvederm LA </ListItem>
        </UnorderedList>
    </Flex>
  </Square>
</Flex>);
}
export default Specs;


{/* <UnorderedList styleType="none"></UnorderedList> */}