import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';
import { apiData } from '../components/ContextApi'
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';
// import { LuWallet } from 'react-icons/lu';

const Pages = () => {
    let data = useContext(apiData)

    let [currentPage, setCurrentpage] = useState(1)
    let [perPage, setPerPage] = useState(12)

    let lastPage = currentPage * perPage
    let firstPage = lastPage - perPage

    let allData = data.slice(firstPage, lastPage)

    let pageNumber = []

    for(let i=0; i < Math.ceil(data.length / perPage); i++){
        pageNumber.push(i)
    }
    
    let paginate = (pageNumber) =>{
        setCurrentpage(pageNumber + 1);
    }

    return (
        <>
            <section>
                <div className="text-start bg-[#F6F5FF] py-[50px]">
                    <Container>
                        <h1 className='text-start'>Shop Grid Default</h1>
                        <h5 className='text-[12px] font-sans dark-b'><Link to="/">Home</Link> | Pages</h5>
                    </Container>
                </div>
                <Container>
                    <div className="w-[100%] pt-[100px] pb-[50px]">
                        <div className="flex justify-between flex-wrap">
                            <Post allData={allData} />
                        </div>
                        <div className="text-end">
                            <PaginationArea pageNumber={pageNumber} paginate={paginate} />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Pages
