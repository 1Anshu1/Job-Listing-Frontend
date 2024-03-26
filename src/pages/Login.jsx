import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authApi } from "../utils/axiosInstance";

const Login = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await authApi("/user/login", userInfo);
            localStorage.setItem("job-token", JSON.stringify(data.token));
            localStorage.setItem("job-user", JSON.stringify(data.user));
            navigate("/");
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("job-token")) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="flex items-center h-[100vh]">
            <div className="basis-[60%] px-10">
                <h1 className="text-2xl font-semibold">Already have an account? </h1>
                <p className="font-semibold">Your personal job finder is here</p>
                <form action="" className="flex flex-col gap-5 my-3" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        className="border-2 border-gray-400 placeholder-black rounded-md px-2 py-2 outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleChange}
                        className="border-2 border-gray-400 placeholder-black rounded-md px-2 py-2 outline-none"
                    />

                    <button className="self-start bg-primaryRed rounded-md text-white py-1 px-3">Login</button>
                </form>
                <p className="">
                    Do not have an account?
                    <Link to="/register" className="underline">
                        Register
                    </Link>
                </p>
            </div>
            <div className="bg-register-img bg-cover bg-no-repeat basis-[50%] h-[100vh]">
                <p className="text-white text-center text-2xl font-semibold p-5">Your Personal Job Finder</p>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Login;
