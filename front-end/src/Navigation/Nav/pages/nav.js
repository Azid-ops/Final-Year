//Importing Packages
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'

//Importing Files
import Aux from '../../../Auxiliary/auxiliary';

//Importing Images
import Logo from '../../Images/logo.png';

//IMporting Css Classes
import './nav.css';

const NavPage = (props) => {
    let notifyColor = [];
    if(props.notify !== 0)
    {
        notifyColor.push("Red");
    }
    else
    {
        notifyColor.push("Green")
    }

    return(
        <Aux>
            <section className="outerNav">
                <img 
                    className="logo" 
                    src={Logo} 
                    alt="Bise Logo" 
                />
                <div className="innerDiv">
                    <h1 className="logoText">BISE</h1>
                </div>

                <div className="outerNavigation">
                    <div className="navLinks">Home</div>
                    <div className="navLinks">Examination</div>
                    <div className="navLinks">Affiliations</div>
                    <div className="navLinks">Scheme of Study</div>
                    <div className="navLinks">News</div>
                    <div className="navLinks">Recruitment</div>
                    <div className="navLinks">About US</div>
                </div>
                <div className="outerNavigation_again">
                    <span>
                        <FontAwesomeIcon 
                            className={notifyColor.join(' ')} 
                            icon={faBell}
                        />
                        <span> </span>
                        <span className={notifyColor.join(' ')} >(0)</span>
                    </span>
                </div>
                
                <div className="signinDiv">
                    <div onClick={props.signIn} className="navLinks">Sign In</div>
                </div>
                
            </section>
        </Aux>      
    )
}

export default NavPage;