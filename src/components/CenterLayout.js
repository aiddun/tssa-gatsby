import React from "react";

const CenterLayout = ({ children }) => {
  return (
    <div className="flex h-full px-5 md:px ">
      <div className="lg:flex-grow"></div>
      <div className="w-full h-full max-w-screen-xl lg:mx-auto lg:flex-shrink">
        {children}
      </div>
      <div className="invisible lg:flex-grow"></div>
    </div>
  );
};

export default CenterLayout;
