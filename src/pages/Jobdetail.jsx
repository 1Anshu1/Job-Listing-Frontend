import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { getJobApi } from "../utils/axiosInstance";

const Jobdetail = () => {
    const { jobid } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

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
        <div className="bg-red-100 pb-5">
            <Header />
            <div className="max-w-[60%] mx-auto">
                <div className="text-center text-xl font-semibold bg-white py-2 shadow-lg shadow-primaryRed relative bottom-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos nam inventore a
                    suscipit amet autem dolore eos officia tenetur!
                </div>

                <div className="bg-white p-5 shadow-lg my-5  shadow-primaryRed">
                    <div className="flex items-center gap-2 text-gray-400 my-2">
                        <div className="">1w ago</div>
                        <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                        <div className="">{data?.jobType}</div>
                    </div>
                    <div className="text-2xl font-bold ">{data?.position}</div>
                    <div className="text-primaryRed font-semibold">{data?.location} | India</div>
                    <div className="flex gap-5 mt-5 text-gray-400">
                        <div className="w-28">Salary</div>
                        <div className="">Duration</div>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-28">{data?.salary} lpa</div>
                        <div className="">6 Months</div>
                    </div>
                    <div className="mt-10">
                        <div className="font-bold">About Company</div>
                        <div className="my-5">{data?.aboutCompany} </div>
                    </div>
                    <div className="mt-10 font-bold">About the job/internship</div>
                    <div className="my-5">{data?.description}</div>
                    <div className="mt-10 font-bold">Skill(s) required</div>
                    <div className="flex flex-wrap gap-5 my-3">
                        {data.skills &&
                            data.skills.map((skill, idx) => (
                                <div key={idx} className="rounded-full bg-red-200 px-5">
                                    {skill}
                                </div>
                            ))}
                        {/* {
                            data?.skills[0]?.split(",").map((skill, idx) => (
                                <div key={idx} className="rounded-full bg-red-200 px-5">
                                    {skill}
                                </div>
                            ))} */}
                    </div>
                    <div className="mt-10 font-bold">Additional Information</div>
                    <div className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias tenetur
                        repellendus facilis unde iusto aspernatur asperiores harum consequatur illo, soluta voluptates
                        explicabo ullam, aliquid maxime perspiciatis eveniet cum vero pariatur veniam! Dicta rem nobis
                        perspiciatis sed ipsa, exercitationem magni.
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Jobdetail;
