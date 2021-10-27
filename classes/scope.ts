import  {IScope} from "./IScope";

export class Scope{
    scopes:IScope[];

    constructor(){
        this.scopes = [];
    }

    addScope(p:number):void{
        let s:IScope;
        if      (p===0) {s={p:0,c:1}}
        else if (p===1) {s={p:1,c:0}}
        else            {s={p:0,c:0}}
        this.scopes.push(s);
    }

    newGameScope(){
        this.scopes = [];
    }

    getScopes(){return this.scopes;}
}