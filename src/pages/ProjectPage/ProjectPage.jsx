import s from "./project-page.module.scss";

import { useState } from "react";

import ActionForm from "../../components/ActionForm";
import Categories from "../../components/Categories";
import Container from "../../components/Container";
import ContributorsPanel from "../../components/ContributorsPanel/ContributorsPanel";
import MaterialsPanel from "../../components/MaterialsPanel";
import ProjectControls from "../../components/ProjectControls";

import MaterialForm from "../../components/MaterialForm";

import { projects } from "../../data";

const ProjectPage = () => {
  const [form, setForm] = useState({ isOpen: false, view: null });

  return (
    <section>
      <Container>
        <div className="page-section">
          <h2 className="page-title">Project Name</h2>
          <div className={s.controls}>
            <ProjectControls setForm={setForm} />
            {form.isOpen && (
              <div className={s.actionForm}>
                <ActionForm view={form.view} setForm={setForm} />
              </div>
            )}
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
