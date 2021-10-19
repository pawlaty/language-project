
import React from 'react';
import { ICard } from './ICard';
import { Desk } from './desk';
import Table from './Table';
import Card from './card';
import { Coin } from './Coin';
import Header from './Header';

class LangApp extends React.Component<{},any>  {
  sDesk: ICard[];
  desk: Desk;

  constructor(){
    super(arguments);
    this.desk = new Desk();
    this.sDesk = this.desk.SchuffleDesk();
    this.state={
      playerPoints:0,
      crupierPoints:0,
      newRound:false,
    }
  }

  addPlayerPoints = (card:ICard)=>{
    this.setState({playerPoints:+card.value});
  }

  /**
    * dewaluuje punkty z number na string
    * dodaje do siebie l.dzies i l.jendosci i zwraca jako numbr
  */
  devalueScore(scr:number){
    let sum:number = 0;

    function change(val:number){
      let a:string = val.toString();
      let b:string[] = a.split("");
      let c:number[] = [];

      for(let i in b){
        let q = Number(b[i]);
        c.push(q);
        sum = c.reduce((a,b)=>a+b);
      };
    }
    change(scr);
    while(sum>9){
      try{change(sum);}catch(e){
        throw new Error('sorry there is somthing wrong');
      }
    }
    return sum;
  }

  /**
   *
   * @param card liczy punkty playera
   * @param clState
   */
  Click_Player = (card:ICard,clState:boolean)=>{
    if(!clState){
      const sum = this.state.playerPoints + card.value;
      this.setState({playerPoints:sum});}
    //console.log(card.value);
  };

  /**
   *
   * @param card liczy punkty krupiera
   * @param clState
   */
  Click_Croupier = (card:ICard,clState:boolean)=>{
    if(!clState){
      const sum = this.state.crupierPoints + card.value;
      this.setState({crupierPoints:sum});}
    //console.log(card.value);
  };

  /**
   * funkcja przekazana do karty
   * po wcisnieciu butta nowa runda
   * ustawia state: nowa runda na true
   */
  Click_NewRound = ()=>{
      this.setState({
        newRound:true,
        playerPoints:0,
        crupierPoints:0,

      });
  }

/**
  * funkcja przekazana do karty
  * zmienia state:Nowa runda na false po obrocie kart
  * aby dalo sie je znow obrocic
*/
  Set_NewRoundFalse = ()=>{
    this.setState({
      playerPoints:0,
      crupierPoints:0,
      newRound:false,
    });
  }

  render(){

    return  (
      <div className="maingrid">
        <Header title={"Bakarat"}/>
        <div className="mainlang flex-center lang">
            <div className="player">
            <div className="flex-center"><p className="margin-right name">Player:</p> <Coin pPoints={this.devalueScore(this.state.playerPoints)} addr={"img/zeton.svg"}wid={"3rem"} /></div>

              <div className="mainlang flex-center">
                <Card key={"1"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.sDesk[0]} toggle={this.Click_Player} delay={1}/>
                <Card key={"2"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.sDesk[1]} toggle={this.Click_Player} delay={2}/>
                <Card key={"3"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.sDesk[2]} toggle={this.Click_Player} delay={3}/>
              </div>
            </div>

            <div className="player">
              <div className="flex-center"><p className="margin-right name">Croupier:</p> <Coin pPoints={this.devalueScore(this.state.crupierPoints)} addr={"img/zeton.svg"}wid={"3rem"} /></div>
              <div className="mainlang flex-center">
                <Card key={"4"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.sDesk[3]} toggle={this.Click_Croupier} delay={4}/>
                <Card key={"5"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.sDesk[4]} toggle={this.Click_Croupier} delay={5}/>
                <Card key={"6"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.sDesk[5]} toggle={this.Click_Croupier} delay={6}/>
              </div>
            </div>
          </div>
        <Table pPoints={this.devalueScore(this.state.playerPoints)} newRound={this.Click_NewRound}/>
      </div>
      );
  };

}
export default LangApp;
