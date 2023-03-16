import s from './project-page.module.scss'

import Container from '../../components/Container'
import Project from '../../components/Project'

import { projects } from '../../data'


const ProjectPage = () => {


    return(
        <section className={s.section}>
            <Container>
               <Project projects={projects}/>
            </Container>
        </section>
    )
}

export default ProjectPage