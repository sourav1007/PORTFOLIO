import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from "gsap"
import { Link } from 'react-router-dom'


function Navbar() {

  






    return (

        <div style={{color:"#9DA2E6"}} className=" font-sans navbar font-bold container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
            <div className=" pl-8 flex-1">
                <Link to="/" className=" hover:scale-110 duration-300 text-2xl">SAURABH RAWAT</Link>
            </div>
        
            <div  className="flex-none ">
                <ul  className="font-sans ul menu menu-horizontal text-base px-2 ">

                    <li className='hover:scale-110 duration-300 ' ><Link to="/About"> About</Link></li>

                    <li className='hover:scale-110 duration-300'><Link to="/Projects"> Projects</Link></li>
                   
                    <li className='hover:scale-110 duration-300'><Link to="/Contact"> Contact</Link></li>



                </ul>
            </div>
            
        </div>

    )
}

export default Navbar
