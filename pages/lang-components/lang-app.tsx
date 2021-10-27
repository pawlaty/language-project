import React from 'react';
import  {ICard}  from '../../classes/ICard';
import  {Desk}  from '../../classes/desk';
import Table from './Table';
import Card from './card';
import Coin from './Coin';
import Header from './Header';
import  {Scope}  from '../../classes/scope';
//import  {GameBakarat}  from '../../classes/GameBakarat';
import EndGame  from './EndGame';

class LangApp extends React.Component<{},any>  {
  desk: Desk;
  scopes: Scope;
  count:number;
  //game:GameBakarat;

  constructor(){
    super(arguments);
    this.desk = new Desk();
    this.count = -1;
    this.scopes = new Scope();

    this.state={
      playerPoints:0,
      crupierPoints:0,
      newRound:false,
      endGame :false,
      card_lp:-1,
      nrRound : 0,
      openedCards:0,
    }
  }
/**
 * Ustawia nr karty na nastepna kolejke
 */
  upCount = ():void =>{
    const nr = this.state.card_lp + 6;
    this.setState({card_lp: nr})
  }

  /**
    * dewaluuje punkty z number na string
    * dodaje do siebie l.dzies i l.jendosci i zwraca jako numbr
  */
  devalueScore(scr:number):number{
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
        console.debug(e);
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
      const cardup = this.state.openedCards + 1;
      const sum:number = this.state.playerPoints + card.value;
      this.setState({playerPoints:sum,openedCards:cardup}); //, openedCards:cardup});

    }
    console.log("click player");
    console.log([this.devalueScore(this.state.playerPoints),this.devalueScore(this.state.crupierPoints),this.state.openedCards]);
  };

  /**
   *
   * @param card liczy punkty krupiera
   * @param clState
   */
  Click_Croupier = (card:ICard,clState:boolean)=>{
    if(!clState){
      const cardup = this.state.openedCards + 1;
      const sum:number = this.state.crupierPoints + card.value;
      this.setState({crupierPoints:sum,openedCards:cardup});
    }
   console.log("click krupier");
   console.log([this.devalueScore(this.state.playerPoints),this.devalueScore(this.state.crupierPoints),this.state.openedCards]);
  };


/**
 *
 * @returns Sprawdza kto wygrywa runde...
 * zwraca nr sprawdzany w klasie scope
 */
  checkWhoWin():number{
    const p:number = this.devalueScore(this.state.playerPoints);
    const c:number = this.devalueScore(this.state.crupierPoints);
   // console.log([p,c]);

    if      (p>c)     {return 1;}
    else if (p<c)     {return 0;}
    else              {return -1;}
  }

    /**Reset Points */
  ResetPoints = ():void =>{
      this.setState({
        playerPoints:0,
        crupierPoints:0,
        openedCards:0,
      });
    }

  /**
   * funkcja przekazana do karty
   * po wcisnieciu butta nowa runda
   * ustawia state: nowa runda na true
   */
  Click_NewRound = ()=>{
      //jezeli jest mniej niz 8 rund gry == 7 clicniec:
      if(this.state.nrRound < 7){
        this.setState({openedCards:2});
        this.scopes.addScope(this.checkWhoWin());
        const r_nr = this.state.nrRound +1;
        setTimeout(()=>{
          // this.scopes.addScope(this.checkWhoWin());
          // const r_nr = this.state.nrRound +1;
          this.setState({
            newRound:true,
            nrRound: r_nr,
          });

          setTimeout(()=>{
            this.ResetPoints(); //setState = 0 dla Player i Croupier Points
            this.upCount();
          },920);

        },1600);
        // this.scopes.addScope(this.checkWhoWin());
        // const r_nr = this.state.nrRound +1;
        // this.setState({
        //   newRound:true,
        //   nrRound: r_nr,

        //   });
        // this.ResetPoints(); //setState = 0 dla Player i Croupier Points

        //ustawia state nr karty+6 po odwroceniu ostatniej karty


      }else{
        this.setState({endGame:true});
      }
  }
  /**
  * funkcja przekazana do karty
  * zmienia state:Nowa runda na false po obrocie kart
  * wywolywana automatycznie gdy newRound zmieni sie na true
  * aby dalo sie je znow obrocic
*/
Set_NewRoundFalse = ()=>{
  this.ResetPoints(); //setState = 0 dla Player i Croupier Points
  this.setState({
    newRound:false,
  });
}

  /**
   * funkcja przycisku New_Game
   */
  Click_NewGame = () => {
    this.ResetPoints();       //setState = 0 dla Player i Croupier Points
    this.scopes.newGameScope();
    this.setState({
      newRound:true,
      endGame:false,
      nrRound:0,
      });
    setTimeout(()=>{
      this.setState({card_lp:-1});
      this.desk.SchuffleDesk();
      this.ResetPoints();     //setState = 0 dla Player i Croupier Points

    },1000);


  }


  render(){

    return  (
      <div className="maingrid">
        <Header title={"Bakarat"}/>
        <div className="mainlang flex-center lang">
            <div className="player">
            <div className="flex-center"><p className="margin-right name">Player:</p> <Coin pPoints={this.devalueScore(this.state.playerPoints)} addr={"img/zeton.svg"}wid={"3rem"} /></div>

              <div className="mainlang flex-center">
                <Card key={"1"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.desk.GetNCardFromDesk(this.state.card_lp+1)} toggle={this.Click_Player} delay={1} player={'player'}/>
                <Card key={"2"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.desk.GetNCardFromDesk(this.state.card_lp+2)} toggle={this.Click_Player} delay={2} player={'player'}/>
                <Card key={"3"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.desk.GetNCardFromDesk(this.state.card_lp+3)} toggle={this.Click_Player} delay={3} player={'player'}/>
              </div>
            </div>

            <div className="player">
              <div className="flex-center"><p className="margin-right name">Croupier:</p> <Coin pPoints={this.devalueScore(this.state.crupierPoints)} addr={"img/zeton.svg"} wid={"3rem"} /></div>
              <div className="mainlang flex-center">
                <Card key={"4"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.desk.GetNCardFromDesk(this.state.card_lp+4)} toggle={this.Click_Croupier} delay={4} player={'croupier'}  openedcards={this.state.openedCards}/>
                <Card key={"5"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.desk.GetNCardFromDesk(this.state.card_lp+5)} toggle={this.Click_Croupier} delay={5} player={'croupier'}  openedcards={this.state.openedCards}/>
                <Card key={"6"} nRound={this.state.newRound} startRound = {this.Set_NewRoundFalse} onecard={this.desk.GetNCardFromDesk(this.state.card_lp+6)} toggle={this.Click_Croupier} delay={6} player={'croupier'}  openedcards={this.state.openedCards}/>
              </div>
            </div>
          </div>
        <Table pPoints={this.scopes.getScopes()} newRound={this.Click_NewRound} newGame={this.Click_NewGame}/>
        {this.state.endGame?<EndGame />:"" }
      </div>
      );
  };

}
export default LangApp;
