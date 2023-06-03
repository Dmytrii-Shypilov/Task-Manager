import s from "./projects-list.module.scss";

import ListItem from "./ListItem";

const ProjectsList = ({ projects }) => {
    
  const list = projects.map((proj) => {
    const project = {
      name: proj.name,
      description: proj.description,
      status: proj.status,
      id: proj.id
    };

    return <ListItem project={project} />;
  });

  return <ul className={s.list}>{list}</ul>;
};

export default ProjectsList;
