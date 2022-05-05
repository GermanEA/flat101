import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { apiActionCreator } from "../redux/actions/apiActionsCreator";

import { ActivityIndicator } from "../components/common/ActivityIndicator";
import { ITEMS_PER_PAGE } from '../redux/constants/apiConstants';
import { MenuApp } from "../components/menu/MenuApp";
import { ProductCard } from "../components/products/productCard";
import { Paginator } from "../components/paginator/paginator";

export const Home = () => {

    const dispatch = useDispatch();
    const { data: { list, totalCount }, loading, currentPage } = useSelector((state) => state.apiReducer);
    
    useEffect(() => {
        dispatch(apiActionCreator(`?page=0&itemsPerPage=${ ITEMS_PER_PAGE }`));
    }, [dispatch]); 

    return (
        <div className="main__container">        
            {/* Menú principal */}
            <div className="nav__container">
                <MenuApp />
            </div>

            {/* Filtros */}

            
            {
                ( loading )
                    ? <ActivityIndicator />
                    : <>
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
    )
}

export default Home;