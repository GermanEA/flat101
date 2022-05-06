
import { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';
import image4 from '../../assets/img/image4.jpg';

export const ProductCard = ({ product }) => {

    const navigate = useNavigate();
    const images = [image1, image2, image3, image4];
    const [image, setImage] = useState();   
    
    useEffect(() => {
        selectImage();
    }, [])
    

    const selectImage = () => {
        const random = Math.floor( Math.random() * images.length );
        const value = images[random];

        setImage(value);
    }

    return (
        <div className="product__wrapper" onClick={ () => navigate(`/update/${ product._id }`) }>
            <div className="product__image">
                <img src={ image } alt="Product" />
            </div>

            <div className="product__name">
                { product.name }
            </div>

            <div className="product__price">
                { product.price.toLocaleString('es-ES') } €
            </div>

            <div className="product__favorite">
                {
                    product.favorite 
                        ? <FaHeart 
                            size={ '1.5rem' }
                            className="icon__favorite"
                        /> 
                        : <FaRegHeart 
                            size={ '1.5rem' } 
                            className="icon__favorite"
                        /> 
                }
            </div>
        </div>
    )
}