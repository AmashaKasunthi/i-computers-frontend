// Import Link component from react-router-dom for navigation
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Login Page Component
export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function login(){
		console.log(email)
		console.log(password)
		axios.post("http://localhost:3000/users/login", {
			email :email,
			password :password
		}).then(
			()=>{
				console.log("Login Successful")
			}
		).catch(
			(error)=>{
				console.log(error)
			}
		)
	}

	return (
// Main container with full width & height and background image
		<div className="w-full h-full bg-[url('/background1.jpg')] bg-cover no-repeat bg-center flex">
{/* Left side - Logo section */}
			<div className="w-[50%] h-full flex justify-center items-center flex-col">
 {/* App Logo */}
				<img src="/logo.png" className="w-120" />
				
			</div>
 {/* Right side - Login form section */}
			<div className="w-[55%] h-full  flex justify-center items-center">
{/* Glassmorphism login card */}
				<div className="backdrop-blur-3xl w-112.5 h-150 shadow-2xl rounded-lg flex flex-col justify-center">
                    {/* Email input field */}
					<input
						type="email"
						placeholder="Email"
						onChange={
							(e)=>{
								setEmail(e.target.value)
							}
						}
						className="m-5 p-3 w-[90%] h-12.5 rounded-lg border border-secondary outline-none"
					/>
                    	{/* Password input field */}
					<input
						type="password"
						placeholder="Password"
						onChange={
							(e)=>{
								setPassword(e.target.value)
							}
						}
						className="m-5 p-3 w-[90%] h-12.5 rounded-lg border border-secondary outline-none"
					/>
                    {/* Forgot password link */}
					<p className="w-full text-left pl-5 ">
						Forgot Password?{" "}
						<Link to="/forgot-password" className="text-accent ">
							Reset
						</Link>
					</p>
                    {/* Login button */}
					<button onClick={login} className="m-5 p-3 w-[90%] h-12.5 bg-accent rounded-lg text-white font-bold">
						Login
					</button>
                    {/* Google login button */}
					<button  className="m-5 p-3 w-[90%] h-12.5 border border-accent rounded-lg text-white font-bold">
						Login with Google
					</button>
                    {/* Register link */}
					<p className="w-full  text-left pl-5">
						Don't have an account?{" "}
						<Link to="/register" className="text-accent">
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
