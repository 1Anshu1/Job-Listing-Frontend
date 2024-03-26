import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(false);
        axios.get("http://localhost:8000").then().cathc();
    }, [url]);

    return { loading, data, error };
};

export { useFetch };
