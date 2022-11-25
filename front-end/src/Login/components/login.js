//Importing Packages
import React, { useRef,useEffect, useState } from "react";

//Importing Files
import LoginPage from "../pages/login";


const Login = () => {
    const [User,setUser] = useState({
        institutionName:"",
        institutionEmail:"",
        institutionLocation:""
    });

    const [checkEmail,setEmail] = useState(false);

    const [frispyStatus,setFrispyStatus] = useState(false);


    let name,value;
    const changeHandler = (event) => {
        event.preventDefault();
        name = event.target.name;
        value=event.target.value;
        setUser({...User,[name]:value});
    }

    const registerSchool = async (event) => {
        event.preventDefault();

        const {institutionName,institutionEmail,institutionLocation} = User;

        const Frispy = await fetch("/register/registerSchool", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                institutionName,institutionEmail,institutionLocation
            })
        })

        if(Frispy.status === 401)
        {
            setFrispyStatus(true);
        }

        else
        {
            setFrispyStatus(true);
        }
    }

    useEffect(()=>{
        if(User.institutionEmail.includes('@'))
        {
            setEmail(true);
        }
        else
        {
            setEmail(false);
        }
    });

    return(
        <LoginPage 
            changeHandler={changeHandler} 
            User={User}
            setEmail={setEmail}
            checkEmail={checkEmail}
            registerSchool={registerSchool}
            frispyStatus={frispyStatus}
        />
    )
}

export default Login;