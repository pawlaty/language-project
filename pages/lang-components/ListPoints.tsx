import { CSSProperties } from "react";
import PropTypes from "prop-types";

export default function ListPoints({pPoints,wid}:any){

    const shadow = "rgb(0,0,0)";


    const styll:{[key:string]:CSSProperties}={
        coin:{
            width:wid,
            minHeight:"4rem",
            height:"fit-content",
            background:"linear-gradient(40deg, rgba(130, 251, 224, 0.7), rgba(190, 140, 90, 1))",
            transform:"skewX(-15deg)",
            zIndex:2,
            boxShadow:`3px 4px 5px 1px ${shadow},inset 3px 4px 5px 1px ${shadow}`,
            borderRadius:"5%",
            },
        p:{
            width:"max-content",

        },

    }
    return (
        <div style={styll.coin} className="flex-center">
           {/* <p style={styll.p}><b>{pPoints}</b></p>*/}
           <ListItems elements={pPoints}/>
        </div>
    );
}



const ListItems = ({elements}:any) => {
    const styll:{[key:string]:CSSProperties}={
        t_R:{
            borderRight:".1em solid #000",
            width:"2rem",
            textAlign:"center",
        },
        t_L:{
            borderBottom:".1em solid #000",
            textAlign:"center",
        },
        t_T:{
            borderRight:".1em solid #000",
            borderTop:".1em solid #000",
            textAlign:"center",
        },
        t_B:{
            borderBottom:".1em solid #000",
            textAlign:"center",
        },
        t_OT:{
            borderTop:".1em solid #000",
            textAlign:"center",
        }
    }

    function getPoints(who:string):number{
        let points:number = 0;
        switch(who){
            case "p":
                points = 0;
                elements.forEach((a:any)=>{points += a.p;});
                return points;
            case "c":
                points = 0;
                elements.forEach((a:any)=>{points += a.c});
                return points;
            default:
                return 0;
        }


    }


    const items = elements.map((v:any,i:number)=>(<tr  key={i}><td style={styll.t_T}>{i+1}</td><td style={styll.t_T}>{v.p}</td><td style={styll.t_OT} >{v.c}</td></tr>));
    return(
        <table>
            <thead>
                <th style={styll.t_R}>lp</th><th style={styll.t_R}>P</th><th>C</th>
            </thead>
            <tbody>
                {items}
                <tr  key={"total#"}><td style={styll.t_T}><b>total</b></td><td style={styll.t_T}><b>{getPoints("p")}</b></td><td style={styll.t_OT} ><b>{getPoints("c")}</b></td></tr>
            </tbody>
        </table>
    );
}



ListItems.defaultProps = {
    elements:[{p:0,c:1},{p:1,c:0},{p:1,c:0},{p:1,c:0},{p:0,c:1}],
};