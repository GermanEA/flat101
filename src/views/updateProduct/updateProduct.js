import { useEffect } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { apiRecoverProduct, apiUpdateProduct } from '../../redux/actions/apiActionsCreator';

import Menu from "../../components/menu";
import Form from '../../components/form';

export const UpdateProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const { data: { list }, loading } = useSelector((state) => state.apiReducer);

    useEffect(() => {
        dispatch(apiRecoverProduct(`/${ params.id }`));
    }, [dispatch, params.id])
    

    const handlePress = () => {
        navigate('/');
    }

    const handleSubmit = (product) => {
        dispatch(apiUpdateProduct(`/${ product._id }`, product));
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
                {
                    !loading && <Form 
                        submitText="Actualizar producto"
                        onHandleSubmit={ (product) => handleSubmit(product) }
                        init={{ defaultValues: list[0] }}
                    />
                }
            </div>
        </div>
    )
}
