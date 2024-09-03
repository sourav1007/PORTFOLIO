import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import React from 'react'

function Contact() {
  //https://script.google.com/macros/s/AKfycbyVyw9Dg_GOY5hH3gt3rip8Y3Q4Qf607LUM1LNBAC-rou2HwjtSUD6ztIwAIqKue_z0pg/exec

  function Submit(e) {
    const formEle = document.querySelector("form");

    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbyVyw9Dg_GOY5hH3gt3rip8Y3Q4Qf607LUM1LNBAC-rou2HwjtSUD6ztIwAIqKue_z0pg/exec", {
      method: "POST",
      body: formData
    }).then((res) => {
      res.json()
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
    alert("Messege sent")

  }


  return (
    <div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-8 font-sans">

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <form className=' m-10 ml-28 w-96' onSubmit={(e) => { Submit(e) }} action="">
              <label className="input input-bordered flex items-center gap-2 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input name='Name' type="text" className="grow" placeholder="Name" />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input name='Email' type="email" className="grow" placeholder="Email" />
              </label>
              <textarea name='Message' className="textarea  w-full my-3" placeholder="Enter Message Here..."></textarea>
              <button className="btn btn-outline btn-success w-full">Send </button>
            </form>
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Follow me on</h1>
                <ul className="flex space-x-5">
                  <li className='hover:scale-110 duration-300' >
                    <a href="https://www.facebook.com/profile.php?id=100061647665380" target="_blank">
                      <FaSquareFacebook className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li className='hover:scale-110 duration-300'>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li className='hover:scale-110 duration-300'>
                    <a href="https://github.com/sourav1007" target="_blank">
                      <FaGithub className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                  <li className='hover:scale-110 duration-300'>
                    <a href="https://www.instagram.com/souravrwt10/" target="_blank">
                      <FaInstagram className="text-4xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
              <div className="flex space-x-2">
              <TfiEmail className="size-6" />
              <h2>rawatrawatsourav@gmail.com</h2>
              </div>
              <div className="flex space-x-1">
              <FaWhatsapp className="size-6" /><IoIosCall className="size-6" />
              <h2>+91 8630104157</h2>
              </div>
              </div>
              
             
            </div>

          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-0 mt-0 order-1">
            <img className="" src="/contact.png" alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact
