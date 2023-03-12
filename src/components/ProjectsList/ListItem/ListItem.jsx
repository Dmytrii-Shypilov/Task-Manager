import { memo } from "react";
import s from "./list-item.module.scss";

const ListItem = ({ project }) => {
  const { name, description, status } = project;
  return (
    <li className={s.listItem}>
      <div>
        <p className={s.name}>{name}</p>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.statusContainer}>
        <span className={s.status}>{status}</span>
      </div>
    </li>
  );
};

export default memo(ListItem);
