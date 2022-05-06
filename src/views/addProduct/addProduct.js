import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

import { apiCreateProduct } from '../../redux/actions/apiActionsCreator';

import Menu from "../../components/menu";
import Form from '../../components/form';

export const AddProduct = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handlePress = () => {
        navigate('/');
    }

    const handleSubmit = (product) => {
        dispatch(apiCreateProduct(product));
        navigate('/');
    }

    return (
        <div className="main__container">        
            {/* Menú principal */}
            <div className="nav__container">
                <Menu 
                    title='Volver'
                    callback={ handlePress }
                />
            </div>
            
            {/* Formulario */}
            <div className="content__container">
                <Form 
                    submitText="Crear producto"
                    onHandleSubmit={ (product) => handleSubmit(product) }
                />
            </div>
        </div>
    )
}
