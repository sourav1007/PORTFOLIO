import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-1 ">

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          <div className="flex space-x-1 text-xl md:text-4xl ">
            <h1 style={{ color: "#8F67D7" }}>About me</h1>
          </div>
          <p className=" md:text-md font-sans text-lg">
            Hello ! I'am Saurabh, an aspiring Software Developer with strong foundation in Computer Science.
            I was born and raised in Dehradun,Uttarakhand.Recently I've completed my Masters in Computer Applications from graphic era Hill University,Dehradun.Over the years, I have honed my skills in various programming languages and technologies.
            Outside of coding, I enjoy traveling and cooking, which often inspire my creative solutions and approaches to problem-solving.
          </p>
          <hr />
          <br />
          <div className="flex space-x-1 text-xl md:text-4xl">
            <h1 style={{ color: "#8F67D7" }} >Education</h1>
          </div>
          <ul className="list-disc ">
            <li>MASTER'S OF COMPUTER APPLICATION -2024</li>
            <p className="text-xs">Graphic Era Hill Uniiversity,Dehradun</p>
            <br />
            <li>BACHELOR OF SCIENCE-2018</li>
            <p className="text-xs">Hemvati Nandan Bahuguna garhwal University,Srinagar</p>
          </ul>
          <hr />
          <br />
          <div className="flex space-x-1 text-xl md:text-4xl">
            <h1 style={{ color: "#8F67D7" }}>Skills</h1>
          </div>
          <ul className=" font-sans list-disc">
            <li>COMMUNICATION: Ability to convey ideas clearly and effectively through both written and verbal communication.</li>
            <li>TEAMWORK: Experience in collaborating with others, contributing to group efforts, and working well in a team environment.</li>
            <li>PROBLEM-SOLVING: Skilled in identifying issues, analyzing problems, and developing innovative solutions.</li>
            <li>ADAPTABILITY: Ability to adjust to new situations, challenges, and changes in the work environment.</li>
            <li>TIME MANAGEMENT: Effective in organizing tasks, managing time efficiently, and meeting deadlines.</li>
            <li>INTERPERSONAL SKILLS: Strong ability to build and maintain relationships with colleagues and clients.</li>
          </ul>
          <hr />
          <br />
          <div className="flex  space-x-1 text-xl md:text-4xl">
            <h1 style={{ color: "#8F67D7" }}>Languages and Technologies</h1>
          </div>
          <br />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/html.png" alt="HTML" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/css.png" alt="CSS" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/js.png" alt="JavaScript" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/react.png" alt="React" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/node.png" alt="Node.js" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/mongo.png" alt="MongoDB" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/c.png" alt="C" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/c++.png" alt="C++" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/c#.png" alt="c#" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/vs.png" alt="Visual Studio" />
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/postman.png" alt="Postman" />
  <div className="w-16 h-16 hover:scale-150 duration-300 flex items-center justify-center">
    <SiExpress size={32} />
  </div>
  <img className="w-16 h-16 hover:scale-150 duration-300" src="/sql.png" alt="SQL" />
</div>

        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-24   order-1 h-1/2">
          <img className="rounded-2xl " src="/srv.jpg" alt="" />
        </div>
      </div>
    </div>

  );
}

export default About;