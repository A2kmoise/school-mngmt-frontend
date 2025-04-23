import React, { useState } from "react";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div id="Signin">
            <div>
                <img src="./logo.png" alt="school logo" className="h-40 w-60 mx-auto mt-10" />
            </div>

            <form 
                onSubmit={handleSubmit} 
                className="bg-slate-600 text-white p-4 w-fit mx-auto mt-1 px-20 py-20 rounded-xl"
            >
                <label htmlFor="email">Email:</label><br />
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-80 h-12 rounded-md text-black text-left mt-2"
                /><br />

                <label htmlFor="password">Password:</label><br />
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-80 h-12 rounded-md text-black text-left mt-2"
                /><br /><br />

                <button 
                    type="submit" 
                    className="w-40 h-12 rounded-lg bg-blue-950 cursor-pointer hover:bg-blue-900"
                >
                    Sign In
                </button>

                <p className="text-white pt-10">
                    Don’t have an account?{" "}
                    <span className="text-blue-950 hover:underline hover:text-blue-900 cursor-pointer">
                        Signup here
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signin;
