import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateTask = props => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        notes: "",
        priority: "",
        status: "",
        dueDate: ""
    });

    useEffect(()=> {
        axios.get("http://localhost:8000/api/tasks/" + _id)
        .then(res => setFormData(res.data[0]))
        .catch(err => console.log(err))
    }, [_id]);

    const [formErrors, setFormErrors] = useState({})

    const changeHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})    
    }

    const formHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/tasks/update/" + _id, formData)
        .then(res => {
            if(res.data.error) {
                console.log("error: form submit")
                setFormErrors(res.data.error.errors)
            }else {
                console.log("form submit successful")
                navigate("/")
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <h2>Update Task</h2>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="name">Task Name: </label>
                    <input type="text" name="name" id="name" className="form-control" value={formData.name} onChange={changeHandler} />
                    { formErrors.name ? <span>{formErrors.name.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="notes">Notes: </label>
                    <textarea type="text" name="notes" id="notes" className="form-control" value={formData.notes} onChange={changeHandler} />
                    { formErrors.notes ? <span>{formErrors.notes.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="priority">Priority: </label>
                    <input type="text" name="priority" id="priority" className="form-control" value={formData.priority} onChange={changeHandler} />
                    { formErrors.priority ? <span>{formErrors.priority.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="priority">Status: </label>
                    <input type="text" name="status" id="status" className="form-control" value={formData.status} onChange={changeHandler} />
                    { formErrors.status ? <span>{formErrors.status.message}</span> : ""}
                </div>
                <div>
                    <label htmlFor="dueDate">Due Date: </label>
                    <input type="text" name="dueDate" id="dueDate" className="form-control" value={formData.dueDate} onChange={changeHandler} />
                    { formErrors.dueDate ? <span>{formErrors.dueDate.message}</span> : ""}
                </div>
                
                <button type="submit" className="btn btn-outline-dark mt-3">Update Task</button>
            </form>
        </div>
    );
};

export default UpdateTask;