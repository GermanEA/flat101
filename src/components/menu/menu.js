
import { BiArrowBack, BiPlusCircle, BiUser, BiSearch } from 'react-icons/bi';

export const Menu = ({ title, callback }) => {

    return (
        <div className="nav__main">
            <div className="nav__left" onClick={ callback }>

                {
                    title === 'Volver' 
                        ? <BiArrowBack 
                            size={ '2rem' }
                            className="left__item"
                        />

                        : <BiPlusCircle 
                            size={ '2rem' }
                            className="left__item"
                        />
                } 
                
                <div>{ title }</div>
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