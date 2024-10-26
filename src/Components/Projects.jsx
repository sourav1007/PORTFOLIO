import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Dell Clone",
      techUsed: "HTML,CSS,JavaScript",
      description: "A Dell Clone Website, fully Resposible for all device sizes",
      link:"https://sourav1007.github.io/Dell_Clone/",
      src:"/dellclone.png",
      code:"https://github.com/sourav1007/Dell_Clone"
      
    },
    {
      id: 2,
      name: " CARA E-Commerce Website",
      techUsed: "HTML,CSS,JavaScript",
      description: "A Fully Responsive E-Commerce Website having multiple pages",
      link:"https://sourav1007.github.io/E-Commerce-Website/",
      src:"/ecommerce.png",
      code:"https://github.com/sourav1007/E-Commerce-Website"
      
    },
    {
      id: 3,
      name: "Portfolio Website",
      techUsed: "Reactjs,Tailwind css",
      description: "A personal portfolio website showcasing my projects and skills.",
      link:"https://portfolio-theta-nine-59.vercel.app/",
      src:"/portfolio.png",
      code:"https://github.com/sourav1007/PORTFOLIO"
      
    },
    {
      id: 4,
      name: "Anime Quiz App",
      techUsed: "HTML,Css,JavaScript",
      description: "An Anime Themed Quizz App.",
      link:"https://sourav1007.github.io/QuizzApp/",
      src:"/quizz.png",
      code:"https://github.com/sourav1007/QuizzApp"
    },
    {
      id: 5,
      name: "CRUD App",
      techUsed: "HTML,Css,JavaScript",
      description: "A Simple CRUD Application Using Vanilla JavaScript,where user can Create,Read,Update Or Delete entry.",
      link:"https://sourav1007.github.io/CRUDHtmlCssJs/",
      src:"/crud.png",
      code:"https://github.com/sourav1007/CRUDHtmlCssJs"
    },
    {
      id: 6,
      name: "MERN CRUD App",
      techUsed: "MongoDB,Express js,React js,Node js",
      description: "A Simple CRUD Application Using MERN Stack Where user can Create,Read,Update Or Delete entry.",
      link:"https://sourav1007.github.io/QuizzApp/",
      src:"",
      code:"https://github.com/sourav1007/MERN-CRUD"
    },
    
  ];

  return (
    
    <div className="flex flex-wrap gap-4 justify-center m-20">
      {projects.map((item) => (
       
        <article className="card card-compact bg-base-100 w-96 shadow-xl flex flex-wrap hover:scale-105 hover:bg-violet-400 hover:text-black duration-300" key={item.id}>
          <figure>
            <img src={item.src} className='p-6'/>
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-lg font-bold">{item.name}</h2>
            <h3 className="text-sm font-semibold">{item.techUsed}</h3>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
            <a href={item.code} target='_blank'  ><button className="btn btn-info">Code</button></a>
            <a href={item.link} target='_blank'  ><button className="btn btn-info">Open App</button></a>

            </div>
          </div>
        </article>
          
      ))}
    </div>
    
  );
}

export default Projects;
