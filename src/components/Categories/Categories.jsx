import s from './categories.module.scss'


import CategoriesList from './CategoriesList'

const Categories = ({categories}) => {


    return (
        <div>
            <CategoriesList categories={categories}/>
        </div>
    )
}

export default Categories