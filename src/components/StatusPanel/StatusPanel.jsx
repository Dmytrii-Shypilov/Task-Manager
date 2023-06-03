import s from "./status-panel.module.scss";


import { projects } from "../../data.js";


import StatusList from "../StatusList/StatusList.jsx";

const StatusPanel = ({openTask, status}) => {
  const tasks = projects[0].tasks[0].tasks.filter(el => el.status === status)
  return (
    <div className={s.panel}>
      <h3 className="section-title">{status}</h3>
      <StatusList openTask={openTask} tasks={tasks}/>
    </div>
  );
};

export default StatusPanel;
