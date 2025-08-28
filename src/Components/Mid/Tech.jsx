import React from "react";

const Tech = ({img, content}) => {
  return (
    <div className="w-[5rem] h-[5rem] lg:w-[8rem] lg:h-[7.5rem] border rounded-2xl transition-all duration-300 hover:bg-[#1B1F21] ">
      <div className="w-full h-[5rem] flex justify-center items-center transition-all duration-300 hover:-translate-y-1">
        <img src={img} alt="" className="w-[40%] lg:w-[38%]" />
      </div>
      <div className="w-full h-[1.8rem] lg:text-2xl text-center">{content}</div>
    </div>
  );
};

export default Tech;
