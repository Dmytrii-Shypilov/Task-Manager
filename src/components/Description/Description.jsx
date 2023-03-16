import s from "./description.module.scss";

const Description = ({ description }) => {
  return (
    <div className={s.description}>
      <p className={s.text}>
        A project is a temporary endeavor designed to achieve a specific goal or
        objective within a defined timeframe, using a set of resources and
        activities. Projects are often undertaken to create a unique product,
        service, or result. They can range from small, short-term efforts with a
        single objective, to large, complex undertakings that involve multiple
        stakeholders, extensive planning, and a significant investment of time,
        money, and resources.
      </p>
    </div>
  );
};

export default Description;
