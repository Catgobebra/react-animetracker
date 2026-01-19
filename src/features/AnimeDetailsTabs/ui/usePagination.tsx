import { useState } from 'react';


export function usePagination<T>(items: T[],itemsCountPage : number) {
    const [activePage, setPage] = useState(1); 

    const pages = Math.ceil(items.length/itemsCountPage)
    const currentPage = items.slice(itemsCountPage*(activePage-1),activePage*itemsCountPage)
    return {
        pages,
        currentPage,
        activePage,
        setPage,
        hasNext: pages > 1
    }
}

export default usePagination