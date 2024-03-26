import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearch, IoLocationOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Header from "../components/Header";
import { getJobApi } from "../utils/axiosInstance";

console.log();
const Homepage = () => {
    const navigate = useNavigate();
    const [skill, setSkill] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const handleClick = (e) => {
        if (!skill.includes(e.target.value)) {
            setSkill([...skill, e.target.value]);
        }
    };

    const handleClear = () => {
        setSkill([]);
    };

    const handleSearch = async () => {
        getJobApi(`/job?search=${search}`)
            .then((res) => {
                setLoading(false);
                setData(res.job);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    };

    const handleRemove = (item) => {
        console.log(item);
        const newSkill = skill?.filter((skill) => skill !== item);
        setSkill(newSkill);
    };

    const handleApplyFilter = async () => {
        setLoading(true);
        getJobApi(`/job?skills=${skill.join(",")}&company=google`)
            .then((res) => {
                setLoading(false);
                setData(res.job);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    };

    useEffect(() => {
        setLoading(true);
        getJobApi("/job/")
            .then((res) => {
                setLoading(false);
                setData(res.job);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="w-[100vw] mx-auto p-10">
                <div className="text-center text-xl font-semibold bg-white py-2 shadow-lg shadow-primaryRed mt-5 mb-20">
                    <div className="border-2 border-gray flex items-center w-[90%] mx-auto px-5 py-1 rounded-md">
                        <IoSearch />
                        <input
                            type="text"
                            className="outline-none ml-2"
                            placeholder="Type any job title"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                    <div className="flex justify-between gap-5 mt-5 w-[90%] mx-auto text-sm">
                        <select className="self-start border-2 border-gray-300 outline-none" onChange={handleClick}>
                            <option value="HTML" className="">
                                HTML
                            </option>
                            <option value="CSS" className="">
                                CSS
                            </option>
                            <option value="React.js" className="">
                                React.js
                            </option>
                            <option value="Node.js" className="">
                                Node.js
                            </option>
                            <option value="Javascript" className="">
                                Javascript
                            </option>
                            <option value="PHP" className="">
                                PHP
                            </option>
                            <option value="MySql" className="">
                                MySql
                            </option>
                            <option value="Software Development" className="">
                                Software Development
                            </option>
                            <option value="Machine Learning" className="">
                                Machine Learning
                            </option>
                        </select>
                        <div className="flex gap-2 self-start flex-wrap basis-[50%]">
                            {skill?.map((item) => (
                                <div key={item} className="flex bg-red-200">
                                    {item}
                                    <div
                                        className="cursor-pointer bg-primaryRed px-2"
                                        onClick={() => handleRemove(item)}
                                    >
                                        X
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="bg-primaryRed self-start basis-[15%] rounded-md px-5 py-1 text-white"
                            onClick={handleApplyFilter}
                        >
                            Apply Filter
                        </button>
                        <button
                            className="rounded-md self-start basis-[10%] px-5 py-1 text-primaryRed"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </div>

                <div className="flex gap-5 my-5">
                    {data?.map((job) => (
                        <div key={job._id} className=" basis-[50%] shadow-lg p-5 rounded-lg">
                            <div className="flex gap-4">
                                <img src={job.logoUrl} alt="" className="self-start w-20 h-20 rouded-lg" />
                                <div className="">
                                    <h1 className="font-bold text-xl">
                                        {job.position} ({job.jobType})
                                    </h1>
                                    <div className="flex items-center gap-4 text-gray-500 mt-2 font-bold">
                                        <h1 className=" text-md border-r border-gray-500 pr-4 mb-2">{job.company}</h1>
                                        <div className="flex items-center gap-2 border-r border-gray-500 pr-4">
                                            <IoLocationOutline />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">{job.workMode}</div>
                                    </div>
                                    <div className=" flex justify-between mb-2 text-gray-500">
                                        <div className="flex">
                                            <h2 className="px-2 font-bold">Salary:</h2>
                                            <div className="flex items-center gap-1">
                                                <LiaRupeeSignSolid />
                                                {job.salary} LPA
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <h2 className="px-2 font-bold">Experience:</h2>
                                            <div className="flex items-center gap-1">{8}+ years</div>
                                        </div>
                                    </div>

                                    <div className="flex text-gray-500 mb-2">
                                        <h2 className="px-2 font-bold">Skills:</h2>
                                        {job.skills.map((skill, idx) => (
                                            <div key={idx} className="flex items-center">
                                                {skill}
                                                <div className="w-1 h-1 rounded-full mx-2 bg-black" />
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="bg-primaryRed px-5 py-1 rounded-md text-white"
                                        onClick={() => navigate(`/job/${job._id}`)}
                                    >
                                        View Details
                                    </button>
                                    {localStorage.getItem("job-user") &&
                                    JSON.parse(localStorage.getItem("job-user")).role === "employer" ? (
                                        <button
                                            className={`bg-primaryRed ml-3 px-5 py-1 rounded-md text-white `}
                                            onClick={() => navigate(`/editjob/${job._id}`)}
                                        >
                                            Edit
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Homepage;
