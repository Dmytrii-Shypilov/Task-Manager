import s from "./project-controls.module.scss";

const ProjectControls = () => {
  return (
    <div className={s.controls}>
      <ul className={s.list}>
        <li key="add category" id="add category" className={s.listItem}>
          Add category
        </li>
        <li key="add material" id="add materials" className={s.listItem}>
          Add materials
        </li>
        <li key="add contributor" id="add contributor" className={s.listItem}>
          Add contributor
        </li>
      </ul>
    </div>
  );
};

export default ProjectControls;
