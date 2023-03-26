import s from './materials-panel.module.scss'

import MaterialsList from '../MaterialsList'



const MaterialsPanel = ({materials})=> {

    return (
        <div className={s.panel}>
            <h4 className={s.title}>Materials:</h4>
            <MaterialsList materials={materials}/>
        </div>
    )
}

export default MaterialsPanel