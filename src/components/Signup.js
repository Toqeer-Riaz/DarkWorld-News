import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/singup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if (json.authtoken) {
            console.log(json.authtoken);
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            // props.showAlert("Sucsessfuly Signup!", "success");
            history.push("/getstart");

        }
        else {
            console.log(json);
            // props.showAlert("failed to Signup!", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="h-screen bg-indigo-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
                <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Register</h1>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="username">Username</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text"
                            name="name" id="username" placeholder="username" value={credentials.name} onChange={onChange} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" name="email"
                            id="email" placeholder="@email" value={credentials.email} onChange={onChange} />
                    </div>
                    <div>
                        <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
                        <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password"
                            value={credentials.password} onChange={onChange} name="password" id="password" placeholder="password" />
                    </div>
                    <button type="submit"
                        className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>

                </form>
            </div>
        </div>
    )
}

export default Signup
