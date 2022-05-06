import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimension";

const useItemsPerPage = () => {
    const { width } = useWindowDimensions();
    const [itemsPerPage, setItemsPerPage] = useState( width > 1024 ? 8 : 6 );
  
    useEffect(() => {
        changeItemsPerPage();
    }, [width]);

    const changeItemsPerPage = () => {
        if( width > 1024 ) {
            setItemsPerPage(8);
        } else {
            setItemsPerPage(6);
        }
    }
  
    return itemsPerPage;
  }
  
  export default useItemsPerPage;