import { useState, memo } from "react";
import DeleteIcon from "../../Icons/DeleteIcon";
import s from "./contributor.module.scss";

const Contributor = ({ contributor }) => {
  const { name, id, role } = contributor;
  const titles = (name.split(" ")[0][0] + name.split(" ")[1][0]).toUpperCase();
  const isAdmin = role === 'admin' ? true : false

  return (
    <li key={id} id={id} className={s.contributor}>
      <div>
        <span className={s.nameIcon}>{titles}</span>
        <span className={s.name}>{name}</span>
        {/* {isAdmin && <span>Admin</span>} */}
      </div>
      <div className={s.iconThumb}>
        <DeleteIcon />
      </div>
    </li>
  );
};

export default Contributor;
