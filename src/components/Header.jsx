import React from "react";
import image from "../images/image-omelette.jpeg";
function Header() {
  return (
    <div className=" ">
      <div className=" flex items-center justify-center  p-5  rounded-md  shadow-lg">
        <img src={image} alt="" className=" w-[95%]  h-96" />
      </div>
      <div className=" mt-2">
        <h1 className=" font-bold text-4xl m-8 ">Simple Omelette Recipe </h1>
        <p className=" text-xl p-6">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    </div>
  );
}

export default Header;
