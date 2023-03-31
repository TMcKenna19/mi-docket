import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";



const OneTask = props => {
    const [oneTask, setOneTask] = useState(null)
    const {_id} = useParams();
    const navigate = useNavigate();

    const handleDelete = _id => {
        axios.delete("http://localhost:8000/api/tasks/delete/" + _id)
        .then(()=> console.log(`${oneTask.name} deleted!`))
        .catch(err => console.log("Error: delete task", err))
        navigate("/")
    }
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/tasks/" + _id)
        .then(res => setOneTask(res.data[0]))
        .catch(err => console.log(err))
    }, [_id])
    return (
        <>
            {
                oneTask ? <div>
                <h2>{oneTask.name}</h2>
                <p>Priority: {oneTask.priority}</p>
                <p>Status: {oneTask.status}</p>
                <p>Due Date: {oneTask.dueDate}</p>
                <p>Notes: {oneTask.notes}</p>
                <button type="submit" className="btn btn-outline-danger mt-3" onClick={ ()=> handleDelete(oneTask._id)}>Delete Task</button>
                <Link to={`/update/${oneTask._id}`}><button type="submit" className="btn btn-outline-dark mt-3">Update Task</button></Link>
                </div> : ""
            }
        </>
    );
};

export default OneTask;