import React, { useState, useEffect, useRef } from "react";
import "./UserIcon.scss";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserIcon() {
    const [display, changeView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {

        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (display) {
                    changeView(!display);
                    document.removeEventListener("click", handleOutsideClick);
                }
            }
            // console.log("You clicked outside")
        }

        if (display) {
            document.addEventListener("click", handleOutsideClick);
        }

        return () => document.removeEventListener("click", handleOutsideClick);
    }, [display, ref]);

    return (
        <div className="userIcon">
            <div className="icon">
                <img
                    src="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06"
                    alt=""
                    srcset=""
                />
            </div>
            <div className="userOption" ref={ref}>
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