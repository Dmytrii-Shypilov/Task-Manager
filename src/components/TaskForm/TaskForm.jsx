import { Form } from "react-router-dom";
import s from "./task-form.module.scss";

import FilterInput from "../FilterInput";

import { projects } from "../../data";

const TaskForm = () => {
  return (
    <form className={s.form}>
      <fieldset className={s.fieldset}>
        <div className={s.field}>
          <label className="label" htmlFor="">
            Task name
          </label>
          <input className="input-field" type="text" />
        </div>
        <div className={s.field}>
          <label className="label" htmlFor="">
            Description
          </label>
          <textarea className={s.textarea} type="text" />
        </div>
        <div className={s.field}>
          <label className="label" htmlFor="">
            Assignee
          </label>
          <FilterInput contributors={projects[0].contributors} />
        </div>
        <div>
            <label className="label" htmlFor="">Deadline</label>
          <div className={s.dateTime}>
            <input id="date" className={s.date} type="date" />
            <input id="time" className={s.time} type="time" />
          </div>
        </div>
      </fieldset>
      <div className={s.btnWrap}>
        <button className="button">Add</button>
      </div>
    </form>
  );
};

export default TaskForm;
