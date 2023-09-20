import React, { useRef, useEffect, useState } from "react";
import classes from "./Login.module.css";
import logo from "./logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const emailValueRef = useRef();
  const passwordValueRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3XcDFDI03Ei7fzOA0F8xm0kX_4LhENGo";
  const send = async () => {
    const data = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3XcDFDI03Ei7fzOA0F8xm0kX_4LhENGo",
      {
        method: "POST",
        body: JSON.stringify({
          email: "user@example.com",
          password: "1Password",
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const response = await data.json();
    console.log(response.ok);
  };
  useEffect(() => {
    send();
  }, []);
  const submit = async (e) => {
    e.preventDefault();

    const emailValue = emailValueRef.current.value;
    const passwordValue = passwordValueRef.current.value;
if(emailValue===''){


    setEmail('this field cannot be empty')

}

else{
    if (emailValue !== "user@example.com") {
        setEmail("Email address not found");
      } else {
        setEmail('')
      }
}
if(passwordValue===''){


    setPassword('this field cannot be empty')

}

else{
    if (passwordValue !== "1Password") {

        setPassword("Incorrect password!");

      } else {
       setPassword('')
      }
}

    try {
      const data = await fetch(`${URL}`, {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!data.ok) {
        throw new Error("Something went wrong!");
      }
      const response = await data.json();
      console.log(response);
      navigate("/readbook", { replace: true, state: {} });
    } catch (error) {
      console.log(error);
    }
  };

  // AIzaSyA3XcDFDI03Ei7fzOA0F8xm0kX_4LhENGo
  return (
    <div className={classes.div}>
      <header>
        <nav className={classes.nav1}>
          <div>
            {" "}
            <img src={logo} alt="logo" className={classes.img11} />
          </div>

          <div className={classes.nav}>
            <Link to="" className={classes.a} style={{ display: "block" }}>
              {" "}
              Login
            </Link>
            <Link to="" className={classes.a}>
              Home
            </Link>
          </div>
        </nav>
        <form className={classes.form} onSubmit={submit}>
          <img src={logo} alt="logp" className={classes.img} />

          <div className={classes.div}>
            <p className={classes.p}>Email address</p>
            <input
              className={classes.input}
              type="email"
              placeholder="Enter your email address"
              ref={emailValueRef}
            />
            {email?<p className='error'>{email}</p>:''}
          </div>
          <div className={classes.div}>
            <p className={classes.p}>Password</p>
            <input
              className={classes.input}
              type="password"
              placeholder="Password"
              ref={passwordValueRef}
            />
            {password?<p className='error'>{password}</p>:''}
          </div>
          <button type="submit" className={classes.btn}>
            Login
          </button>
        </form>
      </header>
    </div>
  );
};
export default Login;
