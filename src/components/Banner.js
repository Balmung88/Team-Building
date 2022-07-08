import banner from "../img/banner.jpeg"; //filepath
import React from "react";


function Banner(){
    return(
        <div>
             <img src={banner} alt="this is a banner" />
        </div>
    )
}

export default Banner;
