import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
const API = process.env.REACT_APP_API_URL;


function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await axios.get(`${API}/tasks`);
    setTasks(res.data);
  };


  const addTask = async () => {
    if (!title) return;

    await axios.post(`${API}/tasks`, { title });
    setTitle("");
    loadTasks();
  };


  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="app-container">
      <h2>Task Manager</h2>

      <div className="input-box">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t._id}>
            {t.title}
            <button
              className="delete-btn"
              onClick={() => deleteTask(t._id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
