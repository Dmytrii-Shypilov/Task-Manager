import s from "./list-item.module.scss";

import { memo } from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ project }) => {
  const { name, id, description, status } = project;
  const path = `/project/${id}`
  
  return (
    <li className={s.listItem} >
      <NavLink to={path} className={s.projLink}>
        <div>
          <p className={s.name}>{name}</p>
          <p className={s.description}>{description}</p>
        </div>
        <div className={s.statusContainer}>
          <span className={s.status}>{status}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default memo(ListItem);
