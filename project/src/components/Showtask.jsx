import Row from "./Row";

function Showtask({ task }) {
  return (
    <div>
      {task.map((task, i) => (
        <Row key={i} task={task} />
      ))}
    </div>
  );
}

export default Showtask;
