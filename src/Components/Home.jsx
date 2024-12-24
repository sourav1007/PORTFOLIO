
import { IoMdDownload } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import resume from "/resume.pdf"


import { ReactTyped } from "react-typed";

function Home() {


  return (
    <>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 font-sans">

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <div className="flex space-x-1 text-white text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span >Developer</span> */}
              <ReactTyped style={{ color: "#516bfe" }}
                className=" font-bold"
                strings={[" Developer", " Programmer", " Coder", " Traveller",]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-base md:text-md font-sans  text-justify">
              I am an MCA graduate with a strong foundation in software development. I have hands-on experience in programming languages like C, C++, and Java, as well as web technologies such as HTML, CSS, JavaScript, and ReactJS. I am eager to apply my skills and contribute to the growth of a dynamic company.
            </p>
            <br />
            {/* social media icons */}
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
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Download my Resume</h1>
                <a href={resume} download="resume"  ><button className="btn btn-outline w-full hover:bg-green-500 hover:scale-105 duration-300 "><IoMdDownload className="text-2xl cursor-pointer" /></button></a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-0 mt-0 order-1">
            <img className="" src="/coder.jpg" alt="" />
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;