import s from "./name-fieldset.module.scss";

import { projects } from "../../../data";

import { useState } from "react";

const NameFieldset = () => {
    const [isAdmin, setIsAdmin] = useState(false)
  const names = projects[0].contributors.map((contributor) => {
    return <option value={contributor.name}>{contributor.name}</option>;
  });

  const handleCheckbox = (e) => {
    setIsAdmin(e.target.checked)
  }

  return (
    <fieldset className={s.fieldset}>
      <select className={s.select} name="contributor" id="name">
        {names}
      </select>
      <div className={s.adminBox}>
        <label htmlFor="role">Admin</label>
        <input type="checkbox"  checked={isAdmin} onChange={handleCheckbox}/>
      </div>
    </fieldset>
  );
};

export default NameFieldset;
