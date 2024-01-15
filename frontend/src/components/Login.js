// import { json } from 'express';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         navigate("/");
    //     }
    // }, []);

    const handleLogin = async () => {
        // console.warn("email,password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //   let data =await result.json()
          if (result.status === 200) {
            console.log('Logged In Successfully!');
            let data = await result.json();
            localStorage.setItem("user", JSON.stringify(data))
            navigate('/');
          } else {
            alert('Incorrect credentials.');
          }
        
        // console.warn(result,"dfgh");
        // if (result) {
          
        //     navigate("/");
        // }
        // else {
        //     alert("incorrect....")
        // }
    }




    return (
        <div className='login'>
            <h1>Login</h1>
            <br />
            <br />
            <input type="text" placeholder='Enter email'
                value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="password" placeholder='Enter Password'
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <button className='button1' onClick={handleLogin} type='button'>Login</button>
        </div>
    )
}
export default Login;