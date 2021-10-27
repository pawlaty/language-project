import {ICard} from "./ICard";

export class Desk{
    desk:ICard[];

    constructor(){
        this.desk =[];
        this.NewDesk();
        this.SchuffleDesk();
    }

    /*Ustawia*/
    NewDesk():void{
        let colors = ['kier','caro','trefl','pik'];
        let values = [{name:'2',val:2},{name:'3',val:3},{name:'4',val:4},
                      {name:'5',val:5},{name:'6',val:6},{name:'7',val:7},
                      {name:'8',val:8},{name:'9',val:9},{name:'10',val:10},
                      {name:"W",val:2},{name:'D',val:3},{name:'K',val:4},
                      {name:'A',val:11},
                    ];


        for(let i=0; i<values.length;i++ ){
            for(let j = 0;j< colors.length;j++){
                let card: ICard = {name:values[i].name,value:values[i].val,color:colors[j]};
                this.desk.push(card);

            }
        }
        //this.PrintDeskLength();
    }
/**
 *
 * @returns tasuje talie this.desk
 */
    SchuffleDesk(){
        let currentID:number = this.desk.length;
        while(currentID !== 0){
            let rand:number = Math.floor(Math.random() * currentID);
            currentID -=1;
            let tmp:ICard = this.desk[currentID];
            this.desk[currentID] = this.desk[rand];
            this.desk[rand] = tmp;
        }

    }

    PrintDeskLength():void{
        console.log("desk lenght in constructor is : " + this.desk.length);
        console.log(this.desk);
    }

    GetDeskLength():number{
       return this.desk.length;
    }

    GetDesk():ICard[]{
        return this.desk;
    }

    /*
    *zwraca n-ta karte z talii
    */
    GetNCardFromDesk(n:number){
        return  this.desk[n];
    }
}