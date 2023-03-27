import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const OneTask = props => {
    const [oneTask, setOneTask] = useState(null)
    const {_id} = useParams();
    
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
                </div> : ""
            }
        </>
    );
};

export default OneTask;