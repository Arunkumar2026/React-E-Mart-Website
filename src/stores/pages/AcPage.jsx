import React from 'react'
import {acData} from '../data/ac'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const AcPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {acData.map((item)=>{
            return(
                <div>
                    <Link to={`ac/${item.id}`}>
                        <div className="pageImg">
                            <img src={item.image} alt="" />
                        </div>
                    </Link>
                    <div className="proModel">
                        {item.company}, {item.Model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default AcPage