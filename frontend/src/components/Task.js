import { FaCheck, FaRegCircle, FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task`}>
      <h3>
        <div onClick={()=> {onToggle(task.id)}}>  
        {task.status == "Not Completed" ? (<FaRegCircle/>) : (<FaCheck/>)}
        </div>
        <div className={task.status == "Completed" ? `cross`: ``}> 
        {task.name}</div>

        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
        
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
