import s from "./controls.module.scss";

const Controls = ({ setForm, setModal, controls }) => {
  const openTool = (e) => {
    if (e.target.id === "add task") {
      setModal({
        isModalOpen: true,
        viewType: e.target.id,
      });
    } else {
      setForm({ isOpen: true, view: e.target.id });
    }
  };

  const list = controls.map((name) => {
    return (
      <li key={name} id={name} className={s.listItem} onClick={openTool}>
        {name}
      </li>
    );
  });

  return (
    <div className={s.controls}>
      <ul className={s.list}>{list}</ul>
    </div>
  );
};

export default Controls;
