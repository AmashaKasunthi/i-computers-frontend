// Import Link component from react-router-dom for navigation
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

// Login Page Component
export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()

	// function login(){
		
	// 	axios.post("http://localhost:3000/users/login",
	// 		{
	// 			email : email,
	// 			password : password
	// 		}
	// 	).then(
	// 		(response)=>{
	// 			console.log(response)
	// 		}
	// 	).catch(
	// 		(error)=>{
	// 			console.log(error)
	// 			console.log("Login Failed")
	// 		}
	// 	)
	// }

	async function login(){
		try{
			const response = await axios.post(import.meta.env.VITE_API_URL + "/users/login",
				{
					email : email,
					password : password
				}
			)
			console.log(response)
			toast.success("Login Successful")

			localStorage.setItem("token" , response.data.token)
			
			if(response.data.role == "admin"){
				
				navigate("/admin/")
			}else{
				//redirect to home page "/"
			}
		}catch(error){
			console.log(error)
			//alert("Login Failed")
			toast.error("Login Failed")
		}
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
					<button  className="m-5 p-3 w-[90%] h-12.5 border border-accent rounded-lg text-white font-bold flex items-center justify-center gap-3"> <FaGoogle />
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
