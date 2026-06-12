import React from "react";

const MenuItem = ({content, link}) => {
  return (
    <div className="w-[25%] h-full flex justify-center items-center hover:text-white z-50">
      <a href={link} className="text-[2rem]">
        {content}
      </a>
    </div>
  );
};

export default MenuItem;
