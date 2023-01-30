import React from 'react'
import HeroSubPages from "../components/HeroSubPages"


const Contact = () => {
  return (
    <div>
      <HeroSubPages 
      bg="bg-image-six"
      title="Welcome"
      />
      <h1 className="text-center text-8xl pt-10 tablet:text-6xl small-mobile:text-5xl">You will find us here</h1>
    <div className="flex justify-center items-center py-40 laptop:py-10 tablet:flex-col ">
      <div className="w-full text-5xl laptop:text-4xl screen:text-3xl  px-10 tablet:pb-10 tablet:text-center tablet:text-4xl mobile:text-3xl small-mobile:text-2xl tablet:px-2">
        <p >City:Kverneland</p>
        <p>Street:Kvernelandsvegen 1</p>
        <p>Mobile:9873213</p>
        <p>Email:ebike@gmail.com</p>
      </div>
      <div className="w-full ">
<iframe
  title="home"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1034.2110845741456!2d5.725649244871889!3d58.773327025869776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a39cae49298a5%3A0xf023b74792228256!2sKr%C3%A5vegen%204%2C%204355%20Kvernaland!5e0!3m2!1spl!2sno!4v1664524440439!5m2!1spl!2sno"
  width="100%"
  height="450"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen=""
  aria-hidden="false"
  tabIndex="0"
  className="mobile:h-[300px]"
/>

</div>
    </div>

</div>

  )
}

export default Contact
