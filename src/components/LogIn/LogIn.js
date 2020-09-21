import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import './Login.css';


const LogIn = () => {

  initializeLoginFramework();
    const { register, errors } = useForm({ mode: 'all'});
   

    const [newUser, setNewUser] = useState (false);
    const [user, setUser] = useState({
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            password: ''
    });

  const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
        history.replace(from);
    }    
};

const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true);
      })
}


const fbSignIn = () => {
  handleFbSignIn()
  .then(res => {
      handleResponse(res, true);
  })
}
 
const handleBlur = (e) => {
  
  let isFieldValid = true; 
  if (e.target.name === 'email'){
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
  }
  if (e.target.name === 'password'){
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber =  /\d{1}/.test(e.target.value);
    isFieldValid = isPasswordValid && passwordHasNumber;  
  }
  if (isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
  }
}
  
  const handleSubmit = (e) => {
      if (newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
            handleResponse(res, true);
            console.log(user.email)
        })
      }

      if (!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            console.log(user,res)
            handleResponse(res, true);
        })
      }
      e.preventDefault();
  }


    return (
        <div>
             <form className="login-form" onSubmit={handleSubmit}>
             {newUser && <input name="name" type="text" onBlur= {handleBlur} placeholder = "your name" ref={register({ required: true, maxLength: 20 })} />}

             <span className = "error">
      {errors.name?.type === "required" &&
        "Your name is required"}
      {errors.name?.type === "maxLength" &&
        "Your name should not exceed 20"}
      </span>

      
      <input name="email" type="text" onBlur= {handleBlur} placeholder = "your email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} />
      <span className = "error">
      {errors.email?.type === "required" &&
        "Your email is required"}
      {errors.email?.type === "pattern" &&
        "Your email is invalid"}
      </span>
      <input name="password" type="password" onBlur= {handleBlur} placeholder = 'Your password' ref={register({ required: true, pattern: /\d{1}/  })} />
      <span className = "error">
      {errors.password?.type === "required" &&
        "Your password is required"}
      {errors.password?.type === "pattern" &&
        "Your password is invalid"}
      </span>
      {newUser && <input name="confirmPassword" type="password" onBlur= {handleBlur} placeholder = 'Confirm Your password' ref={register({  required: true, pattern: /\d{1}/  })} />}
      <span className = "error">
      {errors.confirmPassword?.type === "required" &&
        "Your password is required"}
      {errors.confirmPassword?.type === "pattern" &&
        "Your password is invalid"}
      </span>

      {newUser ?
      <span>
           <p style = {{color : "black"}}>Already have an account?</p> 
           <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
           <p style = {{color : "black"}}>{"Login"}</p>
      </span>

          :
          <span>
            <p style = {{color : "black"}}>Forgot password?</p>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
            <p style = {{color : "black"}}>{"Don't have an account? Sign Up"}</p>
          </span>

      }
                        
     
        
        
      <input type="submit" value={newUser  ? 'Create a new account' :'Log in'}/>
    </form>
   
    <button  onClick={fbSignIn}>Continue with facebook</button>
    <br/> <br/>
    <button   onClick={googleSignIn}>Continue with google</button>
    
        </div>
    );
};

export default LogIn;