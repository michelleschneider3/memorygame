import React from "react";
import '../Styles/Popup.css'
function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1>You win!</h1>
            </div>
        </div>
    ) : "";
}

export default Popup;