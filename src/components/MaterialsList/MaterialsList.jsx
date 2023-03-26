import s from "./materials-list.module.scss";

import DocIcon from "../Icons/DocIcon";

const MaterialsList = ({ materials }) => {
  const list = materials.map((item) => {
    return (
      <li className={s.listItem}>
        <div className={s.icon}>
          <DocIcon />
        </div>
        <span className={s.name}>{item.name}</span>
      </li>
    );
  });

  return <ul className={s.list}>{list}</ul>;
};

export default MaterialsList;
