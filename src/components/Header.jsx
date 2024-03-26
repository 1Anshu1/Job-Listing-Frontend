import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("job-token");
        localStorage.removeItem("job-user");
        navigate("/");
    };
    return (
        <div className="relative flex justify-between bg-primaryRed rounded-b-3xl px-10 py-5">
            <Link to="/" className="text-white font-semibold text-2xl">
                Jobfinder
            </Link>
            {localStorage.getItem("job-token") ? (
                <div className="flex gap-5 items-center">
                    <h1 className="text-white text-xl font-bold">
                        Hello {JSON.parse(localStorage.getItem("job-user")).name}
                    </h1>
                    <button className="text-white bg-primaryRed border-2 border-white px-3 py-1 rounded-md">
                        <Link to="/" onClick={handleLogout}>
                            Logout
                        </Link>
                    </button>
                </div>
            ) : (
                <div className="flex gap-2">
                    <Link to="/login">
                        <button className="text-white bg-primaryRed border-2 border-white px-3 py-1 rounded-md">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="text-primaryRed bg-white border-2 border-primaryRed px-3 py-1 rounded-md">
                            Register
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};
export default Header;
