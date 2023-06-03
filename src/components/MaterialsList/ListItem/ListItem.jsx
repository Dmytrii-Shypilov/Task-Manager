import s from './list-item.module.scss'

import DocIcon from '../../Icons/DocIcon'
import DeleteIcon from '../../Icons/DeleteIcon'
import { memo } from 'react'

const ListItem = ({item}) => {

    return (
        <li className={s.listItem}>
        <div className={s.document}>
          <div className={s.docIcon}>
            <DocIcon />
          </div>
          <a className={s.name} href="" target="_blank">{item.name}</a>
        </div>
        <div className={s.delIcon}>
            <DeleteIcon/>
        </div>
      </li>
    )
}

export default memo(ListItem)