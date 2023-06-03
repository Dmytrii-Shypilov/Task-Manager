import s from './task-meta.module.scss'



const TaskMeta = () => {
    return (
        <ul className={s.taskMeta}>
        <li className={s.listItem}>
          <span className={s.tag}>Assignee:</span>
          <span className={s.name}>John Wick</span>
        </li>
        <li className={s.listItem}>
          <span className={s.tag}>Assigned by:</span>
          <span className={s.name}>Davy Jones</span>
        </li>
        <li className={s.listItem}>
          <span className={s.tag}>Created at:</span>
          <span>{new Date().toLocaleString()}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.tag}>Status:</span>
          <span className={s.status}>In Work</span>
          <ul></ul>
        </li>
      </ul>
    )
}

export default TaskMeta