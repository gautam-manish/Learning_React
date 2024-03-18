import React from "react";
import "./toogleSwitch.css"
function ToogleSwitch() {
    let [btn, btnState] = React.useState(true);
    let click = String(btn)
    return (
        <>
            <h1>Toogle Button</h1>
            <button className="bb" onClick={() => btnState(!btn)}>{click}</button>
            <br />
            <br />
        </>
    );
}

export default ToogleSwitch;