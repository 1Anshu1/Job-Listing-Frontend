const Header = () => {
    return (
        <div className="relative flex justify-between bg-primaryRed rounded-b-3xl px-10 py-5">
            <div className="text-white font-semibold text-2xl">Jobfinder</div>
            <div className="flex gap-2">
                <button className="text-white bg-primaryRed border-2 border-white px-3 py-1 rounded-md">Login</button>
                <button className="text-primaryRed bg-white border-2 border-primaryRed px-3 py-1 rounded-md">
                    Register
                </button>
            </div>
        </div>
    );
};
export default Header;
