import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () =>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
   useEffect(() =>{
   const auth = localStorage.getItem('user')
   if(auth) {
    navigate("/")
   }
   },[])


    const handleLogin = async () =>{
        console.log(email,password)
        let result = await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()
        console.log(result)
        if(result) {
          localStorage.setItem("user",JSON.stringify(result))
          navigate("/")
        } else {
            alert("Please enter connect details")
        }
    }
    return (
        <div className='login'>
            <input type="text" className='inputBox' placeholder='enter Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="password" className='inputBox' placeholder='enter Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button  className='appButton' type='button' onClick={handleLogin} >Login</button>
        </div>
    )
}

export default Login