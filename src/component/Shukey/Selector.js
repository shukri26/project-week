import React from "react";
import { Link } from 'react-router-dom';


function Selector(){
    return(
        <div className="main">
            {/* <p className="main-p"><h3>Did you know</h3> Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities. It is responsible for about 78% of the total greenhouse gas emissions from human activities.</p> */}
            <h2 className="main-h2">Lets Calculate your Emissions </h2>
            <h3 className="main-h3">Choose one of the following</h3>
            <div className="main-div">
                   <ul className="main-list">
                    <li className="child-div">
                        <Link className="slink" to="/zizu/Stima">
                            <div className=" img1">
                                <h1>ELECTRICITY</h1>
                            </div>
                        </Link>
                    </li>
                    <li className="child-div">
                        <Link className="slink" to="/zizu/Fuel">
                            <div className="img2">
                                <h1>FUEL</h1>
                            </div>
                        </Link>
                    </li>
                    <li className="child-div">
                        <Link className="slink" to="/zizu/Shipping">
                            <div className="img3">
                                <h1>SHIPPING</h1>
                            </div>
                        </Link>
                    </li>
                </ul> 
                
            </div>
        </div>
    )
}

export default Selector;