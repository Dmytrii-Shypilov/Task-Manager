import s from "./project-page.module.scss";

import { useState } from "react";

import Categories from "../../components/Categories";
import Container from "../../components/Container";
import ContributorsPanel from "../../components/ContributorsPanel/ContributorsPanel";
import CreatorModal from "../../components/CreatorModal/CreatorModal";
import MaterialsPanel from "../../components/MaterialsPanel";
import ProjectControls from "../../components/ProjectControls";

import { projects } from "../../data";

const ProjectPage = () => {
  const [modal, setModal] = useState({isOpen: false, view: null})

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
        <CreatorModal/>
      </Container>
    </section>
  );
};

export default ProjectPage;
