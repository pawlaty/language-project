import {ICard} from "./ICard";

export class Desk{
    desk:ICard[];


    constructor(){
        this.desk =[];
        this.NewDesk();
    }

    /*Zwraca*/
    NewDesk():void{
        let colors = ['kier','caro','trefl','pik'];
        let values = [{name:'2',val:2},{name:'2',val:2},{name:'4',val:4},
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
    }
/**
 *
 * @returns Zwraca Potaswoana talie
 */
    SchuffleDesk(){
        let sDesk:ICard[];
        sDesk = [];
        for(let i = 0; i < this.desk.length; i++){
            let rand = Math.floor(Math.random() * this.desk.length );
            sDesk.push(this.desk[rand]);
            this.desk.splice(rand,1);
        }
        return sDesk;
    }
}