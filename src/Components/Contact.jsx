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
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-1 ">

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24  space-y-2 order-2 md:order-1">
          <div className="flex space-x-1 text-xl md:text-4xl ">
            <h1 style={{ color: "#8F67D7" }}>Contact me</h1>
          </div>
          <form className='' onSubmit={(e) => { Submit(e) }} action="">
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



        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-24   order-1 h-1/2">
          <img className="rounded-2xl " src="/contact.png" alt="" />
        </div>
      </div>
    </div>

  )
}

export default Contact
