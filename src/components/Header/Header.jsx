import React from 'react'
import css from './Header.module.scss'
const Header = () => {
    return (
        <div className={css.wrapper}>

            <div className={css.container}>
                <div className={css.name}>
                Автокомплекс "ВЕРОС"

            </div>
            </div>
        </div>
    )
}

export default Header;