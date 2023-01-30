import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const [text, setText] = useState('');


 
  const sendEmail = (e) => {
    e.preventDefault();
    firstRef.current.value = '';
    secondRef.current.value = '';
    setText('')
  
    

    emailjs.sendForm('service_2sx6l1f', 'template_eb1877e', form.current, 'Q3EqNhSYzF-QeWh4m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
      <label><h2 className="text-2xl">Name</h2></label>
      <input ref={firstRef} className="rounded dark:text-white text-black font-bold px-2 py-2 dark:bg-zinc-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" name="user_name" />
      <label><h2 className="text-2xl">Email</h2></label>
      <input ref={secondRef} className="rounded dark:text-white text-black font-bold px-2 py-2 dark:bg-zinc-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"  type="email" name="user_email" />
      <label><h2 className="text-2xl">Message</h2></label>
      <textarea value={text} onChange={v => setText(v.target.value)}  className="w-full dark:text-white text-black font-bold h-[20vh] dark:bg-zinc-900 px-2 py-2 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" name="message" plaveholder="Please Write Message to us"/>
      <button className="bg-black py-2 w-[100px] hover:opacity-80 "><input type="submit" value="Send" className="text-white"/></button>
    </form>
  );
};
export default Contact
