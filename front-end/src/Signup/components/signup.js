//Importing Packages
import React, { useRef,useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

//Importing Files
import LoginPage from "../pages/signup";


const Login = () => {

    const Navigation = new useNavigate();

    const [User,setUser] = useState({
        institutionName:"",
        institutionEmail:"",
        institutionLocation:"",
        role:"College"
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

        const {institutionName,institutionEmail,institutionLocation,role} = User;

        if(role === "School")
        {
            const Frispy = await fetch("/register/registerSchool", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    institutionName,institutionEmail,institutionLocation,role
                })
            })

            if(Frispy.status === 401)
            {
                setFrispyStatus(true);
            }

            else
            {
                setFrispyStatus(false);
                if(Frispy.status === 200)
                {
                    Navigation("/validation", {
                        mail:{
                            institutionEmail
                        }
                    })
                }
            }
        }

        else
        {
            const Frispy = await fetch("/register/registerCollege", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    institutionName,institutionEmail,institutionLocation,role
                })
            })
            if(Frispy.status === 401)
            {
                setFrispyStatus(true);
            }

            else
            {
                setFrispyStatus(false);
                if(Frispy.status === 200)
                {
                    Navigation("/validation", {
                        mail:{
                            institutionEmail
                        }
                    })
                }
            }
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