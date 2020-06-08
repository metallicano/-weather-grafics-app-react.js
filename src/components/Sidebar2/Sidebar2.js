import React from 'react'
import './Sidebar2.css'
export default function Sidebar2() {
    return (
        <div>
            <div id="sidebar">
                <div className="toggle-btn">
                    <ul>
                        <li>
                            <img src="https://pokeres.bastionbot.org/images/pokemon/729.png" alt="" className="logo"/>
                        </li>
                        <li><i className="fas fa-meteor"></i></li>
                        <li>home</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
