import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'

function Nav() {

    const [show,handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener("scroll",transitionNavBar)
    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img 
                    onClick={() => history.push('/')}
                    className="nav_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="netflix logo" />

                <img 
                    onClick={() => history.push("/profile")}
                    className="nav_avatar"
                    src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png" alt="avatar" />
            </div>
        </div>
    )
}

export default Nav
