import s from './contributor.module.scss'


const Contributor = ({contributor}) => {
    const {name, id, role} = contributor
    const titles = (name.split(" ")[0][0] + name.split(" ")[1][0]).toUpperCase()
    return(
        <li key={id} className={s.contributor}>
            <span className={s.icon}>{titles}</span>
            <span className={s.name}>{name}</span>
        </li>
    )
}

export default Contributor