import { useState } from "react";

function TaskForm({ setTaskArr, taskArr, preid, setId }) {
  const [text, setText] = useState("");
  function handleAdd() {
    setTaskArr(() => [...taskArr, { id: preid, task: text }]);
    localStorage.setItem(
      "task",
      JSON.stringify([...taskArr, { id: preid, task: text }])
    );
    setId(preid + 1);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
}

export default TaskForm;
