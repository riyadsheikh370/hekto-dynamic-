import React from 'react'

const PaginationArea = ({ pageNumber,paginate }) => {
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        <a
                         
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-pink-500 dark:text-pink-500 dark:hover:bg-[#2F1AC4] dark:hover:text-white"
                        >
                            Previous
                        </a>
                    </li>
                    {pageNumber.map((item) => (

                        <li onClick={()=>paginate(item)}>
                            <a
                                className="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-pink-500 dark:text-pink-500 dark:hover:bg-[#2F1AC4] dark:hover:text-white"
                            >
                               {item + 1}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                          
                            className="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  dark:border-pink-500 dark:text-pink-500 dark:hover:bg-[#2F1AC4] dark:hover:text-white"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default PaginationArea
