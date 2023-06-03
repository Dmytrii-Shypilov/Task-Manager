import s from "./category-form.module.scss";

const CategoryForm = ({ view }) => {
  const title =
    view === "add category"
      ? "Enter your category name"
      : "Enter your status name";
  return (
    <form className={s.form} action="">
      <fieldset className={s.fieldset}>
        <div className={s.inputField}>
          <label className="label" htmlFor="name">
            {title}
          </label>
          <input className="input-field" id="name" type="text" />
        </div>
      </fieldset>
      <div className={s.btnWrapper}>
        <button className="button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
