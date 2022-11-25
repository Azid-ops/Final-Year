//Importing Packages
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

//Importing Files
import NavPage from "../pages/nav";

const Nav = () => {

    //Imported Classes
    const Navigate = useNavigate();

    //Hooks
    const [notification,setNotification] = useState(0);

    const signIn = (event) => {
        event.preventDefault();
        Navigate("/login");
    }

    return(
        <NavPage signIn={signIn} notify={notification} />
    )
}

export default Nav;