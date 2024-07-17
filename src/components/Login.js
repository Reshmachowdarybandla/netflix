import Header from "./Header.js";
import { useState,useRef } from "react";
import { checkValidData } from "../utils/validate.js";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        //validate form data
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm)
        {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential)=>{
                const user = userCredential.user;
                console.log(user);
                navigate("/browse")
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });

        }
        else
        {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/Browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }

    }
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };
    return(
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
             alt = "logo"
             />
            </div>
            <form onSubmit={(e)=> e.preventDefault()}className="w-3/12 absolute p-8 bg-black my-24 mx-auto right-0 left-0 text-white rounded-ls bg-opacity-80">  
                <h2 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h2>
                {!isSignInForm &&(<input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"/>)}
                <input ref={email} type="text" placeholder="Email address" className="p-2 my-2 w-full bg-gray-700"/>
                <input ref={password} type="password" placeholder="passoword" className="p-2 my-2 w-full bg-gray-700"/>
                <p className="text-red-500 font-bold text-lg py-2 ">{errorMessage}</p>
               <button className="p-2 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already an user? Sign In"}</p>
            </form>
        </div>
    )
};
export default Login;