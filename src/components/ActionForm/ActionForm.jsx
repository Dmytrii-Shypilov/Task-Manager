import s from "./action-form.module.scss";

import CategoryForm from "../CategoryForm";
import NameForm from "../NameForm";
import MaterialForm from "../MaterialForm";
import CloseIcon from "../Icons/CloseIcon";

const ActionForm = ({ view, setForm }) => {
  const closeForm = () => {
    setForm({
      view: null,
      isOpen: false,
    });
  };

  const getComponent = (view) => {
    switch (view) {
      case "add category":
      case "add status":
        return <CategoryForm view={view}/>;
      case "add material":
        return <MaterialForm />;
      case "add contributor":
        return <NameForm />;
      default:
        return null;
    }
  };
  const FormComponent = getComponent(view);

  return (
    <div className={s.wrapper}>
      {FormComponent}
      <div className={s.icon} onClick={closeForm}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default ActionForm;
