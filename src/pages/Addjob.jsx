import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postJobApi } from "../utils/axiosInstance";

const Addjob = ({ heading }) => {
    const navigate = useNavigate();
    const { jobid } = useParams();

    const [jobDetails, setJobDetails] = useState({
        company: "",
        logoUrl: "",
        position: "",
        salary: 0,
        jobType: "",
        workMode: "",
        location: "",
        description: "",
        aboutCompany: "",
        skills: "",
        information: "",
    });

    const handleChange = (e) => {
        setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postJobApi("/job/addjob", jobDetails)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        setLoading(true);
        getJobApi(`/job/${jobid}`)
            .then((res) => {
                setLoading(false);
                setData(res.job);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, [jobid]);

    return (
        <div className="flex items-center h-[100vh]">
            <div className="basis-[60%] px-10">
                <h1 className="text-2xl font-semibold">{heading} job description</h1>
                <form action="" className="flex flex-col gap-2 my-3" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-5">
                        <label htmlFor="name" className="w-40">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="company"
                            placeholder="Enter your company name here"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="logo" className="w-40">
                            Add logo URL
                        </label>
                        <input
                            type="text"
                            id="logo"
                            name="logoUrl"
                            placeholder="Enter the link"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="position" className="w-40">
                            Job position
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            placeholder="Enter job position"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="salary" className="w-40">
                            Monthly Salary
                        </label>
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            placeholder="Enter CTC in lakhs"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="type" className="w-40">
                            Job Type
                        </label>
                        <select
                            name="jobType"
                            id="type"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        >
                            <option value="Internship">Internship</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Freelance">Freelance</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="job-mode" className="w-40">
                            Job Mode
                        </label>
                        <select
                            name="workMode"
                            id="job-mode"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        >
                            <option value="Remote">Remote</option>
                            <option value="Office">Office</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="location" className="w-40">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Enter Location"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="description" className="w-40">
                            Job Description
                        </label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Type the job description"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full h-20 resize-none overflow-hidden rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="about" className="w-40">
                            About Company
                        </label>
                        <textarea
                            type="text"
                            id="about"
                            name="aboutCompany"
                            placeholder="Type about your company"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full h-20 resize-none overflow-hidden rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="skills" className="w-40">
                            Skills Required
                        </label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            placeholder="Enter the skills comma separated"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="information" className="w-40">
                            Information
                        </label>
                        <input
                            type="text"
                            id="information"
                            name="information"
                            placeholder="Enter the additional information"
                            onChange={handleChange}
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex gap-2 self-end">
                        <button
                            className="border border-gray-400 rounded-md text-primaryRed font-semibold py-1 px-3"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-primaryRed rounded-md text-white py-1 px-3">
                            {heading} Job
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-addjob-img bg-cover bg-center bg-no-repeat basis-[50%] h-[100vh]">
                <p className="text-white text-center text-2xl font-semibold p-5">Making the hiring process smooth</p>
            </div>
        </div>
    );
};
export default Addjob;
