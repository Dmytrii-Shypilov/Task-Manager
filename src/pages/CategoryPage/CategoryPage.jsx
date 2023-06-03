import s from "./category-page.module.scss";

import { useState } from "react";

import Container from "../../components/Container";
import ControlsPanel from "../../components/ControlsPanel";
import StatusPanel from "../../components/StatusPanel/StatusPanel";
import Task from "../../components/Task";

import { projects } from "../../data";

const CategoryPage = () => {
  const [task, setTask] = useState({ visible: false, name: null });

  const openTask = (task) => {
    setTask({
      visible: true,
      name: task,
    });
  };

  const statuslist = projects[0].tasks[0].statusList.map((status) => {
    return <StatusPanel openTask={openTask} status={status} />;
  });

  return (
    <section>
      <Container>
        <div className="page-section">
          <h2 className="page-title">Category</h2>
          {!task.visible && (
            <div className={s.controls}>
              <ControlsPanel type="category" />
            </div>
          )}
          {!task.visible ? (
            <div className={s.tasksWrapper}>{statuslist}</div>
          ) : (
            <Task />
          )}
        </div>
      </Container>
    </section>
  );
};

export default CategoryPage;
