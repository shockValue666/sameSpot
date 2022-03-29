import {useState,useEffect} from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import RoadMap from './RoadMap';
import Specs from "./Specs";
import Foot from './Foot'
import WhyYouBuyIt from './WhyYouBuyIt';
import Sect from './Sect';

function App() {


  const [accounts,setAccounts] = useState([]);


  useEffect(()=>{
    console.log('accounts: ',accounts)
  },[accounts])
  return (
    <div className="siteWrapper">
      <div className="overlay">
        <div className="App">

            {/* I GOTTA MAKE MEMES AND BUY A SHOUT OUT AT 1K MINTS AND ADVERTISE IT ON MY TWITTER */}
          <div className="moving-background">
        <NavBar accounts={accounts} setAccounts={setAccounts} />          
          <MainMint accounts={accounts} setAccounts={setAccounts} />   
        </div>
        </div>
        
      </div>
      <div className="sectionDivider"></div>
      <div className="whyYouBuyIt">
        <WhyYouBuyIt/>
        {/* 1 . pronomia gia defi projects , 2. metapolitiki axia tou nft exaitias tou staking p tha lavei xwra, 3. hedge fund, 4. alpha community on metis and some other shit , put the gif next to it */}
      </div>
      <div className="sectionDivider"></div>
      <div className="roadMap">
        <RoadMap accounts={accounts} setAccounts={setAccounts}/>
      </div>
      {/* photoasslpitter <div></div> */}
      <div className="sectionDivider"></div>
      <div className="specs">
        {/* change background */}
        <Specs/>        
      </div>
      <div className="sectionDivider"></div>
      <div className="sect">
        <Sect/>
      </div>
      <div className="footteer">
        <Foot/>
      </div>
    </div>
  );
}

export default App;
