import s from './contributors-list.module.scss'

import Contributor from './Contributor/Contributor';
import { useState } from 'react';


const ContributorsList = ({contributors}) => {

    const list = contributors.map((contributor) => {
        return <Contributor contributor={contributor}/>;
      });

    return(
        <div>
            <ul className={s.list}>{list}</ul>
            {/* <div className={s.btnWrapper}>
                <button className='button'>Add</button>
            </div> */}
        </div>
        
        
    )
       
}

export default ContributorsList