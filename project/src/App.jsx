import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Showtask from "./components/Showtask";

function App() {
  const [taskArr, setTaskArr] = useState([]);
  const [id, setId] = useState(1);

  const task = JSON.parse(localStorage.getItem("task"));

  return (
    <div>
      <TaskForm
        setTaskArr={setTaskArr}
        taskArr={taskArr}
        preid={id}
        setId={setId}
      />
      <Showtask task={task} taskArr={taskArr} setTaskArr={setTaskArr} />
    </div>
  );
}

export default App;
