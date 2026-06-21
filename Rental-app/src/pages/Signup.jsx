import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Logo from './../assets/Logo';
import { useNavigate } from 'react-router-dom';
import Spinner from './../assets/Spinner';

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setLoading(false);
            navigate("/login");
        } catch (error) {
            console.error("Error signing up:", error);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{
            background: "linear-gradient(135deg, #0a1628 50%, #ffffff 50%)"
        }}>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow">
                <Logo size="md"  />
                <h2 className="text-xl  font-serif text-center">
                    Signup
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <span className="text-red-500 px-2">*</span>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border font-sans border-gray-300 rounded-xl outline-none"
                        />
                    </div>
                    <div className="my-4">
                        <label htmlFor="lastname">Last Name</label>
                        <span className="text-red-500 px-2">*</span>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border font-sans border-gray-300 rounded-xl outline-none"
                        />
                    </div>
                    <div className="my-4">
                        <label htmlFor="email">Email</label>
                        <span className="text-red-500 px-2">*</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border font-sans border-gray-300 rounded-xl outline-none"
                        />
                    </div>
                    <div className="my-6">
                        <label htmlFor="password">Password</label>
                        <span className="text-red-500 px-2">*</span>
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
                        {loading ? <Spinner size="sm" color="white" /> : "Signup"}
                    </button>
                </form>
            </div>
        </div>
    )
}

