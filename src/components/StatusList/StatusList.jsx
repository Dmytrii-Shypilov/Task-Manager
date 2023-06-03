import s from "./status-list.module.scss";

const StatusList = ({ openTask, tasks }) => {
  const list = tasks.map((task) => {
    return (
      <li key={task.id} id={task.id} className={s.task} onClick={openTask}>
          <span className={s.name}>{task.name}</span> 
        <div>
          <span className={s.assignee}>{task.assignee.name}</span>
          <span className={s.assigner}>Assigned by: {task.assigner.name}</span>
        </div>
      </li>
    );
  });

  return <ul>{list}</ul>;
};

export default StatusList