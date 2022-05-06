import { BiChevronDown } from 'react-icons/bi';

export const FilterSelect = ({ name, options, visible, setVisible, callback }) => {

    const handleOnClickSelect = () => {
        setVisible(!visible);
    }

    const handleOnClickOption = (value) => {
        setVisible(!visible);
        callback(value);
    }

    return (
        <div className="select__container">
            <div className="select__wrapper" onClick={ handleOnClickSelect }>                
                <div>{ name }</div>    
                <BiChevronDown />
            </div>

            <div className="options__wrapper">
                {
                    visible && options.map((el) => (
                        <div 
                            className="select__item"
                            key={ el.name } 
                            onClick={ () => handleOnClickOption(el.value) }
                        >{ el.name }</div>
                    ))
                }
            </div>
        </div>
    )
}