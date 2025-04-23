import React, { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        userName: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("https://your-api.com/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Signup failed.");
            }

            setSuccess("Signup successful! You can now sign in.");
            setFormData({
                firstName: "",
                secondName: "",
                userName: "",
                password: "",
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="Signup">
            <div>
                <img
                    src="./logo.png"
                    alt="school logo"
                    className="h-40 w-60 mx-auto mt-2"
                />
            </div>

            <div
                id="form"
                className="bg-slate-600 text-white p-4 w-fit mx-auto mt-1 px-20 py-20 rounded-xl"
            >
                <label htmlFor="firstName">Firstname:</label><br />
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-80 h-12 rounded-md text-black text-left mt-2"
                    required
                /><br />

                <label htmlFor="secondName">Secondname:</label><br />
                <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    className="w-80 h-12 text-black text-left rounded-md mt-2"
                    required
                /><br />

                <label htmlFor="userName">Username:</label><br />
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-80 h-12 rounded-lg text-black text-left mt-2"
                    required
                /><br />

                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-80 h-12 rounded-lg text-black text-left mt-2"
                    required
                /><br /><br />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-40 h-12 rounded-lg bg-blue-950 cursor-pointer hover:bg-blue-900"
                >
                    {loading ? "Signing up..." : "Signup"}
                </button>

                {error && <p className="text-red-400 mt-4">{error}</p>}
                {success && <p className="text-green-400 mt-4">{success}</p>}

                <p className="text-white pt-10">
                    If you already have an account?{" "}
                    <span className="text-blue-950 hover:underline hover:text-blue-900 cursor-pointer">
                        Signin here
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
