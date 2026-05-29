import { useState } from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi";
import {useNavigate} from "react-router-dom"
import Logo from './../assets/Logo';
import Spinner from './../assets/Spinner';

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const response = await fetch("http://localhost:5000/api/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
                })
                const data = await response.json();
                console.log(data);
                setEmail("");
                setPassword("");
                setLoading(false);
                navigate("/home")

        }catch(error){
            console.error("Login error:", error);
            setLoading(false);
        }

    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200" 
          style={{
              background: "linear-gradient(135deg, #0a1628 50%, #ffffff 50%)"
          }}
    >
       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow">
              <Logo size="lg" />
              <h2 className="text-xl  font-serif text-center">
                Login
            
              </h2>
             
              <form onSubmit={handleSubmit} >
                  <div>
                   <label htmlFor="email">Email</label>
                   <span className="text-red-500 px-2">*</span>
                  <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2  border font-sans border-gray-300 rounded-xl outline-none"
                  />
                  </div>
                  <div className="my-4">
                    <label htmlFor="password">Password</label>
                  <div className="w-full flex px-3 py-2 border border-gray-300 rounded-xl ">
                  <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full  border-none focus:ring-0 outline-none"
                  />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className=""
                    >
                          {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </button>
                  </div>
                  </div>
                  <button type="submit" className="w-full py-2 bg-navy text-white rounded hover:bg-navy-light" disabled={loading}>
                      {loading ? <div className="flex items-center justify-center">
                            <Spinner size="sm" color="white" />
                            <span className="ml-2">Loading...</span>
                      </div> : "Login"}
                  </button>
              </form>
       </div>
    </div>
  )
}

