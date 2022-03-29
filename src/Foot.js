import { ButtonGroup, Container,Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub,FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {SiDiscord} from "react-icons/si"



const Foot = ({}) => {
        return (
            <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
                <Stack spacing={{ base: '4', md: '5' }}>
                    <Flex flexDirection="row" justifyContent="space-between">
                        <Text fontSize="sm" color="subtle">
                            &copy; {new Date().getFullYear()} Metis Desperate ApeWives 👁
                        </Text>

                        <Stack justify="space-between" direction="row" align="center">

                            <ButtonGroup variant="ghost">
                            <IconButton
                                as="a"
                                href="#"
                                aria-label="LinkedIn"
                                icon={<SiDiscord fontSize="2.25rem" />}
                            />
                            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaTelegram fontSize="2.25rem" />} />
                            <IconButton
                                as="a"
                                href="#"
                                aria-label="Twitter"
                                icon={<FaTwitter fontSize="2.25rem" />}
                            />
                            </ButtonGroup>
                        </Stack>
                </Flex>
                </Stack>
            </Container>
        );
}
export default Foot;



