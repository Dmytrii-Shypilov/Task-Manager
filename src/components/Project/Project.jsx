import s from "./project.module.scss";

import ContributorsList from "../ContributorsList";
import Description from "../Description";

const Project = ({ projects }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Project Name</h2>
      <div className={s.descriptionWrapper}>
        <Description />
      </div>

      <ContributorsList contributors={projects[0].contributors} />
    </section>
  );
};

export default Project;
