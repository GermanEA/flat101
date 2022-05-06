import { useEffect } from "react";
import { useForm } from "react-hook-form";

const initialStateForm = {
    defaultValues: {
        _id: '',
        _v: 0,
        SKU: '',
        name: '',
        description: '',
        favorite: true,
        price: 0,
        image: ''
    }
}

export const Form = ({ onHandleSubmit, submitText, init = initialStateForm }) => {   

    const { register, formState: { errors, isSubmitSuccessful  }, handleSubmit, reset } = useForm(init);   

    useEffect(() => {
        if( isSubmitSuccessful)
            reset(initialStateForm.defaultValues);
    }, [isSubmitSuccessful])

    const onSubmit = (values) => {
        onHandleSubmit(values);
    }

    return(
        <form className="form__container" onSubmit={ handleSubmit(onSubmit) }>

            <div className="form__item">
                <input className={ errors.SKU?.type === 'required' ? 'has-error' : null } {...register("SKU", { required: true })} placeholder="SKU del producto" />
                <div className="form__error">
                    {   
                        errors.SKU?.type === 'required' && "Introduce el SKU"
                    }
                </div>
            </div>

            <div className="form__item">
                <input className={ errors.name?.type === 'required' ? 'has-error' : null } {...register("name", { required: true })} placeholder="Nombre del producto" />
                <div className="form__error">
                    {
                        errors.name?.type === 'required' && "Introduce el nombre"
                    }
                </div>
            </div>

            <div className="form__item">
                <input className={ errors.description?.type === 'required' ? 'has-error' : null } {...register("description", { required: true })} placeholder="Descripción del producto" />
                <div className="form__error">
                    {
                        errors.description?.type === 'required' && "Introduce la descripción"
                    }
                </div>
            </div>

            <div className="form__item">
                <input className={ errors.price?.type === 'required' ? 'has-error' : null } type="number" {...register("price", { required: true, min: 0 })}  step="any" placeholder="Precio del producto" />
                <div className="form__error">
                    {
                        errors.price?.type === 'required' && "Introduce un precio válido"
                    }
                </div>
            </div>

            <div className="form__checkbox">
                <label className="chk__container">Favorito
                    <input type="checkbox" {...register("favorite")} />
                    <span className="chk__checkmark"></span>
                </label>
            </div>
            
            <div className="form__submit">
                <input type="submit" value={ submitText } />
            </div>
        </form>
    )
}