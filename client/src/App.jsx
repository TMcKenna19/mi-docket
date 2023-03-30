import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import AllTasks from './Components/AllTasks';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import OneTask from './Components/OneTask';


function App() {
  return (
    <div className="App">
      <h1> <Link to={"/"}>Mi Docket</Link> | <Link to={"/add"}> Add Task </Link></h1>
      <Routes>
        <Route path='/' element={<AllTasks/>} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/updatetask/:_id" element={<UpdateTask />} />
        <Route path="/task/:_id" element={<OneTask />} />
      </Routes>
    </div>
  );
}

export default App;
