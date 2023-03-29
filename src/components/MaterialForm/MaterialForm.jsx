import s from "./material-form.module.scss";

const MaterialForm = () => {
  return (
    <form className={s.form} action="">
      <fieldset className={s.fieldset}>
        <div className={s.inputWrapper}>
          <label className="label" htmlFor="name">
            Document name:
          </label>
          <input id="name" className="input-field" type="text" />
        </div>
        <div className={s.inputWrapper}>
          <label className="label" htmlFor="link">
            Document link:
          </label>
          <input id="link" className="input-field" type="text" />
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

export default MaterialForm;
