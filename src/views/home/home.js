import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate  } from 'react-router-dom';

import { apiActionCreator, apiChangeFilterFavorite } from "../../redux/actions/apiActionsCreator";

import ActivityIndicator from "../../components/activityIndicator";
import Menu from "../../components/menu";
import ProductCard from "../../components/products";
import Paginator from "../../components/paginator";
import FilterSelect from "../../components/filterSelect";
import useItemsPerPage from "../../hooks/useItemsPerPage";

const optionsSelectProducts = [
    {
        value: true,
        name: "Favoritos"
    },
    {
        value: false,
        name: "No Favoritos"
    }
];

const optionsSelectOrder = [
    {
        value: "asc",
        name: "Ascendente"
    },
    {
        value: "desc",
        name: "Descendente"
    }
]

export const Home = () => {

    const dispatch = useDispatch();
    const { data: { list, totalCount }, loading, currentPage, filterFav } = useSelector((state) => state.apiReducer);
    
    const navigate = useNavigate();

    const itemsPerPage = useItemsPerPage();

    const [visibleFilterOne, setVisibleFilterOne] = useState(false);
    const [visibleFilterTwo, setVisibleFilterTwo] = useState(false);
    
    useEffect(() => {
        getApiRecoverProduct();
    }, []); 

    useEffect(() => {
        if( visibleFilterOne ){
            setVisibleFilterTwo(false);
            setVisibleFilterOne(true);
        }
    }, [visibleFilterOne])

    useEffect(() => {
        if( visibleFilterTwo ){
            setVisibleFilterOne(false);
            setVisibleFilterTwo(true);
        }
    }, [visibleFilterTwo])

    const getApiRecoverProduct = () => {
        dispatch(apiActionCreator(`?page=${ currentPage }&itemsPerPage=${ itemsPerPage }&favorite=${ filterFav }`));
    }
    
    const changeFavorites = (fav) => {
        dispatch(apiChangeFilterFavorite(fav, `?page=0&itemsPerPage=${ itemsPerPage }&favorite=${ fav }`));
    }

    const changeSort = (sort) => {
        console.log(sort);
    }

    const handlePress = () => {
        navigate('/create');
    }

    return (
        <div className="main__container">        
            {/* Menú principal */}
            <div className="nav__container">
                <Menu 
                    title='Crear producto'
                    callback={ handlePress }
                />
            </div>
            
            <div className="content__container">
                {
                    ( loading )
                        ? <ActivityIndicator />
                        : <>
                            {/* Info búsqueda */}
                            <div className="info__container">
                                <div className="info__number">{ totalCount } Items found</div>
                                <div className="info__result">Search Results for "Tomate"</div>
                            </div>

                            {/* Filtros */}
                            <div className="filters__container">
                                <FilterSelect 
                                    name="PRODUCTOS"
                                    options={ optionsSelectProducts }
                                    visible={ visibleFilterOne }
                                    setVisible={ setVisibleFilterOne }
                                    callback={ changeFavorites }
                                />
                                <FilterSelect 
                                    name="ORDENAR POR"
                                    options={ optionsSelectOrder}
                                    visible={ visibleFilterTwo }
                                    setVisible={ setVisibleFilterTwo }
                                    callback={ changeSort }
                                />
                            </div>

                            {/* Listado de productos */}
                            <div className="products__container">
                                {list.length > 0 && list.map((el) => (
                                            <ProductCard 
                                                key={ el.SKU }
                                                product={ el }
                                            />
                                        ))
                                }
                        
                            </div>

                            {/* Paginador */}
                            <div className="paginator__container">
                                <Paginator 
                                    totalCount={ totalCount }
                                    itemsPerPage={ itemsPerPage }
                                    currentPage={ currentPage }
                                    favorite={ filterFav }
                                />
                            </div>
                        </>
                }
            </div>
        </div>
    )
}