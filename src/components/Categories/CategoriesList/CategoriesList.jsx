import s from './categories-list.module.scss'

const CategoriesList = ({categories}) => {
    const list = categories.map((category)=> <li className={s.listItem}>{category}</li>)
    return (
        <ul className={s.list}>{list}</ul>
    )
}

export default CategoriesList