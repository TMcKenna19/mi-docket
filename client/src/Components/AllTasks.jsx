import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllTasks = () => {
    const [tasks, setAllTasks] = useState(null);
    useEffect( ()=> {
        axios.get("http://localhost:8000/api/tasks")    
        .then(res => setAllTasks(res.data))
        .catch(err => console.log(err))
    }, []);

    return (
        <>
        <h3>All Tasks on the docket</h3>
        <div className="flex">
        {
            tasks ? tasks.map((task, i) => <div key={i} className="taskCard">
                <Link to={`/task/${task._id}`}>
                    <h3>{task.name}</h3>
                    <h3>Priority: {task.priority}</h3>
                    <h3>Status: {task.status}</h3>
                </Link>
            </div>) : "No tasks on the docket"
        }

        </div>
        

        </>
    )

};

export default AllTasks;