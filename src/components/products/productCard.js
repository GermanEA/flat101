import { FaHeart, FaRegHeart } from 'react-icons/fa';
import empty from '../../assets/img/empty.jpg';

export const ProductCard = ({ product }) => {
    return (
        <div className="product__wrapper">
            <div className="product__image">
                <img src={ empty } alt="Product" />
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