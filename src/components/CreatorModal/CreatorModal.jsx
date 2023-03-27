import s from "./creator-modal.module.scss";

import { createPortal } from "react-dom";

import CloseIcon from "../Icons/CloseIcon";
import NameFieldset from "./NameFieldset";

const modalRoot = document.querySelector("#modal-root");

const CreatorModal = ({ view }) => {
  const click = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.dir(form.name.value);
  };
  return createPortal(
    <div className="backdrop">
      <div className={s.modal}>
        <CloseIcon className={s.closeIcon} />
        <h4 className={s.title}>Title</h4>
        <form action="" >
          <NameFieldset />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default CreatorModal;
