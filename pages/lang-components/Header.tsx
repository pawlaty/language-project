import { CSSProperties } from "react";


export default function  Header(...props:any[]){
    const title = props[0].title;
    const style:{[key:string]:CSSProperties} = {
        container:{
            padding:"1rem",
            width:"100%",
            height:"auto",

            alignItems:"center",
            zIndex:3
        },
        h1:{
            minHeight:"3rem",
            height:"max-content",
            width:"fit-content",
            fontWeight:"bold",
            fontSize:"2rem",
            letterSpacing:"2rem",
        }
    }

    return(
        <div className="flex-center column" style={style.container}>
            <div className="shiningTitle" style={style.h1} data-content={title}>{title}</div>
        </div>
    );
}