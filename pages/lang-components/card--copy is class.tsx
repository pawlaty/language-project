//import Image from 'next/image'
//import revers1 from "../../public/img/revers1.png";
import React, { useState, useEffect } from "react";
import { ICard } from "./ICard";
import CardValue from './CardValue';

interface CardItemsProps {
    nRound:boolean;
    startRound:any;
    onecard:ICard;
    toggle:any;
    delay:number;
};

class Card extends React.Component<CardItemsProps,any>{

    constructor(props:CardItemsProps){
        super(props);
        this.state = {
            clickState:false
        }
    }
    /*
    const [clickState,setClickState] = useState(false);
    ///console.log(...props);
    const press = ()=>{
       setClickState(true);
       toggle(onecard,clickState); //add clickState
      // e.target.children[0].className = "nativecard cardfront cardbox-hover pik";
    };*/

    press = ()=>{
        this.setState({
            clickState:true,
        });
        this.props.toggle(this.props.onecard,this.state.clickState);
    }


    componentDidUpdate(prevProps:any, prevState:any){
           /*console.log("prev: "+prevProps.nRound);
             console.log("this: " + this.props.nRound);*/
            if(this.props.nRound){
                setTimeout(()=>{
                     this.setState({clickState:false});
                     this.props.toggle(this.props.onecard,this.props.nRound);
                     this.props.startRound();
                    // console.log('new round');
                 },this.props.delay*100);

             }
    }

    render(){
        return  (
            <div className="cardbox" onClick={this.press.bind(this.props.onecard)}>
                <div className={this.state.clickState?"cardbox_click card":"card"}>
                    <div className={`nativecard cardfront ${this.props.onecard.color}`}>
                        <CardValue valCard={this.props.onecard.name}/>
                    </div>
                    <div className="nativecard cardback"></div>
                </div>
            </div>);
    }
}
export default Card;
