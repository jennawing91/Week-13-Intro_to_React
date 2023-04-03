//import React, {useState} from 'react';
//import "./Login.css";
//import {Link, useHistory} from "react-router-dom";
//import LooksIcon from '@mui/icons-material/Looks';
//import {auth} from "./Firebase";

// function Login() {
//     const history = useHistory();
//     const [{email, setEmail}] = useState('');
//     const [{password, setPassword}] = useState('');
//     const signIn = e => {
//         e.preventDefault();
//          auth
//              .signInWithEmailAndPassword(email, password)
//              .the(auth => {
//                  if (auth) {
//                      history.push('/');
//                  }
//              })
//             .catch(error => alert(error.message))
//     }
//     const register = e => {
//         e.preventDefault();
//         auth
//             .createUserWithEmailAndPassword(email, password)
//             .the(auth => {
//                 if (auth) {
//                 history.push('/');
//                 }
//             })
//             .catch(error => alert(error.message))
//     }

//     return (
//         <div className="login">
//             <Link to='/' style={{textDecoration: "none"}}>
//                 <div className="login_logo">
//                     <LooksIcon className="login_logoImage" fontsize="large" />
//                     <h2 className="login_logoTitle">All Things Rainbow Shop</h2>
//                 </div>
//             </Link>

//             <div className="login_container">
//                 <h1>Sign-In</h1>
//                 <form>
//                     <h5>Email</h5>
//                     <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
//                     <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
//                     <button type="submit" className="login_signInButton" onClick={signIn}>Sign In</button>
//                 </form>
//                 <p>By signing-in you agree to the All Things Rainbow Shop website Conditions of Use and Sale. Please see our 
//                     Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//                 </p>
//                 <button className="login_registerButton" onClick={register}>Create Your Account</button>
//             </div>
//         </div>
//     )
// }

// export default Login;