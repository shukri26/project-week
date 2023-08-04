import React from "react";

function Ecard({amount}){
    return(
        <div className="ecard">
            <div className="ewrapper">
                <h3 className="eheader">Carbon emitted is</h3>
                <div className="enum">{amount} KG</div>
            </div>
        </div>
    )
}

export default Ecard;