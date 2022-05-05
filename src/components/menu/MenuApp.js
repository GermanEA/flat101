import { BiX, BiUser, BiSearch } from 'react-icons/bi';

export const MenuApp = () => {
    return (
        <div className="nav__main">
            <div className="nav__left">
                <BiX 
                    size={ '2.5rem' }
                    className="left__Item"
                />
            </div>

            <div className="nav__right">
                <BiUser 
                    size={ '2rem' }
                    className="right__item"
                />
                <BiSearch 
                    size={ '2rem' }
                    className="right__item"
                />
            </div>
        </div>
    )
}