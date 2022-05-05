import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiActionCreator } from "../../redux/actions/apiActionsCreator";

import ActivityIndicator from "../../components/activityIndicator";
import { ITEMS_PER_PAGE } from '../../redux/constants/apiConstants';
import Menu from "../../components/menu";
import ProductCard from "../../components/products";
import Paginator from "../../components/paginator";
import FilterSelect from "../../components/filterSelect";

const optionsSelectProducts = [
    {
        value: 0,
        name: "Todos"
    },
    {
        value: 1,
        name: "Favoritos"
    },
    {
        value: 2,
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
    const { data: { list, totalCount }, loading, currentPage } = useSelector((state) => state.apiReducer);
    
    const [visibleFilterOne, setVisibleFilterOne] = useState(false);
    const [visibleFilterTwo, setVisibleFilterTwo] = useState(false);
    
    useEffect(() => {
        dispatch(apiActionCreator(`?page=0&itemsPerPage=${ ITEMS_PER_PAGE }`));
    }, [dispatch]); 

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
    

    return (
        <div className="main__container">        
            {/* Menú principal */}
            <div className="nav__container">
                <Menu />
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
                                />
                                <FilterSelect 
                                    name="ORDENAR POR"
                                    options={ optionsSelectOrder}
                                    visible={ visibleFilterTwo }
                                    setVisible={ setVisibleFilterTwo }
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
                                    itemsPerPage={ ITEMS_PER_PAGE }
                                    currentPage={ currentPage }
                                />
                            </div>
                        </>
                }
            </div>
        </div>
    )
}