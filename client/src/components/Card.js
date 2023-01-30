import React from 'react'

const Card = (props) => {
  return (
    <div>
    <div className="w-full flex flex-col items-center">
    <img className="slider-img" src={props.image} alt="bike"/>
    </div>
    <div className="flex flex-col gap-2 pb-10">
        <span className="text-6xl screen:text-5xl mobile:text-4xl">{props.model}</span>
        <p className="text-5xl screen:text-4xl mobile:text-3xl">{props.details}</p>
        <p className="text-4xl screen:text-3xl ">{props.price}</p>
    </div>
    </div>
  )
}

export default Card