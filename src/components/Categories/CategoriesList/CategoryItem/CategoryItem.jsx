import { memo } from 'react'
import s from './category-item.module.scss'

import { NavLink } from 'react-router-dom'


const CategoryItem = ({category}) => {
    const path = `/category/${category}` 
    return (
        <li className={s.listItem}>
            <NavLink to={path} className={s.link}>
                {category}
            </NavLink>
        </li>
    )
}

export default memo(CategoryItem)