import s from "./materials-list.module.scss";

import DeleteIcon from "../Icons/DeleteIcon";
import DocIcon from "../Icons/DocIcon";

const MaterialsList = ({ materials }) => {


  const list = materials.map((item) => {
    return (
      <li className={s.listItem}>
        <div className={s.document}>
          <div className={s.docIcon}>
            <DocIcon />
          </div>
          <a className={s.name} href="" target="_blank">{item.name}</a>
        </div>
        <div className={s.delIcon}>
            <DeleteIcon/>
        </div>
      </li>
    );
  });

  return <ul className={s.list}>{list}</ul>;
};

export default MaterialsList;
