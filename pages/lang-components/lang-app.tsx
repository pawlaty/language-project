import Card from './card';
import { ICard } from './ICard';
import { Desk } from './desk';
import Table from './Table';
import {useState,useEffect} from 'react';
//import type { AppProps } from 'next/app'

//function LangLayout({ Component, pageProps }: AppProps) {
function LangApp() {
  const desk = new Desk();
  const sDesk = desk.SchuffleDesk();

  useEffect(
    ()=>{

    }
  );
  const [playerPoints,setPlayerPoints] = useState(10);
  const [calculationPlayer, setCalculationPlayer] = useState(0);

  const [crupierPoints,setCrupierPoints] = useState(0);

  const Click = (card:ICard)=>{
    setPlayerPoints(prevState =>+ prevState +card.value)
    console.log(card.value);
  };

  /*useEffect(()=>{
    setCalculationPlayer((c)=>c+playerPoints)
  }, [playerPoints]);*/

  return  (
  <div className="maingrid">
    <div className="mainlang">
      <Card key={1} onecard={sDesk[0]} toggle={Click}/>
      <Card key={2} onecard={sDesk[1]} toggle={Click}/>
      <Card key={3} onecard={sDesk[2]} toggle={Click}/>
    </div>

    <Table pPoints={playerPoints}/>
  </div>);
}
export default LangApp;
