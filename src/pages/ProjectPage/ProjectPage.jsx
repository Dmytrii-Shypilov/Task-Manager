import s from "./project-page.module.scss";

import Categories from "../../components/Categories";
import Container from "../../components/Container";
import ContributorsPanel from "../../components/ContributorsPanel/ContributorsPanel";
import MaterialsPanel from "../../components/MaterialsPanel";
import ProjectControls from "../../components/ProjectControls";

import { projects } from "../../data";

const ProjectPage = () => {
  return (
    <section>
      <Container>
        <div className="page-section">
          <h2 className="page-title">Project Name</h2>
          <div className={s.controls}>
            <ProjectControls />
          </div>
          <div className={s.wrapper}>
            <Categories categories={projects[0].categories} />
            <div className={s.panelsWrapper}>
              <div className={s.materials}>
                <MaterialsPanel materials={projects[0].materials} />
              </div>
              <ContributorsPanel contributors={projects[0].contributors} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectPage;
