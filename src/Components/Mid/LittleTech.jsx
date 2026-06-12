import React from "react";

const LittleTech = ({img, content, bgColor, iconSize}) => {
  return (
    <div className={`w-[7.5rem] h-[2rem] border flex justify-center lg:justify-start rounded-[9px]`} style={{backgroundColor: bgColor}}>
      <img src={img} alt="" className={`w-[${iconSize || "25px"}] ml-0.5 lg:ml-[15%] mt-[1.5%]`} />
      <p className=" lg:ml-[5%] hidden lg:block lg:mt-[4%] text-[11px] lg:text-[1.1rem]">{content}</p>
    </div>
  );
};

export default LittleTech;
