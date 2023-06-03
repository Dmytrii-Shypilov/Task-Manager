import s from "./project-page.module.scss";

import Categories from "../../components/Categories";
import Container from "../../components/Container";
import ContributorsPanel from "../../components/ContributorsPanel";
import ControlsPanel from "../../components/ControlsPanel/ControlsPanel";
import MaterialsPanel from "../../components/MaterialsPanel";

import MaterialForm from "../../components/MaterialForm";

import { projects } from "../../data";

import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const {id} = useParams()
  console.log(id)
  const [project] = projects.filter(proj => proj.id === id)
  console.log(project)
  return (
    <section>
      <Container>
        <div className="page-section">
          <h2 className="page-title">{project.name}</h2>
          <div className={s.controls}>
            <ControlsPanel type="project" />
          </div>

          <div className={s.wrapper}>
            <Categories categories={project.categories} />
            <div className={s.panelsWrapper}>
              <div className={s.materials}>
                <MaterialsPanel materials={project.materials} />
              </div>
              <ContributorsPanel contributors={project.contributors} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectPage;
