import  {Desk}  from './desk';


export class GameBakarat{

    desk:Desk;

    constructor(desk:Desk){
        this.desk = desk;
    }

    cardSchuffle(){
        this.desk.SchuffleDesk();
    }

    getcard():number{
        return 0;
    }

    GameStart(){
        this.cardSchuffle();

    }
}