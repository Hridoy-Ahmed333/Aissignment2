function Row({ task }) {
  return (
    <div>
      <div>{task.task}</div>
      <button>delete</button>
    </div>
  );
}

export default Row;
