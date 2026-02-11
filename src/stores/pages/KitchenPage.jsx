import React from 'react'
import {kitchenData} from '../data/kitchen'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const KitchenPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {kitchenData.map((item)=>{
            return(
                <div>
                    <Link to={`/kitchen/${item.id}`}>
                        <div className='pageImg'>
                            <img src={item.image} alt="" />
                        </div>
                    </Link>
                    <div className='proModel'>
                        {item.company}, {item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default KitchenPage