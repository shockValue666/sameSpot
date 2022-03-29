import React from 'react';
import {useState,useEffect} from 'react';
import {ethers,BigNumber} from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json'
import {FaMinusCircle,FaPlusCircle} from 'react-icons/fa'
import {CgArrowLongDownL}  from "react-icons/cg";
import {EmailIcon} from "@chakra-ui/icons"
import whiteListedAddresses from './assets/whiteListAddresses.json'
import {
    Alert,
    Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center
} from '@chakra-ui/react'

const roboPunksNFTAddress="0x3448bD4D548c0F6e4C3Ce658340CD7Dc5638d15F";



const MainMint = ({accounts,setAccounts}) => {
    const [mintAmount,setMintAmount] = useState(1);
    let maxMintAmount;
    let [indicator,setIndicator] = useState(Boolean[accounts[0]])
    const [regularUser,setRegularUser] = useState("");
    const [whiteListedUser,setWhiteListedUser]=useState("");

    const isConnected = Boolean(accounts[0]);

    async function connectAccount(){
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method:"eth_requestAccounts",
            })

            const switchNetwork = await window.ethereum.request({
                method:"wallet_addEthereumChain",
                params:[{
                    chainId:`0x${Number(1088).toString(16)}`,
                    rpcUrls:["https://andromeda.metis.io/?owner=1088"],
                    chainName:"Metis Network",
                    nativeCurrency:{
                        name:"Metis",
                        symbol:"METIS",
                        decimals:18
                    },
                    blockExplorerUrls:["https://andromeda-explorer.metis.io/"]
                }]
            })

            setAccounts(accounts)
            setIndicator(true)
        }else{
            alert('you need to install metamask in order to mint an mDAW NFT')
        }

        // const InitialValye=test
    }

    async function handleMint(){
        if(window.ethereum){
            const provider = await new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            )
            try{
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ',response)
            }catch(err){
                console.log("error: " ,err)
            }
        }
    }

    const handleWhitelistMint = async () =>{

    }

    const handleMaxWhitelistMint = async () =>{

    }

    const handleMaxMint = () =>{
        setMintAmount(maxMintAmount)
    }

    const handleDecrement = () =>{
        // if(mintAmount<=1) return;
        console.log('decremeent')
        setMintAmount(mintAmount-1)
    }

    const handleIncrement = () =>{
        // if(mintAmount<=10) return;
        console.log('increment')
        setMintAmount(mintAmount+1)
    }
    useEffect(()=>{
        console.log('accounts status changed')
        if(accounts[0]){
            if(whiteListedAddresses.includes(accounts[0])){
                setWhiteListedUser(accounts[0])
            }else{
                setRegularUser(accounts[0])
            }
        }
    },[accounts])
    const splitAddress = (address) => {
        const totalCharacters = address.length;
        const firstThreeChars = address.substring(0,3);
        const lastThreeChars = address.substring(totalCharacters-3,totalCharacters);
        const ShortAddress = firstThreeChars + "..." + lastThreeChars
        return ShortAddress
    }

    return (<div className="mainMintDiv">
        <h2>{whiteListedUser? (<div> {splitAddress(whiteListedUser)}  you are whitelisted</div>):regularUser?(<div> {splitAddress(regularUser)}</div>):(<div></div>)}</h2>
        <h1 className="titleOfThePage" style={{letterSpacing:"2px",fontSize:"48px",color:"rgb(33, 27, 36)"}}>👁 Metis ApeWives 👁</h1>
        <h2>Mint is LIVE <CgArrowLongDownL/> <CgArrowLongDownL/> <CgArrowLongDownL/>   </h2>
        <p></p>

        {
            isConnected?
            (
                <div>
                    <div className="mintButtons">
                        <div className="plusMinusSection">
                            <button onClick={handleDecrement} className="minusButton">
                                <FaMinusCircle/>
                            </button>
                            <input type="hidden" name="" id="" value={mintAmount}/>
                            <div className="mintValueClassWrapper">
                            <div className="mintValueClass" >{mintAmount}</div>
                            </div>
                            <button onClick={handleIncrement} className="plusButton">
                                <FaPlusCircle/>
                            </button>
                        </div>
                        {whiteListedUser?(<div className="mintButtons">
                            <button className="mintButtonwl" onClick={handleWhitelistMint}>WL mint</button>
                            <button className="maxMintButtonwl" onClick={handleMaxWhitelistMint}>WL max mint</button>
                            <h3>WL mint price per NFT: 0.1 $METIS</h3>
                            <h3>WL maximum NFTs per wallet: 15</h3>
                        </div>):(<div className="mintButtons">
                            <button className="mintButton" onClick={handleMint}>mint</button>
                            <button className="maxMintButton" onClick={handleMaxMint}>max mint</button>
                            <h3>WL mint price: 0.15 $METIS</h3>
                            <h3>WL maximum NFTs per wallet: 10</h3>
                        </div>)}
                    </div>
                </div>
            )
            :
            (   
                <div>
                {/* <p class="connectAlert">you need to connect your wallet in order to mint</p> */}
                <button className="mainMintConnectBtn" onClick={connectAccount}>Connect Wallet</button>
                </div>
  
            )
        }
    </div>);
}
export default MainMint;