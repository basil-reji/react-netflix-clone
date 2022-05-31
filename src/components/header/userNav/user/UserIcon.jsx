import React, { useState } from "react";
import "./UserIcon.scss";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserIcon() {
    const [display, changeView] = useState(false);

    return (
        <div className="userIcon">
            <div className="icon">
                <img
                    src="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06"
                    alt=""
                    srcset=""
                />
            </div>
            <div className="userOption">
                <FontAwesomeIcon
                    icon={faCaretDown}
                    className="caret-down"
                    onClick={() => {
                        changeView(!display);
                    }}
                />
                {display && (
                    <ul className="userDropDown">
                        <li>
                            <a href="#">Account</a>
                        </li>
                        <li>
                            <a href="#">Help Centre</a>
                        </li>
                        <li>
                            <a href="#">Account</a>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default UserIcon;
