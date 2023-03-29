import s from "./project-controls.module.scss";

const ProjectControls = ({setForm}) => {
  const openTool = (e) => {
    setForm({isOpen: true, view: e.target.id})
    
  }
  return (
    <div className={s.controls}>
      <ul className={s.list}>
        <li key="add category" id="add category" className={s.listItem} onClick={openTool}>
          Add category
        </li>
        <li key="add material" id="add material" className={s.listItem} onClick={openTool}>
          Add materials
        </li>
        <li key="add contributor" id="add contributor" className={s.listItem} onClick={openTool}>
          Add contributor
        </li>
      </ul>
    </div>
  );
};

export default ProjectControls;
