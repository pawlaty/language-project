import React from "react";


export default function CardValue(...props:any[]){


    const val = props[0].valCard;
    return (
        <div className="card-value-parent">
            <div className="UpAndDown TopLeft">{val}</div>
            <div className="UpAndDown BottomRight">{val}</div>
        </div>
    );
}