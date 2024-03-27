import axios from "axios";

const authApi = async (url, payload) => {
    try {
        const { data } = await axios.post(`http://localhost:8000/api/v1${url}`, payload);
        return data;
    } catch (error) {
        if (!error.response) throw error.message;
        throw error.response.data.message;
    }
};

const getJobApi = async (url) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/api/v1${url}`);
        return data;
    } catch (error) {
        if (!error.response) throw error.message;
        throw error.response.data.message;
    }
};


const postJobApi = async (url, payload) => {
    const token = JSON.parse(localStorage.getItem("job-token"));
    try {
        const { data } = await axios.post(`http://localhost:8000/api/v1${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        if (!error.response) throw error.message;
        throw error.response.data.message;
    }
};

const updateJobApi = async (url, payload) => {
    const token = JSON.parse(localStorage.getItem("job-token"));
    try {
        const { data } = await axios.patch(`http://localhost:8000/api/v1${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        if (!error.response) throw error.message;
        throw error.response.data.message;
    }
};

export { authApi, postJobApi, getJobApi, updateJobApi };
