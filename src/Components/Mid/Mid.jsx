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
import quickChat from "../../assets/quickChat.jpg";
import aboutImg from "../../assets/undraw_indie-hacker-avatar_b3wy.svg";

const Mid = () => {
  return (
    <div className="w-full flex flex-col">
      <TopSide />
      <div className="w-full h-[auto] flex justify-center mt-[10%] lg:mt-0 py-[5%]">
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
      <div className="w-full h-[35rem] mb-[5%] flex justify-center items-center">
        <div className="w-[85%] h-[80%] pl-[1%]">
          <div className="w-full text-[2rem] text-white" id="About">
            About Me
          </div>
          <div className="w-full h-[70%] text-2xl lg:text-3xl p-5 border-l border-t">
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
      <h1 className="text-amber-50 text-4xl pl-[8%]">Projects</h1>
      <div className="w-full h-[60rem] flex justify-center items-center">
        <div className="w-full h-[100%] pl-[1%]">
          <div className="w-full h-[90%] mt-[2%] flex justify-center">
            <div className="w-[90%] lg:w-[75%] h-full border ">
              <div className="w-full h-[60%] flex justify-center">
                <div
                  className="w-[90%] h-[85%] border bg-cover bg-center bg-origin-content mt-[3%]"
                  style={{ backgroundImage: `url(${quickChat})` }}
                ></div>
              </div>
              <div className="w-full h-[40%]">
                <div className="w-full">
                  <h1 className="ml-[5%] lg:text-3xl text-blue-200">
                    realtime chat app
                  </h1>
                </div>
                <div className="w-full h-[40%] flex justify-center mb-[2rem] lg:mb-0">
                  <div className="w-[90%] h-full text-[14px] lg:text-[20.4px]">
                    A real-time chat application built with React + TypeScript
                    on the frontend and Node.js, Express, MongoDB on the
                    backend, using Socket.IO for instant messaging. It supports
                    user authentication with JWT, online/offline user status,
                    real-time text and image messages, unread message tracking,
                    and a clean, responsive chat interface.
                  </div>
                </div>
                <div className="w-full h-[20%]  flex justify-center">
                  <div className="w-[90%] h-full flex items-center gap-[5%]">
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
                    <LittleTech
                      img={
                        "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2389%2FPNG%2F512%2Fsocket_io_logo_icon_144874.png&id=144874&pack_or_individual=pack"
                      }
                      content={"Socket.io"}
                      bgColor={"#fff"}
                      iconSize={"21px"}
                    />
                  </div>
                </div>

                <div className="w-full flex pl-[5%] mt-5">
                  <a href="https://chat-app-six-theta-98.vercel.app">
                    <button className="w-38 py-1 text-[20px] text-amber-100 cursor-pointer bg-[#00000013] border border-amber-50 flex items-center px-4 gap-3.5 hover:bg-[#85727217] font-sans">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.88 18.36a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l2.83-2.83-1.41-1.41-2.83 2.83a5.003 5.003 0 0 0 0 7.07c.98.97 2.25 1.46 3.54 1.46s2.56-.49 3.54-1.46l2.83-2.83-1.41-1.41-2.83 2.83Zm2.83-14.14L9.88 7.05l1.41 1.41 2.83-2.83a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-2.83 2.83 1.41 1.41 2.83-2.83a5.003 5.003 0 0 0 0-7.07 5.003 5.003 0 0 0-7.07 0Z"></path>
                        <path d="m16.95 8.46-.71-.7-.7-.71-4.25 4.24-4.24 4.25.71.7.7.71 4.25-4.24z"></path>
                      </svg>
                      Explore
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[60rem] flex justify-center items-center">
        <div className="w-full h-[100%] pl-[1%]">
          <div className="w-full h-[90%] mt-[2%] flex justify-center">
            <div className="w-[90%] lg:w-[75%] h-full border ">
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
                <div className="w-full h-[40%] flex justify-center mb-[2rem] lg:mb-0">
                  <div className="w-[90%] h-full text-[14px] lg:text-[20.4px]">
                    A full-stack Task Manager application that allows users to
                    manage projects and tasks efficiently. Users can create
                    projects, add tasks within them, and perform full CRUD
                    operations. Built with React, Zustand, and Tailwind CSS on
                    the frontend, and Node.js, Express, and MongoDB on the
                    backend, following REST API principles.
                  </div>
                </div>
                <div className="w-full h-[20%]  flex justify-center">
                  <div className="w-[90%] h-full flex items-center gap-[5%]">
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

                <div className="w-full flex pl-[5%] mt-5">
                  <a href="https://nimble-youtiao-ee33c2.netlify.app/">
                    <button className="w-38 py-1 text-[20px] text-amber-100 cursor-pointer bg-[#00000013] border border-amber-50 flex items-center px-4 gap-3.5 hover:bg-[#85727217] font-sans">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.88 18.36a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l2.83-2.83-1.41-1.41-2.83 2.83a5.003 5.003 0 0 0 0 7.07c.98.97 2.25 1.46 3.54 1.46s2.56-.49 3.54-1.46l2.83-2.83-1.41-1.41-2.83 2.83Zm2.83-14.14L9.88 7.05l1.41 1.41 2.83-2.83a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-2.83 2.83 1.41 1.41 2.83-2.83a5.003 5.003 0 0 0 0-7.07 5.003 5.003 0 0 0-7.07 0Z"></path>
                        <path d="m16.95 8.46-.71-.7-.7-.71-4.25 4.24-4.24 4.25.71.7.7.71 4.25-4.24z"></path>
                      </svg>
                      Explore
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
