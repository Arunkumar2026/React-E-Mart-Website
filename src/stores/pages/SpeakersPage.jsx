import React from 'react'
import {speakerData} from '../data/speaker'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const SpeakersPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {speakerData.map((item)=>{
            return(
                <div>
                    <Link to={`/speakers${item.id}`}>
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

export default SpeakersPage