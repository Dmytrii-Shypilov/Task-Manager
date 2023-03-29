import s from "./creator-modal.module.scss";

import { createPortal } from "react-dom";

import CloseIcon from "../Icons/CloseIcon";
import CategoryForm from "../CategoryForm";
import MaterialForm from "../MaterialForm";
import NameForm from "../NameForm";

const modalRoot = document.querySelector("#modal-root");

const CreatorModal = ({ view, setModal }) => {
  const closeModal = (e) => {
    if (e.currentTarget.id === 'close-icon' || e.target.id === 'backdrop') {
      setModal((prevState) => {
        return {
          ...prevState,
          isOpen: false,
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
      
        <h4 className={s.title}>{view.toUpperCase()}</h4>
        {view === "add contributor" && <NameForm />}
        {view === "add category" && <CategoryForm />}
        {view === "add material" && <MaterialForm />}
      </div>
    </div>,
    modalRoot
  );
};

export default CreatorModal;
