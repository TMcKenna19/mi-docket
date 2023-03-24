import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllTasks = () => {
    const [tasks, setAllTasks] = useState();
    useEffect( ()=> {
        axios.get("http://localhost:8000/api/tasks")
        .then(res => setAllTasks(res.data))
        .catch(err => console.log(err))
    }, []);

    return (
        <>
        <h3>All Tasks on the docket</h3>

        </>
    )

};

export default AllTasks;