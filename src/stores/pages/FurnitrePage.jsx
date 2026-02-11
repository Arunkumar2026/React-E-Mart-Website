import React from 'react'
import {furnitureData} from '../data/furniture'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'


const FurnitrePage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {furnitureData.map((item)=>{
            return(
                <div>
                    <Link to={`/furniture/${item.id}`}>
                    <div className='pageImg'>
                        <img src={item.image} alt="" />
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.company}, {item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default FurnitrePage