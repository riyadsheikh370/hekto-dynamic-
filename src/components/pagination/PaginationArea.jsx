import React from 'react'

const PaginationArea = ({ pageNumber, paginate, currentPage, next, prev }) => {
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        <a onClick={prev} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-pink-500 dark:text-pink-500 dark:hover:bg-[#2F1AC4] dark:hover:text-white"
                        >
                            Previous
                        </a>
                    </li>
                    {pageNumber.map((item, i) => (

                        <li onClick={() => paginate(item)} className={currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#2F1AC4] border border-pink-500 cursor-pointer" : "flex justify-center text-pink-500 items-center px-3 h-8 leading-tight  bg-[white] border border-pink-500 cursor-pointer"}>
                            {item + 1}
                        </li>
                    ))}
                    <li>
                        <a onClick={next} className="flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  dark:border-pink-500 dark:text-pink-500 dark:hover:bg-[#2F1AC4] dark:hover:text-white"
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
