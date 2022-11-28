import React from "react";
import Aux from "../../../Auxiliary/auxiliary";
import Email from '../../Authorization/images/email.gif';
import './email.css'

const EmailPage = () => {
    return(
        <Aux>
            <section class="outerSection">
                <img  className="emailVerify"src={Email} />      
                <h1>Email Has been sent to your Email</h1>     
            </section>
        </Aux>
    )
}

export default EmailPage;