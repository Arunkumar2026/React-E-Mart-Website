import React from 'react'
import {womanData} from '../data/woman'

const Woman = () => {
    const firstFiveImage = womanData.slice(0,5)
  return (
    <>
    <div className="proTitle">
    <h2>Woman</h2>
    </div>
    <div className="proSection">
        {
            firstFiveImage.map((item)=>{
                return(
                    <div className="imgBox">
                        <img src={item.image} alt="" className="proImage" />
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Woman