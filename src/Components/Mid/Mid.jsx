import React from "react";
import TopSide from "./TopSide";
import reactIcon from "../../assets/react-icon.svg";
import jsIcon from "../../assets/javascript-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import Tech from "./Tech";
import projImg from "../../assets/project.jpg";
import TaskProj from "../../assets/TaskManager.jpg";
import LittleTech from "./LittleTech";
import reduxIcon from "../../assets/redux-logo-svgrepo-com.svg";

const Mid = () => {
  return (
    <div className="w-full flex flex-col">
      <TopSide />
      <div className="w-full h-[30rem]  flex justify-center mt-[10%] lg:mt-0">
        <div className="w-[85%] h-full flex mt-[2%] lg:items-center ">
          <div className="w-full h-[60%] " style={{ paddingLeft: "1%" }}>
            <div className="w-full text-[2rem]">
              <h1 className="text-white">Tech Stack</h1>
            </div>
            <div
              className="flex flex-wrap justify-center lg:justify-start lg:flex-row gap-[2.65rem]"
              style={{ marginTop: "3.5%" }}
            >
              <Tech img={htmlIcon} content={"html"} />
              <Tech img={cssIcon} content={"css"} />
              <Tech img={jsIcon} content={"javascript"} />
              <Tech
                img={"https://www.stefantopalovic.com/typescript-icon.svg"}
                content={"typescript"}
              />
              <Tech
                img={
                  "https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png"
                }
                content={"Node JS"}
              />
              <Tech
                img={"https://icon.icepanel.io/Technology/svg/MongoDB.svg"}
                content={"MongoDB"}
              />
              <Tech
                img={
                  "https://icon.icepanel.io/Technology/png-shadow-512/Express.png"
                }
                content={"Express"}
              />
              <Tech img={reactIcon} content={"react"} />
              <Tech img={tailwindIcon} content={"tailwind css"} />
            </div>
          </div>
        </div>
      </div>
      {/* */}
      <div className="w-full h-[25rem] mb-[5%] flex justify-center items-center ">
        <div className="w-[85%] h-[80%]  pl-[1%]">
          <div className="w-full text-[2rem] text-white" id="About">
            About Me
          </div>
          <div className="w-full h-[85%] text-2xl lg:text-3xl p-3 border-l border-t">
            <p>
              Hi, I’m Andy — a passionate learner and builder who loves turning
              ideas into interactive experiences. My journey started with
              curiosity about how things work on the web, and it quickly grew
              into a focus on JavaScript, React, and modern web development.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full h-[46rem] flex justify-center items-center">
        <div className="w-[85%] h-[100%] pl-[1%]">
          <div className="w-full text-[2rem] text-white">
            <h1 id="Projects">Projects</h1>
          </div>
          <div className="w-full h-[90%] mt-[2%] flex justify-center">
            <div className="w-[90%] lg:w-[75%] h-full border rounded-2xl">
              <div className="w-full h-[60%] flex justify-center">
                <div
                  className="w-[90%] h-[85%] border bg-cover bg-center bg-origin-content mt-[3%]"
                  style={{ backgroundImage: `url(${projImg})` }}
                ></div>
              </div>
              <div className="w-full h-[40%]">
                <div className="w-full">
                  <h1 className="ml-[5%] lg:text-3xl text-blue-200">
                    zoomer clone
                  </h1>
                </div>
                <div className="w-full h-[45%] flex justify-center mb-[2rem] lg:mb-0">
                  <div className="w-[90%] h-full text-[14px] lg:text-[20.4px]">
                    A modern e-commerce clone project built to replicate the
                    experience of an online tech shop. The goal of this project
                    was to practice front-end development, UI/UX design, and
                    simulate real-world features of an e-commerce platform.
                  </div>
                </div>
                <div className="w-full h-[20%] lg:mt-[3%] flex justify-center">
                  <div className="w-[90%] h-full flex justify-center items-center gap-[5%]">
                    <LittleTech
                      img={reactIcon}
                      content={"react"}
                      bgColor={"#10203C"}
                    />
                    <LittleTech
                      img={tailwindIcon}
                      content={"tailwind"}
                      bgColor={"#1C2D3F"}
                    />
                    <LittleTech
                      img={reduxIcon}
                      content={"redux"}
                      bgColor={"#102242"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50rem] flex justify-center items-center">
        <div className="w-[85%] h-[100%] pl-[1%]">
          <div className="w-full h-[90%] mt-[2%] flex justify-center">
            <div className="w-[90%] lg:w-[75%] h-full border rounded-2xl">
              <div className="w-full h-[60%] flex justify-center">
                <div
                  className="w-[90%] h-[85%] border bg-cover bg-center bg-origin-content mt-[3%]"
                  style={{ backgroundImage: `url(${TaskProj})` }}
                ></div>
              </div>
              <div className="w-full h-[40%]">
                <div className="w-full">
                  <h1 className="ml-[5%] lg:text-3xl text-blue-200">
                    task manager
                  </h1>
                </div>
                <div className="w-full h-[45%] flex justify-center mb-[2rem] lg:mb-0">
                  <div className="w-[90%] h-full text-[14px] lg:text-[20.4px]">
                    A full-stack Task Manager application that allows users to
                    manage projects and tasks efficiently. Users can create
                    projects, add tasks within them, and perform full CRUD
                    operations. Built with React, Zustand, and Tailwind CSS on
                    the frontend, and Node.js, Express, and MongoDB on the
                    backend, following REST API principles. 
                  </div>
                </div>
                <div className="w-full h-[20%] lg:mt-[5%] flex justify-center">
                  <div className="w-[90%] h-full flex justify-center items-center gap-[5%]">
                    <LittleTech
                      img={reactIcon}
                      content={"react"}
                      bgColor={"#10203C"}
                    />
                    <LittleTech
                      img={
                        "https://icon.icepanel.io/Technology/png-shadow-512/Express.png"
                      }
                      content={"Express"}
                      bgColor={"#e0dace"}
                    />
                    <LittleTech
                      img={
                        "https://icon.icepanel.io/Technology/svg/MongoDB.svg"
                      }
                      content={"mongoDB"}
                      bgColor={"#946a22"}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center mt-[2vmin]">
                <a href="https://nimble-youtiao-ee33c2.netlify.app/">
                  <button className="w-[20vmin] p-1 text-[24px] text-amber-100 rounded-[8px] cursor-pointer bg-[#18b33913]">
                    see site
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
