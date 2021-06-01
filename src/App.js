import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => {
  const baseUrl = "https://task-manager-backend-api.herokuapp.com"
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${baseUrl}/all`);
    const data = await res.json();
    
    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${baseUrl}/all/${id}`);
    const data = await res.json();
    
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`${baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data[0]]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`${baseUrl}/task/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  // Toggle Status
  const toggleStatus = async (id) => {
    const taskToToggle = await fetchTask(id);
    var stat = taskToToggle[0].status == "Not Completed" ? "Completed" : "Not Completed"
    const updTask = { ...taskToToggle[0], status: stat};

    const res = await fetch(`${baseUrl}/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
  
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: data[0].status } : task
      )
    );
  };

  return (
    
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleStatus}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
      </div>
    
  );
};

export default App;
