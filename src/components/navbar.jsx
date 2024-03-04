import { useState } from 'react';

import CustomBtn from "./custom-button";

function NavBar() {
    var [count, setcount] = useState(0);
    return (
        <>
            <div id="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                    <p style={{color:'white'}}>{count}</p>
                    <CustomBtn title = "Login" onPressed = {
                        () =>{setcount((prevState)=> prevState +1) }
                    }/>
                    <CustomBtn title = "submit"/>
                </ul>
            </div>
            
        </>
    );
}

export default NavBar