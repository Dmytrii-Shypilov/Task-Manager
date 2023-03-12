import s from './user-auth.module.scss'


const UserAuth = () => {

    return(
        <div className={s.authBlock}>
            <div className={s.userInfo}>
                <span className={s.userIcon}>DS</span>
                <span className={s.userName}>Dmytrii Shypilov</span>
            </div>
           
            <div className={s.authBtn}>
                <button className="button">Log out</button>
            </div>
        </div>
    )
}

export default UserAuth