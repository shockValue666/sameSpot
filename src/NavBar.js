import React,{useState,useEffect} from 'react';
import {Box,Button,Flex,Image,Link,Spacer} from '@chakra-ui/react';
// import NextLink from "next/link"

import Discord from './assets/images/icons8-discord-48.png';
import Twitter from './assets/images/icons8-twitter-48.png';
import Telegram from './assets/images/icons8-telegram-app-48.png';


import roboPunksJson from './RoboPunksNFT.json'
import {ethers,BigNumber} from 'ethers';




const roboPunksNFTAddress="0x7592FA5a3f928166100254226B713DD98D6b631A";


const NavBar = ({accounts,setAccounts}) => {
    

    let [indicator,setIndicator] = useState(Boolean[accounts[0]])
    const [walletAddress,setWalletAddress] = useState("")


    const isWhiteListed = async () => {
        const provider = await new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksJson.abi,
                signer
            )
            try{
                // console.log('big number from my dick: ',BigNumber.from(mintAmount))
                // const response = await contract.mint(BigNumber.from(mintAmount));
                // const index = await contract.merkleRoot()
                const result = await contract.whiteListMint(['0xbd57d5be4eb9fd2604e0371a4b6653a1849fe0fccebfd84ce6e5fbeab9fdabe0','0x8447f49781e214f8c2e24f3ed1cda192164b67259300d99cc7cea19585a692f1','0xcf59bb9c49dd5bf06ead5931e7f7281efb3a01d47ba109257e2056b1ecdd72d9'])
                console.log(result)
                // console.log('merkle root: ',index)
            }catch(err){
                console.log("error: " ,err)
            }
    }

    useEffect(()=>{
        if(indicator){
            setWalletAddress(accounts[0])
            console.log(walletAddress)
        }
    },[])
    
    
    return (
            <div className="frontpage">
            {/* <Image src={require('./assets/images/LogoMakr(3).png')}  width="100px" marginLeft="10px" height="162px" margin="0px 10px" className="logo" /> */}
            {/* <Image src={require('./assets/images/LogoMakr(3).png')}   marginLeft="10px" height="170px"  margin="0px 10px" className="logo" /> */}
            <Image src="https://somespace.fra1.cdn.digitaloceanspaces.com/LogoMakr%283%29.png"   marginLeft="10px" height="170px"  margin="0px 10px" className="logo" />
            <div className="frontpagebt">
    <Flex justify="space-between" align="center"  padding="10px" backgroundColor="rgba(0, 0, 0, 0.5)" borderRadius="10%" >
        {/*left side - social media */}

            
    
        <Flex justify="space-around" width="40%" padding="0 0px">
            {/* <NextLink> */}
                {/* <Link href="https://www.metis.io/" target="_blank">                
                <Image src={require('./assets/images/metisLogo.jpeg')} className="" borderRadius="29%" boxSize="42px" margin="0 15px"/>
                </Link> */}
            <Link href="https://discord.gg/pcj4SmWfdf" target="_blank">
                {/* <Image src={Discord} boxSize="52px" margin="0 15px" /> */}
                <Image src={"https://somespace.fra1.cdn.digitaloceanspaces.com/icons8-discord-bubble-48.png"} boxSize="52px" margin="0 15px" />
            </Link>
            <Link href="https://twitter.com/ApewivesM" target="_blank">
                {/* <Image src={Twitter} boxSize="52px" margin="0 15px" /> */}
                <Image src="https://somespace.fra1.cdn.digitaloceanspaces.com/icons8-twitter-48.png" boxSize="52px" margin="0 15px" />
            </Link>
            <Link href="https://www.google.com">
                {/* <Image src={Telegram} boxSize="52px" margin="0 15px" /> */}
                <Image src="https://somespace.fra1.cdn.digitaloceanspaces.com/icons8-telegram-app-48.png" boxSize="52px" margin="0 15px" />
            </Link>
        </Flex>

        {/*right side - social media */}

    <Flex justify="space-around" align="center" width="60%" padding="" >
        
        <Spacer/>
        
        <Spacer/>
        <Button 
        backgroundColor="black" 
        borderRadius="5px" 
        boxShadow="0px 2px 2x 1px $0F0F0F" 
        color="white"  
        cursor="pointer" 
        fontFamily="inherit" 
        padding="15px" 
        margin="0 15px" 
        onClick={isWhiteListed}
        >
            test
        </Button>
    {/*connect button */}
        {indicator? <Box margin="0 15px" color="yellow" fontSize="20px">{accounts[0]}</Box> 
        : 
        <Button 
        >
            
        </Button>}

    </Flex>

    </Flex>     
        </div>
</div>
    );
}
export default NavBar;
