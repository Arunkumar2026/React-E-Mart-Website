import React from 'react'
import { booksData } from '../data/books'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const BooksPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {booksData.map((item)=>{
            return(
                <div>
                    <Link to={`/books/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default BooksPage