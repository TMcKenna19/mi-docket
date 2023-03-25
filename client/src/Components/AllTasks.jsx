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
        <div>
        {
            tasks ? tasks.map((tasks, i) => <div key={i} className="taskCard">
                <h3>{tasks.name}</h3>
                <h3>{}</h3>
                <h3>{}</h3>
            </div>) : "No tasks on the docket"
        }

        </div>
        

        </>
    )

};

export default AllTasks;