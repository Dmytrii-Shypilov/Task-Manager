import s from "./name-form.module.scss";

import { projects } from "../../data";

import { useState } from "react";
import FilterInput from "../FilterInput";

const NameForm = () => {
  const [contributor, setContributor] = useState({
    isAdmin: false,
    name: null,
  });

  const handleCheckbox = (e) => {
    setContributor((prevState) => {
      return {
        ...prevState,
        isAdmin: e.target.checked,
      };
    });
  };

  return (
    <form className={s.form} action="">
      <fieldset className={s.fieldset}>
        <div>
          <label className="label" htmlFor="name">
            Choose person
          </label>
          <FilterInput id="name" contributors={projects[0].contributors} />
        </div>
        <div className={s.adminBox}>
          <label className={s.label} htmlFor="role">
            Admin
          </label>
          <input
            className={s.box}
            type="checkbox"
            id="role"
            checked={contributor.isAdmin}
            onChange={handleCheckbox}
          />
        </div>
      </fieldset>
      <div className={s.btnWrapper}>
        <button className="button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default NameForm;
