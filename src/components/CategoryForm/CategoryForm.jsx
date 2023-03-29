import s from "./category-form.module.scss";

const CategoryForm = () => {
  return (
    <form className={s.form} action="">
      <fieldset className={s.fieldset}>
        <div className={s.inputField}>
        <label className="label" htmlFor="name">
          Enter new category name
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
