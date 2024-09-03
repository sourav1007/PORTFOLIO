import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      techUsed: "Reactjs,Tailwind css",
      description: "A personal portfolio website showcasing my projects and skills.",
      link:"https://portfolio-7gzfjhzn6-souravs-projects-0f0120b3.vercel.app",
      src:"/portfolio.png",
      code:"https://github.com/sourav1007/PORTFOLIO"
      
    },
    {
      id: 2,
      name: "Anime Quiz App",
      techUsed: "HTML,Css,JavaScript",
      description: "An Anime Themed Quizz App.",
      link:"https://sourav1007.github.io/QuizzApp/",
      src:"/quizz.png",
      code:"https://github.com/sourav1007/QuizzApp"
    },
    {
      id: 3,
      name: "CRUD App",
      techUsed: "HTML,Css,JavaScript",
      description: "A Simple CRUD Application Using Vanilla JavaScript,where user can Create,Read,Update Or Delete entry.",
      link:"https://sourav1007.github.io/CRUDHtmlCssJs/",
      src:"/crud.png",
      code:"https://github.com/sourav1007/CRUDHtmlCssJs"
    },
    {
      id: 4,
      name: "MERN CRUD App",
      techUsed: "MongoDB,Express js,React js,Node js",
      description: "A Simple CRUD Application Using MERN Stack Where user can Create,Read,Update Or Delete entry.",
      link:"https://sourav1007.github.io/QuizzApp/",
      src:"/image2.jpg",
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
