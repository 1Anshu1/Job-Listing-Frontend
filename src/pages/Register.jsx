import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authApi } from "../utils/axiosInstance";

const Register = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await authApi("/user/register", userInfo);
            localStorage.setItem("job-token", JSON.stringify(data.token));
            localStorage.setItem("job-user", JSON.stringify(data.newUser));
            navigate("/");
        } catch (error) {
            toast.error(error);
        }
    };

    useEffect(() => {
        if(localStorage.getItem('job-token')){
            navigate('/')
        }
    },[navigate])

    return (
        <div className="flex items-center h-[100vh]">
            <div className="basis-[60%] px-10">
                <ToastContainer />
                <h1 className="text-2xl font-semibold">Create an account </h1>
                <p className="font-semibold">Your personal job finder is here</p>
                <form action="" className="flex flex-col gap-5 my-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                        className="border-2 border-gray-400 placeholder-black rounded-md px-2 py-2 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        className="border-2 border-gray-400 placeholder-black rounded-md px-2 py-2 outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Mobile"
                        name="mobile"
                        value={userInfo.mobile}
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
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            className=""
                            value={checked}
                            onChange={() => setChecked(!checked)}
                        />
                        <label htmlFor="terms" className="">
                            By cretaing an account, I agree to our terms of use and privacy policy
                        </label>
                    </div>
                    <button
                        className={`self-start bg-primaryRed rounded-md text-white py-1 px-3 ${
                            !checked ? "cursor-not-allowed opacity-70" : ""
                        }`}
                        disabled={!checked}
                    >
                        Create Account
                    </button>
                </form>
                <p className="">
                    Already have an account?
                    <Link to="/login" className="underline">
                        Login
                    </Link>
                </p>
            </div>
            <div className="bg-register-img bg-cover bg-no-repeat basis-[50%] h-[100vh]">
                <p className="text-white text-center text-2xl font-semibold p-5">Your Personal Job Finder</p>
            </div>
        </div>
    );
};
export default Register;
