import {Box,Center,Image,Badge, Flex,} from '@chakra-ui/react'


const BoxSquare = ({}) => {



    const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }
        return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" border="2px solid white" height="100%">
        
            <Center bg='tomato' h='100px' color='white' border="2px solid white">
                    giati olo poutses roufaw vatheia mesa stin apolitiximeni kolotruypida pm
            </Center>
        
    </Flex>
    )
}
export default BoxSquare;
