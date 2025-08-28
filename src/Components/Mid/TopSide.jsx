import React from "react";
import myImg from "../../assets/MEE.jpg";
import linkedIn from "../../assets/linkedin-icon.svg";
import github from "../../assets/github-icon.svg";

const TopSide = () => {
  return (
    <div className="w-full h-[9rem] lg:h-[11.5rem] flex ">
      <div className="w-[35%] h-full flex lg:justify-center  items-end">
        <div
          className="w-[120px] lg:w-[11.5rem] h-[94%] shadow-[1px_1px_15px]  rounded-[50%] border bg-cover bg-center myImg"
          style={{ backgroundImage: `url(${myImg})` }}
        ></div>
      </div>
      <div className="w-[60%] relative h-full flex flex-col justify-end lg:justify-center items-center ">
        <div className="w-[13rem] text-end lg:text-center lg:w-[35rem] h-[70%]  text-[21px] lg:text-[2.5rem] ">
          <span className="text-[#FFFFFF]">Hi i'm andy elizbarashvili.</span>{" "}
          front-end developer, 15 years old.
        </div>
        <div className="w-full h-[20%] flex ml-[15%] ">
          <div className="w-[40%] h-full text-[11px] lg:text-[19px] mt-[0.5%] flex items-center">
            🏠 Tbilisi, Georgia
          </div>
          {/*  */}
          <div className="w-[50%]  h-full ml-[5%] lg:text-[18px] flex justify-end ">
            <div className="w-[65%] lg:w-[40%]  flex items-center">
              <img
                src={linkedIn}
                alt=""
                className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]"
              />
              <a
                href="https://www.linkedin.com/in/andy-elizbarashvilii-4b0b67343/"
                className="md:text-[15px] md:mb-[3%] text-[14px]  lg:text-[19px] lg:translate-y-[15%] hover:text-white "
              >
                Linked In
              </a>
            </div>

            <div className="w-[45%] flex items-center gap-1 ">
              <img
                src={github}
                alt=""
                className="w-[19px] h-[19px] lg:w-[26px] lg:h-[32px]"
              />
              <a
                href="https://github.com/AndrewEl131"
                className="hover:text-white "
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSide;
