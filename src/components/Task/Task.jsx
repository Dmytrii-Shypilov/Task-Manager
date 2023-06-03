import s from "./task.module.scss";

import { projects } from "../../data";

import ControlsPanel from "../ControlsPanel";
import MaterialsList from "../MaterialsList";
import TaskMeta from "../TaskMeta";

const Task = () => {
  return (
    <div className={s.task}>
      <h3 className="section-title">Post instagram photo</h3>
      <div className={s.controlsPanel}>
        <ControlsPanel type="task" />
      </div>

      <div className={s.infoBlock}>
        <div className={s.taskInfo}>
          <p className={s.description}>Some description for a task assigned</p>
          <div className={s.materials}>
            <MaterialsList materials={projects[0].materials} />
          </div>
        </div>
        <TaskMeta />
      </div>
      <div className={s.comments}></div>
    </div>
  );
};

export default Task;
