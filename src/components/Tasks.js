
const Tasks = ({tasks}) => {
    
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

Tasks.defaultProps = {};

Tasks.prototype = {};

export default Tasks;
