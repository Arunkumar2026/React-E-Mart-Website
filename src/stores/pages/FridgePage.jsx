import React from 'react'
import {fridgeData} from '../data/fridge'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const FridgePage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {fridgeData.map((item)=>{
            return(
                <div>
                    <Link to={`/fridge/${item.id}`}>
                        <div className="pageImg">
                            <img src={item.image} alt="" />
                        </div>
                    </Link>
                    <div className="proModel">
                        {item.comapany}, {item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default FridgePage