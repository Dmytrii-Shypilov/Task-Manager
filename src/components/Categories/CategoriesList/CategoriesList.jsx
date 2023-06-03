import s from './categories-list.module.scss'

import CategoryItem from './CategoryItem'

const CategoriesList = ({categories}) => {
    const list = categories.map((category)=> <CategoryItem category={category}/>)
    return (
        <ul className={s.list}>{list}</ul>
    )
}

export default CategoriesList