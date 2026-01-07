import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-900">

      {/* LEFT CARD */}
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43]
  flex items-center justify-center transition-transform duration-500 hover:scale-[1.03]">

          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Ochi Logo"
          />
          <button className="absolute px-5 py-1 rounded-full text-lime-300 left-10 bottom-10 border-2">
            &copy; 2019 – 2022
          </button>
        </div>
      </div>

      {/* RIGHT CARDS */}
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">

        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#101111] transition-transform duration-500 hover:scale-[1.03]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Clutch Logo"
          />
          <button className="absolute px-5 py-1 rounded-full text-sm text-white  bottom-10 border-2 uppercase">
            Rating 5.0 on Clutch
          </button>
        </div>

        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#1f2222] transition-transform duration-500 hover:scale-[1.03]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Bootcamp Logo"
          />
          <button className="absolute px-5 py-1 rounded-full text-sm text-white  bottom-10 border-2 uppercase">
            Business Bootcamp Alumni
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cards;
