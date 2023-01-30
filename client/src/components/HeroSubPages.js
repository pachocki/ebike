import React from 'react'

const HeroSubPages = (props) => {
  return (
    <div>
       <div className={"w-full h-[100vh] mobile:h-[90vh] bg-fixed bg-cover bg-top flex justify-center items-center " + props.bg}>
        <p className="text-8xl font-bold text-white tablet:text-7xl mobile:text-[2.5rem] small-mobile:text-4xl ">
          {props.title}
        </p>
      
        
      </div>
    </div>
  )
}

export default HeroSubPages
