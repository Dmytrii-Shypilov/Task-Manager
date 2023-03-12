import s from "./main-page.module.scss";

import ProjectsList from "../../components/ProjectsList";
import Container from "../../components/Container";

import { projects } from "../../data";

const MainPage = () => {
  return (
    <section className={s.section}>
      <Container>
        <ProjectsList projects={projects} />
      </Container>
    </section>
  );
};

export default MainPage;
