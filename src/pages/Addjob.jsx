import { Link } from "react-router-dom";
import { useState } from "react";

const Addjob = () => {
    const handleSubmit = () => {};

    return (
        <div className="flex items-center h-[100vh]">
            <div className="basis-[60%] px-10">
                <h1 className="text-2xl font-semibold">Add job description</h1>
                <form action="" className="flex flex-col gap-2 my-3" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-5">
                        <label htmlFor="name" className="w-40">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your company name here"
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
                            placeholder="Enter the link"
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
                            placeholder="Enter job position"
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="salary" className="w-40">
                            Monthly Salary
                        </label>
                        <input
                            type="text"
                            id="salary"
                            placeholder="Enter amount in rupees"
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="type" className="w-40">
                            Monthly Salary
                        </label>
                        <select name="" id="type ">
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="job-location" className="w-40">
                            Remote/office
                        </label>
                        <select
                            name=""
                            id="job-location"
                            className="border-2 border-gray-400 rounded-md w-fit outline-none"
                        >
                            <option value="">SDE</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="location" className="w-40">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Enter Location"
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
                            placeholder="Type the job description"
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
                            placeholder="Type about your company"
                            className="border-2 border-gray-400 w-full h-20 resize-none overflow-hidden rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="skills" className="w-40">
                            Skills Required
                        </label>
                        <select
                            name=""
                            id="skills"
                            placeholder="Enter the must have skills"
                            className="border-2 border-gray-400 rounded-md w-full outline-none"
                        >
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="flex items-center gap-5">
                        <label htmlFor="information" className="w-40">
                            Information
                        </label>
                        <input
                            type="text"
                            id="information"
                            placeholder="Enter the additional information"
                            className="border-2 border-gray-400 w-full  rounded-md px-2 py-2 outline-none"
                        />
                    </div>
                    <div className="flex gap-2 self-end">
                        <button className="border border-gray-400 rounded-md text-gray-400 py-1 px-3">Cancel</button>
                        <button className="bg-primaryRed rounded-md text-white py-1 px-3">+ Add Job</button>
                    </div>
                </form>
            </div>
            <div className="bg-addjob-img bg-cover bg-center bg-no-repeat basis-[50%] h-[100vh]">
                <p className="text-white text-center text-2xl font-semibold p-5">Your Personal Job Finder</p>
            </div>
        </div>
    );
};
export default Addjob;
