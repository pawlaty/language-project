import { CSSProperties } from "react";
import { useState } from "react";

export default function Coin({pPoints,addr,wid}:any){

    const [shadow,setShadow] = useState("rgb(0,0,0)");
    //const [pPoints,addr,wid] = {...props};
    const url_adrr = `url("${addr}") center no-repeat`;

    const styll:{[key:string]:CSSProperties}={
        coin:{
            width:wid,
            height:wid,
            background:url_adrr,
            backgroundSize:"contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex:2,
            boxShadow:`3px 4px 5px 1px ${shadow},inset 3px 4px 5px 1px ${shadow}`,
            borderRadius:"50%",
            },
        p:{
            width:"max-content",
        },

    }
    return (
        <div style={styll.coin} className="flex-center"
                                onMouseEnter={()=>{setShadow("rgb(120,140,150)")}}
                                onMouseLeave={()=>{setShadow("rgb(0,0,0)")}}
        >
            <p style={styll.p}><b>{pPoints}</b></p>
        </div>
    );
}