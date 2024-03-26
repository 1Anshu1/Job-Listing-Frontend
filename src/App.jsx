import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobdetail from "./pages/Jobdetail";
import Addjob from "./pages/Addjob";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/job/:jobid" element={<Jobdetail />} />
                <Route path="/addjob" element={<Addjob heading={"Add"} />} />
                <Route path="/editjob/:jobid" element={<Addjob heading={"Edit"} />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
