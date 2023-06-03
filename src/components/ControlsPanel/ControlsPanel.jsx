import s from "./controls-panel.module.scss";

import { useState } from "react";

import ActionForm from "../ActionForm";
import Controls from "../Controls";
import CreatorModal from '../CreatorModal'

const ControlsPanel = ({ type }) => {
  const [form, setForm] = useState({ isModalOpen: false, view: null });
  const [modal, setModal] = useState({isOpen: false, viewTtype: null})
  const { isOpen, view } = form;
  const {isModalOpen, viewType} = modal

  const getControls = (type) => {
    switch (type) {
      case "project":
        return ["add category", "add material", "add contributor"];
      case "category":
        return ["add status",  "add task"];
      case "task":
        return ["add material"];
    }
  };

  const controls = getControls(type);

  return (
    <div className={s.controlsPanel}>
      <Controls setForm={setForm} setModal={setModal} controls={controls} />
      {isOpen && (
        <div className={s.form}>
          <ActionForm view={view} setForm={setForm} type={type} />
        </div>
      )}
      {isModalOpen && <CreatorModal setModal={setModal} type={viewType}/>}
    </div>
  );
};

export default ControlsPanel;
