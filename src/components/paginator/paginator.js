import { useDispatch } from "react-redux";
import { apiChangePagination } from "../../redux/actions/apiActionsCreator";

export const Paginator = ({ totalCount, itemsPerPage, currentPage }) => {

    const maxNumberPages = 5;
    const dispatch = useDispatch();

    const changePage = (page) => {
        dispatch(apiChangePagination(page - 1, `?page=${ page - 1 }&itemsPerPage=${ itemsPerPage }`))
    }

    const dividePage = () => {
        let pages = [];
        const pagesNumber = Math.ceil(totalCount / itemsPerPage);

        let pagesShow = [];

        if( currentPage > 1 ) {
            
        }
        
        for( let i = 1; i <= pagesNumber; i++ ) {
            pages.push(i);
        }

        return (
            <>
                {
                    pages.map((el, index) => (
                        <div 
                            onClick={ () => changePage(el) }
                            key={ el + index }
                            className={ currentPage + 1 === el ? 'paginator__item active' : 'paginator__item' }
                        >{ el }</div>
                    ))
                }
            </>
        )
    }

    return (
        <div className="paginator__wrapper">{ dividePage() }</div>
    )
}