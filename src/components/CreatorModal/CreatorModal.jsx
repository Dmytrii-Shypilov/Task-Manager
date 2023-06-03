import s from "./creator-modal.module.scss";

import { createPortal } from "react-dom";

import CloseIcon from "../Icons/CloseIcon";
import TaskForm from "../TaskForm";

const modalRoot = document.querySelector("#modal-root");

const CreatorModal = ({ type, setModal }) => {
  const closeModal = (e) => {
    if (e.currentTarget.id === 'close-icon' || e.target.id === 'backdrop') {
      setModal((prevState) => {
        return {
          ...prevState,
          isModalOpen: false,
        };
      });
      document.body.style.overflow = 'visible'
    }
    
  };

  return createPortal(
    <div id="backdrop" className="backdrop" onClick={closeModal}>
      <div className={s.modal}>
        <div id="close-icon" onClick={closeModal}>
        <CloseIcon
          className={s.closeIcon}
        />
        </div>
      
        <h4 className={s.title}>{type.toUpperCase()}</h4>
        {type === "add task" && <TaskForm/>}
      </div>
    </div>,
    modalRoot
  );
};

export default CreatorModal;
